import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const reviews = [
  {
    id: 1,
    text: "The staff went above and beyond to make our stay special. The garden is absolutely beautiful, and the breakfast spread was impressive. We felt like family from the moment we arrived.",
    name: "Sarah M.",
    type: "Business Traveler"
  },
  {
    id: 2,
    text: "Perfect location for business travel. Clean rooms, reliable WiFi, and the 24-hour front desk staff were incredibly helpful. The restaurant's African cuisine was a delightful surprise.",
    name: "James K.",
    type: "Frequent Visitor"
  },
  {
    id: 3,
    text: "We celebrated our anniversary here and couldn't have chosen better. The terrace dining under the stars was unforgettable. The charming décor adds such character to this hotel.",
    name: "Amira & Daniel",
    type: "Couple"
  },
  {
    id: 4,
    text: "As a family with young children, we appreciated the spacious rooms, kid-friendly meals, and the safe, welcoming environment. The pool was our kids' favorite part!",
    name: "The Okonkwo Family",
    type: "Family"
  },
  {
    id: 5,
    text: "The airport shuttle service was seamless, the room was spotless, and the bed was incredibly comfortable. I've stayed at many hotels in Juba, and La Mer Inn is by far the best.",
    name: "Michael T.",
    type: "Solo Traveler"
  },
  {
    id: 6,
    text: "Affordable luxury — that's how I'd describe La Mer Inn. You get far more than you pay for. The jacuzzi alone is worth the stay. Will definitely return on my next trip.",
    name: "Grace N.",
    type: "Returning Guest"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-primary py-20 lg:py-30 relative overflow-hidden">
      
      {/* Decorative Quotes */}
      <div className="absolute top-10 left-10 lg:top-[60px] lg:left-[80px] font-display text-[120px] lg:text-[200px] text-accent/5 -rotate-12 select-none leading-none">"</div>
      <div className="absolute bottom-10 right-10 lg:bottom-[60px] lg:right-[80px] font-display text-[120px] lg:text-[200px] text-accent/5 -rotate-12 select-none leading-none">"</div>
      
      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-[60px]">
          <motion.div 
            className="flex items-center justify-center gap-4 mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-body text-xs uppercase tracking-[0.15em] text-neutral">Guest Experiences</span>
          </motion.div>

          <motion.h2 
            className="font-display text-[32px] lg:text-[44px] text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            What Our Guests Say
          </motion.h2>
        </div>

        {/* Carousel */}
        <div className="max-w-[800px] mx-auto relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            slidesPerView={1}
            spaceBetween={40}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop={true}
            speed={800}
            autoplay={{ delay: 6000, disableOnInteraction: true }}
            pagination={{ el: '.custom-pagination', clickable: true }}
            navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="pb-12"
          >
            {reviews.map((review, i) => (
              <SwiperSlide key={review.id}>
                <div className="text-center flex flex-col items-center">
                  
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(5)].map((_, starIdx) => (
                      <motion.div
                        key={starIdx}
                        initial={{ opacity: 0.3, scale: 0.8 }}
                        animate={activeIndex === i ? { opacity: 1, scale: 1 } : { opacity: 0.3, scale: 0.8 }}
                        transition={{ duration: 0.3, delay: activeIndex === i ? starIdx * 0.1 : 0 }}
                      >
                        <Star size={20} className="fill-star text-star" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="font-accent italic text-[20px] lg:text-[24px] text-bg-secondary leading-[1.6] max-w-[700px] mx-auto">
                    "{review.text}"
                  </p>

                  {/* Guest Info */}
                  <div className="flex items-center justify-center gap-4 mt-8">
                    <div className="w-14 h-14 rounded-full border-2 border-neutral flex items-center justify-center bg-primary text-white font-display text-xl">
                      {review.name.charAt(0)}
                    </div>
                    <div className="text-left">
                      <div className="font-body text-[15px] font-semibold text-white">
                        — {review.name}
                      </div>
                      <div className="font-body text-[13px] text-neutral">
                        {review.type}
                      </div>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation (Desktop Only) */}
          <button className="custom-prev hidden lg:flex absolute top-1/2 -left-[60px] -translate-y-1/2 z-10 w-12 h-12 rounded-full border-[1.5px] border-neutral/40 items-center justify-center text-neutral hover:bg-white/10 hover:border-white hover:text-white transition-all duration-300">
            <ChevronLeft size={20} />
          </button>
          <button className="custom-next hidden lg:flex absolute top-1/2 -right-[60px] -translate-y-1/2 z-10 w-12 h-12 rounded-full border-[1.5px] border-neutral/40 items-center justify-center text-neutral hover:bg-white/10 hover:border-white hover:text-white transition-all duration-300">
            <ChevronRight size={20} />
          </button>

          {/* Custom Pagination */}
          <div className="custom-pagination flex justify-center gap-3 mt-8"></div>
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link to="/reviews" className="font-body text-sm text-bg-secondary hover:underline transition-all">
            Read More Reviews →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
