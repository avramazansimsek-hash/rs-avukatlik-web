import { useState } from 'react';
import { FileText, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { petitions } from '@/data/petitions';

export default function Petitions() {
    const [currentPage, setCurrentPage] = useState(1);

    const ITEMS_PER_PAGE = 6;
    const totalPages = Math.ceil(petitions.length / ITEMS_PER_PAGE);

    const currentPetitions = petitions.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );



    return (
        <section className="py-24 bg-navy-light/50 relative">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-x-1/2" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-navy-light rounded-full blur-3xl translate-x-1/2" />
            </div>

            <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block text-gold text-sm font-semibold tracking-wider uppercase mb-4">
                        Hukuki Dokümanlar
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6">
                        Örnek <span className="text-gold">Dilekçeler</span>
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Hukuki süreçlerinizde faydalanabileceğiniz temel dilekçe örnekleri.
                        <br />
                        <span className="text-sm text-red-400 font-medium block mt-2">
                            *Bu belgeler yalnızca bilgilendirme amaçlıdır. RS Avukatlık, bu belgelerin kullanımından doğabilecek sonuçlara ilişkin herhangi bir sorumluluk kabul etmez.
                        </span>
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {currentPetitions.map((petition) => (
                        <Link
                            to={`/dilekceler/${petition.slug}`}
                            key={petition.id}
                            className="group bg-navy border border-white/10 rounded-2xl p-6 hover:border-gold/30 transition-all duration-300 flex flex-col h-full hover:-translate-y-1 block"
                        >
                            <div className="mb-4">
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-semibold uppercase tracking-wider mb-4">
                                    <FileText className="w-3 h-3" />
                                    {petition.category}
                                </span>
                                <h3 className="font-serif text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-gold transition-colors">
                                    {petition.title}
                                </h3>
                            </div>

                            <div className="mt-auto pt-4 flex items-center text-white/60 text-sm font-medium group-hover:text-gold transition-colors">
                                <span>İncele</span>
                                <Eye className="w-4 h-4 ml-2" />
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center gap-2 mt-12">
                        <button
                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className="px-4 py-2 rounded-lg bg-white/5 text-white/70 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            Önceki
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 ${currentPage === page
                                    ? 'bg-gold text-navy-dark'
                                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}
                        <button
                            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 rounded-lg bg-white/5 text-white/70 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            Sonraki
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
