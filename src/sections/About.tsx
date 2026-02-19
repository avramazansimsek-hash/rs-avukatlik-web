import { useEffect, useRef, useState } from 'react';
import { Target, Eye, Award, Shield, Clock, Users } from 'lucide-react';
import { aboutContent } from '@/data/content';

export default function About() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const icons = [Award, Shield, Clock, Users];

  return (
    <section ref={sectionRef} className="relative py-24 bg-navy">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212,175,55,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block text-gold text-sm font-semibold tracking-wider uppercase mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            Hakkımızda
          </span>
          <h2
            className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            Güvenilir Hukuki <span className="text-gold">Partneriniz</span>
          </h2>
          <div
            className={`flex items-center justify-center gap-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            <div className="w-12 h-px bg-gold/50" />
            <div className="w-1.5 h-1.5 rotate-45 border border-gold" />
            <div className="w-12 h-px bg-gold/50" />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <div
            className={`group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-gold/30 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                <Target className="w-7 h-7 text-gold" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-white mb-3">
                  Misyonumuz
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {aboutContent.mission}
                </p>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div
            className={`group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-gold/30 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                <Eye className="w-7 h-7 text-gold" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-white mb-3">
                  Vizyonumuz
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {aboutContent.vision}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
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

        {/* Founder Info */}
        <div
          className={`mt-24 max-w-4xl mx-auto text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full border-4 border-gold/20 overflow-hidden mb-8 shadow-xl relative group">
              <img
                src="/images/kurucu-ramazan-simsek.jpg"
                alt="Av. Ramazan Şimşek"
                className="w-full h-full object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <h3 className="font-serif text-3xl font-bold text-white mb-2">
              Av. Ramazan Şimşek
            </h3>
            <p className="text-gold text-base font-medium tracking-wider uppercase mb-6">
              Kurucu Avukat
            </p>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
              "Hukukun üstünlüğü ve müvekkil memnuniyeti ilkeleriyle, her davanın arkasında bir insan hikayesi olduğunun bilinciyle çalışıyoruz."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
