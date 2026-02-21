import type { NavItem, PracticeArea, Article, ContactInfo, SocialLinks } from '@/types';

export const navItems: NavItem[] = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'Faaliyet Alanlarımız', href: '/faaliyet-alanlarimiz' },
  { label: 'Makalelerimiz', href: '/makalelerimiz' },
  { label: 'Kanunlar', href: '/kanunlar' },
  { label: 'İletişim', href: '/iletisim' },
];

export const practiceAreas: PracticeArea[] = [
  {
    id: '1',
    title: 'Ceza Hukuku',
    description: 'RS Avukatlık olarak, ceza davalarında uzman kadromuzla müvekkillerimize en etkili savunma hizmetini sunuyor, soruşturma ve kovuşturma süreçlerinde yanınızda oluyoruz.',
    icon: 'Scale',
  },
  {
    id: '2',
    title: 'Aile Hukuku',
    description: 'RS Avukatlık, boşanma, velayet, nafaka ve miras davalarında hassas ve çözüm odaklı yaklaşımıyla müvekkillerinin hukuki haklarını en iyi şekilde korumaktadır.',
    icon: 'Users',
  },
  {
    id: '3',
    title: 'İş Hukuku',
    description: 'İşçi ve işveren uyuşmazlıklarında, RS Avukatlık olarak kıdem tazminatı, işe iade ve iş kazası davalarında profesyonel hukuki destek sağlıyoruz.',
    icon: 'Briefcase',
  },
  {
    id: '4',
    title: 'Ticaret Hukuku',
    description: 'RS Avukatlık, şirketler hukuku, ticari sözleşmeler ve şirket birleşmeleri konularında şirketinizin hukuki altyapısını güçlendirmek için çalışmaktadır.',
    icon: 'Building2',
  },
  {
    id: '5',
    title: 'Gayrimenkul Hukuku',
    description: 'Gayrimenkul alım-satımı, kira uyuşmazlıkları ve tapu davalarında RS Avukatlık olarak sürecin her aşamasında güvenilir hukuki danışmanlık sunuyoruz.',
    icon: 'Home',
  },
  {
    id: '6',
    title: 'İcra İflas Hukuku',
    description: 'RS Avukatlık, alacak takibi, borç yapılandırma ve iflas süreçlerinde hızlı ve sonuç odaklı çözümlerle müvekkillerinin menfaatlerini korumayı hedefler.',
    icon: 'Gavel',
  },
  {
    id: '7',
    title: 'İdare Hukuku',
    description: 'RS Avukatlık, kamu kurumları ile ilgili tüm idari süreçlerde, iptal ve tam yargı davalarında vatandaş ve kurumların haklarını korumak için uzman destek sunar.',
    icon: 'Landmark',
  },
  {
    id: '8',
    title: 'Sigorta Hukuku',
    description: 'RS Avukatlık olarak, trafik kazası, iş kazası ve diğer sigorta uyuşmazlıklarında tazminat haklarınızın eksiksiz alınması için profesyonel hukuki süreç yönetimi sağlıyoruz.',
    icon: 'Shield',
  },
];

