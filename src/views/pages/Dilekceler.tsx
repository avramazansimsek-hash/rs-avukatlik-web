import { useEffect, useRef, useState } from 'react';

import { Calendar, ArrowRight, Tag, Search, FileText } from 'lucide-react';
import { Input } from '@/components/ui/input';
import type { Dilekce } from '@/lib/dilekceler';

const categories = ['Tümü', 'Aile Hukuku', 'Ceza Hukuku', 'İcra Hukuku', 'İş Hukuku', 'Ticaret Hukuku', 'İdare ve Vergi Hukuku', 'Miras Hukuku', 'Gayrimenkul Hukuku', 'Tüketici Hukuku', 'Bilişim Hukuku'];

interface DilekcelerPageProps {
    initialDilekceler: Dilekce[];
}

export default function DilekcelerPage({ initialDilekceler }: DilekcelerPageProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Tümü');
    const [dilekceler] = useState<Dilekce[]>(initialDilekceler);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.05 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 9;

    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, selectedCategory]);

    const filteredDilekceler = dilekceler.filter(dilekce => {
        const matchesSearch = dilekce.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            dilekce.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'Tümü' || dilekce.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const totalPages = Math.ceil(filteredDilekceler.length / ITEMS_PER_PAGE);
    const currentDilekceler = filteredDilekceler.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    return (
        <main className="min-h-screen bg-navy pt-24">
            {/* Page Header */}
            <section className="relative py-20 bg-gradient-to-b from-navy-light to-navy">
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212,175,55,0.3) 1px, transparent 0)`,
                            backgroundSize: '40px 40px',
                        }}
                    />
                </div>
                <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="inline-block text-gold text-sm font-semibold tracking-wider uppercase mb-4">
                            Hukuki Metinler
                        </span>
                        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Dilekçe <span className="text-gold">Örnekleri</span>
                        </h1>
                        <p className="text-white/70 text-lg">
                            Çeşitli hukuki süreçleriniz için referans alabileceğiniz güncel dilekçe taslakları
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section ref={sectionRef} className="relative py-24">
                <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
                    {/* Search and Filter */}
                    <div
                        className={`flex flex-col md:flex-row gap-6 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        {/* Search */}
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                            <Input
                                type="text"
                                placeholder="Dilekçe ara..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-gold focus:ring-gold/20"
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${selectedCategory === category
                                        ? 'bg-gold text-navy-dark'
                                        : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    <>
                        {/* Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                            {currentDilekceler.map((dilekce, index) => (
                                <article
                                    key={dilekce.slug}
                                    className={`group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-gold/30 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                        }`}
                                    style={{ transitionDelay: `${200 + (index % 9) * 50}ms` }}
                                >
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                                                <FileText className="w-6 h-6" />
                                            </div>
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-light border border-white/5 text-gold text-xs font-medium">
                                                <Tag className="w-3 h-3" />
                                                {dilekce.category}
                                            </span>
                                        </div>

                                        <h3 className="font-serif text-xl font-semibold text-white mb-3 group-hover:text-gold transition-colors line-clamp-2">
                                            {dilekce.title}
                                        </h3>

                                        <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-3">
                                            {dilekce.excerpt}
                                        </p>

                                        <a
                                            href={`/dilekce-ornekleri/${dilekce.slug}`}
                                            className="inline-flex items-center text-gold text-sm font-medium group/link"
                                        >
                                            <span className="relative">
                                                Dilekçeyi İncele
                                                <span className="absolute bottom-0 left-0 w-0 h-px bg-gold group-hover/link:w-full transition-all duration-300" />
                                            </span>
                                            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Pagination Controls */}
                        {totalPages > 1 && (
                            <div className="flex flex-wrap justify-center items-center gap-2 mb-24">
                                <button
                                    onClick={() => setCurrentPage(1)}
                                    disabled={currentPage === 1}
                                    className="px-3 py-2 rounded-lg bg-white/5 text-white/70 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-sm font-medium hidden sm:block"
                                >
                                    Başa Dön
                                </button>

                                <button
                                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                    disabled={currentPage === 1}
                                    className="px-3 py-2 rounded-lg bg-white/5 text-white/70 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-sm font-medium"
                                >
                                    Önceki
                                </button>

                                <div className="flex gap-2 mx-2">
                                    <span className="text-white/60 text-sm flex items-center">
                                        Sayfa {currentPage} / {totalPages}
                                    </span>
                                </div>

                                <button
                                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                    disabled={currentPage === totalPages}
                                    className="px-3 py-2 rounded-lg bg-white/5 text-white/70 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-sm font-medium"
                                >
                                    Sonraki
                                </button>

                                <button
                                    onClick={() => setCurrentPage(totalPages)}
                                    disabled={currentPage === totalPages}
                                    className="px-3 py-2 rounded-lg bg-white/5 text-white/70 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-sm font-medium hidden sm:block"
                                >
                                    Sona Git
                                </button>
                            </div>
                        )}

                        {filteredDilekceler.length === 0 && (
                            <div className="text-center py-16 flex flex-col items-center">
                                <FileText className="w-16 h-16 text-white/20 mb-4" />
                                <p className="text-white/60 text-lg">
                                    Aramanıza uygun dilekçe örneği bulunamadı.
                                </p>
                            </div>
                        )}
                    </>
                </div>
            </section>
        </main>
    );
}
