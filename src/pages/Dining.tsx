import React from 'react';
import { Helmet } from 'react-helmet-async';
import DiningHero from './Dining/DiningHero';
import RestaurantIntro from './Dining/RestaurantIntro';
import MenuHighlights from './Dining/MenuHighlights';
import BarLounge from './Dining/BarLounge';
import DiningCTA from './Dining/DiningCTA';

export default function Dining() {
  return (
    <>
      <Helmet>
        <title>Dining | The Oasis Restaurant at La Mer Inn Juba</title>
        <meta name="description" content="Experience culinary excellence at The Oasis Restaurant. Savor local and international flavors, signature cocktails, and a relaxing ambiance in Juba." />
      </Helmet>
      <div className="w-full">
        <DiningHero />
        <RestaurantIntro />
        <MenuHighlights />
        <BarLounge />
        <DiningCTA />
      </div>
    </>
  );
}
