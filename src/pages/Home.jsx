import { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGsapPage } from '../components/useGsapPage.js';
import FinalCTA from '../components/FinalCTA.jsx';

const HERO_WORDS = ['Your', "Pet's", 'New', 'Favorite'];

export default function Home() {
  const scope = useRef(null);

  useGsapPage(scope, () => {
    // Hero entrance
    gsap.fromTo('.hero h1 .word',
      { opacity: 0, y: 60, rotate: 6 },
      { opacity: 1, y: 0, rotate: 0, duration: 0.9, stagger: 0.08, ease: 'power3.out', delay: 0.2 },
    );
    gsap.fromTo('.hero-pill', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.1, ease: 'power2.out' });
    gsap.fromTo('.hero-sub', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.9, ease: 'power2.out' });
    gsap.fromTo('.hero-actions', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 1.05, ease: 'power2.out' });
    gsap.fromTo('.hero-trust', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 1.2, ease: 'power2.out' });
    gsap.fromTo('.hero-photo-frame', { scale: 0.6, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, ease: 'expo.out', delay: 0.3 });
    gsap.fromTo('.hero-photo', { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, delay: 0.7, ease: 'power3.out' });
    gsap.fromTo('.hero-mini-card', { opacity: 0, scale: 0.4 }, { opacity: 1, scale: 1, duration: 0.7, stagger: 0.15, delay: 1.4, ease: 'back.out(2)' });
    gsap.fromTo('.hero-orbit-bone, .hero-orbit-badge', { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, delay: 1.6, ease: 'back.out(2.5)' });
    gsap.fromTo('.hero-coupon', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, delay: 1.7, ease: 'power3.out' });
  });

  return (
    <main ref={scope}>
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-pill"><span className="pulse"></span> Now Booking · Denver + Surrounding Areas</div>
            <h1>
              {HERO_WORDS.map((w, i) => (
                <span key={i} className="word">{w} </span>
              ))}<br />
              <span className="word"><em>Human</em></span>
              <span className="hero-emoji">♥</span>
            </h1>
            <p className="hero-sub">In-home pet sitting, dog walks, and drop-in visits — built around your pet's routine, their personality, and the way they actually like to be cared for.</p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">Book a Meet &amp; Greet <span className="btn-icon">🐾</span></Link>
              <Link to="/services" className="btn btn-ghost">Explore Services</Link>
            </div>
            <div className="hero-trust">
              <div className="trust-chip"><div className="icon blue">🛡</div> Fully Insured</div>
              <div className="trust-chip"><div className="icon purple">📸</div> Photo Updates</div>
              <div className="trust-chip"><div className="icon green">🌿</div> Background Checked</div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-photo-frame">
              <img className="hero-photo" src="/assets/images/blue_eye_dog.png" alt="Featured pup" />
            </div>

            <div className="hero-mini-card top">
              <img src="/assets/images/grey_cat.png" alt="" />
              <div className="hero-mini-card-text">
                <strong>Miso · Cat sit</strong>
                <span>Today 2pm · 30 min</span>
              </div>
            </div>

            <div className="hero-orbit-bone">🦴</div>

            <div className="hero-orbit-badge circle-badge">
              <span className="circle-icon">🐾</span>
              <svg viewBox="0 0 100 100">
                <defs>
                  <path id="heroCirclePath" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
                </defs>
                <text>
                  <textPath href="#heroCirclePath" startOffset="0">PET OBSESSED · TRUSTED CARE · PET OBSESSED ·</textPath>
                </text>
              </svg>
            </div>

            <div className="hero-coupon">
              <div>
                <div className="hero-coupon-title">★ MEET &amp; GREET</div>
                <div className="hero-coupon-meta">Free intro visit · No booking required</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="feature-row">
        <div className="feature-grid">
          <div className="feature-card gsap-up">
            <img className="fc-photo" src="/assets/images/lab_dog.png" alt="" />
            <div className="fc-content">
              <h3>Learn How We Care For Your Pet</h3>
              <p>Every visit follows your pet's routine. We adapt to feeding times, meds, walks and personality.</p>
              <Link to="/about">Read Article →</Link>
            </div>
            <div className="fc-stamp">
              <svg viewBox="0 0 100 100">
                <defs>
                  <path id="fcPath1" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
                </defs>
                <text>
                  <textPath href="#fcPath1" startOffset="0">FROM · MONTHLY · CARE PLANS ·</textPath>
                </text>
              </svg>
              <div className="stamp-num">$250</div>
              <div className="stamp-label">/ month</div>
            </div>
          </div>

          <div className="feature-card gsap-up">
            <img className="fc-photo" src="/assets/images/grey_cat_body.png" alt="" />
            <div className="fc-content">
              <h3>Basic Nutrition &amp; Med Care</h3>
              <p>Meds, oral or injectable, given on schedule with a confirmation photo every time.</p>
              <Link to="/services">Shop Now →</Link>
            </div>
            <div className="fc-stamp">
              <svg viewBox="0 0 100 100">
                <defs>
                  <path id="fcPath2" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
                </defs>
                <text>
                  <textPath href="#fcPath2" startOffset="0">INCLUDED · WITH EVERY VISIT ·</textPath>
                </text>
              </svg>
              <div className="stamp-num">+$5</div>
              <div className="stamp-label">per visit</div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE SERVE */}
      <section className="serve-section">
        <div className="serve-grid">
          <div className="serve-text gsap-left">
            <div className="eyebrow">What's Included</div>
            <h2 className="section-h">How We Serve <em>Pet Parents</em></h2>
            <p className="section-sub">Making pet care simpler for you. Our entire, well-rounded routine is created with love — and tuned to the exact pet living in your house.</p>
            <ul className="serve-list">
              <li><span className="dot"></span> In-Home Sitting</li>
              <li><span className="dot"></span> Dog Walks &amp; Pack Walks</li>
              <li><span className="dot"></span> Drop-In Visits</li>
              <li><span className="dot"></span> Sensory &amp; Enrichment Play</li>
            </ul>
          </div>
          <div className="serve-photos gsap-right">
            <div className="serve-photo p1"><img src="/assets/images/Mekyla_white_dog.png" alt="" /></div>
            <div className="serve-photo p2"><img src="/assets/images/pitbull.png" alt="" /></div>
          </div>
        </div>
      </section>

      {/* PET COLLECTION */}
      <section className="collection-section">
        <div className="collection-head">
          <div className="gsap-up">
            <div className="eyebrow">Recent Friends</div>
            <h2 className="section-h">Well Groomed <em>Pet Collection</em></h2>
          </div>
          <p className="gsap-up">We have a huge collection of regulars — dogs, cats, seniors and rescues. Every visit is photo-documented and sent to you in real time.</p>
          <Link to="/services" className="btn btn-pink gsap-up">See All</Link>
        </div>

        <div className="collection-grid">
          <div className="coll-card tall"><img src="/assets/images/white_dog.png" alt="" /><span className="coll-tag">In-Home Sit</span></div>
          <div className="coll-card"><img src="/assets/images/collie_ball.png" alt="" /><span className="coll-tag">Dog Walk</span></div>
          <div className="coll-card"><img src="/assets/images/stripped_cat.png" alt="" /><span className="coll-tag">Drop-In</span></div>
          <div className="coll-card"><img src="/assets/images/pitbull_lay.png" alt="" /><span className="coll-tag">Overnight</span></div>
          <div className="coll-card wide"><img src="/assets/images/two_happy_dogs.png" alt="" /><span className="coll-tag">Pack Walk</span></div>
          <div className="coll-card"><img src="/assets/images/Mekyla_Dark_dog.png" alt="" /><span className="coll-tag">Enrichment</span></div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="test-section">
        <div className="test-head gsap-up">
          <div className="eyebrow center">Client Love</div>
          <h2 className="section-h">The Kind Of Care People <em style={{ color: 'var(--golden-yellow)' }}>Brag About</em></h2>
        </div>
        <div className="test-row">
          {TESTIMONIALS.map((t) => (
            <div className="test-card gsap-up" key={t.name}>
              <div className="quote-mark">"</div>
              <div className="test-stars">★★★★★</div>
              <p className="test-quote">{t.quote}</p>
              <div className="test-attr">
                <div className="test-av" style={{ background: t.color }}>{t.initials}</div>
                <div>
                  <div className="test-name">{t.name}</div>
                  <div className="test-pet">{t.pet}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA
        title="Ready To Meet Your Pet's<br/><em>New Favorite Human?</em>"
        body="Start with a free meet-and-greet. No booking required, no pressure — just a chance for your pet to approve us first."
        primary="Book a Visit"
        secondary="@PrismPawsPetCare"
        secondaryHref="https://instagram.com/PrismPawsPetCare"
      />
    </main>
  );
}

const TESTIMONIALS = [
  {
    name: 'Devon S.', initials: 'DS', color: 'var(--vibrant-orange)',
    pet: 'Full Prism member · 11-yr lab',
    quote: "I travel for work constantly and the Full Prism bundle has been a total game-changer. My senior lab gets the routine he needs, I get photo updates without having to ask.",
  },
  {
    name: 'Taylor R.', initials: 'TR', color: 'var(--royal-blue)',
    pet: 'Cat parent · two indoor cats',
    quote: "My cats are notoriously suspicious of strangers. By day two they were curled up next to her on the couch. I don't know what magic she has but I'm never using anyone else.",
  },
  {
    name: 'Jamie M.', initials: 'JM', color: 'var(--deep-pink)',
    pet: 'Dog parent · 2-yr rescue',
    quote: "She sent me a video of my anxious rescue napping on the couch within an hour. I actually cried a little. Worth every single penny.",
  },
];
