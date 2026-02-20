import { Container } from '@/components/ui/Container';

interface ServiceHeaderProps {
    title: string;
    description: string;
}

export function ServiceHeader({ title, description }: ServiceHeaderProps) {
    return (
        <div className="bg-ctr-slate py-24 sm:py-32">
            <Container>
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-heading font-bold tracking-tight text-white sm:text-6xl">
                        {title}
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-slate-300">
                        {description}
                    </p>
                </div>
            </Container>
        </div>
    );
}