export const petitions: import('@/types').Petition[] = [
  {
    id: '1',
    title: 'İdari Para Cezasına İtiraz Dilekçesi Örneği',
    slug: 'idari-para-cezasina-itiraz-dilekcesi',
    category: 'İdare Hukuku',
    content: `
      <div class="font-serif space-y-4 text-justify">
        <p class="text-center font-bold">... SULH CEZA HAKİMLİĞİNE</p>
        <br/>
        <p><strong>İTİRAZ EDEN :</strong> (Adınız Soyadınız, T.C. Kimlik No)<br/>
           <strong>ADRES :</strong> (Tebligata yarar açık adresiniz telefon numaranız)</p>
        <p><strong>VEKİLİ :</strong> Av. Ramazan ŞİMŞEK - RS Avukatlık<br/>
           (Eğer avukatınız varsa doldurulacaktır, yoksa bu kısmı siliniz)</p>
        <p><strong>KARARINA İTİRAZ EDİLEN<br/>KURUM :</strong> (Cezayı kesen kurumun adı - Örn: İstanbul Valiliği)</p>
        <p><strong>İDARİ YAPTIRIM KARARI :</strong> ... tarih ve ... karar tutanak seri ve sıra nolu idari para cezası.</p>
        <p><strong>TEBLİĞ TARİHİ :</strong> .../.../20... (Cezanın size tebliğ edildiği tarih)</p>
        <p><strong>KONU :</strong> ... TL tutarındaki idari para cezasına ilişkin itirazlarımızın sunulması ve cezanın iptaline karar verilmesi talebidir.</p>
        <br/>
        <p class="text-center font-bold">AÇIKLAMALAR</p>
        <p>1. .... tarihinde .... sebebinden dolayı .... plakalı aracıma/şahsıma ... TL idari para cezası kesilmiştir. (Olayın gerçekleştiği tarih, yer ve saati detaylıca belirtiniz).</p>
        <p>2. Söz konusu idari para cezası hukuka ve yasaya aykırıdır. Şöyle ki; (Burada itiraz nedenlerinizi maddeler halinde sıralayınız). </p>
        <p> - Olay anında kusurlu bir davranışım bulunmamaktadır.<br/>
            - Tutanak gıyabımda tutulmuştur ve herhangi bir delil sunulmamıştır.<br/>
            - (Varsa diğer özel nedenlerinizi ekleyiniz)
        </p>
        <p>3. Kabahatler Kanunu ve ilgili mevzuat uyarınca idari işlemin unsurları oluşmamıştır. İşlemde gösterilen gerekçeler gerçeği yansıtmamaktadır.</p>
        <p>4. Yargıtay'ın yerleşik içtihatları ve Av. Ramazan ŞİMŞEK'in hukuki mütalaası doğrultusunda, usul ve yasaya aykırı bu işlemin iptali gerekmektedir.</p>
        <br/>
        <p><strong>HUKUKİ NEDENLER :</strong> Kabahatler Kanunu, CMK, Anayasa ve ilgili mevzuat.</p>
        <p><strong>HUKUKİ DELİLLER :</strong> <br/>
           1. İdari para cezası tutanağı<br/>
           2. Tebligat zarfı<br/>
           3. (Varsa kamera kayıtları, tanık beyanları vb. ekleyiniz)</p>
        <p><strong>SONUÇ VE İSTEM :</strong> Yukarıda açıklanan nedenlerle ve re'sen gözetilecek sebeplerle; haksız ve hukuka aykırı olarak düzenlenen ... tarihli ve ... seri nolu idari para cezasının İPTALİNE, yargılama giderlerinin karşı tarafa yükletilmesine karar verilmesini saygılarımla arz ve talep ederim. .../.../20...</p>
        <br/>
        <p class="text-right"><strong>İtiraz Eden<br/>(Adı Soyadı - İmza)</strong></p>
        <p class="text-right mt-8 text-sm text-gray-400"><strong>Danışman: Av. Ramazan ŞİMŞEK<br/>(RS Avukatlık - Hukuki Destek ve Danışmanlık)</strong></p>
      </div>
    `
  },
  {
    id: '2',
    title: 'Boşanma Davası Cevap Dilekçesi Örneği',
    slug: 'bosanma-davasi-cevap-dilekcesi',
    category: 'Aile Hukuku',
    content: `
      <div class="font-serif space-y-4 text-justify">
        <p class="text-center font-bold">... AİLE MAHKEMESİNE</p>
        <br/>
        <p><strong>DOSYA NO :</strong> 2024/... E.</p>
        <p><strong>CEVAP VEREN<br/>DAVALI :</strong> (Adınız Soyadınız, T.C. Kimlik No)</p>
        <p><strong>VEKİLİ :</strong> Av. Ramazan ŞİMŞEK - RS Avukatlık<br/>
           (Avukatınız varsa doldurulacaktır)</p>
        <p><strong>DAVACI :</strong> (Eşinizin Adı Soyadı)</p>
        <p><strong>KONU :</strong> Dava dilekçesine karşı cevaplarımızın, itirazlarımızın ve delillerimizin sunulmasıdır.</p>
        <br/>
        <p class="text-center font-bold">AÇIKLAMALAR</p>
        <p>Davacı tarafın dava dilekçesinde iddia ettiği hususlar tamamen gerçek dışıdır. Kabul etmemiz mümkün değildir. Şöyle ki;</p>
        <p>1. <strong>Kusur Yönünden İtirazlarımız:</strong> Davacı dilekçesinde (Davacı ne demişse kısaca özetleyin) iddia etmişse de bu doğru değildir. Asıl kusurlu olan taraf davacıdır. Çünkü (Burada eşinizin kusurlu davranışlarını tarih vererek ve olay anlatarak detaylandırın. Örn: Hakaret etti, eve gelmedi, şiddet uyguladı vb.).</p>
        <p>2. <strong>Tazminat Talepleri Yönünden:</strong> Evlilik birliğinin temelinden sarsılmasında benim bir kusurum bulunmamaktadır. Bu nedenle davacının tazminat taleplerinin reddi gerekir.</p>
        <p>3. <strong>Velayet Yönünden (Varsa):</strong> Müşterek çocuk ...'nın yaşı ve sosyal durumu göz önüne alındığında, anne/baba yanında kalması çocuğun üstün yararınadır. (Çocuğa sizin daha iyi bakacağınıza dair nedenleri sıralayın).</p>
        <p>4. RS Avukatlık bünyesinde hazırlanan bu savunma metni ile, evlilik birliğinin devamında davacının kusurlu eylemlerinin etkili olduğu açıkça görülecektir.</p>
        <br/>
        <p><strong>HUKUKİ DELİLLER :</strong> <br/>
           1. Nüfus kayıtları<br/>
           2. Tanık beyanları (Tanık listesi bilahare sunulacaktır)<br/>
           3. (Varsa darp raporu, ses kaydı, mesaj çıktıları, banka dekontları vb.)
        </p>
        <p><strong>SONUÇ VE İSTEM :</strong> Yukarıda arz ve izah edilen nedenlerle;<br/>
           1. Davacının haksız ve mesnetsiz davasının REDDİNE,<br/>
           2. (Varsa) Karşı davamızın KABULÜNE,<br/>
           3. Müşterek çocukların velayetinin tarafıma verilmesine,<br/>
           4. Yargılama giderleri ve vekalet ücretinin karşı tarafa yükletilmesine karar verilmesini saygılarımla arz ve talep ederim.</p>
        <br/>
        <p class="text-right"><strong>Davalı<br/>(Adı Soyadı - İmza)</strong></p>
        <p class="text-right mt-8 text-sm text-gray-400"><strong>Danışman: Av. Ramazan ŞİMŞEK<br/>(RS Avukatlık - Aile Hukuku Departmanı)</strong></p>
      </div>
    `
  },
  {
    id: '3',
    title: 'Savcılık Şikayet Dilekçesi Örneği',
    slug: 'savcilik-sikayet-dilekcesi',
    category: 'Ceza Hukuku',
    content: `
      <div class="font-serif space-y-4 text-justify">
        <p class="text-center font-bold">... CUMHURİYET BAŞSAVCILIĞINA</p>
        <br/>
        <p><strong>MÜŞTEKİ :</strong> (Adınız Soyadınız, T.C. Kimlik No)</p>
        <p><strong>ADRES :</strong> (Açık adresiniz)</p>
        <p><strong>VEKİLİ :</strong> Av. Ramazan ŞİMŞEK - RS Avukatlık</p>
        <p><strong>ŞÜPHELİ :</strong> (Biliyorsanız Şüphelinin Adı / Bilmiyorsanız Faili Meçhul)</p>
        <p><strong>SUÇ :</strong> Hakaret (TCK 125), Tehdit (TCK 106), Mala Zarar Verme (TCK 151)</p>
        <p><strong>SUÇ TARİHİ :</strong> .../.../20... Saat: ...</p>
        <p><strong>KONU :</strong> Şüpheli hakkında kamu davası açılması talebidir.</p>
        <br/>
        <p class="text-center font-bold">AÇIKLAMALAR</p>
        <p>1. .... tarihinde .... adresinde bulunduğum sırada şüpheli şahıs tarafıma yönelik olarak; (Olayın gelişimini buraya en başından itibaren detaylıca anlatınız).</p>
        <p>2. Şüpheli bu eylemleri sırasında tarafıma hitaben, herkesin duyabileceği şekilde "...." (Söylenen hakaret veya tehdit sözlerini tırnak içinde tam olarak yazınız) diyerek hakaret ve tehdit etmiştir.</p>
        <p>3. Ayrıca şahsıma/aracıma/eşyama saldırarak ... TL maddi zarar vermiştir. (Zararın boyutunu açıklayınız).</p>
        <p>4. Olay anında yanımda bulunan/çevrede bulunan tanıklar durumu görmüşlerdir. (Tanık isimleri varsa yazınız).</p>
        <p>5. RS Avukatlık olarak belirtmek isteriz ki, şüphelinin eylemleri TCK kapsamında suç teşkil etmekte olup cezalandırılması gerekmektedir.</p>
        <br/>
        <p><strong>HUKUKİ DELİLLER :</strong> <br/>
           1. Tanık beyanları<br/>
           2. (Varsa) Kamera kayıtları<br/>
           3. (Varsa) Darp raporu<br/>
           4. (Varsa) Olay yeri tutanakları
        </p>
        <p><strong>SONUÇ VE İSTEM :</strong> Yukarıda arz edilen nedenlerle, şüpheli hakkında gerekli soruşturmanın yapılarak eylemine uyan suçlardan dolayı CEZALANDIRILMASI için kamu davası açılmasına karar verilmesini saygılarımla arz ve talep ederim.</p>
        <br/>
        <p class="text-right"><strong>Müşteki<br/>(Adı Soyadı - İmza)</strong></p>
        <p class="text-right mt-8 text-sm text-gray-400"><strong>Danışman: Av. Ramazan ŞİMŞEK<br/>(RS Avukatlık - Ceza Hukuku Departmanı)</strong></p>
      </div>
    `
  },
  {
    id: '4',
    title: 'İş Mahkemesi İşe İade Dava Dilekçesi',
    slug: 'ise-iade-dava-dilekcesi',
    category: 'İş Hukuku',
    content: `
      <div class="font-serif space-y-4 text-justify">
        <p class="text-center font-bold">... İŞ MAHKEMESİNE</p>
        <br/>
        <p><strong>DAVACI İŞÇİ :</strong> (Adınız Soyadınız, T.C. Kimlik No)</p>
        <p><strong>ADRES :</strong> (Tebligat adresiniz)</p>
        <p><strong>VEKİLİ :</strong> Av. Ramazan ŞİMŞEK - RS Avukatlık</p>
        <p><strong>DAVALI İŞVEREN :</strong> (Şirket/İşveren Tam Ünvanı)</p>
        <p><strong>ADRES :</strong> (Şirket Adresi)</p>
        <p><strong>DAVA DEĞERİ :</strong> (Harca esas değer - Örn: 1.000 TL)</p>
        <p><strong>KONU :</strong> İş akdinin geçersiz nedenle feshinin tespiti ve işe iade talebidir (Arabuluculuk Son Tutanağı Ektedir).</p>
        <br/>
        <p class="text-center font-bold">AÇIKLAMALAR</p>
        <p>1. Müvekkil, davalı şirkette ... tarihinden ... tarihine kadar ... pozisyonunda .. TL net ücret ile çalışmıştır.</p>
        <p>2. Müvekkilin iş akdi, işveren tarafından .... tarihli fesih bildirimi ile (Fesih gerekçesi ne gösterildiyse buraya yazınız - Örn: "Performans düşüklüğü" veya "Ekonomik sebepler") gerekçe gösterilerek sonlandırılmıştır.</p>
        <p>3. Ancak söz konusu fesih HAKSIZ ve GEÇERSİZDİR. Şöyle ki;</p>
        <p> - Müvekkilden bugüne kadar hiçbir savunma alınmamıştır.<br/>
           - İşyerinde performans düşüklüğünü gösteren bir rapor yoktur.<br/>
           - Fesih son çare ilkesine uyulmamıştır.<br/>
           - (Olayın size özel detaylarını buraya ekleyiniz)</p>
        <p>4. Zorunlu arabuluculuk süreci tamamlanmış ancak anlaşma sağlanamamıştır (Anlaşamama tutanağı ektedir).</p>
        <p>5. RS Avukatlık olarak incelediğimiz fesih süreci, 4857 sayılı İş Kanunu'nun 18. ve devamı maddelerine açıkça aykırıdır.</p>
        <br/>
        <p><strong>HUKUKİ DELİLLER :</strong> <br/>
           1. İşyeri özlük dosyası (Davalıdan celbi talep olunur)<br/>
           2. SGK Hizmet dökümü<br/>
           3. Arabuluculuk son tutanağı<br/>
           4. Maaş bordroları ve banka kayıtları<br/>
           5. Tanık beyanları</p>
        <p><strong>SONUÇ VE İSTEM :</strong> Fazlaya ilişkin haklarımız saklı kalmak kaydıyla;<br/>
           1. Davamızın KABULÜ ile davalı işverence yapılan FESHİN GEÇERSİZLİĞİNE,<br/>
           2. Müvekkilin İŞE İADESİNE,<br/>
           3. Müvekkilin yasal süre içinde başvurusuna rağmen işe başlatılmaması halinde ödenmesi gereken 8 aylık brüt ücret tutarında İŞE BAŞLATMAMA TAZMİNATINA,<br/>
           4. Kararın kesinleşmesine kadar geçecek süre için en çok 4 aya kadar olan BOŞTA GEÇEN SÜRE ÜCRETİNE,<br/>
           5. Yargılama giderleri ve vekalet ücretinin davalıya yükletilmesine karar verilmesini saygılarımla arz ve talep ederim.</p>
        <br/>
        <p class="text-right"><strong>Davacı Vekili<br/>Av. Ramazan ŞİMŞEK<br/>(RS Avukatlık)</strong></p>
      </div>
    `
  },
  {
    id: '5',
    title: 'Kiralananın Tahliyesi Dava Dilekçesi (İhtiyaç Nedeniyle)',
    slug: 'kiralananin-tahliyesi-dava-dilekcesi',
    category: 'Gayrimenkul Hukuku',
    content: `
      <div class="font-serif space-y-4 text-justify">
        <p class="text-center font-bold">... SULH HUKUK MAHKEMESİNE</p>
        <br/>
        <p><strong>DAVACI :</strong> (Adınız Soyadınız, T.C. Kimlik No)</p>
        <p><strong>VEKİLİ :</strong> Av. Ramazan ŞİMŞEK - RS Avukatlık</p>
        <p><strong>DAVALI :</strong> (Kiracının Adı Soyadı)</p>
        <p><strong>KONU :</strong> İhtiyaç nedeniyle kiralananın tahliyesi talebidir.</p>
        <br/>
        <p class="text-center font-bold">AÇIKLAMALAR</p>
        <p>1. Davalı, mülkiyeti müvekkile ait olan ... adresindeki taşınmazda ... başlangıç tarihli kira sözleşmesi ile kiracı olarak oturmaktadır.</p>
        <p>2. Müvekkilin (veya bakmakla yükümlü olduğu yakınının) konut ihtiyacı doğmuştur. (İhtiyacın neden kaynaklandığını detaylıca anlatınız - Örn: Kirada oturuyor olması, evlenmesi, tayin olması vb.).</p>
        <p>3. Bu ihtiyaç gerçek, samimi ve zorunludur. Müvekkil, TBK m. 350 uyarınca yasal süresi içinde davalıya ihtarname çekmiş, ancak davalı evi tahliye etmemiştir.</p>
        <p>4. RS Avukatlık olarak yürüttüğümüz süreçte arabuluculuk görüşmelerinden de sonuç alınamamıştır.</p>
        <br/>
        <p><strong>HUKUKİ DELİLLER :</strong> <br/>
           1. Kira sözleşmesi<br/>
           2. Tapu kaydı<br/>
           3. İhtarname ve tebliğ şerhi<br/>
           4. Arabuluculuk tutanağı<br/>
           5. Tanık beyanları
        </p>
        <p><strong>SONUÇ VE İSTEM :</strong> Yukarıda açıklanan nedenlerle, haklı davamızın kabulü ile davalının kiralanandan TAHLİYESİNE, yargılama giderleri ve vekalet ücretinin davalıya yükletilmesine karar verilmesini arz ve talep ederiz.</p>
        <br/>
        <p class="text-right"><strong>Davacı Vekili<br/>Av. Ramazan ŞİMŞEK<br/>(RS Avukatlık)</strong></p>
      </div>
    `
  },
  {
    id: '6',
    title: 'Tüketici Hakem Heyeti Başvuru Dilekçesi (Ayıplı Mal)',
    slug: 'tuketici-hakem-heyeti-basvuru',
    category: 'Tüketici Hukuku',
    content: `
      <div class="font-serif space-y-4 text-justify">
        <p class="text-center font-bold">... İLÇESİ TÜKETİCİ HAKEM HEYETİ BAŞKANLIĞINA</p>
        <br/>
        <p><strong>ŞİKAYET EDEN :</strong> (Adınız Soyadınız, T.C. Kimlik No)</p>
        <p><strong>ADRES :</strong> (Adresiniz)</p>
        <p><strong>ŞİKAYET EDİLEN :</strong> (Satıcı Firmanın Adı)</p>
        <p><strong>KONU :</strong> Ayıplı malın bedel iadesi talebidir.</p>
        <p><strong>UYUŞMAZLIK BEDELİ :</strong> ... TL</p>
        <br/>
        <p class="text-center font-bold">AÇIKLAMALAR</p>
        <p>1. ... tarihinde şikayet edilen firmadan ... TL bedelle ... marka/model ürünü satın aldım (Fatura ektedir).</p>
        <p>2. Ürünü kullanmaya başladıktan kısa bir süre sonra ... arızası verdi. (Arızayı detaylandırın).</p>
        <p>3. Satıcı firmaya başvurmama rağmen "kullanıcı hatası" denilerek talebim reddedildi / servisten sonuç alamadım.</p>
        <p>4. Oysa ki 6502 sayılı Tüketici Kanunu'na göre ürün ayıplıdır. RS Avukatlık danışmanlığında haklarımı öğrendim. Seçimlik haklarımdan "sözleşmeden dönme ve bedel iadesi" hakkımı kullanmak istiyorum.</p>
        <br/>
        <p><strong>DELİLLER :</strong> Fatura, servis fişi, ürün fotoğrafları, yazışmalar.</p>
        <p><strong>SONUÇ VE İSTEM :</strong> Ayıplı ürünün satıcıya iadesi ile ödediğim ... TL bedelin tarafıma yasal faiziyle birlikte iadesine karar verilmesini arz ederim.</p>
        <br/>
        <p class="text-right"><strong>Şikayet Eden<br/>(Adı Soyadı - İmza)</strong></p>
      </div>
    `
  },
  {
    id: '7',
    title: 'İcra Takibine İtiraz Dilekçesi (Borca İtiraz)',
    slug: 'icra-takibine-itiraz-dilekcesi',
    category: 'İcra İflas Hukuku',
    content: `
      <div class="font-serif space-y-4 text-justify">
        <p class="text-center font-bold">... İCRA MÜDÜRLÜĞÜNE</p>
        <br/>
        <p><strong>DOSYA NO :</strong> 2024/... E.</p>
        <p><strong>İTİRAZ EDEN<br/>BORÇLU :</strong> (Adınız Soyadınız, T.C. Kimlik No)</p>
        <p><strong>ADRES :</strong> (Tebligat Adresiniz)</p>
        <p><strong>ALACAKLI :</strong> (Alacaklının Adı)</p>
        <p><strong>VEKİLİ :</strong> (Varsa Avukatı)</p>
        <p><strong>KONU :</strong> Ödeme emrine, borca, faize ve tüm ferilerine itirazımdır.</p>
        <br/>
        <p class="text-center font-bold">AÇIKLAMALAR</p>
        <p>1. Müdürlüğünüzün yukarıda numarası yazılı dosyasından tarafıma ilamsız icra takibi başlatılmış ve ödeme emri ... tarihinde tebliğ edilmiştir.</p>
        <p>2. Alacaklı tarafa herhangi bir borcum bulunmamaktadır. (Borcunuz yoksa "Borcum yoktur", ödediyseniz "Borcu ödedim" yazıp dekont sununuz, zamanaşımı varsa belirtiniz).</p>
        <p>3. Talep edilen asıl alacak, işlemiş faiz ve faiz oranları fahiş ve hatalıdır. Hepsine açıkça itiraz ediyorum.</p>
        <p>4. RS Avukatlık ile yaptığım değerlendirme sonucunda, yasal süresi içinde (7 gün) itiraz hakkımı kullanıyorum.</p>
        <br/>
        <p><strong>SONUÇ VE İSTEM :</strong> Yukarıda açıklanan nedenlerle; borca, faize ve takibe <strong>AÇIKÇA İTİRAZ EDİYORUM</strong>. Hakkımda başlatılan icra takibinin DURDURULMASINA karar verilmesini saygılarımla talep ederim.</p>
        <br/>
        <p class="text-right"><strong>İtiraz Eden Borçlu<br/>(Adı Soyadı - İmza)</strong></p>
      </div>
    `
  },
  {
    id: '8',
    title: 'Kişisel Verilerin Silinmesi Talebi (KVKK Başvuru)',
    slug: 'kvkk-veri-silme-talebi',
    category: 'Bilişim Hukuku',
    content: `
      <div class="font-serif space-y-4 text-justify">
        <p class="text-center font-bold">VERİ SORUMLUSU ŞİRKET/KURUM ADINA</p>
        <br/>
        <p><strong>BAŞVURAN :</strong> (Adınız Soyadınız, T.C. Kimlik No)</p>
        <p><strong>ADRES :</strong> (Adresiniz - E-posta adresiniz)</p>
        <p><strong>KONU :</strong> 6698 Sayılı KVKK m. 11 uyarınca kişisel verilerimin silinmesi/yok edilmesi talebidir.</p>
        <br/>
        <p class="text-center font-bold">AÇIKLAMALAR</p>
        <p>1. Şirketiniz/Kurumunuz nezdinde işlenen kişisel verilerim bulunmaktadır. (Müşteri kaydı, üyelik bilgisi vb.).</p>
        <p>2. Ancak kişisel verilerimin işlenmesini gerektiren sebepler ortadan kalkmıştır / Açık rızamı geri çekiyorum.</p>
        <p>3. 6698 sayılı Kişisel Verilerin Korunması Kanunu'nun 11. ve 7. maddeleri uyarınca; verilerimin veri kayıt sisteminizden silinmesini, yok edilmesini veya anonim hale getirilmesini talep ediyorum.</p>
        <p>4. Ayrıca verilerim üçüncü kişilere aktarıldıysa, bu işlemin onlara da bildirilmesini istiyorum.</p>
        <p>5. Talebime en geç 30 gün içinde yazılı veya elektronik ortamda cevap verilmesini RS Avukatlık danışmanlığında edindiğim haklarım çerçevesinde ihtar ederim.</p>
        <br/>
        <p class="text-right"><strong>Başvuran<br/>(Adı Soyadı - İmza)</strong></p>
      </div>
    `
  }
];

