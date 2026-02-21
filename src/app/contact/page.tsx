"use client";

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { Mail, MessageSquare, MapPin, Send } from 'lucide-react';
import dynamic from 'next/dynamic';
const WorldGlobe = dynamic(() => import('@/components/home/WorldGlobe'), { ssr: false });
import { TextReveal } from '@/components/ui/motion/TextReveal';
import { FadeIn } from '@/components/ui/motion/FadeIn';
import { MagneticButton } from '@/components/ui/motion/MagneticButton';

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
                                Ready to secure your supply chain? Send us your specs. We review within 48 hours.
                            </p>
                        </FadeIn>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Contact Info Card */}
                        <FadeIn direction="right" delay={0.3}>
                            <div className="glass-dark rounded-2xl p-8 space-y-8 shadow-glass-lg">
                                <h2 className="text-2xl font-bold text-white mb-8">Direct Channels</h2>

                                <div className="flex items-center gap-6 group cursor-pointer">
                                    <div className="h-14 w-14 rounded-2xl bg-ctr-blue/20 flex items-center justify-center group-hover:scale-110 transition-transform ring-1 ring-white/10 group-hover:ring-ctr-blue/50">
                                        <Mail className="h-6 w-6 text-ctr-blue" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400 font-medium uppercase tracking-wide">Email Us</p>
                                        <p className="text-lg font-semibold text-white group-hover:text-ctr-blue transition-colors">info@ctrsupplysolutions.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 group cursor-pointer">
                                    <div className="h-14 w-14 rounded-2xl bg-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform ring-1 ring-white/10 group-hover:ring-green-500/50">
                                        <MessageSquare className="h-6 w-6 text-green-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400 font-medium uppercase tracking-wide">WhatsApp / WeChat</p>
                                        <p className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">+86-136-3864-5191</p>
                                    </div>
                                </div>

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

                        {/* Contact Form — Glass styled */}
                        <FadeIn direction="left" delay={0.4}>
                            <form action="mailto:info@ctrsupplysolutions.com" method="post" encType="text/plain" className="glass-white rounded-2xl p-8 shadow-glass-lg space-y-6 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-ctr-blue/5 rounded-bl-full pointer-events-none" />
                                <h3 className="text-xl font-bold text-ctr-slate mb-4 relative z-10">Send a Message</h3>
                                <div className="grid grid-cols-2 gap-4 relative z-10">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                                        <input type="text" name="name" id="name" className="block w-full rounded-xl border-slate-200/60 shadow-sm focus:border-ctr-blue focus:ring-ctr-blue sm:text-sm p-3 border bg-white/70 backdrop-blur-sm transition-all hover:border-ctr-blue/50 focus:bg-white" />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company</label>
                                        <input type="text" name="company" id="company" className="block w-full rounded-xl border-slate-200/60 shadow-sm focus:border-ctr-blue focus:ring-ctr-blue sm:text-sm p-3 border bg-white/70 backdrop-blur-sm transition-all hover:border-ctr-blue/50 focus:bg-white" />
                                    </div>
                                </div>
                                <div className="relative z-10">
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                    <input type="email" name="email" id="email" className="block w-full rounded-xl border-slate-200/60 shadow-sm focus:border-ctr-blue focus:ring-ctr-blue sm:text-sm p-3 border bg-white/70 backdrop-blur-sm transition-all hover:border-ctr-blue/50 focus:bg-white" />
                                </div>
                                <div className="relative z-10">
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Project Details</label>
                                    <textarea name="message" id="message" rows={4} className="block w-full rounded-xl border-slate-200/60 shadow-sm focus:border-ctr-blue focus:ring-ctr-blue sm:text-sm p-3 border bg-white/70 backdrop-blur-sm transition-all hover:border-ctr-blue/50 focus:bg-white" placeholder="Tell us about your product, estimated quantity, and target price." />
                                </div>
                                <div className="relative z-10 w-full">
                                    <MagneticButton className="w-full">
                                        <Button type="button" className="w-full group" size="lg">
                                            Send Request
                                            <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </MagneticButton>
                                </div>
                            </form>
                        </FadeIn>
                    </div>
                </Container>
            </div>

            <Footer />
        </main>
    );
}
