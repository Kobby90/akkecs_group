import { Metadata } from 'next';
import ContactContent from '@/components/pages/ContactContent';

export const metadata: Metadata = {
  title: 'Contact Fintrivora | Asset Management & Pension Experts',
  description: 'Connect with Fintrivora for expert financial technology solutions. Request a demo of our asset management and pension administration systems.',
  keywords: [
    'Contact Fintrivora',
    'Asset Management Software Demo',
    'Pension System Consultation',
    'Financial Technology Support',
    'Enterprise Software Sales'
  ],
  alternates: {
    canonical: 'https://www.fintrivoratech.com/contact/',
  },
  openGraph: {
    title: 'Contact Fintrivora | Asset Management & Pension Experts',
    description: 'Connect with Fintrivora for expert financial technology solutions.',
    url: 'https://www.fintrivoratech.com/contact/',
    siteName: 'Fintrivora',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Contact Fintrivora',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};


export default function Contact() {
  return <ContactContent />;
}