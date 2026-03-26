import { Metadata } from 'next';
import SolutionsContent from '@/components/pages/SolutionsContent';

export const metadata: Metadata = {
  title: 'Enterprise Financial Solutions - FINTRIVORA',
  description: 'Comprehensive software ecosystems for asset management, pension fund administration, and financial analytics. Scalable, secure, and customizable solutions.',
  alternates: {
    canonical: 'https://www.fintrivoratech.com/solutions/',
  },
  openGraph: {
    title: 'Enterprise Financial Solutions - FINTRIVORA',
    description: 'Comprehensive software ecosystems for asset management, pension fund administration, and financial analytics.',
    url: 'https://www.fintrivoratech.com/solutions/',
    siteName: 'FINTRIVORA',
    images: [
      {
        url: '/asset-management.jpg',
        width: 1200,
        height: 630,
        alt: 'FINTRIVORA Asset Management Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function Solutions() {
  return <SolutionsContent />;
}