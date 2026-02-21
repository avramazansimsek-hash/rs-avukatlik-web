import { useState, useEffect } from 'react';
import { Menu, X, Phone, LucideInstagram as InstagramIcon, LucideLinkedin as LinkedinIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navItems, socialLinks } from '@/data/content';

interface NavigationProps {
  currentPath?: string;
}

export default function Navigation({ currentPath = '' }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentPath]);

  const isActive = (href: string) => {
    if (href === '/') {
      return currentPath === '/' || currentPath === '';
    }
    return currentPath.startsWith(href);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-navy/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
          }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="flex items-center justify-between">
            {/* Logo */}
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <img
                src="/logo.png"
                alt="RS Avukatlık"
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="hidden sm:block">
                <span className="text-gold font-serif text-lg font-semibold tracking-wide">
                  RS AVUKATLIK
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => {
                if (item.href === '/makalelerimiz') {
                  return (
                    <div key={item.href} className="relative group/dropdown">
                      <a
                        href="/makalelerimiz"
                        className={`relative text-sm font-medium transition-all duration-300 py-4 ${isActive('/makalelerimiz') || isActive('/dilekce-ornekleri')
                          ? 'text-gold'
                          : 'text-white/80 hover:text-gold'
                          }`}
                      >
                        {item.label}
                        <span
                          className={`absolute bottom-2 left-0 h-0.5 bg-gold transition-all duration-300 ${isActive('/makalelerimiz') || isActive('/dilekce-ornekleri') ? 'w-full' : 'w-0 group-hover/dropdown:w-full'
                            }`}
                        />
                      </a>

                      {/* Dropdown Menu */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 invisible opacity-0 translate-y-2 group-hover/dropdown:visible group-hover/dropdown:opacity-100 group-hover/dropdown:translate-y-0 transition-all duration-300">
                        <div className="bg-navy border border-white/10 rounded-xl overflow-hidden shadow-xl min-w-[200px]">
                          <a
                            href="/makalelerimiz"
                            className="block px-6 py-3 text-sm text-white/80 hover:text-gold hover:bg-white/5 transition-colors border-b border-white/5"
                          >
                            Makalelerimiz
                          </a>
                          <a
                            href="/dilekce-ornekleri"
                            className="block px-6 py-3 text-sm text-white/80 hover:text-gold hover:bg-white/5 transition-colors"
                          >
                            Dilekçe Örnekleri
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                }

                if (item.href === '/kanunlar') {
                  return (
                    <div key={item.href} className="relative group/dropdown">
                      <a
                        href="/kanunlar"
                        className={`relative text-sm font-medium transition-all duration-300 py-4 ${isActive('/kanunlar')
                          ? 'text-gold'
                          : 'text-white/80 hover:text-gold'
                          }`}
                      >
                        Kanunlar ve Mevzuat
                        <span
                          className={`absolute bottom-2 left-0 h-0.5 bg-gold transition-all duration-300 ${isActive('/kanunlar') ? 'w-full' : 'w-0 group-hover/dropdown:w-full'
                            }`}
                        />
                      </a>

                      {/* Dropdown Menu */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 invisible opacity-0 translate-y-2 group-hover/dropdown:visible group-hover/dropdown:opacity-100 group-hover/dropdown:translate-y-0 transition-all duration-300">
                        <div className="bg-navy border border-white/10 rounded-xl overflow-hidden shadow-xl min-w-[200px]">
                          <a href="/kanunlar/tck" className="block px-6 py-3 text-sm text-white/80 hover:text-gold hover:bg-white/5 transition-colors">Türk Ceza Kanunu (TCK)</a>
                          <a href="/kanunlar/cmk" className="block px-6 py-3 text-sm text-white/80 hover:text-gold hover:bg-white/5 transition-colors">Ceza Muhakemesi Kanunu (CMK)</a>
                          <a href="/kanunlar/hmk" className="block px-6 py-3 text-sm text-white/80 hover:text-gold hover:bg-white/5 transition-colors">Hukuk Muhakemeleri Kanunu (HMK)</a>
                          <a href="/kanunlar/tmk" className="block px-6 py-3 text-sm text-white/80 hover:text-gold hover:bg-white/5 transition-colors">Türk Medeni Kanunu (TMK)</a>
                          <a href="/kanunlar/tbk" className="block px-6 py-3 text-sm text-white/80 hover:text-gold hover:bg-white/5 transition-colors">Türk Borçlar Kanunu (TBK)</a>
                          <a href="/kanunlar/avukatlik" className="block px-6 py-3 text-sm text-white/80 hover:text-gold hover:bg-white/5 transition-colors">Avukatlık Kanunu</a>
                          <a href="/kanunlar/iik" className="block px-6 py-3 text-sm text-white/80 hover:text-gold hover:bg-white/5 transition-colors">İcra ve İflas Kanunu (İİK)</a>
                          <a href="/kanunlar/ttk" className="block px-6 py-3 text-sm text-white/80 hover:text-gold hover:bg-white/5 transition-colors">Türk Ticaret Kanunu (TTK)</a>
                          <a href="/kanunlar/is_kanunu" className="block px-6 py-3 text-sm text-white/80 hover:text-gold hover:bg-white/5 transition-colors">İş Kanunu</a>
                          <a href="/kanunlar/iyuk" className="block px-6 py-3 text-sm text-white/80 hover:text-gold hover:bg-white/5 transition-colors">İdari Yargılama Usulü Kanunu (İYUK)</a>
                          <a href="/kanunlar/ktk" className="block px-6 py-3 text-sm text-white/80 hover:text-gold hover:bg-white/5 transition-colors">Karayolları Trafik Kanunu (KTK)</a>
                          <a href="/kanunlar/tkhk" className="block px-6 py-3 text-sm text-white/80 hover:text-gold hover:bg-white/5 transition-colors">Tüketicinin Korunması Hakkında Kanun (TKHK)</a>
                          <a href="/kanunlar/danistay" className="block px-6 py-3 text-sm text-white/80 hover:text-gold hover:bg-white/5 transition-colors">Danıştay Kanunu</a>
                          <a href="/kanunlar/yargitay" className="block px-6 py-3 text-sm text-white/80 hover:text-gold hover:bg-white/5 transition-colors">Yargıtay Kanunu</a>
                          <a href="/kanunlar/kvkk" className="block px-6 py-3 text-sm text-white/80 hover:text-gold hover:bg-white/5 transition-colors">Kişisel Verilerin Korunması Kanunu (KVKK)</a>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`relative text-sm font-medium transition-all duration-300 py-4 ${isActive(item.href)
                      ? 'text-gold'
                      : 'text-white/80 hover:text-gold'
                      }`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-2 left-0 h-0.5 bg-gold transition-all duration-300 ${isActive(item.href) ? 'w-full' : 'w-0 hover:w-full'
                        }`}
                    />
                  </a>
                );
              })}
            </div>

            {/* Social Links & CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Instagram */}
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/30 transition-all duration-300"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              )}
              {/* LinkedIn */}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/30 transition-all duration-300"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              )}
              <a href="/iletisim">
                <Button
                  className="bg-gold hover:bg-gold-light text-navy-dark font-semibold px-6 transition-all duration-300 hover:shadow-glow"
                >
                  Bizimle İletişime Geçin
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-gold transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${isMobileMenuOpen
          ? 'pointer-events-auto'
          : 'pointer-events-none'
          }`}
      >
        <div
          className={`absolute inset-0 bg-navy/98 backdrop-blur-lg transition-opacity duration-500 ${isMobileMenuOpen
            ? 'opacity-100'
            : 'opacity-0'
            }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-20 left-0 right-0 p-6 transition-all duration-500 ${isMobileMenuOpen
            ? 'translate-y-0 opacity-100 delay-200'
            : '-translate-y-8 opacity-0'
            }`}
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item, index) => {
              if (item.href === '/makalelerimiz') {
                return (
                  <div key={item.href} className="flex flex-col">
                    <a
                      href="/makalelerimiz"
                      className={`text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300 ${isActive('/makalelerimiz') && !isActive('/dilekce-ornekleri')
                        ? 'bg-gold/20 text-gold'
                        : 'text-white/80 hover:bg-white/5 hover:text-gold'
                        }`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      Makalelerimiz
                    </a>
                    <a
                      href="/dilekce-ornekleri"
                      className={`text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300 ml-4 border-l-2 border-white/10 ${isActive('/dilekce-ornekleri')
                        ? 'text-gold border-gold'
                        : 'text-white/60 hover:text-gold hover:border-gold/50'
                        }`}
                      style={{ animationDelay: `${index * 50 + 25}ms` }}
                    >
                      ↳ Dilekçe Örnekleri
                    </a>
                  </div>
                );
              }
              if (item.href === '/kanunlar') {
                return (
                  <div key={item.href} className="flex flex-col">
                    <a
                      href="/kanunlar"
                      className={`text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300 ${isActive('/kanunlar')
                        ? 'bg-gold/20 text-gold'
                        : 'text-white/80 hover:bg-white/5 hover:text-gold'
                        }`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      Kanunlar ve Mevzuat
                    </a>
                    <div className="flex flex-col max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                      {[
                        { href: '/kanunlar/tck', label: 'Türk Ceza Kanunu (TCK)' },
                        { href: '/kanunlar/cmk', label: 'Ceza Muhakemesi (CMK)' },
                        { href: '/kanunlar/hmk', label: 'Hukuk Muhakemeleri (HMK)' },
                        { href: '/kanunlar/tmk', label: 'Türk Medeni Kanunu (TMK)' },
                        { href: '/kanunlar/tbk', label: 'Türk Borçlar Kanunu (TBK)' },
                        { href: '/kanunlar/avukatlik', label: 'Avukatlık Kanunu' },
                        { href: '/kanunlar/iik', label: 'İcra ve İflas Kanunu (İİK)' },
                        { href: '/kanunlar/ttk', label: 'Türk Ticaret Kanunu (TTK)' },
                        { href: '/kanunlar/is_kanunu', label: 'İş Kanunu' },
                        { href: '/kanunlar/iyuk', label: 'İdari Yargılama Usulü (İYUK)' },
                        { href: '/kanunlar/ktk', label: 'Karayolları Trafik Kanunu (KTK)' },
                        { href: '/kanunlar/tkhk', label: 'Tüketicinin Korunması (TKHK)' },
                        { href: '/kanunlar/danistay', label: 'Danıştay Kanunu' },
                        { href: '/kanunlar/yargitay', label: 'Yargıtay Kanunu' },
                        { href: '/kanunlar/kvkk', label: 'Kişisel Verilerin Korunması (KVKK)' },
                      ].map((law, i) => (
                        <a
                          key={law.href}
                          href={law.href}
                          className={`text-lg font-medium py-2 px-4 rounded-lg transition-all duration-300 ml-4 border-l-2 border-white/10 ${isActive(law.href)
                            ? 'text-gold border-gold'
                            : 'text-white/60 hover:text-gold hover:border-gold/50'
                            }`}
                          style={{ animationDelay: `${index * 50 + 25 + (i * 10)}ms` }}
                        >
                          ↳ {law.label}
                        </a>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300 ${isActive(item.href)
                    ? 'bg-gold/20 text-gold'
                    : 'text-white/80 hover:bg-white/5 hover:text-gold'
                    }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </a>
              )
            })}
            <div className="mt-6 pt-6 border-t border-white/10">
              {/* Social Links for Mobile */}
              <div className="flex gap-3 mb-4">
                {socialLinks.instagram && (
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/30 transition-all duration-300"
                  >
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                )}
                {socialLinks.linkedin && (
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/30 transition-all duration-300"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                )}
              </div>
              <a
                href="tel:+905442736027"
                className="flex items-center gap-3 text-white/80 py-3"
              >
                <Phone className="w-5 h-5 text-gold" />
                <span>+90 544 273 60 27</span>
              </a>
              <a href="/iletisim" className="mt-4 block">
                <Button className="w-full bg-gold hover:bg-gold-light text-navy-dark font-semibold py-6">
                  Danışmanlık Al
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
