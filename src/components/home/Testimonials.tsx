"use client";

import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/motion/FadeIn";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { SpotlightCard } from "@/components/ui/motion/SpotlightCard";

interface Testimonial {
    author: string;
    role: string;
    content: string;
    image?: string;
}

const testimonials: Testimonial[] = [
    {
        author: "Murat",
        role: "Client",
        content:
            "If you're looking for a partner who combines deep industry knowledge with a strong understanding of Chinese culture, CTR Supply Solutions is the best choice. Their expertise makes them an invaluable ally for navigating complex business landscapes.",
    },
    {
        author: "Sebastian John",
        role: "Industry Veteran (14+ Years)",
        content:
            "Working with CTR Supply Solutions has been a standout experience. Your team consistently demonstrates high levels of professionalism, expertise, and a customer-centric approach that exceeds expectations.",
    },
    {
        author: "Marco",
        role: "Long-term Partner (5 Years)",
        content:
            "I am consistently impressed by their professionalism. The leadership displayed by Crystal in guiding the team is exceptional, with a strong focus on key process details and customer satisfaction.",
    },
    {
        author: "Cristiane",
        role: "Client",
        content:
            "We are incredibly grateful for the flexibility and patience the CTR Team has shown. Your ability to adapt to our requirements, especially during challenging situations, has made a significant difference.",
    },
    {
        author: "Ilário",
        role: "Client",
        content:
            "The team at CTR is truly exceptional. They are hardworking, concise, and methodical. It is a pleasure to collaborate with them, as their deep understanding of the Chinese market is complemented by their ability to adapt to Western business practices.",
    },
    {
        author: "Tom",
        role: "Client",
        content:
            "We are incredibly grateful for the flexibility and patience the CTR Team has shown in handling our needs. Your ability to adapt to our requirements, especially during challenging situations, has made a significant difference.",
    },
];

