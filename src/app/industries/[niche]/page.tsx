import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/ui/motion/FadeIn';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import { INDUSTRY_DATA } from '@/lib/industry-data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { niche: string } }): Promise<Metadata> {
    const data = INDUSTRY_DATA[params.niche as keyof typeof INDUSTRY_DATA];
    if (!data) return { title: 'Not Found' };

    return {
        title: `${data.title} Sourcing & QC | CTR Supply Solutions`,
        description: data.description,
    };
}

export default function IndustryPage({ params }: { params: { niche: string } }) {
    const data = INDUSTRY_DATA[params.niche as keyof typeof INDUSTRY_DATA];

    if (!data) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-24 overflow-hidden bg-ctr-slate">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src={data.heroImage}
                        alt={data.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-ctr-slate/80 via-ctr-slate to-ctr-slate" />
                </div>

                <Container className="relative z-10">
                    <FadeIn>
                        <div className="max-w-3xl">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ctr-blue/20 text-ctr-blue text-xs font-bold mb-6 uppercase tracking-widest">
                                Industry Specialized Solution
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                {data.title}
                            </h1>
                            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                                {data.subtitle}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button size="lg" className="bg-ctr-blue hover:bg-white hover:text-ctr-slate transition-all shadow-xl shadow-ctr-blue/20" asChild>
                                    <Link href="/contact">
                                        Start Your Project
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
                                    <Link href="/services">
                                        View All Solutions
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </FadeIn>
                </Container>
            </section>

            {/* Performance Stats Overlay */}
            <section className="relative z-20 -mt-12">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {data.stats.map((stat, idx) => (
                            <FadeIn key={idx} delay={idx * 0.1}>
                                <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xl flex flex-col items-center text-center">
                                    <span className="text-4xl font-bold text-ctr-blue mb-2">{stat.value}</span>
                                    <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">{stat.label}</span>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Content Mid Section */}
            <section className="py-24">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <FadeIn>
                            <h2 className="text-3xl md:text-4xl font-bold text-ctr-slate mb-8">
                                Why leaders in {data.title.toLowerCase()} choose CTR
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                {data.description}
                            </p>
                            <ul className="space-y-4">
                                {[
                                    '100% Onsite Physical Verification',
                                    'Bilingual Engineering Communication',
                                    'No "Foreigner Premium" Native Pricing',
                                    'Transparent Supply Chain Management'
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-ctr-blue" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </FadeIn>
                        <FadeIn delay={0.2} className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src={data.heroImage}
                                alt="Specialized Manufacturing Verification"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-ctr-blue/10 mix-blend-multiply" />
                        </FadeIn>
                    </div>
                </Container>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-slate-50 border-y border-slate-200">
                <Container>
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-ctr-slate mb-4">Domain Expertise</h2>
                        <p className="text-slate-600">Specific technical solutions optimized for {data.title.toLowerCase()} procurement managers.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {data.features.map((feature, idx) => (
                            <FadeIn key={idx} delay={idx * 0.1} className="group">
                                <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <div className="h-12 w-12 rounded-xl bg-ctr-blue/10 flex items-center justify-center mb-6 group-hover:bg-ctr-blue text-ctr-blue group-hover:text-white transition-colors">
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-ctr-slate mb-4">{feature.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Final CTA */}
            <section className="py-24">
                <Container>
                    <div className="p-12 rounded-[2rem] bg-ctr-slate text-center relative overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-ctr-blue/10 blur-[120px] rounded-full" />
                        <FadeIn>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to secure your {data.title.toLowerCase()} supply chain?</h2>
                            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">Our specialized engineering team is ready to audit your factories in Shenzhen this week.</p>
                            <Button size="lg" className="bg-ctr-blue hover:bg-white hover:text-ctr-slate px-10 h-14" asChild>
                                <Link href="/contact">
                                    Book Initial Consultation
                                </Link>
                            </Button>
                        </FadeIn>
                    </div>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
