import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2, Tag } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { getArticleBySlug, type Article } from '@/lib/articles';
import { SEO } from '@/components/SEO';
import ReactMarkdown from 'react-markdown';

export default function ArticleDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [article, setArticle] = useState<Article | undefined>(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticle = async () => {
            if (slug) {
                const data = await getArticleBySlug(slug);
                if (!data) {
                    navigate('/makalelerimiz');
                } else {
                    setArticle(data);
                }
            }
            setLoading(false);
        };
        fetchArticle();
    }, [slug, navigate]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [article]);

    if (loading) return <div className="min-h-screen bg-navy flex items-center justify-center text-white">Yükleniyor...</div>;
    if (!article) return null;

    const shareUrl = window.location.href;

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: article.title,
                    text: article.excerpt,
                    url: shareUrl,
                });
            } catch (err) {
                console.log('Error sharing:', err);
            }
        } else {
            navigator.clipboard.writeText(shareUrl);
            alert('Link kopyalandı!');
        }
    };

    // Helper to convert Turkish date string to ISO format for Schema
    const getIsoDate = (dateStr: string) => {
        try {
            return new Date(dateStr).toISOString().split('T')[0];
        } catch (e) {
            return new Date().toISOString().split('T')[0];
        }
    };

    return (
        <main className="min-h-screen bg-navy pt-24">
            <SEO
                title={`${article.title} | RS Avukatlık`}
                description={article.excerpt}
                canonical={`https://rsavukatlik.com/makalelerimiz/${article.slug}`}
                type="article"
            // image={article.image} 
            />

            {/* Article & Breadcrumb Schema */}
            <Helmet>
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
                                "name": "Makalelerimiz",
                                "item": "https://rsavukatlik.com/makalelerimiz"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": article.title,
                                "item": `https://rsavukatlik.com/makalelerimiz/${article.slug}`
                            }
                        ]
                    })}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": article.title,
                        "description": article.excerpt,
                        "image": "https://rsavukatlik.com/og-image.jpg",
                        "author": {
                            "@type": "Person",
                            "name": "RS Avukatlık"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "RS Avukatlık",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://rsavukatlik.com/logo.webp"
                            }
                        },
                        "datePublished": getIsoDate(article.date),
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": `https://rsavukatlik.com/makalelerimiz/${article.slug}`
                        }
                    })}
                </script>
            </Helmet>

            {/* Hero Content */}
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
                        {/* Breadcrumb / Back */}
                        <Link
                            to="/makalelerimiz"
                            className="inline-flex items-center text-white/60 hover:text-gold transition-colors mb-8 group"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                            Tüm Makaleler
                        </Link>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm mb-6">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold/20">
                                <Tag className="w-3 h-3" />
                                {article.category}
                            </span>
                            <div className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4 text-gold/70" />
                                {article.date}
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Clock className="w-4 h-4 text-gold/70" />
                                5 dk okuma
                            </div>
                        </div>

                        {/* Title */}
                        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                            {article.title}
                        </h1>

                        {/* Author */}
                        <div className="flex items-center justify-between border-t border-white/10 pt-8">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                                    <User className="w-5 h-5 text-gold" />
                                </div>
                                <div>
                                    <div className="text-white font-medium">RS Avukatlık</div>
                                    <div className="text-white/40 text-xs">Hukuk Bürosu</div>
                                </div>
                            </div>

                            <button
                                onClick={handleShare}
                                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-gold transition-colors"
                                title="Paylaş"
                            >
                                <Share2 className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            {/* Article Content */}
            <section className="relative py-12 pb-24">
                <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
                    <div className="max-w-4xl mx-auto">
                        {/* Content Card */}
                        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-xl">
                            <div className="prose prose-lg prose-invert max-w-none
                                prose-p:text-gray-200 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg prose-p:font-light
                                prose-headings:font-serif prose-headings:text-gold prose-headings:mb-4 prose-headings:mt-10
                                prose-h2:text-3xl prose-h2:font-medium prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-3
                                prose-h3:text-2xl prose-h3:font-medium
                                prose-strong:text-white prose-strong:font-semibold
                                prose-li:text-gray-200 prose-li:my-2 prose-li:marker:text-gold prose-li:leading-normal
                                prose-ul:my-6 prose-ol:my-6
                                prose-blockquote:border-l-4 prose-blockquote:border-gold prose-blockquote:bg-white/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:italic prose-blockquote:text-gray-300 prose-blockquote:my-8
                                prose-a:text-gold prose-a:font-medium prose-a:no-underline hover:prose-a:text-gold-light hover:prose-a:underline transition-colors
                                first-letter:float-left first-letter:text-5xl first-letter:pr-4 first-letter:font-serif first-letter:text-gold first-letter:font-bold">
                                <ReactMarkdown>{article.content}</ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white/5 border-t border-white/10">
                <div className="w-full px-4 text-center">
                    <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">
                        Hukuki Desteğe mi İhtiyacınız Var?
                    </h2>
                    <p className="text-white/60 mb-8 max-w-xl mx-auto">
                        Bu konuda daha detaylı bilgi almak veya hukuki sürecinizi başlatmak için bizimle iletişime geçebilirsiniz.
                    </p>
                    <Link
                        to="/iletisim"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gold hover:bg-gold-light text-navy-dark font-semibold transition-all duration-300 hover:shadow-glow"
                    >
                        İletişime Geçin
                    </Link>
                </div>
            </section>
        </main>
    );
}
