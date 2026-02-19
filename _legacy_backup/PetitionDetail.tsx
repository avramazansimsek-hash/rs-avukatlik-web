import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Copy, Check, FileText } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { petitions } from '@/data/petitions';
import { SEO } from '@/components/SEO';
import { useState } from 'react';

export default function PetitionDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const petition = petitions.find((p) => p.slug === slug);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (!petition) {
            navigate('/dilekceler');
        }
        window.scrollTo(0, 0);
    }, [petition, navigate]);

    if (!petition) return null;

    const handleCopy = () => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = petition.content;
        const plainText = tempDiv.textContent || tempDiv.innerText;

        navigator.clipboard.writeText(plainText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <main className="min-h-screen bg-navy pt-24">
            <SEO
                title={`${petition.title} (2025 Örneği) - Word İndir & Düzenle | Av. Ramazan Şimşek`}
                description={`İstanbul Kartal Avukat Ramazan Şimşek tarafından hazırlanan ${petition.title}. ${petition.category} için güncel, Yargıtay uyumlu dilekçe örneğini hemen incele.`}
                canonical={`/dilekceler/${petition.slug}`}
                type="article"
            />

            {/* Breadcrumb & Article Schema */}
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "TechArticle",
                        "headline": petition.title,
                        "description": `${petition.category} alanında ${petition.title} örneği.`,
                        "articleSection": petition.category,
                        "author": {
                            "@type": "Person",
                            "name": "Av. Ramazan Şimşek"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "RS Avukatlık",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://rsavukatlik.com/logo.webp"
                            }
                        },
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": `https://rsavukatlik.com/dilekceler/${petition.slug}`
                        }
                    })}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Ana Sayfa",
                                "item": "https://rsavukatlik.com/"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Dilekçeler",
                                "item": "https://rsavukatlik.com/dilekceler"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": petition.title,
                                "item": `https://rsavukatlik.com/dilekceler/${petition.slug}`
                            }
                        ]
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

                <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
                    <div className="max-w-4xl mx-auto">
                        <Link
                            to="/dilekceler"
                            className="inline-flex items-center text-white/60 hover:text-gold transition-colors mb-8 group"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                            Tüm Dilekçeler
                        </Link>

                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-semibold uppercase tracking-wider mb-6 border border-gold/20">
                            <FileText className="w-3 h-3" />
                            {petition.category}
                        </span>

                        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            {petition.title}
                        </h1>

                        <p className="text-white/60 text-lg">
                            Bu dilekçe örneği bilgilendirme amaçlıdır. Her somut olay farklılık gösterebileceğinden hukuki destek almanız önerilir.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-12 pb-24">
                <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white/5 rounded-2xl border border-white/10 p-8 md:p-12 relative overflow-hidden group">
                            {/* Decorative corner */}
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <FileText className="w-32 h-32 text-gold" />
                            </div>

                            <div className="flex justify-end mb-6">
                                <button
                                    onClick={handleCopy}
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gold/10 text-gold hover:bg-gold hover:text-navy-dark transition-all duration-300 border border-gold/20 font-medium text-sm"
                                >
                                    {copied ? (
                                        <>
                                            <Check className="w-4 h-4" />
                                            Kopyalandı
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="w-4 h-4" />
                                            Metni Kopyala
                                        </>
                                    )}
                                </button>
                            </div>

                            <div className="bg-white/90 text-navy-dark p-8 rounded-xl font-serif text-lg leading-relaxed shadow-inner">
                                <div
                                    dangerouslySetInnerHTML={{ __html: petition.content }}
                                />
                            </div>
                        </div>

                        {/* Disclaimer */}
                        <div className="mt-8 p-6 rounded-xl bg-red-500/10 border border-red-500/20 text-center">
                            <p className="text-red-200/80 text-sm">
                                <strong>Yasal Uyarı:</strong> Bu dilekçe örneği genel bilgilendirme amacıyla hazırlanmıştır.
                                Hak kaybı yaşamamanız için uzman bir avukattan hukuki danışmanlık almanız önemle tavsiye olunur.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-white/5 border-t border-white/10">
                <div className="w-full px-4 text-center">
                    <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">
                        Dilekçe Konusunda Yardıma mı İhtiyacınız Var?
                    </h2>
                    <p className="text-white/60 mb-8 max-w-xl mx-auto">
                        Somut olayın özelliklerine göre hazırlanacak profesyonel bir dilekçe için bizimle iletişime geçin.
                    </p>
                    <Link
                        to="/iletisim"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gold hover:bg-gold-light text-navy-dark font-semibold transition-all duration-300 hover:shadow-glow"
                    >
                        Avukata Danış
                    </Link>
                </div>
            </section>
        </main>
    );
}
