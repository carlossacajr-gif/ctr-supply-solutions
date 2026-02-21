"use client";

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Hardware accelerated spring physics
    const cursorXSpring = useSpring(cursorX, { damping: 25, stiffness: 250, mass: 0.1 });
    const cursorYSpring = useSpring(cursorY, { damping: 25, stiffness: 250, mass: 0.1 });

    // Trailing ring spring physics
    const ringXSpring = useSpring(cursorX, { damping: 25, stiffness: 100, mass: 0.2 });
    const ringYSpring = useSpring(cursorY, { damping: 25, stiffness: 100, mass: 0.2 });

    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only enable on devices that have a cursor (Desktop-only feature)
        const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
        if (!mediaQuery.matches) return;

        let hasMoved = false;

        const updatePosition = (e: MouseEvent) => {
            // Direct DOM mutation bypassing React Render Cycle!
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            if (!hasMoved) {
                hasMoved = true;
                setIsVisible(true);
            }
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updatePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    if (!isVisible) return null;

    return (
        <>
            {/* Core Dot */}
            <motion.div
                className="fixed top-[-8px] left-[-8px] w-4 h-4 rounded-full bg-ctr-blue pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
                animate={{
                    scale: isHovering ? 2.5 : 1,
                }}
                transition={{
                    scale: { type: "spring", stiffness: 300, damping: 20 }
                }}
            />
            {/* Trailing Ring */}
            <motion.div
                className="fixed top-[-16px] left-[-16px] w-8 h-8 rounded-full border border-ctr-blue/50 pointer-events-none z-[9999]"
                style={{
                    x: ringXSpring,
                    y: ringYSpring,
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    opacity: isHovering ? 0 : 1
                }}
                transition={{
                    scale: { type: "spring", stiffness: 100, damping: 20 }
                }}
            />
        </>
    );
};
