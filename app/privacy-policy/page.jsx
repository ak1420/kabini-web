export const metadata = {
  title: 'Privacy Policy',
  description: 'This policy explains how Kabini.ai collects, uses, and protects your personal information.'
};

import React from 'react';
import './PrivacyPolicy.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const PrivacyPolicy = () => {
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
            <span className="privacy-badge">Privacy Policy</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="privacy-content">
        {/* Page Header */}
        <div className="privacy-title-section">
          <div className="privacy-title-badge">Legal Information</div>
          <h1>
            <span className="title-main">Privacy</span>
            <span className="title-accent"> Policy</span>
          </h1>
          <p className="privacy-subtitle">
            Your privacy is important to us. This policy explains how Kabini.ai collects, uses, and protects your personal information.
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
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <h3>Data Protection</h3>
            <p>We use industry-standard security measures to protect your data.</p>
          </div>

          <div className="privacy-overview-card">
            <div className="privacy-overview-icon">
              <svg viewBox="0 0 24 24">
                <path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8S2 12 2 12z" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="12" cy="12" r="3" fill="currentColor"/>
              </svg>
            </div>
            <h3>Transparency</h3>
            <p>We're clear about what data we collect and how we use it.</p>
          </div>

          <div className="privacy-overview-card">
            <div className="privacy-overview-icon">
              <svg viewBox="0 0 24 24">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="10" cy="8" r="4" fill="currentColor"/>
                <polyline points="17 11 19 13 23 9" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3>Your Rights</h3>
            <p>You have full control over your personal information.</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="privacy-main-card">
          {/* 1. Introduction */}
          <section className="privacy-section">
            <div className="privacy-section-inner">
              <div className="privacy-section-number">1</div>
              <div className="privacy-section-content">
                <h2>Introduction</h2>
                <p>
                  Welcome to Kabini.ai ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our AI-powered content optimization services.
                </p>
                <p>
                  By accessing or using Kabini.ai, you agree to the terms outlined in this Privacy Policy. If you do not agree with these terms, please do not use our services.
                </p>
              </div>
            </div>
          </section>

          {/* 2. Information We Collect */}
          <section className="privacy-section">
            <div className="privacy-section-inner">
              <div className="privacy-section-number">2</div>
              <div className="privacy-section-content">
                <h2>Information We Collect</h2>
                
                <h3>2.1 Personal Information</h3>
                <p>We may collect personal information that you voluntarily provide to us when you:</p>
                <ul>
                  <li>Register for an account</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Fill out contact forms</li>
                  <li>Request a demo or consultation</li>
                  <li>Participate in surveys or feedback forms</li>
                </ul>
                <p>This information may include: name, email address, company name, phone number, website URL, and any other information you choose to provide.</p>

                <h3>2.2 Automatically Collected Information</h3>
                <p>When you visit our website, we automatically collect certain information about your device, including:</p>
                <ul>
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Click-stream data</li>
                </ul>

                <h3>2.3 Cookies and Tracking Technologies</h3>
                <p>
                  We use cookies, web beacons, and similar tracking technologies to enhance your experience, analyze site traffic, and understand user behavior. You can control cookie settings through your browser preferences.
                </p>
              </div>
            </div>
          </section>

          {/* 3. How We Use Your Information */}
          <section className="privacy-section">
            <div className="privacy-section-inner">
              <div className="privacy-section-number">3</div>
              <div className="privacy-section-content">
                <h2>How We Use Your Information</h2>
                <p>We use the information we collect for various purposes, including:</p>
                <ul>
                  <li>Providing and maintaining our services</li>
                  <li>Processing your requests and transactions</li>
                  <li>Sending you updates, newsletters, and marketing communications</li>
                  <li>Responding to your inquiries and providing customer support</li>
                  <li>Analyzing usage patterns to improve our services</li>
                  <li>Detecting, preventing, and addressing technical issues or security threats</li>
                  <li>Complying with legal obligations and enforcing our terms</li>
                  <li>Personalizing your experience and delivering relevant content</li>
                  <li>Conducting research and development to enhance our AI technology</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 4. Information Sharing and Disclosure */}
          <section className="privacy-section">
            <div className="privacy-section-inner">
              <div className="privacy-section-number">4</div>
              <div className="privacy-section-content">
                <h2>Information Sharing and Disclosure</h2>
                <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
                
                <h3>4.1 Service Providers</h3>
                <p>
                  We may share your information with third-party service providers who assist us in operating our website, conducting our business, or servicing you (e.g., email service providers, analytics providers, CRM platforms like HubSpot).
                </p>

                <h3>4.2 Business Transfers</h3>
                <p>
                  If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
                </p>

                <h3>4.3 Legal Requirements</h3>
                <p>
                  We may disclose your information if required by law or in response to valid requests by public authorities (e.g., court orders, subpoenas).
                </p>

                <h3>4.4 Protection of Rights</h3>
                <p>
                  We may disclose your information to protect our rights, property, or safety, or the rights, property, or safety of others.
                </p>
              </div>
            </div>
          </section>

          {/* 5. Data Security */}
          <section className="privacy-section">
            <div className="privacy-section-inner">
              <div className="privacy-section-number">5</div>
              <div className="privacy-section-content">
                <h2>Data Security</h2>
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul>
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and audits</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Employee training on data protection practices</li>
                  <li>Secure data storage and backup procedures</li>
                </ul>
                <p>
                  However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.
                </p>
              </div>
            </div>
          </section>

          {/* 6. Data Retention */}
          <section className="privacy-section">
            <div className="privacy-section-inner">
              <div className="privacy-section-number">6</div>
              <div className="privacy-section-content">
                <h2>Data Retention</h2>
                <p>
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
                </p>
              </div>
            </div>
          </section>

          {/* 7. Your Rights and Choices */}
          <section className="privacy-section">
            <div className="privacy-section-inner">
              <div className="privacy-section-number">7</div>
              <div className="privacy-section-content">
                <h2>Your Rights and Choices</h2>
                <p>Depending on your location, you may have certain rights regarding your personal information:</p>
                
                <h3>7.1 Access and Correction</h3>
                <p>
                  You have the right to access and update your personal information. You can do this by logging into your account or contacting us directly.
                </p>

                <h3>7.2 Data Deletion</h3>
                <p>
                  You have the right to request the deletion of your personal information, subject to certain exceptions (e.g., legal obligations).
                </p>

                <h3>7.3 Opt-Out of Marketing</h3>
                <p>
                  You can opt out of receiving marketing communications from us by clicking the "unsubscribe" link in our emails or by contacting us directly.
                </p>

                <h3>7.4 Cookie Management</h3>
                <p>
                  You can control and manage cookies through your browser settings. Please note that disabling cookies may affect the functionality of our website.
                </p>

                <h3>7.5 Data Portability</h3>
                <p>
                  You have the right to request a copy of your personal information in a structured, machine-readable format.
                </p>
              </div>
            </div>
          </section>

          {/* 8. Third-Party Links */}
          <section className="privacy-section">
            <div className="privacy-section-inner">
              <div className="privacy-section-number">8</div>
              <div className="privacy-section-content">
                <h2>Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </div>
            </div>
          </section>

          {/* 9. Children's Privacy */}
          <section className="privacy-section">
            <div className="privacy-section-inner">
              <div className="privacy-section-number">9</div>
              <div className="privacy-section-content">
                <h2>Children's Privacy</h2>
                <p>
                  Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child without parental consent, we will take steps to delete that information.
                </p>
              </div>
            </div>
          </section>

          {/* 10. International Data Transfers */}
          <section className="privacy-section">
            <div className="privacy-section-inner">
              <div className="privacy-section-number">10</div>
              <div className="privacy-section-content">
                <h2>International Data Transfers</h2>
                <p>
                  Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. By using our services, you consent to the transfer of your information to these countries. We take appropriate measures to ensure your information receives adequate protection.
                </p>
              </div>
            </div>
          </section>

          {/* 11. Changes to This Privacy Policy */}
          <section className="privacy-section">
            <div className="privacy-section-inner">
              <div className="privacy-section-number">11</div>
              <div className="privacy-section-content">
                <h2>Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date. Your continued use of our services after such changes constitutes your acceptance of the updated policy.
                </p>
              </div>
            </div>
          </section>

          {/* 12. Contact Us */}
          <section className="privacy-section">
            <div className="privacy-section-inner">
              <div className="privacy-section-number">12</div>
              <div className="privacy-section-content">
                <h2>Contact Us</h2>
                <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
                <div className="privacy-contact-box">
                  <div className="privacy-contact-item">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <rect x="2" y="2" width="20" height="20" rx="6" ry="6" fill="#dbeafe"/>
                    <rect x="6" y="8" width="12" height="8" rx="2" ry="2" fill="none" stroke="#2563eb" strokeWidth="2"/>
                    <polyline points="18,9 12,13 6,9" fill="none" stroke="#2563eb" strokeWidth="2"/>
                  </svg>
                    <div>
                      <strong>Email:</strong> <a href="mailto:contact@kabini.ai">contact@kabini.ai</a>
                    </div>
                  </div>
                  <div className="privacy-contact-item">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <rect x="2" y="2" width="20" height="20" rx="6" ry="6" fill="#dbeafe"/>
                    <path d="M13 3L7 12h5l-1 7 7-9h-5l1-4z" fill="none" stroke="#2563eb" strokeWidth="2"/>
                  </svg>
                    <div>
                      <strong>Company:</strong> <span>Kabini.ai</span>
                    </div>
                  </div>
                  <div className="privacy-contact-item">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <rect x="2" y="2" width="20" height="20" rx="6" ry="6" fill="#dbeafe"/>
                    <ellipse cx="12" cy="9" rx="6.5" ry="2.5" fill="none" stroke="#2563eb" strokeWidth="2"/>
                    <path d="M5.5 9v7c0 1.2 3 2.5 6.5 2.5S18.5 17.2 18.5 16v-7" fill="none" stroke="#2563eb" strokeWidth="2"/>
                  </svg>
                    <div>
                      <strong>Address:</strong> <span>Kondapur Jyothi Granules</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 13. GDPR Compliance */}
          <section className="privacy-section">
            <div className="privacy-section-inner">
              <div className="privacy-section-number">13</div>
              <div className="privacy-section-content">
                <h2>GDPR Compliance (European Users)</h2>
                <p>If you are located in the European Economic Area (EEA), you have additional rights under the General Data Protection Regulation (GDPR):</p>
                <ul>
                  <li>Right to be informed about data collection and processing</li>
                  <li>Right to access your personal data</li>
                  <li>Right to rectification of inaccurate data</li>
                  <li>Right to erasure ("right to be forgotten")</li>
                  <li>Right to restrict processing</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                  <li>Rights related to automated decision-making and profiling</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 14. CCPA Compliance */}
          <section className="privacy-section">
            <div className="privacy-section-inner">
              <div className="privacy-section-number">14</div>
              <div className="privacy-section-content">
                <h2>CCPA Compliance (California Residents)</h2>
                <p>If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA):</p>
                <ul>
                  <li>Right to know what personal information is collected</li>
                  <li>Right to know if personal information is sold or shared</li>
                  <li>Right to opt-out of the sale of personal information</li>
                  <li>Right to deletion of personal information</li>
                  <li>Right to non-discrimination for exercising your rights</li>
                </ul>
                <p>We do not sell your personal information to third parties.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer CTA */}
        <div className="privacy-cta">
          <h3>Have Questions About Your Privacy?</h3>
          <p>Our team is here to help. Contact us if you have any questions or concerns about how we handle your data.</p>
          <a href="/contact" className="privacy-cta-button">Contact Us</a>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default PrivacyPolicy;

