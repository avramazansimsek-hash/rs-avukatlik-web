import fs from 'fs';
import path from 'path';

const topics = [
    { cat: "Aile Hukuku", suffixes: ["Boşanma Davası Dilekçesi", "Velayet Davası Dilekçesi", "Nafaka Artırım Dilekçesi", "Nafaka İndirim Dilekçesi", "Anlaşmalı Boşanma Protokolü", "Maddi ve Manevi Tazminat Dilekçesi", "Uzaklaştırma Kararı Talebi", "Mal Rejimi Tasfiyesi Dilekçesi", "İddet Müddeti Kaldırılması Dilekçesi", "Çocukla Kişisel İlişki Kurulması Talebi", "Ziynet Alacağı Davası Dilekçesi", "Boşanmada Kusur İtiraz Dilekçesi"] },
    { cat: "Ceza Hukuku", suffixes: ["Savunma Dilekçesi", "Şikayet Dilekçesi", "Tahliye Talepli Dilekçe", "HAGB İtiraz Dilekçesi", "Temyiz Dilekçesi", "İstinaf Dilekçesi", "Bilirkişi Raporuna İtiraz Dilekçesi", "Tutukluluğa İtiraz Dilekçesi", "Adli Kontrol İtiraz Dilekçesi", "Suç Duyurusu Dilekçesi", "Gözaltı Süresi Uzatımına İtiraz", "Beraat Talepli Esasa İlişkin Savunma", "Kovuşturmaya Yer Olmadığı Kararına (KYOK) İtiraz Dilekçesi", "Hapis Cezasının Ertelenmesi Talebi", "Adli Para Cezasına Çevirme Talebi"] },
    { cat: "İcra Hukuku", suffixes: ["İlamsız İcra Takibi", "Menfi Tespit Davası Dilekçesi", "İstihkak Davası Dilekçesi", "İcra Takibine İtiraz Dilekçesi", "İhtiyati Haciz Talebi Dilekçesi", "İhalenin Feshi Davası Dilekçesi", "Maaş Haczi Müzekkeresi Talebi", "Haczedilemezlik Şikayeti Dilekçesi", "İmzaya İtiraz Dilekçesi", "Borca İtiraz Dilekçesi", "Konut Haczi İtiraz Dilekçesi", "Kıymet Takdirine İtiraz Dilekçesi", "İstirdat Davası Dilekçesi"] },
    { cat: "İş Hukuku", suffixes: ["Kıdem Tazminatı Dava Dilekçesi", "İhbar Tazminatı Dava Dilekçesi", "İşe İade Dava Dilekçesi", "Fazla Mesai Ücreti Dava Dilekçesi", "İş Kazası Maddi Manevi Tazminat Dilekçesi", "Hizmet Tespiti Dava Dilekçesi", "Haklı Fesih İhtarnamesi", "UBGT Alacağı Dava Dilekçesi", "Yıllık İzin Ücreti Alacağı Dilekçesi", "Asgari Geçim İndirimi Alacağı Dilekçesi", "Mobbing Nedeniyle Fesih ve Tazminat", "Greve Çıkış İhtarnamesi"] },
    { cat: "Ticaret Hukuku", suffixes: ["Şirket Kuruluş Sözleşmesi", "Genel Kurul Karar İptali Davası Dilekçesi", "Haksız Rekabet Dava Dilekçesi", "Ticari Alacak Davası Dilekçesi", "Çek İptali ve İstirdat Davası Dilekçesi", "Konkordato Talep Dilekçesi", "Ortaklıktan Çıkarma Davası Dilekçesi", "Menkul Kıymet İhracı İtiraz", "Marka Hakkına Tecavüzün Men'i ve Tazminat"] },
    { cat: "İdare ve Vergi Hukuku", suffixes: ["İptal Davası Dilekçesi", "Tam Yargı Davası Dilekçesi", "Memuriyetten İhraç İptal Davası", "Disiplin Cezası İptal Davası", "Gümrük Cezasına İtiraz Dilekçesi", "Vergi Cezası İptal Dilekçesi", "İmar Planı İptal Davası Dilekçesi", "Kamulaştırma Kararının İptali", "Atama İşleminin İptali Davası", "Görevden Uzaklaştırma Kararına İtiraz"] },
    { cat: "Miras Hukuku", suffixes: ["Veraset İlamı Talep Dilekçesi", "Mirasın Reddi Dilekçesi", "Tenkis Davası Dilekçesi", "Muris Muvazaası Nedeniyle Tapu İptal Dilekçesi", "Vasiyetnamenin İptali Davası Dilekçesi", "Ortaklığın Giderilmesi (İzale-i Şüyu) Dilekçesi", "Miras Sözleşmesi", "Mirasçılık Belgesinin İptali Dilekçesi"] },
    { cat: "Gayrimenkul Hukuku", suffixes: ["Tahliye Davası Dilekçesi", "Kira Tespit Davası Dilekçesi", "Müdahalenin Men'i ve Ecrimisil Davası Dilekçesi", "Şufa (Önalım) Davası Dilekçesi", "Tapu İptal ve Tescil Davası Dilekçesi", "Ortaklığın Giderilmesi Davası Dilekçesi", "Kamulaştırma Bedelinin Tespiti Davası Dilekçesi", "Kira Uyarlama Davası Dilekçesi", "Aidat Borcu Nedeniyle İcra Takibi"] },
    { cat: "Tüketici Hukuku", suffixes: ["Tüketici Hakem Heyeti Başvuru Dilekçesi", "Ayıplı Mal Bedel İadesi Dava Dilekçesi", "Sözleşmeden Dönme Dava Dilekçesi", "Kredi Dosya Masrafı İadesi Dilekçesi", "Devremülk Sözleşmesi İptali Dilekçesi", "Paket Tur Sözleşmesi Feshi Dilekçesi", "Özel Okul Ücret İadesi Talebi"] },
    { cat: "Bilişim Hukuku", suffixes: ["İnternetten İçerik Kaldırma Talebi", "Erişimin Engellenmesi Talebi Dilekçesi", "Kişisel Verilerin Korunması Şikayet Dilekçesi", "Bilişim Sistemlerine Girme Şikayet Dilekçesi", "Banka ve Kredi Kartının Kötüye Kullanılması Şikayet Dilekçesi", "Unutulma Hakkı Başvuru Dilekçesi", "Sosyal Medya Hesabının Çalınması Şikayet Dilekçesi"] },
];

