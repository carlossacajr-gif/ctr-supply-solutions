import { Metadata } from 'next';
import NextImage from 'next/image';
import servicesHeroImg from '../../../public/images/services/services-hero.webp';
import cardQualityImg from '../../../public/images/services/card-quality.webp';
import cardSourcingImg from '../../../public/images/services/card-sourcing.webp';
import cardLogisticsImg from '../../../public/images/services/card-logistics.webp';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { MagneticButton } from '@/components/ui/motion/MagneticButton';
import Link from 'next/link';
import { ShieldCheck, Globe2, Truck, ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/ui/motion/FadeIn';
import { TextReveal } from '@/components/ui/motion/TextReveal';

const services = [
    {
        name: 'Quality Control',
        description: 'On-site inspections and factory audits to ensure your products meet international standards.',
        icon: ShieldCheck,
        href: '/services/quality-control',
        image: cardQualityImg,
    },
    {
        name: 'Global Sourcing',
        description: 'We identify verified manufacturers, negotiate terms, and manage the procurement process.',
        icon: Globe2,
        href: '/services/sourcing',
        image: cardSourcingImg,
    },
    {
        name: 'Logistics & Shipping',
        description: 'Freight forwarding, warehousing, and customs clearance. We handle the complexity.',
        icon: Truck,
        href: '/services/logistics',
        image: cardLogisticsImg,
    },
];

export const metadata: Metadata = {
    title: 'Supply Chain Services',
    description: 'From factory floor to warehouse door. Explore our comprehensive services including Quality Control, Global Sourcing, and Logistics.',
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* ══════ HERO ══════ */}
            <div className="relative isolate overflow-hidden bg-gradient-to-br from-ctr-dark via-ctr-slate to-slate-800 pt-32 pb-20 sm:pt-40 sm:pb-24">
                {/* Animated gradient blobs */}
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <div className="absolute top-[-20%] left-[-15%] w-[50%] h-[50%] rounded-full bg-ctr-blue/15 blur-[120px] animate-pulse-glow" />
                    <div className="absolute bottom-[-20%] right-[-15%] w-[40%] h-[40%] rounded-full bg-ctr-indigo/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
                </div>
                <div className="absolute inset-0 -z-10">
                    <FadeIn delay={0.1} className="w-full h-full relative">
                        <NextImage
                            src={servicesHeroImg}
                            alt="Comprehensive Global Logistics and Sourcing solutions from Shenzhen Guangdong"
                            fill
                            className="object-cover opacity-10"
                            priority
                        />
                    </FadeIn>
                </div>

                <Container>
                    <div className="mx-auto max-w-2xl text-center">
                        <TextReveal
                            text="Comprehensive Supply Chain Services"
                            className="text-4xl font-heading font-bold tracking-tight text-white sm:text-6xl"
                        />
                        <FadeIn delay={0.2}>
                            <p className="mt-6 text-lg leading-8 text-slate-300">
                                From finding the factory to delivering the container. We are your end-to-end partner in China.
                            </p>
                        </FadeIn>
                    </div>
                </Container>
            </div>

            {/* ══════ WAVE DIVIDER: dark hero → light content ══════ */}
            <SectionDivider fillClass="fill-slate-50" className="bg-ctr-dark" />

            {/* ══════ SERVICES GRID ══════ */}
            <div className="relative py-12 sm:py-20 bg-slate-50 overflow-hidden">
                {/* Gradient blobs so glass cards have colour to blur */}
                <div className="absolute top-[5%] left-[-8%] w-[45%] h-[60%] rounded-full bg-sky-200/70 blur-[140px] pointer-events-none" />
                <div className="absolute bottom-[5%] right-[-8%] w-[40%] h-[50%] rounded-full bg-indigo-200/50 blur-[130px] pointer-events-none" />
                <div className="absolute top-[40%] left-[35%] w-[30%] h-[35%] rounded-full bg-blue-100/50 blur-[100px] pointer-events-none" />

                <Container>
                    <div className="mx-auto max-w-2xl lg:max-w-none">
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                            {services.map((service, index) => (
                                <FadeIn key={service.name} delay={0.1 * index} direction="up" className="flex">
                                    <div className="flex flex-col overflow-hidden glass-white rounded-2xl shadow-glass hover:shadow-glass-lg transition-all duration-300 hover:border-ctr-blue/20 w-full">
                                        {/* Image */}
                                        <div className="relative h-48 w-full group overflow-hidden">
                                            <NextImage
                                                src={service.image}
                                                alt={service.name}
                                                fill
                                                priority
                                                sizes="(max-width: 1024px) 100vw, 33vw"
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors" />
                                        </div>
                                        {/* Content */}
                                        <div className="flex flex-1 flex-col p-6 sm:p-8">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="bg-ctr-blue/10 p-3 rounded-lg">
                                                    <service.icon className="h-6 w-6 text-ctr-blue" />
                                                </div>
                                                <h3 className="text-xl font-bold text-ctr-slate">{service.name}</h3>
                                            </div>
                                            <p className="text-slate-600 flex-grow mb-8 text-sm leading-6">{service.description}</p>
                                            <Link href={service.href}>
                                                <Button variant="outline" className="w-full group">
                                                    Learn More
                                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </Container>
            </div>

            {/* ─── Wave Divider: Services → CTA ─── */}
            <SectionDivider fillClass="fill-ctr-dark" className="bg-slate-50" />

            {/* ══════ FINAL CTA ══════ */}
            <section className="relative bg-gradient-to-br from-ctr-dark via-slate-900 to-ctr-slate py-24 sm:py-32 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-ctr-blue/8 blur-[150px]" />
                <Container className="relative z-10">
                    <FadeIn>
                        <div className="mx-auto max-w-2xl text-center">
                            <div className="glass rounded-3xl p-10 sm:p-14">
                                <h2 className="text-3xl font-heading font-bold tracking-tight text-white sm:text-5xl">
                                    Need a tailored solution?
                                </h2>
                                <p className="mx-auto mt-6 max-w-lg text-lg leading-8 text-slate-300">
                                    Tell us about your product. We&apos;ll build a sourcing and QC plan within 48 hours.
                                </p>
                                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <Link href="/contact">
                                        <MagneticButton>
                                            <Button size="lg" variant="primary">
                                                Get a Quote
                                            </Button>
                                        </MagneticButton>
                                    </Link>
                                    <Link href="/wholesale">
                                        <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                                            Browse Wholesale
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
