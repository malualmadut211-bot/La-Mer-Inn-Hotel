import React from 'react';
import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { TreePine, Music, Coffee, Moon, BookOpen } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-fade';

const images = [
  'https://images.unsplash.com/photo-1542314831-c6a4d1409e50?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=1920'
];

const icons = [
  { icon: <TreePine size={24} />, label: 'Lush Garden' },
  { icon: <Music size={24} />, label: 'Soft Ambiance' },
  { icon: <Coffee size={24} />, label: 'Fresh Coffee' },
  { icon: <Moon size={24} />, label: 'Evening Charm' },
  { icon: <BookOpen size={24} />, label: 'Quiet Corners' }
];

export default function Ambiance() {
  const headingText = "Step In. Slow Down. Breathe.".split("");

  return (
    <section className="relative w-full min-h-[500px] overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          speed={1500}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="w-full h-full"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <img src={img} alt="Ambiance" className="w-full h-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-primary/80 to-primary/60" />

      {/* Content */}
      <div className="relative z-20 max-w-[750px] mx-auto px-6 py-[100px] lg:py-[120px] text-center flex flex-col justify-center h-full">
        
        <motion.div 
          className="flex items-center justify-center gap-3 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-bg-secondary">
            The Atmosphere
          </span>
        </motion.div>

        <h2 className="font-display text-[30px] lg:text-[44px] text-white leading-[1.1] mb-6 flex flex-wrap justify-center">
          {headingText.map((char, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.1, delay: i * 0.03 }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h2>

        <motion.p 
          className="font-body text-[18px] text-bg-secondary leading-[1.85] mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Step into La Mer Inn and feel the world slow down. Our atmosphere is one of relaxed elegance — where the gentle rustle of garden palms mingles with soft background music, and the scent of fresh coffee fills the morning air. Whether you're lounging on the terrace with a good book, unwinding in the shared lounge after a long day, enjoying a moonlit dinner in the garden, or simply savoring the quiet comfort of your beautifully appointed room, every space has been designed to feel like your own peaceful escape. This isn't just a hotel — it's a feeling.
        </motion.p>

        {/* Ambient Icons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-8 lg:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.7 } }
          }}
        >
          {icons.map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center gap-2"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <div className="text-white">{item.icon}</div>
              <span className="font-body text-[13px] text-neutral">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
