import './globals.css';

export const metadata = {
  title: {
    default: 'Kabini.ai - Supercharge Your Shopify Store\'s Visibility For AI',
    template: '%s | Kabini.ai'
  },
  description: 'Kabini is the leading AI monitoring platform for Shopify stores. See how your products rank on top AI tools and grow your sales with ease.',
  keywords: [
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
  ],
  authors: [{ name: 'Kabini.ai Team' }],
  creator: 'Kabini.ai',
  publisher: 'Kabini.ai',
  metadataBase: new URL('https://kabini.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kabini.ai',
    title: 'Kabini.ai - Supercharge Your Shopify Store\'s Visibility For AI',
    description: 'Kabini is the leading AI monitoring platform for Shopify stores. See how your products rank on top AI tools and grow your sales with ease.',
    siteName: 'Kabini.ai',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kabini.ai - AI Visibility Platform for Shopify Stores',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kabini.ai - Supercharge Your Shopify Store\'s Visibility For AI',
    description: 'Kabini is the leading AI monitoring platform for Shopify stores. See how your products rank on top AI tools and grow your sales with ease.',
    images: ['/og-image.jpg'],
    creator: '@KabiniAI',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#3b82f6',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
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

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className="min-h-screen bg-white antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}

