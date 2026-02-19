import type { Petition } from '@/types';

export const petitions: Petition[] = [
  // --- AİLE HUKUKU (FAMILY LAW) ---
  {
    id: 'aile-1',
    title: 'Anlaşmalı Boşanma Protokolü (Detaylı)',
    slug: 'anlasmali-bosanma-protokolu',
    category: 'Aile Hukuku',
    content: `
      <div class="font-serif space-y-4 text-justify text-sm leading-relaxed">
        <p class="text-center font-bold">NÖBETÇİ AİLE MAHKEMESİNE</p>
        <br/>
        <div class="grid grid-cols-[100px_1fr] gap-2 mb-4">
            <div class="font-bold">DAVACI</div><div>: ........................................ (TC: ...)</div>
            <div class="font-bold">VEKİLİ</div><div>: <strong>Av. Ramazan ŞİMŞEK</strong><br/>RS Avukatlık</div>
            <div class="font-bold">DAVALI</div><div>: ........................................ (TC: ...)</div>
            <div class="font-bold">KONU</div><div>: Anlaşmalı Boşanma talebimiz ve eki olan Protokolün sunulmasıdır.</div>
        </div>

        <h4 class="font-bold border-b border-black mb-2">AÇIKLAMALAR</h4>
        <p><strong>1-</strong> Taraflar .../.../.... tarihinde evlenmiş olup, evlilik birliğinin devamı eşler için imkansız hale gelmiştir.</p>
        <p><strong>2-</strong> Taraflar özgür iradeleriyle boşanma, velayet, nafaka ve tazminat gibi tüm hususlarda anlaşmışlardır. Bu anlaşmayı içeren <strong>PROTOKOL</strong> ektedir.</p>

        <h4 class="text-center font-bold text-base border-b border-gray-300 pb-2 mb-4 mt-6">EK: ANLAŞMALI BOŞANMA PROTOKOLÜ</h4>
        
        <p><strong>1. TARAFLAR:</strong><br/>
        Bir tarafta <strong>........................................</strong> ile diğer tarafta <strong>........................................</strong>, aşağıdaki şartlarda boşanma konusunda tam bir mutabakata varmışlardır.</p>

        <p><strong>2. BOŞANMA İRADESİ:</strong><br/>
        Taraflar, TMK m. 166/3 uyarınca <strong>BOŞANMAYI</strong> kabul ve taahhüt ederler.</p>

        <p><strong>3. VELAYET VE KİŞİSEL İLİŞKİ:</strong><br/>
        Müşterek çocuk <strong>....................</strong>'nın velayeti <strong>ANNE/BABA</strong>'ya verilecektir.<br/>
        Diğer taraf ile çocuk arasında, her ayın belirli hafta sonları ve dini bayramlarda şahsi ilişki kurulacaktır.</p>

        <p><strong>4. NAFAKA VE TAZMİNAT:</strong><br/>
        Taraflar birbirlerinden yoksulluk nafakası veya tazminat talep etmemektedir. / Müşterek çocuk için aylık ... TL iştirak nafakası ödenecektir.</p>

        <p><strong>5. MAL REJİMİ:</strong><br/>
        Tarafların birbirlerinden mal rejimi kaynaklı (katılma alacağı vb.) herhangi bir talebi yoktur.</p>

        <br/>
        <div class="flex justify-between mt-8 pt-4 border-t border-gray-200">
            <div class="text-center">
                <strong>DAVACI (KOCA)</strong><br/>(İmza)
            </div>
            <div class="text-center">
                <strong>DAVALI (KADIN)</strong><br/>(İmza)
            </div>
        </div>
        
        <div class="text-right mt-8 pt-4">
             <p><strong>DAVACI VEKİLİ</strong><br/><strong>Av. Ramazan ŞİMŞEK</strong><br/>(İmza)</p>
        </div>
      </div>`
  },
  {
    id: 'aile-2',
    title: 'Çekişmeli Boşanma Dava Dilekçesi (Şiddetli Geçimsizlik)',
    slug: 'cekismeli-bosanma-dava-dilekcesi',
    category: 'Aile Hukuku',
    content: `
      <div class="font-serif space-y-4 text-justify text-sm leading-relaxed">
        <p class="text-center font-bold">İSTANBUL (  ). AİLE MAHKEMESİNE</p>
        <br/>
        <div class="grid grid-cols-[100px_1fr] gap-2 mb-4">
            <div class="font-bold">DAVACI</div><div>: ........................................ (TC: ...........................)<br/>Adres: ....................................................................</div>
            <div class="font-bold">VEKİLİ</div><div>: Av. Ramazan ŞİMŞEK<br/>Adres: ....................................................................</div>
            <div class="font-bold">DAVALI</div><div>: ........................................ (TC: ...........................)<br/>Adres: ....................................................................</div>
            <div class="font-bold">KONU</div><div>: Evlilik birliğinin temelinden sarsılması nedeniyle boşanma, velayet, tazminat ve nafaka talebidir.</div>
        </div>
        
        <h4 class="font-bold border-b border-black mb-2">AÇIKLAMALAR</h4>
        <p><strong>1-</strong> Müvekkilim ile davalı ... tarihinde evlenmiş olup, bu evliliklerinden ... isimli müşterek çocukları bulunmaktadır.</p>
        <p><strong>2-</strong> Evliliğin ilk günlerinden itibaren davalı eş, evlilik birliğinin kendisine yüklediği sorumlulukları ağır şekilde ihlal etmiştir. Davalı, müvekkilime karşı sürekli hakaret etmekte, fiziksel şiddet uygulamakta ve evi ihmal etmektedir.</p> 
        <p><strong>3-</strong> (Burada somut olaylar tarih ve yer belirtilerek detaylandırılmalıdır: örneğin .... tarihindeki olayda...)</p>
        <p><strong>4-</strong> Müşterek çocuğun yaşı ve anne bakımına muhtaçlığı gözetildiğinde, velayetin müvekkile verilmesi çocuğun üstün yararınadır.</p>
        <p><strong>5-</strong> Davalının tam kusurlu hareketleri nedeniyle müvekkilim maddi ve manevi zarara uğramıştır. Bu nedenle ........ TL maddi, ........ TL manevi tazminat talep zorunluluğu doğmuştur.</p>

        <h4 class="font-bold border-b border-black mb-2 mt-4">HUKUKİ SEBEPLER</h4>
        <p>TMK m. 166, 174, 175, 182 ve ilgili mevzuat.</p>

        <h4 class="font-bold border-b border-black mb-2 mt-4">HUKUKİ DELİLLER</h4>
        <p>1. Nüfus kayıt örneği,<br/>2. Tanık anlatımları,<br/>3. Darp raporları (varsa),<br/>4. Bilirkişi incelemesi, yemin ve sair yasal deliller.</p>

        <h4 class="font-bold border-b border-black mb-2 mt-4">SONUÇ VE İSTEM</h4>
        <p>Yukarıda arz ve izah edilen nedenlerle;</p>
        <ul class="list-decimal pl-5 space-y-1">
            <li>Davamızın <strong>KABULÜ</strong> ile tarafların <strong>BOŞANMALARINA</strong>,</li>
            <li>Müşterek çocuğun velayetinin müvekkile verilmesine,</li>
            <li>Müvekkil lehine aylık ... TL tedbir/yoksulluk nafakasına, çocuk için ... TL iştirak nafakasına hükmedilmesine,</li>
            <li>... TL maddi ve ... TL manevi tazminatın davalıdan tahsiline,</li>
            <li>Yargılama giderleri ve vekalet ücretinin davalıya yükletilmesine</li>
        </ul>
        <p>Karar verilmesini vekileten arz ve talep ederim. .../.../202...</p>
        
        <div class="text-right mt-8">
            <p><strong>Davacı Vekili</strong><br/>Av. Ramazan ŞİMŞEK<br/>(İmza)</p>
        </div>
      </div>`
  },
  {
    id: 'aile-3',
    title: 'Nafaka Artırım Dava Dilekçesi (Enflasyon Uyarlamalı)',
    slug: 'nafaka-artirim-dava-dilekcesi',
    category: 'Aile Hukuku',
    content: `
      <div class="font-serif space-y-4 text-justify text-sm leading-relaxed">
        <p class="text-center font-bold">İSTANBUL (  ). AİLE MAHKEMESİNE</p>
        <br/>
        <div class="grid grid-cols-[100px_1fr] gap-2 mb-4">
            <div class="font-bold">DAVACI</div><div>: ... (TC: ...)<br/>Adres: ...</div>
            <div class="font-bold">VEKİLİ</div><div>: <strong>Av. Ramazan ŞİMŞEK</strong><br/>RS Avukatlık</div>
            <div class="font-bold">DAVALI</div><div>: ... (TC: ...)<br/>Adres: ...</div>
            <div class="font-bold">KONU</div><div>: Aylık ... TL olan iştirak nafakasının, değişen ekonomik koşullar nedeniyle ... TL'ye çıkartılması talebidir.</div>
        </div>

        <h4 class="font-bold border-b border-black mb-2">AÇIKLAMALAR</h4>
        <p><strong>1-</strong> Taraflar ... tarihinde boşanmış ve müşterek çocuk ... için aylık ... TL iştirak nafakasına hükmedilmiştir.</p>
        <p><strong>2-</strong> Karar tarihinden bu yana ... yıl geçmiş olup, ülkedeki ekonomik koşullar ve yüksek enflasyon nedeniyle hükmedilen nafaka çocuğun en temel ihtiyaçlarını dahi karşılayamaz hale gelmiştir.</p>
        <p><strong>3-</strong> Müşterek çocuk büyümüş, okul ve sosyal aktivite masrafları artmıştır. Buna karşılık davalının ekonomik durumunda iyileşme olmuş, geliri artmıştır.</p>
        
        <h4 class="font-bold border-b border-black mb-2 mt-4">HUKUKİ SEBEPLER</h4>
        <p>TMK m. 176/4, 331 ve Yargıtay yerleşik içtihatları.</p>

        <h4 class="font-bold border-b border-black mb-2 mt-4">HUKUKİ DELİLLER</h4>
        <p>1. Boşanma ilamı,<br/>2. Çocuğun okul masraf belgeleri,<br/>3. Ekonomik durum araştırması,<br/>4. Bilirkişi incelemesi.</p>

        <h4 class="font-bold border-b border-black mb-2 mt-4">SONUÇ VE İSTEM</h4>
        <p>Yukarıda açıklanan nedenlerle; fazlaya ilişkin haklarımız saklı kalmak kaydıyla, aylık nafakanın dava tarihinden itibaren geçerli olmak üzere <strong>... TL'ye ARTIRILMASINA</strong>, yargılama giderlerinin davalıya yükletilmesine karar verilmesini arz ve talep ederim. .../.../202...</p>
        
        <div class="text-right mt-6">
            <p><strong>Davacı Vekili</strong><br/>Av. Ramazan ŞİMŞEK<br/>(İmza)</p>
        </div>
      </div>`
  },
  {
    id: 'aile-4',
    title: 'Ziynet Alacağı (Düğün Takıları) Dava Dilekçesi',
    slug: 'ziynet-alacagi-dava-dilekcesi',
    category: 'Aile Hukuku',
    content: `
        <div class="font-serif space-y-4 text-justify text-sm leading-relaxed">
          <p class="text-center font-bold">İSTANBUL (  ). AİLE MAHKEMESİNE</p>
          <br/>
          <div class="grid grid-cols-[100px_1fr] gap-2 mb-4">
              <div class="font-bold">DAVACI</div><div>: ... (TC: ...)</div>
              <div class="font-bold">VEKİLİ</div><div>: <strong>Av. Ramazan ŞİMŞEK</strong><br/>RS Avukatlık</div>
              <div class="font-bold">DAVALI</div><div>: ... (TC: ...)</div>
              <div class="font-bold">KONU</div><div>: Ziynet eşyalarının aynen iadesi, mümkün değilse bedelinin tahsili.</div>
              <div class="font-bold">DAVA DEĞERİ</div><div>: ... TL (Fazlaya ilişkin haklarımız saklıdır)</div>
          </div>

          <h4 class="font-bold border-b border-black mb-2">AÇIKLAMALAR</h4>
          <p><strong>1-</strong> Tarafların ... tarihli düğün töreninde müvekkilime; 10 adet 22 ayar bilezik, 1 adet Trabzon Set, 20 adet çeyrek altın ve muhtelif takılar takılmıştır.</p>
          <p><strong>2-</strong> (Burada takıların kim tarafından, ne zaman ve nasıl alındığını, geri verilmediğini detaylıca anlatınız.)</p>
          <p><strong>3-</strong> Yargıtay Hukuk Genel Kurulu kararları uyarınca, düğünde kime takılırsa takılsın ziynet eşyaları <strong>KADINA AİTTİR</strong> ve onun kişisel malıdır.</p>
          <p><strong>4-</strong> Davalı eş, bu altınları "borç ödeyeceğim", "ev alacağız" diyerek müvekkilimin elinden zorla/ikna yoluyla almış ve bir daha iade etmemiştir.</p>
          
          <h4 class="font-bold border-b border-black mb-2 mt-4">HUKUKİ DELİLLER</h4>
          <p>1. Düğün CD'si ve fotoğrafları (Ziynetlerin tespiti için),<br/>2. Kuyumcu bilirkişi incelemesi,<br/>3. Tanık beyanları.</p>

          <h4 class="font-bold border-b border-black mb-2 mt-4">SONUÇ VE İSTEM</h4>
          <p>Davamızın kabulü ile, ziynet eşyalarının aynen <strong>İADESİNE</strong>, aynen iade mümkün değilse dava tarihindeki değerlerinin yasal faiziyle davalıdan tahsiline karar verilmesini vekileten arz ve talep ederim.</p>

          <div class="text-right mt-6">
              <p><strong>Davacı Vekili</strong><br/>Av. Ramazan ŞİMŞEK<br/>(İmza)</p>
          </div>
        </div>`
  },
  {
    id: 'aile-5',
    title: 'Velayetin Değiştirilmesi (Velayet Nezi) Dilekçesi',
    slug: 'velayetin-degistirilmesi-dilekcesi',
    category: 'Aile Hukuku',
    content: `
      <div class="font-serif space-y-4 text-justify text-sm leading-relaxed">
        <p class="text-center font-bold">İSTANBUL (  ). AİLE MAHKEMESİNE</p>
        <br/>
        <div class="grid grid-cols-[100px_1fr] gap-2 mb-4">
            <div class="font-bold">DAVACI</div><div>: ... (TC: ...) - (Baba/Anne)</div>
            <div class="font-bold">VEKİLİ</div><div>: <strong>Av. Ramazan ŞİMŞEK</strong><br/>RS Avukatlık</div>
            <div class="font-bold">DAVALI</div><div>: ... (TC: ...) - (Anne/Baba)</div>
            <div class="font-bold">KONU</div><div>: Velayetin değiştirilmesi talebidir.</div>
        </div>

        <h4 class="font-bold border-b border-black mb-2">AÇIKLAMALAR</h4>
        <p><strong>1-</strong> Tarafların boşanma kararı ile müşterek çocuk ...'nın velayeti davalıya verilmiştir.</p>
        <p><strong>2-</strong> Ancak davalı, velayet görevini ihmal etmekte, çocuğun bakımıyla ilgilenmemektedir.</p>
        <p><strong>3-</strong> (Burada davalının ihmalkar davranışlarını somut örneklerle anlatınız. Örn: "Çocuğu okula göndermiyor", "Evde yalnız bırakıyor" vb.)</p>
        <p><strong>4-</strong> Velayetin değiştirilmesi, çocuğun bedensel, zihinsel ve ruhsal gelişimi için (Üstün Yararı) zorunluluk haline gelmiştir. Müvekkil çocuğun bakımı için çok daha elverişli koşullara sahiptir.</p>

        <h4 class="font-bold border-b border-black mb-2 mt-4">HUKUKİ DELİLLER</h4>
        <p>1. Okul kayıtları ve devamsızlık çizelgeleri,<br/>2. Uzman pedagog raporu,<br/>3. Sosyal ve ekonomik durum araştırması,<br/>4. Tanıklar.</p>

        <h4 class="font-bold border-b border-black mb-2 mt-4">SONUÇ VE İSTEM</h4>
        <p>Müşterek çocuğun velayetinin davalıdan alınarak müvekkile <strong>VERİLMESİNE</strong> karar verilmesini saygılarımla arz ve talep ederim.</p>

        <div class="text-right mt-6">
            <p><strong>Davacı Vekili</strong><br/>Av. Ramazan ŞİMŞEK</p>
        </div>
      </div>`
  },
  {
    id: 'aile-6',
    title: 'Mal Rejimi Tasfiyesi (Katılma Alacağı) Davası',
    slug: 'mal-rejimi-tasfiyesi-dilekcesi',
    category: 'Aile Hukuku',
    content: `
      <div class="font-serif space-y-4 text-justify text-sm leading-relaxed">
        <p class="text-center font-bold">İSTANBUL (  ). AİLE MAHKEMESİNE</p>
        <div class="grid grid-cols-[100px_1fr] gap-2 mb-4">
            <div class="font-bold">DAVACI</div><div>: ... (TC: ...)</div>
            <div class="font-bold">VEKİLİ</div><div>: <strong>Av. Ramazan ŞİMŞEK</strong><br/>RS Avukatlık</div>
            <div class="font-bold">DAVALI</div><div>: ... (TC: ...)</div>
            <div class="font-bold">KONU</div><div>: Edinilmiş mallara katılma alacağı ve değer artış payı talebidir.</div>
            <div class="font-bold">HARCA ESAS</div><div>: ... TL (Belirsiz Alacak Davası)</div>
        </div>

        <h4 class="font-bold border-b border-black mb-2">AÇIKLAMALAR</h4>
        <p><strong>1-</strong> Taraflar 2002 yılından sonra evlenmiş olup, yasal mal rejimi olan "Edinilmiş Mallara Katılma Rejimi"ne tabidir.</p>
        <p><strong>2-</strong> Evlilik birliği içerisinde davalı adına ... adresindeki taşınmaz ve ... plakalı araç satın alınmıştır.</p>
        <p><strong>3-</strong> TMK m. 219 ve devamı uyarınca, bu mallar edinilmiş mal grubundadır. Müvekkilimin artık değerin yarısı (1/2) oranında katılma alacağı hakkı mevcuttur.</p>

        <h4 class="font-bold border-b border-black mb-2 mt-4">HUKUKİ DELİLLER</h4>
        <p>1. Tapu ve Trafik tescil kayıtları,<br/>2. Banka hesap dökümleri,<br/>3. Bilirkişi incelemesi.</p>

        <h4 class="font-bold border-b border-black mb-2 mt-4">SONUÇ VE İSTEM</h4>
        <p>Tasfiye sonucunda ortaya çıkacak katılma alacağımızın faiziyle birlikte davalıdan tahsiline karar verilmesini arz ve talep ederim.</p>
        
        <div class="text-right mt-6">
            <p><strong>Davacı Vekili</strong><br/>Av. Ramazan ŞİMŞEK</p>
        </div>
      </div>`
  },
  {
    id: 'aile-7',
    title: 'Babalık Davası ve DNA Testi Talebi',
    slug: 'babalik-davasi-dilekcesi',
    category: 'Aile Hukuku',
    content: `
      <div class="font-serif space-y-4 text-justify text-sm leading-relaxed">
        <p class="text-center font-bold">İSTANBUL (  ). AİLE MAHKEMESİNE</p>
        <div class="grid grid-cols-[100px_1fr] gap-2 mb-4">
            <div class="font-bold">DAVACI</div><div>: ... (Anne)</div>
            <div class="font-bold">VEKİLİ</div><div>: <strong>Av. Ramazan ŞİMŞEK</strong><br/>RS Avukatlık</div>
            <div class="font-bold">DAVALI</div><div>: ... (Baba)</div>
            <div class="font-bold">KONU</div><div>: Babalığın hükmen tespiti ve iştirak nafakası talebidir.</div>
        </div>

        <h4 class="font-bold border-b border-black mb-2">AÇIKLAMALAR</h4>
        <p><strong>1-</strong> Davalı ile olan birlikteliğimizden ... tarihinde ... isimli çocuğumuz doğmuştur.</p>
        <p><strong>2-</strong> Davalı çocuğu hukuken tanımamakta ve nüfusuna kaydettirmekten kaçınmaktadır. Oysa biyolojik baba olduğu kesindir.</p>
        <p><strong>3-</strong> Adli Tıp Kurumu nezdinde yapılacak DNA (Soybağı) incelemesi ile bu durum ispatlanacaktır.</p>

        <h4 class="font-bold border-b border-black mb-2 mt-4">HUKUKİ DELİLLER</h4>
        <p>1. DNA Testi,<br/>2. Tanık beyanları,<br/>3. Doğum raporları.</p>

        <h4 class="font-bold border-b border-black mb-2 mt-4">SONUÇ VE İSTEM</h4>
        <p>Yapılacak yargılama ve DNA testi neticesinde; davalının küçüğün babası olduğunun <strong>TESPİTİNE</strong>, çocuğun babanın nüfusuna tesciline ve aylık ... TL iştirak nafakasına hükmedilmesine karar verilmesini talep ederim.</p>

        <div class="text-right mt-6">
            <p><strong>Davacı Vekili</strong><br/>Av. Ramazan ŞİMŞEK</p>
        </div>
      </div>`
  },

  // --- İŞ HUKUKU (LABOR LAW) ---
  {
    id: 'is-1',
    title: 'İşe İade Dava Dilekçesi (Uzman Görüşüyle)',
    slug: 'ise-iade-dava-dilekcesi-ornek',
    category: 'İş Hukuku',
    content: `
      <div class="font-serif space-y-4 text-justify text-sm leading-relaxed">
        <p class="text-center font-bold">İSTANBUL (  ). İŞ MAHKEMESİNE</p>
        <br/>
        <div class="grid grid-cols-[100px_1fr] gap-2 mb-4">
            <div class="font-bold">DAVACI</div><div>: ... (TC: ...) - (İşçi)<br/>Adres: ...</div>
            <div class="font-bold">VEKİLİ</div><div>: <strong>Av. Ramazan ŞİMŞEK</strong><br/>RS Avukatlık</div>
            <div class="font-bold">DAVALI</div><div>: ... ŞİRKETİ<br/>Adres: ...</div>
            <div class="font-bold">KONU</div><div>: Feshin geçersizliğinin tespiti ve İşe İade istemidir.</div>
        </div>
        
        <h4 class="font-bold border-b border-black mb-2">AÇIKLAMALAR</h4>
        <p><strong>1-</strong> Müvekkil, davalı işyerinde ... tarihinden beri belirsiz süreli iş sözleşmesi ile çalışmaktadır.</p>
        <p><strong>2-</strong> İş akdi, işveren tarafından ... tarihinde "performans düşüklüğü" gerekçesiyle feshedilmiştir. Ancak bu fesih haksız ve geçersizdir.</p>
        <p><strong>3- HUKUKİ GEREKÇELER:</strong></p>
        <ul class="list-disc pl-5 mt-1">
            <li><strong>Geçerli Sebep Yoktur:</strong> İş Kanunu m. 18 uyarınca performans düşüklüğü somut bilgi ve belgelerle ispatlanmamış, müvekkilden savunma alınmamıştır (m. 19).</li>
            <li><strong>Feshin Son Çare Olması İlkesi:</strong> İşveren, fesih yerine başka bir bölümde görevlendirme gibi alternatifleri değerlendirmemiştir.</li>
        </ul>
        <p><strong>4-</strong> Arabuluculuk süreci anlaşamama ile sonuçlanmıştır (Son Tutanak ektedir).</p>

        <h4 class="font-bold border-b border-black mb-2 mt-4">HUKUKİ SEBEPLER</h4>
        <p>4857 Sayılı İş Kanunu m. 18-21 ve ilgili mevzuat.</p>

        <h4 class="font-bold border-b border-black mb-2 mt-4">SONUÇ VE İSTEM</h4>
        <p>Feshin <strong>GEÇERSİZLİĞİNE</strong> ve müvekkilin <strong>İŞE İADESİNE</strong>;</p>
        <p>Müvekkil süresi içinde başvurduğu halde işe başlatılmazsa ödenmesi gereken tazminat miktarının (en az 4 en çok 8 aylık) ve boşta geçen süre ücretinin (4 aylık) belirlenmesine karar verilmesini vekileten arz ve talep ederim.</p>
        
        <div class="text-right mt-6">
            <p><strong>Davacı Vekili</strong><br/>Av. Ramazan ŞİMŞEK</p>
        </div>
      </div>`
  },
  {
    id: 'is-2',
    title: 'Kıdem ve İhbar Tazminatı Dilekçesi (Haklı Fesih)',
    slug: 'kidem-ihbar-tazminati-dilekcesi',
    category: 'İş Hukuku',
    content: `
      <div class="font-serif space-y-4 text-justify text-sm leading-relaxed">
        <p class="text-center font-bold">İSTANBUL (  ). İŞ MAHKEMESİNE</p>
        <div class="grid grid-cols-[100px_1fr] gap-2 mb-4">
            <div class="font-bold">DAVACI</div><div>: ... (TC: ...)</div>
            <div class="font-bold">VEKİLİ</div><div>: <strong>Av. Ramazan ŞİMŞEK</strong><br/>RS Avukatlık</div>
            <div class="font-bold">DAVALI</div><div>: ... ŞİRKETİ</div>
            <div class="font-bold">KONU</div><div>: İşçilik alacaklarının (Kıdem, İhbar, Yıllık İzin vb.) tahsili istemidir.</div>
            <div class="font-bold">DAVA DEĞERİ</div><div>: ... TL (Fazlaya ilişkin haklar saklıdır)</div>
        </div>

        <h4 class="font-bold border-b border-black mb-2">AÇIKLAMALAR</h4>
        <p><strong>1-</strong> Müvekkil, davalı şirkette ... - ... tarihleri arasında, en son net ... TL ücretle çalışmıştır. Ücrete yemek ve yol yardımı dahildir (Giydirilmiş Ücret).</p>
        <p><strong>2-</strong> İş akdi, ... tarihinde feshedilmiştir.</p>
        <p><strong>3-</strong> (Burada işten çıkış/çıkarılma sürecini ve gerekçesini detaylıca anlatınız. Örn: "Maaşım ödenmediği için çıktım" veya "Haksız yere kovuldum".)</p>
        <p><strong>4-</strong> Müvekkile kıdem ve ihbar tazminatı ile kullanmadığı yıllık izin ücretleri ödenmemiştir.</p>

        <h4 class="font-bold border-b border-black mb-2 mt-4">HUKUKİ DELİLLER</h4>
        <p>SGK kayıtları, İşyeri şahsi dosyası, Banka kayıtları, Tanıklar, Bilirkişi.</p>

        <h4 class="font-bold border-b border-black mb-2 mt-4">SONUÇ VE İSTEM</h4>
        <p>Fazlaya ilişkin haklarımız saklı kalmak kaydıyla; Kıdem Tazminatı, İhbar Tazminatı ve diğer işçilik alacaklarının en yüksek banka mevduat faiziyle birlikte davalıdan tahsiline karar verilmesini talep ederim.</p>
        
        <div class="text-right mt-6">
            <p><strong>Davacı Vekili</strong><br/>Av. Ramazan ŞİMŞEK</p>
        </div>
      </div>`
  },
  {
    id: 'is-3',
    title: 'Maaş Alamayan İşçi İçin Haklı Fesih İhtarnamesi',
    slug: 'hakli-nedenle-istifa-dilekcesi',
    category: 'İş Hukuku',
    content: `
        <div class="font-serif space-y-4 text-justify text-sm leading-relaxed bg-red-50/50 p-4 border border-red-100 rounded">
          <p class="text-center font-bold text-red-800">İHTARNAME</p>
          <br/>
          <div class="grid grid-cols-[120px_1fr] gap-2 mb-4">
              <div class="font-bold">KEŞİDECİ (İŞÇİ)</div><div>: ........................................ (TC: ...)</div>
              <div class="font-bold">MUHATAP</div><div>: ........................................ ŞİRKETİ</div>
              <div class="font-bold">KONU</div><div>: İş Kanunu m. 24/II-e gereği iş akdinin haklı nedenle feshi.</div>
          </div>
          
          <h4 class="font-bold border-b border-red-200 mb-2">AÇIKLAMALAR</h4>
          <p>Sayın Muhatap;<br/>
          Şirketinizde ... tarihinden beri çalışmaktayım. Ancak ... ve ... aylarına ait maaşlarım gününde ödenmemiştir. Ücretin zamanında ödenmemesi işçi açısından "Haklı Fesih" sebebidir.</p>
          <p>Bu nedenle iş akdimi <strong>DERHAL VE HAKLI NEDENLE</strong> feshediyorum. Kıdem tazminatım, ödenmeyen maaşlarım ve tüm yasal haklarımın 3 (üç) iş günü içinde aşağıdaki IBAN hesabıma yatırılmasını, aksi halde yasal yollara başvurarak dava açacağımı ihtaren bildiririm.</p>
          <p class="mt-4"><strong>IBAN:</strong> TR................................................</p>
          
          <div class="text-right mt-6">
              <p><strong>İHTAR EDEN</strong><br/>(İmza)</p>
          </div>
        </div>`
  },
  {
    id: 'is-4',
    title: 'Mobbing (Psikolojik Taciz) İhtarnamesi',
    slug: 'mobbing-ihtarname-ornegi',
    category: 'İş Hukuku',
    content: `
        <div class="font-serif space-y-4 text-justify text-sm leading-relaxed">
          <p class="text-center font-bold">İHTARNAME</p>
          <br/>
          <p><strong>KONU:</strong> İşyerinde uygulanan psikolojik tacizin (Mobbing) sonlandırılması ve tedbir alınması ihtarıdır.</p>
          
          <h4 class="font-bold border-b border-black mb-2">AÇIKLAMALAR</h4>
          <p><strong>1-</strong> Şirketinizde ... pozisyonunda çalışmaktayım. Özellikle son dönemde şahsıma yönelik sistematik bir dışlama, görev tanımı dışında işler verme ve diğer çalışanların yanında aşağılama eylemleri gerçekleşmektedir.</p>
          <p><strong>2-</strong> (Burada size yapılan mobbing uygulamalarını, tarih ve örnek vererek açıklayınız. Örn: "Toplantılarda sözüm kesildi", "Haksız tutanak tutuldu" vb.)</p>
          <p><strong>3-</strong> Yargıtay kararları uyarınca bu davranışlar açıkça "Mobbing" (Psikolojik Taciz) teşkil etmektedir.</p>
          <p><strong>4-</strong> İşveren olarak işçiyi gözetme borcunuz bulunmaktadır. Bu hukuksuz uygulamaların derhal son bulmasını talep ederim.</p>

          <div class="text-right mt-6">
              <p><strong>İhtar Eden</strong><br/>(İmza)</p>
          </div>
        </div>`
  },
  {
    id: 'is-5',
    title: 'Fazla Mesai Ücreti Talep Dilekçesi',
    slug: 'fazla-mesai-ucreti-talep-dilekcesi',
    category: 'İş Hukuku',
    content: `
        <div class="font-serif space-y-4 text-justify text-sm leading-relaxed">
          <p class="text-center font-bold">İSTANBUL (  ). İŞ MAHKEMESİNE</p>
          <div class="grid grid-cols-[100px_1fr] gap-2 mb-4">
              <div class="font-bold">DAVACI</div><div>: ... (TC: ...)</div>
              <div class="font-bold">VEKİLİ</div><div>: <strong>Av. Ramazan ŞİMŞEK</strong><br/>RS Avukatlık</div>
              <div class="font-bold">DAVALI</div><div>: ... ŞİRKETİ</div>
              <div class="font-bold">KONU</div><div>: Ödenmeyen fazla çalışma ücretlerinin tahsili.</div>
          </div>

          <h4 class="font-bold border-b border-black mb-2">AÇIKLAMALAR</h4>
          <p><strong>1-</strong> Müvekkil, davalı işyerinde haftanın 6 günü 08:30 - 20:00 saatleri arasında çalışmıştır. Ara dinlenmeleri düşüldüğünde haftalık çalışma süresi 60 saati bulmaktadır.</p>
          <p><strong>2-</strong> İş Kanunu'na göre haftalık yasal çalışma süresi 45 saattir. 45 saati aşan her saat için %50 zamlı ücret ödenmelidir.</p>
          <p><strong>3-</strong> Davalı işveren bu ücretleri ödememiştir. Banka kayıtları ve tanık beyanları ile durum ispatlanacaktır.</p>

          <h4 class="font-bold border-b border-black mb-2 mt-4">SONUÇ VE İSTEM</h4>
          <p>Fazla çalışma ücreti, UBGT (Ulusal Bayram ve Genel Tatil) ücreti ve hafta tatili ücretlerinin hesaplanarak, en yüksek banka mevduat faiziyle birlikte davalıdan tahsiline karar verilmesini talep ederim.</p>
        
          <div class="text-right mt-6">
              <p><strong>Davacı Vekili</strong><br/>Av. Ramazan ŞİMŞEK</p>
          </div>
        </div>`
  },

  // --- GAYRİMENKUL HUKUKU ---
  {
    id: 'kira-1',
    title: 'Tahliye İhtarnamesi (İhtiyaç Nedeniyle)',
    slug: 'ihtiyac-nedeniyle-tahliye-ihtarnamesi',
    category: 'Gayrimenkul Hukuku',
    content: `
      <div class="font-serif space-y-4 text-justify text-sm leading-relaxed">
        <p class="text-center font-bold">İHTARNAME</p>
        <br/>
        <div class="grid grid-cols-[120px_1fr] gap-2 mb-4">
            <div class="font-bold">İHTAR EDEN</div><div>: ... Mal Sahibi (TC: ...)</div>
            <div class="font-bold">MUHATAP</div><div>: ... Kiracı</div>
            <div class="font-bold">KONU</div><div>: TBK m. 350 gereği konut ihtiyacı nedeniyle tahliye bildirimi.</div>
        </div>

        <h4 class="font-bold border-b border-black mb-2">AÇIKLAMALAR</h4>
        <p><strong>1-</strong> Maliki olduğum ... adresindeki taşınmazda ... tarihli sözleşme ile kiracı olarak bulunmaktasınız.</p>
        <p><strong>2-</strong> Halen kirada oturmaktayım/oğlum evlenecektir. Bu nedenle taşınmazı <strong>KENDİM/EŞİM/ALT SOYUM</strong> için konut olarak kullanma zorunluluğum doğmuştur.</p>
        <p><strong>3-</strong> İhtiyacım gerçek, samimi ve zorunludur.</p>
        
        <h4 class="font-bold border-b border-black mb-2 mt-4">SONUÇ</h4>
        <p>Kira sözleşmesinin bitim tarihi olan .../.../.... tarihinde mecuru tahliye ederek boş ve sağlam şekilde teslim etmenizi, aksi halde Tahliye Davası açacağımı ve yargılama giderlerinin tarafınıza yükleneceğini ihtaren bildiririm.</p>

        <div class="text-right mt-6">
            <p><strong>İhtar Eden</strong><br/>(İmza)</p>
        </div>
      </div>`
  },
  {
    id: 'kira-2',
    title: 'Kirayı Artırma (Kira Tespit) Dava Dilekçesi',
    slug: 'kira-tespit-davasi-dilekcesi',
    category: 'Gayrimenkul Hukuku',
    content: `
      <div class="font-serif space-y-4 text-justify text-sm leading-relaxed">
        <p class="text-center font-bold">İSTANBUL (  ). SULH HUKUK MAHKEMESİNE</p>
        <div class="grid grid-cols-[100px_1fr] gap-2 mb-4">
            <div class="font-bold">DAVACI</div><div>: ... (TC: ...)</div>
            <div class="font-bold">VEKİLİ</div><div>: <strong>Av. Ramazan ŞİMŞEK</strong><br/>RS Avukatlık</div>
            <div class="font-bold">DAVALI</div><div>: ... (Kiracı)</div>
            <div class="font-bold">KONU</div><div>: Kira Bedelinin Tespiti talebidir.</div>
        </div>

        <h4 class="font-bold border-b border-black mb-2">AÇIKLAMALAR</h4>
        <p><strong>1-</strong> Davalı, ... tarihinden beri (5 yıldan fazla süredir) mülkiyeti bana ait taşınmazda kiracıdır.</p>
        <p><strong>2-</strong> Mevcut kira bedeli ... TL'dir. Ancak son dönemde yaşanan ekonomik gelişmeler ve enflasyon karşısında bu bedel çok düşük kalmıştır. Bölgedeki emsal kira bedelleri ... - ... TL civarındadır.</p>
        <p><strong>3-</strong> Türk Borçlar Kanunu m. 344 gereği, 5 yıllık süre dolduğunda kira bedeli hakim tarafından "hak ve nesafet" kurallarına göre yeniden belirlenmelidir.</p>

        <h4 class="font-bold border-b border-black mb-2 mt-4">HUKUKİ DELİLLER</h4>
        <p>Kira sözleşmesi, Emsal rayiç kira ilanları, Bilirkişi keşfi.</p>

        <h4 class="font-bold border-b border-black mb-2 mt-4">SONUÇ VE İSTEM</h4>
        <p>Yeni kira döneminden itibaren geçerli olmak üzere, aylık kira bedelinin net <strong>............ TL</strong> olarak TESPİTİNE karar verilmesini vekileten arz ve talep ederim.</p>

        <div class="text-right mt-6">
            <p><strong>Davacı Vekili</strong><br/>Av. Ramazan ŞİMŞEK</p>
        </div>
      </div>`
  },
  {
    id: 'kira-3',
    title: 'Tahliye Taahhütnamesi Örneği',
    slug: 'tahliye-taahhutnamesi-ornegi',
    category: 'Gayrimenkul Hukuku',
    content: `
      <div class="font-serif space-y-4 text-justify text-sm leading-relaxed">
        <p class="text-center font-bold">TAHLİYE TAAHHÜTNAMESİ</p>
        <br/>
        <div class="grid grid-cols-[120px_1fr] gap-2 mb-4">
            <div class="font-bold">KİRACI (TAAHHÜT EDEN)</div><div>: ... (TC: ...)</div>
            <div class="font-bold">MAL SAHİBİ (KİRALAYAN)</div><div>: ...</div>
            <div class="font-bold">MECUR ADRESİ</div><div>: ...</div>
            <div class="font-bold">TAAHHÜT TARİHİ</div><div>: .../.../.... (Kira sözleşmesinden sonraki bir tarih olmalıdır)</div>
            <div class="font-bold">TAHLİYE TARİHİ</div><div>: .../.../....</div>
        </div>

        <h4 class="font-bold border-b border-black mb-2">BEYAN VE TAAHHÜT</h4>
        <p>Halen kiracı olarak oturmakta olduğum yukarıda adresi yazılı taşınmazı, hiçbir ihtara ve hükme gerek kalmaksızın <strong>.../.../....</strong> tarihinde tahliye edeceğimi, boş ve sağlam olarak mal sahibine teslim edeceğimi, belirtilen tarihte boşaltmamam halinde bu tarihten sonraki tüm masraf ve zararları ödeyeceğimi, mal sahibinin icra takibine geçerek beni tahliye ettirebileceğini peşinen kabul, beyan ve taahhüt ederim.</p>

        <div class="text-right mt-12">
            <p><strong>TAAHHÜT EDEN (KİRACI)</strong><br/>(İmza)</p>
        </div>
        
        <div class="text-left mt-4 text-xs text-gray-400">
             <p><strong>HAZIRLAYAN VEKİL</strong><br/>Av. Ramazan ŞİMŞEK</p>
        </div>
      </div>`
  },
  {
    id: 'kira-4',
    title: '10 Yıllık Uzama Süresi Sonu Tahliyesi',
    slug: '10-yillik-tahliye-ihtarnamesi',
    category: 'Gayrimenkul Hukuku',
    content: `
        <div class="font-serif space-y-4 text-justify text-sm leading-relaxed">
          <p class="text-center font-bold">İHTARNAME</p>
          <div class="grid grid-cols-[120px_1fr] gap-2 mb-4">
              <div class="font-bold">İHTAR EDEN</div><div>: ... Mal Sahibi</div>
              <div class="font-bold">MUHATAP</div><div>: ... Kiracı</div>
              <div class="font-bold">KONU</div><div>: TBK m. 347 gereği 10 yıllık uzama süresinin dolması nedeniyle fesih.</div>
          </div>

          <h4 class="font-bold border-b border-black mb-2">AÇIKLAMALAR</h4>
          <p><strong>1-</strong> Taşınmazda .../.../.... tarihli kira sözleşmesi ile oturmaktasınız.</p>
          <p><strong>2-</strong> Kira sözleşmesi, TBK m. 347'de belirtilen 10 yıllık uzama süresini ... tarihinde dolduracaktır.</p>
          <p><strong>3-</strong> Kanun gereği, 10 yıllık uzama süresi dolan sözleşmelerde kiralayan, herhangi bir sebep göstermeksizin sözleşmeyi feshedebilir.</p>
          <p>Yeni kira döneminde sözleşmenin YENİLENMEYECEĞİNİ ve mecuru tahliye etmenizi ihtaren bildiririm.</p>

          <div class="text-right mt-6">
              <p><strong>İhtar Eden</strong><br/>(İmza)</p>
          </div>
        </div>`
  },

  // --- CEZA HUKUKU ---
  {
    id: 'ceza-1',
    title: 'Savcılık Şikayet Dilekçesi (Hakaret & Tehdit)',
    slug: 'savcilik-sikayet-dilekcesi-genel',
    category: 'Ceza Hukuku',
    content: `
      <div class="font-serif space-y-4 text-justify text-sm leading-relaxed">
        <p class="text-center font-bold">İSTANBUL ANADOLU CUMHURİYET BAŞSAVCILIĞINA</p>
        <br/>
        <div class="grid grid-cols-[100px_1fr] gap-2 mb-4">
            <div class="font-bold">MÜŞTEKİ</div><div>: ... (TC: ...) <br/>Adres: ...</div>
            <div class="font-bold">VEKİLİ</div><div>: <strong>Av. Ramazan ŞİMŞEK</strong><br/>RS Avukatlık</div>
            <div class="font-bold">ŞÜPHELİ</div><div>: ... (TC: ...) (veya Faili Meçhul)</div>
            <div class="font-bold">SUÇLAR</div><div>: Hakaret, Tehdit, Kişilerin Huzur ve Sükununu Bozma.</div>
            <div class="font-bold">SUÇ TARİHİ</div><div>: .../.../202...</div>
        </div>

        <h4 class="font-bold border-b border-black mb-2">AÇIKLAMALAR</h4>
        <p><strong>1-</strong> Şüpheli şahıs, ... tarihinde şahsımı telefonla arayarak / yolumu keserek "..." şeklinde ağır hakaretlerde bulunmuş ve "seni öldürürüm" diyerek tehdit etmiştir.</p>
        <p><strong>2-</strong> (Burada olayın nasıl gerçekleştiğini, şüphelinin tam olarak ne söylediğini ve olayın gelişimini kendi cümlelerinizle detaylandırınız.)</p>
        <p><strong>3-</strong> Bu eylemler TCK m. 125 ve m. 106 kapsamında suç teşkil etmektedir.</p>
        <p><strong>3-</strong> Olay anına ilişkin tanıklarım ve mesaj/kamera kayıtları ektedir.</p>

        <h4 class="font-bold border-b border-black mb-2 mt-4">HUKUKİ DELİLLER</h4>
        <p>1. Ekran görüntüleri,<br/>2. Kamera kayıtları,<br/>3. Tanık isim ve adresleri.</p>

        <h4 class="font-bold border-b border-black mb-2 mt-4">SONUÇ VE İSTEM</h4>
        <p>Yukarıda arz edilen nedenlerle, şüpheli hakkında gerekli soruşturmanın yapılarak <strong>CEZALANDIRILMASI</strong> için kamu davası açılmasına karar verilmesini vekileten arz ve talep ederim.</p>

        <div class="text-right mt-6">
            <p><strong>Müşteki Vekili</strong><br/>Av. Ramazan ŞİMŞEK<br/>(İmza)</p>
        </div>
      </div>`
  },
  {
    id: 'ceza-2',
    title: 'KYOK Kararına İtiraz Dilekçesi (Kapsamlı)',
    slug: 'kyok-itiraz-dilekcesi',
    category: 'Ceza Hukuku',
    content: `
      <div class="font-serif space-y-4 text-justify text-sm leading-relaxed">
        <p class="text-center font-bold">NÖBETÇİ SULH CEZA HAKİMLİĞİNE<br/>(Gönderilmek Üzere)<br/>CUMHURİYET BAŞSAVCILIĞINA</p>
        <br/>
        <div class="grid grid-cols-[120px_1fr] gap-2 mb-4">
            <div class="font-bold">SORUŞTURMA NO</div><div>: 202... / ....... Soruşturma</div>
            <div class="font-bold">KARAR NO</div><div>: 202... / ....... Karar</div>
            <div class="font-bold">İTİRAZ EDEN</div><div>: ... (Müşteki)</div>
            <div class="font-bold">VEKİLİ</div><div>: <strong>Av. Ramazan ŞİMŞEK</strong><br/>RS Avukatlık</div>
            <div class="font-bold">KONU</div><div>: Kovuşturmaya Yer Olmadığına Dair Kararın (KYOK) kaldırılması talebidir.</div>
        </div>

        <h4 class="font-bold border-b border-black mb-2">İTİRAZ NEDENLERİMİZ</h4>
        <p><strong>1-</strong> Savcılık makamı, dosyada yeterli delil bulunmadığı gerekçesiyle takipsizlik kararı vermiştir. Ancak bu karar eksik incelemeye dayanmaktadır.</p>
        <p><strong>2-</strong> Dilekçemizde belirttiğimiz tanıklar dinlenmemiş, kamera kayıtları istenmemiştir. Soruşturma etkin yürütülmemiştir.</p>
        <p><strong>3-</strong> Şüphelinin eyleminin suç oluşturduğu Yargıtay kararları ile sabittir.</p>

        <h4 class="font-bold border-b border-black mb-2 mt-4">SONUÇ VE İSTEM</h4>
        <p>Takipsizlik kararının <strong>KALDIRILARAK</strong>, şüpheli hakkında iddianame düzenlenmesine ve kamu davası açılmasına karar verilmesini arz ve talep ederim.</p>

        <div class="text-right mt-6">
            <p><strong>Müşteki Vekili</strong><br/>Av. Ramazan ŞİMŞEK</p>
        </div>
      </div>`
  },
  {
    id: 'ceza-3',
    title: 'Uzaklaştırma Kararı Dilekçesi (6284 Sayılı Kanun)',
    slug: 'uzaklastirma-karari-talep-dilekcesi',
    category: 'Ceza Hukuku',
    content: `
        <div class="font-serif space-y-4 text-justify text-sm leading-relaxed">
          <p class="text-center font-bold">NÖBETÇİ AİLE MAHKEMESİNE</p>
          <div class="grid grid-cols-[100px_1fr] gap-2 mb-4">
              <div class="font-bold">TALEP EDEN</div><div>: ... (Şiddet Mağduru)</div>
              <div class="font-bold">VEKİLİ</div><div>: <strong>Av. Ramazan ŞİMŞEK</strong><br/>RS Avukatlık</div>
              <div class="font-bold">KARŞI TARAF</div><div>: ... (Şiddet Uygulayan)</div>
              <div class="font-bold">KONU</div><div>: 6284 Sayılı Kanun uyarınca koruma ve uzaklaştırma kararı talebidir.</div>
          </div>

          <h4 class="font-bold border-b border-black mb-2">AÇIKLAMALAR</h4>
          <p><strong>1-</strong> Karşı taraf, müvekkilin (eşi/eski eşi/sevgilisi) olup, müvekkile karşı fiziksel ve psikolojik şiddet uygulamaktadır.</p>
          <p><strong>2-</strong> En son ... tarihinde müvekkili darp etmiş, tekrar eve gelerek tehditler savurmuştur.</p>
          <p><strong>3-</strong> Müvekkilin can güvenliği tehlikededir. Gecikmesinde sakınca bulunan hal mevcuttur.</p>

          <h4 class="font-bold border-b border-black mb-2 mt-4">SONUÇ VE İSTEM</h4>
          <p>Karşı tarafın 6 ay süreyle;</p>
          <ul class="list-disc pl-5">
            <li>Müşterek konuttan derhal <strong>UZAKLAŞTIRILMASINA</strong>,</li>
            <li>Müvekkilin işyerine ve konutuna yaklaşmamasına,</li>
            <li>İletişim araçlarıyla rahatsız etmemesine</li>
          </ul>
          <p>Karar verilmesini talep ederim.</p>

          <div class="text-right mt-6">
              <p><strong>Talep Eden Vekili</strong><br/>Av. Ramazan ŞİMŞEK</p>
          </div>
        </div>`
  },

  // --- İCRA HUKUKU ---
  {
    id: 'icra-1',
    title: 'İcra Takibine İtiraz Dilekçesi',
    slug: 'icra-takibine-itiraz-dilekcesi-genel',
    category: 'İcra İflas Hukuku',
    content: `
      <div class="font-serif space-y-4 text-justify text-sm leading-relaxed">
        <p class="text-center font-bold">... İCRA MÜDÜRLÜĞÜNE</p>
        <div class="grid grid-cols-[120px_1fr] gap-2 mb-4">
            <div class="font-bold">DOSYA NO</div><div>: 202... / ....... E.</div>
            <div class="font-bold">BORÇLU</div><div>: ... (TC: ...)</div>
            <div class="font-bold">ALACAKLI</div><div>: ...</div>
            <div class="font-bold">KONU</div><div>: Ödeme emrine, borca, yetkiye ve faize itirazlarımdır.</div>
        </div>

        <h4 class="font-bold border-b border-black mb-2">AÇIKLAMALAR</h4>
        <p><strong>1-</strong> Tarafıma tebliğ edilen ödeme emrindeki borcu kabul etmiyorum. Alacaklı görünen tarafa herhangi bir borcum yoktur.</p>
        <p><strong>2-</strong> Talep edilen faiz oranları yasalara aykırıdır ve fahiştir. İşlemiş ve işleyecek faize itiraz ediyorum.</p>
        <p><strong>3-</strong> İcra dairesinin yetkisine de itiraz ediyorum. Yetkili icra dairesi ikametgahımın bulunduğu ... İcra Daireleridir.</p>

        <h4 class="font-bold border-b border-black mb-2 mt-4">SONUÇ VE İSTEM</h4>
        <p>Borcun tamamına, faize, yetkiye ve tüm ferilerine açıkça <strong>İTİRAZ EDİYORUM</strong>. Takibin durdurulmasına karar verilmesini talep ederim.</p>
        
        <div class="text-right mt-6">
            <p><strong>Borçlu</strong><br/>(İmza)</p>
        </div>
      </div>`
  }
];
