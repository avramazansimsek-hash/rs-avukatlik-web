const fs = require('fs');

const rawText = fs.readFileSync('raw_laws/hmk_raw.txt', 'utf-8');
const regex = /(?:^|\n)\s*Madde\s+(\d+[A-Za-z]?)\s*[\-\–\n]\s*(.*?)(?=(?:^|\n)\s*Madde\s+\d+[A-Za-z]?\s*[\-\–\n]|$)/gsi;

const matches = rawText.match(regex);
console.log(`Found ${matches ? matches.length : 0} matches in HMK`);

if (matches && matches.length > 0) {
    console.log("First match snippet:", matches[0].substring(0, 150));
    console.log("\nSecond match snippet:", matches[1].substring(0, 150));
    console.log("\nLast match snippet:", matches[matches.length - 1].substring(0, 150));
}
