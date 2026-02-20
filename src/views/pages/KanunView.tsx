import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Scale, Calculator, Search } from 'lucide-react';

interface Kanun {
    title: string;
    content: string;
    date: string;
}

interface KanunViewProps {
    law: Kanun;
}

export default function KanunView({ law }: KanunViewProps) {
    return (
        <main className="min-h-screen bg-navy pt-24 pb-20">
            {/* Hero Section */}
            <section className="relative py-12 px-4 sm:px-6 lg:px-12 xl:px-20 overflow-hidden break-words hyphens-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-navy-light/50 to-navy pointer-events-none" />
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 blur-[100px] rounded-full pointer-events-none" />

                <div className="relative max-w-4xl mx-auto">
                    <a
                        href="/kanunlar"
                        className="inline-flex items-center text-gold hover:text-white transition-colors mb-8 group top-4 absolute md:relative md:top-auto z-10"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Tüm Kanunlara Dön
                    </a>

                    <div className="flex items-center gap-4 mb-6 pt-10 md:pt-0">
                        <span className="px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-medium border border-gold/20 flex items-center gap-1.5">
                            <Scale className="w-3.5 h-3.5" />
                            Türk Ceza Kanunu
                        </span>
                        <span className="text-white/40 text-sm">
                            {new Date(law.date).toLocaleDateString('tr-TR')}
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight break-words hyphens-auto">
                        {law.title}
                    </h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-12 xl:px-20 max-w-4xl mx-auto border-t border-white/5 break-words hyphens-auto overflow-hidden">
                <article className="prose prose-invert prose-lg max-w-none 
                    prose-headings:text-white/90 prose-headings:font-serif
                    prose-p:text-white/70 prose-p:leading-relaxed prose-p:break-words
                    prose-a:text-gold prose-a:no-underline hover:prose-a:text-white
                    prose-strong:text-white prose-strong:font-bold
                    prose-ul:text-white/70 prose-ol:text-white/70
                    prose-blockquote:border-l-gold prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:text-white/80 prose-blockquote:not-italic
                    prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl">
                    <ReactMarkdown>{law.content}</ReactMarkdown>
                </article>

                {/* Call to Action Container */}
                <div className="mt-16 bg-gradient-to-br from-gold/20 to-navy-light border border-gold/30 rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 blur-[80px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />

                    <div className="relative z-10">
                        <Scale className="w-12 h-12 text-gold mx-auto mb-6" />
                        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
                            Hukuki Destek ve Danışmanlık
                        </h2>
                        <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                            Ceza hukuku davalarında alanında uzman bir avukatla çalışmak, özgürlüğünüz ve haklarınız için atılabilecek en önemli adımdır. Davalarınızın takibi ve danışmanlık hizmeti için bizimle hemen iletişime geçin.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/iletisim"
                                className="inline-flex items-center justify-center px-8 py-4 bg-gold text-navy font-bold rounded-xl hover:bg-white transition-colors"
                            >
                                Bize Ulaşın
                            </a>
                            <a
                                href="tel:+905322301986"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                Hemen Arayın
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
