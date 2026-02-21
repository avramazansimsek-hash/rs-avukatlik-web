import fs from 'fs';
import path from 'path';

const TARGET_LAWS = [
    { short: "tck", name: "Türk Ceza Kanunu" },
    { short: "cmk", name: "Ceza Muhakemesi Kanunu" },
    { short: "hmk", name: "Hukuk Muhakemeleri Kanunu" },
    { short: "tmk", name: "Türk Medeni Kanunu" },
    { short: "tbk", name: "Türk Borçlar Kanunu" },
    { short: "avukatlik", name: "Avukatlık Kanunu" },
    { short: "iik", name: "İcra ve İflas Kanunu" },
    { short: "ttk", name: "Türk Ticaret Kanunu" },
    { short: "is_kanunu", name: "İş Kanunu" },
    { short: "iyuk", name: "İdari Yargılama Usulü Kanunu" },
    { short: "ktk", name: "Karayolları Trafik Kanunu" },
    { short: "tkhk", name: "Tüketicinin Korunması Hakkında Kanun" },
    { short: "danistay", name: "Danıştay Kanunu" },
    { short: "yargitay", name: "Yargıtay Kanunu" },
    { short: "kvkk", name: "Kişisel Verilerin Korunması Kanunu" },
];

const OUTPUT_DIR = path.join(process.cwd(), 'raw_laws');

let totalArticles = 0;

for (const law of TARGET_LAWS) {
    const rawFile = path.join(OUTPUT_DIR, `${law.short}_raw.txt`);
    if (fs.existsSync(rawFile)) {
        const rawText = fs.readFileSync(rawFile, 'utf-8');

        // Added 'i' flag to make Madde/MADDE case-insensitive
        const matches = rawText.match(/MADDE\s+(\d+[A-Za-z]?)\s*[\-\–\n]\s*(.*?)(?=MADDE\s+\d+[A-Za-z]?\s*[\-\–\n]|$)/gsi);

        if (matches) {
            const jsonArray = [];
            for (const articleText of matches) {
                const cleanText = articleText.trim();
                const headerMatch = cleanText.match(/MADDE\s+(\d+[A-Za-z]?)/i);
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
            console.log(`Re-parsed ${jsonArray.length} articles for ${law.short}`);
            totalArticles += jsonArray.length;
        } else {
            console.log(`Still FAILED TO MATCH ARTICLES FOR ${law.short}`);
        }
    }
}

console.log(`Total Articles correctly parsed: ${totalArticles}`);
