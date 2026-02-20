import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { FadeIn } from '@/components/ui/motion/FadeIn';
import { TextReveal } from '@/components/ui/motion/TextReveal';
import { MagneticButton } from '@/components/ui/motion/MagneticButton';
import Link from 'next/link';
import { Smartphone, Laptop, RefreshCw, Wifi, Wrench, Cpu, ArrowRight } from 'lucide-react';

const categories = [
    { name: 'Mobile Screens', items: 'iPhone, Samsung, Huawei, Xiaomi', icon: Smartphone },
    { name: 'Laptop Parts', items: 'MacBook Screens, Batteries, Keyboards', icon: Laptop },
    { name: 'Refurbished Devices', items: 'iPhones, iPads, MacBooks (Grade A/B)', icon: RefreshCw },
    { name: 'Smart Home & IoT', items: 'Sensors, Hubs, Security Cameras', icon: Wifi },
    { name: 'Repair Tools', items: 'Tips, Soldering Stations, Microscopes', icon: Wrench },
    { name: 'Small Parts', items: 'Flex Cables, Cameras, Housings, ICs', icon: Cpu },
];

export default function WholesalePage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero — Elevated with gradient blobs */}
            <div className="relative isolate overflow-hidden bg-gradient-to-br from-ctr-dark via-ctr-slate to-slate-800 pt-32 pb-24 sm:pt-40 sm:pb-32">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <div className="absolute top-[-20%] left-[-15%] w-[50%] h-[50%] rounded-full bg-ctr-blue/15 blur-[120px] animate-pulse-glow" />
                    <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-ctr-indigo/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
                </div>
                <Container>
                    <div className="mx-auto max-w-2xl text-center">
                        <TextReveal
                            text="Wholesale Components"
                            className="text-4xl font-heading font-bold tracking-tight text-white sm:text-6xl"
                        />
                        <FadeIn delay={0.2}>
                            <p className="mt-6 text-lg leading-8 text-slate-300">
                                High-quality repair parts and tools for professional service centers. MOQ applies.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.4}>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <Link href="/contact">
                                    <MagneticButton>
                                        <Button size="lg">Request Price List</Button>
                                    </MagneticButton>
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                </Container>
            </div>

            {/* ─── Wave Divider: Hero → Catalog ─── */}
            <SectionDivider fillClass="fill-white" className="bg-ctr-dark" />

            {/* Categories Grid — Glass cards */}
            <div className="relative py-16 sm:py-24 overflow-hidden">
                {/* Vivid gradient mesh so glass cards have color to blur through */}
                <div className="absolute top-[5%] right-[-8%] w-[45%] h-[55%] rounded-full bg-sky-200/80 blur-[120px]" />
                <div className="absolute bottom-[10%] left-[-8%] w-[40%] h-[50%] rounded-full bg-indigo-200/60 blur-[120px]" />
                <div className="absolute top-[50%] left-[40%] w-[25%] h-[30%] rounded-full bg-blue-100/50 blur-[100px]" />
                <Container>
                    <FadeIn>
                        <div className="mx-auto max-w-2xl text-center mb-16">
                            <h2 className="text-base font-semibold leading-7 text-ctr-blue">Catalog</h2>
                            <p className="mt-2 text-3xl font-heading font-bold tracking-tight text-ctr-slate sm:text-4xl">
                                What we supply
                            </p>
                        </div>
                    </FadeIn>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {categories.map((category, index) => (
                            <FadeIn key={category.name} delay={0.08 * index} direction="up">
                                <div className="glass-white rounded-2xl p-6 shadow-glass hover:shadow-glass-lg transition-all duration-300 group hover:border-ctr-blue/20">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="h-10 w-10 rounded-xl bg-ctr-blue/10 flex items-center justify-center group-hover:bg-ctr-blue/20 transition-colors">
                                            <category.icon className="h-5 w-5 text-ctr-blue" />
                                        </div>
                                        <h3 className="text-lg font-bold text-ctr-slate">{category.name}</h3>
                                    </div>
                                    <p className="text-slate-500 text-sm leading-relaxed">{category.items}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    <div className="h-12 sm:h-16" />

                    {/* Elevated CTA */}
                    <FadeIn>
                        <div className="relative bg-gradient-to-br from-ctr-dark via-slate-900 to-ctr-slate rounded-3xl p-8 sm:p-16 text-center overflow-hidden">
                            {/* Background glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-ctr-blue/10 blur-[120px]" />
                            <div className="relative z-10">
                                <div className="glass rounded-2xl p-8 sm:p-12 max-w-xl mx-auto">
                                    <h2 className="text-2xl font-bold text-white mb-4">Need a specific part?</h2>
                                    <p className="text-slate-300 mb-8 max-w-md mx-auto text-sm">
                                        We source directly from OEM and high-quality aftermarket factories. Tell us what you need.
                                    </p>
                                    <Link href="/contact">
                                        <MagneticButton>
                                            <Button variant="primary" className="group">
                                                Send Inquiry
                                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                        </MagneticButton>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </Container>
            </div>
            <Footer />
        </main>
    );
}
