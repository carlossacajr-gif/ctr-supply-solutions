import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export function Hero() {
    return (
        <div className="relative isolate overflow-hidden bg-ctr-slate pb-16 pt-14 sm:pb-20">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10 h-full w-full">
                <Image
                    src="/images/home/hero.webp"
                    alt="Industrial Supply Chain Background"
                    fill
                    sizes="100vw"
                    quality={90}
                    className="object-cover object-center opacity-30"
                    priority
                    fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/80 to-slate-900/40" />

                {/* Organic Blob Trend #5 */}
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-ctr-blue/20 blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[100px]" />
            </div>

            <Container className="pt-24 lg:pt-32">
                <div className="mx-auto max-w-2xl py-8 lg:py-12">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-slate-300 ring-1 ring-white/10 hover:ring-white/20">
                            Your boots-on-the-ground team in Shenzhen. <Link href="/about" className="font-semibold text-ctr-blue"><span className="absolute inset-0" aria-hidden="true" />Read more <span aria-hidden="true">&rarr;</span></Link>
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-4xl font-heading font-bold tracking-tight text-white sm:text-6xl">
                            End-to-End Supply Chain Solutions
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-slate-300">
                            We don't just find suppliers. We verify, audit, and test to ensure your supply chain never breaks. From factory floor compliance to final component testing.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link href="/contact">
                                <Button size="lg">Start Your Project</Button>
                            </Link>
                            <Link href="/services" className="text-sm font-semibold leading-6 text-white hover:text-ctr-blue transition-colors">
                                Explore Services <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
