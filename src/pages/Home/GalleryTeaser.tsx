import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Instagram, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1542314831-c6a4d1409e50?auto=format&fit=crop&q=80&w=800', alt: 'Hotel Exterior', colSpan: 2, rowSpan: 2 },
  { id: 2, src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=400', alt: 'Pool', colSpan: 1, rowSpan: 1 },
  { id: 3, src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=400', alt: 'Room Interior', colSpan: 1, rowSpan: 1 },
  { id: 4, src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=400', alt: 'Restaurant Dish', colSpan: 1, rowSpan: 1 },
  { id: 5, src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=400', alt: 'Garden', colSpan: 1, rowSpan: 1 },
  { id: 6, src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800', alt: 'Terrace Panoramic', colSpan: 2, rowSpan: 1 },
  { id: 7, src: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=400', alt: 'Lobby/Lounge', colSpan: 1, rowSpan: 1 },
  { id: 8, src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=400', alt: 'Local Scenery', colSpan: 1, rowSpan: 1 },
];

export default function GalleryTeaser() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  return (
    <section className="bg-white pt-[100px] pb-[60px]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 
            className="font-display text-[32px] lg:text-[40px] text-primary mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6 }}
          >
            Glimpses of La Mer Inn
          </motion.h2>

          <motion.a 
            href="https://instagram.com/lamerinnhotel" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-[16px] text-accent hover:underline transition-all"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Instagram size={16} />
            Follow us @lamerinnhotel
          </motion.a>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={{
            visible: { transition: { staggerChildren: 0.08 } }
          }}
        >
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              className={`relative overflow-hidden rounded-[4px] cursor-pointer group ${
                img.colSpan === 2 ? 'col-span-2' : 'col-span-1'
              } ${img.rowSpan === 2 ? 'row-span-2' : 'row-span-1'}`}
              onClick={() => openLightbox(i)}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
              }}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-smooth"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Maximize2 size={32} className="text-white opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View Full Gallery Button */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link 
            to="/gallery" 
            className="inline-block px-9 py-3.5 border-2 border-primary text-primary font-body text-sm font-semibold uppercase tracking-[0.05em] rounded-md hover:bg-primary hover:text-white hover:scale-[1.02] transition-all duration-400"
          >
            View Full Gallery
          </Link>
        </motion.div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div 
            className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-50"
            >
              <X size={24} />
            </button>

            {/* Navigation */}
            <button 
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-50 hidden md:flex"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-50 hidden md:flex"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image */}
            <motion.img 
              key={currentImage}
              src={galleryImages[currentImage].src} 
              alt={galleryImages[currentImage].alt}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            />

            {/* Caption & Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
              <span className="font-body text-sm text-white/60">
                {galleryImages[currentImage].alt}
              </span>
              <span className="font-body text-[13px] text-white/40">
                {currentImage + 1} / {galleryImages.length}
              </span>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
