import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';

const stats = [
  { num: 10, suffix: '+', label: 'Years of Service' },
  { num: 5000, suffix: '+', label: 'Happy Guests' },
  { num: 50, suffix: '+', label: 'Elegant Rooms' },
  { num: 24, suffix: '/7', label: 'Staff Availability' }
];

export default function Stats() {
  return (
    <section className="bg-primary py-20 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(45deg,#1F5A7A,#2E7FA3,#1F5A7A)] bg-[length:200%_200%] animate-[gradient-shift_15s_ease_infinite]" />

      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ stat, index }: { stat: { num: number; suffix: string; label: string }, index: number, key?: React.Key }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      if (stat.num === 24) {
        setCount(24);
        return;
      }

      let start = 0;
      const end = stat.num;
      const duration = 2000;
      const incrementTime = (duration / end) * 10; // Adjust for smoother animation

      const timer = setInterval(() => {
        start += Math.ceil(end / 50); // Adjust step size
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, stat.num]);

  return (
    <motion.div
      ref={ref}
      className="text-center min-w-[140px] relative"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="font-display text-[40px] lg:text-[56px] font-bold text-white mb-2">
        {count.toLocaleString()}{stat.suffix}
      </div>
      <div className="font-body text-[14px] text-neutral uppercase tracking-[0.08em]">
        {stat.label}
      </div>

      {/* Divider (Desktop Only) */}
      {index < stats.length - 1 && (
        <div className="hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2 w-[1px] h-[60px] bg-neutral/20" />
      )}
    </motion.div>
  );
}
