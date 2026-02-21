import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import dynamic from 'next/dynamic';

import { ServicesBento } from '@/components/home/ServicesBento';
import { Testimonials } from '@/components/home/Testimonials';
import { ScrollytellingProcess } from '@/components/home/ScrollytellingProcess';
import { ProductionTrackerDemo } from '@/components/home/ProductionTrackerDemo';
import { CompanyVideo } from '@/components/home/CompanyVideo';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { SectionDivider } from '@/components/ui/SectionDivider';
import Link from 'next/link';
import { TextReveal } from '@/components/ui/motion/TextReveal';
import { WorldGlobe } from '@/components/home/WorldGlobe';
import { MagneticButton } from '@/components/ui/motion/MagneticButton';
import { AnimatedCounter } from '@/components/ui/motion/AnimatedCounter';
import { FadeIn } from '@/components/ui/motion/FadeIn';

const stats = [
    { value: 500, suffix: '+', label: 'Products Sourced' },
    { value: 50, suffix: '+', label: 'Countries Reached' },
    { value: 0.3, suffix: '%', label: 'Defect Rate', isDecimal: true },
    { value: 15, suffix: '+', label: 'Years Experience' },
];

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* ═══════════════ HERO — Hook ═══════════════ */}
            <div className="relative isolate overflow-hidden bg-gradient-to-br from-ctr-dark via-ctr-slate to-slate-800 pb-20 pt-28 sm:pb-28">
                {/* Animated gradient blobs */}
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <div className="absolute top-[-20%] left-[-15%] w-[50%] h-[50%] rounded-full bg-ctr-blue/15 blur-[120px] animate-pulse-glow" />
                    <div className="absolute bottom-[-20%] right-[-15%] w-[50%] h-[50%] rounded-full bg-ctr-indigo/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
                    <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-ctr-cyan/8 blur-[100px] animate-pulse-glow" style={{ animationDelay: '4s' }} />
                </div>

                <Container className="pt-24 lg:pt-32">
                    <div className="mx-auto max-w-3xl py-8 lg:py-12 text-center">
                        <TextReveal
                            text="Your Supply Chain, Bulletproof."
                            className="text-4xl font-heading font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6"
                        />
                        <p className="mt-6 text-lg leading-8 text-slate-300 max-w-xl mx-auto">
                            From sourcing to delivery — we verify every link so you never have to worry.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link href="/contact">
                                <MagneticButton>
                                    <Button size="lg">Get a Quote</Button>
                                </MagneticButton>
                            </Link>
                            <Link href="/services" className="text-sm font-semibold leading-6 text-white hover:text-ctr-blue transition-colors">
                                Our Services <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>

                    {/* ─── Glass Stats Bar ─── */}
                    <FadeIn delay={0.6}>
                        <div className="mx-auto max-w-4xl mt-8">
                            <div className="glass rounded-2xl p-6 sm:p-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
                                {stats.map((stat, i) => (
                                    <div key={i} className="text-center">
                                        <div className="text-2xl sm:text-3xl font-heading font-bold text-white">
                                            {stat.isDecimal ? (
                                                <span>{stat.value}{stat.suffix}</span>
                                            ) : (
                                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                            )}
                                        </div>
                                        <p className="mt-1 text-xs sm:text-sm text-slate-400">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </Container>
            </div>

            {/* ═══════════════ VIDEO — Company Profile ═══════════════ */}
            <CompanyVideo />

            {/* ─── Wave Divider: Hero/Video → Services ─── */}
            <SectionDivider fillClass="fill-slate-50" className="bg-ctr-dark" />

            {/* ═══════════════ SERVICES — Explain What ═══════════════ */}
            <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
                {/* Vivid gradient mesh so glass cards have color to blur through */}
                <div className="absolute top-[5%] left-[-8%] w-[45%] h-[60%] rounded-full bg-sky-200/80 blur-[120px]" />
                <div className="absolute bottom-[5%] right-[-8%] w-[40%] h-[55%] rounded-full bg-indigo-200/60 blur-[120px]" />
                <div className="absolute top-[40%] left-[30%] w-[30%] h-[40%] rounded-full bg-blue-100/50 blur-[100px]" />
                <Container>
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <FadeIn>
                            <h2 className="text-base font-semibold leading-7 text-ctr-blue">Our Expertise</h2>
                            <p className="mt-2 text-3xl font-heading font-bold tracking-tight text-ctr-slate sm:text-4xl">
                                Everything you need to source with confidence
                            </p>
                        </FadeIn>
                    </div>
                    <ServicesBento />
                </Container>
            </section>

            {/* ─── Wave Divider: Services → Process ─── */}
            <SectionDivider fillClass="fill-slate-50" className="bg-white" />

            {/* ═══════════════ PROCESS — Explain How ═══════════════ */}
            <ScrollytellingProcess />

            {/* ─── Wave Divider: Process → Tracker ─── */}
            <SectionDivider fillClass="fill-slate-100" className="bg-slate-50" />

            {/* ═══════════════ TRACKER — Prove Capability ═══════════════ */}
            <ProductionTrackerDemo />

            {/* ─── Wave Divider: Tracker → Testimonials ─── */}
            <SectionDivider fillClass="fill-slate-50" className="bg-slate-100" />

            {/* ═══════════════ TESTIMONIALS — Social Proof ═══════════════ */}
            <Testimonials />

            {/* ─── Wave Divider: Testimonials → Globe ─── */}
            <SectionDivider fillClass="fill-slate-100" className="bg-slate-50" />

            {/* ═══════════════ GLOBE — Global Reach ═══════════════ */}
            <section className="py-24 bg-slate-100 relative">
                <Container className="relative z-20 text-center mb-12">
                    <FadeIn>
                        <h2 className="text-3xl font-heading font-bold tracking-tight text-ctr-slate sm:text-4xl mb-4">
                            From Shenzhen to the World
                        </h2>
                        <p className="text-slate-500 max-w-xl mx-auto">
                            Our logistics network covers 50+ countries. Customs, duties, and door-to-door — handled.
                        </p>
                    </FadeIn>
                </Container>
                <WorldGlobe />
            </section>

            {/* ─── Wave Divider: Globe → CTA ─── */}
            <SectionDivider fillClass="fill-ctr-dark" className="bg-slate-100" />

            {/* ═══════════════ FINAL CTA — Convert ═══════════════ */}
            <section className="relative bg-gradient-to-br from-ctr-dark via-slate-900 to-ctr-slate py-24 sm:py-32 overflow-hidden">
                {/* Background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-ctr-blue/8 blur-[150px]" />

                <Container className="relative z-10">
                    <FadeIn>
                        <div className="mx-auto max-w-2xl text-center">
                            <div className="glass rounded-3xl p-10 sm:p-14">
                                <h2 className="text-3xl font-heading font-bold tracking-tight text-white sm:text-5xl">
                                    Ready to build a bulletproof supply chain?
                                </h2>
                                <p className="mx-auto mt-6 max-w-lg text-lg leading-8 text-slate-300">
                                    Send your specs. We'll deliver a strategic sourcing plan within 48 hours.
                                </p>
                                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <Link href="/contact">
                                        <MagneticButton>
                                            <Button size="lg" variant="primary">
                                                Get a Quote
                                            </Button>
                                        </MagneticButton>
                                    </Link>
                                    <Link href="/services">
                                        <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                                            Explore Services
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
