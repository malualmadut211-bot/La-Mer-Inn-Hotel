import React from 'react';
import { motion } from 'motion/react';

export default function RestaurantIntro() {
  return (
    <section className="bg-white py-20 lg:py-30">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <motion.div 
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-[2px] w-8 bg-accent" />
              <span className="font-body text-xs uppercase tracking-[0.15em] text-neutral">The Oasis Restaurant</span>
            </motion.div>

            <motion.h2 
              className="font-display text-[32px] lg:text-[44px] text-primary leading-[1.15] mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              A Feast for the Senses in the Heart of Juba
            </motion.h2>

            <motion.p 
              className="font-body text-[16px] text-text-secondary leading-[1.8] mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              At The Oasis Restaurant, we believe that dining is an experience to be savored. Our culinary team, led by passionate chefs, crafts menus that celebrate the rich, vibrant flavors of East Africa while offering a sophisticated selection of international favorites.
            </motion.p>

            <motion.p 
              className="font-body text-[16px] text-text-secondary leading-[1.8] mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Whether you're starting your day with our lavish breakfast buffet, enjoying a light lunch by the garden, or indulging in a romantic candlelit dinner, every meal is prepared with the freshest local ingredients and served with our signature warm hospitality.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 lg:gap-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div>
                <h4 className="font-display text-[18px] text-primary font-semibold mb-2">Opening Hours</h4>
                <ul className="font-body text-[14px] text-text-secondary space-y-1">
                  <li><span className="font-medium text-primary">Breakfast:</span> 6:30 AM - 10:00 AM</li>
                  <li><span className="font-medium text-primary">Lunch:</span> 12:30 PM - 3:00 PM</li>
                  <li><span className="font-medium text-primary">Dinner:</span> 6:30 PM - 10:30 PM</li>
                </ul>
              </div>
              <div>
                <h4 className="font-display text-[18px] text-primary font-semibold mb-2">Dress Code</h4>
                <p className="font-body text-[14px] text-text-secondary">
                  Smart casual. We kindly request no swimwear in the main dining room.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Image Composition */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
            <motion.div 
              className="relative w-[85%] ml-auto aspect-[4/5] rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img 
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800" 
                alt="Chef preparing a dish" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </motion.div>
            
            <motion.div 
              className="absolute bottom-10 left-0 w-[55%] aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600" 
                alt="Delicious food plating" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Decorative Element */}
            <motion.div 
              className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-accent/30 rounded-tr-3xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
