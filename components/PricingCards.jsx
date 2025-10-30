export default function PricingCards() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      features: [
        'ChatGPT',
        '1 website',
        '1 competitor',
        'Up to 2 products',
        'Basic insights',
        'Community support',
      ],
    },
    {
      name: 'Starter',
      price: '$99',
      features: [
        'ChatGPT, Gemini',
        '1 website',
        'Up to 3 competitors',
        'Up to 5 products',
        'Basic insights',
        'Email support',
      ],
    },
    {
      name: 'Growth',
      price: '$299',
      popular: true,
      features: [
        'ChatGPT, Gemini, Perplexity',
        'Up to 3 websites',
        'Up to 10 competitors',
        'Up to 100 products',
        'Advanced insights',
        'Shopify integration',
        'Priority email',
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'ChatGPT, Gemini, Perplexity, Claude',
        'Custom setup',
        'Custom',
        'Custom catalog',
        'Deep analytics',
        'Shopify integration',
        'Dedicated manager',
      ],
    },
  ];


  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Choose the plan that fits your growth
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start free and scale as your AI visibility needs grow. All plans include our core monitoring features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white border rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col relative ${plan.popular
                ? 'border-blue-500 ring-2 ring-blue-500 ring-opacity-20 scale-105'
                : 'border-gray-200 hover:border-gray-300'
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.price !== 'Custom' && plan.price !== '$0' && (
                    <span className="text-gray-500 ml-1">/month</span>
                  )}
                </div>
                {plan.name === 'Free' && (
                  <p className="text-sm text-gray-500 mt-2">7 Days Free</p>
                )}
              </div>

              <ul className="flex-1 p-6 text-left space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-700 flex items-start text-sm">
                    <svg
                      className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="p-6">
                {/* CTA: external link to app for most plans, internal contact for Enterprise */}
                {(() => {
                  const href = plan.name === 'Enterprise' ? '/contact' : 'https://app.kabini.ai/';
                  const isExternal = href.startsWith('http');
                  const label = plan.name === 'Free' ? 'Get Started Free' : plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial';
                  return (
                    <a
                      href={href}
                      className={`w-full inline-block text-center py-3 px-4 rounded-xl font-medium transition-all duration-200 ${plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                        }`}
                      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {label}
                    </a>
                  );
                })()}

                {plan.name !== 'Free' && plan.name !== 'Enterprise' && (
                  <p className="text-xs text-gray-500 mt-2">14-day free trial</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          {/* <p className="text-gray-600 mb-4">
            All plans include SSL security, 99.9% uptime, and data export capabilities.
          </p> */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No setup fees
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Cancel anytime
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              24/7 monitoring
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}