export function Testimonials() {
    return (
        <section className="bg-slate-50 py-24 sm:py-32">
            <Container>
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <FadeIn>
                        <h2 className="text-base font-semibold leading-7 text-ctr-blue">Testimonials</h2>
                        <p className="mt-2 text-3xl font-heading font-bold tracking-tight text-ctr-slate sm:text-4xl">
                            Trusted by industry leaders
                        </p>
                    </FadeIn>
                </div>
                <div className="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-slate-900 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
                    {/* Column 1 */}
                    <div className="space-y-8 xl:contents xl:space-y-0">
                        <div className="xl:row-span-2 space-y-8">
                            <FadeIn delay={0.1}>
                                <SpotlightCard className="glass-white rounded-2xl p-6 shadow-glass hover:shadow-glass-lg transition-[box-shadow] duration-300">
                                    <div className="h-full flex flex-col justify-between">
                                        <blockquote className="text-slate-700">
                                            <div className="flex gap-1 text-yellow-400 mb-4">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="h-4 w-4 fill-current" />
                                                ))}
                                            </div>
                                            <p>&ldquo;{testimonials[0].content}&rdquo;</p>
                                        </blockquote>
                                        <figcaption className="mt-6 flex items-center gap-x-4">
                                            {testimonials[0].image ? (
                                                <Image src={testimonials[0].image} alt={testimonials[0].author} width={40} height={40} className="h-10 w-10 rounded-full bg-slate-50 object-cover" />
                                            ) : (
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-600">
                                                    {testimonials[0].author.charAt(0)}
                                                </div>
                                            )}
                                            <div>
                                                <div className="font-semibold text-ctr-slate">{testimonials[0].author}</div>
                                                {testimonials[0].role && <div className="text-slate-500 text-xs">{testimonials[0].role}</div>}
                                            </div>
                                        </figcaption>
                                    </div>
                                </SpotlightCard>
                            </FadeIn>
                            <FadeIn delay={0.3}>
                                <SpotlightCard className="glass-white rounded-2xl p-6 shadow-glass hover:shadow-glass-lg transition-[box-shadow] duration-300">
                                    <div className="h-full flex flex-col justify-between">
                                        <blockquote className="text-slate-700">
                                            <div className="flex gap-1 text-yellow-400 mb-4">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="h-4 w-4 fill-current" />
                                                ))}
                                            </div>
                                            <p>&ldquo;{testimonials[3].content}&rdquo;</p>
                                        </blockquote>
                                        <figcaption className="mt-6 flex items-center gap-x-4">
                                            {testimonials[3].image ? (
                                                <Image src={testimonials[3].image} alt={testimonials[3].author} width={40} height={40} className="h-10 w-10 rounded-full bg-slate-50 object-cover" />
                                            ) : (
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-600">
                                                    {testimonials[3].author.charAt(0)}
                                                </div>
                                            )}
                                            <div>
                                                <div className="font-semibold text-ctr-slate">{testimonials[3].author}</div>
                                                {testimonials[3].role && <div className="text-slate-500 text-xs">{testimonials[3].role}</div>}
                                            </div>
                                        </figcaption>
                                    </div>
                                </SpotlightCard>
                            </FadeIn>
                        </div>

                        {/* Column 2 (Middle - Highlighted with Glass Dark) */}
                        <div className="col-span-2 space-y-8 xl:row-start-1">
                            <FadeIn delay={0.2}>
                                <SpotlightCard className="bg-ctr-dark rounded-2xl p-8 shadow-glass-lg relative overflow-hidden ring-1 ring-white/10" spotlightColor="rgba(255,255,255,0.1)">
                                    <div className="h-full flex flex-col justify-between">
                                        <Quote className="absolute top-4 right-8 text-white/5 h-24 w-24 rotate-180" />
                                        {/* Subtle gradient glow */}
                                        <div className="absolute top-0 left-0 w-32 h-32 bg-ctr-blue/10 rounded-full blur-[80px]" />
                                        <blockquote className="text-slate-100 text-lg relative z-10">
                                            <div className="flex gap-1 text-ctr-blue mb-4">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="h-5 w-5 fill-current" />
                                                ))}
                                            </div>
                                            <p>&ldquo;{testimonials[1].content}&rdquo;</p>
                                        </blockquote>
                                        <figcaption className="mt-6 flex items-center gap-x-4 relative z-10 border-t border-white/10 pt-6">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-sm font-semibold text-slate-300">
                                                {testimonials[1].author.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="font-bold text-white">{testimonials[1].author}</div>
                                                <div className="text-ctr-blue text-xs">{testimonials[1].role}</div>
                                            </div>
                                        </figcaption>
                                    </div>
                                </SpotlightCard>
                            </FadeIn>
                            <FadeIn delay={0.6}>
                                <SpotlightCard className="glass-white rounded-2xl p-6 shadow-glass hover:shadow-glass-lg transition-[box-shadow] duration-300">
                                    <div className="h-full flex flex-col justify-between">
                                        <blockquote className="text-slate-700">
                                            <div className="flex gap-1 text-yellow-400 mb-4">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="h-4 w-4 fill-current" />
                                                ))}
                                            </div>
                                            <p>&ldquo;{testimonials[5].content}&rdquo;</p>
                                        </blockquote>
                                        <figcaption className="mt-6 flex items-center gap-x-4">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-600">
                                                {testimonials[5].author.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="font-semibold text-ctr-slate">{testimonials[5].author}</div>
                                                {testimonials[5].role && <div className="text-slate-500 text-xs">{testimonials[5].role}</div>}
                                            </div>
                                        </figcaption>
                                    </div>
                                </SpotlightCard>
                            </FadeIn>
                        </div>

                        {/* Column 3 */}
                        <div className="xl:row-span-2 space-y-8">
                            <FadeIn delay={0.4}>
                                <SpotlightCard className="glass-white rounded-2xl p-6 shadow-glass hover:shadow-glass-lg transition-[box-shadow] duration-300">
                                    <div className="h-full flex flex-col justify-between">
                                        <blockquote className="text-slate-700">
                                            <div className="flex gap-1 text-yellow-400 mb-4">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="h-4 w-4 fill-current" />
                                                ))}
                                            </div>
                                            <p>&ldquo;{testimonials[2].content}&rdquo;</p>
                                        </blockquote>
                                        <figcaption className="mt-6 flex items-center gap-x-4">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-600">
                                                {testimonials[2].author.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="font-semibold text-ctr-slate">{testimonials[2].author}</div>
                                                {testimonials[2].role && <div className="text-slate-500 text-xs">{testimonials[2].role}</div>}
                                            </div>
                                        </figcaption>
                                    </div>
                                </SpotlightCard>
                            </FadeIn>
                            <FadeIn delay={0.5}>
                                <SpotlightCard className="glass-white rounded-2xl p-6 shadow-glass hover:shadow-glass-lg transition-[box-shadow] duration-300">
                                    <div className="h-full flex flex-col justify-between">
                                        <blockquote className="text-slate-700">
                                            <div className="flex gap-1 text-yellow-400 mb-4">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="h-4 w-4 fill-current" />
                                                ))}
                                            </div>
                                            <p>&ldquo;{testimonials[4].content}&rdquo;</p>
                                        </blockquote>
                                        <figcaption className="mt-6 flex items-center gap-x-4">
                                            {testimonials[4].image ? (
                                                <Image src={testimonials[4].image} alt={testimonials[4].author} width={40} height={40} className="h-10 w-10 rounded-full bg-slate-50 object-cover" />
                                            ) : (
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-600">
                                                    {testimonials[4].author.charAt(0)}
                                                </div>
                                            )}
                                            <div>
                                                <div className="font-semibold text-ctr-slate">{testimonials[4].author}</div>
                                                {testimonials[4].role && <div className="text-slate-500 text-xs">{testimonials[4].role}</div>}
                                            </div>
                                        </figcaption>
                                    </div>
                                </SpotlightCard>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
