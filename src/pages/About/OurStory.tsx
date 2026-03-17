import React from 'react';
import { motion } from 'motion/react';

export default function OurStory() {
  return (
    <section className="bg-bg-secondary py-20 lg:py-30 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-20 items-start">
        
        {/* Left Column - Story Text */}
        <div>
          <motion.h2 
            className="font-display text-[32px] lg:text-[40px] text-primary leading-[1.2] mb-2"
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          >
            Welcome to La Mer Inn
          </motion.h2>

          <motion.div 
            className="h-[3px] bg-accent mb-7"
            initial={{ width: 0 }}
            whileInView={{ width: 50 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />

          <motion.p 
            className="font-body text-[17px] text-text-primary leading-[1.85] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Nestled in the vibrant Hai Cinema neighborhood of Juba, La Mer Inn Hotel was born from a vision to bring world-class hospitality to South Sudan's capital. Our name, inspired by 'The Sea' — La Mer — reflects our commitment to providing a calm, refreshing retreat amidst the energy of the city. Like the sea, we offer depth, beauty, and an endless horizon of experiences.
          </motion.p>

          <motion.p 
            className="font-body text-[17px] text-text-primary leading-[1.85] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            From our earliest days, we've been driven by a simple philosophy: treat every guest like family. This means anticipating your needs before you express them, exceeding your expectations at every turn, and ensuring that every moment of your stay is wrapped in comfort, warmth, and the genuine spirit of South Sudanese hospitality. Our 24-hour front desk isn't just about availability — it's about accessibility, attentiveness, and authentic care.
          </motion.p>

          <motion.p 
            className="font-body text-[17px] text-text-primary leading-[1.85] mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Today, La Mer Inn stands as a beloved destination for travelers from around the world — business professionals seeking a productive base, adventure seekers exploring South Sudan's untamed beauty, families creating precious memories, and couples looking for a romantic escape. Our multilingual staff, curated amenities, and genuine passion for service set us apart in a city that's rapidly growing and evolving.
          </motion.p>

          {/* Pull Quote */}
          <motion.div 
            className="relative pl-7 py-6 my-8 border-l-4 border-accent"
            initial={{ opacity: 0, height: 0 }}
            whileInView={{ opacity: 1, height: 'auto' }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8 }}
          >
            <span className="absolute -top-3 left-2 font-display text-[60px] text-accent/20 leading-none select-none">"</span>
            <p className="font-accent italic text-[22px] lg:text-[26px] text-accent leading-[1.5] relative z-10">
              At La Mer Inn, we don't just host guests — we create experiences that last a lifetime.
            </p>
          </motion.div>

          <motion.p 
            className="font-body italic text-[14px] text-neutral mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            — The La Mer Inn Family
          </motion.p>
        </div>

        {/* Right Column - Image Composition */}
        <div className="relative w-full h-full min-h-[500px] lg:min-h-[700px] flex justify-start items-start mt-10 lg:mt-0">
          
          {/* Main Image */}
          <div className="relative w-[85%] aspect-[3/4] rounded-xl overflow-hidden z-10 shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1542314831-c6a4d1409e50?auto=format&fit=crop&q=80&w=800" 
              alt="Hotel Lobby" 
              className="w-full h-full object-cover"
            />
            <motion.div 
              className="absolute inset-0 bg-primary origin-bottom"
              initial={{ scaleY: 1 }}
              whileInView={{ scaleY: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.9, ease: [0.86, 0, 0.07, 1] }}
            />
          </div>

          {/* Floating Accent Image */}
          <motion.div 
            className="absolute bottom-[-40px] right-[-30px] w-[50%] aspect-square rounded-xl border-6 border-bg-secondary overflow-hidden z-20 shadow-lg hidden sm:block"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=400" 
              alt="Hotel Detail" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Experience Badge */}
          <motion.div 
            className="absolute -top-5 -left-5 bg-accent text-white rounded-md px-6 py-4 shadow-lg z-30 flex flex-col items-center justify-center animate-[breathe_3s_ease-in-out_infinite]"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span className="font-body text-[11px] text-white/70 uppercase tracking-wider mb-1">Years of</span>
            <span className="font-display text-[18px] font-bold">Excellence</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
