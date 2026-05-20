import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav-wrap">
      <nav className="nav">
        <Link to="/" className="nav-logo">
          <img src="/assets/images/PRISM_PAWS_LOGO.png" alt="Prism Paws" />
        </Link>
        <ul className="nav-links" style={open ? mobileOpen : undefined}>
          <li><NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink></li>
          <li><NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink></li>
        </ul>
        <Link to="/contact" className="nav-cta">Book Now <span>→</span></Link>
        <button className="nav-burger" aria-label="Menu" onClick={() => setOpen(o => !o)}>☰</button>
      </nav>
    </div>
  );
}

const mobileOpen = {
  display: 'flex',
  position: 'absolute',
  top: 74,
  left: 0,
  right: 0,
  background: 'var(--cream)',
  flexDirection: 'column',
  padding: '1.5rem 2rem',
  borderBottom: '1px solid var(--cream-line)',
  alignItems: 'flex-start',
  gap: '1rem',
};
