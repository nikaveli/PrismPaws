import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src="/assets/images/PRISM_PAWS_LOGO.png" alt="Prism Paws" />
            </Link>
            <p>Colorful energy. Trusted care. In-home sitting, dog walks, and drop-ins for pet parents who notice the difference.</p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services#in-home">In-Home Sitting</Link></li>
              <li><Link to="/services#drop-ins">Drop-In Visits</Link></li>
              <li><Link to="/services#walks">Dog Walks</Link></li>
              <li><Link to="/services#enrichment">Enrichment & TLC</Link></li>
              <li><Link to="/services#bundles">Bundles</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/about#approach">Our Approach</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/contact#faq">FAQ</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://instagram.com/PrismPawsPetCare" target="_blank" rel="noopener noreferrer">@PrismPawsPetCare</a></li>
              <li><a href="mailto:mekyla@yourpetsfavoritehuman.com">mekyla@yourpetsfavoritehuman.com</a></li>
              <li><a href="tel:+17202891134">(720) 289-1134</a></li>
              <li><Link to="/contact#contact-form">Send a Note</Link></li>
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
