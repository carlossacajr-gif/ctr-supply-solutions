"use client";

import { useState } from 'react';
import { FadeIn } from './motion/FadeIn';
import { Button } from './Button';
import { Input } from '@/components/ui/Input';
import { Send, FileCheck, CheckCircle2 } from 'lucide-react';

export function LeadCapture() {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

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
                                Exclusive Technical Guide
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Download our 2026 Shenzhen <span className="text-ctr-blue">Factory Audit</span> Checklist
                            </h2>
                            <p className="text-slate-400 text-lg mb-0 leading-relaxed max-w-lg">
                                Ensure your supply chain stays resilient. Get the exact 10-step onsite verification document our engineers use in the field.
                            </p>
                        </div>

                        <div>
                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                                    <div className="flex-grow">
                                        <Input
                                            type="email"
                                            placeholder="Enter your professional email"
                                            value={email}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                            className="h-14 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:ring-ctr-blue focus:border-ctr-blue transition-all"
                                            required
                                        />
                                    </div>
                                    <Button type="submit" className="h-14 px-8 bg-ctr-blue hover:bg-white hover:text-ctr-slate transition-all whitespace-nowrap">
                                        Get Free PDF
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
                                            <h4 className="text-white font-bold">Checklist Sent!</h4>
                                            <p className="text-slate-500 text-sm">Check your inbox for the PDF download link.</p>
                                        </div>
                                    </div>
                                </FadeIn>
                            )}
                            <p className="mt-4 text-xs text-slate-500">
                                Join 500+ procurement managers receiving monthly China supply chain insights. No spam.
                            </p>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}
