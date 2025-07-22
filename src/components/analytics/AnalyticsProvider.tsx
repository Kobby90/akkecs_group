'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

interface AnalyticsSettings {
  gaId: string;
  gtmId: string;
  customScript: string;
}

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

      {/* Google Tag Manager */}
      {gtmId && (
        <>
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `}
          </Script>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        </>
      )}
    </>
  );
} 