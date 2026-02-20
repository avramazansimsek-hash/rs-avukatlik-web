import { useEffect, useState } from 'react';
import { Calendar, User, Clock, ArrowLeft, Share2, Tag } from 'lucide-react';
import type { Article } from '@/lib/articles';
import ReactMarkdown from 'react-markdown';

interface ArticleViewProps {
    article: Article;
    relatedArticles?: Article[];
}

export default function ArticleView({ article, relatedArticles }: ArticleViewProps) {
    const handleShare = async () => {
        if (!article) return;
        const shareUrl = window.location.href;
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

    if (!article) return null;

    return (
        <main className="min-h-screen bg-navy pt-24">
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
                        <a
                            href="/makalelerimiz"
                            className="inline-flex items-center text-white/60 hover:text-gold transition-colors mb-8 group"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                            Tüm Makaleler
                        </a>

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
                                <div className="w-12 h-12 rounded-full border border-gold/20 overflow-hidden">
                                    <img
                                        src="/kurucu-ramazan-simsek.jpg?v=2"
                                        alt="Av. Ramazan Şimşek"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="text-white font-medium">Av. Ramazan Şimşek</div>
                                    <div className="text-white/40 text-xs">Kurucu Avukat</div>
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
                                <ReactMarkdown
                                    components={{
                                        h1: ({ node, ...props }) => <h2 {...props} />,
                                    }}
                                >
                                    {article.content}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Authority Wheel / Golden Formula Links */}
            {article.category === 'Ceza Hukuku' && (
                <section className="container mx-auto px-4 max-w-4xl mb-12">
                    <div className="bg-gradient-to-br from-navy-light to-navy border border-gold/30 rounded-2xl p-8 relative overflow-hidden group hover:border-gold/60 transition-colors">
                        {/* Decorative glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

                        <h3 className="font-serif text-2xl text-white mb-6 flex items-center gap-3">
                            <span className="w-8 h-1 bg-gold rounded-full" />
                            İlginizi Çekebilecek Diğer Konular
                        </h3>

                        <div className="grid md:grid-cols-3 gap-6">
                            {/* 1. Power Page Link */}
                            <a href="/kartal-ceza-avukati" className="block p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-gold/30 transition-all duration-300">
                                <span className="text-gold text-xs font-bold uppercase tracking-wider mb-2 block">Ana Hizmet</span>
                                <span className="text-white font-serif text-lg font-medium block">Kartal Ceza Avukatı</span>
                                <span className="text-white/50 text-sm mt-2 block group-hover:text-gold transition-colors">Detaylı Bilgi →</span>
                            </a>

                            {/* 2. Related Article Link */}
                            {relatedArticles && relatedArticles.length > 0 && (
                                <a href={`/makalelerimiz/${relatedArticles[0].slug}`} className="block p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-gold/30 transition-all duration-300">
                                    <span className="text-gold text-xs font-bold uppercase tracking-wider mb-2 block">İlgili Makale</span>
                                    <span className="text-white font-serif text-lg font-medium block line-clamp-2">{relatedArticles[0].title}</span>
                                    <span className="text-white/50 text-sm mt-2 block group-hover:text-gold transition-colors">Okumaya Devam Et →</span>
                                </a>
                            )}

                            {/* 3. Pillar Page / Category Link */}
                            <a href="/kartal-ceza-hukuku-rehberi" className="block p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-gold/30 transition-all duration-300">
                                <span className="text-gold text-xs font-bold uppercase tracking-wider mb-2 block">Kapsamlı Rehber</span>
                                <span className="text-white font-serif text-lg font-medium block">Ceza Hukuku Rehberi</span>
                                <span className="text-white/50 text-sm mt-2 block group-hover:text-gold transition-colors">Tüm Yazılar →</span>
                            </a>
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-20 bg-white/5 border-t border-white/10">
                <div className="w-full px-4 text-center">
                    <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">
                        Hukuki Desteğe mi İhtiyacınız Var?
                    </h2>
                    <p className="text-white/60 mb-8 max-w-xl mx-auto">
                        Bu konuda daha detaylı bilgi almak veya hukuki sürecinizi başlatmak için bizimle iletişime geçebilirsiniz.
                    </p>
                    <a
                        href="/iletisim"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gold hover:bg-gold-light text-navy-dark font-semibold transition-all duration-300 hover:shadow-glow"
                    >
                        İletişime Geçin
                    </a>
                </div>
            </section>
        </main>
    );
}
