import { Phone, Mail, MapPin, LucideInstagram as InstagramIcon, LucideLinkedin as LinkedinIcon } from 'lucide-react';
import { navItems, contactInfo, socialLinks } from '@/data/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-navy-dark border-t border-white/10">
      {/* Main Footer */}
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-3 mb-6">
              <img
                src="/logo.png"
                alt="RS Avukatlık"
                className="h-14 w-auto"
              />
              <div>
                <span className="text-gold font-serif text-lg font-semibold tracking-wide block">
                  RS AVUKATLIK
                </span>
              </div>
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              En hızlı, en etkili ve müvekkil odaklı hizmet anlayışıyla yanınızdayız.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/30 transition-all duration-300"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/30 transition-all duration-300"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              )}

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-6">
              Hızlı Bağlantılar
            </h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-white/60 hover:text-gold transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/dilekce-ornekleri"
                  className="text-white/60 hover:text-gold transition-colors text-sm"
                >
                  Dilekçe Örnekleri
                </a>
              </li>
              <li>
                <a
                  href="/kanunlar"
                  className="text-white/60 hover:text-gold transition-colors text-sm"
                >
                  Kanunlar ve Mevzuat
                </a>
              </li>
              <li>
                <a
                  href="/sikca-sorulan-sorular"
                  className="text-white/60 hover:text-gold transition-colors text-sm"
                >
                  Sıkça Sorulan Sorular
                </a>
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-6">
              Faaliyet Alanları
            </h4>
            <ul className="space-y-3">
              {[
                'Ceza Hukuku',
                'Aile Hukuku',
                'İş Hukuku',
                'Ticaret Hukuku',
                'Gayrimenkul Hukuku',
                'İcra İflas Hukuku',
              ].map((area) => (
                <li key={area}>
                  <a
                    href="/faaliyet-alanlarimiz"
                    className="text-white/60 hover:text-gold transition-colors text-sm"
                  >
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas (Local SEO) */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-6">
              Hizmet Bölgeleri
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-3">
                <li><a href="/kartal-avukat" className="text-white/60 hover:text-gold transition-colors text-sm">Kartal Avukat</a></li>
                <li><a href="/maltepe-avukat" className="text-white/60 hover:text-gold transition-colors text-sm">Maltepe Avukat</a></li>
                <li><a href="/pendik-avukat" className="text-white/60 hover:text-gold transition-colors text-sm">Pendik Avukat</a></li>
                <li><a href="/kadikoy-avukat" className="text-white/60 hover:text-gold transition-colors text-sm">Kadıköy Avukat</a></li>
              </ul>
              <ul className="space-y-3">
                <li><a href="/tuzla-avukat" className="text-white/60 hover:text-gold transition-colors text-sm">Tuzla Avukat</a></li>
                <li><a href="/sultanbeyli-avukat" className="text-white/60 hover:text-gold transition-colors text-sm">Sultanbeyli Avukat</a></li>
                <li><a href="/sancaktepe-avukat" className="text-white/60 hover:text-gold transition-colors text-sm">Sancaktepe Avukat</a></li>
                <li><a href="/atasehir-avukat" className="text-white/60 hover:text-gold transition-colors text-sm">Ataşehir Avukat</a></li>
              </ul>
            </div>
          </div>
          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-6">
              İletişim
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-start gap-3 text-white/60 hover:text-gold transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{contactInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-start gap-3 text-white/60 hover:text-gold transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{contactInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=RS+Avukatlık+Bürosu+Av.+Ramazan+Şimşek+Cevizli+Kartal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/60 hover:text-gold transition-colors"
                >
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{contactInfo.address}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              © {currentYear} RS Avukatlık. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="/gizlilik-politikasi"
                className="text-white/50 hover:text-gold text-sm transition-colors"
              >
                Gizlilik Politikası
              </a>
              <a
                href="/kvkk-aydinlatma-metni"
                className="text-white/50 hover:text-gold text-sm transition-colors"
              >
                KVKK Aydınlatma Metni
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer >
  );
}
