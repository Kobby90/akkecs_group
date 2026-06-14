import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, company, phone, message } = body;

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
            secure: port === 465, // true for 465, false for other ports
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
            from: '"Fintrivora Contact Form" <noreply@fintrivoratech.com>',
            to: adminEmail,
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            text: `
Name: ${name}
Email: ${email}
Company: ${company || 'N/A'}
Phone: ${phone || 'N/A'}

Message:
${message}
            `,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
                    <h2 style="color: #2563eb;">New Contact Form Submission</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Company:</strong> ${company || 'N/A'}</p>
                    <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                    <p><strong>Message:</strong></p>
                    <p style="white-space: pre-wrap;">${message}</p>
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
                            name: "Fintrivora Contact Form",
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
                        subject: `New Contact Form Submission from ${name}`,
                        textContent: `
Name: ${name}
Email: ${email}
Company: ${company || 'N/A'}
Phone: ${phone || 'N/A'}

Message:
${message}
                        `,
                        htmlContent: `
                            <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
                                <h2 style="color: #2563eb;">New Contact Form Submission</h2>
                                <p><strong>Name:</strong> ${name}</p>
                                <p><strong>Email:</strong> ${email}</p>
                                <p><strong>Company:</strong> ${company || 'N/A'}</p>
                                <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                                <p><strong>Message:</strong></p>
                                <p style="white-space: pre-wrap;">${message}</p>
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
        console.error('SMTP Error:', error);
        return NextResponse.json({ error: 'Failed to send message. Please try again later.' }, { status: 500 });
    }
}
