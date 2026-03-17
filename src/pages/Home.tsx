import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from './Home/Hero';
import Welcome from './Home/Welcome';
import QuickBooking from './Home/QuickBooking';
import RoomsPreview from './Home/RoomsPreview';
import AmenitiesShowcase from './Home/AmenitiesShowcase';
import DiningPreview from './Home/DiningPreview';
import USPs from './Home/USPs';
import Testimonials from './Home/Testimonials';
import Location from './Home/Location';
import GalleryTeaser from './Home/GalleryTeaser';
import FinalCTA from './Home/FinalCTA';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>La Mer Inn Hotel Juba | Boutique Hotel in South Sudan</title>
        <meta name="description" content="Welcome to La Mer Inn Hotel in Juba, South Sudan. Enjoy comfortable accommodations, authentic African cuisine, a garden & pool, and warm hospitality. Book your stay today." />
      </Helmet>
      <div className="w-full">
        <Hero />
        <Welcome />
        <QuickBooking />
        <RoomsPreview />
        <AmenitiesShowcase />
        <DiningPreview />
        <USPs />
        <Testimonials />
        <Location />
        <GalleryTeaser />
        <FinalCTA />
      </div>
    </>
  );
}
