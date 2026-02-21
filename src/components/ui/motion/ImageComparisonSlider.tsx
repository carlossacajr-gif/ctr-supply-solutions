"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { GripVertical } from "lucide-react";

export function ImageComparisonSlider({
    leftImage,
    rightImage,
    leftLabel = "Failed Spec",
    rightLabel = "Passed Spec",
    className = "aspect-video",
}: {
    leftImage: string;
    rightImage: string;
    leftLabel?: string;
    rightLabel?: string;
    className?: string;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState(0);

    // X represents pixels from the left edge
    const x = useMotionValue(0);

    // Watch resizing to keep slider bounded
    useEffect(() => {
        if (containerRef.current) {
            const width = containerRef.current.offsetWidth;
            setContainerWidth(width);
            x.set(width / 2); // Start explicitly in the middle
        }

        const handleResize = () => {
            if (containerRef.current) {
                const newWidth = containerRef.current.offsetWidth;
                // Maintain percentage ratio horizontally
                const currentRatio = x.get() / (containerWidth || 1);
                setContainerWidth(newWidth);
                x.set(newWidth * (isNaN(currentRatio) ? 0.5 : currentRatio));
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [containerWidth, x]);

    // Map X pixel position to a percentage string for CSS clip-path
    const clipPercentage = useTransform(x, [0, containerWidth || 1000], ["0%", "100%"]);
    const clipPath = useTransform(clipPercentage, (val) => `polygon(0 0, ${val} 0, ${val} 100%, 0 100%)`);

    return (
        <div
            ref={containerRef}
            className={`relative w-full rounded-2xl overflow-hidden shadow-glass-lg select-none group touch-none ${className}`}
        >
            {/* Background Image (Right Side / Passed Spec) */}
            <div className="absolute inset-0 z-0">
                <Image src={rightImage} alt={rightLabel} fill className="object-cover" />
                <div className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full z-10 shadow-lg border border-white/10">
                    {rightLabel}
                </div>
            </div>

            {/* Foreground Image (Left Side / Failed Spec) - Masked by clip-path GPU acceleration */}
            <motion.div
                className="absolute inset-0 z-10"
                style={{ clipPath }}
            >
                <Image src={leftImage} alt={leftLabel} fill className="object-cover" />
                <div className="absolute bottom-6 left-6 bg-red-500/80 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full z-10 shadow-lg border border-white/20">
                    {leftLabel}
                </div>
            </motion.div>

            {/* Hardware-accelerated Drag Handle */}
            <motion.div
                className="absolute top-0 bottom-0 w-[2px] bg-white dark:bg-slate-950 cursor-ew-resize z-20 flex items-center justify-center -ml-[1px] shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                style={{ x }}
                drag="x"
                dragConstraints={{ left: 0, right: containerWidth }}
                dragElastic={0}
                dragMomentum={false}
            >
                <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-950 shadow-[0_0_20px_rgba(0,0,0,0.4)] flex items-center justify-center ring-1 ring-slate-200 dark:ring-slate-700 transition-transform group-hover:scale-110">
                    <GripVertical className="h-5 w-5 text-ctr-slate dark:text-white" />
                </div>
            </motion.div>
        </div>
    );
}
