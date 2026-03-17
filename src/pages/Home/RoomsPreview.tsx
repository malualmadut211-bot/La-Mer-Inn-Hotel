import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Snowflake, Tv, Wifi, Coffee, Bath, Star } from 'lucide-react';

const rooms = [
  {
    id: 'standard',
    name: 'Standard Room',
    description: 'Spacious and elegant with air conditioning, flat-screen TV, and a private balcony overlooking our lush garden.',
    price: '$85',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=800',
    amenities: [<Snowflake size={20} />, <Tv size={20} />, <Wifi size={20} />, <Coffee size={20} />],
    amenityNames: ['AC', 'TV', 'WiFi', 'Coffee'],
    badge: null
  },
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    description: 'A comfortable retreat equipped with modern amenities, perfect for solo travelers and couples.',
    price: '$120',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800',
    amenities: [<Snowflake size={20} />, <Tv size={20} />, <Wifi size={20} />, <Coffee size={20} />, <Bath size={20} />],
    amenityNames: ['AC', 'TV', 'WiFi', 'Coffee', 'Bath'],
    badge: 'Most Popular'
  },
  {
    id: 'family',
    name: 'Family Suite',
    description: 'Generously sized family room with additional sleeping arrangements, ideal for traveling families.',
    price: '$150',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800',
    amenities: [<Snowflake size={20} />, <Tv size={20} />, <Wifi size={20} />, <Coffee size={20} />],
    amenityNames: ['AC', 'TV', 'WiFi', 'Coffee'],
    badge: null
  }
];

export default function RoomsPreview() {
  return (
    <section className="bg-bg-secondary py-20 lg:py-30">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        
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
            <span className="font-body text-xs uppercase tracking-[0.15em] text-neutral">Accommodations</span>
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
            Rooms & Suites
          </motion.h2>

          <motion.p 
            className="font-body text-[17px] text-text-secondary max-w-[620px] mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Every room is a sanctuary designed for your comfort, equipped with modern amenities and warm, inviting décor.
          </motion.p>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, i) => (
            <motion.div
              key={room.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-400 ease-smooth group relative"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.15 }}
            >
              {/* Bottom Border on Hover */}
              <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-1 bg-accent transition-all duration-300 z-20" />

              {/* Image Area */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600 ease-smooth"
                />
                
                {/* Ribbon Badge */}
                {room.badge && (
                  <div className="absolute top-4 left-0 bg-accent text-white px-5 py-1.5 font-body text-[11px] font-bold uppercase tracking-[0.05em] rounded-r-full flex items-center gap-1.5 shadow-md">
                    <Star size={12} className="fill-current" />
                    {room.badge}
                  </div>
                )}

                {/* Amenity Quick-View Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-primary/85 to-transparent translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-3">
                  <span className="font-body text-xs text-white">
                    {room.amenityNames.join(' | ')}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="font-display text-[22px] font-semibold text-primary mb-2">
                  {room.name}
                </h3>
                
                <div className="w-10 h-[2px] bg-accent mb-3 group-hover:w-[60px] transition-all duration-400" />
                
                <p className="font-body text-sm text-text-secondary leading-[1.6] line-clamp-2 mb-4">
                  {room.description}
                </p>

                {/* Amenities Row */}
                <div className="flex gap-3 mb-4">
                  {room.amenities.map((icon, idx) => (
                    <div 
                      key={idx} 
                      className="w-8 h-8 rounded-full bg-bg-base/40 flex items-center justify-center text-primary relative group/tooltip"
                    >
                      {icon}
                      {/* Tooltip */}
                      <div className="absolute bottom-full mb-2 opacity-0 group-hover/tooltip:opacity-100 pointer-events-none transition-opacity bg-text-primary text-white text-[11px] font-body px-2.5 py-1 rounded-sm whitespace-nowrap">
                        {room.amenityNames[idx]}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-text-primary" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-end justify-between mt-auto">
                  <div>
                    <div className="font-body text-[18px] font-bold text-accent">
                      From {room.price} <span className="text-sm font-normal text-text-secondary">/ night</span>
                    </div>
                  </div>
                  <Link 
                    to={`/rooms#${room.id}`} 
                    className="font-body text-sm font-semibold text-primary flex items-center gap-1 group/link"
                  >
                    <span className="group-hover/link:text-accent transition-colors">View Details</span>
                    <ArrowRight size={16} className="group-hover/link:translate-x-1.5 group-hover/link:text-accent transition-all duration-300" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link 
            to="/rooms" 
            className="inline-block px-9 py-3.5 border-2 border-primary text-primary font-body text-sm font-semibold uppercase tracking-[0.05em] rounded-md hover:bg-primary hover:text-white hover:scale-[1.02] transition-all duration-400"
          >
            View All Rooms
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
