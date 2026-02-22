import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // 1. Log the lead locally for debugging
        console.log('[LEAD CAPTURED] New inquiry:', data);

        // 2. Validate environment variable
        const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
        if (!SENDGRID_API_KEY) {
            console.warn('[LEAD ROUTER] SENDGRID_API_KEY is not set. The lead was captured but not emailed. In production, set this environment variable.');
            return NextResponse.json({
                success: true,
                message: 'Inquiry received successfully. (Simulated delivery - API key missing)'
            });
        }

        // 3. Send email via SendGrid
        sgMail.setApiKey(SENDGRID_API_KEY);

        const msg = {
            to: process.env.SALES_EMAIL || 'carlos@ctrsupplysolutions.com',
            from: process.env.SYSTEM_EMAIL || 'noreply@ctrsupplysolutions.com',
            subject: `New Technical Inquiry: ${data.name || 'Unknown Client'}`,
            text: `A new inquiry has been submitted.\n\nDetails:\n${JSON.stringify(data, null, 2)}`,
            html: `
                <h3>New Technical Inquiry Received</h3>
                <table border="1" cellpadding="5" cellspacing="0" style="text-align: left; border-collapse: collapse; min-width: 400px;">
                    <tr><th style="padding: 8px;">Key</th><th style="padding: 8px;">Value</th></tr>
                    ${Object.entries(data).map(([key, value]) => `<tr><td style="padding: 8px;"><strong>${key}</strong></td><td style="padding: 8px;">${value}</td></tr>`).join('')}
                </table>
            `,
        };

        await sgMail.send(msg);

        return NextResponse.json({
            success: true,
            message: 'Inquiry received successfully. Our engineering team will review your project.'
        });

    } catch (error) {
        console.error('[LEAD ROUTER] Error handling lead:', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to process inquiry. Please try again later.'
        }, { status: 500 });
    }
}
