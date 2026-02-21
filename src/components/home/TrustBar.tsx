import { Container } from '@/components/ui/Container';

export function TrustBar() {
    return (
        <div className="bg-white dark:bg-slate-950 py-12 sm:py-16">
            <Container>
                <p className="text-center text-sm font-semibold leading-8 text-slate-500 dark:text-slate-400">
                    Trusted by global brands and repair chains
                </p>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    {/* Placeholders for logos */}
                    <div className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 bg-slate-200 h-10 rounded text-center leading-10 text-xs text-slate-400">Partner 1</div>
                    <div className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 bg-slate-200 h-10 rounded text-center leading-10 text-xs text-slate-400">Partner 2</div>
                    <div className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 bg-slate-200 h-10 rounded text-center leading-10 text-xs text-slate-400">Partner 3</div>
                    <div className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 bg-slate-200 h-10 rounded text-center leading-10 text-xs text-slate-400">Partner 4</div>
                    <div className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 bg-slate-200 h-10 rounded text-center leading-10 text-xs text-slate-400">Partner 5</div>
                </div>
            </Container>
        </div>
    );
}
