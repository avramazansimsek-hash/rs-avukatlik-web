import { useEffect, useRef } from 'react';

import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        const parallax = heroRef.current.querySelector('.parallax-bg') as HTMLElement;
        if (parallax) {
          parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div className="parallax-bg absolute inset-0 w-full h-[120%] -top-[10%]">
        <img
          src="/istanbul-bg.jpg"
          alt="İstanbul"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy" />
        {/* Gold Accent Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20 pt-16">
        <div className="max-w-3xl text-left">
          {/* Signature - RS Hukuk & Danışmanlık (small) */}
          <p
            className="text-sm sm:text-base text-gold/70 font-light tracking-widest uppercase mb-6 animate-fade-in"
          >
            RS Avukatlık | Adalete Açılan Kapınız
          </p>

          {/* Main Motto - SEO Optimized H1 for exact keywords */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight animate-fade-in-up">
            <span className="block">İstanbul Avukatı</span>
            <span className="block text-gold mt-1">Av. Ramazan Şimşek</span>
          </h1>

          {/* Sub-motto / SEO description paragraph */}
          <p
            className="text-lg sm:text-xl md:text-2xl text-white/90 font-light mb-12 animate-fade-in-up leading-relaxed max-w-2xl"
            style={{ animationDelay: '100ms' }}
          >
            <strong className="text-white font-semibold">RS Avukatlık</strong> bünyesinde Ağır Ceza, Boşanma, İşçi Alacakları ve Şirket Danışmanlığı alanlarında en hızlı, en etkili ve müvekkil odaklı hukuki çözümler sunuyoruz.
          </p>

          {/* CTA Button */}
          <div
            className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 animate-fade-in-up"
            style={{ animationDelay: '300ms' }}
          >
            <a href="/iletisim">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-light text-navy-dark font-semibold px-6 py-4 text-sm transition-all duration-300 hover:shadow-glow-lg group"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Danışmanlık Al
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gold/50 flex justify-center pt-2">
          <div className="w-1 h-2 bg-gold rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
