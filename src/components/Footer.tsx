import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError(true);
      return;
    }
    setError(false);
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
    setEmail('');
  };

  return (
    <footer className="w-full bg-primary relative pt-20 lg:pt-24 pb-6 overflow-hidden">
      {/* Top Wave Divider */}
      <div className="absolute top-0 left-0 w-[200%] h-12 lg:h-20 -translate-y-1 z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-bg-base animate-[wave-shift_12s_linear_infinite]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>

      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #2E7FA3 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-10 lg:gap-12">
          
          {/* Column 1 - Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5 text-white">
              <span className="font-display font-bold text-2xl tracking-wide">La Mer Inn</span>
            </div>
            <p className="font-accent italic text-base text-bg-secondary leading-relaxed mb-6">
              Stay at our hotel — let us take care of you.
            </p>
            <p className="font-body text-sm text-neutral leading-relaxed mb-7">
              A boutique hotel experience in the heart of Juba, South Sudan. Offering world-class hospitality, authentic African cuisine, and a serene escape for every traveler.
            </p>
            <div className="flex gap-3">
              {['FB', 'IG', 'X', 'TA'].map((social) => (
                <a
                  key={social}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border-[1.5px] border-neutral/40 flex items-center justify-center text-neutral hover:bg-accent hover:border-accent hover:text-white hover:-translate-y-1 transition-all duration-300"
                  aria-label={`Visit our ${social} page`}
                >
                  <span className="text-xs font-body">{social}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="font-body text-base font-semibold text-white uppercase tracking-[0.08em] mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-10 h-[2px] bg-accent" />
            </h3>
            <ul className="flex flex-col gap-3.5">
              {['Home', 'About Us', 'Rooms & Suites', 'Dining', 'Amenities', 'Gallery', 'Contact', 'Book Now'].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                    className="font-body text-[15px] text-neutral flex items-center gap-2 group hover:text-bg-secondary transition-colors duration-300"
                  >
                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{link}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div>
            <h3 className="font-body text-base font-semibold text-white uppercase tracking-[0.08em] mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-10 h-[2px] bg-accent" />
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-1 flex-shrink-0" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-neutral hover:text-bg-secondary transition-colors">
                  RJV6+R64, Lanya Street, Hai Cinema, Juba, South Sudan
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-accent flex-shrink-0" />
                <a href="tel:+211929505011" className="font-body text-sm text-neutral hover:text-bg-secondary transition-colors">
                  +211 929 505 011
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-accent flex-shrink-0" />
                <a href="mailto:info@lamerinnhotel.com" className="font-body text-sm text-neutral hover:text-bg-secondary transition-colors">
                  info@lamerinnhotel.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-accent flex-shrink-0" />
                <span className="font-body text-sm text-neutral">
                  Front Desk: Open 24/7
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-[#25D366] flex-shrink-0">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <a href="https://wa.me/211929505011" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-neutral hover:text-bg-secondary transition-colors">
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="font-body text-base font-semibold text-white uppercase tracking-[0.08em] mb-6 relative inline-block">
              Stay Connected
              <span className="absolute -bottom-2 left-0 w-10 h-[2px] bg-accent" />
            </h3>
            <p className="font-body text-sm text-neutral leading-[1.7] mb-5">
              Subscribe to receive exclusive offers, travel tips, and the latest news from La Mer Inn.
            </p>
            
            <form onSubmit={handleSubscribe} className="relative">
              {subscribed ? (
                <div className="h-12 bg-success/20 border border-success/50 rounded-md flex items-center justify-center text-bg-secondary text-sm font-body">
                  <svg className="w-5 h-5 mr-2 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Subscribed! Thank you.
                </div>
              ) : (
                <>
                  <div className="flex h-12 rounded-md overflow-hidden">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className={`flex-1 bg-white/10 border ${error ? 'border-error' : 'border-neutral/30'} border-r-0 px-4 text-white font-body text-sm placeholder:text-neutral/60 focus:outline-none focus:border-accent focus:bg-white/15 transition-colors`}
                    />
                    <button
                      type="submit"
                      className="w-12 bg-accent flex items-center justify-center hover:bg-[#3A8FB8] transition-colors"
                      aria-label="Subscribe"
                    >
                      <ArrowRight size={18} className="text-white" />
                    </button>
                  </div>
                  {error && <p className="text-error text-xs mt-1 font-body absolute -bottom-5">Please enter a valid email</p>}
                </>
              )}
            </form>
            <p className="font-body text-xs text-neutral/60 mt-6">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-6 border-t border-neutral/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-[13px] text-neutral/70 text-center md:text-left">
            © 2025 La Mer Inn Hotel, Juba, South Sudan. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 font-body text-[13px] text-neutral/70">
            <Link to="/privacy" className="hover:text-bg-secondary transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms" className="hover:text-bg-secondary transition-colors">Terms of Service</Link>
            <span>|</span>
            <Link to="/sitemap" className="hover:text-bg-secondary transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
