import { Metadata } from 'next';
import ContactContent from '@/components/pages/ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us - FINTRIVORA',
  description: 'Get in touch with the FINTRIVORA team. We are here to help you transform your financial operations with next-gen enterprise systems.',
  alternates: {
    canonical: 'https://www.fintrivoratech.com/contact/',
  },
  openGraph: {
    title: 'Contact Us - FINTRIVORA',
    description: 'Connect with FINTRIVORA for expert financial technology solutions.',
    url: 'https://www.fintrivoratech.com/contact/',
    siteName: 'FINTRIVORA',
    images: [
      {
        url: '/Daniel1.png',
        width: 1200,
        height: 630,
        alt: 'Contact FINTRIVORA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function Contact() {
  return <ContactContent />;
}