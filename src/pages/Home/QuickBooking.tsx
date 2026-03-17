import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Users, Home, Search, CheckCircle2, Phone } from 'lucide-react';

export default function QuickBooking() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/booking');
    }, 1500);
  };

  return (
    <section className="w-full bg-primary relative py-14 lg:py-[72px] px-6 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #2E7FA3 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

      <div className="max-w-[1000px] mx-auto relative z-10">
        
        {/* Headings */}
        <motion.h2 
          className="font-display text-[26px] lg:text-[36px] text-white text-center mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6 }}
        >
          Plan Your Perfect Stay
        </motion.h2>

        <motion.p 
          className="font-body text-base text-bg-secondary/70 text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Select your dates and let us find the ideal room for you.
        </motion.p>

        {/* Booking Form Bar */}
        <motion.form 
          onSubmit={handleSearch}
          className="bg-white rounded-xl lg:rounded-[16px] p-4 lg:p-2 shadow-[0_20px_60px_rgba(0,0,0,0.2)] flex flex-col lg:flex-row gap-3 lg:gap-0 relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onAnimationComplete={() => {
            // Add a brief glow pulse after animation completes
            const form = document.getElementById('quick-booking-form');
            if (form) {
              form.classList.add('animate-[pulse-glow_1.5s_ease-out]');
              setTimeout(() => form.classList.remove('animate-[pulse-glow_1.5s_ease-out]'), 1500);
            }
          }}
          id="quick-booking-form"
        >
          
          {/* Check-in */}
          <div className="flex-1 px-5 py-4 lg:py-4 relative border-b lg:border-b-0 lg:border-r border-neutral/30 cursor-pointer group">
            <span className="block font-body text-[10px] uppercase tracking-[0.1em] text-neutral mb-1">Check-in</span>
            <span className="block font-body text-[15px] font-medium text-text-primary">Select Date</span>
            <Calendar size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-accent group-hover:text-primary transition-colors" />
          </div>

          {/* Check-out */}
          <div className="flex-1 px-5 py-4 lg:py-4 relative border-b lg:border-b-0 lg:border-r border-neutral/30 cursor-pointer group">
            <span className="block font-body text-[10px] uppercase tracking-[0.1em] text-neutral mb-1">Check-out</span>
            <span className="block font-body text-[15px] font-medium text-text-primary">Select Date</span>
            <Calendar size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-accent group-hover:text-primary transition-colors" />
          </div>

          {/* Guests */}
          <div className="flex-[0.7] px-5 py-4 lg:py-4 relative border-b lg:border-b-0 lg:border-r border-neutral/30 cursor-pointer group">
            <span className="block font-body text-[10px] uppercase tracking-[0.1em] text-neutral mb-1">Guests</span>
            <span className="block font-body text-[15px] font-medium text-text-primary">2 Adults</span>
            <Users size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-accent group-hover:text-primary transition-colors" />
          </div>

          {/* Room Type */}
          <div className="flex-[0.9] px-5 py-4 lg:py-4 relative cursor-pointer group">
            <span className="block font-body text-[10px] uppercase tracking-[0.1em] text-neutral mb-1">Room Type</span>
            <span className="block font-body text-[15px] font-medium text-text-primary">Any Room</span>
            <Home size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-accent group-hover:text-primary transition-colors" />
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            disabled={loading}
            className="w-full lg:w-auto mt-2 lg:mt-0 px-9 py-4 bg-accent text-white border-none rounded-lg lg:rounded-r-[14px] lg:rounded-l-none font-body text-[14px] font-bold uppercase tracking-[0.05em] flex items-center justify-center gap-2 hover:bg-primary hover:shadow-[0_4px_15px_rgba(31,90,122,0.4)] hover:scale-[1.02] transition-all duration-300 disabled:opacity-80 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Searching...
              </>
            ) : (
              <>
                <Search size={16} />
                Check Availability
              </>
            )}
          </button>

        </motion.form>

        {/* Trust Indicators */}
        <div className="flex justify-center gap-6 mt-6 flex-wrap">
          <div className="flex items-center gap-1.5 font-body text-[13px] text-bg-secondary/70">
            <CheckCircle2 size={14} className="text-accent" />
            Free Cancellation Available
          </div>
          <div className="flex items-center gap-1.5 font-body text-[13px] text-bg-secondary/70">
            <CheckCircle2 size={14} className="text-accent" />
            Best Rate Guarantee
          </div>
          <a href="tel:+211929505011" className="flex items-center gap-1.5 font-body text-[13px] text-bg-secondary/70 hover:text-white hover:underline transition-colors">
            <Phone size={14} className="text-accent" />
            Or call: +211 929 505 011
          </a>
        </div>

      </div>
    </section>
  );
}
