import { useEffect, useRef, useState } from 'react';

import { Calendar, ArrowRight, Tag, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import type { Article } from '@/lib/articles';

const categories = ['Tümü', 'Ceza Hukuku', 'Aile Hukuku', 'İş Hukuku', 'Ticaret Hukuku', 'Gayrimenkul Hukuku', 'İcra İflas Hukuku'];


interface ArticlesPageProps {
  initialArticles: Article[];
}

export default function ArticlesPage({ initialArticles }: ArticlesPageProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [articles] = useState<Article[]>(initialArticles);

  // Removed internal fetching logic as data is passed from Astro


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
  }, []); // Re-observe when loading finishes

  const [currentPage, setCurrentPage] = useState(1);
  const ARTICLES_PER_PAGE = 6;

  // Reset page when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Tümü' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }); // Already sorted by date in getAllArticles

  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
  const currentArticles = filteredArticles.slice(
    (currentPage - 1) * ARTICLES_PER_PAGE,
    currentPage * ARTICLES_PER_PAGE
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
              Makalelerimiz
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Güncel <span className="text-gold">Hukuki Yazılar</span>
            </h1>
            <p className="text-white/70 text-lg">
              Hukuk dünyasındaki son gelişmeler ve uzman görüşlerimiz
            </p>
          </div>
        </div>
      </section>

      {/* Articles Content */}
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
                placeholder="Makale ara..."
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
            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {currentArticles.map((article, index) => (
                <article
                  key={article.slug}
                  className={`group relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-gold/30 transition-all duration-500 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  {/* Image Placeholder */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-navy flex items-center justify-center">
                      <span className="text-gold/30 font-serif text-6xl font-bold">
                        RS
                      </span>
                    </div>
                    {article.image && (
                      <img
                        src={article.image}
                        alt={article.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                      />
                    )}

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
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-white/50 text-sm mb-3">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </div>
                      {/* Removed Author as it's not in markdown frontmatter for now, can add later */}
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl font-semibold text-white mb-3 group-hover:text-gold transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Read More */}
                    <a
                      href={`/makalelerimiz/${article.slug}`}
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

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex flex-wrap justify-center items-center gap-2 mb-24">
                {/* First Page */}
                <button
                  onClick={() => setCurrentPage(1)}
                  disabled={currentPage === 1}
                  className="px-3 py-2 rounded-lg bg-white/5 text-white/70 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-sm font-medium hidden sm:block"
                >
                  Başa Dön
                </button>

                {/* Previous */}
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-2 rounded-lg bg-white/5 text-white/70 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-sm font-medium"
                >
                  Önceki
                </button>

                {/* Page Numbers */}
                <div className="flex gap-2 mx-2">
                  {/* Show current-1, current, current+1 */}
                  {(currentPage > 1) && (
                    <button
                      onClick={() => setCurrentPage(currentPage - 1)}
                      className="w-10 h-10 rounded-lg font-medium transition-all duration-300 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                    >
                      {currentPage - 1}
                    </button>
                  )}

                  <button
                    className="w-10 h-10 rounded-lg font-medium transition-all duration-300 bg-gold text-navy-dark pointer-events-none"
                  >
                    {currentPage}
                  </button>

                  {(currentPage < totalPages) && (
                    <button
                      onClick={() => setCurrentPage(currentPage + 1)}
                      className="w-10 h-10 rounded-lg font-medium transition-all duration-300 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                    >
                      {currentPage + 1}
                    </button>
                  )}
                </div>

                {/* Next */}
                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 rounded-lg bg-white/5 text-white/70 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-sm font-medium"
                >
                  Sonraki
                </button>

                {/* Last Page */}
                <button
                  onClick={() => setCurrentPage(totalPages)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 rounded-lg bg-white/5 text-white/70 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-sm font-medium hidden sm:block"
                >
                  Sona Git
                </button>
              </div>
            )}

            {/* No Results */}
            {filteredArticles.length === 0 && (
              <div className="text-center py-16">
                <p className="text-white/60 text-lg">
                  Aramanıza uygun makale bulunamadı.
                </p>
              </div>
            )}
          </>
        </div>
      </section>

      {/* Official Links Section */}
      <section className="py-20 bg-white/5 border-t border-white/10">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">
              Resmi Kurumlar
            </h2>
            <p className="text-white/60">
              Hukuki süreçlerle ilgili faydalı bağlantılar
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: 'İstanbul Barosu',
                url: 'https://www.istanbulbarosu.org.tr/',
                image: '/ist_baro.png',
                color: 'bg-white/5'
              },
              {
                name: 'Adalet Bakanlığı',
                url: 'https://www.adalet.gov.tr/',
                image: '/adalet_b_logo.png',
                color: 'bg-white/5'
              },
              {
                name: 'Resmi Gazete',
                url: 'https://resmigazete.gov.tr/',
                image: '/resmi_gazete.png',
                color: 'bg-white/5'
              },
              {
                name: 'TBMM',
                url: 'https://www.tbmm.gov.tr/',
                image: '/tbmm_logo.png',
                color: 'bg-white/5'
              }
            ].map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-gold/30 hover:bg-white/10 transition-all duration-300"
              >
                <div className={`w-20 h-20 rounded-full ${link.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 p-3`}>
                  <img
                    src={link.image}
                    alt={link.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-white/80 font-medium group-hover:text-gold transition-colors text-center">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
