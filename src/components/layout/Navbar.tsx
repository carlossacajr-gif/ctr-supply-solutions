"use client";

import { useState, useEffect } from 'react';
import { Link } from '@/navigation';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { MagneticButton } from '@/components/ui/motion/MagneticButton';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { useTranslations } from 'next-intl';

export function Navbar() {
    const t = useTranslations('Navbar');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    const navigation = [
        { name: t('solutions'), href: '/services' },
        { name: t('wholesale'), href: '/wholesale' },
        { name: t('resources'), href: '/resources' },
        { name: t('about'), href: '/about' },
        { name: t('contact'), href: '/contact' },
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setMobileMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;

        if (latest > 10) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }

        if (latest > previous && latest > 150) {
            setHidden(true);
        } else if (latest < previous) {
            setHidden(false);
        }
    });

    return (
        <>
            <motion.header
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 will-change-transform ${isScrolled
                    ? 'bg-white/80 backdrop-blur-xl border-b border-white/50 shadow-[0_2px_20px_rgba(0,0,0,0.04)]'
                    : 'bg-white border-b border-slate-100 shadow-none'
                    }`}
            >
                <nav className="flex items-center justify-between py-4 px-6 lg:px-8" aria-label="Global">
                    <Container className="flex w-full items-center justify-between">
                        <div className="flex lg:flex-1">
                            <Link href="/" className="-m-1.5 p-1.5 flex items-center">
                                <Image
                                    src="/images/brand/logo.svg"
                                    alt="CTR Supply Solutions - China Sourcing & Quality Control Experts"
                                    width={160}
                                    height={48}
                                    className="h-10 w-auto"
                                    priority
                                />
                            </Link>
                        </div>
                        <div className="flex lg:hidden gap-4">
                            <LanguageSwitcher />
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-ctr-slate"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                <span className="sr-only">Toggle main menu</span>
                                {mobileMenuOpen ? (
                                    <X className="h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <Menu className="h-6 w-6" aria-hidden="true" />
                                )}
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-12">
                            {navigation.map((item) => (
                                <Link key={item.name} href={item.href as any} className="text-sm font-semibold leading-6 text-ctr-slate hover:text-ctr-blue transition-colors">
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-6 items-center">
                            <LanguageSwitcher />
                            <Link href="/contact">
                                <MagneticButton>
                                    <Button size="sm" variant="primary">{t('getStarted')}</Button>
                                </MagneticButton>
                            </Link>
                        </div>
                    </Container>
                </nav>
            </motion.header>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 lg:hidden"
                        role="dialog"
                        aria-modal="true"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        <motion.div
                            initial={{ y: "-100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-100%" }}
                            transition={{ type: "spring", damping: 28, stiffness: 250 }}
                            className="absolute inset-x-0 top-0 w-full overflow-y-auto bg-white px-6 pb-8 pt-28 shadow-2xl flex flex-col rounded-b-3xl"
                        >
                            <div className="flex flex-col gap-2 flex-1">
                                {navigation.map((item, i) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ x: 30, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ x: 30, opacity: 0 }}
                                        transition={{ delay: 0.1 + (i * 0.05), type: "spring", stiffness: 300, damping: 24 }}
                                    >
                                        <Link
                                            href={item.href as any}
                                            className="-mx-3 block rounded-xl px-4 py-4 text-2xl font-heading font-bold leading-7 text-ctr-slate hover:bg-slate-50 hover:text-ctr-blue transition-all active:scale-[0.98]"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 20, opacity: 0 }}
                                transition={{ delay: 0.3 }}
                                className="mt-auto pt-8 border-t border-slate-100 flex items-center justify-between gap-4"
                            >
                                <Link
                                    href="/contact"
                                    className="flex flex-1 items-center justify-center rounded-xl px-4 py-4 text-center text-lg font-bold text-white bg-ctr-blue hover:bg-ctr-blue/90 shadow-lg shadow-ctr-blue/30 transition-all active:scale-[0.98]"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {t('getStarted')}
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
