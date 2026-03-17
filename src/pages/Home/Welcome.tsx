import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Welcome() {
  const tags = [
    "🌿 Garden Views", "🅿️ Free Parking", "🍳 Breakfast Included", 
    "📶 Free WiFi", "🏊 Swimming Pool", "✈️ Airport Shuttle"
  ];

  return (
    <section className="bg-bg-base py-20 lg:py-30 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Left Column - Text Content */}
        <div>
          <motion.div 
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-8 h-[2px] bg-accent" />
            <span className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-neutral">
              About Us
            </span>
          </motion.div>

          <motion.h2 
            className="font-display text-[30px] lg:text-[44px] text-primary leading-[1.2] mb-6"
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1], delay: 0.15 }}
          >
            A Warm Welcome Awaits You in Juba
          </motion.h2>

          <motion.p 
            className="font-body text-[17px] text-text-primary leading-[1.8] mb-5"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Located in the vibrant heart of Juba, just a 10-minute walk from Juba Stadium, La Mer Inn Hotel offers a tranquil escape from the bustling city. Our thoughtfully designed accommodations, lush garden, and welcoming terrace create the perfect setting for both relaxation and discovery.
          </motion.p>

          <motion.p 
            className="font-body text-[17px] text-text-primary leading-[1.8] mb-7"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Whether you're here for business or leisure, our dedicated team is committed to making your stay unforgettable. We speak your language — Arabic and English — and we're available around the clock. Because at La Mer Inn, we don't just host guests; we create lasting memories.
          </motion.p>

          <div className="flex flex-wrap gap-2.5 mt-7 mb-8">
            {tags.map((tag, i) => (
              <motion.div
                key={tag}
                className="px-[18px] py-2 rounded-full bg-neutral/30 border border-neutral/50 font-body text-[13px] font-medium text-primary hover:bg-neutral/50 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.08, ease: [0.175, 0.885, 0.32, 1.5] }}
              >
                {tag}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link 
              to="/about" 
              className="inline-flex items-center font-body text-[15px] font-semibold text-accent group relative"
            >
              Discover Our Story
              <span className="inline-block ml-2 group-hover:translate-x-1.5 transition-transform duration-300">
                <ArrowRight size={16} />
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-accent group-hover:w-full transition-all duration-300 ease-smooth" />
            </Link>
          </motion.div>
        </div>

        {/* Right Column - Image Composition */}
        <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px] flex justify-end items-center mt-10 lg:mt-0">
          
          {/* Decorative Shape */}
          <motion.div 
            className="absolute top-[30px] right-[-20px] w-[80%] h-[60%] bg-accent/10 rounded-xl -z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />

          {/* Decorative Dots */}
          <motion.div 
            className="absolute top-0 right-0 grid grid-cols-4 gap-2 z-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20%" }}
            variants={{
              visible: { transition: { staggerChildren: 0.02, delayChildren: 0.6 } }
            }}
          >
            {Array.from({ length: 24 }).map((_, i) => (
              <motion.div 
                key={i} 
                className="w-1 h-1 rounded-full bg-neutral"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 }
                }}
              />
            ))}
          </motion.div>

          {/* Main Image */}
          <div className="relative w-[85%] aspect-[3/4] rounded-xl overflow-hidden z-10">
            <img 
              src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800" 
              alt="Hotel garden dining setup" 
              className="w-full h-full object-cover"
            />
            <motion.div 
              className="absolute inset-0 bg-bg-base origin-top"
              initial={{ scaleY: 1 }}
              whileInView={{ scaleY: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.8, ease: [0.86, 0, 0.07, 1], delay: 0.2 }}
            />
          </div>

          {/* Secondary Image */}
          <div className="absolute bottom-[-30px] left-[-30px] w-[45%] aspect-square rounded-xl border-6 border-bg-base overflow-hidden z-20 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=400" 
              alt="Close-up of African dish" 
              className="w-full h-full object-cover"
            />
            <motion.div 
              className="absolute inset-0 bg-bg-base origin-left"
              initial={{ scaleX: 1 }}
              whileInView={{ scaleX: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.8, ease: [0.86, 0, 0.07, 1], delay: 0.5 }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
