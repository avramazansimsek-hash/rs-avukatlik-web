import { SEO } from '@/components/SEO';
import { Helmet } from 'react-helmet-async';
import Contact from '@/sections/Contact';
import { regions } from '@/data/regions';

interface RegionalLandingProps {
    regionId: string;
}

export default function RegionalLanding({ regionId }: RegionalLandingProps) {
    const data = regions[regionId];

    if (!data) {
        // Fallback or error handling if region doesn't exist
        return (
            <main className="min-h-screen bg-navy pt-24 text-white text-center">
                <h1 className="text-2xl">Bölge bulunamadı.</h1>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-navy">
            <SEO
                title={data.title}
                description={data.description}
                canonical={`/${data.slug}`}
            />

            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LegalService",
                        "name": data.title,
                        "description": data.description,
                        "url": `https://rsavukatlik.com/${data.slug}`,
                        "telephone": "+905442736027",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Mustafa Kemal Caddesi, Seyit Gazi Sokak No: 66 Hukukçular Towers A Blok Kat 18 Daire 110",
                            "addressLocality": "Kartal",
                            "addressRegion": "İstanbul",
                            "postalCode": "34865",
                            "addressCountry": "TR"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 40.9233689,
                            "longitude": 29.1717963
                        },
                        "areaServed": [
                            data.title.split(' - ')[0].replace(' Avukat', '')
                        ],
                        "priceRange": "₺₺",
                        "image": "https://rsavukatlik.com/office-v1.jpg"
                    })}
                </script>
            </Helmet>

            {/* Regional Hero */}
            <section className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-navy-light to-navy pointer-events-none" />
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212,175,55,0.3) 1px, transparent 0)`,
                        backgroundSize: '40px 40px',
                    }}
                />

                <div className="container mx-auto max-w-5xl relative z-10 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-6 animate-fade-in">
                        {data.heroTitle}
                    </span>
                    <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight animate-fade-in-up">
                        <span className="text-gold">{data.title.split(' - ')[0]}</span>
                    </h1>
                    <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in-up delay-100">
                        {data.heroSubtitle}
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 px-4 bg-white/5">
                <div className="container mx-auto max-w-4xl">
                    <div
                        className="prose prose-invert prose-lg max-w-none text-white/80"
                        dangerouslySetInnerHTML={{ __html: data.content }}
                    />
                </div>
            </section>

            {/* Reuse Contact Section */}
            <Contact />
        </main>
    );
}
