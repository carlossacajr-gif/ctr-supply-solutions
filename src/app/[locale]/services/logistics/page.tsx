import { ServiceLayout } from '@/components/services/ServiceLayout';
import { Ship, Plane, PackageCheck, FileText, Anchor, Container as ContainerIcon } from 'lucide-react';
import Image from 'next/image';
import { FadeIn } from '@/components/ui/motion/FadeIn';
import { setRequestLocale } from 'next-intl/server';

const features = [
    {
        title: 'Sea Freight (FCL/LCL)',
        desc: 'Cost-effective shipping for bulk orders. We handle container booking, loading, and documentation.',
        icon: Ship
    },
    {
        title: 'Air Freight & Express',
        desc: 'When speed is critical. We have volume discounts with DHL, FedEx, and dedicated air cargo lines.',
        icon: Plane
    },
    {
        title: 'Warehousing & Kitting',
        desc: 'Need to combine products from different factories? We store, kit, and label them in our Shenzhen warehouse.',
        icon: PackageCheck
    },
    {
        title: 'Customs Clearance',
        desc: 'We handle export declarations in China and assist with import duties and taxes in your destination country.',
        icon: FileText
    },
];

export default function LogisticsPage({ params: { locale } }: { params: { locale: string } }) {
    setRequestLocale(locale);
    return (
        <ServiceLayout
            title="Supply Chain Logistics"
            description="Seamless freight forwarding. From the factory floor to your warehouse door, we handle the movement."
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Supply Chain Logistics Services",
                        "provider": {
                            "@type": "LocalBusiness",
                            "name": "CTR Supply Solutions"
                        },
                        "areaServed": "Worldwide",
                        "description": "Comprehensive freight forwarding and logistics solutions from China. Sea freight, air freight, and warehousing.",
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Logistics Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Sea Freight (FCL/LCL)"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Air Freight & Express"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Warehousing & Kitting"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Customs Clearance"
                                    }
                                }
                            ]
                        }
                    })
                }}
            />
            {/* Hero Image Injection */}
            <FadeIn delay={0.1}>
                <div className="relative rounded-2xl overflow-hidden mb-16 aspect-video md:aspect-[21/9] shadow-2xl">
                    <Image
                        src="/images/services/logistics/logistics-hero.webp"
                        alt="Stack of global shipping containers at a high-volume port representing CTR logistics expertise"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8">
                        <p className="text-white font-mono text-sm bg-black/50 inline-block px-2 py-1 rounded mb-2">
                            STATUS: IN TRANSIT via CMA GGM
                        </p>
                    </div>
                </div>
            </FadeIn>

            {/* Split Layout: Features + Action Image */}
            <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
                <div className="flex-1 w-full lg:w-1/2">
                    <div className="grid grid-cols-1 gap-6">
                        {features.map((feature, idx) => (
                            <FadeIn key={idx} delay={idx * 0.1}>
                                <div className="flex gap-4 p-6 rounded-xl glass-white shadow-glass hover:shadow-glass-lg transition-all duration-300 group">
                                    <div className="h-12 w-12 rounded-full bg-ctr-slate/5 flex items-center justify-center flex-shrink-0 group-hover:bg-ctr-blue/10 transition-colors">
                                        <feature.icon className="h-6 w-6 text-ctr-blue" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-ctr-slate mb-2">{feature.title}</h3>
                                        <p className="text-slate-600 leading-relaxed text-sm">
                                            {feature.desc}
                                        </p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>

                <div className="flex-1 w-full lg:w-1/2">
                    <FadeIn direction="left" delay={0.2}>
                        <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/services/logistics/logistics-detail.webp"
                                alt="Highly organized modern logistics warehouse in Shenzhen managing international freight"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/80 to-transparent">
                                <div className="flex items-center gap-3">
                                    <ContainerIcon className="text-blue-400 h-8 w-8" />
                                    <div>
                                        <p className="text-white font-bold">Consolidated Shipping</p>
                                        <p className="text-slate-300 text-sm">We combine orders to save you freight costs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>

            <FadeIn>
                <div className="p-8 bg-slate-50 border-l-4 border-ctr-blue rounded-r-xl relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute right-0 top-0 opacity-10">
                        <Anchor className="w-64 h-64 text-ctr-blue" />
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-xl font-bold text-ctr-slate mb-4">DDP Services Available</h3>
                        <p className="text-slate-700 max-w-2xl">
                            For many destinations, we offer DDP (Delivered Duty Paid) shipping.
                            This means the price you pay includes shipping, customs, and taxes—no surprise fees upon arrival.
                        </p>
                    </div>
                </div>
            </FadeIn>
        </ServiceLayout>
    );
}
