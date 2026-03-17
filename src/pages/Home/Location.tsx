import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MapPin, Copy, Check, Phone, ArrowRight } from 'lucide-react';

export default function Location() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("RJV6+R64, Lanya Street, Hai Cinema, Juba, South Sudan");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const landmarks = [
    { icon: "🏟️", name: "Juba Stadium", dist: "10-minute walk" },
    { icon: "🗽", name: "John Garang Memorial", dist: "2.5 miles" },
    { icon: "🦁", name: "Juba Game Reserve", dist: "8.3 miles" },
    { icon: "✈️", name: "Juba International Airport", dist: "1.2 miles" }
  ];

  return (
    <section className="bg-bg-base py-20 lg:py-30 overflow-hidden" id="location">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-16 items-center">
        
        {/* Left Column - Text Content */}
        <div>
          <motion.div 
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-8 h-[2px] bg-accent" />
            <span className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-neutral">
              Our Location
            </span>
          </motion.div>

          <motion.h2 
            className="font-display text-[32px] lg:text-[40px] text-primary leading-[1.2] mb-6"
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1], delay: 0.15 }}
          >
            Find Us in the Heart of Juba
          </motion.h2>

          {/* Address Block */}
          <motion.div 
            className="flex items-start gap-3 my-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <MapPin size={20} className="text-accent mt-0.5 flex-shrink-0" />
            <p className="font-body text-[16px] text-text-primary leading-[1.6]">
              RJV6+R64, Lanya Street, Hai Cinema, Juba, South Sudan
            </p>
            <button 
              onClick={handleCopy}
              className="p-1.5 rounded-md hover:bg-neutral/20 text-neutral transition-colors relative group"
              aria-label="Copy address"
            >
              {copied ? <Check size={18} className="text-success" /> : <Copy size={18} />}
              {/* Tooltip */}
              {copied && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-text-primary text-white text-[11px] font-body px-2 py-1 rounded whitespace-nowrap">
                  Copied!
                </span>
              )}
            </button>
          </motion.div>

          {/* Nearby Landmarks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-body text-[16px] font-semibold text-primary my-6">
              Nearby Attractions
            </h3>
            <ul className="flex flex-col gap-4">
              {landmarks.map((item, i) => (
                <motion.li 
                  key={i}
                  className="flex items-center gap-4 p-3 rounded-md bg-white/50 hover:bg-white/80 hover:translate-x-1 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                >
                  <div className="w-9 h-9 rounded-full bg-bg-secondary flex items-center justify-center text-lg">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-body text-[15px] font-medium text-primary">{item.name}</div>
                    <div className="font-body text-[13px] text-text-secondary">{item.dist}</div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* CTA Group */}
          <motion.div 
            className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <a 
              href="https://maps.google.com/?q=La+Mer+Inn+Hotel+Juba" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-accent text-white font-body text-[14px] font-semibold uppercase tracking-[0.05em] hover:bg-[#3A9BBF] transition-colors group"
            >
              Get Directions
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="tel:+211929505011" 
              className="flex items-center gap-2 font-body text-[15px] font-semibold text-primary hover:text-accent transition-colors"
            >
              <Phone size={18} />
              Call Us: +211 929 505 011
            </a>
          </motion.div>

        </div>

        {/* Right Column - Map */}
        <motion.div 
          className="relative w-full h-[300px] lg:h-[450px] rounded-xl overflow-hidden shadow-lg group"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          {/* Animated Border */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 rounded-xl" xmlns="http://www.w3.org/2000/svg">
            <rect 
              x="1.5" y="1.5" 
              width="calc(100% - 3px)" height="calc(100% - 3px)" 
              rx="14" ry="14" 
              fill="none" 
              stroke="#2E7FA3" 
              strokeWidth="3" 
              strokeDasharray="2000" 
              className="animate-[draw-border_1.5s_ease-out_forwards]" 
            />
          </svg>

          {/* Map Iframe */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.568478415783!2d31.57992507567885!3d4.851700095123984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1712810022222221%3A0x123456789abcdef!2sHai%20Cinema%2C%20Juba%2C%20South%20Sudan!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="La Mer Inn Hotel Location"
            className="transition-transform duration-700 group-hover:scale-105"
          ></iframe>
        </motion.div>

      </div>
    </section>
  );
}
