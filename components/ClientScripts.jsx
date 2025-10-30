"use client";

import { useEffect } from 'react';

export default function ClientScripts() {
  useEffect(() => {
    // Add JSON-LD structured data
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Kabini.ai',
      description: 'AI monitoring platform for Shopify stores to track and optimize product visibility across AI platforms like ChatGPT, Perplexity, Gemini, and Claude.',
      url: 'https://kabini.ai',
      logo: 'https://kabini.ai/logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-KABINI',
        contactType: 'customer service',
        email: 'hello@kabini.ai'
      },
      sameAs: [
        'https://twitter.com/KabiniAI',
        'https://www.linkedin.com/company/kabini-ai/',
        'https://www.facebook.com/kabiniAI/',
        'https://www.youtube.com/@KabiniAI'
      ],
      foundingDate: '2024',
      founders: [
        {
          '@type': 'Person',
          name: 'Kabini.ai Team'
        }
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'San Francisco',
        addressRegion: 'CA',
        addressCountry: 'US'
      }
    };

    // Add JSON-LD script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    // Add HubSpot script if portal ID is available
    if (process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID) {
      const hubspotScript = document.createElement('script');
      hubspotScript.type = 'text/javascript';
      hubspotScript.id = 'hs-script-loader';
      hubspotScript.async = true;
      hubspotScript.defer = true;
      hubspotScript.src = `//js.hs-scripts.com/${process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID}.js`;
      document.head.appendChild(hubspotScript);
    }

    // Cleanup function
    return () => {
      const existingJsonLd = document.querySelector('script[type="application/ld+json"]');
      const existingHubspot = document.querySelector('#hs-script-loader');
      if (existingJsonLd) existingJsonLd.remove();
      if (existingHubspot) existingHubspot.remove();
    };
  }, []);

  return null;
}