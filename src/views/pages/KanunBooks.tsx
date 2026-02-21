import { Scale, ChevronRight, BookOpen } from 'lucide-react';

const LAW_BOOKS = [
    { slug: 'tck', title: 'Türk Ceza Kanunu (TCK)', desc: '5237 Sayılı Kanun' },
    { slug: 'cmk', title: 'Ceza Muhakemesi Kanunu (CMK)', desc: '5271 Sayılı Kanun' },
    { slug: 'hmk', title: 'Hukuk Muhakemeleri Kanunu (HMK)', desc: '6100 Sayılı Kanun' },
    { slug: 'tmk', title: 'Türk Medeni Kanunu (TMK)', desc: '4721 Sayılı Kanun' },
    { slug: 'tbk', title: 'Türk Borçlar Kanunu (TBK)', desc: '6098 Sayılı Kanun' },
    { slug: 'avukatlik', title: 'Avukatlık Kanunu', desc: '1136 Sayılı Kanun' },
    { slug: 'iik', title: 'İcra ve İflas Kanunu (İİK)', desc: '2004 Sayılı Kanun' },
    { slug: 'ttk', title: 'Türk Ticaret Kanunu (TTK)', desc: '6102 Sayılı Kanun' },
    { slug: 'is_kanunu', title: 'İş Kanunu', desc: '4857 Sayılı Kanun' },
    { slug: 'iyuk', title: 'İdari Yargılama Usulü Kanunu (İYUK)', desc: '2577 Sayılı Kanun' },
    { slug: 'ktk', title: 'Karayolları Trafik Kanunu (KTK)', desc: '2918 Sayılı Kanun' },
    { slug: 'tkhk', title: 'Tüketicinin Korunması Hakkında Kanun (TKHK)', desc: '6502 Sayılı Kanun' },
    { slug: 'anayasa', title: 'Türkiye Cumhuriyeti Anayasası', desc: '2709 Sayılı Kanun' },
    { slug: 'kabahatler', title: 'Kabahatler Kanunu', desc: '5326 Sayılı Kanun' },
    { slug: 'kvkk', title: 'Kişisel Verilerin Korunması Kanunu (KVKK)', desc: '6698 Sayılı Kanun' }
];

export default function KanunBooks() {
    return (
        <main className="min-h-screen bg-navy pt-24">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-12 xl:px-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-navy-light/50 to-navy pointer-events-none" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative max-w-7xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold/10 text-gold mb-6 relative">
                        <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full" />
                        <Scale className="w-8 h-8 relative z-10" />
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                        Kanunlar ve <span className="text-gold">Mevzuat</span>
                    </h1>
                    <p className="text-lg text-white/70 max-w-2xl mx-auto mb-12">
                        RS Avukatlık olarak sizler için hazırladığımız güncel Türk Hukuku mevzuat rehberindeki kanun kitaplarından incelemek istediğinizi seçiniz. Seçtiğiniz kanuna ait tüm maddelere ve hukuki incelemelere ulaşabilirsiniz.
                    </p>
                </div>
            </section>

            <section className="py-8 px-4 sm:px-6 lg:px-12 xl:px-20 max-w-7xl mx-auto border-t border-white/5 pb-24">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {LAW_BOOKS.map((law) => (
                        <a
                            href={`/kanunlar/${law.slug}`}
                            key={law.slug}
                            className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-gold/30 transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                                    <BookOpen className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-serif font-bold text-white group-hover:text-gold transition-colors">
                                        {law.title}
                                    </h3>
                                    <p className="text-sm text-white/50 mt-1">{law.desc}</p>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
                                <span className="text-gold text-sm font-medium group-hover:translate-x-1 transition-transform flex items-center gap-2">
                                    Maddeleri İncele <ChevronRight className="w-4 h-4" />
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </section>
        </main>
    );
}