export const articles: Article[] = [
  {
    id: '1',
    slug: '2024-is-hukuku-degisiklikleri',
    title: '2024 Yılında İş Hukukunda Yapılan Değişiklikler',
    excerpt: 'İş hukuku mevzuatında 2024 yılında yapılan önemli düzenlemeler ve iş dünyasına etkileri hakkında detaylı bilgiler.',
    content: `<p>2024 yılı, iş hukuku alanında önemli değişikliklerin yaşandığı bir yıl oldu. Özellikle kıdem tazminatı, fazla mesai ve iş güvenliği konularında yapılan düzenlemeler işçi ve işverenleri yakından ilgilendiriyor.</p>
    <h2>Kıdem Tazminatı Taban ve Tavan Ücretleri</h2>
    <p>Yeni düzenleme ile birlikte kıdem tazminatı tavanı güncellendi. Bu durum, uzun süredir çalışan ve yüksek maaş alan çalışanların tazminat hesaplamalarını doğrudan etkilemektedir.</p>
    <h2>Uzaktan Çalışma Yönetmeliği</h2>
    <p>Pandemi sonrası kalıcı hale gelen uzaktan çalışma modeli için yeni yasal çerçeveler belirlendi. İşverenlerin uzaktan çalışanlara sağlaması gereken ekipmanlar ve yan haklar netleştirildi.</p>`,
    date: '15 Ocak 2024',
    category: 'İş Hukuku',
    author: 'Av. Ramazan Şimşek',
    readTime: '5 dk',
  },
  {
    id: '2',
    slug: 'bosanma-davalarinda-velayet',
    title: 'Boşanma Davalarında Velayet Hakkı',
    excerpt: 'Velayet hakkının belirlenmesinde mahkemelerin dikkate aldığı kriterler ve son güncellemeler hakkında kapsamlı bilgi.',
    content: `<p>Boşanma davalarında en hassas konulardan biri velayet hakkının belirlenmesidir. Mahkemeler, çocuğun üstün yararını gözeterek karar verirken birçok faktörü değerlendiriyor.</p>
    <h2>Çocuğun Üstün Yararı İlkesi</h2>
    <p>Velayet kararlarında temel kriter, çocuğun fiziksel, zihinsel ve ruhsal gelişiminin en iyi şekilde sağlanmasıdır. Hakim, anne ve babanın ekonomik durumundan ziyade, çocuğa sunabilecekleri manevi ortama odaklanır.</p>
    <h2>Ortak Velayet Uygulaması</h2>
    <p>Son yıllarda artan ortak velayet kararları, ebeveynlerin boşansalar bile çocuklarının sorumluluğunu eşit şekilde paylaşmalarına olanak tanımaktadır.</p>`,
    date: '10 Ocak 2024',
    category: 'Aile Hukuku',
    author: 'Av. Ramazan Şimşek',
    readTime: '7 dk',
  },
  {
    id: '3',
    slug: 'kira-sozlesmeleri-dikkat',
    title: 'Kira Sözleşmelerinde Dikkat Edilmesi Gerekenler',
    excerpt: 'Kira sözleşmesi yapmadan önce bilmeniz gereken haklarınız ve yükümlülükleriniz hakkında önemli bilgiler.',
    content: `<p>Kira sözleşmesi, kiracı ve kiralayan arasındaki hukuki ilişkinin temelini oluşturur. Doğru hazırlanmış bir sözleşme, ileride yaşanabilecek uyuşmazlıkların önlenmesine yardımcı olur.</p>
    <h2>Kira Artış Oranı Sınırlaması</h2>
    <p>Konut kiralarında uygulanan %25 artış sınırı ve işyeri kiralarındaki TÜFE uygulaması hakkında bilinmesi gerekenler.</p>
    <h2>Depozito ve İade Şartları</h2>
    <p>Depozitonun hangi durumlarda kesilebileceği ve sözleşme bitiminde nasıl iade alınacağı konusu, kiracıların en çok mağduriyet yaşadığı alanlardan biridir.</p>`,
    date: '5 Ocak 2024',
    category: 'Gayrimenkul Hukuku',
    author: 'Av. Ramazan Şimşek',
    readTime: '6 dk',
  },
  {
    id: '4',
    slug: 'ceza-hukukunda-uzlastirma',
    title: 'Ceza Hukukunda Uzlaştırma Nedir?',
    excerpt: 'Uzlaştırma kavramı, şartları ve süreci hakkında bilmeniz gereken her şey.',
    content: `<p>Uzlaştırma, ceza hukukunda önemli bir alternatif uyuşmazlık çözüm yöntemidir. Şikayete bağlı suçlarda ve belirli şartları taşıyan davalarda uygulanabilir.</p>
    <h2>Uzlaştırma Kapsamına Giren Suçlar</h2>
    <p>Hakaret, tehdit, basit yaralama gibi suçlar uzlaştırma kapsamındadır. Bu süreçte taraflar, bir uzlaştırmacı eşliğinde anlaşmaya vararak dava sürecini sonlandırabilirler.</p>`,
    date: '28 Aralık 2023',
    category: 'Ceza Hukuku',
    author: 'Av. Ramazan Şimşek',
    readTime: '8 dk',
  },
  {
    id: '5',
    slug: 'sirket-kurulumu-rehberi',
    title: 'Şirket Kurulumunda Dikkat Edilmesi Gerekenler',
    excerpt: 'Yeni bir şirket kurarken atmanız gereken adımlar ve hukuki süreç hakkında rehber.',
    content: `<p>Şirket kurulumu, girişimcilik yolundaki ilk ve en önemli adımdır. Doğru şirket türünün seçimi, sermaye yapısının belirlenmesi ve gerekli belgelerin hazırlanması kritik önem taşır.</p>
    <h2>Limited mi Anonim mi?</h2>
    <p>Girişimcilerin en çok zorlandığı konulardan biri şirket türü seçimidir. Her iki türün de avantajları ve dezavantajları, iş hacminize ve hedeflerinize göre değerlendirilmelidir.</p>`,
    date: '20 Aralık 2023',
    category: 'Ticaret Hukuku',
    author: 'Av. Ramazan Şimşek',
    readTime: '10 dk',
  },
  {
    id: '6',
    slug: 'icra-takibi-nasil-baslatilir',
    title: 'İcra Takibi Nasıl Başlatılır?',
    excerpt: 'Alacaklıların haklarını koruma yollarından biri olan icra takibi süreci hakkında bilgiler.',
    content: `<p>İcra takibi, borçlunun ödeme yapmaması durumunda alacaklının başvurabileceği yasal bir yoldur. İcra müdürlüklerine yapılan başvuru ile başlayan bu süreç, ödeme emrinin gönderilmesi ile devam eder.</p>
    <h2>İlamsız İcra Takibi</h2>
    <p>Herhangi bir mahkeme kararı olmaksızın başlatılabilen bu takip türü, özellikle fatura ve cari hesap alacakları için tercih edilir.</p>`,
    date: '15 Aralık 2023',
    category: 'İcra İflas Hukuku',
    author: 'Av. Ramazan Şimşek',
    readTime: '6 dk',
  },
  {
    id: '7',
    slug: 'rizai-satis-nedir',
    title: 'Rızai Satış Nedir? İcra ve İflas Hukukunda Rızai Satış Süreci ve Avantajları',
    excerpt: 'Rızai satış, borçlunun malını gerçek değerine satabilmesi ve alacaklının daha hızlı tahsilat yapabilmesi için cebri satışa alternatif olarak getirilen modern bir yöntemdir.',
    content: `<p>Rızai satış, 7343 Sayılı Kanun ile 2004 Sayılı İcra ve İflas Kanunu’na eklenen 111/a maddesi kapsamında hukuk sistemimize dahil edilmiş ve cebri satışa alternatif olarak düzenlenmiş bir satış yöntemidir. Bu düzenlemenin amacı, icra süreçlerinin uzun sürmesi nedeniyle hem alacaklının geç tahsilat yapmasını hem de borçlunun malının gerçek değerinin altında satılmasını önlemektir.</p>
    <h2>Rızai Satışın Amacı</h2>
    <p>Cebri satışlarda taşınmaz veya taşınır mallar çoğu zaman piyasa değerinin altında el değiştirebilmekte ve satış süreci uzun sürebilmektedir. Rızai satış uygulaması ise:</p>
    <ul>
      <li>Borçlunun malını gerçek piyasa değerine daha yakın bir bedelle satabilmesini,</li>
      <li>Alacaklının alacağına daha hızlı kavuşmasını,</li>
      <li>Satış sürecinin daha kısa ve ekonomik şekilde tamamlanmasını amaçlamaktadır.</li>
    </ul>
    <h2>Rızai Satış Nasıl Yapılır?</h2>
    <p>Rızai satış süreci belirli aşamalardan oluşmaktadır:</p>
    <ul>
      <li>Öncelikle haczedilen mal için kıymet takdiri yapılır ve kesinleşir.</li>
      <li>Kıymet takdiri tebliğinden itibaren 7 gün içinde borçlu, icra dairesinden rızai satış için yetki talep eder.</li>
      <li>Kıymet takdirinin kesinleşmesiyle birlikte icra müdürlüğü, borçluya 15 gün süre vererek müşteri bulmasını ister.</li>
      <li>Borçlunun bulduğu alıcı, belirlenen bedeli dosyaya yatırır.</li>
      <li>İcra müdürlüğü şartların uygunluğunu denetledikten sonra dosya icra mahkemesine gönderilir.</li>
      <li>Mahkeme en geç 10 gün içinde satışın kabulüne veya reddine karar verir.</li>
      <li>Satışın kabulü halinde malın mülkiyeti alıcıya geçer ve hacizler kaldırılır.</li>
    </ul>
    <h2>Rızai Satışta Bedel Şartı</h2>
    <p>Kanuna göre satış bedeli:</p>
    <ul>
      <li>Malın muhammen kıymetinin %90’ından az olamaz,</li>
      <li>Rehinli alacaklar ve takip masrafları da dikkate alınır,</li>
      <li>Dosyaya yatırılacak bedel bu tutarların altında olamaz.</li>
    </ul>
    <p>Bu düzenleme ile hem alacaklı hem de borçlu korunmaktadır.</p>
    <h2>Rızai Satışın Avantajları</h2>
    <p>Rızai satış uygulaması sayesinde:</p>
    <ul>
      <li>Malın gerçek değerine yakın satış yapılabilir</li>
      <li>Uzun ihale süreçleri beklenmez</li>
      <li>Borçlu daha az zararla süreci tamamlar</li>
      <li>Alacaklı alacağını daha hızlı tahsil eder</li>
      <li>Taraf menfaatleri dengelenir</li>
    </ul>
    <h2>Sonuç</h2>
    <p>Rızai satış, icra hukukunda hem borçlu hem de alacaklı için daha adil ve hızlı bir çözüm sunan modern bir uygulamadır. Özellikle yüksek değerli taşınmaz ve ticari malların satışında önemli avantaj sağlamaktadır.</p>`,
    date: '6 Şubat 2026',
    category: 'İcra İflas Hukuku',
    author: 'Av. Ramazan Şimşek',
    readTime: '4 dk',
  },
  {
    id: '8',
    slug: 'bosanma-davasinda-ziynet-alacagi-kime-aittir',
    title: 'Boşanma Davasında Ziynet Alacağı Kime Aittir? Yargıtay’ın Yerleşik Uygulaması',
    excerpt: 'Boşanma davalarında düğün takıları ve ziynet eşyalarının kime ait olduğu, Yargıtay\'ın yerleşik uygulamaları, ispat yükü ve dava süreci hakkında detaylı bilgiler.',
    content: `<p>Boşanma davalarında en sık karşılaşılan uyuşmazlıklardan biri ziynet alacağıdır. Düğün sırasında takılan altın ve ziynet eşyalarının kime ait olduğu, hangi şartlarda talep edilebileceği ve ispat yükünün kimde olduğu hususları Yargıtay içtihatlarıyla şekillenmiştir.</p>
    <h2>Ziynet Eşyalarının Hukuki Niteliği</h2>
    <p>Yargıtay’ın yerleşik ve istikrarlı uygulamasına göre, düğün sırasında takılan ziynet eşyaları, kadına bağışlanmış sayılır ve kadının kişisel malı niteliğindedir.</p>
    <p>Bu kabulün dayanağı:</p>
    <ul>
      <li>Toplumsal örf ve adetler,</li>
      <li>Ziynetlerin kadının süs eşyası olması,</li>
      <li>Bağış iradesinin var sayılmasıdır.</li>
    </ul>
    <p>Bu nedenle, ziynet eşyaları edinilmiş mal kapsamında değerlendirilmez ve mal rejimi tasfiyesine konu edilmez.</p>
    <h2>Bu Kuralın İstisnaları Var mıdır?</h2>
    <p>Evet. Yargıtay uygulamasında bu kural mutlak değildir. Aşağıdaki hallerde farklı değerlendirme yapılabilir:</p>
    <ul>
      <li>Taraflar arasında ziynetlerin ortak kullanıma tahsis edildiğine dair açık bir anlaşma varsa,</li>
      <li>Ziynetlerin kadının rızasıyla bozdurulup ortak ihtiyaçlar için harcandığı ispatlanırsa,</li>
      <li>Ziynetlerin kadında değil, karşı tarafta kaldığı somut delillerle ortaya konulursa.</li>
    </ul>
    <p>Ancak bu iddialar, iddia eden tarafça ispat edilmek zorundadır.</p>
    <h2>Ziynetler Evde Kaldıysa Ne Olur?</h2>
    <p>Uygulamada sıkça karşılaşılan bir durum, kadının ortak konutu terk ederken ziynetleri yanında götürmediği iddiasıdır. Yargıtay’a göre:</p>
    <ul>
      <li>Kadının evi ziynetleri almadan ve kendi isteğiyle terk ettiği ispatlanırsa,</li>
      <li>Ziynetlerin kadında kaldığı yönünde fiili karine oluşabilir.</li>
    </ul>
    <p>Ancak yalnızca soyut iddialar veya tek başına tanık anlatımları yeterli kabul edilmez. Her somut olay, delilleriyle birlikte değerlendirilir.</p>
    <h2>İspat Yükü Kime Aittir?</h2>
    <p>Ziynet alacağı talep eden taraf:</p>
    <ul>
      <li>Ziynetlerin varlığını,</li>
      <li>Türünü ve miktarını,</li>
      <li>Karşı tarafta kaldığını</li>
    </ul>
    <p>ispatla yükümlüdür. Buna karşılık, ziynetlerin bozdurulduğunu veya ortak harcamalarda kullanıldığını iddia eden taraf da bu iddiasını somut delillerle ispatlamak zorundadır.</p>
    <h2>Ziynet Alacağı Nasıl Talep Edilir?</h2>
    <p>Ziynet alacağı:</p>
    <ul>
      <li>Boşanma davası ile birlikte,</li>
      <li>Ya da boşanma davasının kesinleşmesinden sonra ayrı bir dava yoluyla talep edilebilir.</li>
    </ul>
    <p>Aynen iade mümkün değilse, dava tarihindeki bedel üzerinden alacak talep edilebilir.</p>
    <h2>Uygulamada En Sık Yapılan Hatalar</h2>
    <ul>
      <li>Ziynetlerin tür ve miktarının net belirtilmemesi</li>
      <li>Delil sunulmadan dava açılması</li>
      <li>Çelişkili tanık beyanlarına dayanılması</li>
      <li>Ziynetlerin ortak harcandığı iddiasının ispatlanamaması</li>
    </ul>
    <p>Bu hatalar, davanın reddiyle sonuçlanabilmektedir.</p>
    <h2>Sonuç</h2>
    <p>Ziynet alacağı davaları, Yargıtay’ın yerleşik içtihatları doğrultusunda delil ağırlıklı olarak değerlendirilir. Her somut olayın kendine özgü şartları bulunduğundan, hak kaybı yaşanmaması adına hukuki sürecin dikkatle yürütülmesi gerekir.</p>
    <p><em>Bu yazı genel bilgilendirme amacıyla hazırlanmış olup, somut uyuşmazlıklarda bir avukata danışılması önerilir.</em></p>`,
    date: '6 Şubat 2026',
    category: 'Aile Hukuku',
    author: 'Av. Ramazan Şimşek',
    readTime: '5 dk',
  },
  {
    id: '9',
    slug: 'gozalti-nedir-ne-kadar-surebilir',
    title: 'Gözaltı Nedir, Ne Kadar Sürebilir? Yasal Haklarınız ve Süreç',
    excerpt: 'Gözaltı süresi, yasal haklarınız, avukat isteme hakkı ve gözaltında dikkat edilmesi gerekenler hakkında kapsamlı rehber.',
    content: `<p class="text-justify mb-4"><strong>Gözaltı Nedir?</strong><br>
    Gözaltı, soruşturmanın gerektirdiği durumlarda savcının emriyle uygulanan geçici bir tedbirdir. Polis kural olarak kendi başına gözaltı kararı veremez. Gözaltına alınmak, kişinin suçlu olduğu anlamına gelmez; yalnızca soruşturma sürecinin bir aşamasıdır.</p>
    
    <p class="text-justify mb-4"><strong>Gözaltı Süresi Ne Kadardır?</strong><br>
    Normal suçlarda gözaltı süresi en fazla 24 saattir. Bu süreye, kişinin en yakın adliyeye götürülmesi için geçen zaman dâhil değildir. Toplu suçlarda ve soruşturmanın zor olduğu durumlarda bu süre 48 saate kadar uzayabilir.</p>
    
    <p class="text-justify mb-4"><strong>Gözaltı Süresi Bitince Ne Olur?</strong><br>
    Süre sonunda kişi ya serbest bırakılır ya da hâkim önüne çıkarılır. Hâkim tutuklama kararı verirse kişi tutuklanabilir, aksi halde serbest kalır.</p>
    
    <p class="text-justify mb-4"><strong>Polis Gözaltı Sırasında Hangi Bilgileri Vermek Zorundadır?</strong><br>
    Polis, gözaltına alınan kişiye hangi suç isnadıyla gözaltına alındığını, soruşturmanın konusunu ve sahip olduğu hakları açık ve anlaşılır biçimde bildirmek zorundadır.</p>
    
    <p class="text-justify mb-4"><strong>Gözaltında Avukatla Görüşme Hakkı Var mı?</strong><br>
    Evet. Kişi gözaltına alındığı andan itibaren avukatla görüşebilir. Avukat olmadan ifade alınamaz. Eğer kişinin avukatı yoksa baro tarafından ücretsiz avukat talep edebilir.</p>
    
    <p class="text-justify mb-4"><strong>Gözaltında İfade Vermek Zorunlu mudur?</strong><br>
    Hayır. Kişi ifade vermek zorunda değildir ve susma hakkını kullanabilir. “Susma hakkımı kullanıyorum” demek yeterlidir.</p>
    
    <p class="text-justify mb-4"><strong>Tercüman Talep Edilebilir mi?</strong><br>
    Eğer kişi Türkçe bilmiyor veya kendini ifade etmekte zorlanıyorsa resmi tercüman talep etme hakkına sahiptir.</p>
    
    <p class="text-justify mb-4"><strong>Sağlık Kontrolü Yapılır mı?</strong><br>
    Evet. Gözaltı sürecinin başında ve sonunda, ayrıca gerekli görüldüğünde kişi sağlık kontrolünden geçirilir. Bu uygulama kişinin sağlık durumunun kayıt altına alınması için önemlidir.</p>
    
    <p class="text-justify mb-4"><strong>Yakınlara Haber Verme Hakkı Var mı?</strong><br>
    Gözaltına alınan kişi ailesini veya istediği bir yakını bilgilendirme hakkına sahiptir. Polis bu hakkı kural olarak engelleyemez.</p>
    
    <p class="text-justify mb-4"><strong>Gözaltında Neler Yapılmamalıdır?</strong><br>
    Fiziksel direniş göstermek, avukat olmadan rastgele açıklamalarda bulunmak veya hukuki sonuçlarını bilmeden ifade vermek kişinin aleyhine sonuç doğurabilir.</p>
    
    <p class="text-justify mb-4"><strong>Telefon Şifresi Vermek Zorunlu mudur?</strong><br>
    Kişinin telefon şifresini verme zorunluluğu bulunmaz. Telefonda inceleme yapılabilmesi için kural olarak yargı kararı gerekir.</p>
    
    <p class="text-justify mb-4"><strong>Sonuç Olarak Haklarınız Nelerdir?</strong><br>
    Gözaltı sürecinde avukatla görüşme, susma, sağlık kontrolünden geçme, yakınlara haber verme ve süreyle sınırlı gözaltı gibi temel haklarınız hukuken güvence altındadır.</p>`,
    date: '6 Şubat 2026',
    category: 'Ceza Hukuku',
    author: 'Av. Ramazan Şimşek',
    readTime: '6 dk',
  },
  {
    id: '10',
    slug: 'kvkk-verbis-kayit-zorunlulugu',
    title: 'KVKK Çerçevesinde Şirketlerin VERBİS’e Kayıt Zorunluluğu',
    excerpt: 'KVKK kapsamında VERBİS nedir, kimler kayıt olmak zorundadır ve kayıt yaptırmamanın sonuçları nelerdir? Şirketler için kapsamlı uyum rehberi.',
    content: `<p class="text-justify mb-4">6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK), kişisel verilerin hukuka uygun biçimde işlenmesini, bireylerin veri güvenliğinin sağlanmasını ve veri sorumlularının yürüttükleri işlemler bakımından şeffaf ve denetlenebilir bir sistem kurmalarını amaçlamaktadır. Kanunun temel yaklaşımı, veri güvenliğinin sağlanması ve veri sorumlularının hesap verebilir bir yapı içerisinde faaliyet göstermesidir.</p>

    <h2>Veri Sorumlusu Kimdir?</h2>
    <p>KVKK’nın 3. maddesi uyarınca veri sorumlusu; kişisel verilerin hangi amaçla ve hangi yöntemlerle işleneceğine karar veren, veri kayıt sisteminin kurulması ve yönetilmesinden sorumlu gerçek ya da tüzel kişidir. Kanunun 4. maddesinde düzenlenen ilkelere göre veriler; hukuka ve dürüstlük kurallarına uygun, doğru, güncel ve belirli meşru amaçlarla işlenmelidir.</p>
    
    <h2>VERBİS Nedir ve Neden Kurulmuştur?</h2>
    <p>Kişisel veri işleme süreçlerinin kayıt altına alınması ve kamu denetimine açık hale getirilmesi amacıyla Veri Sorumluları Sicili Bilgi Sistemi (VERBİS) oluşturulmuştur. Bu sistem aracılığıyla veri sorumluları; işledikleri veri kategorilerini, amaçlarını, saklama sürelerini ve alınan güvenlik önlemlerini kamuya açık şekilde beyan etmektedir.</p>

    <h2>VERBİS’e Kayıt Zorunluluğu</h2>
    <p>KVKK’nın 16. maddesi gereğince, veri sorumlularının kişisel veri işlemeye başlamadan önce Veri Sorumluları Siciline kayıt yaptırmaları zorunludur. Kayıt sürecinde; işlenecek veri türleri, amaçları, aktarım yapılacak taraflar ve güvenlik tedbirleri sisteme bildirilir. Başvurunun Kurum tarafından onaylanmasıyla kayıt tamamlanmış sayılır.</p>

    <h2>Denetimlerde VERBİS Kaydının Önemi</h2>
    <p>Şirketlere yönelik KVKK incelemelerinde ilk kontrol edilen husus, VERBİS kaydının bulunup bulunmadığıdır. Sicile kayıt, şirketin veri işleme süreçlerini sistematik biçimde değerlendirdiğini gösterir. Kurum, şikâyet olmasa dahi resen inceleme başlatabilir ve ihlal durumunda idari para cezaları uygulayabilir.</p>

    <h2>Kayıt Yükümlülüğüne Getirilen İstisnalar</h2>
    <p>Yönetmelik ve Kurul kararları doğrultusunda; suç soruşturması, ilgili kişi tarafından alenileştirilmiş veriler, kamu denetimi ve devletin ekonomik çıkarlarının korunması gibi durumlarda kayıt zorunluluğuna istisna tanınabilir.</p>

    <h2>Hangi Şirketler Kayıt Yaptırmak Zorundadır?</h2>
    <p>Kurul kararları uyarınca; Türkiye’de yerleşik olup 50’den fazla çalışanı bulunan veya yıllık mali bilançosu belirlenen sınırın üzerinde olan işletmeler VERBİS’e kayıt yaptırmak zorundadır. Ayrıca Türkiye’de faaliyet göstermeyen ancak Türkiye’deki kişilere ait verileri işleyen yabancı şirketler de bu kapsamdadır.</p>

    <h2>Kayıt Yaptırmamanın Sonuçları</h2>
    <p>VERBİS kaydını yaptırmayan veri sorumluları hakkında KVKK’nın 18. maddesi uyarınca yüksek tutarlarda idari para cezaları uygulanmaktadır. Bu durum, şirketler açısından hem mali hem de itibari risk doğurmaktadır.</p>

    <h2>Sonuç</h2>
    <p>VERBİS kaydı, yalnızca şekli bir zorunluluk değil, şirketlerin hukuka uygunluk adımının bir göstergesidir. Veri sorumlularının süreçlerini gözden geçirmeleri ve kayıtlarını eksiksiz tamamlamaları, hukuki güvenlik ve kurumsal itibar açısından büyük önem taşımaktadır.</p>`,
    date: '6 Şubat 2026',
    category: 'Bilişim Hukuku',
    author: 'Av. Ramazan Şimşek',
    readTime: '7 dk',
  },
];

