"use client";

import React from 'react';

export default function JSONLD() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Fintrivora",
    "url": "https://www.fintrivoratech.com",
    "logo": "https://www.fintrivoratech.com/logo.png",
    "description": "Enterprise software solutions for Asset Management and Pension Fund Administration.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Nigeria" // Adjust if needed
    },
    "sameAs": [
      // Add social media links here if available
    ]
  };

  const softwareData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Fintrivora Asset Management System",
    "operatingSystem": "Web",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0", // Enterprise pricing usually hidden or "Contact for Quote"
      "priceCurrency": "USD"
    },
    "description": "Comprehensive software ecosystem for asset managers and pension fund administrators."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareData) }}
      />
    </>
  );
}
