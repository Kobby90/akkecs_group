import { Metadata } from 'next';
import HomeContent from '@/components/pages/HomeContent';

export const metadata: Metadata = {
  title: 'FINTRIVORA - Next-Gen Asset Management & Pension Fund Solutions',
  description: 'Empowering modern financial institutions with streamlined operations, real-time analytics, and uncompromising security. Professional software solutions for Asset Management and Pension Fund Administration.',
  alternates: {
    canonical: 'https://www.fintrivoratech.com/',
  },
  openGraph: {
    title: 'FINTRIVORA - Next-Gen Asset Management & Pension Fund Solutions',
    description: 'Empowering modern financial institutions with streamlined operations, real-time analytics, and uncompromising security.',
    url: 'https://www.fintrivoratech.com/',
    siteName: 'FINTRIVORA',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'FINTRIVORA Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function Home() {
  return <HomeContent />;
}
