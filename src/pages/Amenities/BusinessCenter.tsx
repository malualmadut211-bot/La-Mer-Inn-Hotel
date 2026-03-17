import React from 'react';
import { motion } from 'motion/react';
import { Printer, Monitor, Users, Coffee } from 'lucide-react';

export default function BusinessCenter() {
  return (
    <section className="bg-white py-20 lg:py-30 border-t border-neutral/10">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Composition */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div 
              className="relative w-[85%] aspect-[4/5] rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
                alt="Business Center" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </motion.div>
            
            <motion.div 
              className="absolute bottom-10 right-0 w-[55%] aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <img 
                src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80&w=600" 
                alt="Meeting Room" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Decorative Element */}
            <motion.div 
              className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-accent/30 rounded-bl-3xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-[2px] w-8 bg-accent" />
              <span className="font-body text-xs uppercase tracking-[0.15em] text-neutral">For Professionals</span>
            </motion.div>

            <motion.h2 
              className="font-display text-[32px] lg:text-[44px] text-primary leading-[1.15] mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Business Center & Meetings
            </motion.h2>

            <motion.p 
              className="font-body text-[16px] text-text-secondary leading-[1.8] mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Traveling for work? Our fully equipped business center ensures you stay productive while away from the office. We provide a quiet, professional environment with all the necessary tools to keep your business moving forward.
            </motion.p>

            <motion.p 
              className="font-body text-[16px] text-text-secondary leading-[1.8] mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We also offer a versatile meeting room, perfect for small conferences, team off-sites, or client presentations, complete with modern audio-visual equipment and catering options.
            </motion.p>

            {/* Features Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-bg-secondary flex items-center justify-center text-accent shrink-0">
                  <Monitor size={20} />
                </div>
                <div>
                  <h4 className="font-display text-[16px] text-primary font-semibold mb-1">Workstations</h4>
                  <p className="font-body text-[13px] text-text-secondary">Modern PCs with high-speed internet.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-bg-secondary flex items-center justify-center text-accent shrink-0">
                  <Printer size={20} />
                </div>
                <div>
                  <h4 className="font-display text-[16px] text-primary font-semibold mb-1">Print & Copy</h4>
                  <p className="font-body text-[13px] text-text-secondary">Secure printing, scanning, and copying.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-bg-secondary flex items-center justify-center text-accent shrink-0">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="font-display text-[16px] text-primary font-semibold mb-1">Meeting Room</h4>
                  <p className="font-body text-[13px] text-text-secondary">Seats up to 15, equipped with A/V.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-bg-secondary flex items-center justify-center text-accent shrink-0">
                  <Coffee size={20} />
                </div>
                <div>
                  <h4 className="font-display text-[16px] text-primary font-semibold mb-1">Catering</h4>
                  <p className="font-body text-[13px] text-text-secondary">Coffee breaks and working lunches available.</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
