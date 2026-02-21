"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SplashLoader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Only run the splash screen once per session
        const hasPlayed = sessionStorage.getItem('ctr-splash-played');

        if (hasPlayed) {
            setIsLoading(false);
            return;
        }

        // Lock background scroll during splash
        document.body.style.overflow = 'hidden';

        const timer = setTimeout(() => {
            sessionStorage.setItem('ctr-splash-played', 'true');
            setIsLoading(false);
            document.body.style.overflow = '';
        }, 1500);

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
                    className="fixed inset-0 z-[99999] flex items-center justify-center bg-white dark:bg-slate-950"
                >
                    <div className="relative flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="flex items-center gap-3"
                        >
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-ctr-blue">
                                <motion.path
                                    d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM36.1714 24.6857L25.3714 35.4857C24.6171 36.24 23.3829 36.24 22.6286 35.4857L11.8286 24.6857C11.0743 23.9314 11.0743 22.6971 11.8286 21.9429C12.5829 21.1886 13.8171 21.1886 14.5714 21.9429L22.0571 29.4286V13.7143C22.0571 12.6514 22.9257 11.7714 24 11.7714C25.0743 11.7714 25.9429 12.6514 25.9429 13.7143V29.4286L33.4286 21.9429C34.1829 21.1886 35.4171 21.1886 36.1714 21.9429C36.9257 22.6971 36.9257 23.9314 36.1714 24.6857Z"
                                    fill="currentColor"
                                    initial={{ pathLength: 0, fillOpacity: 0 }}
                                    animate={{ pathLength: 1, fillOpacity: 1 }}
                                    transition={{ duration: 1.2, ease: "easeInOut" }}
                                />
                            </svg>
                            <span className="text-2xl font-heading font-bold text-ctr-slate dark:text-white tracking-tight">CTR Supply</span>
                        </motion.div>

                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1.2, delay: 0.2, ease: "anticipate" }}
                            className="absolute -bottom-6 left-0 right-0 h-0.5 bg-ctr-blue/20 overflow-hidden rounded-full"
                        >
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{ duration: 1.2, delay: 0.2, ease: "circInOut" }}
                                className="w-full h-full bg-ctr-blue"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
