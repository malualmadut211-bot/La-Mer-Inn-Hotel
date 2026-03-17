import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      // Reset after 5 seconds
      setTimeout(() => setFormState('idle'), 5000);
    }, 1500);
  };

  return (
    <section className="bg-white py-20 lg:py-30 border-t border-neutral/10">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.div 
            className="flex items-center justify-center gap-4 mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-body text-xs uppercase tracking-[0.15em] text-neutral">Send a Message</span>
          </motion.div>

          <motion.h2 
            className="font-display text-[32px] lg:text-[40px] text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            How Can We Help?
          </motion.h2>

          <motion.p 
            className="font-body text-[16px] text-text-secondary max-w-[600px] mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Fill out the form below and our team will get back to you as soon as possible.
          </motion.p>
        </div>

        {/* Form */}
        <motion.div 
          className="bg-bg-secondary p-8 lg:p-12 rounded-2xl shadow-sm border border-neutral/10 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Success Overlay */}
          {formState === 'success' && (
            <motion.div 
              className="absolute inset-0 bg-white/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
              >
                <CheckCircle2 size={64} className="text-green-500 mb-6" />
              </motion.div>
              <h3 className="font-display text-[28px] text-primary font-semibold mb-2">Message Sent!</h3>
              <p className="font-body text-[16px] text-text-secondary max-w-[400px]">
                Thank you for reaching out. A member of our team will contact you shortly.
              </p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="font-body text-[13px] font-semibold text-primary uppercase tracking-wider">
                  First Name <span className="text-accent">*</span>
                </label>
                <input 
                  type="text" 
                  id="firstName" 
                  required
                  className="w-full px-5 py-4 rounded-lg border border-neutral/20 bg-white font-body text-[15px] text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  placeholder="John"
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="font-body text-[13px] font-semibold text-primary uppercase tracking-wider">
                  Last Name <span className="text-accent">*</span>
                </label>
                <input 
                  type="text" 
                  id="lastName" 
                  required
                  className="w-full px-5 py-4 rounded-lg border border-neutral/20 bg-white font-body text-[15px] text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-body text-[13px] font-semibold text-primary uppercase tracking-wider">
                  Email Address <span className="text-accent">*</span>
                </label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full px-5 py-4 rounded-lg border border-neutral/20 bg-white font-body text-[15px] text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="font-body text-[13px] font-semibold text-primary uppercase tracking-wider">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-5 py-4 rounded-lg border border-neutral/20 bg-white font-body text-[15px] text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  placeholder="+211 9XX XXX XXX"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="font-body text-[13px] font-semibold text-primary uppercase tracking-wider">
                Subject <span className="text-accent">*</span>
              </label>
              <select 
                id="subject" 
                required
                defaultValue=""
                className="w-full px-5 py-4 rounded-lg border border-neutral/20 bg-white font-body text-[15px] text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all appearance-none"
              >
                <option value="" disabled>Select a topic</option>
                <option value="reservation">Room Reservation</option>
                <option value="dining">Dining & Restaurant</option>
                <option value="events">Events & Meetings</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-body text-[13px] font-semibold text-primary uppercase tracking-wider">
                Message <span className="text-accent">*</span>
              </label>
              <textarea 
                id="message" 
                required
                rows={5}
                className="w-full px-5 py-4 rounded-lg border border-neutral/20 bg-white font-body text-[15px] text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-y"
                placeholder="How can we assist you?"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button 
                type="submit" 
                disabled={formState === 'submitting'}
                className="w-full sm:w-auto px-10 py-4 rounded-lg bg-primary text-white font-body text-[15px] font-semibold uppercase tracking-[0.06em] hover:bg-accent transition-colors duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {formState === 'submitting' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </div>

          </form>
        </motion.div>

      </div>
    </section>
  );
}
