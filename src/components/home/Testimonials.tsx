"use client";

import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/motion/FadeIn";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { SpotlightCard } from "@/components/ui/motion/SpotlightCard";
import { useTranslations } from "next-intl";

interface Testimonial {
    author: string;
    role: string;
    content: string;
    image?: string;
}

export function Testimonials() {
    const t = useTranslations('Testimonials');

    const testimonials: Testimonial[] = [
        {
            author: "Murat",
            role: t('t1.role'),
            content: t('t1.content'),
        },
        {
            author: "Sebastian John",
            role: t('t2.role'),
            content: t('t2.content'),
        },
        {
            author: "Marco",
            role: t('t3.role'),
            content: t('t3.content'),
        },
        {
            author: "Cristiane",
            role: t('t4.role'),
            content: t('t4.content'),
        },
        {
            author: "Ilário",
            role: t('t5.role'),
            content: t('t5.content'),
        },
        {
            author: "Tom",
            role: t('t6.role'),
            content: t('t6.content'),
        },
    ];

    return (
        <section className="bg-slate-50 py-24 sm:py-32">
            <Container>
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <FadeIn>
                        <h2 className="text-base font-semibold leading-7 text-ctr-blue">{t('badge')}</h2>
                        <p className="mt-2 text-3xl font-heading font-bold tracking-tight text-ctr-slate sm:text-4xl">
                            {t('title')}
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
                                            {testimonials[5].image ? (
                                                <Image src={testimonials[5].image} alt={testimonials[5].author} width={40} height={40} className="h-10 w-10 rounded-full bg-slate-50 object-cover" />
                                            ) : (
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-600">
                                                    {testimonials[5].author.charAt(0)}
                                                </div>
                                            )}
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
                        <div className="space-y-8 xl:contents xl:space-y-0">
                            <div className="xl:row-start-1 space-y-8">
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
                                                {testimonials[2].image ? (
                                                    <Image src={testimonials[2].image} alt={testimonials[2].author} width={40} height={40} className="h-10 w-10 rounded-full bg-slate-50 object-cover" />
                                                ) : (
                                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-600">
                                                        {testimonials[2].author.charAt(0)}
                                                    </div>
                                                )}
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
                </div>
            </Container>
        </section>
    );
}
