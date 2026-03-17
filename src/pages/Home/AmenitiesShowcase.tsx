import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Waves, Wifi, Utensils, Clock, BellRing, Car, TreePine, Plane, Dumbbell, Sparkles, Shirt, ClipboardList, Martini, PartyPopper, IceCream, Snowflake } from 'lucide-react';

const amenities = [
  { icon: <Waves size={28} />, label: 'Swimming Pool', desc: 'Year-round outdoor & indoor pools to cool off and relax.' },
  { icon: <Wifi size={28} />, label: 'Free WiFi', desc: 'High-speed wireless internet available throughout the hotel.' },
  { icon: <Utensils size={28} />, label: 'Restaurant', desc: 'On-site restaurant serving authentic African cuisine daily.' },
  { icon: <Clock size={28} />, label: '24h Front Desk', desc: 'Our staff is available around the clock for any assistance.' },
  { icon: <BellRing size={28} />, label: 'Room Service', desc: 'Enjoy meals and beverages delivered directly to your room.' },
  { icon: <Car size={28} />, label: 'Free Parking', desc: 'Complimentary private parking for all guests.' },
  { icon: <TreePine size={28} />, label: 'Garden & Terrace', desc: 'Beautiful green spaces perfect for relaxation and dining.' },
  { icon: <Plane size={28} />, label: 'Airport Shuttle', desc: 'Free shuttle service to and from Juba International Airport.' },
  { icon: <Dumbbell size={28} />, label: 'Fitness Center', desc: 'Stay active with our fully equipped gym facilities.' },
  { icon: <Sparkles size={28} />, label: 'Jacuzzi & Spa', desc: 'Unwind with our luxurious jacuzzi and spa services.' },
  { icon: <Shirt size={28} />, label: 'Laundry Service', desc: 'Professional laundry and dry cleaning available daily.' },
  { icon: <ClipboardList size={28} />, label: 'Meeting Facilities', desc: 'Modern business center and banquet halls for events.' },
  { icon: <Martini size={28} />, label: 'Bar & Lounge', desc: 'Enjoy cocktails and beverages in our cozy bar.' },
  { icon: <PartyPopper size={28} />, label: 'Entertainment', desc: 'Evening entertainment activities for guests to enjoy.' },
  { icon: <IceCream size={28} />, label: 'Minibar', desc: 'In-room minibar stocked with refreshments.' },
  { icon: <Snowflake size={28} />, label: 'Air Conditioning', desc: 'Climate-controlled rooms for your perfect comfort.' },
];

export default function AmenitiesShowcase() {
  return (
    <section className="bg-bg-base py-20 lg:py-30">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.div 
            className="flex items-center justify-center gap-4 mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.5 }}
          >
            <motion.span 
              className="w-10 h-[1px] bg-neutral"
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />
            <span className="font-body text-xs uppercase tracking-[0.15em] text-neutral">Amenities & Services</span>
            <motion.span 
              className="w-10 h-[1px] bg-neutral"
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>

          <motion.h2 
            className="font-display text-[32px] lg:text-[44px] text-primary mb-4"
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Everything You Need, and More
          </motion.h2>

          <motion.p 
            className="font-body text-[17px] text-text-secondary max-w-[600px] mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            From our sparkling pool to our attentive 24/7 service, every detail is designed for your comfort.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={{
            visible: { transition: { staggerChildren: 0.06 } }
          }}
        >
          {amenities.map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-transparent group cursor-default"
              variants={{
                hidden: { opacity: 0, scale: 0.7, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: [0.175, 0.885, 0.32, 1.4] } }
              }}
            >
              <div className="w-[72px] h-[72px] rounded-full bg-white flex items-center justify-center shadow-sm mb-4 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:shadow-md transition-all duration-400 ease-smooth">
                {item.icon}
              </div>
              <h3 className="font-body text-sm font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                {item.label}
              </h3>
              <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-[80px] group-hover:opacity-100 transition-all duration-300 ease-smooth mt-2">
                <p className="font-body text-xs text-text-secondary max-w-[160px]">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Link */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link 
            to="/amenities" 
            className="inline-flex items-center font-body text-[15px] font-semibold text-accent group relative"
          >
            See All Amenities
            <span className="inline-block ml-2 group-hover:translate-x-1.5 transition-transform duration-300">
              <ArrowRight size={16} />
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-accent group-hover:w-full transition-all duration-300 ease-smooth" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
