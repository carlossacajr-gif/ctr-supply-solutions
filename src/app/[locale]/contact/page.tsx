
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { Mail, MessageSquare, MapPin, Send, Phone } from 'lucide-react';
import { WorldGlobe } from '@/components/home/WorldGlobe';
import { TextReveal } from '@/components/ui/motion/TextReveal';
import { FadeIn } from '@/components/ui/motion/FadeIn';
import { MagneticButton } from '@/components/ui/motion/MagneticButton';
import { TechnicalInquiry } from '@/components/forms/TechnicalInquiry';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
    setRequestLocale(locale);
    const t = useTranslations('Contact');

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
                            text={t('title')}
                            className="text-4xl font-heading font-bold tracking-tight text-white sm:text-6xl"
                        />
                        <FadeIn delay={0.2}>
                            <p className="mt-6 text-lg leading-8 text-slate-300">
                                {t('desc')}
                            </p>
                        </FadeIn>
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <TechnicalInquiry />
                    </div>

                    <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* HQ */}
                        <FadeIn delay={0.3}>
                            <div className="glass-dark rounded-2xl p-8 shadow-glass-lg h-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="h-12 w-12 rounded-2xl bg-purple-500/20 flex items-center justify-center ring-1 ring-white/10">
                                        <MapPin className="h-5 w-5 text-purple-400" />
                                    </div>
                                    <p className="text-sm text-slate-400 font-medium uppercase tracking-wide">{t('hq_label')}</p>
                                </div>
                                <p className="text-white font-semibold">{t('hq_city')}</p>
                            </div>
                        </FadeIn>

                        {/* Email */}
                        <FadeIn delay={0.4}>
                            <a href="mailto:info@ctrsupplysolutions.com" className="group block glass-dark rounded-2xl p-8 shadow-glass-lg h-full hover:ring-1 hover:ring-sky-500/30 transition-all">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="h-12 w-12 rounded-2xl bg-sky-500/20 flex items-center justify-center ring-1 ring-white/10 group-hover:ring-sky-500/50 transition-all">
                                        <Mail className="h-5 w-5 text-sky-400" />
                                    </div>
                                    <p className="text-sm text-slate-400 font-medium uppercase tracking-wide">Email</p>
                                </div>
                                <p className="text-white font-semibold group-hover:text-sky-400 transition-colors">info@ctrsupplysolutions.com</p>
                            </a>
                        </FadeIn>

                        {/* WhatsApp */}
                        <FadeIn delay={0.5}>
                            <a href="https://api.whatsapp.com/send/?phone=8613638645191&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="group block glass-dark rounded-2xl p-8 shadow-glass-lg h-full hover:ring-1 hover:ring-green-500/30 transition-all">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="h-12 w-12 rounded-2xl bg-green-500/20 flex items-center justify-center ring-1 ring-white/10 group-hover:ring-green-500/50 transition-all">
                                        <Phone className="h-5 w-5 text-green-400" />
                                    </div>
                                    <p className="text-sm text-slate-400 font-medium uppercase tracking-wide">WhatsApp</p>
                                </div>
                                <p className="text-white font-semibold group-hover:text-green-400 transition-colors">+86 136 3864 5191</p>
                            </a>
                        </FadeIn>

                        {/* WeChat */}
                        <FadeIn delay={0.6}>
                            <div className="glass-dark rounded-2xl p-8 shadow-glass-lg h-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="h-12 w-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center ring-1 ring-white/10">
                                        <MessageSquare className="h-5 w-5 text-emerald-400" />
                                    </div>
                                    <p className="text-sm text-slate-400 font-medium uppercase tracking-wide">WeChat</p>
                                </div>
                                <p className="text-white font-semibold">CTRSupply</p>
                            </div>
                        </FadeIn>
                    </div>
                </Container>
            </div>

            <Footer />
        </main>
    );
}
