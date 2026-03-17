import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

export default function FinalCTA() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const headingText = "Your Perfect Stay Starts Here".split(" ");

  return (
    <section className="relative w-full min-h-[350px] lg:min-h-[450px] overflow-hidden">
      {/* SVG Wave Top Edge */}
      <div className="absolute top-[-1px] left-0 w-[200%] z-30 h-[50px] lg:h-[80px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-white animate-[wave-shift_10s_linear_infinite]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>

      {/* Parallax Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <img 
          src="https://images.unsplash.com/photo-1542314831-c6a4d1409e50?auto=format&fit=crop&q=80&w=1920" 
          alt="Hotel at sunset" 
          className="w-full h-[120%] object-cover -top-[10%]"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/82 to-accent/70" />

      {/* Content */}
      <div className="relative z-20 max-w-[700px] mx-auto px-6 py-[100px] lg:py-[120px] flex flex-col justify-center items-center text-center h-full">
        
        <h2 className="font-display text-[32px] lg:text-[48px] text-white leading-[1.1] mb-5 flex flex-wrap justify-center gap-x-3">
          {headingText.map((word, i) => (
            <span key={i} className="overflow-hidden inline-block">
              <motion.span
                className="inline-block"
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1], delay: i * 0.1 }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h2>

        <motion.p 
          className="font-body text-[18px] text-bg-secondary/85 leading-[1.7] mb-9"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Experience the warmth of South Sudanese hospitality. Book your room today and let us take care of the rest.
        </motion.p>

        <motion.div 
          className="flex flex-wrap justify-center gap-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link 
            to="/booking" 
            className="px-11 py-[18px] rounded-md bg-accent text-white font-body text-[15px] font-bold uppercase tracking-[0.06em] hover:bg-[#3A9BBF] hover:shadow-[0_8px_30px_rgba(46,127,163,0.4)] transition-all duration-300 w-full sm:w-auto"
          >
            Reserve Now
          </Link>
          <Link 
            to="/contact" 
            className="px-11 py-[18px] rounded-md bg-transparent border-2 border-white text-white font-body text-[15px] font-semibold uppercase tracking-[0.06em] hover:bg-white hover:text-primary transition-all duration-300 w-full sm:w-auto"
          >
            Contact Us
          </Link>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-6 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {['Free Cancellation', 'Best Price Guarantee', '24/7 Support'].map((badge, i) => (
            <div key={i} className="flex items-center gap-1.5 font-body text-[13px] text-white/70">
              <Check size={14} className="text-success" />
              {badge}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
