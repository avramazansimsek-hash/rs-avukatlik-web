import React, { useEffect, useRef, useState } from 'react';
import { sendContactEmail } from '@/lib/email';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  LucideInstagram as InstagramIcon,
  LucideLinkedin as LinkedinIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactInfo, socialLinks } from '@/data/content';
import { toast } from 'sonner';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      if (!data.name || !data.email || !data.message) {
        throw new Error('Lütfen zorunlu alanları doldurunuz.');
      }

      await sendContactEmail(data);
      toast.success('Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error(error instanceof Error ? error.message : 'Mesaj gönderilirken bir hata oluştu.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="iletisim" ref={sectionRef} className="relative py-24 bg-navy overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-navy-light/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gold/5 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div className={`space-y-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div>
              <span className="inline-block text-gold text-sm font-semibold tracking-wider uppercase mb-4">
                İletişim
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
                Hukuki Desteğe mi <span className="text-gold">İhtiyacınız Var?</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Uzman kadromuzla hukuki sorunlarınıza çözüm üretmek için buradayız.
                Ofisimizi ziyaret edebilir veya iletişim kanallarımızdan bize ulaşabilirsiniz.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-gold/50 group-hover:bg-gold/10 transition-all duration-300">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Telefon</h3>
                  <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="text-white/70 hover:text-gold transition-colors block">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-gold/50 group-hover:bg-gold/10 transition-all duration-300">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">E-posta</h3>
                  <a href={`mailto:${contactInfo.email}`} className="text-white/70 hover:text-gold transition-colors block">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-gold/50 group-hover:bg-gold/10 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Ofis Adresi</h3>
                  <p className="text-white/70 leading-relaxed">
                    {contactInfo.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-gold/50 group-hover:bg-gold/10 transition-all duration-300">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Çalışma Saatleri</h3>
                  <p className="text-white/70">
                    {contactInfo.workingHours}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-8 border-t border-white/10">
              <div className="flex items-center gap-4">
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/50 hover:bg-gold/10 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/50 hover:bg-gold/10 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white/80">
                      Ad Soyad
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Adınız Soyadınız"
                      className="bg-navy-light/50 border-white/10 focus:border-gold/50 text-white placeholder:text-white/30"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-white/80">
                      Telefon
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="0555 555 55 55"
                      className="bg-navy-light/50 border-white/10 focus:border-gold/50 text-white placeholder:text-white/30"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/80">
                    E-posta
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="ornek@email.com"
                    className="bg-navy-light/50 border-white/10 focus:border-gold/50 text-white placeholder:text-white/30"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-white/80">
                    Konu
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Danışmak istediğiniz konu"
                    className="bg-navy-light/50 border-white/10 focus:border-gold/50 text-white placeholder:text-white/30"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white/80">
                    Mesajınız
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Mesajınızı buraya yazınız..."
                    className="min-h-[150px] bg-navy-light/50 border-white/10 focus:border-gold/50 text-white placeholder:text-white/30 resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold hover:bg-gold-light text-navy-dark font-semibold py-6 text-lg"
                >
                  {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
