"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TextReveal } from "@/components/ui/motion/TextReveal";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/motion/FadeIn";
import { MagneticButton } from "@/components/ui/motion/MagneticButton";
import { SectionDivider } from "@/components/ui/SectionDivider";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ServiceLayoutProps {
    title: string;
    description: string;
    children: React.ReactNode;
}

export function ServiceLayout({ title, description, children }: ServiceLayoutProps) {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Kinetic Hero */}
            <div className="relative isolate bg-gradient-to-br from-ctr-dark via-ctr-slate to-slate-800 pt-24 pb-32 sm:pt-32">
                <Container>
                    <Link href="/services" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Services
                    </Link>
                    <div className="max-w-4xl">
                        <TextReveal
                            text={title}
                            className="text-4xl font-heading font-bold tracking-tight text-white sm:text-6xl mb-6"
                        />
                        <FadeIn delay={0.2}>
                            <p className="mt-6 text-xl leading-8 text-slate-300 max-w-2xl">
                                {description}
                            </p>
                        </FadeIn>
                    </div>
                </Container>
            </div>

            <div className="relative z-10 -mt-20 pb-24 overflow-hidden">
                {/* Vivid gradient mesh for glass reactivity removed to prevent top bleeding */}
                <Container className="relative z-10">
                    <div className="glass-white rounded-3xl shadow-glass-lg p-8 sm:p-12">
                        {children}
                    </div>
                </Container>
            </div>

            {/* ─── Wave Divider: Content → CTA ─── */}
            <SectionDivider fillClass="fill-ctr-dark" className="bg-white" />

            {/* Elevated CTA — Glass card */}
            <section className="relative bg-gradient-to-br from-ctr-dark via-slate-900 to-ctr-slate py-16 sm:py-24 overflow-hidden">
                {/* Background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-ctr-blue/8 blur-[150px]" />
                <Container className="relative z-10">
                    <FadeIn>
                        <div className="mx-auto max-w-2xl text-center">
                            <div className="glass rounded-3xl p-10 sm:p-14">
                                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4">Ready to start?</h2>
                                <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                                    Get a detailed quote for {title.toLowerCase()} within 48 hours.
                                </p>
                                <Link href="/contact">
                                    <MagneticButton>
                                        <Button size="lg">Request Quote</Button>
                                    </MagneticButton>
                                </Link>
                            </div>
                        </div>
                    </FadeIn>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
