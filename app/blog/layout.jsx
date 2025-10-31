import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'AI Visibility Blog - Shopify AI Optimization Tips & Strategies',
  description: 'Learn how to optimize your Shopify store for AI platforms. Get expert tips on improving visibility in ChatGPT, Perplexity, Gemini, and Claude search results.',
  keywords: [
    'AI optimization blog',
    'Shopify AI tips',
    'ChatGPT SEO',
    'AI visibility strategies',
    'Generative Engine Optimization',
    'AI search marketing',
    'Shopify AI best practices',
    'AI-powered ecommerce'
  ],
  openGraph: {
    title: 'AI Visibility Blog - Shopify Optimization Tips',
    description: 'Expert insights on optimizing your Shopify store for AI platforms and improving product visibility.',
    url: 'https://kabini.ai/blog',
    images: [
      {
        url: '/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'Kabini.ai Blog - AI Visibility Tips',
      },
    ],
  },
};

export default function BlogLayout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="mx-auto max-w-6xl px-6 py-8 mt-16">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}