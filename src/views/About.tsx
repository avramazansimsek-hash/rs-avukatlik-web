import { useEffect, useRef, useState } from 'react';
import { Target, Eye, Award, Shield, Clock, Users } from 'lucide-react';
import { aboutContent } from '@/data/content';

const icons = [Award, Shield, Clock, Users];

export default function AboutPage() {
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
    <main className="min-h-screen bg-navy pt-24">
      {/* Hero Section */}
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
              Hakkımızda
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              RS <span className="text-gold">Avukatlık</span>
            </h1>
            <p className="text-white/70 text-lg">
              Güvenilir hukuki çözümler için yanınızdayız
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section ref={sectionRef} className="relative py-24">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          {/* Introduction */}
          <div
            className={`max-w-4xl mx-auto mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <p className="text-white/80 text-lg leading-relaxed mb-8 text-justify">
              RS Avukatlık bünyesinde, müvekkillerimize uluslararası standartlarda, nitelikli ve çözüm odaklı
              hukuki danışmanlık hizmeti sunmayı temel prensip edinmiş bulunmaktayız. Yetkin hukukçu kadromuz ile
              hukuki süreçlerin her aşamasında profesyonel destek sağlamaktayız.
            </p>
            <p className="text-white/60 leading-relaxed text-justify">
              Kurucu Avukat Ramazan Şimşek koordinasyonundaki ekibimiz; Ceza Hukuku, Aile Hukuku, İş Hukuku ve
              Ticaret Hukuku başta olmak üzere pek çok branşta uzmanlığa sahiptir. Kurumsal ciddiyet ve mesleki
              etik değerler ışığında, her uyuşmazlığın münhasır yapısını gözeterek stratejik ve kalıcı
              hukuki çözümler üretmekteyiz.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div
              className={`group p-10 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-gold/30 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                  <Target className="w-8 h-8 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-white mb-4">
                    Misyonumuz
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {aboutContent.mission}
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`group p-10 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-gold/30 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                  <Eye className="w-8 h-8 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-white mb-4">
                    Vizyonumuz
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {aboutContent.vision}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-20">
            <h2
              className={`font-serif text-3xl font-bold text-white text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              style={{ transitionDelay: '400ms' }}
            >
              Neden <span className="text-gold">Bizi Seçmelisiniz?</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {aboutContent.values.map((value, index) => {
                const Icon = icons[index];
                return (
                  <div
                    key={value.title}
                    className={`group p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-gold/5 hover:border-gold/20 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                      }`}
                    style={{ transitionDelay: `${500 + index * 100}ms` }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <h4 className="font-serif text-lg font-semibold text-white mb-2">
                      {value.title}
                    </h4>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
