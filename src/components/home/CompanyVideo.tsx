import { Container } from '@/components/ui/Container';
import { Play } from 'lucide-react';
import { FadeIn } from '@/components/ui/motion/FadeIn';

export function CompanyVideo() {
    return (
        <section className="relative py-20 sm:py-24 bg-ctr-dark overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ctr-blue/10 rounded-full blur-[120px] pointer-events-none" />

            <Container className="relative z-10">
                <div className="mx-auto max-w-4xl text-center mb-12">
                    <FadeIn>
                        <h2 className="text-3xl font-heading font-bold tracking-tight text-white sm:text-4xl mb-4">
                            Inside Our Operations
                        </h2>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                            Take a look inside our Shenzhen operations and see how we secure supply chains for global brands.
                        </p>
                    </FadeIn>
                </div>

                <FadeIn delay={0.2} className="mx-auto max-w-5xl">
                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden glass-dark ring-1 ring-white/10 shadow-glass-lg group cursor-pointer bg-slate-900/80 flex items-center justify-center">

                        {/* Placeholder Content - Replace this entire div with an iframe or <video> tag when the actual video is ready */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-20">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-ctr-blue/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-ctr-blue/40 transition-all duration-300 ring-1 ring-white/20 backdrop-blur-md">
                                <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-2" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Company Video Placeholder</h3>
                            <p className="text-sm sm:text-base text-slate-400 max-w-md">
                                Replace this component with an embedded YouTube/Vimeo player or a direct HTML5 &lt;video&gt; tag loading a local .mp4 file.
                            </p>
                        </div>

                        {/* Faux thumbnail gradient to make the placeholder look pretty */}
                        <div className="absolute inset-0 bg-gradient-to-br from-ctr-blue/20 via-slate-900 to-ctr-cyan/20 opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                    </div>
                </FadeIn>
            </Container>
        </section>
    );
}
