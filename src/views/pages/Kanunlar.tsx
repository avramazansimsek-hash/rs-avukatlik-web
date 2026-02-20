import { useState, useMemo } from 'react';
import { Search, ChevronRight, ChevronLeft, Scale } from 'lucide-react';

interface Kanun {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
}

interface KanunlarPageProps {
    initialLaws: Kanun[];
}

const ITEMS_PER_PAGE = 24;

export default function KanunlarPage({ initialLaws }: KanunlarPageProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const filteredLaws = useMemo(() => {
        let result = initialLaws;
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter(
                law =>
                    law.title.toLowerCase().includes(query) ||
                    law.excerpt.toLowerCase().includes(query)
            );
        }
        return result;
    }, [initialLaws, searchQuery]);

    const totalPages = Math.ceil(filteredLaws.length / ITEMS_PER_PAGE);
    const paginatedLaws = filteredLaws.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

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
                        RS Avukatlık olarak sizler için hazırladığımız güncel Türk Ceza Kanunu (TCK) maddeleri,
                        hukuki değerlendirmeler ve açıklamaları.
                    </p>

                    <div className="max-w-xl mx-auto relative group">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-white/40 group-focus-within:text-gold transition-colors">
                            <Search className="w-5 h-5" />
                        </div>
                        <input
                            type="text"
                            placeholder="Madde no veya konu ara... (Örn: Tehdit, Madde 106)"
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-white/40 focus:outline-none focus:border-gold/50 focus:bg-white/10 transition-all font-light"
                        />
                    </div>
                </div>
            </section>

            <section className="py-8 px-4 sm:px-6 lg:px-12 xl:px-20 max-w-7xl mx-auto border-t border-white/5">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                        <div className="mb-8 flex items-center justify-between">
                            <h2 className="text-2xl font-serif text-white">Türk Ceza Kanunu</h2>
                            <span className="text-white/50 text-sm">{filteredLaws.length} Madde Bulundu</span>
                        </div>

                        {filteredLaws.length === 0 ? (
                            <div className="bg-white/5 rounded-2xl p-12 text-center border border-white/10">
                                <Scale className="w-12 h-12 text-white/20 mx-auto mb-4" />
                                <h3 className="text-xl font-medium text-white mb-2">Sonuç Bulunamadı</h3>
                                <p className="text-white/60">Arama kriterlerinize uygun kanun maddesi bulunamadı.</p>
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="mt-6 text-gold hover:text-white transition-colors text-sm font-medium"
                                >
                                    Aramayı Temizle
                                </button>
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 gap-6 mb-16">
                                {paginatedLaws.map((law) => (
                                    <a
                                        href={`/kanunlar/tck/${law.slug}`}
                                        key={law.slug}
                                        className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-gold/30 transition-all duration-300 flex flex-col h-full"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-medium border border-gold/20">
                                                {law.category}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-serif font-bold text-white mb-3 group-hover:text-gold transition-colors line-clamp-2">
                                            {law.title}
                                        </h3>
                                        <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                                            {law.excerpt}
                                        </p>
                                        <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
                                            <span className="text-gold text-sm font-medium group-hover:translate-x-1 transition-transform flex items-center gap-2">
                                                İncele <ChevronRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        )}

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex items-center justify-center gap-2 pb-20">
                                <button
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className="p-2 rounded-lg bg-white/5 text-white/60 hover:bg-white/10 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>

                                <div className="flex gap-2">
                                    {[...Array(totalPages)].map((_, i) => {
                                        const page = i + 1;
                                        if (
                                            page === 1 ||
                                            page === totalPages ||
                                            (page >= currentPage - 1 && page <= currentPage + 1)
                                        ) {
                                            return (
                                                <button
                                                    key={page}
                                                    onClick={() => handlePageChange(page)}
                                                    className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${currentPage === page
                                                        ? 'bg-gold text-navy'
                                                        : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                                                        }`}
                                                >
                                                    {page}
                                                </button>
                                            );
                                        } else if (page === currentPage - 2 || page === currentPage + 2) {
                                            return <span key={page} className="text-white/40 px-2 py-2">...</span>;
                                        }
                                        return null;
                                    })}
                                </div>

                                <button
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className="p-2 rounded-lg bg-white/5 text-white/60 hover:bg-white/10 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}
