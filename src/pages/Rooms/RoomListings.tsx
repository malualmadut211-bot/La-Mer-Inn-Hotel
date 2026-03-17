import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Users, Maximize, BedDouble, Wifi, Coffee, Tv, Bath, Wind, ArrowRight, Check } from 'lucide-react';

const categories = ['All', 'Standard', 'Deluxe', 'Executive', 'Suite'];

const rooms = [
  {
    id: 'standard-single',
    title: 'Standard Single Room',
    category: 'Standard',
    price: 120,
    size: '25 sqm',
    capacity: '1 Guest',
    bed: '1 Single Bed',
    description: 'Perfect for solo travelers or business guests seeking a comfortable and efficient space. Features modern decor, a dedicated workspace, and all essential amenities.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800',
    amenities: ['Free High-Speed Wi-Fi', 'Air Conditioning', 'Flat-screen TV', 'En-suite Bathroom', 'Work Desk'],
    features: [
      { icon: <Wifi size={16} />, label: 'Free Wi-Fi' },
      { icon: <Wind size={16} />, label: 'AC' },
      { icon: <Tv size={16} />, label: 'TV' }
    ]
  },
  {
    id: 'standard-double',
    title: 'Standard Double Room',
    category: 'Standard',
    price: 150,
    size: '30 sqm',
    capacity: '2 Guests',
    bed: '1 Double Bed',
    description: 'A cozy retreat for couples or friends. Enjoy a restful night\'s sleep on our plush double bed, complete with modern comforts and a relaxing ambiance.',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800',
    amenities: ['Free High-Speed Wi-Fi', 'Air Conditioning', 'Flat-screen TV', 'En-suite Bathroom', 'Tea/Coffee Maker'],
    features: [
      { icon: <Wifi size={16} />, label: 'Free Wi-Fi' },
      { icon: <Wind size={16} />, label: 'AC' },
      { icon: <Coffee size={16} />, label: 'Coffee' }
    ]
  },
  {
    id: 'deluxe-twin',
    title: 'Deluxe Twin Room',
    category: 'Deluxe',
    price: 180,
    size: '35 sqm',
    capacity: '2 Guests',
    bed: '2 Single Beds',
    description: 'Spacious and elegantly designed, our Deluxe Twin offers upgraded amenities, premium bedding, and extra space to unwind after a day exploring Juba.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800',
    amenities: ['Premium Wi-Fi', 'Air Conditioning', 'Smart TV', 'Luxury Bathroom Amenities', 'Mini Fridge', 'City View'],
    features: [
      { icon: <Wifi size={16} />, label: 'Premium Wi-Fi' },
      { icon: <Bath size={16} />, label: 'Luxury Bath' },
      { icon: <Tv size={16} />, label: 'Smart TV' }
    ],
    popular: true
  },
  {
    id: 'executive-suite',
    title: 'Executive Suite',
    category: 'Executive',
    price: 250,
    size: '50 sqm',
    capacity: '2 Guests',
    bed: '1 King Bed',
    description: 'Experience refined luxury in our Executive Suite. Featuring a separate living area, premium furnishings, and exclusive access to our executive lounge services.',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=800',
    amenities: ['High-Speed Wi-Fi', 'Separate Living Area', 'King Size Bed', 'Premium Bath Products', 'Espresso Machine', 'Lounge Access'],
    features: [
      { icon: <BedDouble size={16} />, label: 'King Bed' },
      { icon: <Coffee size={16} />, label: 'Espresso' },
      { icon: <Maximize size={16} />, label: 'Living Area' }
    ]
  },
  {
    id: 'presidential-suite',
    title: 'Presidential Suite',
    category: 'Suite',
    price: 450,
    size: '80 sqm',
    capacity: '4 Guests',
    bed: '2 King Beds',
    description: 'The pinnacle of luxury at La Mer Inn. This expansive suite offers panoramic views, two bedrooms, a dining area, and uncompromising service for our most discerning guests.',
    image: 'https://images.unsplash.com/photo-1631049035182-249067d7618e?auto=format&fit=crop&q=80&w=800',
    amenities: ['Dedicated Butler Service', 'Panoramic Views', 'Two Bedrooms', 'Dining Area', 'Luxury Bathroom with Tub', 'Premium Bar Setup'],
    features: [
      { icon: <Users size={16} />, label: 'Up to 4 Guests' },
      { icon: <Bath size={16} />, label: 'Soaking Tub' },
      { icon: <Maximize size={16} />, label: '80 sqm' }
    ]
  }
];

