"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { CheckCircle2, Package, Truck, Search, Camera } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useTranslations } from "next-intl";

export function ProductionTrackerDemo() {
    const t = useTranslations('Tracker');

    const timeline = [
        { id: 1, status: t('steps.s1.status'), date: t('steps.s1.date'), icon: Package },
        { id: 2, status: t('steps.s2.status'), date: t('steps.s2.date'), icon: Search },
        { id: 3, status: t('steps.s3.status'), date: t('steps.s3.date'), icon: Camera },
        { id: 4, status: t('steps.s4.status'), date: t('steps.s4.date'), icon: CheckCircle2 },
        { id: 5, status: t('steps.s5.status'), date: t('steps.s5.date'), icon: Truck },
    ];


    const [currentStep, setCurrentStep] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleDemo = () => {
        setIsPlaying(true);
        setCurrentStep(0);
        let step = 0;
        const interval = setInterval(() => {
            step++;
            if (step > 5) {
                clearInterval(interval);
                setIsPlaying(false);
            } else {
                setCurrentStep(step);
            }
        }, 1200);
    };

    return (
        <section className="py-24 bg-ctr-slate text-white overflow-hidden relative">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <Container className="relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-heading font-bold mb-6">{t('title')}</h2>
                        <p className="text-slate-300 text-lg mb-8">
                            {t('desc')}
                        </p>
                        <Button
                            onClick={handleDemo}
                            disabled={isPlaying}
                            className="bg-ctr-blue hover:bg-sky-500 text-white"
                        >
                            {isPlaying ? t('btn_load') : t('btn_flow')}
                        </Button>
                    </div>

                    <div className="lg:w-1/2 w-full bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-2xl relative overflow-hidden group">
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                        <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4 relative z-10">
                            <div>
                                <p className="text-xs text-slate-400">{t('tracking_label')}</p>
                                <p className="font-mono text-ctr-blue">PO-2026-CTR-882</p>
                            </div>
                            <div className="px-3 py-1 rounded-full bg-ctr-blue/10 text-ctr-blue text-xs font-bold">
                                {t('active_label')}
                            </div>
                        </div>

                        <div className="relative space-y-8">
                            {/* Vertical Line */}
                            <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-slate-800" />

                            {timeline.map((step, index) => {
                                const isActive = index < currentStep;
                                const isCurrent = index === currentStep - 1;

                                return (
                                    <motion.div
                                        key={step.id}
                                        initial={{ opacity: 0.5, x: -10 }}
                                        animate={{
                                            opacity: isActive ? 1 : 0.3,
                                            x: 0,
                                        }}
                                        className="relative flex items-center gap-6"
                                    >
                                        <div className={`z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 transition-colors duration-500
                                            ${isActive ? 'border-ctr-blue bg-ctr-blue text-white' : 'border-slate-700 bg-slate-900 text-slate-600'}
                                        `}>
                                            <step.icon className="h-5 w-5" />
                                        </div>
                                        <div className="flex-1">
                                            <p className={`font-bold transition-colors duration-500 ${isActive ? 'text-white' : 'text-slate-500'}`}>
                                                {step.status}
                                            </p>
                                            <p className="text-xs text-slate-500">{step.date}</p>
                                        </div>
                                        {isCurrent && (
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className={`absolute right-0 text-xs px-2 py-1 rounded ${index === timeline.length - 1 && !isPlaying ? 'bg-green-500/20 text-green-400 font-bold' : 'bg-slate-800 text-slate-300'}`}
                                            >
                                                {index === timeline.length - 1 && !isPlaying ? t('delivered_status') : t('checking_status')}
                                            </motion.div>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
