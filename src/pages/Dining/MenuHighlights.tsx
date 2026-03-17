import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const menuCategories = ['Breakfast', 'Lunch', 'Dinner', 'Desserts'];

const menuItems = {
  Breakfast: [
    { name: 'Juba Sunrise Platter', desc: 'Two eggs any style, grilled tomatoes, beef sausages, baked beans, and toast.', price: '$15' },
    { name: 'Tropical Fruit Bowl', desc: 'Seasonal local fruits, natural yogurt, and wild honey.', price: '$10' },
    { name: 'Nile Perch Hash', desc: 'Smoked Nile perch, potatoes, onions, topped with a poached egg.', price: '$18' },
    { name: 'Classic Pancakes', desc: 'Fluffy pancakes served with maple syrup and fresh berries.', price: '$12' }
  ],
  Lunch: [
    { name: 'La Mer Signature Burger', desc: '100% beef patty, cheddar, caramelized onions, house sauce, served with fries.', price: '$22' },
    { name: 'Grilled Tilapia Salad', desc: 'Fresh local tilapia, mixed greens, avocado, citrus vinaigrette.', price: '$20' },
    { name: 'Spicy Chicken Wrap', desc: 'Grilled chicken, spicy mayo, lettuce, tomato in a warm tortilla.', price: '$16' },
    { name: 'Vegetarian Mezze', desc: 'Hummus, baba ganoush, falafel, olives, and warm pita bread.', price: '$18' }
  ],
  Dinner: [
    { name: 'Pan-Seared Nile Perch', desc: 'Locally sourced perch, lemon butter sauce, seasonal vegetables, and garlic mash.', price: '$32' },
    { name: 'Braised Beef Short Ribs', desc: 'Slow-cooked ribs, red wine reduction, creamy polenta, roasted carrots.', price: '$38' },
    { name: 'Swahili Coconut Curry', desc: 'Chicken or vegetables in a rich coconut and spice broth, served with basmati rice.', price: '$28' },
    { name: 'Mushroom Risotto', desc: 'Arborio rice, wild mushrooms, parmesan, truffle oil.', price: '$26' }
  ],
  Desserts: [
    { name: 'Mango Cheesecake', desc: 'Creamy cheesecake topped with fresh local mango coulis.', price: '$12' },
    { name: 'Warm Chocolate Fondant', desc: 'Molten chocolate center, served with vanilla bean ice cream.', price: '$14' },
    { name: 'Traditional Malva Pudding', desc: 'Sweet, spongy apricot pudding served warm with custard.', price: '$10' },
    { name: 'Seasonal Fruit Sorbet', desc: 'Refreshing trio of house-made sorbets.', price: '$9' }
  ]
};

export default function MenuHighlights() {
  const [activeCategory, setActiveCategory] = useState('Dinner');

  return (
    <section id="menu-highlights" className="bg-bg-secondary py-20 lg:py-30">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.div 
            className="flex items-center justify-center gap-4 mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-body text-xs uppercase tracking-[0.15em] text-neutral">A Taste of Our Offerings</span>
          </motion.div>

          <motion.h2 
            className="font-display text-[32px] lg:text-[40px] text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Menu Highlights
          </motion.h2>

          <motion.p 
            className="font-body text-[16px] text-text-secondary max-w-[600px] mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Explore a selection of our most popular dishes, crafted with passion and the finest ingredients.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {menuCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-body text-[15px] font-medium transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-white text-text-secondary hover:bg-neutral/10 border border-neutral/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Menu Items Grid */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
            >
              {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
                <div key={index} className="flex flex-col border-b border-neutral/20 pb-6">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-display text-[20px] font-semibold text-primary">{item.name}</h3>
                    <span className="font-display text-[20px] font-bold text-accent ml-4">{item.price}</span>
                  </div>
                  <p className="font-body text-[14px] text-text-secondary leading-[1.6]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Note */}
        <motion.p 
          className="text-center font-body text-[13px] text-text-secondary/70 mt-12 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          * This is a sample menu. Items and prices are subject to change based on seasonal availability.
        </motion.p>

      </div>
    </section>
  );
}
