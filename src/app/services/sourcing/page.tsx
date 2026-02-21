import { ServiceLayout } from '@/components/services/ServiceLayout';
import { Search, Users, Scale, Truck, Handshake, Globe } from 'lucide-react';
import Image from 'next/image';
import sourcingHeroImg from '../../../../public/images/services/sourcing/sourcing-hero.webp';
import { FadeIn } from '@/components/ui/motion/FadeIn';

const features = [
    {
        title: 'Supplier Identification',
        desc: 'We scour our network of 5,000+ verified factories in Shenzhen and Dongguan to find the perfect match for your BOM.',
        icon: Search
    },
    {
        title: 'Price Negotiation',
        desc: 'We speak the language and know the market rates. We negotiate locally to get you "native" pricing, not "tourist" pricing.',
        icon: Scale
    },
    {
        title: 'Sample Consolidation',
        desc: 'Ordering samples from 5 factories? We collect them at our office and ship them to you in one box to save freight.',
        icon: Truck
    },
    {
        title: 'Contract Management',
        desc: 'We draft bilingual contracts that protect your IP and clearly state quality requirements and penalties for delays.',
        icon: Users
    },
];

export default function SourcingPage() {
    return (
        <ServiceLayout
            title="Global Sourcing"
            description="Direct access to verified manufacturers. We find the factory, negotiate the price, and manage the relationship."
        >
            {/* Hero Image Injection */}
            <div className="relative rounded-2xl overflow-hidden mb-16 aspect-video md:aspect-[21/9] shadow-2xl">
                <Image
                    src={sourcingHeroImg}
                    alt="Global Sourcing Meeting"
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 80vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                    <p className="text-white font-mono text-sm tracking-widest font-bold bg-black/60 px-4 py-2 rounded border border-white/20 uppercase whitespace-nowrap">
                        ACTION: PRICE BENCHMARKING
                    </p>
                </div>
            </div>

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
                                src="/images/services/sourcing/sourcing-detail.webp"
                                alt="Factory Negotiation"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/80 to-transparent">
                                <div className="flex items-center gap-3">
                                    <Handshake className="text-cyan-400 h-8 w-8" />
                                    <div>
                                        <p className="text-white font-bold">Local Presence</p>
                                        <p className="text-slate-300 text-sm">We negotiate face-to-face, not just via email.</p>
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
                    <div className="absolute -right-8 -top-8 opacity-[0.03] pointer-events-none">
                        <Handshake className="w-48 h-48 text-ctr-slate" />
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-xl font-bold text-ctr-slate mb-4">No Hidden Kickbacks</h3>
                        <p className="text-slate-700 max-w-2xl">
                            Unlike many agents, we operate on a transparent fee structure. We don't take hidden commissions from factories,
                            which means our loyalty is 100% to you, the buyer.
                        </p>
                    </div>
                </div>
            </FadeIn>
        </ServiceLayout>
    );
}
