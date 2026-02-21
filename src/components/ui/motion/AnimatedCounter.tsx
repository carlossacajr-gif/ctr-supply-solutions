"use client";

import { useSpring, useInView, useMotionValue, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
    value: number;
    label?: string;
    suffix?: string;
}

export function AnimatedCounter({ value, label, suffix }: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { mass: 1, stiffness: 75, damping: 15 });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useMotionValueEvent(springValue, "change", (latest) => {
        if (ref.current) {
            ref.current.textContent = Math.round(latest).toString();
        }
    });

    // Determine suffix to show
    const displaySuffix = suffix ?? (value > 0 ? '+' : '');

    // Inline mode: no wrapper, just the counter value + suffix
    if (!label) {
        return (
            <span ref={containerRef}>
                <span ref={ref}>0</span>{displaySuffix}
            </span>
        );
    }

    // Full mode: wrapped in a styled card (legacy usage)
    return (
        <div ref={containerRef} className="text-center p-6 glass-white rounded-2xl shadow-glass hover:shadow-glass-lg transition-[box-shadow] duration-300">
            <p className="text-4xl sm:text-5xl font-heading font-bold text-ctr-blue">
                <span ref={ref}>0</span>{displaySuffix}
            </p>
            <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mt-2 uppercase tracking-wide">
                {label}
            </p>
        </div>
    );
}
