import { useEffect, useRef, useState } from 'react';

import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { articles } from '@/data/content';

export default function Articles() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 bg-navy">
      <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span
              className={`inline-block text-gold text-sm font-semibold tracking-wider uppercase mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
            >
              Makalelerimiz
            </span>
            <h2
              className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
            >
              Güncel <span className="text-gold">Hukuki Yazılar</span>
            </h2>
          </div>
          <a
            href="/makalelerimiz"
            className={`mt-6 md:mt-0 inline-flex items-center gap-2 text-gold hover:text-gold-light font-medium transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            Tüm Makaleler
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className={`group relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-gold/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Image Placeholder */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-navy flex items-center justify-center">
                  <span className="text-gold/30 font-serif text-6xl font-bold">
                    RS
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold/20 backdrop-blur-sm text-gold text-xs font-medium">
                    <Tag className="w-3 h-3" />
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center gap-2 text-white/50 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  {article.date}
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg font-semibold text-white mb-3 group-hover:text-gold transition-colors line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                {/* Read More */}
                <a
                  href="/makalelerimiz"
                  className="inline-flex items-center text-gold text-sm font-medium group/link"
                >
                  <span className="relative">
                    Devamını Oku
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-gold group-hover/link:w-full transition-all duration-300" />
                  </span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
