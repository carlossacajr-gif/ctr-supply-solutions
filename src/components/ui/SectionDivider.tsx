interface SectionDividerProps {
    /** Tailwind fill-* colour for the wave shape */
    fillClass?: string;
    /** Extra classes on the wrapping div (e.g. bg colour above the wave) */
    className?: string;
    /** Flip the wave vertically */
    flip?: boolean;
}

/**
 * Renders an SVG wave that creates a smooth, organic transition between
 * two sections.  Place it *between* two sections; set fillClass to match
 * the colour of the section *below* the wave.
 *
 * Example – dark hero → white content:
 *   <SectionDivider fillClass="fill-white" className="bg-ctr-dark" />
 */
export function SectionDivider({ fillClass = 'fill-white', className = '', flip = false }: SectionDividerProps) {
    return (
        <div className={`relative -mb-px overflow-hidden leading-none ${className}`} aria-hidden="true">
            <svg
                viewBox="0 0 1440 72"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`block w-full h-12 sm:h-16 ${flip ? 'rotate-180' : ''} ${fillClass}`}
            >
                <path d="M0,40 C360,80 1080,0 1440,40 L1440,72 L0,72 Z" />
            </svg>
        </div>
    );
}
