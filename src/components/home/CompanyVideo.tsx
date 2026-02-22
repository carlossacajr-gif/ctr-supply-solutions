import { Container } from '@/components/ui/Container';
import { Play } from 'lucide-react';
import { FadeIn } from '@/components/ui/motion/FadeIn';
import { useTranslations } from 'next-intl';

export function CompanyVideo() {
    const t = useTranslations('Video');

    return (
        <section className="relative py-20 sm:py-24 bg-ctr-dark overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ctr-blue/10 rounded-full blur-[120px] pointer-events-none" />

            <Container className="relative z-10">
                <div className="mx-auto max-w-4xl text-center mb-12">
                    <FadeIn>
                        <h2 className="text-3xl font-heading font-bold tracking-tight text-white sm:text-4xl mb-4">
                            {t('title')}
                        </h2>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                            {t('desc')}
                        </p>
                    </FadeIn>
                </div>

                <FadeIn delay={0.2} className="mx-auto max-w-5xl">
                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-glass-lg bg-slate-900 ring-1 ring-white/10">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/X263_cirHO0?rel=0"
                            title="CTR Supply Solutions Company Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </div>
                </FadeIn>
            </Container>
        </section>
    );
}
