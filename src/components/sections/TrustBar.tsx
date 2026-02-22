"use client";

import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { FadeIn } from '../ui/motion/FadeIn';

const stats = [
    { label: 'On-Site Experience', value: '15+', suffix: 'Years' },
    { label: 'Factory Audits', value: '500+', suffix: 'Completed' },
    { label: 'Annual Spend Managed', value: '$100M+', suffix: 'USD' },
    { label: 'QA Pass Rate', value: '99.8%', suffix: 'Average' }
];

export function TrustBar() {
    return (
        <section className="py-12 bg-white/50 border-y border-slate-100 backdrop-blur-sm overflow-hidden">
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, idx) => (
                        <FadeIn key={idx} delay={idx * 0.05}>
                            <div className="flex flex-col items-center md:items-start text-center md:text-left group">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl md:text-3xl font-bold text-ctr-slate group-hover:text-ctr-blue transition-colors">
                                        {stat.value}
                                    </span>
                                    <span className="text-xs font-bold text-ctr-blue/60 uppercase tracking-widest">
                                        {stat.suffix}
                                    </span>
                                </div>
                                <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">
                                    {stat.label}
                                </span>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </Container>
        </section>
    );
}
