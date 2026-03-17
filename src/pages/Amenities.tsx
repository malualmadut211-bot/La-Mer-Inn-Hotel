import React from 'react';
import { Helmet } from 'react-helmet-async';
import AmenitiesHero from './Amenities/AmenitiesHero';
import CoreAmenities from './Amenities/CoreAmenities';
import BusinessCenter from './Amenities/BusinessCenter';
import AmenitiesCTA from './Amenities/AmenitiesCTA';

export default function Amenities() {
  return (
    <>
      <Helmet>
        <title>Hotel Amenities & Facilities | La Mer Inn Juba</title>
        <meta name="description" content="Discover the premium amenities at La Mer Inn Hotel, including high-speed Wi-Fi, secure parking, a business center, and 24/7 security." />
      </Helmet>
      <div className="w-full">
        <AmenitiesHero />
        <CoreAmenities />
        <BusinessCenter />
        <AmenitiesCTA />
      </div>
    </>
  );
}
