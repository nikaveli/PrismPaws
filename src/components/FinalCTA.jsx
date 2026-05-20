import { Link } from 'react-router-dom';

export default function FinalCTA({ title, em, body, primary, secondary, secondaryHref }) {
  return (
    <section className="final-cta">
      <div className="final-cta-inner gsap-scale">
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
        <p>{body}</p>
        <div className="final-cta-actions">
          <Link to="/contact" className="btn btn-primary">{primary} <span className="btn-icon">→</span></Link>
          {secondary && secondaryHref?.startsWith('http')
            ? <a href={secondaryHref} className="btn btn-ghost" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>{secondary}</a>
            : secondary && <Link to={secondaryHref || '/services'} className="btn btn-ghost" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>{secondary}</Link>
          }
        </div>
      </div>
    </section>
  );
}
