
export const metadata = {
  title: 'About Kabini.ai',
  description: 'Learn about Kabini.ai — the AI visibility platform for Shopify brands.'
};

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20 pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">About Kabini.ai</h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Kabini.ai is the first platform built exclusively for Shopify businesses to understand how AI ranks
              their stores — and how they can outrank competitors. We translate complex AI behavior into clear,
              actionable insights so your brand stays visible in AI‑driven discovery.
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-white border border-gray-300 rounded-2xl p-6 sm:p-8 shadow-none hover:shadow-md transition-shadow duration-200 mb-12">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We empower ecommerce brands to stay visible in the new era of AI‑driven discovery, where assistants,
                chatbots, and generative search tools are the new storefronts. Kabini.ai helps you understand why some
                brands surface higher in AI results and what you can do to improve your visibility.
              </p>
            </div>
          </div>

          {/* Core Features */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Core Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-300 p-6 bg-white shadow-none hover:shadow-md transition-shadow duration-200">
                <h3 className="text-lg font-semibold text-gray-900">AI Visibility Score</h3>
                <p className="text-gray-600 mt-2">Quantify how your brand performs across AI search and recommendation systems.</p>
              </div>
              <div className="rounded-2xl border border-gray-300 p-6 bg-white shadow-none hover:shadow-md transition-shadow duration-200">
                <h3 className="text-lg font-semibold text-gray-900">Competitor Benchmarking</h3>
                <p className="text-gray-600 mt-2">Compare your visibility footprint with leading brands in your category.</p>
              </div>
              <div className="rounded-2xl border border-gray-300 p-6 bg-white shadow-none hover:shadow-md transition-shadow duration-200">
                <h3 className="text-lg font-semibold text-gray-900">Shopper Intent Insights</h3>
                <p className="text-gray-600 mt-2">Understand what real shoppers ask AI assistants and how those queries lead to purchase intent.</p>
              </div>
              <div className="rounded-2xl border border-gray-300 p-6 bg-white shadow-none hover:shadow-md transition-shadow duration-200">
                <h3 className="text-lg font-semibold text-gray-900">GEO Content Writer</h3>
                <p className="text-gray-600 mt-2">Create AI‑ready content that ranks in both traditional search engines and generative AI responses.</p>
              </div>
            </div>
          </section>

          {/* Why Kabini */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Why Kabini.ai</h2>
            <ol className="space-y-4 list-decimal list-inside text-gray-700">
              <li>
                <span className="font-semibold text-gray-900">First‑to‑Market Advantage.</span> We’re the first visibility platform focused on AI ranking behavior for Shopify — bridging the gap between SEO and AI discoverability.
              </li>
              <li>
                <span className="font-semibold text-gray-900">Deep Competitive Intelligence.</span> See how competitors perform in AI‑powered searches and uncover opportunities to surpass them.
              </li>
              <li>
                <span className="font-semibold text-gray-900">Actionable AI Insights.</span> Get practical recommendations — not just data — to improve visibility and conversions.
              </li>
              <li>
                <span className="font-semibold text-gray-900">Future‑Proof Optimization.</span> As AI reshapes discovery, Kabini.ai keeps your brand visible across assistants, chatbots, and generative search.
              </li>
            </ol>
          </section>

          {/* Our Technology */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Our Technology</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-gray-300 p-6 bg-white shadow-none hover:shadow-md transition-shadow duration-200">
                <p className="text-gray-700">What AI models “see” when analyzing your store.</p>
              </div>
              <div className="rounded-2xl border border-gray-300 p-6 bg-white shadow-none hover:shadow-md transition-shadow duration-200">
                <p className="text-gray-700">Which products and pages perform best in AI discovery.</p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm bg-white">
                <p className="text-gray-700">Where your visibility gaps exist — and how to close them.</p>
              </div>
            </div>
          </section>

          {/* Vision & Mission */}
          <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-300 p-6 bg-white shadow-none hover:shadow-md transition-shadow duration-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Vision</h3>
              <p className="text-gray-700">To make every Shopify brand visible and discoverable in the age of AI‑driven commerce.</p>
            </div>
            <div className="rounded-2xl border border-gray-300 p-6 bg-white shadow-none hover:shadow-md transition-shadow duration-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mission</h3>
              <p className="text-gray-700">To empower ecommerce businesses with insights into how AI ranks, recommends, and reveals their stores — and give them the tools to outperform competitors.</p>
            </div>
          </section>

          {/* Values */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="rounded-2xl border border-gray-300 p-6 bg-white shadow-none hover:shadow-md transition-shadow duration-200"><h4 className="font-semibold text-gray-900 mb-1">Clarity</h4><p className="text-gray-700">We make AI visibility simple and transparent.</p></div>
              <div className="rounded-2xl border border-gray-300 p-6 bg-white shadow-none hover:shadow-md transition-shadow duration-200"><h4 className="font-semibold text-gray-900 mb-1">Innovation</h4><p className="text-gray-700">We build for the future of intelligent commerce.</p></div>
              <div className="rounded-2xl border border-gray-300 p-6 bg-white shadow-none hover:shadow-md transition-shadow duration-200"><h4 className="font-semibold text-gray-900 mb-1">Integrity</h4><p className="text-gray-700">We believe visibility should be fair and data‑driven.</p></div>
              <div className="rounded-2xl border border-gray-300 p-6 bg-white shadow-none hover:shadow-md transition-shadow duration-200"><h4 className="font-semibold text-gray-900 mb-1">Empowerment</h4><p className="text-gray-700">We enable brands to compete, grow, and lead in the AI era.</p></div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="rounded-2xl border border-gray-300 p-6 bg-white shadow-none hover:shadow-md transition-shadow duration-200">
                <h3 className="font-semibold text-gray-900">1. What is Kabini.ai?</h3>
                <p className="text-gray-700 mt-2">Kabini.ai is the first AI visibility platform for Shopify stores, helping brands understand how AI assistants and generative search engines rank their websites — and how to improve visibility and grow sales.</p>
              </div>
              <div className="rounded-2xl border border-gray-300 p-6 bg-white shadow-none hover:shadow-md transition-shadow duration-200">
                <h3 className="font-semibold text-gray-900">2. How does Kabini.ai work?</h3>
                <p className="text-gray-700 mt-2">We analyze how AI systems interpret your store, identify visibility gaps, benchmark competitors, and provide actionable recommendations to optimize for AI‑driven discovery.</p>
              </div>
              <div className="rounded-2xl border border-gray-300 p-6 bg-white shadow-none hover:shadow-md transition-shadow duration-200">
                <h3 className="font-semibold text-gray-900">3. Why do Shopify brands need AI visibility tools?</h3>
                <p className="text-gray-700 mt-2">Customers increasingly ask AI assistants for product recommendations. Kabini.ai ensures your brand is visible and discoverable in these AI‑powered results.</p>
              </div>
              <div className="rounded-2xl border border-gray-300 p-6 bg-white shadow-none hover:shadow-md transition-shadow duration-200">
                <h3 className="font-semibold text-gray-900">4. Is Kabini.ai replacing SEO?</h3>
                <p className="text-gray-700 mt-2">No. Kabini.ai enhances SEO with GEO (Generative Engine Optimization), ensuring your content ranks in both traditional search and generative AI interfaces.</p>
              </div>
              <div className="rounded-2xl border border-gray-300 p-6 bg-white shadow-none hover:shadow-md transition-shadow duration-200">
                <h3 className="font-semibold text-gray-900">5. Who can benefit from Kabini.ai?</h3>
                <p className="text-gray-700 mt-2">Any Shopify business — from small DTC brands to large retailers — that wants to improve visibility, understand shopper intent, and future‑proof marketing.</p>
              </div>
              <div className="rounded-2xl border border-gray-300 p-6 bg-white shadow-none hover:shadow-md transition-shadow duration-200">
                <h3 className="font-semibold text-gray-900">6. What is the GEO Content Writer?</h3>
                <p className="text-gray-700 mt-2">Our content tool helps you create AI‑optimized product and collection content that performs across search engines and AI assistants.</p>
              </div>
              <div className="rounded-2xl border border-gray-300 p-6 bg-white shadow-none hover:shadow-md transition-shadow duration-200">
                <h3 className="font-semibold text-gray-900">7. How does Kabini.ai analyze competitors?</h3>
                <p className="text-gray-700 mt-2">We compare visibility signals, ranking behavior, and content strategies to show where competitors outperform you — and how to close the gap.</p>
              </div>
              <div className="rounded-2xl border border-gray-300 p-6 bg-white shadow-none hover:shadow-md transition-shadow duration-200">
                <h3 className="font-semibold text-gray-900">8. Does Kabini.ai integrate with Shopify directly?</h3>
                <p className="text-gray-700 mt-2">Yes — direct integration analyzes your store data in real time. No complex setup required.</p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                <h3 className="font-semibold text-gray-900">9. How can I get started?</h3>
                <p className="text-gray-700 mt-2">Join the early access program or request a demo at Kabini.ai to see how your store performs in AI rankings and how to stand out.</p>
              </div>
            </div>
    </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

