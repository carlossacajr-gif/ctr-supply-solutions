import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/motion/CustomCursor";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
    metadataBase: new URL('https://ctrsupplysolutions.com'),
    title: {
        template: '%s | CTR Supply Solutions',
        default: 'CTR Supply Solutions | Sourcing & QC Experts in Shenzhen',
    },
    description: "Your on-the-ground partner for sourcing, quality control, and supply chain management in China. We review specs within 48 hours.",
    keywords: ["china sourcing agent", "shenzhen quality control", "cnc machining china", "supply chain management", "factory audit china"],
    authors: [{ name: 'CTR Supply Solutions' }],
    creator: 'CTR Supply Solutions',
    publisher: 'CTR Supply Solutions',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    icons: {
        icon: [
            { url: '/images/brand/favicon.ico', sizes: '32x32' },
        ],
        apple: [
            { url: '/images/brand/favicon-192.png', sizes: '192x192', type: 'image/png' },
        ],
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://ctrsupplysolutions.com",
        title: "CTR Supply Solutions | Sourcing & QC Experts",
        description: "Professional sourcing, quality control, and logistics management in Shenzhen, China. From factory floor to warehouse door.",
        siteName: "CTR Supply Solutions",
        images: [
            {
                url: "/opengraph-image.jpg",
                width: 1200,
                height: 630,
                alt: "CTR Supply Solutions OpenGraph Card",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "CTR Supply Solutions | Sourcing & QC Experts",
        description: "Professional sourcing, quality control, and logistics management in Shenzhen, China.",
        images: ["/twitter-image.jpg"],
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

export const viewport: Viewport = {
    themeColor: '#ffffff',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": ["Organization", "LocalBusiness"],
                            "name": "CTR Supply Solutions",
                            "url": "https://ctrsupplysolutions.com",
                            "logo": "https://ctrsupplysolutions.com/images/brand/logo.png",
                            "image": "https://ctrsupplysolutions.com/opengraph-image.jpg",
                            "description": "Professional sourcing, quality control, and logistics management in Shenzhen, China. From factory floor to warehouse door.",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Shenzhen",
                                "addressRegion": "Guangdong",
                                "addressCountry": "CN"
                            },
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+86-136-3864-5191",
                                "contactType": "customer service",
                                "areaServed": "Worldwide",
                                "availableLanguage": ["English", "Spanish", "Chinese"]
                            },
                            "sameAs": [
                                "https://www.linkedin.com/company/ctr-supply-solutions"
                            ]
                        })
                    }}
                />
            </head>
            <body className={`${inter.variable} ${manrope.variable} font-sans overflow-x-hidden w-full bg-slate-50 text-slate-900 antialiased`}>
                <CustomCursor />
                <main className="overflow-x-hidden w-full flex flex-col min-h-screen relative">
                    {children}
                </main>
                <Analytics />
            </body>
        </html>
    );
}
