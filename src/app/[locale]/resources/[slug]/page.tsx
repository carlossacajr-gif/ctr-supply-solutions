import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/ui/motion/FadeIn';
import { Button } from '@/components/ui/Button';
import { Link } from '@/navigation';
import { ArrowLeft, Clock, User, Share2, ArrowRight, ChevronRight } from 'lucide-react';
import { RESOURCE_ARTICLES } from '@/lib/resources-data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }: { params: { slug: string, locale: string } }): Promise<Metadata> {
    setRequestLocale(params.locale);
    const article = RESOURCE_ARTICLES[params.slug as keyof typeof RESOURCE_ARTICLES];
    if (!article) return { title: 'Not Found' };

    return {
        title: article.title,
        description: article.excerpt,
    };
}

export default function ResourceDetailPage({ params }: { params: { slug: string, locale: string } }) {
    setRequestLocale(params.locale);
    const article = RESOURCE_ARTICLES[params.slug as keyof typeof RESOURCE_ARTICLES];

    if (!article) {
        notFound();
    }

    const relatedArticles = Object.entries(RESOURCE_ARTICLES)
        .filter(([slug]) => slug !== params.slug)
        .slice(0, 2);

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <article className="pt-40 pb-24">
                <Container>
                    <FadeIn>
                        <Link
                            href="/resources"
                            className="inline-flex items-center gap-2 text-slate-500 hover:text-ctr-blue transition-colors mb-12 text-sm font-bold tracking-widest uppercase"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Resources
                        </Link>

                        <div className="max-w-3xl">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ctr-blue/10 text-ctr-blue text-xs font-bold mb-6 uppercase tracking-widest">
                                {article.category}
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold text-ctr-slate mb-8 leading-tight">
                                {article.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 mb-12 py-6 border-y border-slate-100">
                                <div className="flex items-center gap-2">
                                    <User className="w-4 h-4" />
                                    <span>{article.author}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>{article.readTime}</span>
                                </div>
                            </div>

                            <div
                                className="prose prose-lg prose-slate max-w-none prose-headings:text-ctr-slate prose-a:text-ctr-blue"
                                dangerouslySetInnerHTML={{ __html: article.content }}
                            />

                            <div className="p-8 rounded-2xl bg-ctr-slate text-white mt-20 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-ctr-blue/20 blur-3xl rounded-full translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-700" />
                                <h3 className="text-2xl font-bold mb-4 relative z-10">Need Expert Local Assistance?</h3>
                                <p className="text-slate-300 mb-8 leading-relaxed max-w-xl relative z-10">
                                    Our onsite engineering team in Shenzhen can execute these technical audits for you. Don't leave your supply chain to chance.
                                </p>
                                <Button className="bg-ctr-blue hover:bg-white hover:text-ctr-slate transition-all shadow-lg relative z-10" asChild>
                                    <Link href="/contact">
                                        Execute Technical Audit
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </Button>
                            </div>

                            <div className="mt-24 pt-24 border-t border-slate-100">
                                <h3 className="text-2xl font-bold text-ctr-slate mb-12">Related Resources</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {relatedArticles.map(([slug, data]) => (
                                        <Link key={slug} href={`/resources/${slug}`} className="group">
                                            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-white group-hover:border-ctr-blue/20 group-hover:shadow-xl transition-all duration-300">
                                                <span className="text-xs font-bold text-ctr-blue mb-2 block uppercase tracking-widest">{data.category}</span>
                                                <h4 className="text-lg font-bold text-ctr-slate mb-2 group-hover:text-ctr-blue transition-colors line-clamp-2">{data.title}</h4>
                                                <p className="text-sm text-slate-500 line-clamp-2">{data.excerpt}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </Container>
            </article>

            <Footer />
        </main>
    );
}
