import { Star, MessageSquare, Quote } from 'lucide-react';

export default function Reviews() {
    const reviews = [
        {
            name: 'Ahmet Y.',
            date: '2 ay önce',
            comment: 'Boşanma davam sürecinde Ramazan Bey çok ilgilendi. Süreci şeffaf bir şekilde yönetti ve istediğimiz sonucu aldık. Kesinlikle tavsiye ederim.',
            stars: 5,
        },
        {
            name: 'Selin K.',
            date: '1 ay önce',
            comment: 'İş hukuku konusundaki davamda profesyonel yaklaşımı ve bilgisiyle güven verdi. Her aşamada bilgilendirildim.',
            stars: 5,
        },
        {
            name: 'Mehmet D.',
            date: '3 hafta önce',
            comment: 'Ceza davamızda gösterdiği titizlik ve savunma stratejisi için teşekkür ederiz. Alanında uzman bir avukat.',
            stars: 5,
        },
    ];

    return (
        <section className="py-20 bg-navy relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-semibold uppercase tracking-wider mb-4 border border-gold/20">
                        <MessageSquare className="w-3 h-3" />
                        Müvekkil Deneyimleri
                    </div>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                        Google Yorumları
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Müvekkillerimizin hakkımızdaki düşünceleri bizim için en büyük referanstır.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-gold/30 transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(review.stars)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                                ))}
                            </div>
                            <Quote className="w-8 h-8 text-gold/20 mb-4 group-hover:text-gold/40 transition-colors" />
                            <p className="text-white/80 mb-6 leading-relaxed italic">
                                "{review.comment}"
                            </p>
                            <div className="flex justify-between items-center border-t border-white/10 pt-4">
                                <span className="text-white font-medium">{review.name}</span>
                                <span className="text-white/40 text-xs">{review.date}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://www.google.com/search?q=RS+Avukatlık+Bürosu+Av.+Ramazan+Şimşek+Kartal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white/10 hover:bg-gold hover:text-navy-dark text-white font-semibold transition-all duration-300 border border-white/20 hover:border-transparent group"
                    >
                        <Star className="w-5 h-5 text-gold group-hover:text-navy-dark transition-colors" />
                        Google'da Bizi Değerlendirin
                    </a>
                </div>
            </div>
        </section>
    );
}
