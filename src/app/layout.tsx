import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import dynamic from 'next/dynamic';

const CustomCursor = dynamic(() => import('@/components/ui/motion/CustomCursor').then(mod => mod.CustomCursor), { ssr: false });

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
    metadataBase: new URL('https://ctrsupplysolutions.com'),
    title: "CTR Supply Solutions | Sourcing & QC Experts in Shenzhen",
    description: "Your on-the-ground partner for sourcing, quality control, and supply chain management in China. We review specs within 48 hours.",
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
        description: "Professional sourcing & QC services in Shenzhen.",
        siteName: "CTR Supply Solutions",
        images: [
            {
                url: "/images/brand/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "CTR Supply Solutions",
            }
        ]
    }
};

export const viewport: Viewport = {
    themeColor: '#ffffff',
    width: 'device-width',
    initialScale: 1,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${manrope.variable} font-sans overflow-x-hidden w-full bg-slate-50 text-slate-900 antialiased`}>
                <CustomCursor />
                <main className="overflow-x-hidden w-full flex flex-col min-h-screen relative">
                    {children}
                </main>
            </body>
        </html>
    );
}
