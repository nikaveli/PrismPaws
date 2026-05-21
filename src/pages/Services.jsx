import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGsapPage } from '../components/useGsapPage.js';
import FinalCTA from '../components/FinalCTA.jsx';
import HeroVideoLoop from '../components/HeroVideoLoop.jsx';
import Seo from '../components/Seo.jsx';

export default function Services() {
  const scope = useRef(null);

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
      { opacity: 1, y: 0, duration: 0.8, delay: 0.8, ease: 'power2.out' },
    );
    gsap.fromTo('.subpage-hero .hero-actions',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 1, ease: 'power2.out' },
    );
    gsap.fromTo('.subpage-hero .trust-row',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 1.15, ease: 'power2.out' },
    );
  });

  return (
    <main ref={scope}>
      <Seo
        title="Pet Care Services & Pricing | Denver"
        description="All pet care services & pricing — overnight stays ($95–$225), dog walks ($32–$52), drop-in visits ($25–$52), enrichment & monthly bundles. Serving Denver, CO."
        path="/services"
      />
      {/* HERO — full-bleed video */}
      <section className="subpage-hero subpage-hero-video">
        <HeroVideoLoop src="/assets/video/hero.mp4" crossfadeSeconds={1} />
        <div className="hero-bg-tint" />
        <div className="subpage-hero-inner">
          <img className="hero-logo hero-logo-light" src="/assets/images/PRISM_PAWS_LOGO.png" alt="Prism Paws Pet Care" />
          <span className="hero-pill" style={{ marginInline: 'auto' }}>
            <span className="pulse"></span> Now Booking · Denver + Surrounding Areas
          </span>
          <h1>
            <span className="word">Care</span> <span className="word">in</span> <span className="word"><em>every</em></span> <span className="word">color.</span>
          </h1>
          <p>Concierge-level in-home sitting, dog walks, and drop-in visits — built around your pet's routine, not ours. Photos included. Drama handled.</p>
          <div className="hero-actions" style={{ justifyContent: 'center', marginTop: '2rem' }}>
            <Link to="/contact" className="btn btn-primary">Book a Visit <span className="btn-icon">🐾</span></Link>
            <a href="#bundles" className="btn btn-ghost-light">See Bundles</a>
          </div>
          <div
            className="trust-row"
            style={{
              marginTop: '2.5rem',
              display: 'flex',
              gap: '1.25rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <span className="trust-chip light"><span className="icon green">🌿</span> Fully Insured</span>
            <span className="trust-chip light"><span className="icon blue">🔒</span> Background Checked</span>
            <span className="trust-chip light"><span className="icon purple">📸</span> Photo Updates</span>
            <span className="trust-chip light"><span className="icon green">💊</span> Med Administration</span>
          </div>
        </div>
      </section>

      {/* SERVICES — three blocks */}
      <section className="services-list" id="services">
        {SERVICES.map((svc, i) => (
          <div
            className={`svc-block ${i % 2 === 1 ? 'reverse' : ''}`}
            key={svc.title}
            id={svc.anchor}
          >
            <div className={`svc-photo-wrap ${svc.color} gsap-scale`}>
              <span className="svc-photo-tag">{svc.tag}</span>
              <span className="svc-photo-emoji">{svc.emoji}</span>
              <img src={svc.photo} alt={svc.alt || svc.title} />
            </div>
            <div className="svc-content gsap-up">
              <div className="eyebrow">{svc.eyebrow}</div>
              <h2>{svc.title}</h2>
              <p>{svc.copy}</p>

              <div className="svc-table">
                <div className="svc-row head">
                  <span>Tier</span>
                  <span>Duration</span>
                  <span>Price</span>
                </div>
                {svc.tiers.map((t) => (
                  <div className="svc-row" key={t.name}>
                    <span className="svc-name">{t.name}</span>
                    <span>{t.duration}</span>
                    <span className="svc-price">{t.price}</span>
                  </div>
                ))}
              </div>

              <div className="svc-includes">
                {svc.includes.map((tag) => (
                  <span className="svc-tag" key={tag}>{tag}</span>
                ))}
              </div>

              <Link to="/contact" className="btn btn-dark">Book This Service <span className="btn-icon" style={{ background: 'var(--golden-yellow)', color: 'var(--charcoal)' }}>→</span></Link>
            </div>
          </div>
        ))}
      </section>

      {/* ADD-ONS */}
      <section className="addon-section">
        <div className="container tc">
          <div className="eyebrow center gsap-up">Customize Your Visit</div>
          <h2 className="section-h gsap-up">Add-Ons &amp; <em>Upgrades</em></h2>
          <p className="section-sub gsap-up" style={{ margin: '0 auto' }}>
            The base services cover everything essential. Add-ons are how we tailor each visit to your actual pet — not a template.
          </p>
        </div>
        <div className="addon-grid">
          {ADDONS.map((a) => (
            <div className="addon-card" key={a.name}>
              <div className="addon-icon">{a.icon}</div>
              <h4>{a.name}</h4>
              <p>{a.desc}</p>
              <div className="addon-price">{a.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TLC */}
      <section className="addon-section" style={{ background: 'var(--vibrant-purple-soft)' }}>
        <div className="container tc">
          <div className="eyebrow center gsap-up">The Extra Shine Tier</div>
          <h2 className="section-h gsap-up">Extra <em>TLC</em> Upgrades</h2>
          <p className="section-sub gsap-up" style={{ margin: '0 auto' }}>
            For pets who deserve a little more. These aren't extras — they're the difference between a good visit and a great one.
          </p>
        </div>
        <div className="addon-grid">
          {TLC.map((a) => (
            <div className="addon-card" key={a.name} style={{ background: 'var(--white)', borderColor: 'rgba(129,77,170,0.15)' }}>
              <div className="addon-icon" style={{ background: '#fde9f3', color: 'var(--deep-pink)' }}>{a.icon}</div>
              <h4>{a.name}</h4>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BUNDLES */}
      <section className="bundles-section" id="bundles">
        <div className="container tc">
          <div className="eyebrow center gsap-up">Monthly Memberships</div>
          <h2 className="section-h gsap-up">Built For <em>Repeat Clients</em></h2>
          <p className="section-sub gsap-up" style={{ margin: '0 auto' }}>
            Consistency, priority booking, and a better per-visit rate. Lock in your sitter before the calendar fills up.
          </p>
        </div>
        <div className="bundles-grid">
          {BUNDLES.map((b) => (
            <div className={`bundle-card ${b.featured ? 'featured' : ''}`} key={b.name}>
              {b.featured && <div className="bundle-badge">Most Popular</div>}
              <h3>{b.name}</h3>
              <p className="b-sub">{b.subtitle}</p>
              <div className="b-price">{b.price} <span>/ month</span></div>
              <ul className="b-list">
                {b.includes.map((line) => (
                  <li key={line}><span className="b-check">✓</span> {line}</li>
                ))}
              </ul>
              <Link to="/contact" className={`btn ${b.featured ? 'btn-primary' : 'btn-dark'}`} style={{ justifyContent: 'center' }}>
                Get Started <span className="btn-icon" style={b.featured ? undefined : { background: 'var(--golden-yellow)', color: 'var(--charcoal)' }}>→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section" id="faq">
        <div className="container tc">
          <div className="eyebrow center gsap-up">Common Questions</div>
          <h2 className="section-h gsap-up">Everything You <em>Need To Know</em></h2>
        </div>
        <Faq items={FAQS} />
      </section>

      <FinalCTA
        title="Ready To Book Your Pet's<br/><em>Next Favorite Visit?</em>"
        body="Start with a free meet-and-greet. No booking required, no pressure — just a chance for your pet to approve us first."
        primary="Book a Meet & Greet"
        secondary="See About"
        secondaryHref="/about"
      />
    </main>
  );
}

function Faq({ items }) {
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

const SERVICES = [
  {
    anchor: 'in-home',
    title: 'We Come To Them.',
    alt: 'Chewy the miniature pinscher mix during an in-home pet sitting visit in Denver',
    eyebrow: 'In-Home Pet Sitting',
    color: 'purple',
    tag: 'In-Home Sit',
    emoji: '🏠',
    photo: '/assets/images/chewy_1.png',
    copy: "Keeping pets in their own home means less stress, better behavior, and actual sleep — for everyone. Ideal for cats who hate boarding, dogs with separation anxiety, senior pets on strict routines, or multi-pet households where a kennel just isn't realistic.",
    tiers: [
      { name: 'Half-Day Companion Care', duration: 'Up to 4 hrs', price: '$95' },
      { name: 'Full-Day Companion Care', duration: 'Up to 8 hrs', price: '$175' },
      { name: 'Overnight Stay', duration: '7pm–7am', price: '$95–$110' },
      { name: 'Extended Overnight', duration: 'Early arrival', price: '$125–$145' },
      { name: '24-Hour Care', duration: 'Full day + night', price: '$175–$225' },
    ],
    includes: ['Routine respected', 'Feed + meds', 'Photo/video updates', 'Door locked twice'],
  },
  {
    anchor: 'drop-ins',
    title: 'Quick. Focused. Never Rushed.',
    alt: 'Striped tabby cat relaxing during a drop-in visit with Prism Paws Pet Care in Denver',
    eyebrow: 'Drop-In Visits',
    color: 'blue',
    tag: 'Drop-In',
    emoji: '✨',
    photo: '/assets/images/stripped_cat.png',
    copy: "Perfect for working professionals, single-pet households, and cat parents who want eyes on their animal while traveling. We get in, we check everything, we make your pet's day — and we send you the proof.",
    tiers: [
      { name: 'Quick Drop-In', duration: '20 min', price: '$25' },
      { name: 'Standard Drop-In', duration: '30 min', price: '$32' },
      { name: 'Extended Visit', duration: '45 min', price: '$42' },
      { name: 'Full Visit', duration: '60 min', price: '$52' },
    ],
    includes: ['Food + water', 'Litter scoop', 'Cuddles included', 'Photo updates'],
  },
  {
    anchor: 'walks',
    title: 'Their Pace. Their Route. Their Way.',
    alt: 'Collie playing with a ball during a dog walking session with Prism Paws Pet Care in Denver',
    eyebrow: 'Dog Walks',
    color: 'orange',
    tag: 'Dog Walk',
    emoji: '🦮',
    photo: '/assets/images/collie_ball.png',
    copy: "We don't drag, rush, or pile incompatible dogs together. Pack walks are small and curated — only dogs that actually get along walk together. Every walk respects the dog's personality, whether that means sniffing every single tree or hitting a longer route at a faster clip.",
    tiers: [
      { name: 'Standard Walk', duration: '30 min', price: '$32' },
      { name: 'Extended Walk', duration: '60 min', price: '$52' },
      { name: 'Pack Walk', duration: '30–60 min', price: '$22/dog' },
    ],
    includes: ['Leash-positive', 'Paw wipe', 'Fresh water', 'Temperament matched'],
  },
  {
    anchor: 'enrichment',
    title: 'For The Pets Who Need More.',
    alt: 'Pitbull enjoying an enrichment and TLC session with Prism Paws Pet Care in Denver',
    eyebrow: 'Enrichment & TLC',
    color: 'green',
    tag: 'Enrichment',
    emoji: '🧩',
    photo: '/assets/images/pitbull_full_body.png',
    copy: "Snuffle mats, lick pads, sensory rotations, gentle massage for anxious or senior pets, and training reinforcement for the cues you've already taught. Mental stimulation tires them out in the best way — and it's the difference between a good visit and a great one.",
    tiers: [
      { name: 'Sensory Play', duration: '30 min', price: '+$15' },
      { name: 'Cuddle Time', duration: '20 min', price: '+$10' },
      { name: 'Light Massage', duration: '20 min', price: '+$20' },
      { name: 'Training Reinforcement', duration: '20 min', price: '+$15' },
    ],
    includes: ['Snuffle + lick mats', 'Senior friendly', 'Anxious pet calm', 'Post-surgery safe'],
  },
];

const ADDONS = [
  { icon: '🐕', name: 'Additional Pet', price: '+$8 to +$10 per visit', desc: 'Multi-pet households welcome. Scaled by species and care level. The whole crew deserves love.' },
  { icon: '💊', name: 'Medication', price: '$5–$10 per visit', desc: 'Oral/topical at $5. Injectables or complex multi-med schedules at $10. Confirmation photo of every dose.' },
  { icon: '🎉', name: 'Holiday Fee', price: '+$10–$25 visit · +$30–$50 overnight', desc: 'Applies on major holidays (Thanksgiving, Christmas, New Year, etc.). Helps cover demand and your sitter\'s holiday time.' },
  { icon: '👋', name: 'Meet & Greet', price: 'Free · or $20 credit', desc: 'First intro visit is free. Prefer to confirm? Pay $20 up front and we credit it back on your first booking.' },
  { icon: '🌙', name: 'Late / Early', price: '+$15 per visit', desc: 'Any service before 6am or after 10pm. For tight travel schedules and pets with late-night meds.' },
  { icon: '📸', name: 'Photo & Video', price: '+$5 per visit', desc: 'Mini photo dump or short clip sent during or right after every visit. Already included on overnight stays.' },
  { icon: '🔑', name: 'Key Pickup/Drop-Off', price: '$15–$20', desc: 'Optional key exchange before the first visit so we have access. Skip if you have a smart lock or lockbox.' },
  { icon: '🌿', name: 'Plant + Mail', price: '+$5 per visit', desc: 'Plant watering, mail collection, and blinds adjustments while we are already in the home.' },
];

const TLC = [
  { icon: '🧩', name: 'Sensory Play Session', desc: 'Toy rotation, snuffle mats, lick pads, enrichment puzzles — mental stimulation that tires them out in the best way.' },
  { icon: '🛋️', name: 'Cuddle Time', desc: 'Dedicated couch or bed time for affection-driven pets. Some animals just need to be held. We get it.' },
  { icon: '🤲', name: 'Light Massage', desc: 'Calming touch sessions for senior pets, anxious animals, or post-surgery recovery. Gentle and intentional.' },
  { icon: '🎓', name: 'Training Reinforcement', desc: "We work on cues already taught by you or your trainer — sit, stay, leash manners, recall. We don't replace, we reinforce." },
];

const BUNDLES = [
  {
    name: 'Purr & Paw', subtitle: 'Best for cat parents & single-dog homes',
    price: '$240',
    includes: ['8 drop-in visits per month', 'Priority booking access', 'Locked-in availability', 'Monthly recap card'],
  },
  {
    name: 'High Note', subtitle: 'Working pros with active dogs',
    price: '$440', featured: true,
    includes: ['12 dog walks (30 or 60 min)', 'Same sitter every time', 'Priority booking access', 'Monthly recap card'],
  },
  {
    name: 'Full Prism', subtitle: 'All-access flexible coverage',
    price: '$850',
    includes: ['5 overnight stays any tier', '10 drop-in visits', 'Priority + locked availability', 'Concierge-level comms'],
  },
];

const FAQS = [
  { q: 'How do I book a visit?', a: 'DM us on Instagram @PrismPawsPetCare, send a text/call, or use the contact form. First-time clients get a free meet-and-greet so your pet can approve us before any paid visit is scheduled.' },
  { q: 'What areas do you service?', a: 'We cover Denver and surrounding areas. A travel fee of $15–$20 applies for addresses 30+ minutes from base. Always quoted upfront — no surprises.' },
  { q: 'Can you handle pets with special medical needs?', a: 'Yes. We administer oral, topical, and injectable medications with full documentation. Every dose gets a confirmation photo. For complex multi-med schedules we discuss your pet\'s protocol during the meet-and-greet.' },
  { q: 'How do I know my pet is okay while I am away?', a: 'Photo and video updates are standard on overnight stays and available as a $5 add-on for any visit. You\'ll hear from us during or right after every booking — no news blackouts.' },
  { q: 'Are you insured?', a: 'Yes. Prism Paws is fully insured and background-checked. Your home and your pet deserve professional-grade accountability — proof is available on request.' },
  { q: 'What if I have multiple pets?', a: 'Multi-pet households are welcome. Additional pets are +$8 to +$10 per visit, scaled by species and care level. Bundle pricing is available for households with multiple animals.' },
  { q: 'How do pack walks work?', a: 'Pack walks are kept small and curated — only dogs that genuinely get along in energy and temperament walk together. We\'d rather walk two compatible dogs than rush a third one into the mix.' },
];
