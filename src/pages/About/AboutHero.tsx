import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function AboutHero() {
  const headingText = "Our Story & Experience".split(" ");

  return (
    <section className="relative w-full h-[50vh] lg:h-[65vh] min-h-[400px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1920" 
          alt="La Mer Inn Hotel Lobby" 
          className="w-full h-full object-cover object-[center_40%] animate-[zoom-in_15s_linear_infinite]"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-primary/70 to-primary/50" />

      {/* Content */}
      <div className="relative z-20 h-full max-w-[1280px] mx-auto px-6 lg:px-20 flex flex-col justify-end pb-10 lg:pb-[60px]">
        
        {/* Breadcrumb */}
        <motion.div 
          className="flex items-center gap-2 font-body text-[13px] text-bg-secondary/70 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link to="/" className="hover:underline hover:text-bg-secondary transition-colors">Home</Link>
          <ChevronRight size={14} className="text-neutral" />
          <span className="text-white">About Us</span>
        </motion.div>

        {/* Main Heading */}
        <h1 className="font-display text-[36px] lg:text-[56px] font-bold text-white leading-[1.1] flex flex-wrap gap-x-3 lg:gap-x-4 mb-2">
          {headingText.map((word, i) => (
            <span key={i} className="overflow-hidden inline-block">
              <motion.span
                className="inline-block"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1], delay: 0.3 + i * 0.1 }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Tagline */}
        <motion.p 
          className="font-accent italic text-[22px] text-bg-secondary font-light tracking-[0.02em]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        >
          Rooted in Juba, dedicated to world-class hospitality.
        </motion.p>

      </div>

      {/* SVG Wave Bottom Edge */}
      <div className="absolute -bottom-[1px] left-0 w-[200%] z-30 h-[40px] lg:h-[60px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-bg-secondary animate-[wave-shift_10s_linear_infinite]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
}
