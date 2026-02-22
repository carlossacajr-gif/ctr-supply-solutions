import { ShieldCheck, Factory, Truck, Clock, User } from 'lucide-react';

export const RESOURCE_ARTICLES = {
    'verify-cnc-factory-china': {
        title: 'How to Verify a CNC Factory in China',
        excerpt: 'A 10-step checklist for auditing machine shops in Shenzhen and Dongguan to ensure micro-tolerance precision.',
        category: 'Quality Control',
        icon: ShieldCheck,
        readTime: '12 min read',
        author: 'CTR Engineering Team',
        content: `
            <p class="text-xl text-slate-600 leading-relaxed mb-8 font-medium">
                In the world of high-precision manufacturing, "Quality Fade" is the silent killer of hardware startups. One day your parts are perfect; the next, a 0.05mm deviation renders your entire batch useless.
            </p>

            <h2 class="text-3xl font-bold text-ctr-slate mt-12 mb-6">1. Verifying the Machine List</h2>
            <p class="mb-6">
                Never trust a PDF machine list. We physically verify the serial numbers of every 5-axis CNC machine onsite. If the factory claims to have GF Machining Solutions but you only see aging Haas clones, turn around.
            </p>

            <h2 class="text-3xl font-bold text-ctr-slate mt-12 mb-6">2. Material Traceability</h2>
            <p class="mb-6">
                Material substitution is the most common cost-cutting tactic. We demand material certifications (MTRs) and often perform spot chemical analysis using XRF guns during our onsite audits to ensure Grade 5 Titanium is actually Grade 5.
            </p>

            <div class="p-8 rounded-2xl bg-slate-50 border border-slate-100 my-10">
                <h4 class="font-bold text-ctr-blue mb-4 uppercase tracking-widest text-sm">Pro Tip</h4>
                <p class="text-slate-700 italic">"Always check the coolant. A factory with dirty, smelly coolant is a factory that doesn't care about tool life or surface finish."</p>
            </div>

            <h2 class="text-3xl font-bold text-ctr-slate mt-12 mb-6">3. The Inspection Room (IPQC)</h2>
            <p class="mb-6">
                A great factory is only as good as its measuring tools. We audit the calibration dates on their CMMs (Coordinate Measuring Machines) and optical comparators. If their calibration certificate is expired, their quality control is imaginary.
            </p>
        `
    },
    'native-sourcing-china': {
        title: 'Native Sourcing: Beyond Tourist Rates',
        excerpt: 'How our local bilingual team intercepts "foreigner premiums" to secure native pricing from manufacturers.',
        category: 'Sourcing',
        icon: Factory,
        readTime: '10 min read',
        author: 'CTR Sourcing Team',
        content: `
            <p class="text-xl text-slate-600 leading-relaxed mb-8 font-medium">
                There are two price lists in China: the Global Export list and the Native Domestic list. If you are communicating in English via Alibaba, you are seeing the first one.
            </p>

            <h2 class="text-3xl font-bold text-ctr-slate mt-12 mb-6">The "Lao Wai" Tax</h2>
            <p class="mb-6">
                Factories often bake a 15-30% buffer into quotes for international clients. This isn't just greed—it's risk mitigation for communication barriers. Our team eliminates this by negotiating in Mandarin, using local contracts, and removing the "risk premium" from the equation.
            </p>

            <h2 class="text-3xl font-bold text-ctr-slate mt-12 mb-6">Consolidated Negotiating Power</h2>
            <p class="mb-6">
                Because CTR manages millions of dollars in annual spend across our client base, we negotiate as a "Bulk Buyer" rather than a single small startup. This gives us leverage even when your specific order volume is low.
            </p>
        `
    },
    'ddp-vs-cif-incoterms': {
        title: 'DDP vs CIF: Choosing the Right Incoterm',
        excerpt: 'Understanding the hidden costs and risks of international freight forwarding from China to the West.',
        category: 'Logistics',
        icon: Truck,
        readTime: '15 min read',
        author: 'CTR Logistics Group',
        content: `
            <p class="text-xl text-slate-600 leading-relaxed mb-8 font-medium">
                Logistics is where most profit margins go to die. Choosing the wrong Incoterm can result in thousands of dollars in "Arrival Fees" that you didn't budget for.
            </p>

            <h2 class="text-3xl font-bold text-ctr-slate mt-12 mb-6">The CIF Trap</h2>
            <p class="mb-6">
                CIF (Cost, Insurance, and Freight) sounds convenient—the factory handles everything to your port. However, once that ship docks, you are at the mercy of the port agents. We often see hidden "Handling Fees" that exceed the cost of the actual ocean freight.
            </p>

            <h2 class="text-3xl font-bold text-ctr-slate mt-12 mb-6">Why We Recommend DDP for Small/Medium Enterprises</h2>
            <p class="mb-6">
                Delivered Duty Paid (DDP) is the "Amazon Prime" of logistics. The price you see is the price you pay to your door. CTR handles the customs brokerage, the duties, and the final mile delivery, ensuring no surprises at the border.
            </p>
        `
    }
};
