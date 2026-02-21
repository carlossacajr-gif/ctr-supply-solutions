import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { ShieldCheck, Globe2, Gauge, Search } from 'lucide-react';

const services = [
    {
        name: 'Quality Control',
        description: 'Pre-shipment inspections and factory audits to ensure zero defects.',
        icon: ShieldCheck,
        href: '/services#qc',
    },
    {
        name: 'Global Sourcing',
        description: 'Direct access to verified manufacturers in Shenzhen and beyond.',
        icon: Globe2,
        href: '/services#sourcing',
    },
    {
        name: 'Component Testing',
        description: 'Lab-grade testing for electronics and raw materials.',
        icon: Gauge,
        href: '/services#testing',
    },
    {
        name: 'Supply Chain Audit',
        description: 'Deep-dive verification of supplier capabilities and ethics.',
        icon: Search,
        href: '/services#audit',
    },
];

export function ServicesSection() {
    return (
        <section className="py-24 bg-white sm:py-32">
            <Container>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-ctr-blue">Our Expertise</h2>
                    <p className="mt-2 text-3xl font-heading font-bold tracking-tight text-ctr-slate sm:text-4xl">
                        Everything you need to source with confidence
                    </p>
                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        We act as your eyes and ears on the factory floor, protecting your brand from quality fade and supply chain risks.
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
                                            Learn more <span aria-hidden="true">→</span>
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
