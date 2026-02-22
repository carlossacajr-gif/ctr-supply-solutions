import { Container } from '@/components/ui/Container';
import { useTranslations } from 'next-intl';

export function HowItWorks() {
    const t = useTranslations('HowItWorks');

    const steps = [
        {
            id: '01',
            name: t('steps.s1.name'),
            description: t('steps.s1.desc'),
        },
        {
            id: '02',
            name: t('steps.s2.name'),
            description: t('steps.s2.desc'),
        },
        {
            id: '03',
            name: t('steps.s3.name'),
            description: t('steps.s3.desc'),
        },
        {
            id: '04',
            name: t('steps.s4.name'),
            description: t('steps.s4.desc'),
        },
    ];


    return (
        <section id="how-it-works" className="bg-slate-50 py-24 sm:py-32">
            <Container>
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-ctr-blue">{t('badge')}</h2>
                    <p className="mt-2 text-3xl font-heading font-bold tracking-tight text-ctr-slate sm:text-4xl">
                        {t('title')}
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                        {steps.map((step) => (
                            <div key={step.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-ctr-slate">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-ctr-blue text-white font-bold">
                                        {step.id}
                                    </div>
                                    {step.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-slate-600">{step.description}</dd>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
