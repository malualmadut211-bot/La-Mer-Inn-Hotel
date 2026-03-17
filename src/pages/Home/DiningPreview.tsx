import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function DiningPreview() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const pills = [
    "Buffet Breakfast", "À La Carte", "Continental", 
    "Outdoor Seating", "Private Dining", "Special Diets", "Kid Meals"
  ];

  return (
    <section className="relative w-full min-h-[auto] lg:min-h-[600px] overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <img 
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1920" 
          alt="Restaurant dining area" 
          className="w-full h-[120%] object-cover -top-[10%]"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-primary/85 via-primary/65 to-primary/40" />

      {/* Content */}
      <div className="relative z-20 max-w-[1280px] mx-auto px-6 lg:px-20 py-[60px] lg:py-[100px] flex flex-col justify-center h-full">
        <div className="max-w-[700px] text-center lg:text-left mx-auto lg:mx-0">
          
          <motion.div 
            className="flex items-center justify-center lg:justify-start gap-3 mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-8 h-[2px] bg-bg-secondary" />
            <span className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-bg-secondary">
              Culinary Experience
            </span>
          </motion.div>

          <motion.h2 
            className="font-display text-[32px] lg:text-[48px] text-white leading-[1.1] mb-6"
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1], delay: 0.2 }}
          >
            Savor Authentic African Cuisine
          </motion.h2>

          <motion.p 
            className="font-body text-[17px] text-bg-secondary leading-[1.8] mb-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Indulge in a rich culinary journey at our on-site restaurant, where traditional African flavors meet modern presentation. Start your morning with a lavish buffet breakfast — à la carte or continental — and explore our diverse dinner menu featuring locally sourced ingredients. Our outdoor terrace offers an enchanting dining atmosphere under the African sky.
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center lg:justify-start gap-2.5 my-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20%" }}
            variants={{
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.7 } }
            }}
          >
            {pills.map((pill, i) => (
              <motion.div
                key={i}
                className="px-4 py-2 rounded-full bg-bg-secondary/10 border border-bg-secondary/40 font-body text-[12px] font-medium text-bg-secondary hover:bg-bg-secondary/20 hover:border-bg-secondary/60 transition-colors cursor-default"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
              >
                {pill}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Link 
              to="/dining" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-accent text-white font-body text-[15px] font-semibold uppercase tracking-[0.05em] hover:bg-[#3A9BBF] transition-colors group"
            >
              Explore Our Menu
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
