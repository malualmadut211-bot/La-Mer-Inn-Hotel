import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, ChevronUp } from 'lucide-react';
import clsx from 'clsx';

export default function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [wiggle, setWiggle] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWiggle(true);
      setTimeout(() => setWiggle(false), 400);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isBookingPage = location.pathname === '/booking';

  return (
    <>
      {/* Book Now Button */}
      {!isBookingPage && (
        <Link
          to="/booking"
          className="fixed bottom-5 lg:bottom-8 right-5 lg:right-8 z-[900] flex items-center justify-center bg-primary text-white rounded-full shadow-lg group hover:bg-accent transition-all duration-300 ease-smooth overflow-hidden w-[52px] lg:w-[56px] h-[52px] lg:h-[56px] lg:hover:w-[160px] lg:hover:rounded-[28px] animate-[breathe_3s_ease-in-out_infinite] lg:hover:animate-none"
          aria-label="Book a room at La Mer Inn Hotel"
        >
          <Calendar size={24} className="flex-shrink-0 lg:group-hover:-translate-x-12 transition-transform duration-300" />
          <span className="absolute right-6 opacity-0 translate-x-4 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 font-body text-sm font-semibold whitespace-nowrap transition-all duration-300 delay-100">
            Book Now
          </span>
        </Link>
      )}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/211929505011?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20room%20at%20La%20Mer%20Inn%20Hotel."
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(
          "fixed bottom-5 lg:bottom-8 left-5 lg:left-8 z-[900] flex items-center justify-center bg-[#25D366] text-white rounded-full shadow-[0_4px_15px_rgba(37,211,102,0.35)] group hover:bg-[#20BD5A] transition-all duration-300 ease-smooth overflow-hidden w-[48px] lg:w-[52px] h-[48px] lg:h-[52px] lg:hover:w-[160px] lg:hover:rounded-[28px]",
          wiggle && "animate-[wiggle_0.4s_ease]"
        )}
        aria-label="Chat with La Mer Inn Hotel on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 lg:group-hover:-translate-x-12 transition-transform duration-300">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
        <span className="absolute right-6 opacity-0 translate-x-4 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 font-body text-sm font-semibold whitespace-nowrap transition-all duration-300 delay-100">
          Chat with us
        </span>
      </a>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className={clsx(
          "fixed bottom-20 lg:bottom-[100px] right-5 lg:right-8 z-[899] w-10 lg:w-11 h-10 lg:h-11 rounded-full bg-white border-[1.5px] border-neutral shadow-sm flex items-center justify-center text-primary hover:bg-primary hover:border-primary hover:text-white hover:-translate-y-1 hover:shadow-md transition-all duration-400 ease-smooth group",
          showBackToTop ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-5 pointer-events-none"
        )}
        aria-label="Scroll back to top"
      >
        <ChevronUp size={20} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
      </button>
    </>
  );
}
