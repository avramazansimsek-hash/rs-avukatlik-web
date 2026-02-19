import { useEffect, useRef, useState } from 'react';
import { sendContactEmail } from '@/lib/email';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  LucideInstagram as InstagramIcon,
  LucideLinkedin as LinkedinIcon,
  CheckCircle,
  Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactInfo, socialLinks } from '@/data/content';


export default function ContactPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = await sendContactEmail(formData);

    setIsSubmitting(false);

    if (result.success) {
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setIsSubmitted(false);
      }, 5000);
    } else {
      alert('Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
              İletişim
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Bizimle <span className="text-gold">İletişime Geçin</span>
            </h1>
            <p className="text-white/70 text-lg">
              Hukuki danışmanlık için bize ulaşın, en kısa sürede size dönüş yapalım
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section ref={sectionRef} className="relative py-24">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
            >
              <h2 className="font-serif text-3xl font-bold text-white mb-8">
                İletişim <span className="text-gold">Bilgileri</span>
              </h2>

              <p className="text-white/70 mb-8 leading-relaxed">
                Hukuki danışmanlık almak için aşağıdaki iletişim kanallarından bize ulaşabilir
                veya formu doldurarak mesaj bırakabilirsiniz. Uzman ekibimiz en kısa sürede
                size dönüş yapacaktır.
              </p>

              <div className="space-y-4 mb-8">
                {/* Phone */}
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="group flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-gold/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/30 transition-colors">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <span className="text-white/50 text-sm block mb-1">Telefon</span>
                    <span className="text-white text-lg font-medium group-hover:text-gold transition-colors">
                      {contactInfo.phone}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="group flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-gold/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/30 transition-colors">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <span className="text-white/50 text-sm block mb-1">E-posta</span>
                    <span className="text-white text-lg font-medium group-hover:text-gold transition-colors">
                      {contactInfo.email}
                    </span>
                  </div>
                </a>

                {/* Address */}
                <a
                  href="https://www.google.com/maps?cid=7103859062211998076"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-gold/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/30 transition-colors">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <span className="text-white/50 text-sm block mb-1">Adres</span>
                    <span className="text-white text-lg font-medium group-hover:text-gold transition-colors">
                      {contactInfo.address}
                    </span>
                  </div>
                </a>

                {/* Working Hours */}
                <div className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-14 h-14 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <span className="text-white/50 text-sm block mb-1">Çalışma Saatleri</span>
                    <span className="text-white text-lg font-medium">
                      {contactInfo.workingHours}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mb-8">
                <span className="text-white/50 text-sm block mb-4">Sosyal Medya</span>
                <div className="flex gap-3">
                  {socialLinks.instagram && (
                    <a
                      href={socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/30 transition-all duration-300"
                    >
                      <InstagramIcon className="w-5 h-5" />
                    </a>
                  )}
                  {socialLinks.linkedin && (
                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/30 transition-all duration-300"
                    >
                      <LinkedinIcon className="w-5 h-5" />
                    </a>
                  )}

                </div>
              </div>


            </div>

            {/* Contact Form */}
            <div
              className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
            >
              <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                <h3 className="font-serif text-2xl font-semibold text-white mb-2">
                  Bize Ulaşın
                </h3>
                <p className="text-white/60 mb-6">
                  Formu doldurun, en kısa sürede size dönüş yapalım.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-400" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Mesajınız Alındı!
                    </h4>
                    <p className="text-white/60">
                      En kısa sürede size dönüş yapacağız.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-white/70 text-sm block mb-2">
                          Adınız Soyadınız *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Adınız Soyadınız"
                          required
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-gold focus:ring-gold/20"
                        />
                      </div>
                      <div>
                        <label className="text-white/70 text-sm block mb-2">
                          E-posta Adresiniz *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="ornek@email.com"
                          required
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-gold focus:ring-gold/20"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-white/70 text-sm block mb-2">
                          Telefon Numaranız
                        </label>
                        <Input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+90 555 123 45 67"
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-gold focus:ring-gold/20"
                        />
                      </div>
                      <div>
                        <label className="text-white/70 text-sm block mb-2">
                          Konu *
                        </label>
                        <Input
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Danışmak istediğiniz konu"
                          required
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-gold focus:ring-gold/20"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-white/70 text-sm block mb-2">
                        Mesajınız *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Mesajınızı buraya yazın..."
                        required
                        rows={5}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-gold focus:ring-gold/20 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gold hover:bg-gold-light text-navy-dark font-semibold py-6 transition-all duration-300 hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      ) : (
                        <Send className="w-5 h-5 mr-2" />
                      )}
                      {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                    </Button>

                    <p className="text-white/40 text-xs text-center">
                      * ile işaretli alanlar zorunludur.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section className="h-[400px] w-full bg-navy-light relative z-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.654823166463!2d29.17179637651083!3d40.92336897136262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac5a5e019a55d%3A0x629524036737517c!2sRS%20Avukatl%C4%B1k%20B%C3%BCrosu%20%E2%80%93%20Av.%20Ramazan%20%C5%9Eim%C5%9Fek!5e0!3m2!1str!2str!4v1738843200000!5m2!1str!2str"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
        />
        <a
          href="https://www.google.com/maps?cid=7103859062211998076"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur hover:bg-white text-navy-dark px-4 py-2 rounded-lg shadow-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 group border border-navy/10"
        >
          <MapPin className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
          Haritada Aç
        </a>
        <div className="absolute inset-0 pointer-events-none border-t border-white/10" />
      </section>
    </main>
  );
}
