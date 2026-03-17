import React from 'react';
import { Helmet } from 'react-helmet-async';
import RoomsHero from './Rooms/RoomsHero';
import RoomListings from './Rooms/RoomListings';
import RoomComparison from './Rooms/RoomComparison';
import RoomPolicies from './Rooms/RoomPolicies';
import RoomsCTA from './Rooms/RoomsCTA';

export default function Rooms() {
  return (
    <>
      <Helmet>
        <title>Rooms & Suites | La Mer Inn Hotel Juba</title>
        <meta name="description" content="Explore our beautifully appointed rooms and suites in Juba. Find the perfect accommodation for your stay at La Mer Inn Hotel." />
      </Helmet>
      <div className="w-full">
        <RoomsHero />
        <RoomListings />
        <RoomComparison />
        <RoomPolicies />
        <RoomsCTA />
      </div>
    </>
  );
}
