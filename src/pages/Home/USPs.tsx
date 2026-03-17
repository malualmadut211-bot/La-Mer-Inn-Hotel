import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Wallet, Heart, Palette, Utensils } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const usps = [
  {
    num: '01',
    icon: <MapPin size={28} />,
    title: 'Convenient Location',
    desc: 'Just minutes from Juba Stadium, John Garang Memorial, and only 1.2 miles from Juba Airport — perfectly positioned for effortless exploration of the city.'
  },
  {
    num: '02',
    icon: <Wallet size={28} />,
    title: 'Affordable Pricing',
    desc: 'Enjoy premium hospitality at competitive rates designed for budget-conscious travelers, without ever compromising on quality or comfort.'
  },
  {
    num: '03',
    icon: <Heart size={28} />,
    title: 'Friendly Staff',
    desc: 'Our multilingual team (Arabic & English) is available 24/7, praised by guests for their genuine warmth, helpfulness, and attentive care.'
  },
  {
    num: '04',
    icon: <Palette size={28} />,
    title: 'Charming Décor',
    desc: 'Unique antique décor and thoughtful design touches throughout the hotel create an atmosphere of warmth, character, and timeless elegance.'
  },
  {
    num: '05',
    icon: <Utensils size={28} />,
    title: 'Outdoor Dining',
    desc: 'Dine under the African sky in our beautiful garden and terrace settings, with a diverse menu celebrating authentic local and continental flavors.'
  }
];

export default function USPs() {
  return (
    <section className="bg-bg-secondary py-20 lg:py-30">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <motion.h2 
          className="font-display text-[32px] lg:text-[44px] text-primary text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6 }}
        >
          Why Guests Love La Mer Inn
        </motion.h2>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-5 gap-6">
          {usps.map((usp, i) => (
            <motion.div
              key={usp.num}
              className="bg-white rounded-xl p-6 xl:p-8 relative overflow-hidden border border-neutral/20 min-h-[280px] group hover:-translate-y-1.5 hover:shadow-lg hover:border-accent/20 transition-all duration-400 ease-smooth"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.12 }}
            >
              {/* Background Number */}
              <div className="absolute -top-2.5 -right-1.5 font-display text-[80px] font-bold text-accent/10 pointer-events-none group-hover:text-accent/15 group-hover:-translate-y-1 transition-all duration-400">
                {usp.num}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-primary mb-5">
                {usp.icon}
              </div>

              {/* Title */}
              <h3 className="font-display text-[20px] font-semibold text-primary mb-2 relative z-10">
                {usp.title}
              </h3>

              {/* Accent Line */}
              <div className="w-[30px] h-[2px] bg-accent mb-3 group-hover:w-[50px] transition-all duration-400 ease-smooth relative z-10" />

              {/* Description */}
              <p className="font-body text-sm text-text-secondary leading-[1.65] relative z-10">
                {usp.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className="lg:hidden">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={16}
            breakpoints={{
              640: { slidesPerView: 2.2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 24 }
            }}
            className="pb-8"
          >
            {usps.map((usp, i) => (
              <SwiperSlide key={usp.num}>
                <motion.div
                  className="bg-white rounded-xl p-6 relative overflow-hidden border border-neutral/20 min-h-[280px] group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.12 }}
                >
                  <div className="absolute -top-2.5 -right-1.5 font-display text-[80px] font-bold text-accent/10 pointer-events-none">
                    {usp.num}
                  </div>
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-primary mb-5">
                    {usp.icon}
                  </div>
                  <h3 className="font-display text-[20px] font-semibold text-primary mb-2 relative z-10">
                    {usp.title}
                  </h3>
                  <div className="w-[30px] h-[2px] bg-accent mb-3 relative z-10" />
                  <p className="font-body text-sm text-text-secondary leading-[1.65] relative z-10">
                    {usp.desc}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
