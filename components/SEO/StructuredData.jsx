export function OrganizationStructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Kabini.ai',
    description: 'AI monitoring platform for Shopify stores to track and optimize product visibility across AI platforms.',
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
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebsiteStructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Kabini.ai',
    url: 'https://kabini.ai',
    description: 'AI monitoring platform for Shopify stores',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://kabini.ai/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function FAQStructuredData({ faqs }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function ServiceStructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Visibility Monitoring',
    description: 'Monitor and optimize your Shopify store\'s visibility across AI platforms like ChatGPT, Perplexity, Gemini, and Claude.',
    provider: {
      '@type': 'Organization',
      name: 'Kabini.ai'
    },
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AI Visibility Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Visibility Tracking'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Competitor Analysis'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Content Optimization'
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}