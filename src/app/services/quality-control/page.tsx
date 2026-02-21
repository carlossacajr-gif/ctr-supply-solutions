import { ServiceLayout } from '@/components/services/ServiceLayout';
import { CheckCircle2, AlertTriangle, FileCheck, Shield, Microscope, ClipboardCheck } from 'lucide-react';
import Image from 'next/image';
import { FadeIn } from '@/components/ui/motion/FadeIn';
import { ImageComparisonSlider } from '@/components/ui/motion/ImageComparisonSlider';

const features = [
    {
        title: 'Pre-shipment Inspection (PSI)',
        desc: 'The gold standard. We check 10-20% of finished goods securely packed to ensure they meet your AQL standards.',
        icon: Shield
    },
    {
        title: 'During Production Inspection (DUPRO)',
        desc: 'Catch defects early. We inspect goods coming off the line when 20-50% are completed to fix issues before they become disasters.',
        icon: AlertTriangle
    },
    {
        title: 'Container Loading Check (CLC)',
        desc: 'Ensure the right quantity and right cartons are loaded. We supervise the loading process at the factory or warehouse.',
        icon: CheckCircle2
    },
    {
        title: 'Factory Audit & Verification',
        desc: 'Is your factory real? We verify business licenses, production capacity, machine maintenance, and worker conditions.',
        icon: FileCheck
    },
];

export default function QualityControlPage() {
    return (
        <ServiceLayout
            title="Quality Control Services"
            description="Stop quality fade before it starts. Our inspectors are onsite in Shenzhen factories to ensure your product meets spec."
        >
            {/* Hero Image Injection */}
            <div className="relative rounded-2xl overflow-hidden mb-16 aspect-video md:aspect-[21/9] shadow-2xl">
                <Image
                    src="/images/services/quality-control/qc-hero.webp"
                    alt="Quality Control Inspection"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                    <p className="text-white font-mono text-sm bg-black/50 inline-block px-2 py-1 rounded mb-2">
                        LOCATION: SHENZHEN, GUANGDONG
                    </p>
                </div>
            </div>

            {/* Split Layout: Features + Action Image */}
            <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
                <div className="flex-1 w-full lg:w-1/2">
                    <div className="grid grid-cols-1 gap-6">
                        {features.map((feature, idx) => (
                            <FadeIn key={idx} delay={idx * 0.1}>
                                <div className="flex gap-4 p-6 rounded-xl glass-white shadow-glass hover:shadow-glass-lg transition-all duration-300 group">
                                    <div className="h-12 w-12 rounded-full bg-ctr-slate/5 flex items-center justify-center flex-shrink-0 group-hover:bg-ctr-blue/10 transition-colors">
                                        <feature.icon className="h-6 w-6 text-ctr-blue" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-ctr-slate dark:text-white mb-2">{feature.title}</h3>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                            {feature.desc}
                                        </p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>

                <div className="flex-1 w-full lg:w-1/2">
                    <FadeIn direction="left" delay={0.2}>
                        <ImageComparisonSlider
                            leftImage="/images/services/quality-control/qc-failed.png"
                            rightImage="/images/services/quality-control/qc-passed.png"
                            leftLabel="Failed Form (Micro-fractures)"
                            rightLabel="Passed Spec (Machined)"
                            className="h-[600px]"
                        />
                    </FadeIn>
                </div>
            </div>

            <FadeIn>
                <div className="p-8 bg-slate-50 dark:bg-slate-900 border-l-4 border-ctr-blue rounded-r-xl relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute right-0 top-0 opacity-10">
                        <Microscope className="w-64 h-64 text-ctr-blue" />
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-xl font-bold text-ctr-slate dark:text-white mb-4">Why Presence Matters</h3>
                        <p className="text-slate-700 dark:text-slate-300 max-w-2xl">
                            Quality control in China is about presence. If you aren't there, corners are cut.
                            CTR Supply Solutions acts as your dedicated quality department on the ground.
                            You receive a detailed PDF report with photos and video within 24 hours of inspection.
                        </p>
                    </div>
                </div>
            </FadeIn>
        </ServiceLayout>
    );
}
