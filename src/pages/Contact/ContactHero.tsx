import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function ContactHero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const headingText = "Contact Us".split(" ");

  return (
    <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <img 
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1920" 
          alt="Hotel Reception" 
          className="w-full h-[130%] object-cover -top-[15%]"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/85 via-primary/50 to-black/30" />

      {/* Content */}
      <div className="relative z-20 h-full max-w-[1280px] mx-auto px-6 lg:px-20 flex flex-col justify-center items-center text-center pt-20">
        
        {/* Breadcrumb */}
        <motion.div 
          className="flex items-center gap-2 font-body text-[13px] text-bg-secondary/70 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link to="/" className="hover:underline hover:text-bg-secondary transition-colors">Home</Link>
          <ChevronRight size={14} className="text-neutral" />
          <span className="text-white">Contact</span>
        </motion.div>

        {/* Pre-heading */}
        <motion.div 
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="font-body text-[12px] font-semibold uppercase tracking-[0.2em] text-neutral">
            We're Here to Help
          </span>
        </motion.div>

        {/* Main Heading */}
        <h1 className="font-display text-[42px] lg:text-[68px] font-bold text-white leading-[1.1] flex flex-wrap justify-center gap-x-3 lg:gap-x-4 mb-4">
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
          className="font-accent italic text-[18px] lg:text-[22px] text-bg-secondary leading-[1.6] max-w-[580px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
        >
          Have a question or need assistance? Reach out to our dedicated team.
        </motion.p>

      </div>

      {/* SVG Wave Bottom Edge */}
      <div className="absolute -bottom-[1px] left-0 w-[200%] z-30 h-[40px] lg:h-[60px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-bg-secondary animate-[wave-shift_12s_linear_infinite]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
}
