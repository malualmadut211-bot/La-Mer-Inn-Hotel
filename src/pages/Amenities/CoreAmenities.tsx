import React from 'react';
import { motion } from 'motion/react';
import { Wifi, Car, Shield, Coffee, Tv, Wind, Utensils, Briefcase } from 'lucide-react';

const amenities = [
  {
    icon: <Wifi size={32} />,
    title: 'High-Speed Wi-Fi',
    description: 'Stay connected with complimentary high-speed internet access available throughout the hotel, including all guest rooms and public areas.'
  },
  {
    icon: <Car size={32} />,
    title: 'Secure Parking',
    description: 'Enjoy peace of mind with our complimentary, secure on-site parking for all registered guests, monitored 24/7.'
  },
  {
    icon: <Shield size={32} />,
    title: '24/7 Security',
    description: 'Your safety is our priority. Our premises are protected by professional security personnel and comprehensive CCTV surveillance around the clock.'
  },
  {
    icon: <Utensils size={32} />,
    title: 'Room Service',
    description: 'Dine in the comfort of your room with our extensive room service menu, available from early morning until late evening.'
  },
  {
    icon: <Wind size={32} />,
    title: 'Air Conditioning',
    description: 'Every room is equipped with individually controlled air conditioning to ensure your comfort regardless of the weather outside.'
  },
  {
    icon: <Coffee size={32} />,
    title: 'Daily Housekeeping',
    description: 'Our dedicated housekeeping team ensures your room is refreshed daily, maintaining the highest standards of cleanliness.'
  },
  {
    icon: <Tv size={32} />,
    title: 'Smart TVs',
    description: 'Relax with a wide selection of international and local channels on modern flat-screen Smart TVs in every room.'
  },
  {
    icon: <Briefcase size={32} />,
    title: 'Luggage Storage',
    description: 'Arriving early or departing late? We offer secure luggage storage so you can explore Juba unencumbered.'
  }
];

export default function CoreAmenities() {
  return (
    <section id="core-amenities" className="bg-bg-secondary py-20 lg:py-30">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div 
            className="flex items-center justify-center gap-4 mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-body text-xs uppercase tracking-[0.15em] text-neutral">Hotel Facilities</span>
          </motion.div>

          <motion.h2 
            className="font-display text-[32px] lg:text-[40px] text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Designed for Your Comfort
          </motion.h2>

          <motion.p 
            className="font-body text-[16px] text-text-secondary max-w-[600px] mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We've thought of every detail to ensure your stay is seamless, secure, and completely relaxing.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-sm border border-neutral/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-14 h-14 rounded-xl bg-bg-secondary flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="font-display text-[20px] font-semibold text-primary mb-3">
                {item.title}
              </h3>
              <p className="font-body text-[14px] text-text-secondary leading-[1.6]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
