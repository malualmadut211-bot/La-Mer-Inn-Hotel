import React from 'react';
import { motion } from 'motion/react';
import { Clock, CreditCard, Ban, Info } from 'lucide-react';

const policies = [
  {
    icon: <Clock size={24} />,
    title: 'Check-in & Check-out',
    description: 'Check-in time is from 2:00 PM, and check-out is until 11:00 AM. Early check-in and late check-out are subject to availability and may incur additional charges.'
  },
  {
    icon: <CreditCard size={24} />,
    title: 'Payment Methods',
    description: 'We accept major credit cards (Visa, MasterCard, American Express), mobile money (m-GURUSH, MTN Mobile Money), and cash payments in USD and SSP.'
  },
  {
    icon: <Ban size={24} />,
    title: 'Cancellation Policy',
    description: 'Free cancellation up to 48 hours before arrival. Cancellations made within 48 hours of arrival will be charged the first night\'s room rate.'
  },
  {
    icon: <Info size={24} />,
    title: 'General Information',
    description: 'All rooms are strictly non-smoking. Pets are not allowed on the premises. Extra beds are available upon request for an additional fee.'
  }
];

export default function RoomPolicies() {
  return (
    <section className="bg-bg-secondary py-20 lg:py-30">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.div 
            className="flex items-center justify-center gap-4 mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-body text-xs uppercase tracking-[0.15em] text-neutral">Guest Information</span>
          </motion.div>

          <motion.h2 
            className="font-display text-[32px] lg:text-[40px] text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Hotel Policies
          </motion.h2>

          <motion.p 
            className="font-body text-[16px] text-text-secondary max-w-[600px] mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Important details to know before your stay at La Mer Inn.
          </motion.p>
        </div>

        {/* Policies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {policies.map((policy, i) => (
            <motion.div
              key={i}
              className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm border border-neutral/10 flex flex-col items-start gap-4 hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="w-12 h-12 rounded-full bg-bg-secondary flex items-center justify-center text-accent shrink-0">
                {policy.icon}
              </div>
              <div>
                <h3 className="font-display text-[22px] font-semibold text-primary mb-3">
                  {policy.title}
                </h3>
                <p className="font-body text-[15px] text-text-secondary leading-[1.7]">
                  {policy.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
