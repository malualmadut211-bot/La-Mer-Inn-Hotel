import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutHero from './About/AboutHero';
import OurStory from './About/OurStory';
import Values from './About/Values';
import Ambiance from './About/Ambiance';
import Team from './About/Team';
import Stats from './About/Stats';
import AboutCTA from './About/AboutCTA';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About La Mer Inn Hotel | Our Story, Values & Experience in Juba</title>
        <meta name="description" content="Discover the story behind La Mer Inn Hotel Juba. Learn about our values, team, and commitment to providing world-class hospitality in South Sudan." />
      </Helmet>
      <div className="w-full">
        <AboutHero />
        <OurStory />
        <Values />
        <Ambiance />
        <Team />
        <Stats />
        <AboutCTA />
      </div>
    </>
  );
}
