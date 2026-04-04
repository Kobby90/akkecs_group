'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Script from 'next/script';
import { useCookieConsent } from '@/context/CookieContext';

export default function AnalyticsProvider() {
  const pathname = usePathname();
  const { settings } = useCookieConsent();
  
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  
  // Enable analytics if GA ID or GTM ID is provided and the user has consented
  const isAnalyticsAllowed = settings?.analytics === true;
  
  const isProduction = process.env.NODE_ENV === 'production';
  const isVercelProduction = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production';
  const isEnabled = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true';
  
  const shouldRun = (isProduction || isVercelProduction || isEnabled) && isAnalyticsAllowed;

  useEffect(() => {
    if (shouldRun && gaId && (window as any).gtag) {
      (window as any).gtag('config', gaId, {
        page_path: pathname,
      });
    }
  }, [pathname, gaId, shouldRun]);

  if (!shouldRun || (!gaId && !gtmId)) {
    return null;
  }

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
               gtag('config', '${gaId}', {
                 page_path: window.location.pathname,
               });
             `}
           </Script>
         </>
      )}


      {/* Google Tag Manager */}
      {gtmId && (
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `}
        </Script>
      )}
    </>
  );
}