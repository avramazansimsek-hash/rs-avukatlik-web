import { useEffect, useRef, useState } from 'react';
import {
  Scale,
  Users,
  Briefcase,
  Building2,
  Home,
  Gavel,
  Landmark,
  Shield,
  ArrowRight,
  CheckCircle
} from 'lucide-react';


const practiceAreasData = [
  {
    id: 'ceza-hukuku',
    title: 'Ceza Hukuku',
    description: 'RS Avukatlık olarak, ceza davalarında uzman kadromuzla müvekkillerimize en etkili savunma hizmetini sunuyor, soruşturma ve kovuşturma süreçlerinde yanınızda oluyoruz.',
    icon: Scale,
    details: [
      'Asliye Ceza Davaları',
      'Ağır Ceza Davaları',
      'Temyiz ve İstinaf Davaları',
      'Gözaltı ve Tutukluluk',
      'Beraat ve Takipsizlik',
      'Uzlaştırma',
    ],
  },
  {
    id: 'aile-hukuku',
    title: 'Aile Hukuku',
    description: 'RS Avukatlık, boşanma, velayet, nafaka ve miras davalarında hassas ve çözüm odaklı yaklaşımıyla müvekkillerinin hukuki haklarını en iyi şekilde korumaktadır.',
    icon: Users,
    details: [
      'Boşanma Davaları',
      'Velayet Hakkı',
      'Nafaka Talepleri',
      'Mal Paylaşımı',
      'Miras Davaları',
      'Vasiyetname Düzenleme',
    ],
  },
  {
    id: 'is-hukuku',
    title: 'İş Hukuku',
    description: 'İşçi ve işveren uyuşmazlıklarında, RS Avukatlık olarak kıdem tazminatı, işe iade ve iş kazası davalarında profesyonel hukuki destek sağlıyoruz.',
    icon: Briefcase,
    details: [
      'Kıdem Tazminatı Davaları',
      'İşe İade Davaları',
      'İhbar Tazminatı',
      'Fazla Mesai Talepleri',
      'İş Kazası Tazminatı',
      'İş Sözleşmesi Hazırlama',
    ],
  },
  {
    id: 'ticaret-hukuku',
    title: 'Ticaret Hukuku',
    description: 'RS Avukatlık, şirketler hukuku, ticari sözleşmeler ve şirket birleşmeleri konularında şirketinizin hukuki altyapısını güçlendirmek için çalışmaktadır.',
    icon: Building2,
    details: [
      'Şirket Kurulumu',
      'Ticari Sözleşmeler',
      'Şirket Birleşme ve Bölünme',
      'Ticari Uyuşmazlıklar',
      'Rekabet Hukuku',
      'Fikri Mülkiyet',
    ],
  },
  {
    id: 'gayrimenkul-hukuku',
    title: 'Gayrimenkul Hukuku',
    description: 'Gayrimenkul alım-satımı, kira uyuşmazlıkları ve tapu davalarında RS Avukatlık olarak sürecin her aşamasında güvenilir hukuki danışmanlık sunuyoruz.',
    icon: Home,
    details: [
      'Tapu İşlemleri',
      'Kira Uyuşmazlıkları',
      'Kat İrtifakı ve Mülkiyeti',
      'İnşaat Sözleşmeleri',
      'Kamulaştırma',
      'Site Yönetimi',
    ],
  },
  {
    id: 'icra-iflas-hukuku',
    title: 'İcra İflas Hukuku',
    description: 'RS Avukatlık, alacak takibi, borç yapılandırma ve iflas süreçlerinde hızlı ve sonuç odaklı çözümlerle müvekkillerinin menfaatlerini korumayı hedefler.',
    icon: Gavel,
    details: [
      'İcra Takibi',
      'Borç Yapılandırma',
      'İflas Erteleme',
      'Konkordato',
      'Rehin ve Haciz',
      'Tahsilat Hizmetleri',
    ],
  },
  {
    id: 'idare-hukuku',
    title: 'İdare Hukuku',
    description: 'RS Avukatlık, kamu kurumları ile ilgili tüm idari süreçlerde, iptal ve tam yargı davalarında vatandaş ve kurumların haklarını korumak için uzman destek sunar.',
    icon: Landmark,
    details: [
      'İptal Davaları',
      'Tam Yargı Davaları',
      'Vergi Uyuşmazlıkları',
      'Kamu İhaleleri',
      'İdari Para Cezaları',
      'Memur Disiplin',
    ],
  },
  {
    id: 'sigorta-hukuku',
    title: 'Sigorta Hukuku',
    description: 'RS Avukatlık olarak, trafik kazası, iş kazası ve diğer sigorta uyuşmazlıklarında tazminat haklarınızın eksiksiz alınması için profesyonel hukuki süreç yönetimi sağlıyoruz.',
    icon: Shield,
    details: [
      'Trafik Kazası Tazminatı',
      'İş Kazası Tazminatı',
      'Sigorta Tahkim',
      'Poliçe İnceleme',
      'Tazminat Hesaplama',
      'Sigorta Şirketi Uyuşmazlıkları',
    ],
  },
];

export default function PracticeAreasPage() {
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
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
              Faaliyet Alanlarımız
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Uzmanlık <span className="text-gold">Alanlarımız</span>
            </h1>
            <p className="text-white/70 text-lg">
              Geniş faaliyet alanlarımızla her türlü hukuki ihtiyacınıza çözüm sunuyoruz
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section ref={sectionRef} className="relative py-24">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="grid md:grid-cols-2 gap-8">
            {practiceAreasData.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.id}
                  className={`group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-gold/30 transition-all duration-500 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    {/* Header */}
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center flex-shrink-0 group-hover:from-gold/30 group-hover:to-gold/10 transition-all duration-300">
                        <Icon className="w-8 h-8 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl font-semibold text-white group-hover:text-gold transition-colors mb-2">
                          {area.title}
                        </h3>
                        <p className="text-white/60">
                          {area.description}
                        </p>
                      </div>
                    </div>

                    {/* Details List */}
                    <ul className="space-y-2 mb-6">
                      {area.details.map((detail, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-white/70"
                        >
                          <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <a
                      href="/iletisim"
                      className="inline-flex items-center text-gold text-sm font-medium group/link"
                    >
                      <span className="relative">
                        Bu Konuda Danışma Al
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-gold group-hover/link:w-full transition-all duration-300" />
                      </span>
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div
            className={`mt-16 text-center p-12 rounded-2xl bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            style={{ transitionDelay: '800ms' }}
          >
            <h3 className="font-serif text-2xl font-semibold text-white mb-4">
              Size Nasıl Yardımcı Olabiliriz?
            </h3>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              Hangi konuda desteğe ihtiyacınız olursa olsun, uzman ekibimiz size yardımcı olmaya hazır.
              ilk görüşme için bize ulaşın.
            </p>
            <a
              href="/iletisim"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gold hover:bg-gold-light text-navy-dark font-semibold transition-all duration-300 hover:shadow-glow"
            >
              Danışmanlık Al
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
