import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';

async function fetchTck() {
    try {
        console.log("Fetching TCK from Mevzuat...");
        const response = await axios.get('https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=5237&MevzuatTur=1&MevzuatTertip=5', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });

        const $ = cheerio.load(response.data);

        // Let's try to extract text from the main container
        const text = $('body').text();
        fs.writeFileSync('tck_raw_mevzuat.txt', text, 'utf-8');

        console.log("Length:", text.length, "Saved to tck_raw_mevzuat.txt");

        // Find occurences of Madde X
        const matches = text.match(/Madde\s+(\d+)\s*-\s*(.*?)(?=\n|Madde|$)/g);
        if (matches) {
            console.log("Found", matches.length, "articles from text.");
            console.log(matches.slice(0, 5));
        } else {
            console.log("Regex didn't match.");
        }

    } catch (err) {
        console.log("Error:", err.message);
    }
}

fetchTck();
