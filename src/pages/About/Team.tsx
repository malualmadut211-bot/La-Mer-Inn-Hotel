import React, { useState } from 'react';
import { motion } from 'motion/react';

const team = [
  {
    name: 'David L.',
    role: 'General Manager',
    quote: 'My favorite part of this job is seeing a guest\'s face light up when they walk into their room for the first time.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Sarah K.',
    role: 'Head Chef',
    quote: 'I put my grandmother\'s love into every dish. African cuisine is a story — and our kitchen tells it beautifully.',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Michael O.',
    role: 'Guest Relations Manager',
    quote: 'Making people feel at home is not my job — it\'s my joy. Every guest leaves as a friend.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Grace A.',
    role: 'Housekeeping Lead',
    quote: 'A clean room is a peaceful mind. I take pride in making every corner spotless and welcoming.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400'
  }
];

export default function Team() {
  return (
    <section className="bg-bg-secondary py-20 lg:py-30">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-[60px]">
          <motion.div 
            className="flex items-center justify-center gap-4 mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-body text-xs uppercase tracking-[0.15em] text-neutral">The People Behind La Mer Inn</span>
          </motion.div>

          <motion.h2 
            className="font-display text-[32px] lg:text-[40px] text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Meet Our Team
          </motion.h2>

          <motion.p 
            className="font-body text-[17px] text-text-secondary max-w-[600px] mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Passionate professionals dedicated to making your stay exceptional.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              className="relative w-full aspect-[3/4] lg:aspect-auto lg:h-[350px] perspective-1000 group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.12 }}
            >
              {/* Inner Container for 3D Flip */}
              <div className="w-full h-full relative preserve-3d transition-transform duration-600 ease-smooth group-hover:rotate-y-180">
                
                {/* Front Face */}
                <div className="absolute inset-0 backface-hidden bg-white rounded-xl overflow-hidden shadow-sm flex flex-col text-center">
                  <div className="relative w-full aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4 flex-grow flex flex-col justify-center">
                    <h3 className="font-display text-[20px] font-semibold text-primary mb-1">
                      {member.name}
                    </h3>
                    <p className="font-body text-[13px] font-medium text-accent">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-primary rounded-xl p-6 lg:p-8 flex flex-col items-center justify-center text-center shadow-lg">
                  <span className="font-display text-[40px] text-accent/30 leading-none mb-2">"</span>
                  <p className="font-accent italic text-[16px] text-bg-secondary leading-[1.6] mb-4">
                    {member.quote}
                  </p>
                  <h4 className="font-body text-[14px] text-white">
                    — {member.name}
                  </h4>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
