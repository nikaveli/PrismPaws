import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    // If the destination has a hash (e.g. /services#bundles), wait for the
    // page to render then scroll the target into view. Otherwise scroll top.
    if (hash) {
      // Two animation frames: gives React + GSAP a chance to lay out the
      // section before we measure its position.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const el = document.querySelector(hash);
          if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: 'smooth' });
          } else {
            window.scrollTo(0, 0);
          }
        });
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <Nav />
      <div id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
