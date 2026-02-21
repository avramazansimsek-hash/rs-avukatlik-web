// generate_laws_basic.mjs
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

const RAW_DIR = path.join(process.cwd(), 'raw_laws');
const OUTPUT_DIR = path.join(process.cwd(), 'src', 'content', 'kanunlar');

function generateBasicCommentary(kanunName, maddeNo) {
    return `
## Avukat Ramazan Şimşek'in Değerlendirmesi

${kanunName} Madde ${maddeNo} kapsamında hukuki sürecinizin doğru, hızlı ve güvenilir bir şekilde yönetilmesi hukuki hak kaybı yaşamamanız için hayati öneme sahiptir. Kanun maddesinin detayları ve mahkeme heyeti üzerindeki etkileri davanın seyrini değiştirebilir.

**Not:** Bu kanun maddesi hakkında profesyonel hukuki destek almak veya dava süreçlerinizi yönetmek için İstanbul'da bulunan RS Avukatlık bürosu ile iletişime geçebilirsiniz. Uzman avukat kadromuzla sürecinizi en iyi şekilde takip ediyoruz.
`;
}

async function processLaws() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    let count = 0;

    for (const law of TARGET_LAWS) {
        const jsonPath = path.join(RAW_DIR, `${law.short}_articles.json`);
        if (!fs.existsSync(jsonPath)) continue;

        console.log(`Processing ${law.name}...`);
        const articles = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

        for (let i = 0; i < articles.length; i++) {
            const article = articles[i];
            const cleanMadde = article.madde.replace(/[^0-9A-ZÇĞİÖŞÜa-zçğıöşü]/g, '').trim().toLowerCase();
            const slug = `${law.short}-madde-${cleanMadde}`;
            const targetFilePath = path.join(OUTPUT_DIR, `${slug}.md`);

            const aiCommentary = generateBasicCommentary(law.name, article.madde);

            // Create frontmatter safely
            const date = new Date().toISOString().split('T')[0];
            const excerpt = `${law.name} Madde ${article.madde} tam metni, gerekçesi ve Av. Ramazan Şimşek'in hukuki incelemesi. İstanbul RS Avukatlık.`;

            // Clean up title to not break yaml
            let titleText = article.text.split('\n')[0].replace(/"/g, '\\"').replace(/\n/g, ' ');
            titleText = titleText.substring(0, 80).trim();

            const frontmatter = "---\n" +
                "slug: \"" + slug + "\"\n" +
                "title: \"" + law.short.toUpperCase() + " Madde " + article.madde + ": " + titleText + "...\"\n" +
                "category: \"" + law.name + "\"\n" +
                "date: \"" + date + "\"\n" +
                "excerpt: \"" + excerpt + "\"\n" +
                "---\n";

            const content = "\n# " + law.name + " (" + law.short.toUpperCase() + ") Madde " + article.madde + "\n\n" +
                "## Kanun Metni\n\n" +
                "```text\n" +
                article.text + "\n" +
                "```\n\n" +
                aiCommentary + "\n";

            fs.writeFileSync(targetFilePath, frontmatter + content, 'utf-8');
            count++;
        }
    }

    console.log(`Tüm işlemler tamamlandı! Toplam ${count} adet madde dosyası oluşturuldu.`);
}

processLaws();
