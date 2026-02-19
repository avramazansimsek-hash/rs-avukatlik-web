import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description?: string;
    canonical?: string;
    type?: 'website' | 'article';
    image?: string;
}

export const SEO = ({
    title,
    description = "İstanbul Kartal merkezli RS Hukuk; Ağır Ceza, Boşanma ve İş Hukuku davalarında uzman Av. Ramazan Şimşek ile profesyonel avukatlık hizmeti sunar.",
    canonical,
    type = 'website',
    image
}: SEOProps) => {
    // Default OG Image if none provided
    const siteUrl = 'https://www.rsavukatlik.com';
    const fullCanonical = canonical ? (canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`) : siteUrl;
    const siteImage = image || `${siteUrl}/office-v1.jpg`;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={fullCanonical} />

            {/* Open Graph / Facebook / WhatsApp */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:type" content={type} />
            <meta property="og:image" content={siteImage} />
            <meta property="og:site_name" content="RS Avukatlık Bürosu" />
            <meta property="og:locale" content="tr_TR" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={siteImage} />
            <meta name="twitter:creator" content="@avramazansimsek" />
        </Helmet>
    );
};
