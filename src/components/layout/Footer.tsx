import { Link } from '@/navigation';
import Image from 'next/image';
import { Container } from '../ui/Container';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Footer() {
    const t = useTranslations('Footer');

    const footerNavigation = {
        solutions: [
            { name: t('nav.solutions.quality'), href: '/services/quality-control' },
            { name: t('nav.solutions.sourcing'), href: '/services/sourcing' },
            { name: t('nav.solutions.logistics'), href: '/services/logistics' },
            { name: t('nav.solutions.wholesale'), href: '/wholesale' },
        ],
        industries: [
            { name: t('nav.industries.pcb'), href: '/industries/electronics' },
            { name: t('nav.industries.cnc'), href: '/industries/cnc-machining' },
            { name: t('nav.industries.repair'), href: '/industries/wholesale' },
        ],
        company: [
            { name: t('nav.company.about'), href: '/about' },
            { name: t('nav.company.work'), href: '/#how-it-works' },
            { name: t('nav.company.contact'), href: '/contact' },
        ],
        resources: [
            { name: t('nav.resources.guides'), href: '/resources' },
            { name: t('nav.resources.audit'), href: '/resources/verify-cnc-factory-china' },
            { name: t('nav.resources.native'), href: '/resources/native-sourcing-china' },
            { name: t('nav.resources.incoterms'), href: '/resources/ddp-vs-cif-incoterms' },
        ],
        connect: [
            { name: 'LinkedIn', href: 'https://www.linkedin.com/company/ctr-supply-solutions/about/?viewAsMember=true' },
            { name: 'WhatsApp', href: 'https://api.whatsapp.com/send/?phone=8613638645191&text&type=phone_number&app_absent=0' },
            { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61565334421726' },
            { name: 'Instagram', href: 'https://www.instagram.com/ctrsupplysolutions/' },
        ],
    };

    return (
        <footer className="bg-ctr-slate text-white py-12 lg:py-16 border-t border-slate-800" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>

            <Container className="relative z-10">
                {/* Mega Footer CTA */}
                <div className="border-b border-white/10 pb-16 mb-16">
                    <h2 className="text-4xl sm:text-6xl md:text-8xl font-heading font-bold tracking-tighter text-white mb-6">
                        {t('cta.title')}
                    </h2>
                    <Link href="/contact" className="group inline-flex items-center gap-3 text-lg sm:text-xl font-semibold text-ctr-blue hover:text-white transition-colors duration-300">
                        {t('cta.btn_start')}
                        <ArrowUpRight className="h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                </div>

                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <Link href="/" className="inline-block group">
                            <Image
                                src="/images/brand/logo-white.svg"
                                alt="CTR Supply Solutions - Your On-Site Sourcing Partner in China"
                                width={160}
                                height={48}
                                className="h-10 w-auto group-hover:scale-105 transition-transform origin-left"
                            />
                        </Link>
                        <p className="text-sm leading-6 text-slate-400 max-w-xs">
                            {t('brand.desc')}
                        </p>
                        <div className="flex flex-col gap-3 text-sm text-slate-400">
                            <div className="flex items-center gap-2 hover:text-white transition-colors">
                                <MapPin className="h-4 w-4 text-ctr-blue flex-shrink-0" />
                                <span>{t('brand.location')}</span>
                            </div>
                            <div className="flex items-center gap-2 hover:text-white transition-colors">
                                <Mail className="h-4 w-4 text-ctr-blue flex-shrink-0" />
                                <span>info@ctrsupplysolutions.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 xl:col-span-2 xl:mt-0">
                        <div>
                            <h3 className="text-xs font-semibold leading-6 text-slate-400 uppercase tracking-widest">{t('nav.solutions.label')}</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                {footerNavigation.solutions.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-sm leading-6 text-slate-300 hover:text-white transition-colors duration-200">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xs font-semibold leading-6 text-slate-400 uppercase tracking-widest">{t('nav.industries.label')}</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                {footerNavigation.industries.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-sm leading-6 text-slate-300 hover:text-white transition-colors duration-200">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xs font-semibold leading-6 text-slate-400 uppercase tracking-widest">{t('nav.company.label')}</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                {footerNavigation.company.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-sm leading-6 text-slate-300 hover:text-white transition-colors duration-200">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xs font-semibold leading-6 text-slate-400 uppercase tracking-widest">{t('nav.resources.label')}</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                {footerNavigation.resources.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-sm leading-6 text-slate-300 hover:text-white transition-colors duration-200">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-16 xl:grid xl:grid-cols-3 xl:gap-8 items-center border-t border-white/10 pt-8">
                    <div className="col-span-1">
                        <h3 className="text-xs font-semibold leading-6 text-slate-400 uppercase tracking-widest mb-6">{t('connect.label')}</h3>
                        <ul role="list" className="flex flex-wrap gap-x-8 gap-y-4">
                            {footerNavigation.connect.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm leading-6 text-slate-300 hover:text-white transition-colors duration-200 inline-flex items-center gap-1">
                                        {item.name}
                                        <ArrowUpRight className="h-3 w-3" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-span-2 mt-8 xl:mt-0 xl:text-right">
                        <p className="text-xs leading-5 text-slate-500">
                            &copy; {new Date().getFullYear()} {t('copyright')}
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
