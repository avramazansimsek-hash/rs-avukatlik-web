import Hero from '@/sections/Hero';
import HomeAbout from '@/sections/HomeAbout';
import Contact from '@/sections/Contact';
import { SEO } from '@/components/SEO';

export default function Home() {
  return (
    <main className="min-h-screen">
      <SEO
        title="İstanbul Kartal Avukat - RS Avukatlık | Ağır Ceza & Boşanma Avukatı"
        description="İstanbul Kartal'da Av. Ramazan Şimşek yönetiminde Ağır Ceza, Çekişmeli Boşanma, İşçi Alacakları ve Tapu davalarında uzman, sonuç odaklı avukatlık hizmeti."
        canonical="/"
      />
      <Hero />
      <HomeAbout />
      <Contact />
    </main>
  );
}
