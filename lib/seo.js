// SEO utility functions

export function generateMetadata({
  title,
  description,
  keywords = [],
  image = '/og-image.jpg',
  url = '',
  type = 'website'
}) {
  const baseUrl = 'https://kabini.ai';
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
  
  return {
    title,
    description,
    keywords: keywords.join(', '),
    openGraph: {
      title,
      description,
      url: fullUrl,
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: 'Kabini.ai',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@KabiniAI',
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}

export function generateBlogPostMetadata({
  title,
  description,
  publishedTime,
  modifiedTime,
  authors = ['Kabini.ai Team'],
  tags = [],
  image = '/og-blog.jpg',
  slug
}) {
  const baseUrl = 'https://kabini.ai';
  const url = `${baseUrl}/blog/${slug}`;
  
  return {
    title: `${title} | Kabini.ai Blog`,
    description,
    keywords: tags.join(', '),
    authors: authors.map(author => ({ name: author })),
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      publishedTime,
      modifiedTime,
      authors,
      tags,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: 'Kabini.ai',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@KabiniAI',
    },
    alternates: {
      canonical: url,
    },
  };
}

export const defaultKeywords = [
  'AI visibility',
  'Shopify AI optimization',
  'ChatGPT product ranking',
  'AI search optimization',
  'Generative Engine Optimization',
  'GEO',
  'AI monitoring platform',
  'Shopify store visibility',
  'AI-powered shopping',
  'product discovery AI',
  'Perplexity AI',
  'Claude AI',
  'Gemini AI'
];

export function generateBreadcrumbStructuredData(breadcrumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `https://kabini.ai${crumb.url}`
    }))
  };
}