import { Link } from '@/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { useTranslations } from 'next-intl';

export function Hero() {
    const t = useTranslations('Hero');

    return (
        <div className="relative isolate overflow-hidden bg-ctr-slate pb-16 pt-14 sm:pb-20">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10 h-full w-full">
                <Image
                    src="/images/home/hero.webp"
                    alt="CTR Supply Solutions high-tech industrial manufacturing and supply chain hub"
                    fill
                    className="object-cover object-center opacity-30"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/80 to-slate-900/40" />

                {/* Organic Blob Trend #5 */}
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-ctr-blue/20 blur-[100px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <Container className="pt-24 lg:pt-32">
                <div className="mx-auto max-w-2xl py-8 lg:py-12">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-slate-300 ring-1 ring-white/10 hover:ring-white/20">
                            {t('tagline_start')} <Link href="/about" className="font-semibold text-ctr-blue"><span className="absolute inset-0" aria-hidden="true" />{t('tagline_link')} <span aria-hidden="true">&rarr;</span></Link>
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-4xl font-heading font-bold tracking-tight text-white sm:text-6xl">
                            {t('title')}
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-slate-300">
                            {t('desc')}
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link href="/contact">
                                <Button size="lg">{t('btn_primary')}</Button>
                            </Link>
                            <Link href="/services" className="text-sm font-semibold leading-6 text-white hover:text-ctr-blue transition-colors">
                                {t('btn_secondary')} <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
