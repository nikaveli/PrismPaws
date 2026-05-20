import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGsapPage } from '../components/useGsapPage.js';
import FinalCTA from '../components/FinalCTA.jsx';

const SERVICE_OPTIONS = [
  'In-Home Sit',
  'Drop-In Visit',
  'Dog Walk',
  'Overnight',
  'Multi-Day',
  'Monthly Bundle',
  'Not Sure Yet',
];

export default function Contact() {
  const scope = useRef(null);
  const [services, setServices] = useState(['Drop-In Visit']);
  const [sent, setSent] = useState(false);

  useGsapPage(scope, () => {
    gsap.fromTo('.hero-logo',
      { opacity: 0, y: 30, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: 'back.out(1.6)' },
    );
    gsap.fromTo('.subpage-hero h1 .word',
      { opacity: 0, y: 60, rotate: 4 },
      { opacity: 1, y: 0, rotate: 0, duration: 0.9, stagger: 0.07, ease: 'power3.out', delay: 0.35 },
    );
    gsap.fromTo('.subpage-hero p',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.85, ease: 'power2.out' },
    );
    gsap.fromTo('.subpage-hero .quick-row',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 1.0, ease: 'power2.out' },
    );

    // Contact side panel reveal
    gsap.fromTo('.contact-side',
      { opacity: 0, x: -40 },
      {
        opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-grid', start: 'top 85%' },
      },
    );
    gsap.fromTo('.contact-form-card',
      { opacity: 0, x: 40 },
      {
        opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-grid', start: 'top 85%' },
      },
    );
    gsap.fromTo('.contact-list li',
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out', delay: 0.5,
        scrollTrigger: { trigger: '.contact-grid', start: 'top 85%' },
      },
    );
  });

  function toggleService(name) {
    setServices((cur) => (cur.includes(name) ? cur.filter((s) => s !== name) : [...cur, name]));
  }

  function onSubmit(e) {
    e.preventDefault();
    setSent(true);
    // Bounce the success card a little
    requestAnimationFrame(() => {
      gsap.from('.form-success', { y: -16, opacity: 0, duration: 0.6, ease: 'back.out(2)' });
    });
  }

  return (
    <main ref={scope}>
      {/* HERO */}
      <section className="subpage-hero">
        <span className="floating-paw" style={{ top: '20%', left: '8%' }}>🐾</span>
        <span className="floating-paw" style={{ top: '70%', left: '14%' }}>🐾</span>
        <span className="floating-paw" style={{ top: '30%', right: '10%' }}>🐾</span>
        <span className="floating-paw" style={{ top: '75%', right: '16%' }}>🐾</span>
        <div className="subpage-hero-inner">
          <img className="hero-logo" src="/assets/images/PRISM_PAWS_LOGO.png" alt="Prism Paws Pet Care" />
          <div className="eyebrow center">Say Hi</div>
          <h1>
            <span className="word">Let's</span> <span className="word">meet</span> <span className="word">your</span><br />
            <span className="word"><em>favorite</em></span> <span className="word">animal.</span>
          </h1>
          <p>
            Every new client starts with a free meet-and-greet. No booking required, no pressure — just a chance for your pet to approve us first. Drop a note, send a DM, or text us. We'll get back to you the same day.
          </p>
          <div
            className="quick-row"
            style={{
              marginTop: '2.5rem',
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <a href="https://instagram.com/PrismPawsPetCare" className="btn btn-primary">
              DM On Instagram <span className="btn-icon">→</span>
            </a>
            <a href="#contact-form" className="btn btn-ghost">Use The Form</a>
          </div>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="contact-section" id="contact-form">
        <div className="contact-grid">
          {/* SIDE PANEL */}
          <div className="contact-side">
            <h2>Your Pet's <em>Next Best Friend</em>.</h2>
            <p>
              Independent. Insured. Pet obsessed. We answer every message ourselves — no chat bots, no automated replies, no script.
            </p>

            <ul className="contact-list">
              <li>
                <div className="c-icon">📱</div>
                <div>
                  <div className="c-label">Call or Text</div>
                  <div className="c-value"><a href="tel:+17202891134">(720) 289-1134</a></div>
                </div>
              </li>
              <li>
                <div className="c-icon">✉️</div>
                <div>
                  <div className="c-label">Email</div>
                  <div className="c-value"><a href="mailto:mekyla@yourpetsfavoritehuman.com">mekyla@yourpetsfavoritehuman.com</a></div>
                </div>
              </li>
              <li>
                <div className="c-icon">📸</div>
                <div>
                  <div className="c-label">Instagram (Fastest)</div>
                  <div className="c-value"><a href="https://instagram.com/PrismPawsPetCare">@PrismPawsPetCare</a></div>
                </div>
              </li>
              <li>
                <div className="c-icon">📍</div>
                <div>
                  <div className="c-label">Service Area</div>
                  <div className="c-value">Denver + 30 min radius</div>
                </div>
              </li>
              <li>
                <div className="c-icon">🕒</div>
                <div>
                  <div className="c-label">Booking Hours</div>
                  <div className="c-value">Mon–Sun · 7am–10pm</div>
                </div>
              </li>
            </ul>

            <div className="social-row">
              <a href="https://instagram.com/PrismPawsPetCare" className="social-pill">
                <span>📸</span> Instagram
              </a>
              <a href="#" className="social-pill">
                <span>📘</span> Facebook
              </a>
              <a href="#" className="social-pill">
                <span>🎵</span> TikTok
              </a>
            </div>

            <div className="map-block" style={{ marginTop: '2rem', background: 'rgba(255,255,255,0.06)', border: '2px dashed rgba(255,255,255,0.18)', color: 'rgba(255,255,255,0.65)' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              <div>Serving Denver + surrounding areas</div>
              <div style={{ fontSize: '0.78rem', opacity: 0.6 }}>Travel fees quoted up front · No surprises</div>
            </div>
          </div>

          {/* FORM */}
          <div className="contact-form-card">
            {sent ? (
              <div className="form-success" style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div
                  style={{
                    width: 80, height: 80, margin: '0 auto 1.5rem',
                    borderRadius: '50%', background: 'var(--lime-green)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '2.25rem',
                  }}
                >
                  ✓
                </div>
                <h3 style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>YOUR PET <em style={{ color: 'var(--vibrant-purple)', fontStyle: 'normal' }}>SAYS HI BACK</em>.</h3>
                <p style={{ color: 'var(--muted)', marginBottom: '2rem', maxWidth: 420, margin: '0 auto 2rem' }}>
                  Thanks for reaching out. We'll get back to you the same day with availability and your free meet-and-greet window.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button className="btn btn-dark" onClick={() => setSent(false)}>Send Another</button>
                  <Link to="/services" className="btn btn-ghost">Browse Services</Link>
                </div>
              </div>
            ) : (
              <>
                <h3>Send A Note</h3>
                <p>Tell us about your pet — quirks, routine, what they actually like. The more we know, the better the first visit goes.</p>

                <form onSubmit={onSubmit}>
                  <div className="form-grid">
                    <div className="form-field">
                      <label htmlFor="name">Your Name</label>
                      <input id="name" name="name" type="text" required placeholder="Jamie M." />
                    </div>
                    <div className="form-field">
                      <label htmlFor="petname">Pet's Name</label>
                      <input id="petname" name="petname" type="text" required placeholder="Miso" />
                    </div>
                    <div className="form-field">
                      <label htmlFor="email">Email</label>
                      <input id="email" name="email" type="email" required placeholder="you@home.com" />
                    </div>
                    <div className="form-field">
                      <label htmlFor="phone">Phone</label>
                      <input id="phone" name="phone" type="tel" placeholder="(720) 555-1234" />
                    </div>
                    <div className="form-field">
                      <label htmlFor="pettype">Pet Type</label>
                      <select id="pettype" name="pettype" defaultValue="">
                        <option value="" disabled>Select…</option>
                        <option>Dog</option>
                        <option>Cat</option>
                        <option>Multi-pet household</option>
                        <option>Senior / special needs</option>
                        <option>Small animal / exotic</option>
                      </select>
                    </div>
                    <div className="form-field">
                      <label htmlFor="when">When Do You Need Care?</label>
                      <input id="when" name="when" type="text" placeholder="Next weekend, Mar 12–15…" />
                    </div>

                    <div className="form-field full">
                      <label>Services You're Interested In</label>
                      <div className="service-pills">
                        {SERVICE_OPTIONS.map((opt) => (
                          <span key={opt}>
                            <input
                              type="checkbox"
                              id={`svc-${opt}`}
                              checked={services.includes(opt)}
                              onChange={() => toggleService(opt)}
                            />
                            <label htmlFor={`svc-${opt}`}>{opt}</label>
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="form-field full">
                      <label htmlFor="message">Tell Us About Your Pet</label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Routine, meds, quirks, favorite spots, things to avoid — the more we know, the better the first visit goes."
                        required
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginTop: '1.5rem' }}>
                    <button type="submit" className="btn btn-primary">
                      Send Note <span className="btn-icon">🐾</span>
                    </button>
                    <p style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
                      Same-day response · Free meet-and-greet for new clients
                    </p>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — Meet & Greet flow */}
      <section className="process-section">
        <div className="container tc">
          <div className="eyebrow center gsap-up">From Hello To First Visit</div>
          <h2 className="section-h gsap-up">Three Easy Steps. <em>Your Pet Approves First.</em></h2>
          <p className="section-sub gsap-up" style={{ margin: '0 auto' }}>
            No paperwork maze. No hidden fees. Just a simple path to your pet being taken care of — by someone they actually like.
          </p>
        </div>

        <div className="process-timeline">
          <div className="process-line"></div>
          {FLOW.map((s, i) => (
            <div className={`process-step ${i % 2 === 1 ? 'right' : ''}`} key={s.title}>
              <div className="ps-content">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
              <div className="ps-number">{String(i + 1).padStart(2, '0')}</div>
              <div className="ps-image">
                <img src={s.photo} alt={s.title} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section" id="faq">
        <div className="container tc">
          <div className="eyebrow center gsap-up">Quick Answers</div>
          <h2 className="section-h gsap-up">Common Booking <em>Questions</em></h2>
        </div>
        <ContactFaq items={FAQS} />
      </section>

      <FinalCTA
        title="Your Pet's Next <em>Best Friend</em><br/>Is One Message Away."
        body="DM us on Instagram, drop a note, or text. We answer every message ourselves — same-day, every time."
        primary="DM Instagram"
        secondary="See Services"
        secondaryHref="/services"
      />
    </main>
  );
}

function ContactFaq({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq-list">
      {items.map((q, i) => (
        <div className={`faq-item ${open === i ? 'open' : ''}`} key={q.q}>
          <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
            <span>{q.q}</span>
            <span className="faq-icon">+</span>
          </button>
          <div className="faq-a" style={{ maxHeight: open === i ? '500px' : '0' }}>
            <div className="faq-a-inner">{q.a}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

const FLOW = [
  {
    title: 'Reach Out',
    desc: 'Send a DM, drop a note, or text us. Tell us about your pet — routine, quirks, medical needs, the works. We answer the same day.',
    photo: '/assets/images/grey_cat.png',
  },
  {
    title: 'Free Meet & Greet',
    desc: "We come to you — no charge, no commitment. Your pet decides if we're a fit. Honestly the most important step.",
    photo: '/assets/images/pitbull_full_body.png',
  },
  {
    title: 'First Visit On The Calendar',
    desc: "Once your pet approves us, we lock in the routine — feeding times, meds, walk preferences — and the first booking is on the books. Photo updates start that day.",
    photo: '/assets/images/White_lab.png',
  },
];

const FAQS = [
  { q: 'How fast do you respond?', a: "Same day, every day — usually within a couple hours. Instagram DMs are the fastest, but the form and text work too. We answer every message ourselves." },
  { q: 'Is the meet-and-greet really free?', a: "Yes. No deposit, no booking fee, no pressure. We come to you, meet your pet, learn the routine, and only book a paid visit if everyone's comfortable." },
  { q: 'What if I need care this week?', a: "Reach out anyway. Last-minute bookings are subject to availability, but we hold space for short-notice requests when we can. Same-sitter consistency is something we genuinely value." },
  { q: 'Do you serve my area?', a: 'We cover Denver and a 30-minute radius. A travel fee of $15–$20 applies for addresses outside that. Always quoted up front — no surprises.' },
  { q: 'Can you handle meds, injectables, or special diets?', a: 'Yes. We administer oral, topical, and injectable medications, manage prescription diets, and document every dose with a confirmation photo. Walk us through the protocol at the meet-and-greet.' },
  { q: 'What payment methods do you accept?', a: 'Venmo, Zelle, Cash App, and standard card via invoice. Monthly bundle clients are billed at the start of each cycle. Single visits are settled within 48 hours of the booking.' },
  { q: 'What happens in an emergency?', a: "We have your vet's number on file, your emergency contact, and access protocols agreed in advance. We've never had a situation we couldn't manage calmly — and we keep it that way by prepping for it." },
];