export default function RoomListings() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredRooms = activeCategory === 'All' 
    ? rooms 
    : rooms.filter(room => room.category === activeCategory);

  return (
    <section id="room-listings" className="bg-bg-secondary py-20 lg:py-30">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        
        {/* Header & Filter */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-8">
          <div className="max-w-[600px] text-center lg:text-left">
            <motion.h2 
              className="font-display text-[32px] lg:text-[40px] text-primary mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.6 }}
            >
              Find Your Perfect Space
            </motion.h2>
            <motion.p 
              className="font-body text-[16px] text-text-secondary leading-[1.7]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Whether you're visiting for a quick business trip or an extended holiday, we have a room designed to meet your needs and exceed your expectations.
            </motion.p>
          </div>

          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 lg:gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-body text-[14px] font-medium transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-white text-text-secondary hover:bg-neutral/10 border border-neutral/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 gap-12 lg:gap-16">
          <AnimatePresence mode="popLayout">
            {filteredRooms.map((room, index) => (
              <motion.div
                key={room.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="group flex flex-col lg:flex-row bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 border border-neutral/10"
              >
                {/* Image Container */}
                <div className="relative w-full lg:w-[45%] aspect-[4/3] lg:aspect-auto overflow-hidden">
                  <img 
                    src={room.image} 
                    alt={room.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-sm font-body text-[11px] font-bold uppercase tracking-wider shadow-sm">
                      {room.category}
                    </span>
                    {room.popular && (
                      <span className="bg-accent text-white px-3 py-1 rounded-sm font-body text-[11px] font-bold uppercase tracking-wider shadow-sm">
                        Most Popular
                      </span>
                    )}
                  </div>
                  {/* Price Tag (Mobile) */}
                  <div className="lg:hidden absolute bottom-4 right-4 bg-primary text-white px-4 py-2 rounded-lg shadow-lg">
                    <span className="font-body text-[12px] opacity-80 block leading-none mb-1">From</span>
                    <span className="font-display text-[24px] font-bold leading-none">${room.price}<span className="text-[14px] font-normal">/night</span></span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="w-full lg:w-[55%] p-6 lg:p-10 flex flex-col justify-between">
                  
                  <div>
                    {/* Title & Price (Desktop) */}
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-display text-[28px] lg:text-[32px] text-primary font-semibold leading-[1.2]">
                        {room.title}
                      </h3>
                      <div className="hidden lg:block text-right">
                        <span className="font-body text-[12px] text-text-secondary uppercase tracking-wider block mb-1">Starting from</span>
                        <div className="font-display text-[32px] text-accent font-bold leading-none">
                          ${room.price}
                          <span className="text-[16px] text-text-secondary font-normal">/night</span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Specs */}
                    <div className="flex flex-wrap gap-4 lg:gap-6 mb-6 pb-6 border-b border-neutral/20">
                      <div className="flex items-center gap-2 text-text-secondary font-body text-[14px]">
                        <Maximize size={18} className="text-accent" />
                        <span>{room.size}</span>
                      </div>
                      <div className="flex items-center gap-2 text-text-secondary font-body text-[14px]">
                        <Users size={18} className="text-accent" />
                        <span>{room.capacity}</span>
                      </div>
                      <div className="flex items-center gap-2 text-text-secondary font-body text-[14px]">
                        <BedDouble size={18} className="text-accent" />
                        <span>{room.bed}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="font-body text-[15px] text-text-secondary leading-[1.7] mb-6">
                      {room.description}
                    </p>

                    {/* Key Amenities List */}
                    <div className="mb-8">
                      <h4 className="font-body text-[13px] font-semibold uppercase tracking-wider text-primary mb-3">Room Highlights</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                        {room.amenities.slice(0, 4).map((amenity, i) => (
                          <li key={i} className="flex items-start gap-2 font-body text-[14px] text-text-secondary">
                            <Check size={16} className="text-accent shrink-0 mt-[2px]" />
                            <span>{amenity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto pt-6 border-t border-neutral/10">
                    <Link 
                      to="/booking" 
                      className="w-full sm:w-auto px-8 py-3 rounded-md bg-primary text-white font-body text-[14px] font-semibold uppercase tracking-[0.06em] hover:bg-accent transition-colors duration-300 text-center"
                    >
                      Book This Room
                    </Link>
                    <button className="w-full sm:w-auto px-8 py-3 rounded-md bg-transparent border border-primary text-primary font-body text-[14px] font-semibold uppercase tracking-[0.06em] hover:bg-primary hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 group">
                      View Details
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
