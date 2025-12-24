import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, company, phone, message } = body;

        const apiKey = process.env.V3_API;

        if (!apiKey) {
            return NextResponse.json({ error: 'API Key not configured' }, { status: 500 });
        }

        const response = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'api-key': apiKey,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                templateId: 7,
                to: [{ email: 'info@akkecsgroup.com', name: 'Akkecs Group Admin' }],
                params: {
                    name,
                    email,
                    company: company || 'N/A',
                    phone: phone || 'N/A',
                    message,
                },
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            return NextResponse.json({ message: data.message || 'Brevo API error' }, { status: response.status });
        }

        return NextResponse.json({ success: true, data });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
