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
        const adminEmail = process.env.NOTIFICATION_EMAIL || 'info@fintrivoratech.com';

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
            connectionTimeout: 10000,
            greetingTimeout: 10000,
            socketTimeout: 10000,
            logger: true,
            debug: true,
            tls: {
                rejectUnauthorized: false,
            },
        });

        const mailOptions = {
            from: '"Fintrivora Demo Request" <noreply@fintrivoratech.com>',
            to: adminEmail,
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
        try {
            await transporter.sendMail(mailOptions);
        } catch (smtpError) {
            console.warn('SMTP failed, attempting Brevo HTTP API fallback...', smtpError);
            const brevoApiKey = process.env.BREVO_API_KEY;
            if (brevoApiKey) {
                const response = await fetch('https://api.brevo.com/v3/smtp/email', {
                    method: 'POST',
                    headers: {
                        'accept': 'application/json',
                        'api-key': brevoApiKey,
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        sender: {
                            name: "Fintrivora Demo Request",
                            email: "noreply@fintrivoratech.com"
                        },
                        to: [
                            {
                                email: adminEmail,
                                name: "Admin"
                            }
                        ],
                        replyTo: {
                            email: email,
                            name: name
                        },
                        subject: `New Demo Request from ${name} (${company})`,
                        textContent: `
Name: ${name}
Email: ${email}
Company: ${company}
Industry: ${industry}
Use Case / Requirements:
${useCase}
                        `,
                        htmlContent: `
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
                        `
                    })
                });

                if (!response.ok) {
                    const errText = await response.text();
                    throw new Error(`Brevo HTTP API Fallback failed: ${errText}`);
                }
                console.log('Successfully sent email via Brevo HTTP API fallback');
            } else {
                throw smtpError;
            }
        }

        return NextResponse.json({ success: true });
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        console.error('SMTP Error (Demo):', error);
        return NextResponse.json({ error: 'Failed to send message. Please try again later.' }, { status: 500 });
    }
}
