"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { FadeIn } from '@/components/ui/motion/FadeIn';
import {
    CheckCircle2,
    ArrowRight,
    ChevronLeft,
    Building2,
    Truck,
    Cpu,
    Settings,
    Target,
    Upload,
    ShieldCheck,
    Globe
} from 'lucide-react';
import { cn } from '@/lib/utils';

type FormData = {
    industry: string;
    volume: string;
    technicalSpecs: string;
    company: string;
    email: string;
    firstName: string;
    lastName: string;
};

const industries = [
    { id: 'electronics', label: 'Electronics', icon: Cpu },
    { id: 'cnc', label: 'CNC Machining', icon: Settings },
    { id: 'wholesale', label: 'Wholesale/Retail', icon: Globe },
    { id: 'other', label: 'Other Manufacturing', icon: Building2 },
];

export function TechnicalInquiry() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        industry: '',
        volume: '',
        technicalSpecs: '',
        company: '',
        email: '',
        firstName: '',
        lastName: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                alert('Technical error submitting inquiry. Please try direct email: info@ctrsupplysolutions.com');
            }
        } catch (error) {
            console.error('Submission failed:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const updateField = (field: keyof FormData, value: string) => {
        setFormData({ ...formData, [field]: value });
    };

    return (
        <div className="max-w-4xl mx-auto">
            {!isSubmitted ? (
                <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
                    {/* Progress Bar */}
                    <div className="h-2 bg-slate-100 flex">
                        {[1, 2, 3, 4].map((s) => (
                            <div
                                key={s}
                                className={cn(
                                    "flex-grow transition-all duration-500",
                                    step >= s ? "bg-ctr-blue" : "bg-transparent"
                                )}
                            />
                        ))}
                    </div>

                    <div className="p-8 md:p-12">
                        <form onSubmit={handleSubmit}>
                            <AnimatePresence mode="wait">
                                {step === 1 && (
                                    <motion.div
                                        key="step1"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                    >
                                        <h3 className="text-2xl font-bold text-ctr-slate mb-2">Select Your Industry</h3>
                                        <p className="text-slate-500 mb-8">This helps us assign the right engineering team to your project.</p>

                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                            {industries.map((ind) => (
                                                <button
                                                    key={ind.id}
                                                    type="button"
                                                    onClick={() => updateField('industry', ind.id)}
                                                    className={cn(
                                                        "p-6 rounded-2xl border-2 transition-all flex flex-col items-center gap-4 text-center group",
                                                        formData.industry === ind.id
                                                            ? "border-ctr-blue bg-ctr-blue/5"
                                                            : "border-slate-100 hover:border-ctr-blue/30 bg-slate-50"
                                                    )}
                                                >
                                                    <ind.icon className={cn(
                                                        "w-8 h-8 transition-colors",
                                                        formData.industry === ind.id ? "text-ctr-blue" : "text-slate-400 group-hover:text-ctr-blue/50"
                                                    )} />
                                                    <span className={cn(
                                                        "text-sm font-bold",
                                                        formData.industry === ind.id ? "text-ctr-slate" : "text-slate-500"
                                                    )}>{ind.label}</span>
                                                </button>
                                            ))}
                                        </div>

                                        <div className="flex justify-end">
                                            <Button
                                                type="button"
                                                onClick={nextStep}
                                                disabled={!formData.industry}
                                                className="bg-ctr-blue"
                                            >
                                                Continue <ArrowRight className="ml-2 w-4 h-4" />
                                            </Button>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 2 && (
                                    <motion.div
                                        key="step2"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                    >
                                        <button onClick={prevStep} className="flex items-center gap-2 text-slate-400 hover:text-ctr-blue mb-6 text-sm font-bold uppercase tracking-widest">
                                            <ChevronLeft className="w-4 h-4" /> Back
                                        </button>
                                        <h3 className="text-2xl font-bold text-ctr-slate mb-2">Project Volume & Scale</h3>
                                        <p className="text-slate-500 mb-8">Are you scaling a prototype or managing high-volume mass production?</p>

                                        <div className="space-y-4 mb-8">
                                            {[
                                                { id: 'pilot', label: 'Pilot/Verification Batch (100 - 500 units)', icon: Target },
                                                { id: 'scale', label: 'Mass Production Scale (500 - 5,000 units)', icon: Truck },
                                                { id: 'enterprise', label: 'Enterprise/High-Volume (5,000+ units)', icon: Globe },
                                            ].map((v) => (
                                                <button
                                                    key={v.id}
                                                    type="button"
                                                    onClick={() => updateField('volume', v.id)}
                                                    className={cn(
                                                        "w-full p-6 p-6 rounded-2xl border-2 transition-all flex items-center gap-6 group",
                                                        formData.volume === v.id
                                                            ? "border-ctr-blue bg-ctr-blue/5 shadow-lg shadow-ctr-blue/5"
                                                            : "border-slate-100 hover:border-ctr-blue/20 bg-slate-50"
                                                    )}
                                                >
                                                    <div className={cn(
                                                        "h-12 w-12 rounded-xl flex items-center justify-center transition-colors",
                                                        formData.volume === v.id ? "bg-ctr-blue text-white" : "bg-white text-slate-400"
                                                    )}>
                                                        <v.icon className="w-6 h-6" />
                                                    </div>
                                                    <span className={cn(
                                                        "text-lg font-bold",
                                                        formData.volume === v.id ? "text-ctr-slate" : "text-slate-600"
                                                    )}>{v.label}</span>
                                                </button>
                                            ))}
                                        </div>

                                        <div className="flex justify-end">
                                            <Button
                                                type="button"
                                                onClick={nextStep}
                                                disabled={!formData.volume}
                                                className="bg-ctr-blue"
                                            >
                                                Technical Specs <ArrowRight className="ml-2 w-4 h-4" />
                                            </Button>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 3 && (
                                    <motion.div
                                        key="step3"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                    >
                                        <button onClick={prevStep} className="flex items-center gap-2 text-slate-400 hover:text-ctr-blue mb-6 text-sm font-bold uppercase tracking-widest">
                                            <ChevronLeft className="w-4 h-4" /> Back
                                        </button>
                                        <h3 className="text-2xl font-bold text-ctr-slate mb-2">Technical Requirements</h3>
                                        <p className="text-slate-500 mb-8">List any specific tolerances, certifications (CE, UL, RoHS), or material standards.</p>

                                        <div className="space-y-6 mb-8">
                                            <textarea
                                                className="w-full h-40 p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-ctr-blue/50 focus:ring-4 focus:ring-ctr-blue/5 outline-none transition-all text-slate-700 placeholder:text-slate-400"
                                                placeholder="e.g. ±0.02mm tolerances on aluminum 6061 components, UL certification required, DDP shipping to USA."
                                                value={formData.technicalSpecs}
                                                onChange={(e) => updateField('technicalSpecs', e.target.value)}
                                            />

                                            <div className="p-8 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 flex flex-col items-center justify-center text-center hover:bg-slate-100/50 transition-colors cursor-pointer group">
                                                <Upload className="w-10 h-10 text-slate-300 mb-4 group-hover:text-ctr-blue transition-colors" />
                                                <h4 className="font-bold text-slate-700 mb-1">Upload Blueprints / RFQ</h4>
                                                <p className="text-sm text-slate-500">Drop your .PDF, .STEP, or .XLSX files here (Max 50MB)</p>
                                            </div>
                                        </div>

                                        <div className="flex justify-end">
                                            <Button
                                                type="button"
                                                onClick={nextStep}
                                                className="bg-ctr-blue"
                                            >
                                                Final Contact <ArrowRight className="ml-2 w-4 h-4" />
                                            </Button>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 4 && (
                                    <motion.div
                                        key="step4"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                    >
                                        <button onClick={prevStep} className="flex items-center gap-2 text-slate-400 hover:text-ctr-blue mb-6 text-sm font-bold uppercase tracking-widest">
                                            <ChevronLeft className="w-4 h-4" /> Back
                                        </button>
                                        <h3 className="text-2xl font-bold text-ctr-slate mb-2">Professional Details</h3>
                                        <p className="text-slate-500 mb-8">Complete your inquiry to receive a customized strategic sourcing plan.</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">First Name</label>
                                                <Input
                                                    placeholder="John"
                                                    value={formData.firstName}
                                                    onChange={(e) => updateField('firstName', e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Last Name</label>
                                                <Input
                                                    placeholder="Wick"
                                                    value={formData.lastName}
                                                    onChange={(e) => updateField('lastName', e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Company Website</label>
                                                <Input
                                                    placeholder="www.example.com"
                                                    value={formData.company}
                                                    onChange={(e) => updateField('company', e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Work Email</label>
                                                <Input
                                                    type="email"
                                                    placeholder="john@example.com"
                                                    value={formData.email}
                                                    onChange={(e) => updateField('email', e.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full h-14 bg-ctr-slate text-white hover:bg-ctr-blue transition-all text-lg"
                                        >
                                            {isSubmitting ? 'Processing Requirements...' : 'Submit Technical Inquiry'}
                                            {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5" />}
                                        </Button>
                                        <p className="mt-4 text-center text-xs text-slate-400">
                                            By submitting, you agree to our privacy policy and NDA standards.
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </div>
                </div>
            ) : (
                <FadeIn>
                    <div className="bg-white rounded-[2.5rem] p-12 text-center shadow-2xl border border-slate-100">
                        <div className="h-24 w-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce-subtle">
                            <CheckCircle2 className="w-12 h-12" />
                        </div>
                        <h2 className="text-4xl font-bold text-ctr-slate mb-4">Inquiry Received</h2>
                        <p className="text-xl text-slate-600 mb-10 max-w-xl mx-auto">
                            Thank you, {formData.firstName}. Our engineering lead for {formData.industry} will review your specs and contact you within 24 hours to schedule a deep-dive call.
                        </p>
                        <div className="bg-slate-50 rounded-2xl p-8 max-w-lg mx-auto border border-slate-100 flex items-start gap-4 text-left">
                            <ShieldCheck className="w-6 h-6 text-ctr-blue flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-ctr-slate">Confidentiality Guarantee</h4>
                                <p className="text-sm text-slate-500 mt-1">All blueprints and data sent via this form are protected by our master NDA. We never share proprietary designs with unqualified vendors.</p>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            )}
        </div>
    );
}
