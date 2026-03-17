import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Rooms from './pages/Rooms';
import Dining from './pages/Dining';
import Amenities from './pages/Amenities';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/dining" element={<Dining />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}
