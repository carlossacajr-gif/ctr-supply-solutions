import NextImage from 'next/image';
import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { TextReveal } from '@/components/ui/motion/TextReveal';
import { AnimatedCounter } from '@/components/ui/motion/AnimatedCounter';
import { FadeIn } from '@/components/ui/motion/FadeIn';
import { MagneticButton } from '@/components/ui/motion/MagneticButton';
import { MapPin, Mail, MessageCircle, Phone } from 'lucide-react';
import { Link } from '@/navigation';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
    title: 'About Us | 15+ Years in Shenzhen',
    description: 'Based in Shenzhen since 2009, our team of engineers and supply chain veterans execute your China manufacturing strategy with precision.',
};

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
    setRequestLocale(locale);
    const t = useTranslations('About');

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* ══════ HERO ══════ */}
            <div className="relative isolate overflow-hidden bg-gradient-to-br from-ctr-dark via-ctr-slate to-slate-800 pt-32 pb-20 sm:pt-40 sm:pb-24">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <div className="absolute top-[-20%] left-[-10%] w-[45%] h-[45%] rounded-full bg-ctr-blue/15 blur-[120px] animate-pulse-glow" />
                    <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-ctr-indigo/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
                </div>
                <Container>
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <TextReveal
                            text={t('hero.title')}
                            className="text-4xl font-heading font-bold tracking-tight text-white sm:text-6xl"
                        />
                        <FadeIn delay={0.2}>
                            <p className="mt-6 text-lg leading-8 text-slate-300">
                                {t('hero.desc')}
                            </p>
                        </FadeIn>
                    </div>
                </Container>
            </div>

            {/* ══════ WAVE DIVIDER: dark hero → light content ══════ */}
            <SectionDivider fillClass="fill-white" className="bg-ctr-dark" />

            {/* ══════ CONTENT SECTION ══════
                 Stats + Mission all sit on the same white background
                 Blobs provide the colour richness for glassmorphism. */}
            <div className="relative bg-white">
                {/* Extra blobs for visual richness */}
                <div className="absolute top-[2%] right-0 w-[45%] h-[30%] rounded-full bg-sky-200/50 blur-[140px] pointer-events-none" />
                <div className="absolute top-[20%] left-0 w-[35%] h-[25%] rounded-full bg-indigo-200/40 blur-[120px] pointer-events-none" />
                <div className="absolute bottom-[15%] right-[5%] w-[30%] h-[20%] rounded-full bg-blue-100/30 blur-[100px] pointer-events-none" />

                {/* Stats Row */}
                <div className="pt-12 sm:pt-16 pb-4">
                    <Container>
                        <FadeIn delay={0.4} direction="up">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <AnimatedCounter value={15} label={t('stats.s1')} />
                                <AnimatedCounter value={500} label={t('stats.s2')} />
                                <AnimatedCounter value={50} label={t('stats.s3')} />
                                <AnimatedCounter value={0} label={t('stats.s4')} />
                            </div>
                        </FadeIn>
                    </Container>
                </div>

                {/* Split Content Section */}
                <div className="relative py-16 sm:py-24">
                    <Container>
                        <div className="grid grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-2 lg:items-center">
                            <div>
                                <FadeIn direction="right">
                                    <p className="text-base font-semibold leading-7 text-ctr-blue">{t('mission.badge')}</p>
                                    <h2 className="mt-2 text-3xl font-heading font-bold tracking-tight text-ctr-slate">
                                        {t('mission.title')}
                                    </h2>
                                </FadeIn>
                                <div className="mt-6 space-y-6 text-slate-600 text-lg">
                                    <FadeIn delay={0.2}>
                                        <p>
                                            {t('mission.p1')}
                                        </p>
                                    </FadeIn>
                                    <FadeIn delay={0.3}>
                                        <p>
                                            {t('mission.p2_start')} <strong>{t('mission.p2_strong')}</strong>{t('mission.p2_end')}
                                        </p>
                                    </FadeIn>
                                    <FadeIn delay={0.4}>
                                        <h3 className="text-xl font-bold text-ctr-slate pt-4">{t('mission.sus_title')}</h3>
                                        <p>
                                            {t('mission.sus_desc')}
                                        </p>
                                    </FadeIn>
                                    <FadeIn delay={0.5}>
                                        <h3 className="text-xl font-bold text-ctr-slate pt-4">{t('mission.lead_title')}</h3>
                                        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 mt-6 pt-6 border-t border-slate-200">
                                            <div className="relative h-24 w-24 sm:h-32 sm:w-32 lg:h-36 lg:w-36 flex-shrink-0 overflow-hidden rounded-full border-4 border-white shadow-lg">
                                                <NextImage src="/images/about/team-crystal.webp" alt="Crystal" fill className="object-cover" />
                                            </div>
                                            <p className="mt-1 sm:mt-0">
                                                {t('mission.lead_desc')}
                                            </p>
                                        </div>
                                    </FadeIn>
                                </div>
                            </div>

                            {/* Visual Side */}
                            <div className="relative">
                                <FadeIn direction="left" delay={0.2}>
                                    <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-glass-lg relative h-[400px] border border-slate-200/60">
                                        <NextImage
                                            src="/images/about/office.webp"
                                            alt="CTR Supply Solutions Shenzhen Office"
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                                    </div>
                                </FadeIn>
                                <div className="absolute -bottom-8 -left-8 glass-white p-6 rounded-xl shadow-glass border border-white/50 hidden md:block z-20">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-ctr-blue/10 p-3 rounded-full">
                                            <MapPin className="text-ctr-blue h-6 w-6" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-ctr-slate">{t('hq.title')}</p>
                                            <p className="text-sm text-slate-500">{t('hq.district')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>

            {/* ══════ CONTACT INFO ══════ */}
            <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
                <div className="absolute top-[10%] right-[-5%] w-[35%] h-[30%] rounded-full bg-indigo-100/40 blur-[120px] pointer-events-none" />
                <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[25%] rounded-full bg-sky-100/30 blur-[100px] pointer-events-none" />
                <Container>
                    <FadeIn>
                        <h2 className="text-3xl font-heading font-bold tracking-tight text-ctr-slate sm:text-4xl text-center mb-16">
                            {t('contact_info.title')}
                        </h2>
                    </FadeIn>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Offices Column */}
                        <div className="lg:col-span-2">
                            <FadeIn delay={0.1}>
                                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">{t('contact_info.offices_label')}</p>
                            </FadeIn>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <FadeIn delay={0.2}>
                                    <div className="glass-white rounded-2xl p-6 border border-slate-200/60 shadow-glass h-full">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="h-10 w-10 rounded-xl bg-ctr-blue/10 flex items-center justify-center">
                                                <MapPin className="h-5 w-5 text-ctr-blue" />
                                            </div>
                                            <h3 className="font-bold text-ctr-slate">{t('contact_info.sz_office')}</h3>
                                        </div>
                                        <p className="text-sm text-slate-500 leading-relaxed">{t('contact_info.sz_address')}</p>
                                    </div>
                                </FadeIn>
                                <FadeIn delay={0.3}>
                                    <div className="glass-white rounded-2xl p-6 border border-slate-200/60 shadow-glass h-full">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="h-10 w-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                                                <MapPin className="h-5 w-5 text-purple-500" />
                                            </div>
                                            <h3 className="font-bold text-ctr-slate">{t('contact_info.hk_office')}</h3>
                                        </div>
                                        <p className="text-sm text-slate-500 leading-relaxed">{t('contact_info.hk_address')}</p>
                                    </div>
                                </FadeIn>
                            </div>
                        </div>

                        {/* Channels Column */}
                        <div>
                            <FadeIn delay={0.4}>
                                <div className="glass-white rounded-2xl p-6 border border-slate-200/60 shadow-glass h-full space-y-5">
                                    <a href="mailto:info@ctrsupplysolutions.com" className="flex items-center gap-4 group">
                                        <div className="h-10 w-10 rounded-xl bg-sky-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Mail className="h-5 w-5 text-sky-500" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">{t('contact_info.email_label')}</p>
                                            <p className="text-sm font-semibold text-ctr-slate group-hover:text-ctr-blue transition-colors">info@ctrsupplysolutions.com</p>
                                        </div>
                                    </a>
                                    <a href="https://api.whatsapp.com/send/?phone=8613638645191&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                                        <div className="h-10 w-10 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Phone className="h-5 w-5 text-green-500" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">{t('contact_info.whatsapp_label')}</p>
                                            <p className="text-sm font-semibold text-ctr-slate group-hover:text-green-600 transition-colors">+86 136 3864 5191</p>
                                        </div>
                                    </a>
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                                            <MessageCircle className="h-5 w-5 text-emerald-500" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">{t('contact_info.wechat_label')}</p>
                                            <p className="text-sm font-semibold text-ctr-slate">+86 136 3864 5191</p>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ─── Wave Divider: Content → CTA ─── */}
            <SectionDivider fillClass="fill-ctr-dark" className="bg-white" />

            {/* ══════ FINAL CTA ══════ */}
            <section className="relative bg-gradient-to-br from-ctr-dark via-slate-900 to-ctr-slate py-24 sm:py-32 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-ctr-blue/8 blur-[150px]" />
                <Container className="relative z-10">
                    <FadeIn>
                        <div className="mx-auto max-w-2xl text-center">
                            <div className="glass rounded-3xl p-10 sm:p-14">
                                <h2 className="text-3xl font-heading font-bold tracking-tight text-white sm:text-5xl">
                                    {t('cta.title')}
                                </h2>
                                <p className="mx-auto mt-6 max-w-lg text-lg leading-8 text-slate-300">
                                    {t('cta.desc')}
                                </p>
                                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <Link href="/contact">
                                        <MagneticButton>
                                            <Button size="lg" variant="primary">
                                                {t('cta.btn_primary')}
                                            </Button>
                                        </MagneticButton>
                                    </Link>
                                    <Link href="/services">
                                        <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                                            {t('cta.btn_secondary')}
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
