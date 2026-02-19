import { useEffect } from 'react';
import { SEO } from '@/components/SEO';
import Petitions from '@/components/Petitions';

export default function PetitionsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-navy pt-24">
            <SEO
                title="Hukuki Dilekçe Örnekleri (2025 Güncel) - İndir & Düzenle | RS Avukatlık"
                description="Avukat tarafından hazırlanmış 100+ güncel dava dilekçesi, ihtarname ve sözleşme örneği. Boşanma, İşe İade, Kiracı Tahliye dilekçelerini Word formatında indir."
                canonical="/dilekceler"
            />

            <div className="pt-8">
                <Petitions />
            </div>

            {/* Official Links Section */}
            <section className="py-20 bg-white/5 border-t border-white/10">
                <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-3xl font-bold text-white mb-4">
                            Resmi <span className="text-gold">Kurumlar</span>
                        </h2>
                        <p className="text-white/60">
                            Faydalı olabilecek resmi kurum bağlantıları
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {[
                            {
                                name: 'İstanbul Barosu',
                                url: 'https://www.istanbulbarosu.org.tr/',
                                image: '/images/ist_baro.png',
                                color: 'bg-white/5'
                            },
                            {
                                name: 'Adalet Bakanlığı',
                                url: 'https://www.adalet.gov.tr/',
                                image: '/images/adalet_b_logo.png',
                                color: 'bg-white/5'
                            },
                            {
                                name: 'Resmi Gazete',
                                url: 'https://resmigazete.gov.tr/',
                                image: '/images/resmi_gazete.png',
                                color: 'bg-white/5'
                            },
                            {
                                name: 'TBMM',
                                url: 'https://www.tbmm.gov.tr/',
                                image: '/images/tbmm_logo.png',
                                color: 'bg-white/5'
                            }
                        ].map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col items-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-gold/30 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className={`w-20 h-20 rounded-full ${link.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 p-3`}>
                                    <img
                                        src={link.image}
                                        alt={link.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <span className="text-white/80 font-medium group-hover:text-gold transition-colors text-center">
                                    {link.name}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
