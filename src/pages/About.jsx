import { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGsapPage } from '../components/useGsapPage.js';
import FinalCTA from '../components/FinalCTA.jsx';

export default function About() {
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
      { opacity: 1, y: 0, duration: 0.8, delay: 0.85, ease: 'power2.out' },
    );
    gsap.fromTo('.subpage-hero .trust-row',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 1.05, ease: 'power2.out' },
    );

    // Animate the value card icons with a tiny pop on scroll
    gsap.fromTo('.value-card .v-icon',
      { scale: 0 },
      {
        scale: 1, duration: 0.6, stagger: 0.08, ease: 'back.out(2.2)',
        scrollTrigger: { trigger: '.values-grid', start: 'top 80%' },
      },
    );

    // Caption bubbles slide in from left
    gsap.utils.toArray('.caption-bubble').forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, x: -40 },
        {
          opacity: 1, x: 0, duration: 0.7, delay: i * 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        },
      );
    });

    // Stats: counter is already handled by data-count in useGsapPage
  });

  return (
    <main ref={scope}>
      {/* HERO */}
      <section className="subpage-hero">
        <span className="floating-paw" style={{ top: '15%', left: '8%' }}>🐾</span>
        <span className="floating-paw" style={{ top: '72%', left: '12%' }}>🐾</span>
        <span className="floating-paw" style={{ top: '20%', right: '12%' }}>🐾</span>
        <span className="floating-paw" style={{ top: '78%', right: '8%' }}>🐾</span>
        <div className="subpage-hero-inner">
          <img className="hero-logo" src="/assets/images/PRISM_PAWS_LOGO.png" alt="Prism Paws Pet Care" />
          <div className="eyebrow center">Meet Prism Paws</div>
          <h1>
            <span className="word">The</span> <span className="word">sitter</span> <span className="word">your</span> <span className="word">pet</span><br />
            <span className="word">brags</span> <span className="word">about</span> <span className="word"><em>to other pets.</em></span>
          </h1>
          <p>
            Independent. Insured. Alt-friendly. Built for pet parents who can tell the difference between someone who just shows up and someone who actually gives a damn.
          </p>
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
            <span className="trust-chip"><span className="icon green">🌿</span> Fully Insured</span>
            <span className="trust-chip"><span className="icon blue">🔒</span> Background Checked</span>
            <span className="trust-chip"><span className="icon purple">🐾</span> Pet Obsessed</span>
            <span className="trust-chip"><span className="icon green">📸</span> Photo Updates Always</span>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="about-story">
        <div className="about-story-grid">
          <div className="gsap-left">
            <div className="eyebrow">Our Story</div>
            <h2 className="section-h">Pet Care That's Personal, <em>Never Transactional.</em></h2>
            <p>
              Prism Paws Pet Care exists to give pets the same love, structure, and attention they get from their humans — wrapped in a vibe that's <strong>warm, colorful, and a little alt.</strong>
            </p>
            <p>
              We bring concierge-level care into the home, on the leash, and at the door — treating every pet like the main character of their own story. Not a booking number. Not a slot to fill. The main character.
            </p>
            <p>
              Our mission is simple: <strong>keep pets happy, keep parents informed, and make every visit feel like a bright spot in their day.</strong> Whether it's a 20-minute drop-in or a 5-day stay, every booking gets the same thing.
            </p>
          </div>
          <div className="about-photo-stack gsap-right">
            <div className="about-photo a1">
              <img src="/assets/images/Mekyla_white_dog.png" alt="Sitter with dog" />
            </div>
            <div className="about-photo a2">
              <img src="/assets/images/grey_cat_body.png" alt="Sitter with cat" />
            </div>
            <div className="about-sticker">
              <div className="circle-badge" style={{ width: 130, height: 130, background: 'var(--deep-pink)' }}>
                <span className="circle-icon" style={{ color: 'var(--white)' }}>🐾</span>
                <svg viewBox="0 0 100 100">
                  <defs>
                    <path id="aboutCirclePath" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
                  </defs>
                  <text style={{ fill: 'var(--white)' }}>
                    <textPath href="#aboutCirclePath" startOffset="0">PET OBSESSED · TRUSTED CARE · PET OBSESSED ·</textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="values-section">
        <div className="container tc">
          <div className="eyebrow center gsap-up">What We Stand For</div>
          <h2 className="section-h gsap-up">Four Things We <em>Never Compromise</em> On.</h2>
          <p className="section-sub gsap-up" style={{ margin: '0 auto' }}>
            The vibe is colorful, the energy is warm — but the operations are airtight. These four things never bend.
          </p>
        </div>
        <div className="values-grid">
          {VALUES.map((v) => (
            <div className="value-card" key={v.title}>
              <div className={`v-icon ${v.color}`}>{v.icon}</div>
              <h4>{v.title}</h4>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat">
            <div className="num"><span data-count="48">0</span><span className="num-suffix">+</span></div>
            <div className="label">Five-Star Reviews</div>
          </div>
          <div className="stat">
            <div className="num"><span data-count="100">0</span><span className="num-suffix">%</span></div>
            <div className="label">Routine-First Care</div>
          </div>
          <div className="stat">
            <div className="num"><span data-count="500">0</span><span className="num-suffix">+</span></div>
            <div className="label">Visits Completed</div>
          </div>
          <div className="stat">
            <div className="num"><span data-count="24">0</span><span className="num-suffix">/7</span></div>
            <div className="label">Photo Updates</div>
          </div>
        </div>
      </section>

      {/* PROCESS / HOW WE WORK */}
      <section className="process-section">
        <div className="container tc">
          <div className="eyebrow center gsap-up">How We Actually Work</div>
          <h2 className="section-h gsap-up">It's Not Just That The Dog <em>Got Walked.</em></h2>
          <p className="section-sub gsap-up" style={{ margin: '0 auto' }}>
            It's that the dog got walked by someone who noticed she was extra bouncy today, sent you a video of her zoomies, refilled her water, wiped her paws, and locked the door behind them. That's the difference.
          </p>
        </div>

        <div className="process-timeline">
          <div className="process-line"></div>

          {PROCESS.map((p, i) => (
            <div className={`process-step ${i % 2 === 1 ? 'right' : ''}`} key={p.title}>
              <div className="ps-content">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
              <div className="ps-number">{String(i + 1).padStart(2, '0')}</div>
              <div className="ps-image">
                <img src={p.photo} alt={p.title} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VISIT-NOTES (caption bubbles) */}
      <section className="addon-section" style={{ background: 'var(--royal-blue-soft)' }}>
        <div className="container tc">
          <div className="eyebrow center gsap-up">What A Visit Actually Sounds Like</div>
          <h2 className="section-h gsap-up">We Tell You What Happened. <em>The Real Version.</em></h2>
          <p className="section-sub gsap-up" style={{ margin: '0 auto' }}>
            No corporate updates. No "your pet was great!" with zero details. Every visit note reads like it was written by someone who was actually there — because they were.
          </p>
        </div>

        <div style={{ maxWidth: 720, margin: '3rem auto 0', padding: '0 2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {NOTES.map((n) => (
            <div
              key={n.meta}
              className="caption-bubble"
              style={{
                background: 'var(--white)',
                border: '2px solid var(--cream-line)',
                borderRadius: '0 28px 28px 28px',
                padding: '1.5rem 1.75rem',
                fontSize: '1.0rem',
                color: 'var(--charcoal)',
                lineHeight: 1.75,
                position: 'relative',
              }}
            >
              <span style={{ position: 'absolute', top: -14, left: 14, fontSize: '1.5rem' }}>🐾</span>
              <p style={{ fontStyle: 'italic' }}>{n.text}</p>
              <p style={{ marginTop: '0.5rem', fontSize: '0.78rem', color: 'var(--muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {n.meta}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="values-section" style={{ background: 'var(--cream)' }}>
        <div className="container tc">
          <div className="eyebrow center gsap-up">Who This Is For</div>
          <h2 className="section-h gsap-up">Built For Pet Parents Who <em>Notice The Difference.</em></h2>
          <p className="section-sub gsap-up" style={{ margin: '0 auto' }}>
            Not for everyone — and that's intentional. Prism Paws is for clients who treat their animals like family and expect the same standard from the people they trust with them.
          </p>
        </div>
        <div className="values-grid">
          {WHO.map((w) => (
            <div className="value-card" key={w.title} style={{ textAlign: 'left' }}>
              <div className={`v-icon ${w.color}`} style={{ margin: 0 }}>{w.icon}</div>
              <h4 style={{ marginTop: '1rem' }}>{w.title}</h4>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CREDIBILITY ROW */}
      <section className="addon-section" style={{ background: 'var(--cream)' }}>
        <div className="container tc">
          <div className="eyebrow center gsap-up">Credentials</div>
          <h2 className="section-h gsap-up">Professional Where <em>It Counts.</em></h2>
          <p className="section-sub gsap-up" style={{ margin: '0 auto' }}>
            The vibe is alt and the energy is warm — but the operations are airtight. Here's what you can verify before you ever book.
          </p>
        </div>
        <div className="addon-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {CRED.map((c) => (
            <div className="addon-card" key={c.title} style={{ textAlign: 'center', background: 'var(--white)' }}>
              <div className="addon-icon" style={{ margin: '0 auto 1rem', background: 'var(--golden-yellow)', color: 'var(--charcoal)' }}>{c.icon}</div>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA
        title="Ready To Meet Your Pet's<br/><em>New Favorite Human?</em>"
        body="Every new client starts with a free meet-and-greet — no booking required. Your pet gets to approve us first. We wouldn't have it any other way."
        primary="DM To Book"
        secondary="See Services"
        secondaryHref="/services"
      />
    </main>
  );
}

const VALUES = [
  { icon: '🌱', title: 'Warmth Over Performance', color: 'green', desc: "We don't do performative pet care. The warmth is genuine, the calm is real, and the excitement to be there comes through in every visit." },
  { icon: '🎯', title: 'Precision In The Details', color: 'blue', desc: "The right amount of food. The exact medication timing. The paw wipe before the couch. Details aren't optional — they're the whole job." },
  { icon: '🤝', title: 'Trust Above Everything', color: 'purple', desc: "You're handing us your home and your pet. Every action is measured against whether we'd be comfortable if you were watching." },
  { icon: '🌈', title: 'Care In Every Color', color: 'pink', desc: 'Every pet is different. Every visit looks different. We adapt to the animal in front of us, not to a template.' },
];

const PROCESS = [
  { title: 'We Arrive Ready', desc: "Every visit starts with a quick read of the pet — energy level, mood, appetite. We don't assume today looks like yesterday. Pets change. We pay attention.", photo: '/assets/images/blue_eye_dog.png' },
  { title: 'We Follow The Routine Exactly', desc: 'The feeding schedule, the medication timing, the specific way the water bowl gets refilled — we follow the routine like we wrote it ourselves.', photo: '/assets/images/lab_dog.png' },
  { title: 'We Document Everything', desc: "Photos and videos go out during or right after every visit. Not because you asked — because you shouldn't have to. Peace of mind is part of the service.", photo: '/assets/images/collie_laying.png' },
  { title: 'We Adapt In The Moment', desc: "Anxious day? We slow down. Extra zoomies? We lean in. Medication refusal? We figure it out. We don't follow a script — we read the room.", photo: '/assets/images/two_dogs.png' },
  { title: 'We Leave Things Right', desc: 'The litter scooped the way you like it. The blinds back how they were. The paw wipe done before your dog hits the couch. We notice what matters to you.', photo: '/assets/images/white_dog_standing.png' },
  { title: 'We Lock The Door Twice', desc: "Because we'd never assume we got it right the first time. Your home, your pet, and your trust don't get treated casually.", photo: '/assets/images/whiteLab_standing.png' },
];

const NOTES = [
  { text: 'Sunny walk with Miso this morning — we hit the long route, sniffed every single tree, and she found a leaf she was very proud of. Home, water, nap. She is perfect.', meta: '30-min extended walk · Miso, 3-yr golden mix' },
  { text: 'Three drop-ins booked, two cats fed, one very dramatic tabby successfully convinced to take her meds. Tuesday energy. They are all asleep now. 🌿', meta: 'Standard drop-in · Luna & Toast, bonded pair' },
  { text: 'Overnight with Biscuit went great — he did his little pre-bed lap of the apartment, settled in around 10:30, slept solid. Morning walk was slow and intentional, just how he likes it. Fed, watered, happy. I will miss him.', meta: 'Overnight stay · Biscuit, 9-yr senior beagle' },
];

const WHO = [
  { icon: '💼', title: 'Working Professionals', color: 'blue', desc: "You're at the office or traveling and need to know your dog's midday walk happened — and that someone actually paid attention. Not just showed up." },
  { icon: '✈️', title: 'Frequent Travelers', color: 'purple', desc: 'Your pet has a routine, a medication schedule, and a specific way the litter gets scooped. We take that seriously, every single day you are gone.' },
  { icon: '🐾', title: 'Multi-Pet Households', color: 'pink', desc: 'Two dogs and a cat with completely different personalities and feeding schedules? We handle complexity without cutting corners on any of them.' },
  { icon: '🐢', title: 'Anxious & Senior Pets', color: 'green', desc: 'Boarding is not an option. The stress is not worth it. In-home care with someone calm, patient, and attentive is what these animals need.' },
];

const CRED = [
  { icon: '🛡️', title: 'Fully Insured', desc: 'Comprehensive pet sitter insurance covers any visit, any service, any pet. Proof available on request before your first booking.' },
  { icon: '🔍', title: 'Background Checked', desc: "Clean background check, on file and verifiable. Because you deserve to know exactly who's in your home with your pet." },
  { icon: '💊', title: 'Medication Trained', desc: 'Oral, topical, and injectable medications handled correctly, with a confirmation photo of every dose. No guessing, no skipping.' },
];
