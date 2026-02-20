import axios from 'axios';
import fs from 'fs';
import path from 'path';

async function generateTck() {
    try {
        console.log("Downloading TCK JSON...");
        const response = await axios.get('https://raw.githubusercontent.com/aligoren/turk-ceza-kanunu-api/master/data/tck.json');

        const articles = response.data;
        console.log(`Found ${articles.length} articles.`);

        if (articles.length > 0) {
            console.log("Sample article:", articles[0]);
        }
    } catch (error) {
        console.error("Error:", error.message);
    }
}

generateTck();
