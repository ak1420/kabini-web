"use client";

import { useState } from 'react';

export default function NewsletterBanner({ 
  compact = false,
  showOnce = true,
  className = ""
}) {
  const [isVisible, setIsVisible] = useState(true);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) return;

    setIsLoading(true);

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setEmail('');
        
        // Hide banner after successful signup if showOnce is true
        if (showOnce) {
          setTimeout(() => setIsVisible(false), 3000);
        }
        
        // Track newsletter signup
        if (typeof gtag !== 'undefined') {
          gtag('event', 'newsletter_signup', {
            event_category: 'engagement',
            event_label: 'banner_newsletter'
          });
        }
      }
    } catch (error) {
      console.error('Newsletter signup error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  if (isSuccess) {
    return (
      <div className={`bg-green-600 text-white ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium">
                Thanks for subscribing! Check your email for confirmation.
              </span>
            </div>
            {showOnce && (
              <button
                onClick={handleDismiss}
                className="text-green-200 hover:text-white"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (compact) {
    return (
      <div className={`bg-blue-600 text-white ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="font-medium">
                📧 Get AI visibility insights in your inbox
              </span>
              <form onSubmit={handleSubmit} className="flex items-center space-x-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  className="px-3 py-1 text-sm rounded text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  disabled={isLoading}
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading || !email}
                  className="bg-white text-blue-600 px-3 py-1 text-sm rounded font-medium hover:bg-gray-100 disabled:opacity-50"
                >
                  {isLoading ? '...' : 'Subscribe'}
                </button>
              </form>
            </div>
            <button
              onClick={handleDismiss}
              className="text-blue-200 hover:text-white"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-r from-blue-600 to-indigo-700 text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-1">
              Stay ahead with AI insights
            </h3>
            <p className="text-blue-100">
              Weekly tips on Shopify AI optimization and visibility strategies
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <form onSubmit={handleSubmit} className="flex items-center space-x-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                disabled={isLoading}
                required
              />
              <button
                type="submit"
                disabled={isLoading || !email}
                className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 disabled:opacity-50"
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            <button
              onClick={handleDismiss}
              className="text-blue-200 hover:text-white"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}