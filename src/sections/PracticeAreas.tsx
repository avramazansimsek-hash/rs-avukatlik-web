import { useEffect, useRef, useState } from 'react';

import {
  Scale,
  Users,
  Briefcase,
  Building2,
  Home,
  Gavel,
  ArrowRight
} from 'lucide-react';
import { practiceAreas } from '@/data/content';

const iconMap: { [key: string]: React.ElementType } = {
  Scale,
  Users,
  Briefcase,
  Building2,
  Home,
  Gavel,
};

export default function PracticeAreas() {
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
    <section ref={sectionRef} className="relative py-24 bg-navy-light">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block text-gold text-sm font-semibold tracking-wider uppercase mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            Faaliyet Alanlarımız
          </span>
          <h2
            className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            Uzmanlık <span className="text-gold">Alanlarımız</span>
          </h2>
          <p
            className={`max-w-2xl mx-auto text-white/70 text-lg transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            Her alanda uzman kadromuzla müvekkillerimize kapsamlı hukuki çözümler sunuyoruz
          </p>
          <div
            className={`flex items-center justify-center gap-4 mt-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            <div className="w-12 h-px bg-gold/50" />
            <div className="w-1.5 h-1.5 rotate-45 border border-gold" />
            <div className="w-12 h-px bg-gold/50" />
          </div>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceAreas.map((area, index) => {
            const Icon = iconMap[area.icon] || Scale;
            return (
              <div
                key={area.id}
                className={`group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-gold/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-6 group-hover:from-gold/30 group-hover:to-gold/10 transition-all duration-300">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>

                  {/* Content */}
                  <h3 className="font-serif text-xl font-semibold text-white mb-3 group-hover:text-gold transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed mb-6">
                    {area.description}
                  </p>

                  {/* Link */}
                  <a
                    href="/faaliyet-alanlarimiz"
                    className="inline-flex items-center text-gold text-sm font-medium group/link"
                  >
                    <span className="relative">
                      Detaylı Bilgi
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-gold group-hover/link:w-full transition-all duration-300" />
                    </span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          style={{ transitionDelay: '1000ms' }}
        >
          <a
            href="/faaliyet-alanlarimiz"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gold/10 border border-gold/30 text-gold hover:bg-gold hover:text-navy-dark font-semibold transition-all duration-300"
          >
            Tüm Faaliyet Alanları
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
