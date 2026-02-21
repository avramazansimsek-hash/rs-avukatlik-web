import { useEffect, useRef, useState } from 'react';


export default function HomeAbout() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="relative py-24 bg-navy">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212,175,55,0.3) 1px, transparent 0)`,
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span
                        className={`inline-block text-gold text-sm font-semibold tracking-wider uppercase mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                    >
                        Hakkımızda
                    </span>
                    <h2
                        className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                    >
                        Hukuki Çözüm <span className="text-gold">Ortağınız</span>
                    </h2>
                    <div
                        className={`flex items-center justify-center gap-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                    >
                        <div className="w-12 h-px bg-gold/50" />
                        <div className="w-1.5 h-1.5 rotate-45 border border-gold" />
                        <div className="w-12 h-px bg-gold/50" />
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-4xl mx-auto">
                    <div
                        className={`text-center space-y-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        <p className="text-white/80 text-lg leading-relaxed text-justify">
                            İstanbul Kartal merkezli <strong>RS Avukatlık</strong>, kurucu avukatımız <strong>Av. Ramazan Şimşek</strong> liderliğinde profesyonel ve çözüm odaklı ekibiyle hukuki danışmanlık hizmetleri sunmaktadır. Ağır Ceza Hukuku, Boşanma Davaları, İşçi Alacakları ve İdare Hukuku alanlarında uzmanlaşmış kadromuzla yanınızdayız.
                        </p>
                        <p className="text-white/80 text-lg leading-relaxed text-justify">
                            RS Avukatlık olarak etik ilkelerden ödün vermeden seçkin kadromuz müvekkil memnuniyeti odaklı, ulusal ve uluslararası kalite standartlarında hizmet anlayışı ile sektörde öncü uygulamalarla fark yaratmak ve sağladığımız hizmeti gerek ulusal gerekse uluslararası ihtiyaçların karşılanması ve kalite sürekliliğinin sağlanması için hukuki, finansal, bilimsel ve teknolojik güncel gelişmeleri yakından takip etmekte; bu doğrultuda sadece var olan sorunlara çözüm üretmekle kalmayıp beraberinde bu sorunları ortaya çıkmadan da engellemeyi amaçlamaktayız.
                        </p>

                        {/* Founder Info */}
                        <div
                            className={`mt-12 flex flex-col items-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                        >
                            <div className="w-40 h-40 rounded-full border-4 border-gold/20 overflow-hidden mb-6 shadow-xl relative group">
                                <img
                                    src="/kurucu-ramazan-simsek.jpg?v=2"
                                    alt="İstanbul Kartal Avukatı Av. Ramazan Şimşek"
                                    title="RS Avukatlık Kurucusu Av. Ramazan Şimşek"
                                    className="w-full h-full object-cover object-[center_30%]"
                                />
                            </div>
                            <h3 className="font-serif text-2xl font-semibold text-white">
                                Av. Ramazan Şimşek
                            </h3>
                            <p className="text-gold text-sm font-medium tracking-wider uppercase mt-2">
                                Kurucu Avukat
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
