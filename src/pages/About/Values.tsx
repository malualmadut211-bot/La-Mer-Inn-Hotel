import React from 'react';
import { motion } from 'motion/react';
import { Heart, ShieldCheck, Globe } from 'lucide-react';

const values = [
  {
    icon: <Heart size={36} />,
    title: 'Genuine Hospitality',
    desc: 'Every interaction is guided by warmth and authenticity. From your first greeting to your farewell, our staff treats every guest as a valued member of the La Mer Inn family. We believe that true hospitality comes from the heart, and it shows in every detail of your stay.'
  },
  {
    icon: <ShieldCheck size={36} />,
    title: 'Unwavering Quality',
    desc: 'From our plush bedding and spotless rooms to our carefully curated breakfast spread and premium toiletries, we maintain the highest standards in every detail. Quality isn\'t an aspiration — it\'s our baseline. We continuously invest in our facilities and training to ensure excellence.'
  },
  {
    icon: <Globe size={36} />,
    title: 'Cultural Immersion',
    desc: 'Experience the rich culture of Juba through our locally inspired cuisine featuring authentic African dishes, our distinctive décor celebrating South Sudanese artistry, and the fascinating stories shared by our knowledgeable, multilingual team. At La Mer Inn, you don\'t just visit Juba — you experience it.'
  }
];

export default function Values() {
  return (
    <section className="bg-bg-base py-20 lg:py-30">
      <div className="max-w-[1080px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-[60px]">
          <motion.div 
            className="flex items-center justify-center gap-4 mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-body text-xs uppercase tracking-[0.15em] text-neutral">What We Stand For</span>
          </motion.div>

          <motion.h2 
            className="font-display text-[32px] lg:text-[40px] text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Our Core Values
          </motion.h2>

          <motion.p 
            className="font-body text-[17px] text-text-secondary max-w-[600px] mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Three pillars that guide everything we do.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {values.map((val, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-[16px] p-8 lg:p-12 text-center shadow-sm border border-neutral/15 min-h-[350px] group hover:-translate-y-2 hover:shadow-lg hover:border-accent/20 transition-all duration-400 ease-smooth"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.15 }}
            >
              {/* Icon Container */}
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center text-accent mx-auto mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-600 ease-smooth group-hover:rotate-y-180" style={{ transformStyle: 'preserve-3d' }}>
                <div className="group-hover:rotate-y-180 transition-transform duration-600">
                  {val.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-display text-[24px] font-semibold text-primary mb-3">
                {val.title}
              </h3>

              {/* Decorative Divider */}
              <div className="w-10 h-[2px] bg-accent mx-auto mb-4" />

              {/* Description */}
              <p className="font-body text-[15px] text-text-secondary leading-[1.7]">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
