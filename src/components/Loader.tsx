import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function Loader() {
  const [split, setSplit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplit(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] pointer-events-none flex"
      initial={{ opacity: 1 }}
      animate={{ opacity: split ? 0 : 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {/* Left Half */}
      <motion.div
        className="h-full w-1/2 bg-primary flex flex-col items-end justify-center overflow-hidden origin-right"
        initial={{ x: 0, rotate: 0 }}
        animate={{ x: split ? '-100%' : 0, rotate: split ? -2 : 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="translate-x-1/2 flex flex-col items-center">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-8">
            <path d="M2 12h4l3-9 5 18 3-9h5" />
          </svg>
          <div className="w-[100px] h-[3px] bg-neutral/30 rounded-l-full overflow-hidden relative">
            <motion.div
              className="absolute top-0 right-0 h-full bg-accent"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.5, ease: 'easeInOut' }}
            />
          </div>
          <div className="mt-4 text-bg-secondary text-sm tracking-[0.15em] uppercase font-body opacity-50">
            La Mer
          </div>
        </div>
      </motion.div>

      {/* Right Half */}
      <motion.div
        className="h-full w-1/2 bg-primary flex flex-col items-start justify-center overflow-hidden origin-left"
        initial={{ x: 0, rotate: 0 }}
        animate={{ x: split ? '100%' : 0, rotate: split ? 2 : 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="-translate-x-1/2 flex flex-col items-center">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-8 opacity-0">
            <path d="M2 12h4l3-9 5 18 3-9h5" />
          </svg>
          <div className="w-[100px] h-[3px] bg-neutral/30 rounded-r-full overflow-hidden relative">
            <motion.div
              className="absolute top-0 left-0 h-full bg-accent"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.5, ease: 'easeInOut' }}
            />
          </div>
          <div className="mt-4 text-bg-secondary text-sm tracking-[0.15em] uppercase font-body opacity-50">
            Inn Hotel
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
