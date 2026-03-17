import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X } from 'lucide-react';
import clsx from 'clsx';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Rooms & Suites', path: '/rooms' },
  { name: 'Dining', path: '/dining' },
  { name: 'Amenities', path: '/amenities' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-smooth',
          scrolled
            ? 'h-[72px] bg-white/90 backdrop-blur-md border-b border-neutral/30 shadow-sm text-primary'
            : 'h-[88px] bg-transparent text-white'
        )}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" aria-label="La Mer Inn Hotel - Home">
            <span className="font-display font-bold text-xl tracking-wide relative overflow-hidden">
              La Mer Inn
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_0.8s_forwards]" />
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={clsx(
                  'font-body text-sm uppercase tracking-[0.08em] relative group transition-colors duration-300',
                  location.pathname === link.path ? 'font-semibold text-accent' : 'hover:text-accent'
                )}
              >
                {link.name}
                <span
                  className={clsx(
                    'absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-accent transition-all duration-300 ease-smooth',
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-5">
            <div className="flex items-center border border-current rounded-full overflow-hidden text-xs uppercase font-body h-8">
              <button className="px-3 h-full bg-current text-bg-base">EN</button>
              <button className="px-3 h-full hover:bg-current hover:text-bg-base transition-colors">AR</button>
            </div>

            <div className="relative group">
              <a
                href="tel:+211929505011"
                className="w-10 h-10 rounded-full border border-current flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-colors"
                aria-label="Call La Mer Inn Hotel"
              >
                <Phone size={18} />
              </a>
              <div className="absolute top-full right-0 mt-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 bg-white text-primary px-4 py-2 rounded-md shadow-md font-body text-sm whitespace-nowrap">
                +211 929 505 011
                <div className="absolute -top-1 right-4 w-2 h-2 bg-white rotate-45" />
              </div>
            </div>

            <Link
              to="/booking"
              className="relative overflow-hidden px-7 py-3 rounded-md bg-accent text-white font-body text-sm font-semibold uppercase tracking-[0.05em] group"
            >
              <span className="relative z-10">Book Now</span>
              <div className="absolute inset-0 bg-primary w-0 group-hover:w-full transition-all duration-400 ease-smooth z-0" />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-primary flex flex-col items-center justify-center"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #2E7FA3 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            
            <nav className="flex flex-col items-center gap-8 relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={clsx(
                      'font-display text-3xl text-white hover:text-accent transition-colors',
                      location.pathname === link.path && 'text-accent'
                    )}
                  >
                    {location.pathname === link.path && <span className="text-accent mr-2">●</span>}
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-10 w-full px-8"
              >
                <Link
                  to="/booking"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full h-14 bg-accent text-white rounded-lg font-body text-base font-bold uppercase"
                >
                  Book Now
                </Link>
              </motion.div>
            </nav>

            <motion.div
              className="absolute bottom-10 left-0 right-0 text-center flex flex-col items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div>
                <a href="tel:+211929505011" className="text-bg-secondary text-sm block mb-1">+211 929 505 011</a>
                <span className="text-neutral text-xs">Lanya St, Hai Cinema, Juba</span>
              </div>
              <div className="flex gap-4">
                {['FB', 'IG', 'X', 'TA'].map(social => (
                  <a key={social} href="#" className="w-10 h-10 rounded-full border border-neutral flex items-center justify-center text-neutral hover:bg-accent hover:text-white hover:border-accent transition-colors text-xs">
                    {social}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
