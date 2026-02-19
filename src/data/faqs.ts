import type { FAQ } from '@/types';

export const faqs: FAQ[] = [
    // --- AİLE HUKUKU ---
    {
        category: 'Aile Hukuku',
        question: 'Anlaşmalı boşanma davası ne kadar sürer?',
        answer: 'Anlaşmalı boşanma davaları, protokolün mahkemece uygun bulunması halinde genellikle tek celsede sonuçlanır. Dava açıldıktan sonra mahkemenin yoğunluğuna göre 1 hafta ile 3 ay arasında duruşma günü verilir.'
    },
    {
        category: 'Aile Hukuku',
        question: 'Çekişmeli boşanma davası açmak için hangi sebepler gerekir?',
        answer: 'TMK m. 166 uyarınca evlilik birliğinin temelinden sarsılması (şiddetli geçimsizlik), zina, hayata kast, suç işleme ve haysiyetsiz hayat sürme, terk ve akıl hastalığı gibi sebeplerle dava açılabilir.'
    },
    {
        category: 'Aile Hukuku',
        question: 'Mahkemece belirlenen nafakayı artırmak mümkün müdür?',
        answer: 'Evet. Tarafların mali durumlarındaki değişiklikler veya hakkaniyetin gerektirdiği hallerde (enflasyon, çocuğun okul masrafının artması vb.) nafakanın artırılması için dava açılabilir.'
    },
    {
        category: 'Aile Hukuku',
        question: 'Boşandıktan sonra velayet değiştirilebilir mi?',
        answer: 'Velayet kendisine verilen tarafın, çocuğun yararını gözetmemesi, bakımını ihmal etmesi veya ahlaka aykırı yaşaması gibi durumlarda diğer ebeveyn velayetin değiştirilmesi davası açabilir.'
    },
    {
        category: 'Aile Hukuku',
        question: 'Düğünde takılan altınlar (ziynet eşyaları) kime aittir?',
        answer: 'Yargıtay içtihatlarına göre, düğünde kime takılırsa takılsın (kadına veya erkeğe), ziynet eşyaları kadına bağışlanmış sayılır ve onun kişisel malıdır. Boşanmada erkek bunları iade etmek zorundadır.'
    },
    {
        category: 'Aile Hukuku',
        question: 'Boşanmada mal paylaşımı nasıl yapılır?',
        answer: '2002 sonrası evliliklerde yasal mal rejimi "Edinilmiş Mallara Katılma Rejimi"dir. Evlilik birliği içerisinde karşılığı verilerek edinilen mallar (ev, araba, birikim) yarı yarıya paylaşılır.'
    },
    {
        category: 'Aile Hukuku',
        question: 'Eşim evi satmasın diye ne yapabilirim?',
        answer: 'Oturduğunuz ev aile konutu niteliğindeyse, tapuya başvurarak "Aile Konutu Şerhi" koydurabilirsiniz. Bu durumda eşiniz sizin rızanız olmadan evi satamaz.'
    },
    {
        category: 'Aile Hukuku',
        question: 'Eşimden şiddet görüyorum, evden uzaklaştırabilir miyim?',
        answer: 'Evet. 6284 sayılı Kanun gereği Aile Mahkemesine başvurarak, şiddet uygulayan eş hakkında 6 aya kadar evden uzaklaştırma ve koruma kararı talep edebilirsiniz.'
    },
    {
        category: 'Aile Hukuku',
        question: 'Babalık davası hangi sürede açılmalıdır?',
        answer: 'Babalık davası, çocuğun doğumundan önce veya sonra açılabilir. Annenin dava hakkı doğumdan itibaren 1 yıl geçmekle düşer.'
    },

    // --- İŞ HUKUKU ---
    {
        category: 'İş Hukuku',
        question: 'İşe iade davası açma şartları nelerdir?',
        answer: 'İşyerinde en az 30 işçi çalışmalı, işçinin en az 6 aylık kıdemi olmalı ve iş güvencesi kapsamında (belirsiz süreli sözleşme) çalışmalıdır. Fesih bildiriminden itibaren 1 ay içinde arabulucuya başvurulmalıdır.'
    },
    {
        category: 'İş Hukuku',
        question: 'Kıdem tazminatı tavanı nedir?',
        answer: 'Kıdem tazminatı her yıl asgari ücret zammı ile birlikte güncellenir. Tavanın üzerindeki maaşlar için tavan tutarı esas alınarak hesaplama yapılır.'
    },
    {
        category: 'İş Hukuku',
        question: 'İstifa eden işçi kıdem tazminatı alabilir mi?',
        answer: 'Normal şartlarda istifa eden alamaz. Ancak "haklı nedenle fesih" (maaşın ödenmemesi, mobbing, SGK priminin eksik yatması vb.) durumunda istifa eden işçi kıdem tazminatına hak kazanır.'
    },
    {
        category: 'İş Hukuku',
        question: 'Mobbing (psikolojik taciz) nasıl ispatlanır?',
        answer: 'Mobbing; tanık beyanları, kamera kayıtları, e-postalar, WhatsApp yazışmaları ve doktor raporları ile ispatlanabilir. İspat yükü işçidedir ancak işçi güçlü emareler sunarsa ispat yükü işverene geçer.'
    },
    {
        category: 'İş Hukuku',
        question: 'Fazla mesai ücreti nasıl hesaplanır?',
        answer: 'Haftalık 45 saati aşan her çalışma fazla mesaidir. Saat başına düşen ücretin %50 fazlası ile ödenir. Resmi tatillerde çalışma ise %100 zamlı ödenir.'
    },

    // --- CEZA HUKUKU ---
    {
        category: 'Ceza Hukuku',
        question: 'Savcılığa şikayet süresi ne kadardır?',
        answer: 'Takibi şikayete bağlı suçlarda (hakaret, basit yaralama, tehdit vb.) şikayet süresi, fiilin ve failin öğrenilmesinden itibaren 6 aydır. Kamu davası niteliğindeki suçlarda zamanaşımı süresince şikayet edilebilir.'
    },
    {
        category: 'Ceza Hukuku',
        question: 'KYOK (Takipsizlik) kararına itiraz süresi nedir?',
        answer: 'Savcılığın verdiği Kovuşturmaya Yer Olmadığına Dair Karar size tebliğ edildikten itibaren 15 gün içinde Sulh Ceza Hakimliğine itiraz edebilirsiniz.'
    },
    {
        category: 'Ceza Hukuku',
        question: 'Sabıka kaydı (Adli Sicil) ne zaman silinir?',
        answer: 'Cezanın infazı tamamlandıktan sonra Adli Sicil Kurumuna başvurularak kayıt silinebilir. Arşiv kaydının silinmesi için ise belirli yasal sürelerin (genellikle 5 veya 15 yıl) geçmesi gerekir.'
    },
    {
        category: 'Bilişim Hukuku',
        question: 'İnternetten haber veya içerik kaldırma (Unutulma Hakkı) nasıl yapılır?',
        answer: 'Kişilik haklarınızı ihlal eden içerikler için Sulh Ceza Hakimliğine başvurarak erişim engelleme kararı aldırabilirsiniz 5651 sayılı kanun kapsamında içerik kaldırılabilir.'
    },

    // --- GAYRİMENKUL & KİRA ---
    {
        category: 'Gayrimenkul Hukuku',
        question: 'Ev sahibi kirayı en fazla ne kadar artırabilir?',
        answer: 'Konut kiralarında artış oranı TÜFE (12 aylık ortalama) ile sınırlıdır. %25 sınırı 1 Temmuz 2024 itibarıyla sona ermiştir.'
    },
    {
        category: 'Gayrimenkul Hukuku',
        question: 'Kiracımı "Oğlum oturacak" diye çıkarabilir miyim?',
        answer: 'Evet, kendinizin, eşinizin, alt veya üst soyunuzun konut ihtiyacı varsa tahliye davası açabilirsiniz. Ancak bu sebeple tahliye ettirip başkasına kiralarsanız eski kiracıya tazminat ödersiniz.'
    },
    {
        category: 'Gayrimenkul Hukuku',
        question: '10 yıllık kiracı sebepsiz tahliye edilebilir mi?',
        answer: '10 yıllık uzama süresi dolan kiracı, herhangi bir sebep gösterilmeksizin 3 ay önceden ihtarname çekilmek şartıyla tahliye edilebilir.'
    },
    {
        category: 'Gayrimenkul Hukuku',
        question: 'Tahliye taahhütnamesi ne zaman geçerlidir?',
        answer: 'Kira sözleşmesinin yapıldığı tarihten sonraki bir tarihte, yazılı olarak verilmiş olmalıdır. Kira sözleşmesi ile aynı gün imzalanan taahhütnameler geçersiz kabul edilebilir.'
    },

    // --- İCRA İFLAS ---
    {
        category: 'İcra İflas Hukuku',
        question: 'İlamsız icra takibine itiraz süresi kaç gündür?',
        answer: 'Ödeme emrinin tebliğinden itibaren 7 gün içinde icra dairesine itiraz edilmelidir. Aksi takdirde takip kesinleşir ve haciz işlemleri başlar.'
    },
    {
        category: 'İcra İflas Hukuku',
        question: 'Maaş haczinde ne kadar kesinti yapılır?',
        answer: 'İcra İflas Kanunu gereği çalışanın maaşının en fazla 1/4\'ü (dörtte biri) haczedilebilir. Ancak nafaka borçlarında bu sınır uygulanmaz, maaşın tamamına yakını kesilebilir.'
    },
    {
        category: 'İcra İflas Hukuku',
        question: 'Borcum olmadığı halde icra geldi, ne yapmalıyım?',
        answer: 'Takip kesinleşmeden 7 gün içinde itiraz etmelisiniz. Takip kesinleştiyse "Menfi Tespit Davası" açarak borçlu olmadığınızı mahkeme kararıyla ispatlamanız gerekir.'
    },
    // --- MİRAS HUKUKU ---
    {
        category: 'Miras Hukuku',
        question: 'Miras reddi (Reddi Miras) nasıl yapılır?',
        answer: 'Miras bırakanın vefatından itibaren 3 ay içinde Sulh Hukuk Mahkemesine başvurarak mirasın reddi talep edilebilir. Bu süre hak düşürücü süredir.'
    },
    {
        category: 'Miras Hukuku',
        question: 'Saklı paylı mirasçılar kimlerdir?',
        answer: 'Mirasbırakanın çocukları, eşi ve (bazı durumlarda) anne-babası saklı paylı mirasçıdır. Vasiyetname ile dahi bu kişilerin saklı payları ellerinden alınamaz.'
    },
    {
        category: 'Miras Hukuku',
        question: 'Vasiyetname nasıl hazırlanır?',
        answer: 'Noter huzurunda (resmi vasiyetname) veya el yazısı ile (imzalı ve tarihli) vasiyetname hazırlanabilir. Geçerlilik şartlarına uyulması önemlidir.'
    },

    // --- GENEL HUKUK ---
    {
        category: 'Genel Hukuk',
        question: 'Avukat tutmak zorunlu mudur?',
        answer: 'Türk hukukunda (bazı ceza davaları hariç) avukat tutma zorunluluğu yoktur. Ancak usul hataları yapmamak ve hak kaybına uğramamak için avukat ile temsil edilmek önemlidir.'
    },
    {
        category: 'Genel Hukuk',
        question: 'Dava masraflarını kim öder?',
        answer: 'Dava açarken masrafları davacı öder. Dava kazanıldığında, yapılan yargılama giderleri haksız çıkan taraftan (davalıdan) tahsil edilir.'
    },
    {
        category: 'Genel Hukuk',
        question: 'Arabuluculuk zorunlu mudur?',
        answer: 'İş davalarında, ticari davalarda ve tüketici davalarında dava açmadan önce arabulucuya başvurmak dava şartıdır (zorunludur). Aile hukukunda ise ihtiyari (isteğe bağlı) arabuluculuk uygulanabilir.'
    },
    {
        category: 'Genel Hukuk',
        question: 'Vekaletname nasıl çıkarılır?',
        answer: 'Herhangi bir notere giderek, avukatın bilgilerini vererek vekaletname çıkartabilirsiniz. Fotoğraflı kimliğinizin yanınızda olması gerekir. Boşanma vekaletnamesi için fotoğraf da gereklidir.'
    }
];
