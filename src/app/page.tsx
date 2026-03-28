import { Metadata } from 'next';
import HomeContent from '@/components/pages/HomeContent';

export const metadata: Metadata = {
  title: 'Asset Management & Pension Fund Software Solutions',
  description: 'Enterprise asset management software and pension fund administration systems. Empowering modern financial institutions with real-time analytics and elite security.',
  keywords: [
    'Asset Management Software',
    'Pension Fund Administration System',
    'Investment Management Platform',
    'Pension Administration Software',
    'Institutional Portfolio Management',
    'Defined Benefit Pension Software',
    'SaaS Asset Management platform',
    'Investment Reporting Tools'
  ],
  alternates: {
    canonical: 'https://www.fintrivoratech.com/',
  },
  openGraph: {
    title: 'Asset Management & Pension Fund Software Solutions | Fintrivora',
    description: 'Enterprise asset management software and pension fund administration systems for modern financial institutions.',
    url: 'https://www.fintrivoratech.com/',
    siteName: 'Fintrivora',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Fintrivora Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asset Management & Pension Fund Software Solutions | Fintrivora',
    description: 'Enterprise asset management software and pension fund administration systems for modern financial institutions.',
    images: ['/logo.png'],
  },
};


export default function Home() {
  return <HomeContent />;
}
