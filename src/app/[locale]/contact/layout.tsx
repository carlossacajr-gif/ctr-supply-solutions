import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Our Shenzhen Office',
    description: 'Get an executable manufacturing plan within 48 hours. Contact our team in Shenzhen to discuss your sourcing, QC, or logistics needs.',
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
