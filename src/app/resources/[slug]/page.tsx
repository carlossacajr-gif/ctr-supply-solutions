import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/ui/motion/FadeIn';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowLeft, Clock, User, Share2 } from 'lucide-react';

export default function ResourceDetailPage({ params }: { params: { slug: string } }) {
    // In a real app, this would fetch data based on the slug
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <article className="pt-32 pb-24">
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
                            <h1 className="text-4xl md:text-5xl font-bold text-ctr-slate mb-8 leading-tight">
                                {params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 mb-12 py-6 border-y border-slate-100">
                                <div className="flex items-center gap-2">
                                    <User className="w-4 h-4" />
                                    <span>By CTR Engineering Team</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>8 min read</span>
                                </div>
                                <div className="flex items-center gap-2 ml-auto">
                                    <Button variant="ghost" size="sm" className="gap-2">
                                        <Share2 className="w-4 h-4" />
                                        Share
                                    </Button>
                                </div>
                            </div>

                            <div className="prose prose-lg prose-slate max-w-none">
                                <p className="text-xl text-slate-600 leading-relaxed mb-8 font-medium">
                                    This is a placeholder for the technical article content regarding {params.slug}.
                                    In a production environment, this content would be served from a CMS or local MDX files.
                                </p>

                                <h2 className="text-2xl font-bold text-ctr-slate mt-12 mb-6 text-left">Key Takeaways</h2>
                                <ul className="space-y-4 mb-12 list-none p-0 text-left">
                                    {[1, 2, 3].map(i => (
                                        <li key={i} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-ctr-blue/10 text-ctr-blue flex items-center justify-center font-bold">
                                                {i}
                                            </span>
                                            <p className="text-slate-600 italic">Important insight related to {params.slug} for B2B procurement managers.</p>
                                        </li>
                                    ))}
                                </ul>

                                <div className="p-8 rounded-2xl bg-ctr-slate text-white mt-16">
                                    <h3 className="text-xl font-bold mb-4">Need Expert Assistance?</h3>
                                    <p className="text-slate-300 mb-8 leading-relaxed">
                                        Don't navigate the Shenzhen manufacturing landscape alone. Our local team can handle the technical audit for you.
                                    </p>
                                    <Button variant="outline" className="text-white border-white hover:bg-white hover:text-ctr-slate">
                                        Contact Our Engineers
                                    </Button>
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
