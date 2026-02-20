"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";

interface FadeInProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
}

export function FadeIn({ children, className = "", delay = 0, direction = "up" }: FadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    const directionOffset = 30; // Reduced from 40 for subtler movement

    const variants: Variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? directionOffset : direction === "down" ? -directionOffset : 0,
            x: direction === "left" ? directionOffset : direction === "right" ? -directionOffset : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
                delay: delay,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            className={className}
            style={{ willChange: "transform, opacity" }}
        >
            {children}
        </motion.div>
    );
}
