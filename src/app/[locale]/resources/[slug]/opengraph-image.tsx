import { ImageResponse } from 'next/og';
import { getTranslations } from 'next-intl/server';
import { RESOURCE_ARTICLES } from '@/lib/resources-data';

export const runtime = 'edge';

export const alt = 'CTR Technical Resource';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string, locale: string } }) {
    const articleMeta = RESOURCE_ARTICLES[params.slug as keyof typeof RESOURCE_ARTICLES];
    if (!articleMeta) return new Response('Not Found', { status: 404 });

    const t = await getTranslations({ locale: params.locale || 'en', namespace: 'ResourcesData.articles' });
    const title = t(`${params.slug}.title`);
    const category = t(`${params.slug}.category`);

    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    backgroundColor: '#0F172A', // ctr-slate
                    backgroundImage: 'radial-gradient(circle at 25px 25px, #1E293B 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1E293B 2%, transparent 0%)',
                    backgroundSize: '100px 100px',
                    padding: '80px',
                    position: 'relative',
                }}
            >
                {/* Decorative Accent */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '400px',
                        height: '400px',
                        background: 'rgba(59, 130, 246, 0.15)', // ctr-blue with opacity
                        filter: 'blur(100px)',
                        borderRadius: '100%',
                        transform: 'translate(100px, -100px)',
                    }}
                />

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginBottom: '40px',
                    }}
                >
                    <div
                        style={{
                            height: '8px',
                            width: '48px',
                            backgroundColor: '#3B82F6', // ctr-blue
                            borderRadius: '4px',
                        }}
                    />
                    <span
                        style={{
                            color: '#3B82F6',
                            fontSize: '24px',
                            fontWeight: 'bold',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                        }}
                    >
                        Technical Resource Hub
                    </span>
                </div>

                <h1
                    style={{
                        fontSize: '72px',
                        fontWeight: 'bold',
                        color: 'white',
                        lineHeight: '1.1',
                        marginBottom: '24px',
                        maxWidth: '900px',
                    }}
                >
                    {title || 'CTR Supply Solutions'}
                </h1>

                <p
                    style={{
                        fontSize: '32px',
                        color: '#94A3B8', // slate-400
                        lineHeight: '1.4',
                        maxWidth: '800px',
                        marginBottom: '60px',
                    }}
                >
                    {category} • Expert Shenzhen Insights
                </p>

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px',
                        marginTop: 'auto',
                    }}
                >
                    <div
                        style={{
                            fontSize: '28px',
                            color: 'white',
                            fontWeight: 'bold',
                        }}
                    >
                        CTR
                    </div>
                    <div
                        style={{
                            fontSize: '28px',
                            color: '#3B82F6',
                            fontWeight: 'bold',
                        }}
                    >
                        SUPPLY SOLUTIONS
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
