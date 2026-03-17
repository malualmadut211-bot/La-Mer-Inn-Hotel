import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Minus } from 'lucide-react';

const features = [
  { name: 'Room Size', std: '25-30 sqm', dlx: '35 sqm', exc: '50 sqm', ste: '80 sqm' },
  { name: 'Bed Type', std: 'Single/Double', dlx: 'Twin', exc: 'King', ste: '2x King' },
  { name: 'Max Capacity', std: '1-2 Guests', dlx: '2 Guests', exc: '2 Guests', ste: '4 Guests' },
  { name: 'Free Wi-Fi', std: true, dlx: true, exc: true, ste: true },
  { name: 'Air Conditioning', std: true, dlx: true, exc: true, ste: true },
  { name: 'Flat-screen TV', std: true, dlx: true, exc: true, ste: true },
  { name: 'Work Desk', std: true, dlx: true, exc: true, ste: true },
  { name: 'Mini Fridge', std: false, dlx: true, exc: true, ste: true },
  { name: 'City View', std: false, dlx: true, exc: true, ste: true },
  { name: 'Espresso Machine', std: false, dlx: false, exc: true, ste: true },
  { name: 'Separate Living Area', std: false, dlx: false, exc: true, ste: true },
  { name: 'Lounge Access', std: false, dlx: false, exc: true, ste: true },
  { name: 'Butler Service', std: false, dlx: false, exc: false, ste: true },
  { name: 'Dining Area', std: false, dlx: false, exc: false, ste: true }
];

export default function RoomComparison() {
  const [activeTab, setActiveTab] = useState('Standard');

  const renderValue = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? <Check size={20} className="text-accent mx-auto" /> : <Minus size={20} className="text-neutral/40 mx-auto" />;
    }
    return <span className="font-body text-[14px] text-text-secondary">{value}</span>;
  };

  return (
    <section className="bg-white py-20 lg:py-30 border-t border-neutral/10">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.div 
            className="flex items-center justify-center gap-4 mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-body text-xs uppercase tracking-[0.15em] text-neutral">Compare Options</span>
          </motion.div>

          <motion.h2 
            className="font-display text-[32px] lg:text-[40px] text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Which Room is Right for You?
          </motion.h2>
        </div>

        {/* Desktop Table */}
        <motion.div 
          className="hidden lg:block overflow-x-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-6 border-b-2 border-primary/10 font-display text-[20px] text-primary font-semibold w-[30%]">Features & Amenities</th>
                <th className="p-6 border-b-2 border-primary/10 font-display text-[20px] text-primary font-semibold text-center w-[17.5%]">Standard</th>
                <th className="p-6 border-b-2 border-primary/10 font-display text-[20px] text-primary font-semibold text-center w-[17.5%]">Deluxe</th>
                <th className="p-6 border-b-2 border-primary/10 font-display text-[20px] text-primary font-semibold text-center w-[17.5%]">Executive</th>
                <th className="p-6 border-b-2 border-primary/10 font-display text-[20px] text-primary font-semibold text-center w-[17.5%]">Suite</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="hover:bg-bg-secondary/50 transition-colors duration-200">
                  <td className="p-6 border-b border-neutral/10 font-body text-[15px] font-medium text-primary">{feature.name}</td>
                  <td className="p-6 border-b border-neutral/10 text-center">{renderValue(feature.std)}</td>
                  <td className="p-6 border-b border-neutral/10 text-center">{renderValue(feature.dlx)}</td>
                  <td className="p-6 border-b border-neutral/10 text-center">{renderValue(feature.exc)}</td>
                  <td className="p-6 border-b border-neutral/10 text-center">{renderValue(feature.ste)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile Accordion/Tabs */}
        <div className="lg:hidden">
          {/* Tabs */}
          <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-6 pb-2">
            {['Standard', 'Deluxe', 'Executive', 'Suite'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-shrink-0 px-6 py-3 rounded-full font-body text-[14px] font-medium transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-bg-secondary text-text-secondary border border-neutral/20'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content */}
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-bg-secondary rounded-2xl p-6 border border-neutral/10"
          >
            <h3 className="font-display text-[24px] text-primary font-semibold mb-6 pb-4 border-b border-neutral/20">
              {activeTab} Features
            </h3>
            <ul className="space-y-4">
              {features.map((feature, index) => {
                const key = activeTab === 'Standard' ? 'std' : activeTab === 'Deluxe' ? 'dlx' : activeTab === 'Executive' ? 'exc' : 'ste';
                const value = feature[key as keyof typeof feature];
                
                // Only show features that are true or have a string value for mobile view to save space
                if (value === false) return null;

                return (
                  <li key={index} className="flex justify-between items-center">
                    <span className="font-body text-[14px] font-medium text-primary">{feature.name}</span>
                    <span className="font-body text-[14px] text-text-secondary text-right">
                      {typeof value === 'boolean' ? <Check size={18} className="text-accent" /> : value}
                    </span>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
