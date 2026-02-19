export interface RegionData {
  slug: string; // e.g., 'kartal-avukat'
  id: string;   // e.g., 'kartal'
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  content: string;
}

export const regions: Record<string, RegionData> = {
  kartal: {
    slug: 'kartal-avukat',
    id: 'kartal',
    title: 'Kartal Avukat - RS Avukatlık | Ağır Ceza & Boşanma',
    description: 'İstanbul Kartal bölgesinde uzman avukatlık hizmeti. Ağır Ceza, Boşanma, İşçi Alacakları ve Gayrimenkul davalarında Kartal hukuk bürosu.',
    heroTitle: 'Kartal Hukuk Bürosu',
    heroSubtitle: 'Kartal bölgesinde hukuki sorunlarınıza profesyonel ve sonuç odaklı çözümler sunuyoruz.',
    content: `
      <p>İstanbul Kartal'da bulunan RS Avukatlık Bürosu, Anadolu Adliyesi'ne olan yakın konumu ve bölgedeki tecrübesiyle müvekkillerine hizmet vermektedir. Kartal Ağır Ceza avukatı ve Kartal Boşanma avukatı arayışlarınızda, sürecin en başından sonuna kadar titizlikle çalışarak hak kaybı yaşamanızı engelliyoruz. Özellikle çekişmeli boşanma, velayet, ağır ceza davaları, işçi alacakları ve tapu iptal tescil davalarında uzman kadromuzla, Kartal, Cevizli, Soğanlık ve çevre semtlerdeki müvekkillerimize sonuç odaklı hukuki danışmanlık ve avukatlık hizmeti sunuyoruz.</p>
    `
  },
  maltepe: {
    slug: 'maltepe-avukat',
    id: 'maltepe',
    title: 'Maltepe Avukat - RS Avukatlık',
    description: 'Maltepe bölgesinde avukatlık ve hukuki danışmanlık hizmetleri. RS Avukatlık ile haklarınızı güvenle koruyun.',
    heroTitle: 'Maltepe Avukatlık Hizmetleri',
    heroSubtitle: 'Maltepe ve çevresinde uzman hukuki destek.',
    content: `
      <p>Maltepe bölgesinde faaliyet gösteren hukuk büromuz, Maltepe Ceza avukatı ve Aile hukuku avukatı ihtiyaçlarınızda yanınızdadır. Küçükyalı, Zümrütevler ve Maltepe merkezde ikamet eden müvekkillerimiz için, boşanma davaları, miras paylaşımı, kira uyuşmazlıkları ve ceza soruşturmalarında profesyonel hukuki destek sağlıyoruz. RS Avukatlık olarak, Maltepe'deki hukuki uyuşmazlıklarınızda şeffaf, hızlı ve güvenilir bir süreç yönetimi ile en iyi sonucu almanızı hedefliyoruz.</p>
    `
  },
  pendik: {
    slug: 'pendik-avukat',
    id: 'pendik',
    title: 'Pendik Avukat - RS Avukatlık',
    description: 'Pendik bölgesinde ceza, boşanma ve iş hukuku avukatı. Profesyonel hukuki destek.',
    heroTitle: 'Pendik Hukuk ve Danışmanlık',
    heroSubtitle: 'Pendik bölgesinde haklarınız güvence altında.',
    content: `
      <p>Pendik, Kurtköy ve Kaynarca bölgesinde avukatlık hizmeti sunan büromuz, Pendik İş mahkemeleri ve aile mahkemelerindeki davalarınızda uzman desteği sağlamaktadır. Pendik boşanma avukatı ve iş hukuku avukatı olarak, işe iade, kıdem tazminatı hesaplama, anlaşmalı boşanma protokolü hazırlama ve velayet davalarında müvekkillerimizi en iyi şekilde temsil ediyoruz. Hukuki sorunlarınıza Pendik bölgesinde hızlı ve etkili çözümler üretmek için tecrübemizi kullanıyoruz.</p>
    `
  },
  kadikoy: {
    slug: 'kadikoy-avukat',
    id: 'kadikoy',
    title: 'Kadıköy Avukat - RS Avukatlık',
    description: 'Kadıköy bölgesinde uzman avukatlık hizmeti. İcra, Ticaret, Ceza ve Aile Hukuku.',
    heroTitle: 'Kadıköy Avukatlık Bürosu',
    heroSubtitle: 'Kadıköy\'de güvenilir hukuk partneriniz.',
    content: `
      <p>İstanbul'un en köklü ve ticaretin yoğun olduğu ilçelerinden Kadıköy'de, şirketler hukuku, ticaret hukuku ve sözleşmeler hukuku alanlarında kurumsal ve bireysel danışmanlık hizmeti sunuyoruz. Kadıköy boşanma avukatı ve Kadıköy ağır ceza avukatı arayışlarınızda, Bağdat Caddesi, Fenerbahçe ve Kozyatağı bölgesindeki müvekkillerimize gizlilik ve güven ilkesiyle hizmet veriyoruz. hukuki süreçlerinizi profesyonel bir bakış açısıyla yöneterek haklarınızı koruma altına alıyoruz.</p>
    `
  },
  tuzla: {
    slug: 'tuzla-avukat',
    id: 'tuzla',
    title: 'Tuzla Avukat - RS Avukatlık',
    description: 'Tuzla bölgesinde avukat ihtiyaçlarınız için RS Avukatlık.',
    heroTitle: 'Tuzla Hukuk Hizmetleri',
    heroSubtitle: 'Tuzla bölgesinde yanınızdayız.',
    content: `
      <p>Tuzla Organize Sanayi Bölgesi ve tersaneler bölgesindeki yoğun ticari faaliyetler nedeniyle, Tuzla iş hukuku avukatı ve ticaret avukatı ihtiyaçlarınızda RS Avukatlık olarak yanınızdayız. İş kazası tazminatları, işçi alacakları, ticari sözleşme ihtilafları ve şirket danışmanlığı konularında Tuzla bölgesindeki müvekkillerimize kapsamlı hukuki çözümler sunuyoruz.</p>
    `
  },
  sultanbeyli: {
    slug: 'sultanbeyli-avukat',
    id: 'sultanbeyli',
    title: 'Sultanbeyli Avukat - RS Avukatlık',
    description: 'Sultanbeyli bölgesinde hukuki danışmanlık ve dava takibi.',
    heroTitle: 'Sultanbeyli Avukat',
    heroSubtitle: 'Sultanbeyli\'de hukuki sorunlarınıza çözüm.',
    content: `
      <p>Sultanbeyli bölgesinde özellikle gayrimenkul hukuku, tapu iptal tescil davaları ve izale-i şuyu (ortaklığın giderilmesi) davalarında uzmanlaşmış kadromuzla hizmet veriyoruz. Sultanbeyli avukat ihtiyaçlarınızda, miras hukuku ve aile hukuku kapsamındaki uyuşmazlıklarınızda da yerel dinamiklere hakim, çözüm odaklı yaklaşımımızla haklarınızı savunuyoruz.</p>
    `
  },
  sancaktepe: {
    slug: 'sancaktepe-avukat',
    id: 'sancaktepe',
    title: 'Sancaktepe Avukat - RS Avukatlık',
    description: 'Sancaktepe bölgesinde avukatlık hizmetleri.',
    heroTitle: 'Sancaktepe Hukuk Bürosu',
    heroSubtitle: 'Sancaktepe bölgesinde profesyonel destek.',
    content: `
      <p>Sancaktepe bölgesinde hızla gelişen konut projeleri ve artan nüfusla birlikte doğan hukuki ihtiyaçlarınızda, Sancaktepe avukat ve hukuki danışmanlık hizmeti sunuyoruz. Ceza hukuku, aile hukuku ve gayrimenkul hukuku alanlarındaki davalarınızda, müvekkil odaklı çalışma prensibimizle Sancaktepe ve çevresinde güvenilir hukuki desteğiniz oluyoruz.</p>
    `
  },
  atasehir: {
    slug: 'atasehir-avukat',
    id: 'atasehir',
    title: 'Ataşehir Avukat - RS Avukatlık',
    description: 'Ataşehir bölgesinde kurumsal ve bireysel hukuk hizmetleri.',
    heroTitle: 'Ataşehir Hukuk ve Danışmanlık',
    heroSubtitle: 'Ataşehir\'de çözüm ortağınız.',
    content: `
      <p>İstanbul Finans Merkezi'ne ev sahipliği yapan Ataşehir'de, şirket kuruluşları, birleşme ve devralmalar, ticari sözleşmeler ve marka hukuku konularında Ataşehir avukat arayışlarınıza profesyonel çözümler üretiyoruz. Hem kurumsal firmalara hem de bireysel müvekkillerimize, Batı Ataşehir ve çevresinde uluslararası standartlarda hukuki danışmanlık hizmeti sağlıyoruz.</p>
    `
  },
  'kartal-ceza': {
    slug: 'kartal-ceza-avukati',
    id: 'kartal-ceza',
    title: 'Kartal Ceza Avukatı - Ağır Ceza & Asliye Ceza | RS Avukatlık',
    description: 'Kartal Ceza Avukatı olarak Anadolu Adliyesi\'nde Ağır Ceza ve Asliye Ceza davalarında şüpheli/sanık müdafiliği ve mağdur vekilliği yapıyoruz.',
    heroTitle: 'Kartal Ceza Hukuku',
    heroSubtitle: 'Özgürlüğünüz ve itibarınız için profesyonel savunma.',
    content: `
      <h2>Kartal Ağır Ceza Avukatı</h2>
      <p>Kartal'daki İstanbul Anadolu Adliyesi, Türkiye'nin en büyük adliyelerinden biridir ve ceza davaları açısından yoğun bir iş yüküne sahiptir. <strong>Kartal Ceza Avukatı</strong> olarak, soruşturma aşamasından (ifade, gözaltı, tutuklama) kovuşturma aşamasına (mahkeme, duruşma) kadar tüm süreçte müvekkillerimizin yanındayız.</p>
      <h3>Hizmet Alanlarımız</h3>
      <ul>
        <li>Uyuşturucu ticareti ve kullanımı suçları</li>
        <li>Kasten yaralama ve öldürme suçları</li>
        <li>Cinsel suçlar (Taciz, saldırı, istismar)</li>
        <li>Hırsızlık, yağma ve dolandırıcılık suçları</li>
        <li>Bilişim suçları</li>
      </ul>
      <p>Ceza yargılamasında erken müdahale hayati önem taşır. RS Avukatlık olarak, dosyanızı titizlikle inceliyor ve en etkili savunma stratejisini belirliyoruz.</p>
    `
  },
  'kartal-icra': {
    slug: 'kartal-icra-avukati',
    id: 'kartal-icra',
    title: 'Kartal İcra Avukatı - Borç Tahsili & Haciz İşlemleri | RS Avukatlık',
    description: 'Kartal İcra Avukatı ile alacak takibi, çek-senet tahsili ve haciz işlemleri. Hızlı ve etkili sonuç için RS Avukatlık.',
    heroTitle: 'Kartal İcra ve İflas Hukuku',
    heroSubtitle: 'Alacaklarınızı en hızlı ve güvenli yoldan tahsil ediyoruz.',
    content: `
      <h2>Kartal İcra Avukatı ve Alacak Takibi</h2>
      <p>Ticari veya bireysel alacaklarınızın tahsili için <strong>Kartal İcra Avukatı</strong> olarak, Kartal İcra Daireleri nezdinde kapsamlı hizmet sunuyoruz. İcra takibinin başlatılması, borçlu malvarlığının sorgulanması, haciz ve satış işlemlerinin yürütülmesi konularında uzmanız.</p>
      <h3>Hizmetlerimiz</h3>
      <ul>
        <li>Çek ve Senet (Kambiyo) takipleri</li>
        <li>İlamsız icra takipleri ve itirazın iptali davaları</li>
        <li>Maaş, banka ve gayrimenkul hacizleri</li>
        <li>Menfi tespit ve istirdat (geri alma) davaları</li>
        <li>İflas erteleme ve konkordato süreçleri</li>
      </ul>
      <p>Alacağınızı tahsil etmek için gereken tüm yasal yolları, zaman kaybetmeden ve prosedürlere uygun şekilde işletiyoruz.</p>
    `
  },
  'kartal-bosanma': {
    slug: 'kartal-bosanma-avukati',
    id: 'kartal-bosanma',
    title: 'Kartal Boşanma Avukatı - Çekişmeli & Anlaşmalı Boşanma | RS Avukatlık',
    description: 'Kartal Boşanma Avukatı. Anlaşmalı boşanma, çekişmeli boşanma, velayet, nafaka ve mal paylaşımı davalarında uzman destek.',
    heroTitle: 'Kartal Aile Hukuku ve Boşanma',
    heroSubtitle: 'Zorlu süreci sizin için kolaylaştırıyoruz.',
    content: `
      <h2>Kartal Boşanma Avukatı</h2>
      <p>Boşanma süreci, hem hukuki hem de psikolojik açıdan hassas bir süreçtir. <strong>Kartal Boşanma Avukatı</strong> olarak, müvekkillerimizin haklarını en üst düzeyde korurken, sürecin en az hasarla atlatılmasını hedefliyoruz. Kartal Aile Mahkemelerinde görülen davalarda tecrübemizle yanınızdayız.</p>
      <h3>Uzmanlık Alanlarımız</h3>
      <ul>
        <li><strong>Anlaşmalı Boşanma:</strong> Tek celsede boşanma ve protokol hazırlama.</li>
        <li><strong>Çekişmeli Boşanma:</strong> Zina, şiddet, terk gibi sebeplerle açılan davalar.</li>
        <li><strong>Velayet Davaları:</strong> Çocuğun üstün yararı ilkesine göre velayet takibi.</li>
        <li><strong>Nafaka ve Tazminat:</strong> Yoksulluk, iştirak nafakası ve maddi-manevi tazminat talepleri.</li>
        <li><strong>Mal Paylaşımı:</strong> Edinilmiş mallara katılma rejimi tasfiyesi.</li>
      </ul>
    `
  },
  'kartal-is': {
    slug: 'kartal-is-avukati',
    id: 'kartal-is',
    title: 'Kartal İş Avukatı - Kıdem, İhbar ve İşe İade | RS Avukatlık',
    description: 'Kartal İş Avukatı. İşe iade davaları, kıdem tazminatı, fazla mesai ve iş kazası tazminatları. İşçi ve işveren vekilliği.',
    heroTitle: 'Kartal İş ve Sosyal Güvenlik Hukuku',
    heroSubtitle: 'Emeğinizin karşılığını almanız için buradayız.',
    content: `
      <h2>Kartal İş Avukatı</h2>
      <p>Kartal bölgesindeki yoğun iş hayatı ve sanayi bölgeleri nedeniyle iş hukuku uyuşmazlıkları sıkça yaşanmaktadır. <strong>Kartal İş Avukatı</strong> olarak, hem işçi hem de işveren müvekkillerimize Kartal İş Mahkemelerinde hukuki destek sağlıyoruz.</p>
      <h3>Dava Türleri</h3>
      <ul>
        <li><strong>İşe İade Davaları:</strong> Haksız yere işten çıkarılan işçiler için.</li>
        <li><strong>Alacak Davaları:</strong> Kıdem tazminatı, ihbar tazminatı, fazla mesai, yıllık izin ücretleri.</li>
        <li><strong>İş Kazası Tazminatları:</strong> İş kazası sonucu oluşan maddi ve manevi zararların tazmini.</li>
        <li><strong>Hizmet Tespit Davaları:</strong> Sigortasız çalıştırılan işçiler için SGK gün tespiti.</li>
        <li><strong>Mobbing Davaları:</strong> İşyerinde psikolojik tacize karşı hukuki koruma.</li>
      </ul>
    `
  }
};
