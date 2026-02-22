"use client";

import { useLocale } from 'next-intl';
import { locales, usePathname, useRouter } from '@/navigation';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const localeNames: Record<string, string> = {
    en: 'English',
    es: 'Español',
    zh: '中文',
    it: 'Italiano',
    pt: 'Português',
    de: 'Deutsch',
    fr: 'Français'
};

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const onLanguageChange = (nextLocale: string) => {
        router.replace(pathname, { locale: nextLocale });
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-slate-100 transition-colors text-slate-600 font-medium"
            >
                <Globe className="w-4 h-4 text-ctr-blue" />
                <span className="text-sm uppercase">{locale}</span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute right-0 mt-2 w-40 bg-white border border-slate-100 rounded-2xl shadow-2xl overflow-hidden z-[100]"
                    >
                        <div className="p-1">
                            {locales.map((l) => (
                                <button
                                    key={l}
                                    onClick={() => onLanguageChange(l)}
                                    className={cn(
                                        "w-full text-left px-4 py-3 text-sm font-medium transition-colors rounded-xl",
                                        locale === l
                                            ? "bg-ctr-blue/10 text-ctr-blue"
                                            : "text-slate-600 hover:bg-slate-50"
                                    )}
                                >
                                    {localeNames[l]}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
