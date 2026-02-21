import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../ui/Container';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';

const footerNavigation = {
    solutions: [
        { name: 'Quality Control', href: '/services/quality-control' },
        { name: 'Sourcing', href: '/services/sourcing' },
        { name: 'Logistics', href: '/services/logistics' },
        { name: 'Wholesale', href: '/wholesale' },
    ],
    company: [
        { name: 'About Us', href: '/about' },
        { name: 'How We Work', href: '/#how-it-works' },
        { name: 'Contact', href: '/contact' },
    ],
    connect: [
        { name: 'LinkedIn', href: 'https://www.linkedin.com/company/ctr-supply-solutions/about/?viewAsMember=true' },
        { name: 'WhatsApp', href: 'https://api.whatsapp.com/send/?phone=8613638645191&text&type=phone_number&app_absent=0' },
        { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61565334421726' },
        { name: 'Instagram', href: 'https://www.instagram.com/ctrsupplysolutions/' },
    ],
};

export function Footer() {
    return (
        <footer className="bg-ctr-slate text-white py-12 lg:py-16 border-t border-slate-800" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>

            <Container className="relative z-10">
                {/* Mega Footer CTA */}
                <div className="border-b border-white/10 pb-16 mb-16">
                    <h2 className="text-4xl sm:text-6xl md:text-8xl font-heading font-bold tracking-tighter text-white mb-6">
                        Ready to Scale?
                    </h2>
                    <Link href="/contact" className="group inline-flex items-center gap-3 text-lg sm:text-xl font-semibold text-ctr-blue hover:text-white transition-colors duration-300">
                        Start Your Project
                        <ArrowUpRight className="h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                </div>

                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <Link href="/" className="inline-block group">
                            <Image
                                src="/images/brand/logo-white.svg"
                                alt="CTR Supply Solutions"
                                width={160}
                                height={48}
                                className="h-10 w-auto group-hover:scale-105 transition-transform origin-left"
                            />
                        </Link>
                        <p className="text-sm leading-6 text-slate-400 max-w-xs">
                            Your boots-on-the-ground partner in Shenzhen. Ensuring quality, stability, and ethical sourcing for global businesses.
                        </p>
                        <div className="flex flex-col gap-3 text-sm text-slate-400">
                            <div className="flex items-center gap-2 hover:text-white transition-colors">
                                <MapPin className="h-4 w-4 text-ctr-blue flex-shrink-0" />
                                <span>Shenzhen, China</span>
                            </div>
                            <div className="flex items-center gap-2 hover:text-white transition-colors">
                                <Mail className="h-4 w-4 text-ctr-blue flex-shrink-0" />
                                <span>info@ctrsupplysolutions.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-xs font-semibold leading-6 text-slate-400 uppercase tracking-widest">Solutions</h3>
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
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-xs font-semibold leading-6 text-slate-400 uppercase tracking-widest">Company</h3>
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
                        </div>
                        <div>
                            <h3 className="text-xs font-semibold leading-6 text-slate-400 uppercase tracking-widest">Connect</h3>
                            <ul role="list" className="mt-6 space-y-4">
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
                    </div>
                </div>
                <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-slate-500">
                        &copy; {new Date().getFullYear()} CTR Supply Solutions. All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
}
