import { SEO } from '@/components/SEO';

export default function KVKK() {
    return (
        <main className="min-h-screen bg-navy pt-24 pb-16">
            <SEO
                title="KVKK Aydınlatma Metni - RS Avukatlık"
                description="6698 Sayılı Kişisel Verilerin Korunması Kanunu kapsamında RS Avukatlık aydınlatma metni."
                canonical="/kvkk-aydinlatma-metni"
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8 border-b border-gold/30 pb-4">
                    KVKK Aydınlatma Metni
                </h1>

                <div className="space-y-6 text-white/80 font-light leading-relaxed">
                    <p>
                        RS Avukatlık olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca,
                        Veri Sorumlusu sıfatıyla, kişisel verilerinizi aşağıda açıklanan amaçlar ve yöntemlerle işlemekteyiz.
                    </p>

                    <h2 className="text-xl font-serif font-semibold text-gold mt-8 mb-4">1. Kişisel Verilerin İşlenme Amacı</h2>
                    <p>
                        Toplanan kişisel verileriniz (Ad, Soyad, İletişim Bilgileri vb.), hukuk büromuz tarafından sunulan hizmetlerden
                        faydalanmanız, hukuki danışmanlık süreçlerinin yürütülmesi, iletişim faaliyetlerinin yönetilmesi ve yasal yükümlülüklerin
                        yerine getirilmesi amaçlarıyla işlenmektedir.
                    </p>

                    <h2 className="text-xl font-serif font-semibold text-gold mt-8 mb-4">2. Kişisel Verilerin Aktarılması</h2>
                    <p>
                        Kişisel verileriniz, yasal zorunluluklar (Mahkemeler, İcra Daireleri vb. resmi kurumlar) dışında, açık rızanız olmaksızın
                        üçüncü kişilerle paylaşılmamaktadır. Hukuki sürecin gerektirdiği durumlarda iş birliği yaptığımız çözüm ortakları ile
                        gerekli güvenlik önlemleri alınarak paylaşılabilir.
                    </p>

                    <h2 className="text-xl font-serif font-semibold text-gold mt-8 mb-4">3. Kişisel Veri Toplama Yöntemi ve Hukuki Sebebi</h2>
                    <p>
                        Kişisel verileriniz, web sitemizdeki iletişim formları, e-posta, telefon görüşmeleri veya yüz yüze görüşmeler yoluyla
                        elektronik veya fiziki ortamda toplanmaktadır. Bu veriler, KVKK m. 5'te belirtilen "bir sözleşmenin kurulması veya ifası",
                        "hukuki yükümlülüğün yerine getirilmesi" ve "ilgili kişinin temel haklarına zarar vermemek kaydıyla veri sorumlusunun meşru menfaati"
                        hukuki sebeplerine dayanılarak işlenmektedir.
                    </p>

                    <h2 className="text-xl font-serif font-semibold text-gold mt-8 mb-4">4. İlgili Kişinin Hakları</h2>
                    <p>
                        KVKK'nın 11. maddesi uyarınca veri sahibi olarak aşağıdaki haklara sahipsiniz:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
                        <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
                        <li>İşlenme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme,</li>
                        <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
                        <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme,</li>
                        <li>KVKK m. 7 şartları çerçevesinde silinmesini veya yok edilmesini isteme,</li>
                        <li>Veri sorumlusuna başvurarak zararın giderilmesini talep etme.</li>
                    </ul>

                    <p className="mt-6">
                        Bu haklarınızı kullanmak için <a href="mailto:av.ramazansimsek@gmail.com" className="text-gold hover:underline">av.ramazansimsek@gmail.com</a> adresine
                        e-posta göndererek veya hukuk büromuza yazılı başvuruda bulunarak taleplerinizi iletebilirsiniz.
                    </p>

                    <p className="text-sm text-white/50 mt-12 border-t border-white/10 pt-4">
                        Son Güncelleme: {new Date().toLocaleDateString('tr-TR')}
                    </p>
                </div>
            </div>
        </main>
    );
}
