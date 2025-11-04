import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyKabiniSection from "@/components/WhyKabiniSection";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhoItsForSection from "@/components/WhoItsForSection";
import CustomerBanner from "@/components/CustomerBanner";
import Footer from "@/components/Footer";
import PricingCards from "@/components/PricingCards";

export const metadata = {
  title: 'AI Visibility Platform for Shopify Stores - Track Rankings on ChatGPT, Perplexity & More',
  description: 'Monitor and optimize your Shopify store\'s visibility across AI platforms. Track product rankings on ChatGPT, Perplexity, Gemini, and Claude. Get actionable insights to boost AI-driven sales.',
  keywords: [
    'Shopify AI visibility',
    'ChatGPT product ranking',
    'AI search optimization',
    'Perplexity AI ranking',
    'Gemini AI visibility',
    'Claude AI optimization',
    'AI-powered ecommerce',
    'Generative Engine Optimization',
    'AI monitoring dashboard',
    'Shopify SEO AI'
  ],
  openGraph: {
    title: 'AI Visibility Platform for Shopify Stores - Kabini.ai',
    description: 'Monitor and optimize your Shopify store\'s visibility across AI platforms. Track product rankings on ChatGPT, Perplexity, Gemini, and Claude.',
    url: 'https://kabini.ai',
    images: [
      {
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Kabini.ai Dashboard showing AI visibility metrics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Visibility Platform for Shopify Stores - Kabini.ai',
    description: 'Monitor and optimize your Shopify store\'s visibility across AI platforms. Track product rankings on ChatGPT, Perplexity, Gemini, and Claude.',
    images: ['/og-home.jpg'],
  },
};

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Kabini.ai',
    description: 'AI monitoring platform for Shopify stores to track and optimize product visibility across AI platforms like ChatGPT, Perplexity, Gemini, and Claude.',
    url: 'https://kabini.ai',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free 14-day trial available'
    },
    provider: {
      '@type': 'Organization',
      name: 'Kabini.ai'
    },
    featureList: [
      'AI Visibility Tracking',
      'Product Ranking Monitoring',
      'Competitor Analysis',
      'AI Content Optimization',
      'Real-time Alerts',
      'Performance Analytics'
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <HeroSection />
        <WhyKabiniSection />
        <section id="solutions" aria-label="Solutions and Features">
          <FeaturesSection />
        </section>
        <section id="pricing" aria-label="Pricing Plans">
          <PricingCards />
        </section>
        <CTASection />
        <section id="how-it-works" aria-label="How Kabini.ai Works">
          <HowItWorksSection />
        </section>
        <section id="testimonials" aria-label="Customer Testimonials">
          <TestimonialsSection />
        </section>
        <WhoItsForSection />
        <CustomerBanner />
        <Footer />
      </div>
    </>
  );
}