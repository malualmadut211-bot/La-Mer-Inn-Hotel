import React from 'react';
import { Helmet } from 'react-helmet-async';
import BookingHero from './Booking/BookingHero';
import BookingForm from './Booking/BookingForm';

export default function Booking() {
  return (
    <>
      <Helmet>
        <title>Book Your Stay | La Mer Inn Hotel Juba</title>
        <meta name="description" content="Book your stay at La Mer Inn Hotel in Juba. Request a reservation online and experience world-class hospitality in South Sudan." />
      </Helmet>
      <div className="w-full">
        <BookingHero />
        <BookingForm />
      </div>
    </>
  );
}
