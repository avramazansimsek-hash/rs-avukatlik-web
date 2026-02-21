// generate_laws_with_ai.mjs
import fs from 'fs';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

// Bu scripti çalıştırmadan önce Google Gemini API key'inizi ".env" dosyasına GEMINI_API_KEY olarak eklemelisiniz.
// Ücretsiz API key almak için: https://aistudio.google.com/app/apikey

const TARGET_LAWS = [
    { short: "tck", name: "Türk Ceza Kanunu" },
    { short: "cmk", name: "Ceza Muhakemesi Kanunu" },
    // Diğer kanunları buraya ekleyebilirsiniz, test amaçlı ilk 2'sini aktif bıraktım
    // { short: "hmk", name: "Hukuk Muhakemeleri Kanunu" },
    // { short: "tmk", name: "Türk Medeni Kanunu" },
    // { short: "tbk", name: "Türk Borçlar Kanunu" },
    // { short: "avukatlik", name: "Avukatlık Kanunu" },
    // { short: "iik", name: "İcra ve İflas Kanunu" },
    // { short: "ttk", name: "Türk Ticaret Kanunu" },
    // { short: "is_kanunu", name: "İş Kanunu" },
    // { short: "iyuk", name: "İdari Yargılama Usulü Kanunu" },
    // { short: "ktk", name: "Karayolları Trafik Kanunu" },
    // { short: "tkhk", name: "Tüketicinin Korunması Hakkında Kanun" },
    // { short: "danistay", name: "Danıştay Kanunu" },
    // { short: "yargitay", name: "Yargıtay Kanunu" },
    // { short: "kvkk", name: "Kişisel Verilerin Korunması Kanunu" },
];

const RAW_DIR = path.join(process.cwd(), 'raw_laws');
const OUTPUT_DIR = path.join(process.cwd(), 'src', 'content', 'kanunlar');

// API limits: Gemini 1.5 Flash is 15 RPM for free tier. We must delay between requests.
const DELAY_BETWEEN_REQUESTS_MS = 4000;

if (!process.env.GEMINI_API_KEY) {
    console.error("HATA: .env dosyasında GEMINI_API_KEY bulunamadı!");
    console.log("Lütfen https://aistudio.google.com/app/apikey adresinden ücretsiz key alıp .env dosyasına ekleyin.");
    process.exit(1);
}

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function generateCommentary(kanunName, maddeNo, maddeMetni) {
    const prompt = `
Sen Türkiye'nin İstanbul ilinde ofisi bulunan RS Avukatlık bürosunun kurucusu Avukat Ramazan Şimşek'sin. 
Aşağıda verilen "${kanunName}" (Kanun) "Madde ${maddeNo}" metnini incele.

Madde Metni:
"""
${maddeMetni}
"""

GÖREVİN: 
1. Bu maddenin hukuki gerekçesini, amacını ve vatandaşların bilmesi gereken riskleri açıkla.
2. Tamamen özgün, SEO uyumlu ve "Avukat Ramazan Şimşek'in Değerlendirmesi" başlığıyla yaz.
3. İçerikte mutlaka "İstanbul, RS Avukatlık, Av. Ramazan Şimşek, ceza avukatı (veya ilgili branş), hukuki danışmanlık" gibi SEO anahtar kelimelerini doğal bir şekilde geçir.
4. Çıktıyı SADECE Markdown (MD) formatında ver. 
5. Hiçbir HTML div veya call to action butonu EKLEME.

Beklenen Çıktı Formatı (Örnek):
## Avukat Ramazan Şimşek'in Değerlendirmesi

[Buraya maddenin hukuki analizini, gerekçesini ve vatandaşa tavsiyeleri yaz]

**Not:** Bu kanun maddesi hakkında profesyonel hukuki destek almak veya dava süreçlerinizi yönetmek için İstanbul'da bulunan RS Avukatlık bürosu ile iletişime geçebilirsiniz.
`;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-1.5-flash',
            contents: prompt,
        });
        return response.text;
    } catch (error) {
        console.error(`Gemini API Error for Madde ${maddeNo}:`, error.message);
        return null; // Return null if failed so we can skip/retry
    }
}

async function processLaws() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    for (const law of TARGET_LAWS) {
        const jsonPath = path.join(RAW_DIR, `${law.short}_articles.json`);
        if (!fs.existsSync(jsonPath)) continue;

        console.log(`\n==========================================`);
        console.log(`Processing ${law.name}...`);

        const articles = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

        // Sadece test için ilk 3 maddeyi işleyelim ki API limitine takılmayalım
        // Tüm kanunu işlemek için `.slice(0, 3)` kısmını silin.
        const articlesToProcess = articles.slice(0, 3);

        for (let i = 0; i < articlesToProcess.length; i++) {
            const article = articlesToProcess[i];
            const cleanMadde = article.madde.replace(/[^0-9A-ZÇĞİÖŞÜa-zçğıöşü]/g, '').trim().toLowerCase();
            const slug = `${law.short}-madde-${cleanMadde}`;
            const targetFilePath = path.join(OUTPUT_DIR, `${slug}.md`);

            // Eğer Markdown dosyası zaten oluşturulmuşsa atla
            if (fs.existsSync(targetFilePath)) {
                console.log(`[SKIPPED] ${slug}.md zaten var.`);
                continue;
            }

            console.log(`[GENERATING] ${law.name} Madde ${article.madde} yorumlanıyor... (${i + 1}/${articlesToProcess.length})`);

            const aiCommentary = await generateCommentary(law.name, article.madde, article.text);

            if (aiCommentary) {
                const date = new Date().toISOString().split('T')[0];
                const excerpt = `${law.name} Madde ${article.madde} tam metni, gerekçesi ve Av. Ramazan Şimşek'in hukuki incelemesi. İstanbul RS Avukatlık.`;

                const frontmatter = `---
slug: "${slug}"
title: "${law.short.toUpperCase()} Madde ${article.madde}: ${article.text.split('\\n')[0].replace(/"/g, '\\"').substring(0, 80)}..."
category: "${law.name}"
date: "${date}"
excerpt: "${excerpt}"
---
`;

                const content = `
# ${law.name} (${law.short.toUpperCase()}) Madde ${article.madde}

## Kanun Metni

\`\`\`text
${article.text}
\`\`\`

${aiCommentary}
`;

                fs.writeFileSync(targetFilePath, frontmatter + content, 'utf-8');
                console.log(`[SUCCESS] Saved ${slug}.md`);
            }

            // Google Gemini API limitlerine (15 RPM) takılmamak için 4 saniye bekle
            console.log("Waiting 4 seconds for rate limits...");
            await sleep(DELAY_BETWEEN_REQUESTS_MS);
        }
    }

    console.log("Tüm işlemler tamamlandı! Artık 'npm run dev' yaparak sonuçları görebilirsiniz.");
}

processLaws();
