import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | La Mer Inn Hotel Juba</title>
        <meta name="description" content="Read the terms and conditions for booking and staying at La Mer Inn Hotel in Juba, South Sudan." />
      </Helmet>
      
      <div className="pt-32 pb-20 lg:py-40 bg-bg-secondary min-h-screen">
        <div className="max-w-[800px] mx-auto px-6 lg:px-12">
          
          <h1 className="font-display text-[36px] lg:text-[48px] text-primary mb-8">Terms & Conditions</h1>
          
          <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-sm border border-neutral/10 prose prose-lg max-w-none">
            <p className="font-body text-[15px] text-text-secondary leading-[1.8] mb-6">
              Welcome to La Mer Inn Hotel. By accessing our website and making a reservation, you agree to comply with and be bound by the following terms and conditions.
            </p>

            <h2 className="font-display text-[24px] text-primary mt-10 mb-4">1. Reservations and Payment</h2>
            <p className="font-body text-[15px] text-text-secondary leading-[1.8] mb-4">
              All reservations are subject to availability. To secure a booking, a valid credit card or advance payment may be required. Full payment for your stay is typically required upon check-in unless otherwise specified.
            </p>
            <p className="font-body text-[15px] text-text-secondary leading-[1.8] mb-6">
              We accept major credit cards, mobile money, and cash in USD and SSP.
            </p>

            <h2 className="font-display text-[24px] text-primary mt-10 mb-4">2. Cancellation Policy</h2>
            <p className="font-body text-[15px] text-text-secondary leading-[1.8] mb-6">
              Cancellations made up to 48 hours before the scheduled arrival date will not incur any charges. Cancellations made within 48 hours of arrival, or in the case of a no-show, will be charged the equivalent of the first night's room rate.
            </p>

            <h2 className="font-display text-[24px] text-primary mt-10 mb-4">3. Check-in and Check-out</h2>
            <ul className="list-disc pl-6 font-body text-[15px] text-text-secondary leading-[1.8] mb-6 space-y-2">
              <li>Check-in time is from 2:00 PM.</li>
              <li>Check-out time is by 11:00 AM.</li>
              <li>Early check-in and late check-out are subject to availability and may incur additional charges.</li>
              <li>Guests must present a valid government-issued ID or passport upon check-in.</li>
            </ul>

            <h2 className="font-display text-[24px] text-primary mt-10 mb-4">4. Hotel Policies</h2>
            <ul className="list-disc pl-6 font-body text-[15px] text-text-secondary leading-[1.8] mb-6 space-y-2">
              <li><strong>Smoking:</strong> All indoor areas, including guest rooms, are strictly non-smoking. Designated smoking areas are available outside.</li>
              <li><strong>Pets:</strong> Pets are not permitted on the hotel premises.</li>
              <li><strong>Damage:</strong> Guests are responsible for any damage caused to hotel property during their stay and will be charged accordingly.</li>
            </ul>

            <h2 className="font-display text-[24px] text-primary mt-10 mb-4">5. Liability</h2>
            <p className="font-body text-[15px] text-text-secondary leading-[1.8] mb-6">
              La Mer Inn Hotel is not liable for any loss, damage, or theft of personal property. We recommend using the in-room safes provided for your valuables.
            </p>

            <div className="mt-12 pt-8 border-t border-neutral/20">
              <p className="font-body text-[14px] text-text-secondary">
                Last updated: March 2026. If you have any questions about these terms, please <Link to="/contact" className="text-accent hover:underline">contact us</Link>.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
