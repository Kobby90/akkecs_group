import nodemailer from 'nodemailer';

const host = process.env.SMTP_HOST;
const port = Number(process.env.SMTP_PORT);
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;

// Use globalThis to maintain singleton during development hot-reloads
const globalForNodemailer = globalThis as unknown as {
  transporter: nodemailer.Transporter | undefined;
};

export const transporter =
  globalForNodemailer.transporter ||
  (host && port && user && pass
    ? nodemailer.createTransport({
        host,
        port,
        secure: port === 465, // true for 465, false for other ports
        auth: {
          user,
          pass,
        },
        connectionTimeout: 10000,
        greetingTimeout: 10000,
        socketTimeout: 10000,
        logger: true,
        debug: true,
        tls: {
          rejectUnauthorized: false,
        },
      })
    : null);

if (process.env.NODE_ENV !== 'production') {
  globalForNodemailer.transporter = transporter || undefined;
}
