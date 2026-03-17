import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Copy, Check } from 'lucide-react';

export default function ContactInfo() {
  const [copied, setCopied] = useState(false);
  const address = "Tongping, Juba, South Sudan";

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-bg-secondary py-20 lg:py-30">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Contact Details */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-[32px] text-primary mb-6">Get in Touch</h2>
              <p className="font-body text-[15px] text-text-secondary leading-[1.7] mb-8">
                Whether you're planning a stay, organizing an event, or simply have a question, our team is ready to assist you.
              </p>
            </motion.div>

            <div className="space-y-6">
              {/* Address */}
              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-accent shrink-0 shadow-sm border border-neutral/10">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-display text-[18px] text-primary font-semibold mb-1">Our Location</h4>
                  <p className="font-body text-[14px] text-text-secondary mb-2">{address}</p>
                  <button 
                    onClick={handleCopy}
                    className="flex items-center gap-1 font-body text-[12px] font-semibold text-accent hover:text-primary transition-colors uppercase tracking-wider"
                  >
                    {copied ? <><Check size={14} /> Copied!</> : <><Copy size={14} /> Copy Address</>}
                  </button>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-accent shrink-0 shadow-sm border border-neutral/10">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-display text-[18px] text-primary font-semibold mb-1">Phone</h4>
                  <p className="font-body text-[14px] text-text-secondary mb-1">
                    <a href="tel:+211912345678" className="hover:text-accent transition-colors">+211 912 345 678</a>
                  </p>
                  <p className="font-body text-[14px] text-text-secondary">
                    <a href="tel:+211923456789" className="hover:text-accent transition-colors">+211 923 456 789</a>
                  </p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-accent shrink-0 shadow-sm border border-neutral/10">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-display text-[18px] text-primary font-semibold mb-1">Email</h4>
                  <p className="font-body text-[14px] text-text-secondary mb-1">
                    <a href="mailto:info@lamerinn.com" className="hover:text-accent transition-colors">info@lamerinn.com</a>
                  </p>
                  <p className="font-body text-[14px] text-text-secondary">
                    <a href="mailto:reservations@lamerinn.com" className="hover:text-accent transition-colors">reservations@lamerinn.com</a>
                  </p>
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-accent shrink-0 shadow-sm border border-neutral/10">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-display text-[18px] text-primary font-semibold mb-1">Reception Hours</h4>
                  <p className="font-body text-[14px] text-text-secondary">24 Hours / 7 Days a week</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Map */}
          <motion.div 
            className="w-full lg:w-2/3 h-[400px] lg:h-auto min-h-[500px] rounded-2xl overflow-hidden shadow-lg border border-neutral/20 relative group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Animated Border Effect */}
            <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/50 rounded-2xl transition-colors duration-500 pointer-events-none z-10" />
            
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3966.521260322283!2d31.58249001476896!3d4.858736996472421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1712810000000001%3A0x1234567890abcdef!2sTongping%2C%20Juba%2C%20South%20Sudan!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[20%] contrast-[1.1] group-hover:grayscale-0 transition-all duration-700"
              title="La Mer Inn Location"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
