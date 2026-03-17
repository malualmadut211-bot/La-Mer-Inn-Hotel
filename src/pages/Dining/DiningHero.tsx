import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowDown } from 'lucide-react';

export default function DiningHero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const headingText = "Culinary Excellence".split(" ");

  return (
    <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <img 
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1920" 
          alt="Restaurant Dining" 
          className="w-full h-[130%] object-cover -top-[15%]"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/85 via-primary/50 to-black/30" />

      {/* Content */}
      <div className="relative z-20 h-full max-w-[1280px] mx-auto px-6 lg:px-20 flex flex-col justify-center items-start pt-20">
        
        {/* Breadcrumb */}
        <motion.div 
          className="flex items-center gap-2 font-body text-[13px] text-bg-secondary/70 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link to="/" className="hover:underline hover:text-bg-secondary transition-colors">Home</Link>
          <ChevronRight size={14} className="text-neutral" />
          <span className="text-white">Dining</span>
        </motion.div>

        {/* Pre-heading */}
        <motion.div 
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div 
            className="h-[2px] bg-accent"
            initial={{ width: 0 }}
            animate={{ width: 30 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
          />
          <span className="font-body text-[12px] font-semibold uppercase tracking-[0.2em] text-neutral">
            Taste of Juba
          </span>
        </motion.div>

        {/* Main Heading */}
        <h1 className="font-display text-[42px] lg:text-[68px] font-bold text-white leading-[1.1] flex flex-wrap gap-x-3 lg:gap-x-4 mb-4">
          {headingText.map((word, i) => (
            <span key={i} className="overflow-hidden inline-block">
              <motion.span
                className="inline-block"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1], delay: 0.4 + i * 0.12 }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Tagline */}
        <motion.p 
          className="font-accent italic text-[18px] lg:text-[22px] text-bg-secondary leading-[1.6] max-w-[580px] mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
        >
          Savor a symphony of flavors where local ingredients meet international culinary artistry, served in an atmosphere of relaxed elegance.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 mb-6 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <button 
            onClick={() => document.getElementById('menu-highlights')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative overflow-hidden px-9 py-4 rounded-lg bg-accent text-white font-body text-[15px] font-semibold uppercase tracking-[0.06em] border-2 border-accent flex items-center justify-center group hover:shadow-[0_8px_30px_rgba(46,127,163,0.3)] hover:scale-[1.03] transition-all duration-300 w-full sm:w-auto"
          >
            <span className="relative z-10 group-hover:text-primary transition-colors duration-300">View Menu</span>
            <div className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-400 ease-smooth z-0 origin-left" />
          </button>
          <button 
            onClick={() => document.getElementById('dining-reservations')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative overflow-hidden px-9 py-4 rounded-lg bg-transparent border-2 border-white text-white font-body text-[15px] font-semibold uppercase tracking-[0.06em] flex items-center justify-center gap-2 group transition-all duration-300 w-full sm:w-auto"
          >
            <span className="relative z-10 group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
              Book a Table
              <ArrowDown size={16} className="opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
            </span>
            <div className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-400 ease-smooth z-0 origin-left" />
          </button>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="w-[1px] h-[30px] bg-white/50 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/3 bg-white"
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <span className="font-body text-[11px] text-white/40 uppercase tracking-widest">Scroll to explore</span>
      </div>

      {/* SVG Wave Bottom Edge */}
      <div className="absolute -bottom-[1px] left-0 w-[200%] z-30 h-[40px] lg:h-[60px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-white animate-[wave-shift_12s_linear_infinite]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
}
