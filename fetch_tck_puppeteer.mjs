import puppeteer from 'puppeteer';
import fs from 'fs';

async function scrapeTck() {
    console.log("Launching browser...");
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    console.log("Navigating to mevzuat.gov.tr...");
    try {
        await page.goto('https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=5237&MevzuatTur=1&MevzuatTertip=5', {
            waitUntil: 'networkidle0',
            timeout: 60000
        });

        console.log("Page loaded. Extracting text...");

        let rawText = '';

        // Wait for potential iframe
        const iframeElement = await page.$('#mevzuatDetayIframe');
        if (iframeElement) {
            console.log("Found iframe, switching context...");
            const frame = await iframeElement.contentFrame();
            rawText = await frame.evaluate(() => document.body.innerText);
        } else {
            console.log("No iframe found, extracting from body...");
            rawText = await page.evaluate(() => document.body.innerText);
        }

        fs.writeFileSync('tck_raw_puppeteer.txt', rawText, 'utf-8');
        console.log("Extracted text length:", rawText.length, "- Saved to tck_raw_puppeteer.txt");

        const matches = rawText.match(/Madde\s+(\d+)\s*[\-\–]\s*(.*?)(?=Madde\s+\d+\s*[\-\–]|$)/gs);
        if (matches) {
            console.log(`Successfully parsed ${matches.length} articles!`);
            console.log(matches.slice(0, 3).map(m => m.substring(0, 100) + '...'));

            // Build JSON output for later use.
            const tckJson = [];
            for (const articleText of matches) {
                // simple extraction
                const headerMatch = articleText.match(/Madde\s+(\d+)\s*[\-\–]\s*\(\d+\)?\s*(.*)/);
                if (headerMatch) {
                    const maddeNo = headerMatch[1];
                    const text = articleText;
                    tckJson.push({ madde: maddeNo, text: text.trim() });
                } else {
                    // Fallback
                    const match2 = articleText.match(/Madde\s+(\d+)(.*)/s);
                    if (match2) {
                        tckJson.push({ madde: match2[1], text: articleText.trim() });
                    }
                }
            }
            fs.writeFileSync('tck_articles.json', JSON.stringify(tckJson, null, 2));
            console.log("Saved structured JSON to tck_articles.json");
        } else {
            console.log("REGEX FAILED TO MATCH ARTICLES.");
        }

    } catch (error) {
        console.error("Error:", error);
    } finally {
        await browser.close();
    }
}

scrapeTck();
