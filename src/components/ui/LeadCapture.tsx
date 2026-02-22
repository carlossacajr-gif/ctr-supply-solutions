"use client";

import { useState } from 'react';
import { FadeIn } from './motion/FadeIn';
import { Button } from './Button';
import { Input } from '@/components/ui/Input';
import { Send, FileCheck, CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function LeadCapture() {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const t = useTranslations('Resources.lead');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            // In a real app, this would connect to ConvertKit, Mailchimp, etc.
            setIsSubmitted(true);
        }
    };

    return (
        <section className="py-16">
            <FadeIn>
                <div className="relative overflow-hidden rounded-[2rem] bg-ctr-slate p-8 md:p-12">
                    {/* Background Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-ctr-blue/10 blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-ctr-blue/5 blur-[80px] translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ctr-blue/20 text-ctr-blue text-xs font-bold mb-6 uppercase tracking-widest">
                                <FileCheck className="w-4 h-4" />
                                {t('badge')}
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                {t('title')} <span className="text-ctr-blue">{t('title_highlight')}</span> {t('title_end')}
                            </h2>
                            <p className="text-slate-400 text-lg mb-0 leading-relaxed max-w-lg">
                                {t('desc')}
                            </p>
                        </div>

                        <div>
                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                                    <div className="flex-grow">
                                        <Input
                                            type="email"
                                            placeholder={t('placeholder')}
                                            value={email}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                            className="h-14 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:ring-ctr-blue focus:border-ctr-blue transition-all"
                                            required
                                        />
                                    </div>
                                    <Button type="submit" className="h-14 px-8 bg-ctr-blue hover:bg-white hover:text-ctr-slate transition-all whitespace-nowrap">
                                        {t('btn')}
                                        <Send className="ml-2 w-4 h-4" />
                                    </Button>
                                </form>
                            ) : (
                                <FadeIn>
                                    <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                                        <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center">
                                            <CheckCircle2 className="w-6 h-6 text-green-500" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold">{t('success_title')}</h4>
                                            <p className="text-slate-500 text-sm">{t('success_desc')}</p>
                                        </div>
                                    </div>
                                </FadeIn>
                            )}
                            <p className="mt-4 text-xs text-slate-500">
                                {t('trust')}
                            </p>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}
