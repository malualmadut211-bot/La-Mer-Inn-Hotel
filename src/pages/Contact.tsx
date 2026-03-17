import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactHero from './Contact/ContactHero';
import ContactInfo from './Contact/ContactInfo';
import ContactForm from './Contact/ContactForm';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | La Mer Inn Hotel Juba</title>
        <meta name="description" content="Get in touch with La Mer Inn Hotel in Juba, South Sudan. Find our location, phone numbers, email, and send us a message." />
      </Helmet>
      <div className="w-full">
        <ContactHero />
        <ContactInfo />
        <ContactForm />
      </div>
    </>
  );
}
