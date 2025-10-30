"use client";

import { useState } from 'react';

export default function NewsletterSignup({ 
  title = "Stay Updated", 
  description = "Get the latest insights on AI visibility and Shopify optimization delivered to your inbox.",
  className = ""
}) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setMessage('Please enter your email address');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setMessage('');

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
        setMessage('Thank you for subscribing! Check your email for confirmation.');
        setEmail('');
        
        // Track newsletter signup event
        if (typeof gtag !== 'undefined') {
          gtag('event', 'newsletter_signup', {
            event_category: 'engagement',
            event_label: 'blog_newsletter'
          });
        }
      } else {
        setMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Newsletter signup error:', error);
      setMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={`bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white ${className}`}>
        <div className="max-w-2xl mx-auto">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-4">You're All Set!</h2>
          <p className="text-xl text-blue-100 mb-6">
            {message}
          </p>
          <p className="text-blue-200">
            We'll send you valuable insights about AI visibility, Shopify optimization tips, and industry updates.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white ${className}`}>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
        {description}
      </p>
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            disabled={isLoading}
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-50"
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[120px]"
          >
            {isLoading ? (
              <div className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Subscribing...
              </div>
            ) : (
              'Subscribe'
            )}
          </button>
        </div>
        
        {message && (
          <div className={`mt-4 p-3 rounded-lg text-sm ${
            message.includes('Thank you') || message.includes('success') 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {message}
          </div>
        )}
      </form>
      
      <p className="text-blue-200 text-sm mt-6">
        Join 1,000+ Shopify store owners getting weekly AI visibility insights. Unsubscribe anytime.
      </p>
    </div>
  );
}