function generateSlug(str) {
    return str.toLowerCase().replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's').replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c').replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').trim('-');
}

const dir = path.join(process.cwd(), 'src/content/dilekceler');
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

let count = 0;

for (let i = 1; i <= 30; i++) {
    for (const t of topics) {
        for (const suffix of t.suffixes) {
            count++;
            let title = `${suffix} Örneği 2026 Güncel`;
            if (i > 1) title = `${t.cat.split(' ')[0]} ${suffix} Örneği`;
            if (i > 2) title = `Güncel ${suffix}`;
            if (i > 3) title = `Avukat Onaylı ${suffix} Örneği ${i}`;

            const slugRaw = generateSlug(title);
            const slug = count > 100 ? `${slugRaw}-${count}` : slugRaw;
            const cat = t.cat;

            const excerpt = `En güncel ve hukuki usullere uygun ${title.toLowerCase()} indirin. Tüm hukuki süreçleriniz için RS Avukatlık ve Av. Ramazan Şimşek'e danışabilirsiniz.`;

            const content = `---
title: "${title}"
excerpt: "${excerpt}"
category: "${cat}"
date: "2026-0${1 + (count % 9)}-${10 + (count % 18)}"
---

# ${title}

> **ÖNEMLİ UYARI:** Aşağıda sunulan **${title.toLowerCase()}**, genel bilgilendirme amacıyla hazırlanmış taslak bir metindir. Her hukuki uyuşmazlık tamamen kendine özgüdür ve bir davanın ya da hukuki sürecin sadece matbu bir dilekçeyle yürütülmesi **telafisi imkansız hak kayıplarına** yol açabilir. Hukuki sürecinizin doğru, eksiksiz ve usulüne uygun yürütülmesi için mutlaka **RS Avukatlık | Av. Ramazan Şimşek**'ten hukuki destek almanızı tavsiye ederiz.

## DİLEKÇE ÖRNEĞİ

**NÖBETÇİ [MAHKEME ADI] MAHKEMESİNE**
**[İL VEYA İLÇE ADI]**

**DAVACI:** (Adı Soyadı, TCKN, Adres)

**VEKİLİ:** Av. Ramazan Şimşek
*(Vekil ile temsil ediliyorsanız buraya vekil bilgisi girilir)*

**DAVALI:** (Adı Soyadı, TCKN, Adres)

**KONU:** ${title} sunulmasından ve taleplerimizin kabulünden ibarettir.

**AÇIKLAMALAR:**

1. Burada uyuşmazlığın maddi olaylarına yer verilir. Olayların kronolojik sıraya göre ve okunaklı bir dille anlatılması esastır. Hangi hakların ihlal edildiği açıkça belirtilmelidir.

2. Mevzuatta yer alan ve davayı destekleyen hukuki gerekçeler detaylandırılır. İlgili kanun maddelerine (Türk Medeni Kanunu, Türk Ceza Kanunu, Borçlar Kanunu vb.) atıf yapılır.

3. *(Bu bölüm davanızın türüne göre değişiklik gösterir. İspat araçlarınız, tanıklarınız, bilirkişi veya keşif talepleriniz burada gerekçelendirilir.)* Yargıtay emsal kararları ile hukuki tez desteklenmelidir. Somut olaya uygun emsal Yargıtay kararlarının sunulması yargılama sürecini hızlandırabilir.

4. Yukarıda açıklanan nedenlerle, Sayın Mahkemenize başvurarak hakkımızın tespiti ve talebimizin kabulü zorunluluğu hasıl olmuştur.

**HUKUKİ NEDENLER:** İlgili sair tüm mevzuat (TMK, TBK, HMK, TCK vb).

**HUKUKİ DELİLLER:** 
1. Resmi kayıt örnekleri
2. Tanık beyanları (İsimleri bilahare bildirilecektir)
3. Bilirkişi incelemesi
4. Banka kayıtları, faturalar, sözleşmeler (varsa)
5. Karşı tarafın sunacağı delillere karşı delil sunma hakkımız saklı kalmak kaydıyla her türlü yasal delil.

**NETİCE-İ TALEP:** Yukarıda arz ve izah edilen nedenler ve Sayın Mahkemenizce resen gözetilecek hususlar doğrultusunda;

- Haklı davamızın/talebimizin **KABULÜNE**,
- İlgili ihtiyati tedbir ve haciz vb. taleplerin kabulüne,
- Yargılama giderleri ve vekalet ücretinin karşı tarafa tahmiline,

Karar verilmesini saygılarımızla bilvekale arz ve talep ederiz. (Tarih)

**Davacı / Davacı Vekili**
**Av. Ramazan Şimşek** (Örnektir)
*(İmza)*

---

## Neden Profesyonel Hukuki Destek Almalısınız?

İnternetten bulduğunuz taslak dilekçeler, sizin özel durumunuza ve olayın spesifik ayrıntılarına uyarlanmamıştır. Hukuk davalarında veya ceza yargılamalarında **şikayet süreleri, zamanaşımı, hak düşürücü süreler ve usul kurallarına** riayet edilmesi davanın esası kadar büyük önem taşır. Yanlış mahkemeye başvuru, eksik delil gösterilmesi veya taleplerin hukuk tekniğine uygun formüle edilmemesi durumunda davanız usulden reddedilebilir.

Kartal ve İstanbul genelinde profesyonel avukatlık hizmeti almak, haklarınızı güvence altına almak için **RS Avukatlık** iletişim kanallarından **Av. Ramazan Şimşek** ile irtibata geçebilirsiniz.

[**Bize Ulaşın ve Danışmanlık Alın →**](/iletisim)
`;

            fs.writeFileSync(path.join(dir, `${slug}.md`), content, 'utf8');

            if (count >= 300) break;
        }
        if (count >= 300) break;
    }
    if (count >= 300) break;
}

console.log(`Generated ${count} petitions in ${dir}`);
