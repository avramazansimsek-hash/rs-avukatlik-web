export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-navy pt-24 pb-16">

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8 border-b border-gold/30 pb-4">
                    Gizlilik Politikası
                </h1>

                <div className="space-y-6 text-white/80 font-light leading-relaxed">
                    <p>
                        RS Avukatlık ("Biz", "Hukuk Bürosu") olarak, web sitemizi ziyaret edenlerin gizliliğini korumayı ilke ediniyoruz.
                        Bu Gizlilik Politikası, web sitemiz üzerinden toplanan bilgilerin nasıl kullanıldığını ve korunduğunu açıklar.
                    </p>

                    <h2 className="text-xl font-serif font-semibold text-gold mt-8 mb-4">Toplanan Bilgiler</h2>
                    <p>
                        Web sitemizi ziyaret ettiğinizde, iletişim formu aracılığıyla bize gönderdiğiniz İsim, E-posta, Telefon Numarası
                        gibi kişisel bilgileri toplayabiliriz. Ayrıca, site kullanım istatistiklerini (IP adresi, tarayıcı türü vb.)
                        anonim olarak analiz amaçlı kaydedebiliriz.
                    </p>

                    <h2 className="text-xl font-serif font-semibold text-gold mt-8 mb-4">Bilgilerin Kullanımı</h2>
                    <p>
                        Toplanan bilgiler şu amaçlarla kullanılır:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Sizinle iletişime geçmek ve taleplerinizi yanıtlamak</li>
                        <li>Hukuki hizmetlerimiz hakkında bilgilendirme yapmak</li>
                        <li>Web sitemizin performansını ve kullanıcı deneyimini iyileştirmek</li>
                        <li>Yasal yükümlülüklerimizi yerine getirmek</li>
                    </ul>

                    <h2 className="text-xl font-serif font-semibold text-gold mt-8 mb-4">Çerezler (Cookies)</h2>
                    <p>
                        Web sitemizde kullanıcı deneyimini geliştirmek amacıyla çerezler kullanılmaktadır. Çerezleri tarayıcı ayarlarınızdan
                        reddedebilirsiniz, ancak bu durumda sitenin bazı özellikleri tam olarak çalışmayabilir.
                    </p>

                    <h2 className="text-xl font-serif font-semibold text-gold mt-8 mb-4">Bilgi Güvenliği</h2>
                    <p>
                        Kişisel verilerinizin güvenliği bizim için önemlidir. Verilerin yetkisiz erişime, değişikliğe veya ifşaya karşı
                        korunması için gerekli teknik ve idari tedbirleri almaktayız.
                    </p>

                    <h2 className="text-xl font-serif font-semibold text-gold mt-8 mb-4">İletişim</h2>
                    <p>
                        Gizlilik politikamızla ilgili sorularınız için bizimle <a href="/iletisim" className="text-gold hover:underline">iletişim sayfamız</a> üzerinden irtibata geçebilirsiniz.
                    </p>

                    <p className="text-sm text-white/50 mt-12 border-t border-white/10 pt-4">
                        Son Güncelleme: {new Date().toLocaleDateString('tr-TR')}
                    </p>
                </div>
            </div>
        </main>
    );
}
