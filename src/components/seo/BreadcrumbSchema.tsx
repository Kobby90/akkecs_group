"use client";

import { usePathname } from 'next/navigation';
import React from 'react';

export default function BreadcrumbSchema() {
  const pathname = usePathname();
  const baseUrl = 'https://www.fintrivoratech.com';

  // Don't show breadcrumbs on homepage
  if (pathname === '/' || pathname === '') {
    return null;
  }

  const pathSegments = pathname.split('/').filter(segment => segment !== '');
  
  const itemListElement = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": baseUrl
    }
  ];

  let currentPath = '';
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    itemListElement.push({
      "@type": "ListItem",
      "position": index + 2,
      "name": segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
      "item": `${baseUrl}${currentPath}/`
    });
  });

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": itemListElement
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
    />
  );
}
