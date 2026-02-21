"use client";

import React, { useRef } from "react";
import { Container } from "@/components/ui/Container";
import Image from "next/image";
import { FadeIn } from "@/components/ui/motion/FadeIn";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
    {
        title: "Send Your Spec",
        description:
            "Share your product requirements, target price, and quality standards. We review everything within 48 hours.",
        image: "/images/home/process-discover.webp",
        alt: "Engineering Schematics and Blueprints"
    },
    {
        title: "We Verify & Source",
        description:
            "Our boots-on-the-ground team identifies verified manufacturers. We visit factories to audit capabilities.",
        image: "/images/home/process-source.webp",
        alt: "Factory Floor Inspection"
    },
    {
        title: "Sample & Test",
        description:
            "We procure samples and run independent testing in our Shenzhen lab. You get a video report before mass production.",
        image: "/images/home/process-verify.webp",
        alt: "Electronics Lab Testing"
    },
    {
        title: "Production & QC",
        description:
            "Ongoing monitoring during mass production. We perform a final Pre-Shipment Inspection to ensure zero defects.",
        image: "/images/home/process-deliver.webp",
        alt: "Global Shipping and Logistics"
    },
];

export function ScrollytellingProcess() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    return (
        <section id="how-it-works" className="bg-slate-50 py-24 sm:py-32" ref={containerRef}>
            <Container>
                <div className="mx-auto max-w-2xl lg:text-center mb-16">
                    <FadeIn>
                        <h2 className="text-base font-semibold leading-7 text-ctr-blue">Process</h2>
                        <p className="mt-2 text-3xl font-heading font-bold tracking-tight text-ctr-slate sm:text-4xl">
                            How we work
                        </p>
                    </FadeIn>
                </div>
                <div className="relative max-w-5xl mx-auto">
                    {/* ─── Vertical Progress Line ─── */}
                    <div className="absolute left-[15px] lg:left-8 top-0 bottom-0 w-0.5 bg-slate-200 rounded-full z-0">
                        <motion.div
                            className="w-full bg-gradient-to-b from-ctr-blue to-ctr-cyan rounded-full origin-top"
                            style={{
                                scaleY: scrollYProgress,
                                height: "100%",
                            }}
                        />
                    </div>

                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col lg:flex-row gap-8 mb-24 lg:mb-32 min-h-[40vh] items-center last:mb-0 relative">
                            {/* Step Number Node */}
                            <div className="flex absolute left-0 lg:left-4 w-8 h-8 rounded-full bg-white border-2 border-ctr-blue items-center justify-center z-10 shadow-glass">
                                <span className="text-xs font-bold text-ctr-blue">{index + 1}</span>
                            </div>

                            {/* Text Content */}
                            <div className="flex-1 lg:w-1/2 order-2 lg:order-1 pl-12 lg:pl-20">
                                <FadeIn direction="right" delay={0.2}>
                                    <span className="inline-block text-xs font-mono text-ctr-blue/60 uppercase tracking-widest mb-2">Step 0{index + 1}</span>
                                    <h3 className="text-2xl font-bold text-ctr-slate mb-4">{step.title}</h3>
                                    <p className="text-lg text-slate-600 leading-relaxed">{step.description}</p>
                                </FadeIn>
                            </div>

                            {/* Image */}
                            <div className="flex-1 lg:w-1/2 h-64 lg:h-80 w-full relative lg:sticky lg:top-32 order-1 lg:order-2 mb-8 lg:mb-0 pl-14 lg:pl-0">
                                <FadeIn direction="left" delay={0.1} className="h-full w-full">
                                    <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-glass-lg border border-slate-200/60">
                                        <Image
                                            src={step.image}
                                            alt={step.alt}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                        {/* Bottom gradient overlay */}
                                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
