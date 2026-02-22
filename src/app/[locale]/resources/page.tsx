import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/ui/motion/FadeIn';
import { Link } from '@/navigation';
import { Metadata } from 'next';
import { BookOpen } from 'lucide-react';
import { LeadCapture } from '@/components/ui/LeadCapture';

import { setRequestLocale } from 'next-intl/server';

import { useTranslations } from 'next-intl';
import { RESOURCE_ARTICLES } from '@/lib/resources-data';

export const metadata: Metadata = {
    title: 'Manufacturing & Sourcing Resources',
    description: 'Expert guides, case studies, and technical resources for navigating China manufacturing and supply chain logistics.',
};

export default function ResourcesPage({ params: { locale } }: { params: { locale: string } }) {
    setRequestLocale(locale);
    const t = useTranslations('ResourcesData');
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 bg-slate-50 border-b border-slate-200">
                <Container>
                    <div className="max-w-3xl">
                        <FadeIn>
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ctr-blue/10 text-ctr-blue text-xs font-bold mb-6 uppercase tracking-widest">
                                <BookOpen className="w-4 h-4" />
                                KNOWLEDGE HUB
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold text-ctr-slate mb-6">
                                Manufacturing & Sourcing <span className="text-ctr-blue">Resources</span>
                            </h1>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Actionable insights for B2B procurement managers and engineers. We share our 15+ years of onsite experience in the Shenzhen manufacturing ecosystem.
                            </p>
                        </FadeIn>
                    </div>
                </Container>
            </section>

            {/* Resources Grid */}
            <section className="py-24">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                        {Object.entries(RESOURCE_ARTICLES).map(([slug, data], idx) => {
                            const title = t(`articles.${slug}.title`);
                            const excerpt = t(`articles.${slug}.excerpt`);
                            const category = t(`articles.${slug}.category`);

                            return (
                                <FadeIn key={slug} delay={idx * 0.1}>
                                    <Link
                                        href={`/resources/${slug}`}
                                        className="group flex flex-col h-full p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                    >
                                        <div className="h-12 w-12 rounded-xl bg-ctr-slate/5 flex items-center justify-center mb-6 group-hover:bg-ctr-blue/10 transition-colors">
                                            <data.icon className="w-6 h-6 text-ctr-blue" />
                                        </div>
                                        <h3 className="text-xl font-bold text-ctr-slate mb-4 group-hover:text-ctr-blue transition-colors">
                                            {title}
                                        </h3>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                                            {excerpt}
                                        </p>
                                        <div className="flex items-center text-xs font-bold tracking-widest text-slate-400 uppercase">
                                            CATEGORY: {category}
                                        </div>
                                    </Link>
                                </FadeIn>
                            );
                        })}
                    </div>

                    <LeadCapture />
                </Container>
            </section>

            <Footer />
        </main>
    );
}
