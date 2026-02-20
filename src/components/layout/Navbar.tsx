"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { MagneticButton } from '@/components/ui/motion/MagneticButton';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const navigation = [
    { name: 'Solutions', href: '/services' },
    { name: 'Wholesale', href: '/wholesale' },
    { name: 'How it Works', href: '/#how-it-works' },
    { name: 'About', href: '/about' },
];

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    // Fix: Close mobile menu when resizing to desktop to prevent layout bugs
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
        } else {
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
                className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 will-change-transform ${isScrolled
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
                                    alt="CTR Supply Solutions"
                                    width={160}
                                    height={48}
                                    className="h-10 w-auto"
                                    priority
                                />
                            </Link>
                        </div>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-ctr-slate"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Menu className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-12">
                            {navigation.map((item) => (
                                <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-ctr-slate hover:text-ctr-blue transition-colors">
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
                            <Link href="/contact">
                                <MagneticButton>
                                    <Button size="sm" variant="primary">Get a Quote</Button>
                                </MagneticButton>
                            </Link>
                        </div>
                    </Container>
                </nav>
            </motion.header>

            {/* Mobile menu shifted outside header to fix CSS stacking context bug */}
            {mobileMenuOpen && (
                <div className="lg:hidden" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 z-50 bg-slate-900/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
                    <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-slate-200/20 shadow-xl">
                        <div className="flex items-center justify-between">
                            <Link href="/" className="-m-1.5 p-1.5 flex items-center" onClick={() => setMobileMenuOpen(false)}>
                                <Image
                                    src="/images/brand/logo.svg"
                                    alt="CTR Supply Solutions"
                                    width={140}
                                    height={42}
                                    className="h-8 w-auto"
                                />
                            </Link>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <X className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-4 py-6">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-ctr-slate hover:bg-slate-50"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <Link
                                        href="/contact"
                                        className="-mx-3 block rounded-lg px-3 py-3 text-lg font-bold leading-7 text-white bg-ctr-blue hover:bg-ctr-blue/90 text-center"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Get a Quote
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
