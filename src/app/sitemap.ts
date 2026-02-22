import { MetadataRoute } from 'next';
import { locales } from '@/navigation';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://ctrsupplysolutions.com';
    const lastModified = new Date();

    const staticPaths = [
        { path: '', priority: 1.0 },
        { path: '/services', priority: 0.9 },
        { path: '/wholesale', priority: 0.9 },
        { path: '/resources', priority: 0.9 },
        { path: '/services/quality-control', priority: 0.8 },
        { path: '/services/sourcing', priority: 0.8 },
        { path: '/services/logistics', priority: 0.8 },
        { path: '/about', priority: 0.7 },
        { path: '/contact', priority: 0.7 },
    ];

    const sitemapEntries: MetadataRoute.Sitemap = [];

    // For each path, generate the entry for every locale
    for (const route of staticPaths) {
        for (const locale of locales) {
            // Build the languages alternating object
            const languages: Record<string, string> = {};
            locales.forEach((l) => {
                languages[l] = `${baseUrl}/${l}${route.path}`;
            });

            sitemapEntries.push({
                url: `${baseUrl}/${locale}${route.path}`,
                lastModified,
                changeFrequency: route.path === '' ? 'weekly' : 'monthly',
                priority: route.priority,
                alternates: {
                    languages,
                },
            } as any);
        }
    }

    return sitemapEntries;
}
