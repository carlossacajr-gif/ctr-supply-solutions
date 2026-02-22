"use client";

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { Mail, MessageSquare, MapPin, Send } from 'lucide-react';
import { WorldGlobe } from '@/components/home/WorldGlobe';
import { TextReveal } from '@/components/ui/motion/TextReveal';
import { FadeIn } from '@/components/ui/motion/FadeIn';
import { MagneticButton } from '@/components/ui/motion/MagneticButton';
import { TechnicalInquiry } from '@/components/forms/TechnicalInquiry';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-slate-900 overflow-hidden relative">
            <Navbar />

            {/* Background Globe */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px]">
                    <WorldGlobe showLabel={false} />
                </div>
            </div>

            {/* Background gradient blobs */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-ctr-blue/10 blur-[120px] animate-pulse-glow" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-ctr-indigo/8 blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
            </div>

            <div className="relative z-10 pt-32 pb-24 sm:pt-40 sm:pb-32">
                <Container>
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <TextReveal
                            text="Start Your Project"
                            className="text-4xl font-heading font-bold tracking-tight text-white sm:text-6xl"
                        />
                        <FadeIn delay={0.2}>
                            <p className="mt-6 text-lg leading-8 text-slate-300">
                                Skip the generic contact form. Use our engineering-specific project qualifier to get a direct strategic sourcing plan from our onsite team.
                            </p>
                        </FadeIn>
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <TechnicalInquiry />
                    </div>

                    <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Direct Channels Cards */}
                        <FadeIn delay={0.3}>
                            <div className="glass-dark rounded-2xl p-8 space-y-8 shadow-glass-lg">
                                <h2 className="text-2xl font-bold text-white mb-8">Direct Channels</h2>

                                <div className="flex items-center gap-6 group cursor-pointer">
                                    <div className="h-14 w-14 rounded-2xl bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform ring-1 ring-white/10 group-hover:ring-purple-500/50">
                                        <MapPin className="h-6 w-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400 font-medium uppercase tracking-wide">Headquarters</p>
                                        <p className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">Futian District, Shenzhen, China</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </Container>
            </div>

            <Footer />
        </main>
    );
}
