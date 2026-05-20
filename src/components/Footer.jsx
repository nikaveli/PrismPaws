import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/assets/images/PRISM_PAWS_LOGO.png" alt="Prism Paws" />
            </div>
            <p>Colorful energy. Trusted care. In-home sitting, dog walks, and drop-ins for pet parents who notice the difference.</p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">In-Home Sitting</Link></li>
              <li><Link to="/services">Drop-In Visits</Link></li>
              <li><Link to="/services">Dog Walks</Link></li>
              <li><Link to="/services">Bundles</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/about">Our Approach</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/contact">FAQ</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://instagram.com/PrismPawsPetCare">@PrismPawsPetCare</a></li>
              <li><Link to="/contact">DM to Book</Link></li>
              <li><Link to="/contact">Call or Text</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Prism Paws Pet Care. All rights reserved.</p>
          <div className="footer-chips">
            <span className="footer-chip"><span className="dot" style={{ background: 'var(--lime-green)' }}></span> Insured</span>
            <span className="footer-chip"><span className="dot" style={{ background: 'var(--golden-yellow)' }}></span> Background Checked</span>
            <span className="footer-chip"><span className="dot" style={{ background: 'var(--deep-pink)' }}></span> Pet Obsessed</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
