import React from 'react';
import { Helmet } from 'react-helmet-async';
import GalleryHero from './Gallery/GalleryHero';
import ImageGrid from './Gallery/ImageGrid';
import GalleryCTA from './Gallery/GalleryCTA';

export default function Gallery() {
  return (
    <>
      <Helmet>
        <title>Photo Gallery | La Mer Inn Hotel Juba</title>
        <meta name="description" content="Explore the beauty of La Mer Inn Hotel through our photo gallery. View our rooms, dining areas, exterior, and event spaces in Juba." />
      </Helmet>
      <div className="w-full">
        <GalleryHero />
        <ImageGrid />
        <GalleryCTA />
      </div>
    </>
  );
}
