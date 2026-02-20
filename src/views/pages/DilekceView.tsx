import { FileText, ArrowLeft, Tag, Calendar, Shield, Share2 } from 'lucide-react';
import type { Dilekce } from '@/lib/dilekceler';
import ReactMarkdown from 'react-markdown';

interface DilekceViewProps {
    dilekce: Dilekce;
    relatedDilekceler?: Dilekce[];
}

export default function DilekceView({ dilekce, relatedDilekceler }: DilekceViewProps) {
    const handleShare = async () => {
        if (!dilekce) return;
        const shareUrl = window.location.href;
        if (navigator.share) {
            try {
                await navigator.share({
                    title: dilekce.title,
                    text: dilekce.excerpt,
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

    if (!dilekce) return null;

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
                        <a
                            href="/dilekce-ornekleri"
                            className="inline-flex items-center text-white/60 hover:text-gold transition-colors mb-8 group"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                            Tüm Dilekçeler
                        </a>

                        <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm mb-6">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold/20">
                                <Tag className="w-3 h-3" />
                                {dilekce.category}
                            </span>
                            <div className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4 text-gold/70" />
                                Güncel: {new Date().getFullYear()}
                            </div>
                        </div>

                        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                            {dilekce.title}
                        </h1>

                        <div className="flex items-center justify-between border-t border-white/10 pt-8">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full border border-gold/20 overflow-hidden bg-navy-light flex items-center justify-center">
                                    <Shield className="w-6 h-6 text-gold" />
                                </div>
                                <div>
                                    <div className="text-white font-medium">Uzman İncelemesi Önerilir</div>
                                    <div className="text-white/40 text-xs">Taslak Metin</div>
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

            {/* Dilekçe Content */}
            <section className="relative py-12 pb-24">
                <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-xl">
                            <div className="prose prose-lg prose-invert max-w-none
                                prose-p:text-gray-200 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                                prose-headings:font-serif prose-headings:text-gold prose-headings:mb-6 prose-headings:mt-10
                                prose-h1:text-center prose-h1:border-b-2 prose-h1:border-gold/30 prose-h1:pb-6
                                prose-h2:text-2xl prose-h2:text-center prose-h2:mb-8
                                prose-strong:text-white prose-strong:font-bold
                                prose-blockquote:border-l-4 prose-blockquote:border-red-500/50 prose-blockquote:bg-red-500/10 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-white/90 prose-blockquote:my-8
                                prose-a:text-gold prose-a:font-medium hover:prose-a:underline
                                whitespace-pre-wrap">
                                <ReactMarkdown
                                    components={{
                                        p: ({ node, children, ...props }) => {
                                            // Make specific keywords bold to look like a legal document
                                            return <p {...props}>{children}</p>
                                        }
                                    }}
                                >
                                    {dilekce.content}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white/5 border-t border-white/10">
                <div className="w-full px-4 text-center">
                    <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">
                        Hukuki Sürecinizi Riske Atmayın
                    </h2>
                    <p className="text-white/60 mb-8 max-w-2xl mx-auto">
                        Dilekçeler sadece birer hukuki taslaktır. Uzman avukatlar tarafından olayın özelliklerine göre hazırlanmayan dilekçeler hak kayıplarına yol açabilir. Davanızı güvenle yürütmek için danışmanlık alın.
                    </p>
                    <a
                        href="/iletisim"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gold hover:bg-gold-light text-navy-dark font-semibold transition-all duration-300 hover:shadow-glow"
                    >
                        Avukata Danışın
                    </a>
                </div>
            </section>
        </main>
    );
}
