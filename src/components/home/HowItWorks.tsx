import { Container } from '@/components/ui/Container';

const steps = [
    {
        id: '01',
        name: 'Send Your Spec',
        description: 'Share your product requirements, target price, and quality standards.',
    },
    {
        id: '02',
        name: 'We Verify & Source',
        description: 'Our team identifies the best qualified factories and conducts initial audits.',
    },
    {
        id: '03',
        name: 'Sample & Test',
        description: 'We procure samples and run independent functionality testing.',
    },
    {
        id: '04',
        name: 'Production & QC',
        description: 'Ongoing monitoring during mass production with final pre-shipment inspection.',
    },
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="bg-slate-50 dark:bg-slate-900 py-24 sm:py-32">
            <Container>
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-ctr-blue">Process</h2>
                    <p className="mt-2 text-3xl font-heading font-bold tracking-tight text-ctr-slate dark:text-white sm:text-4xl">
                        How we work
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                        {steps.map((step) => (
                            <div key={step.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-ctr-slate dark:text-white">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-ctr-blue text-white font-bold">
                                        {step.id}
                                    </div>
                                    {step.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-slate-600 dark:text-slate-400">{step.description}</dd>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
