"use client";

import { cn } from "@/lib/utils";
import { Link } from "@/navigation";
import Image from "next/image";
import { ReactNode } from "react";
import { ShieldCheck, Globe2, Gauge, Search, ArrowUpRight } from "lucide-react";
import { SpotlightCard } from "../ui/motion/SpotlightCard";
import { useTranslations } from "next-intl";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[20rem] grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
    href,
    learnMore,
}: {
    className?: string;
    title?: string | ReactNode;
    description?: string | ReactNode;
    header?: ReactNode;
    icon?: ReactNode;
    href?: string;
    learnMore?: string;
}) => {
    return (
        <SpotlightCard
            className={cn(
                "row-span-1 rounded-2xl group/bento hover:shadow-glass-lg transition-all duration-300 p-4 bg-white/80 backdrop-blur-sm border border-slate-200/60 hover:border-ctr-blue/20 hover:bg-white/90 justify-between flex flex-col space-y-4 relative overflow-hidden",
                className
            )}
        >
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                {icon}
                <div className="font-heading font-bold text-ctr-slate mb-2 mt-2">
                    {title}
                </div>
                <div className="font-sans font-normal text-slate-600 text-sm">
                    {description}
                </div>
                {href && (
                    <Link href={href} className="mt-4 flex items-center text-sm font-semibold text-ctr-blue">
                        {learnMore || 'Learn more'} <ArrowUpRight className="h-4 w-4 ml-1" />
                    </Link>
                )}
            </div>
        </SpotlightCard>
    );
};

import { FadeIn } from "../ui/motion/FadeIn";

export function ServicesBento() {
    const t = useTranslations('ServicesBento');

    const items = [
        {
            title: t('qc.title'),
            description: t('qc.desc'),
            header: (
                <div className="relative flex flex-1 w-full h-full min-h-[14rem] md:min-h-[8rem] rounded-xl overflow-hidden">
                    <Image
                        src="/images/home/bento-quality.webp"
                        alt="Professional Quality Control inspector verifying electronics components in a Shenzhen factory"
                        fill
                        className="object-cover transition-transform duration-500 group-hover/bento:scale-110"
                    />
                    <div className="absolute inset-0 bg-slate-900/10 group-hover/bento:bg-slate-900/0 transition-colors" />
                </div>
            ),
            icon: <ShieldCheck className="h-4 w-4 text-ctr-blue" />,
            href: "/services/quality-control",
            learnMore: t('learnMore')
        },
        {
            title: t('sourcing.title'),
            description: t('sourcing.desc'),
            header: (
                <div className="relative flex flex-1 w-full h-full min-h-[14rem] md:min-h-[8rem] rounded-xl overflow-hidden">
                    <Image
                        src="/images/home/bento-sourcing.webp"
                        alt="China sourcing expert negotiating with a manufacturer in a high-tech facility"
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover/bento:scale-110"
                    />
                </div>
            ),
            icon: <Globe2 className="h-4 w-4 text-ctr-blue" />,
            href: "/services/sourcing",
            learnMore: t('learnMore')
        },
        {
            title: t('testing.title'),
            description: t('testing.desc'),
            header: (
                <div className="relative flex flex-1 w-full h-full min-h-[14rem] md:min-h-[8rem] rounded-xl overflow-hidden">
                    <Image
                        src="/images/home/bento-testing.webp"
                        alt="Precision component testing using advanced laboratory equipment"
                        fill
                        className="object-cover transition-transform duration-500 group-hover/bento:scale-110"
                    />
                </div>
            ),
            icon: <Gauge className="h-4 w-4 text-ctr-blue" />,
            href: "/services/quality-control",
            learnMore: t('learnMore')
        },
        {
            title: t('logistics.title'),
            description: t('logistics.desc'),
            header: (
                <div className="relative flex flex-1 w-full h-full min-h-[14rem] md:min-h-[8rem] rounded-xl overflow-hidden">
                    <Image
                        src="/images/home/bento-logistics.webp"
                        alt="Global shipping logistics container ship moving freight from China to the world"
                        fill
                        className="object-cover object-bottom transition-transform duration-500 group-hover/bento:scale-110"
                    />
                </div>
            ),
            icon: <Search className="h-4 w-4 text-ctr-blue" />,
            href: "/services/logistics",
            learnMore: t('learnMore')
        },
    ];

    return (
        <BentoGrid className="max-w-4xl mx-auto">
            {items.map((item, i) => (
                <FadeIn key={i} delay={i * 0.1} className={cn(i === 3 || i === 6 ? "md:col-span-2" : "")}>
                    <BentoGridItem
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className="h-full"
                        href={item.href}
                        learnMore={item.learnMore}
                    />
                </FadeIn>
            ))}
        </BentoGrid>
    );
}

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100" />
);