export const contactInfo: ContactInfo = {
  phone: '+90 544 273 60 27',
  email: 'av.ramazansimsek@gmail.com',
  address: 'Mustafa Kemal Caddesi, Seyit Gazi Sokak No: 66 Hukukçular Towers A Blok Kat 18 Daire 110 Cevizli 34865 Kartal / İSTANBUL',
  workingHours: 'Pazartesi - Cuma: 09:00 - 18:00',
};

export const socialLinks: SocialLinks = {
  instagram: 'https://www.instagram.com/av.ramazansimsek',
  linkedin: 'https://www.linkedin.com/in/ramazan-%C5%9Fim%C5%9Fek',
};

export const aboutContent = {
  mission: `RS Avukatlık olarak etik ilkelerden ödün vermeden seçkin kadromuz müvekkil memnuniyeti odaklı, ulusal ve uluslararası kalite standartlarında hizmet anlayışı ile sektörde öncü uygulamalarla fark yaratmak ve sağladığımız hizmeti gerek ulusal gerekse uluslararası ihtiyaçların karşılanması ve kalite sürekliliğinin sağlanması için güncel hukuki, finansal, bilimsel ve teknolojik gelişmeleri yakından takip etmekte; bu doğrultuda sadece var olan sorunlara çözüm üretmekle kalmayıp beraberinde bu sorunları ortaya çıkmadan da engellemeyi amaçlamaktayız.`,
  vision: `RS Avukatlık olarak, farklı hukuk alanlarında uzmanlaşmış bir kadroya ve güçlü bir müvekkil ağına sahibiz. RS Avukatlık'ın nihai hedefi, Türkiye genelinde bulunan hukuk büroları, meslek örgütleri ve güçlü çözüm ortaklarıyla birlikte müvekkillerine en uygun hukuki çözümü, en kaliteli biçimde ve en hızlı sürede üretmek; uyuşmazlık esnasında veya öncesinde danışmanlık hizmetleri ile de müvekkillerimiz aleyhine oluşabilecek hukuki risklerin tespiti ve en aza indirgenmesini hedeflemektedir.`,
  values: [
    {
      title: 'Güvenilirlik',
      description: 'Müvekkillerimizle olan ilişkilerimizde şeffaflık ve dürüstlük ilkemizdir.',
    },
    {
      title: 'Profesyonellik',
      description: 'Her davada en yüksek mesleki standartları gözeterek hizmet veriyoruz.',
    },
    {
      title: 'Hızlı Çözüm',
      description: 'Zamanınızı değerli biliyor, süreçleri hızlandırarak sonuç alıyoruz.',
    },
    {
      title: 'Müvekkil Odaklılık',
      description: 'Her zaman müvekkillerimizin menfaatlerini ön planda tutuyoruz.',
    },
  ],
};
