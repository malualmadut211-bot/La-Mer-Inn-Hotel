import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | La Mer Inn Hotel Juba</title>
        <meta name="description" content="Learn how La Mer Inn Hotel collects, uses, and protects your personal information." />
      </Helmet>
      
      <div className="pt-32 pb-20 lg:py-40 bg-bg-secondary min-h-screen">
        <div className="max-w-[800px] mx-auto px-6 lg:px-12">
          
          <h1 className="font-display text-[36px] lg:text-[48px] text-primary mb-8">Privacy Policy</h1>
          
          <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-sm border border-neutral/10 prose prose-lg max-w-none">
            <p className="font-body text-[15px] text-text-secondary leading-[1.8] mb-6">
              At La Mer Inn Hotel, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website or use our services.
            </p>

            <h2 className="font-display text-[24px] text-primary mt-10 mb-4">1. Information We Collect</h2>
            <p className="font-body text-[15px] text-text-secondary leading-[1.8] mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 font-body text-[15px] text-text-secondary leading-[1.8] mb-6 space-y-2">
              <li>Make a reservation or booking inquiry.</li>
              <li>Contact us via email, phone, or our website contact form.</li>
              <li>Subscribe to our newsletter or promotional materials.</li>
              <li>Check-in at the hotel.</li>
            </ul>
            <p className="font-body text-[15px] text-text-secondary leading-[1.8] mb-6">
              This information may include your name, email address, phone number, payment details, passport/ID information, and preferences related to your stay.
            </p>

            <h2 className="font-display text-[24px] text-primary mt-10 mb-4">2. How We Use Your Information</h2>
            <p className="font-body text-[15px] text-text-secondary leading-[1.8] mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 font-body text-[15px] text-text-secondary leading-[1.8] mb-6 space-y-2">
              <li>To process and manage your reservations and payments.</li>
              <li>To provide customer support and respond to your inquiries.</li>
              <li>To personalize your experience and improve our services.</li>
              <li>To send administrative information, such as booking confirmations and policy updates.</li>
              <li>To send marketing communications, if you have opted in to receive them.</li>
              <li>To comply with legal obligations and ensure the safety of our guests and staff.</li>
            </ul>

            <h2 className="font-display text-[24px] text-primary mt-10 mb-4">3. Data Security</h2>
            <p className="font-body text-[15px] text-text-secondary leading-[1.8] mb-6">
              We implement reasonable administrative, technical, and physical security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
            </p>

            <h2 className="font-display text-[24px] text-primary mt-10 mb-4">4. Sharing Your Information</h2>
            <p className="font-body text-[15px] text-text-secondary leading-[1.8] mb-6">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you (e.g., payment processors, booking engines), provided that those parties agree to keep this information confidential.
            </p>

            <h2 className="font-display text-[24px] text-primary mt-10 mb-4">5. Your Rights</h2>
            <p className="font-body text-[15px] text-text-secondary leading-[1.8] mb-6">
              You have the right to access, correct, or delete your personal information held by us. You may also opt-out of receiving marketing communications at any time by following the unsubscribe instructions included in those emails or by contacting us directly.
            </p>

            <div className="mt-12 pt-8 border-t border-neutral/20">
              <p className="font-body text-[14px] text-text-secondary">
                Last updated: March 2026. If you have any questions about this Privacy Policy, please <Link to="/contact" className="text-accent hover:underline">contact us</Link>.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
