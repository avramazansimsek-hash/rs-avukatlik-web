import { Helmet } from 'react-helmet-async';
import { SEO } from '@/components/SEO';
import { HelpCircle, ChevronDown, ChevronUp, Search } from 'lucide-react';
import { useState, useMemo } from 'react';
import { faqs } from '@/data/faqs';

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [activeCategory, setActiveCategory] = useState<string>('Tümü');
    const [searchQuery, setSearchQuery] = useState('');

    // Extract unique categories
    const categories = ['Tümü', ...Array.from(new Set(faqs.map(f => f.category)))];

    // Filter FAQs based on category and search query
    const filteredFaqs = useMemo(() => {
        return faqs.filter(faq => {
            const matchesCategory = activeCategory === 'Tümü' || faq.category === activeCategory;
            const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    return (
        <main className="min-h-screen bg-navy pt-24">
            <SEO
                title="Sıkça Sorulan Sorular - Hukuki Bilgi Bankası | RS Avukatlık"
                description="Boşanma, Ceza, İş ve Gayrimenkul Hukuku alanlarında en çok merak edilen 100+ sorunun cevabı ve ilgili dilekçe örnekleri."
                canonical="https://rsavukatlik.com/sikca-sorulan-sorular"
                type="website"
            />

            {/* FAQ Schema */}
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": filteredFaqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    })}
                </script>
            </Helmet>

            {/* Hero Section */}
            <section className="relative py-16 bg-gradient-to-b from-navy-light to-navy">
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212,175,55,0.3) 1px, transparent 0)`,
                            backgroundSize: '40px 40px',
                        }}
                    />
                </div>

                <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20 text-center">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-semibold uppercase tracking-wider mb-6 border border-gold/20">
                        <HelpCircle className="w-3 h-3" />
                        Hukuki Bilgi Bankası
                    </span>
                    <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Sıkça Sorulan Sorular
                    </h1>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
                        Merak ettiğiniz tüm hukuki soruların yanıtlarını ve ilgili dilekçe örneklerini burada bulabilirsiniz.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-xl mx-auto relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gold group-focus-within:text-white transition-colors" />
                        </div>
                        <input
                            type="text"
                            placeholder="Soru veya konu ara..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="block w-full pl-11 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-transparent transition-all"
                        />
                    </div>
                </div>
            </section>

            {/* Categories & List */}
            <section className="py-8 pb-24">
                <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
                    <div className="max-w-4xl mx-auto">

                        {/* Category Tabs */}
                        <div className="flex flex-wrap justify-center gap-2 mb-10">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                        ? 'bg-gold text-navy-dark shadow-glow'
                                        : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* FAQ Filtering Results */}
                        {filteredFaqs.length === 0 ? (
                            <div className="text-center text-white/40 py-12">
                                <Search className="w-12 h-12 mx-auto mb-4 opacity-20" />
                                <p>Aradığınız kriterlere uygun sonuç bulunamadı.</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {filteredFaqs.map((faq, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-gold/30 hover:bg-white/[0.07]"
                                    >
                                        <button
                                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                            className="w-full flex items-start justify-between p-6 text-left"
                                        >
                                            <div className="flex flex-col gap-1 pr-4">
                                                <span className="text-xs text-gold/80 font-medium uppercase tracking-wider">
                                                    {faq.category}
                                                </span>
                                                <span className={`font-serif text-lg font-medium ${openIndex === index ? 'text-gold' : 'text-white'}`}>
                                                    {faq.question}
                                                </span>
                                            </div>
                                            {openIndex === index ? (
                                                <ChevronUp className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                                            ) : (
                                                <ChevronDown className="w-5 h-5 text-white/40 flex-shrink-0 mt-1" />
                                            )}
                                        </button>

                                        <div
                                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                                }`}
                                        >
                                            <div className="p-6 pt-0 border-t border-white/5">
                                                <p className="text-white/70 leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}
