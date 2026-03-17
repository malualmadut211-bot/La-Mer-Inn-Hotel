import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingButtons from './FloatingButtons';
import Loader from './Loader';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Only show loader on first visit
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('hasVisited', 'true');
      }, 3500);
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col relative">
      {loading && <Loader />}
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
