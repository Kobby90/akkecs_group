import { NextResponse } from 'next/server';
import { transporter } from '@/utils/nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, company, phone, message } = body;

        const adminEmail = process.env.NOTIFICATION_EMAIL || 'info@fintrivoratech.com';

        if (!transporter) {
            console.error('SMTP transporter not initialized. Check your environment variables.');
            return NextResponse.json({ error: 'Mail server not configured correctly' }, { status: 500 });
        }

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
