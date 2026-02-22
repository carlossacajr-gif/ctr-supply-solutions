import { Shield, Target, Award, Cpu, Settings, Package } from 'lucide-react';

export const INDUSTRY_DATA = {
    'electronics': {
        title: 'Electronics & PCB Assembly',
        subtitle: 'High-precision manufacturing for the next generation of hardware.',
        description: 'From IoT devices to high-performance computing, we manage the entire electronics supply chain in Shenzhen. Our onsite engineers ensure component authenticity and IPC-standard assembly quality.',
        heroImage: '/images/home/hero-bg.webp', // Reuse high-quality existing asset
        features: [
            {
                title: 'Component Traceability',
                description: 'Rigorous auditing of component sources to eliminate counterfeit parts and ensure long-term reliability.',
                icon: Cpu
            },
            {
                title: 'IPC-A-610 Compliance',
                description: 'Onsite technicians verified to international soldering and assembly standards.',
                icon: Shield
            },
            {
                title: 'Functional Testing',
                description: 'Custom test jig development to verify 100% of boards before they leave the factory floor.',
                icon: Target
            }
        ],
        stats: [
            { label: 'Defect Rate', value: '< 0.02%' },
            { label: 'Lead Time', value: '14-21 Days' },
            { label: 'Min. Quantity', value: '100 Units' }
        ]
    },
    'cnc-machining': {
        title: 'Precision CNC Machining',
        subtitle: 'Sub-micron tolerances for aerospace, medical, and industrial applications.',
        description: 'Shenzhen and Dongguan are the global hubs for precision machining. We intercept "Quality Fade" by verifying raw material certifications and auditing CMM calibration onsite.',
        heroImage: '/images/services/quality-control/qc-hero.webp',
        features: [
            {
                title: 'Material Certification',
                description: 'Chemical analysis of raw alloys to ensure Grade 5 Titanium or 7075 Aluminum is authentic.',
                icon: Award
            },
            {
                title: '5-Axis Verification',
                description: 'Physical audit of machine capabilities to ensure micro-tolerance precision across complex geometries.',
                icon: Settings
            },
            {
                title: 'Post-Processing Audit',
                description: 'Ensuring consistent anodizing, bead blasting, and heat treatment across all batches.',
                icon: Shield
            }
        ],
        stats: [
            { label: 'Tolerance', value: '±0.005mm' },
            { label: 'Capacity', value: '50,000 pts/mo' },
            { label: 'Materials', value: '50+ Alloys' }
        ]
    },
    'wholesale': {
        title: 'B2B Wholesale & Distribution',
        subtitle: 'Native-priced procurement for high-volume retail and repair chains.',
        description: 'Leveraging our deep connections in the Huaqiangbei ecosystem and direct factory relationships to secure native pricing on consumer electronics and repair parts.',
        heroImage: '/images/services/logistics/logistics-hero.webp',
        features: [
            {
                title: 'Native Negotiation',
                description: 'Mandarin-first procurement removing the "foreigner premium" from high-volume orders.',
                icon: Target
            },
            {
                title: 'Batch Consistency',
                description: 'Rigorous AQL inspections to ensure every container meets retail-grade specifications.',
                icon: Package
            },
            {
                title: 'Global Fulfillment',
                description: 'DDP shipping solutions that handle customs and duties directly to your regional warehouses.',
                icon: Target
            }
        ],
        stats: [
            { label: 'Price Savings', value: '15-30%' },
            { label: 'QC Pass Rate', value: '99.9%' },
            { label: 'Global Ports', value: '120+' }
        ]
    }
};
