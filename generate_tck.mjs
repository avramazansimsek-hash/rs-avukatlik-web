import fs from 'fs';
import path from 'path';

// Load articles
const articlesRaw = fs.readFileSync('tck_articles.json', 'utf-8');
const articles = JSON.parse(articlesRaw);

const outputDir = path.join(process.cwd(), 'src', 'content', 'kanunlar');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function generateSeoCommentary(maddeNo) {
  return `
## Avukat Ramazan Şimşek'in TCK Madde ${maddeNo} Değerlendirmesi

Türk Ceza Kanunu'nun ${maddeNo}. maddesinde düzenlenen suç tipi, bireylerin özgürlükleri ve temel hakları açısından kritik sonuçlar doğurabilecek niteliktedir. Bu madde kapsamında yürütülecek soruşturma ve kovuşturma süreçleri, teknik hukuki bilgi ve titiz bir savunma gerektirir. 

Suçun maddi ve manevi unsurlarının doğru tespit edilmesi, mahkeme sürecinde lehinize olabilecek tüm delillerin profesyonelce toplanması ve sunulması en temel haktır. Hatalı ifadeler veya usul hataları, telafisi güç cezalara yol açabilir. Bu nedenle ceza hukuku süreçlerinde uzman bir müdafi (avukat) desteği almak hayati öneme sahiptir.

Ceza davalarıyla ilgili profesyonel destek almak, süreci en güvenilir şekilde yönetmek için **RS Avukatlık** ve **Av. Ramazan Şimşek** ile iletişime geçebilirsiniz.
`;
}

let count = 0;
for (const article of articles) {
  const { madde, text } = article;
  if (!madde || !text) continue;

  // Normalize madde number for slug
  const cleanMadde = madde.replace(/[^0-9A-ZÇĞİÖŞÜa-zçğıöşü]/g, '').trim().toLowerCase();
  if (!cleanMadde) continue;

  const slug = `tck-madde-${cleanMadde}`;
  const date = new Date().toISOString().split('T')[0];

  const frontmatter = `---
slug: "${slug}"
title: "TCK Madde ${madde}: ${text.split('\\n')[0].replace(/"/g, '\\"').substring(0, 100)}..."
category: "Türk Ceza Kanunu"
date: "${date}"
excerpt: "5237 Sayılı Türk Ceza Kanunu Madde ${madde} tam metni, açıklaması ve Avukat Ramazan Şimşek hukuki değerlendirmesi."
---
`;

  const content = `
# Türk Ceza Kanunu (TCK) Madde ${madde}

Madde metni aşağıda resmi olarak yayınlandığı haliyle sunulmaktadır. Hukuki terimlerin detaylı açıklamaları ve olası ceza yargılamasındaki etkileri için sayfanın altındaki avukat değerlendirmesini inceleyebilirsiniz.

## Kanun Metni

\`\`\`text
${text}
\`\`\`

${generateSeoCommentary(madde)}
`;

  fs.writeFileSync(path.join(outputDir, `${slug}.md`), frontmatter + content, 'utf-8');
  count++;
}

console.log(`Successfully generated ${count} TCK articles in ${outputDir}.`);
