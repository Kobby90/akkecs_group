'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';


export default function AnalyticsProvider() {
  const [isProduction] = useState(process.env.NEXT_PUBLIC_VERCEL_ENV === 'production');
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    // Check if analytics should be enabled based on environment
    const shouldEnableAnalytics = isProduction || process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true';
    setAnalyticsEnabled(shouldEnableAnalytics);
  }, [isProduction]);

  if (!analyticsEnabled) {
    return null;
  }

  // Use environment variables for analytics IDs
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <>
      {/* Google Analytics 4 */}
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}
          </Script>
        </>
      )}

    </>
  );
}