"use client";

import { motion, useInView, useAnimation, Variant } from "framer-motion";
import { useEffect, useRef } from "react";

type TextRevealProps = {
    text: string;
    el?: keyof JSX.IntrinsicElements;
    className?: string;
    delay?: number;
};

export const TextReveal = ({
    text,
    el: Wrapper = "h1",
    className,
    delay = 0,
}: TextRevealProps) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.1, once: true });

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const wordAnimations = {
        hidden: {
            opacity: 0,
            y: 15,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
                delay: delay,
            },
        },
    };

    return (
        <Wrapper className={className}>
            <motion.span
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                    visible: { transition: { staggerChildren: 0.08 } },
                    hidden: {},
                }}
                aria-hidden
                style={{ willChange: "transform, opacity" }}
            >
                {text.split(" ").map((word, i) => (
                    <motion.span
                        className="inline-block"
                        key={i}
                        variants={wordAnimations}
                    >
                        {word}
                        <span className="inline-block">&nbsp;</span>
                    </motion.span>
                ))}
            </motion.span>
            <span className="sr-only">{text}</span>
        </Wrapper>
    );
};
