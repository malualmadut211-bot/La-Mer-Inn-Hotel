import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const categories = ['All', 'Rooms', 'Dining', 'Exterior', 'Events'];

const images = [
  { id: 1, src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=800', category: 'Rooms', alt: 'Luxury Suite Bedroom' },
  { id: 2, src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800', category: 'Dining', alt: 'Restaurant Interior' },
  { id: 3, src: 'https://images.unsplash.com/photo-1542314831-c6a4d1409e50?auto=format&fit=crop&q=80&w=800', category: 'Exterior', alt: 'Hotel Exterior at Dusk' },
  { id: 4, src: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80&w=800', category: 'Events', alt: 'Conference Room Setup' },
  { id: 5, src: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800', category: 'Rooms', alt: 'Standard Double Room' },
  { id: 6, src: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800', category: 'Dining', alt: 'Chef Preparing Food' },
  { id: 7, src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800', category: 'Exterior', alt: 'Pool Area' },
  { id: 8, src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800', category: 'Events', alt: 'Wedding Reception Setup' },
  { id: 9, src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800', category: 'Rooms', alt: 'Deluxe Twin Room' },
  { id: 10, src: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800', category: 'Dining', alt: 'Cocktail at the Bar' },
  { id: 11, src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800', category: 'Exterior', alt: 'Garden Terrace' },
  { id: 12, src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=800', category: 'Rooms', alt: 'Executive Suite Living Area' }
];

export default function ImageGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <section className="bg-bg-secondary py-12 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        
        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 lg:gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-body text-[14px] font-medium transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-white text-text-secondary hover:bg-neutral/10 border border-neutral/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, index) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl break-inside-avoid"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Maximize2 size={20} />
                  </div>
                  <span className="font-display text-[18px] text-white font-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {img.alt}
                  </span>
                  <span className="font-body text-[12px] text-neutral uppercase tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    {img.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div 
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            <button 
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 lg:left-10 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 lg:right-10 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image Container */}
            <div className="relative w-full max-w-[90vw] max-h-[90vh] flex items-center justify-center px-12 lg:px-24">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={filteredImages[currentImageIndex].src.replace('w=800', 'w=1920')}
                  alt={filteredImages[currentImageIndex].alt}
                  className="max-w-full max-h-[85vh] object-contain"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
              
              {/* Caption */}
              <div className="absolute bottom-[-40px] left-0 w-full text-center">
                <p className="font-display text-[18px] text-white">
                  {filteredImages[currentImageIndex].alt}
                </p>
                <p className="font-body text-[13px] text-neutral/70 uppercase tracking-wider">
                  {currentImageIndex + 1} / {filteredImages.length}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
