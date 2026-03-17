import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';

export default function Hero() {
  const headingText = "La Mer Inn Hotel".split(" ");

  return (
    <section className="relative w-full h-[100dvh] overflow-hidden">
      {/* Background Image/Video */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542314831-c6a4d1409e50?auto=format&fit=crop&q=80&w=1920" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/75 via-primary/45 to-transparent"></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary/60 via-transparent to-transparent h-[30%] top-auto"></div>

      {/* Content */}
      <div className="relative z-20 h-full max-w-[1280px] mx-auto px-6 lg:px-20 flex flex-col justify-center items-center lg:items-start">
        
        {/* Pre-heading */}
        <motion.div 
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 3.5 }} // Delay accounts for loader
        >
          <motion.div 
            className="h-[2px] bg-accent"
            initial={{ width: 0 }}
            animate={{ width: 40 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 3.5 }}
          />
          <span className="font-body text-[13px] font-medium uppercase tracking-[0.2em] text-bg-secondary">
            Welcome To
          </span>
        </motion.div>

        {/* Main Heading */}
        <h1 className="font-display text-[42px] lg:text-[76px] font-bold text-white leading-[1.05] flex flex-wrap justify-center lg:justify-start gap-x-4 lg:gap-x-6 drop-shadow-2xl">
          {headingText.map((word, i) => (
            <span key={i} className="overflow-hidden inline-block">
              <motion.span
                className="inline-block"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1], delay: 3.8 + i * 0.12 }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Tagline */}
        <motion.p 
          className="font-accent italic text-[20px] lg:text-[26px] text-bg-secondary font-light tracking-[0.02em] mt-4 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 4.3 }}
        >
          Stay at our hotel <span className="text-accent">—</span> let us take care of you.
        </motion.p>

        {/* Subtitle */}
        <motion.p 
          className="font-body text-[15px] lg:text-[17px] text-white/75 font-normal mt-2 text-center lg:text-left"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 4.6 }}
        >
          Your serene oasis in the heart of Juba, South Sudan
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 mt-9 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275], delay: 4.9 }}
        >
          <Link 
            to="/booking" 
            className="relative overflow-hidden px-10 py-[18px] rounded-md bg-accent text-white font-body text-[15px] font-semibold uppercase tracking-[0.06em] flex items-center justify-center gap-2 group hover:shadow-[0_8px_30px_rgba(46,127,163,0.4)] transition-all duration-300 w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book Your Stay
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-[#3A9BBF] w-0 group-hover:w-full transition-all duration-400 ease-smooth z-0" />
          </Link>
          <Link 
            to="/rooms" 
            className="px-10 py-[18px] rounded-md bg-transparent border-2 border-white/70 text-white font-body text-[15px] font-semibold uppercase tracking-[0.06em] flex items-center justify-center hover:bg-white hover:text-primary hover:border-white transition-all duration-400 w-full sm:w-auto"
          >
            Explore Our Rooms
          </Link>
        </motion.div>

        {/* Location Badge */}
        <motion.div 
          className="flex items-center gap-2 mt-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 5.3 }}
        >
          <MapPin size={14} className="text-accent" />
          <Link to="/contact#map" className="font-body text-sm text-white/60 hover:text-white/90 hover:underline transition-colors">
            Lanya Street, Hai Cinema, Juba, South Sudan
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 0.8, delay: 6.0 }}
      >
        <div className="w-6 h-9 border-[1.5px] border-white rounded-full flex justify-center p-1">
          <motion.div 
            className="w-1 h-1 bg-white rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <span className="font-body text-[11px] uppercase tracking-[0.15em] text-white/50">
          Scroll to Discover
        </span>
      </motion.div>

      {/* SVG Wave Bottom Edge */}
      <div className="absolute -bottom-[1px] left-0 w-[200%] z-30 h-[50px] lg:h-[80px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-bg-base animate-[wave-shift_10s_linear_infinite]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
}
