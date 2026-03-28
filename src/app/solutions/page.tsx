import { Metadata } from 'next';
import SolutionsContent from '@/components/pages/SolutionsContent';

export const metadata: Metadata = {
  title: 'Asset Management & Pension Administration Solutions',
  description: 'Enterprise asset management software, pension fund administration systems, and financial data analytics. Scalable, secure, and customizable fintech ecosystems.',
  keywords: [
    'Asset Management Solutions',
    'Pension Fund Administration Software',
    'Financial Analytics Platform',
    'Investment Management Systems',
    'Institutional Fintech',
    'SaaS Pension Software',
    'Multicurrency Asset Tracking'
  ],
  alternates: {
    canonical: 'https://www.fintrivoratech.com/solutions/',
  },
  openGraph: {
    title: 'Asset Management & Pension Administration Solutions | Fintrivora',
    description: 'Comprehensive software ecosystems for asset management, pension fund administration, and financial analytics.',
    url: 'https://www.fintrivoratech.com/solutions/',
    siteName: 'Fintrivora',
    images: [
      {
        url: '/asset-management.jpg',
        width: 1200,
        height: 630,
        alt: 'Fintrivora Asset Management Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asset Management & Pension Administration Solutions | Fintrivora',
    description: 'Comprehensive software ecosystems for asset management, pension fund administration, and financial analytics.',
    images: ['/asset-management.jpg'],
  },
};


export default function Solutions() {
  return <SolutionsContent />;
}