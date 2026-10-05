import { Metadata } from 'next';

interface SEOProps {
    title: string;
    description: string;
    keywords: string[];
    slug: string;
    ogImage?: string;
}

export function generateToolMetadata({
    title,
    description,
    keywords,
    slug,
    ogImage = "https://tubetool.ai/brand/logo.png"
}: SEOProps): Metadata {
    const url = `https://tubetool.ai/tools/${slug}`;

    return {
        title,
        description,
        keywords: [
            ...keywords,
            "Free YouTube Growth Tools",
            "TubeTool.ai",
            "TubeBuddy free alternative",
            "VidIQ free alternative",
            "YouTube SEO tools"
        ],
        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description,
            url,
            siteName: "TubeTool.ai",
            locale: "en_US",
            type: "website",
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: title,
                }
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [ogImage],
            creator: "@tubetool_ai",
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
}

export function generateToolJsonLd({
    name,
    description,
    slug
}: {
    name: string;
    description: string;
    slug: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": `${name} — TubeTool.ai`,
        "url": `https://tubetool.ai/tools/${slug}`,
        "applicationCategory": "MultimediaApplication",
        "operatingSystem": "All Web Browsers",
        "browserRequirements": "Requires JavaScript. Requires HTML5.",
        "softwareVersion": "1.0.0",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
        },
        "description": description,
        "author": {
            "@type": "Organization",
            "name": "TubeTool.ai",
            "url": "https://tubetool.ai"
        }
    };
}
