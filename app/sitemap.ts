import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const currentDate = new Date().toISOString().split('T')[0]; // "YYYY-MM-DD" W3C format

    return [
        {
            url: 'https://www.tubetool.ai/',
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: 'https://www.tubetool.ai/tools/title-generator',
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: 'https://www.tubetool.ai/tools/title-ab-tester',
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: 'https://www.tubetool.ai/tools/description-generator',
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: 'https://www.tubetool.ai/tools/script-hook-generator',
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: 'https://www.tubetool.ai/tools/video-outline-builder',
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: 'https://www.tubetool.ai/tools/tag-generator',
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: 'https://www.tubetool.ai/tools/hashtag-generator',
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: 'https://www.tubetool.ai/tools/thumbnail-generator',
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: 'https://www.tubetool.ai/tools/thumbnail-quality-checker',
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: 'https://www.tubetool.ai/tools/go-no-go-predictor',
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: 'https://www.tubetool.ai/tools/topic-ideas',
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: 'https://www.tubetool.ai/tools/keyword-research',
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: 'https://www.tubetool.ai/our-mission',
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: 'https://www.tubetool.ai/about-us',
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: 'https://www.tubetool.ai/contact-us',
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: 'https://www.tubetool.ai/privacy-policy',
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: 'https://www.tubetool.ai/terms-and-conditions',
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 0.8,
        },
    ]
}
