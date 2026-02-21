import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const TARGET_LAWS = [
    { short: "tck", no: "5237", tertip: "5", name: "Türk Ceza Kanunu" },
    { short: "cmk", no: "5271", tertip: "5", name: "Ceza Muhakemesi Kanunu" },
    { short: "hmk", no: "6100", tertip: "5", name: "Hukuk Muhakemeleri Kanunu" },
    { short: "tmk", no: "4721", tertip: "5", name: "Türk Medeni Kanunu" },
    { short: "tbk", no: "6098", tertip: "5", name: "Türk Borçlar Kanunu" },
    { short: "avukatlik", no: "1136", tertip: "5", name: "Avukatlık Kanunu" },
    { short: "iik", no: "2004", tertip: "3", name: "İcra ve İflas Kanunu" },
    { short: "ttk", no: "6102", tertip: "5", name: "Türk Ticaret Kanunu" },
    { short: "is_kanunu", no: "4857", tertip: "5", name: "İş Kanunu" },
    { short: "iyuk", no: "2577", tertip: "5", name: "İdari Yargılama Usulü Kanunu" },
    { short: "ktk", no: "2918", tertip: "5", name: "Karayolları Trafik Kanunu" },
    { short: "tkhk", no: "6502", tertip: "5", name: "Tüketicinin Korunması Hakkında Kanun" },
    { short: "anayasa", no: "2709", tertip: "5", name: "Türkiye Cumhuriyeti Anayasası" },
    { short: "kabahatler", no: "5326", tertip: "5", name: "Kabahatler Kanunu" },
    { short: "kvkk", no: "6698", tertip: "5", name: "Kişisel Verilerin Korunması Kanunu" },
];

const OUTPUT_DIR = path.join(process.cwd(), 'raw_laws');

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function scrapeAllLaws() {
    console.log("Launching browser for 15 laws...");
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    let totalArticlesScraped = 0;

    for (const law of TARGET_LAWS) {
        console.log(`\n==========================================`);
        console.log(`Navigating to ${law.name} (${law.short})...`);
        const url = `https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=${law.no}&MevzuatTur=1&MevzuatTertip=${law.tertip}`;

        try {
            await page.goto(url, { waitUntil: 'load', timeout: 90000 });
            console.log("Page loaded. Extracting text...");

            // Wait a bit to ensure potential iframes load
            await new Promise(resolve => setTimeout(resolve, 3000));

            let rawText = '';
            const iframeElement = await page.$('#mevzuatDetayIframe');
            if (iframeElement) {
                console.log("Found iframe, switching context...");
                const frame = await iframeElement.contentFrame();
                rawText = await frame.evaluate(() => document.body.innerText);
            } else {
                console.log("No iframe found, extracting from body...");
                rawText = await page.evaluate(() => document.body.innerText);
            }

            fs.writeFileSync(path.join(OUTPUT_DIR, `${law.short}_raw.txt`), rawText, 'utf-8');
            console.log(`Extracted raw text length for ${law.short}: ${rawText.length}`);

            // Parse articles
            // regex to find "Madde 1 -" or "Madde 1-" or "Madde 1 - (1)" 
            // In Turkish law, "Madde [Number]" followed by dash or newline marks a new article.
            // Using a slightly more robust regex to catch different formats.
            const matches = rawText.match(/Madde\s+(\d+[A-Za-z]?)\s*[\-\–\n]\s*(.*?)(?=Madde\s+\d+[A-Za-z]?\s*[\-\–\n]|$)/gs);

            if (matches) {
                console.log(`Successfully parsed ${matches.length} articles for ${law.short}!`);

                const jsonArray = [];
                for (const articleText of matches) {
                    const cleanText = articleText.trim();
                    const headerMatch = cleanText.match(/Madde\s+(\d+[A-Za-z]?)/);
                    if (headerMatch) {
                        const maddeNo = headerMatch[1];
                        jsonArray.push({
                            kanun: law.short,
                            kanunName: law.name,
                            madde: maddeNo,
                            text: cleanText
                        });
                    }
                }

                fs.writeFileSync(
                    path.join(OUTPUT_DIR, `${law.short}_articles.json`),
                    JSON.stringify(jsonArray, null, 2)
                );
                console.log(`Saved structured JSON for ${law.short}`);
                totalArticlesScraped += jsonArray.length;
            } else {
                console.log(`REGEX FAILED TO MATCH ARTICLES FOR ${law.short}.`);
            }
        } catch (error) {
            console.error(`Error scraping ${law.short}:`, error);
        }
    }

    console.log(`\n==========================================`);
    console.log(`SCRAPING FINISHED.`);
    console.log(`Total Articles Extracted across 15 laws: ${totalArticlesScraped}`);
    await browser.close();
}

scrapeAllLaws();
