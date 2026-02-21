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
