import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, Users, CheckCircle2, BedDouble } from 'lucide-react';

export default function BookingForm() {
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
    <section className="bg-bg-secondary py-12 lg:py-20">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
        
        <motion.div 
          className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl border border-neutral/10 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
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
              <h3 className="font-display text-[28px] text-primary font-semibold mb-2">Reservation Request Sent!</h3>
              <p className="font-body text-[16px] text-text-secondary max-w-[400px]">
                Thank you for choosing La Mer Inn. Our reservations team will contact you shortly to confirm your booking details and arrange payment.
              </p>
            </motion.div>
          )}

          <div className="text-center mb-10">
            <h2 className="font-display text-[32px] text-primary mb-4">Reservation Request</h2>
            <p className="font-body text-[15px] text-text-secondary max-w-[600px] mx-auto">
              Please fill out the form below to request a reservation. Note that this is a request and your booking will be confirmed by our team via email or phone.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Stay Details */}
            <div>
              <h3 className="font-display text-[20px] text-primary font-semibold mb-6 pb-2 border-b border-neutral/20 flex items-center gap-2">
                <Calendar size={20} className="text-accent" />
                Stay Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="checkIn" className="font-body text-[13px] font-semibold text-primary uppercase tracking-wider">
                    Check-in Date <span className="text-accent">*</span>
                  </label>
                  <input 
                    type="date" 
                    id="checkIn" 
                    required
                    className="w-full px-5 py-4 rounded-lg border border-neutral/20 bg-bg-secondary font-body text-[15px] text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="checkOut" className="font-body text-[13px] font-semibold text-primary uppercase tracking-wider">
                    Check-out Date <span className="text-accent">*</span>
                  </label>
                  <input 
                    type="date" 
                    id="checkOut" 
                    required
                    className="w-full px-5 py-4 rounded-lg border border-neutral/20 bg-bg-secondary font-body text-[15px] text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Room & Guests */}
            <div>
              <h3 className="font-display text-[20px] text-primary font-semibold mb-6 pb-2 border-b border-neutral/20 flex items-center gap-2">
                <BedDouble size={20} className="text-accent" />
                Room & Guests
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label htmlFor="roomType" className="font-body text-[13px] font-semibold text-primary uppercase tracking-wider">
                    Room Type <span className="text-accent">*</span>
                  </label>
                  <select 
                    id="roomType" 
                    required
                    defaultValue=""
                    className="w-full px-5 py-4 rounded-lg border border-neutral/20 bg-bg-secondary font-body text-[15px] text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all appearance-none"
                  >
                    <option value="" disabled>Select a room</option>
                    <option value="standard-single">Standard Single Room</option>
                    <option value="standard-double">Standard Double Room</option>
                    <option value="deluxe-twin">Deluxe Twin Room</option>
                    <option value="executive-suite">Executive Suite</option>
                    <option value="presidential-suite">Presidential Suite</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="guests" className="font-body text-[13px] font-semibold text-primary uppercase tracking-wider">
                    Guests <span className="text-accent">*</span>
                  </label>
                  <select 
                    id="guests" 
                    required
                    className="w-full px-5 py-4 rounded-lg border border-neutral/20 bg-bg-secondary font-body text-[15px] text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all appearance-none"
                  >
                    <option value="1">1 Adult</option>
                    <option value="2">2 Adults</option>
                    <option value="3">3 Adults</option>
                    <option value="4">4 Adults</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Guest Information */}
            <div>
              <h3 className="font-display text-[20px] text-primary font-semibold mb-6 pb-2 border-b border-neutral/20 flex items-center gap-2">
                <Users size={20} className="text-accent" />
                Guest Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="font-body text-[13px] font-semibold text-primary uppercase tracking-wider">
                    First Name <span className="text-accent">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="firstName" 
                    required
                    className="w-full px-5 py-4 rounded-lg border border-neutral/20 bg-bg-secondary font-body text-[15px] text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="font-body text-[13px] font-semibold text-primary uppercase tracking-wider">
                    Last Name <span className="text-accent">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="lastName" 
                    required
                    className="w-full px-5 py-4 rounded-lg border border-neutral/20 bg-bg-secondary font-body text-[15px] text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-body text-[13px] font-semibold text-primary uppercase tracking-wider">
                    Email Address <span className="text-accent">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full px-5 py-4 rounded-lg border border-neutral/20 bg-bg-secondary font-body text-[15px] text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="font-body text-[13px] font-semibold text-primary uppercase tracking-wider">
                    Phone Number <span className="text-accent">*</span>
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required
                    className="w-full px-5 py-4 rounded-lg border border-neutral/20 bg-bg-secondary font-body text-[15px] text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="requests" className="font-body text-[13px] font-semibold text-primary uppercase tracking-wider">
                  Special Requests
                </label>
                <textarea 
                  id="requests" 
                  rows={4}
                  className="w-full px-5 py-4 rounded-lg border border-neutral/20 bg-bg-secondary font-body text-[15px] text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-y"
                  placeholder="Any special requests or dietary requirements?"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-neutral/20">
              <button 
                type="submit" 
                disabled={formState === 'submitting'}
                className="w-full px-10 py-5 rounded-lg bg-primary text-white font-body text-[16px] font-semibold uppercase tracking-[0.06em] hover:bg-accent transition-colors duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formState === 'submitting' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing Request...
                  </>
                ) : (
                  'Request Reservation'
                )}
              </button>
              <p className="text-center font-body text-[13px] text-text-secondary mt-4">
                By submitting this form, you agree to our <Link to="/terms" className="text-accent hover:underline">Terms & Conditions</Link> and <Link to="/privacy" className="text-accent hover:underline">Privacy Policy</Link>.
              </p>
            </div>

          </form>
        </motion.div>

      </div>
    </section>
  );
}
