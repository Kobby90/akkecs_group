import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        // The modal sends { templateId: 8, params: formData }
        const { params } = body;
        const { name, email, company, industry, useCase } = params || body;

        // Verify SMTP configuration
        const host = process.env.SMTP_HOST;
        const port = Number(process.env.SMTP_PORT);
        const user = process.env.SMTP_USER;
        const pass = process.env.SMTP_PASS;

        if (!host || !port || !user || !pass) {
            console.error('SMTP configuration missing:', { host: !!host, port: !!port, user: !!user, pass: !!pass });
            return NextResponse.json({ error: 'Mail server not configured correctly' }, { status: 500 });
        }

        // Create nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: host,
            port: port,
            secure: port === 465,
            auth: {
                user: user,
                pass: pass,
            },
        });

        // Email to Admin
        const mailOptions = {
            from: `"Fintrivora Demo Request" <${user}>`,
            to: 'info@fintrivoratech.com',
            replyTo: email,
            subject: `New Demo Request from ${name} (${company})`,
            text: `
Name: ${name}
Email: ${email}
Company: ${company}
Industry: ${industry}
Use Case / Requirements:
${useCase}
            `,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
                    <h2 style="color: #2563eb;">New Demo Request</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Company:</strong> ${company}</p>
                    <p><strong>Industry:</strong> ${industry}</p>
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                    <p><strong>Use Case / Requirements:</strong></p>
                    <p style="white-space: pre-wrap;">${useCase}</p>
                </div>
            `,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        console.error('SMTP Error (Demo):', error);
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
