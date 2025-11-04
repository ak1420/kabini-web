export const metadata = {
  title: 'Terms of Service',
  description: 'Please read these terms carefully before using Kabini.ai\'s services.'
};

import React from 'react';
import '../privacy-policy/PrivacyPolicy.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const TermsOfService = () => {
  return (
    <>
    <Header />
    <div className="privacy-page">
      {/* Header Section */}
      <div className="privacy-header">
        <div className="container">
          <div className="privacy-header-content">
            <a href="/" className="privacy-logo-link">
              <div className="privacy-logo-wrapper">
                <div className="privacy-logo-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/>
                  </svg>
                </div>
                <div className="privacy-logo-blur"></div>
              </div>
              <span className="privacy-logo-text">Kabini.ai</span>
            </a>
            <span className="privacy-badge">Terms of Service</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="privacy-content">
        {/* Page Header */}
        <div className="privacy-title-section">
          <div className="privacy-title-badge">Legal Terms</div>
          <h1>
            <span className="title-main">Terms of</span>
            <span className="title-accent"> Service</span>
          </h1>
          <p className="privacy-subtitle">
            Please read these terms carefully before using Kabini.ai's services.
          </p>
          <div className="privacy-last-updated">
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            <span>Last Updated: October 8, 2025</span>
          </div>
        </div>

        {/* Quick Overview Cards */}
        <div className="privacy-overview-grid">
          <div className="privacy-overview-card">
            <div className="privacy-overview-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 4v4m-7 4h6l-3 6-3-6zm14 0h-6l3 6 3-6zM3 20h18" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <h3>Fair Usage</h3>
            <p>Use our services responsibly and in accordance with applicable laws.</p>
          </div>

          <div className="privacy-overview-card">
            <div className="privacy-overview-icon">
              <svg viewBox="0 0 24 24">
                <rect x="4" y="6" width="16" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M8 6V4h8v2" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M7 10h10M7 14h10" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3>Clear Terms</h3>
            <p>Transparent conditions that protect both you and us.</p>
          </div>

          <div className="privacy-overview-card">
            <div className="privacy-overview-icon">
              <svg viewBox="0 0 24 24">
                <path d="M13 3L5 14h6l-1 7 9-12h-6l1-6z" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <h3>Service Quality</h3>
            <p>Commitment to delivering high-quality AI-powered services.</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="privacy-main-card">
          {/* 1. Agreement to Terms */}
          <section className="privacy-section">
            <div className="privacy-section-inner">
              <div className="privacy-section-number">1</div>
              <div className="privacy-section-content">
                <h2>Agreement to Terms</h2>
                <p>
                  By accessing or using Kabini.ai ("Service," "we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Service.
                </p>
                <p>
                  These Terms apply to all visitors, users, and others who access or use the Service.
                </p>
              </div>
            </div>
          </section>

          {/* 2. Description of Service */}
          <section className="privacy-section">
            <div className="privacy-section-inner">
              <div className="privacy-section-number">2</div>
              <div className="privacy-section-content">
                <h2>Description of Service</h2>
                <p>
                  Kabini.ai provides AI-powered content optimization and generative engine optimization (GEO) services designed to enhance your website's visibility in AI-powered search results and recommendations.
                </p>
                <p>Our services include, but are not limited to:</p>
                <ul>
                  <li>AI visibility analysis and optimization</li>
                  <li>Content enhancement recommendations</li>
                  <li>Performance tracking and analytics</li>
                  <li>Technical SEO and GEO guidance</li>
                  <li>Custom optimization strategies</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. User Accounts */}
          <section className="privacy-section">
            <div className="privacy-section-inner">
              <div className="privacy-section-number">3</div>
              <div className="privacy-section-content">
                <h2>User Accounts</h2>
                
                <h3>3.1 Account Creation</h3>
                <p>
                  To access certain features of the Service, you may be required to create an account. You must provide accurate, current, and complete information during the registration process and keep your account information up-to-date.
                </p>

                <h3>3.2 Account Security</h3>
                <p>
                  You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized access or security breach.
                </p>

                <h3>3.3 Account Termination</h3>
                <p>
                  We reserve the right to suspend or terminate your account if you violate these Terms or engage in any activity that we deem harmful to our Service or other users.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Acceptable Use */}
          <section className="privacy-section">
            <div className="privacy-section-inner">
              <div className="privacy-section-number">4</div>
              <div className="privacy-section-content">
                <h2>Acceptable Use</h2>
                <p>You agree not to use the Service for any purpose that is:</p>
                <ul>
                  <li>Unlawful, illegal, or unauthorized</li>
                  <li>Harmful, threatening, abusive, or harassing</li>
                  <li>Defamatory, vulgar, obscene, or invasive of privacy</li>
                  <li>Infringes on intellectual property rights</li>
                  <li>Contains viruses, malware, or harmful code</li>
                  <li>Attempts to gain unauthorized access to our systems</li>
                  <li>Interferes with the proper functioning of the Service</li>
                  <li>Impersonates any person or entity</li>
                  <li>Collects information about others without consent</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 5. Intellectual Property */}
          <section className="privacy-section">
            <div className="privacy-section-inner">
              <div className="privacy-section-number">5</div>
              <div className="privacy-section-content">
                <h2>Intellectual Property</h2>
                
                <h3>5.1 Our Property</h3>
                <p>
                  The Service and its original content, features, and functionality are owned by Kabini.ai and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>

                <h3>5.2 Your Content</h3>
                <p>
                  You retain all rights to any content you submit, post, or display through the Service ("Your Content"). By submitting Your Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute Your Content solely for the purpose of providing and improving our Service.
                </p>

                <h3>5.3 Feedback</h3>
                <p>
                  Any feedback, comments, or suggestions you provide regarding the Service may be used by us without any obligation to you.
                </p>
              </div>
            </div>
          </section>

          {/* 6. Payment Terms */}
          <section className="privacy-section">
            <div className="privacy-section-inner">
              <div className="privacy-section-number">6</div>
              <div className="privacy-section-content">
                <h2>Payment Terms</h2>
                
                <h3>6.1 Pricing</h3>
                <p>
                  Certain aspects of the Service may be provided for a fee. You agree to pay all fees associated with your account as described at the time of purchase. All fees are in U.S. Dollars unless otherwise stated.
                </p>

                <h3>6.2 Billing</h3>
                <p>
                  For subscription-based services, you will be billed in advance on a recurring basis (e.g., monthly or annually). Your subscription will automatically renew unless you cancel before the renewal date.
                </p>

                <h3>6.3 Refunds</h3>
                <p>
                  Refund policies vary by service plan. Please refer to your specific plan details or contact us for information about refund eligibility.
                </p>

                <h3>6.4 Price Changes</h3>
                <p>
                  We reserve the right to modify our pricing. We will provide you with reasonable notice of any price changes, and you will have the opportunity to cancel your subscription if you do not agree to the new pricing.
                </p>
              </div>
            </div>
          </section>

          {/* 7. Service Modifications */}
          <section className="privacy-section">
            <div className="privacy-section-inner">
              <div className="privacy-section-number">7</div>
              <div className="privacy-section-content">
                <h2>Service Modifications and Availability</h2>
                <p>
                  We reserve the right to modify, suspend, or discontinue any part of the Service at any time, with or without notice. We will not be liable to you or any third party for any modification, suspension, or discontinuation of the Service.
                </p>
                <p>
                  We strive to maintain high availability but do not guarantee that the Service will be uninterrupted, timely, secure, or error-free.
                </p>
              </div>
            </div>
          </section>

          {/* 8. Disclaimers and Limitations of Liability */}
          <section className="privacy-section">
            <div className="privacy-section-inner">
              <div className="privacy-section-number">8</div>
              <div className="privacy-section-content">
                <h2>Disclaimers and Limitations of Liability</h2>
                
                <h3>8.1 "As Is" Service</h3>
                <p>
                  The Service is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
                </p>

                <h3>8.2 No Guarantee of Results</h3>
                <p>
                  While we strive to provide effective optimization services, we do not guarantee specific results, rankings, or traffic increases. AI algorithms and search engines are controlled by third parties and are subject to change.
                </p>

                <h3>8.3 Limitation of Liability</h3>
                <p>
                  To the maximum extent permitted by law, Kabini.ai shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of the Service.
                </p>
              </div>
            </div>
          </section>

          {/* 9. Indemnification */}
          <section className="privacy-section">
            <div className="privacy-section-inner">
              <div className="privacy-section-number">9</div>
              <div className="privacy-section-content">
                <h2>Indemnification</h2>
                <p>
                  You agree to indemnify, defend, and hold harmless Kabini.ai, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorney's fees, arising out of or in any way connected with your access to or use of the Service, your violation of these Terms, or your violation of any rights of another party.
                </p>
              </div>
            </div>
          </section>

          {/* 10. Governing Law */}
          <section className="privacy-section">
            <div className="privacy-section-inner">
              <div className="privacy-section-number">10</div>
              <div className="privacy-section-content">
                <h2>Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Kabini.ai operates, without regard to its conflict of law provisions.
                </p>
              </div>
            </div>
          </section>

          {/* 11. Changes to Terms */}
          <section className="privacy-section">
            <div className="privacy-section-inner">
              <div className="privacy-section-number">11</div>
              <div className="privacy-section-content">
                <h2>Changes to These Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the new Terms on this page and updating the "Last Updated" date.
                </p>
                <p>
                  Your continued use of the Service after any such changes constitutes your acceptance of the new Terms. If you do not agree to the modified Terms, you must stop using the Service.
                </p>
              </div>
            </div>
          </section>

          {/* 12. Contact Information */}
          <section className="privacy-section">
            <div className="privacy-section-inner">
              <div className="privacy-section-number">12</div>
              <div className="privacy-section-content">
                <h2>Contact Information</h2>
                <p>If you have any questions about these Terms, please contact us:</p>
                <div className="privacy-contact-box">
                  <div className="privacy-contact-item">
                    <svg viewBox="0 0 24 24">
                      <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/>
                    </svg>
                    <div>
                      <strong>Company:</strong> <span>Kabini.ai</span>
                    </div>
                  </div>
                  <div className="privacy-contact-item">
                    <svg viewBox="0 0 24 24">
                      <rect x="3" y="5" width="18" height="14" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <polyline points="21,6 12,13 3,6" fill="none" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <div>
                      <strong>Email:</strong> <a href="mailto:contact@kabini.ai">contact@kabini.ai</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer CTA */}
        <div className="privacy-cta">
          <h3>Questions About These Terms?</h3>
          <p>Our team is here to help clarify any questions you may have about our Terms of Service.</p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href="/contact" className="privacy-cta-button">Contact Us</a>
            <a href="/privacy-policy" className="privacy-cta-button" style={{background: 'white', color: '#2563EB', border: '2px solid #2563EB'}}>View Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default TermsOfService;

