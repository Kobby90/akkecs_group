import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnalyticsProvider from "@/components/analytics/AnalyticsProvider";
import { Providers } from "@/components/Providers";
import JSONLD from "@/components/seo/JSONLD";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  metadataBase: new URL('https://www.fintrivoratech.com'),
  title: {
    default: "Fintrivora - Asset Management & Pension Fund Solutions",
    template: "%s | Fintrivora"
  },
  description: "Advanced enterprise software solutions for Asset Management and Pension Fund Administration. Streamline operations with real-time analytics and elite security.",
  keywords: [
    "Asset Management Software",
    "Pension Fund Administration",
    "Investment Management Solutions",
    "Pension Scheme Management",
    "Portfolio Analytics",
    "Institutional Finance",
    "Fintech Solution",
    "Wealth Management Software",
    "Financial Operations",
    "SaaS Asset Management",
    "Pensions ERP"
  ],
  category: 'finance',
  classification: 'Business & Industrial > Financial Services',
  authors: [{ name: 'Fintrivora Tech' }],
  creator: 'Fintrivora Tech',
  publisher: 'Fintrivora Tech',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.fintrivoratech.com',
    siteName: 'Fintrivora',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Fintrivora Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fintrivora - Asset Management & Pension Fund Solutions',
    description: 'Advanced enterprise software solutions for Asset Management and Pension Fund Administration.',
    images: ['/logo.png'],
  },
  icons: {
    icon: '/logo.png',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        {/* Privacy-compliant analytics will be handled by AnalyticsProvider */}
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <Providers>
          <JSONLD />
          <Navbar />

          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
          <AnalyticsProvider />
        </Providers>
      </body>
    </html>
  );
}
