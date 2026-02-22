import { Link } from '@/navigation';
import { Container } from '@/components/ui/Container';
import { ShieldCheck, Globe2, Gauge, Search } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function ServicesSection() {
    const t = useTranslations('Services');

    const services = [
        {
            name: t('s1.name'),
            description: t('s1.desc'),
            icon: ShieldCheck,
            href: '/services#qc',
        },
        {
            name: t('s2.name'),
            description: t('s2.desc'),
            icon: Globe2,
            href: '/services#sourcing',
        },
        {
            name: t('s3.name'),
            description: t('s3.desc'),
            icon: Gauge,
            href: '/services#testing',
        },
        {
            name: t('s4.name'),
            description: t('s4.desc'),
            icon: Search,
            href: '/services#audit',
        },
    ];


    return (
        <section className="py-24 bg-white sm:py-32">
            <Container>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-ctr-blue">{t('badge')}</h2>
                    <p className="mt-2 text-3xl font-heading font-bold tracking-tight text-ctr-slate sm:text-4xl">
                        {t('title')}
                    </p>
                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        {t('desc')}
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
                        {services.map((service) => (
                            <div key={service.name} className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-ctr-slate">
                                    <service.icon className="h-5 w-5 flex-none text-ctr-blue" aria-hidden="true" />
                                    {service.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                                    <p className="flex-auto">{service.description}</p>
                                    <p className="mt-6">
                                        <Link href={service.href} className="text-sm font-semibold leading-6 text-ctr-blue hover:text-sky-600">
                                            {t('link')} <span aria-hidden="true">→</span>
                                        </Link>
                                    </p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </Container>
        </section>
    );
}
