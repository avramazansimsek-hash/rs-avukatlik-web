const axios = require('axios');
const fs = require('fs');
const pdf = require('pdf-parse');

async function processPdf() {
    try {
        console.log("Downloading PDF...");
        const response = await axios.get('https://medya.barobirlik.org.tr/tbbkitaplari/TBBBooks/528.pdf', {
            responseType: 'arraybuffer',
            headers: {
                'User-Agent': 'Mozilla/5.0'
            }
        });

        console.log("Parsing PDF...");
        const data = await pdf(response.data);
        const text = data.text;

        fs.writeFileSync('tck_raw_text.txt', text, 'utf-8');
        console.log("PDF length:", text.length, "Saved to tck_raw_text.txt");

        const previewMatch = text.match(/Madde \d+/g);
        if (previewMatch) {
            console.log("Found article headers format example:");
            console.log(previewMatch.slice(0, 10));
        } else {
            console.log("Could not find article headers with basic match.");
        }

    } catch (error) {
        console.error("Error:", error.message);
    }
}

processPdf();
