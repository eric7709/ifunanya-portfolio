"use client"
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote: "Blessing completely transformed our Instagram. In 3 months she grew our following by over 200% and our DMs have never been busier. She just gets it.",
    name: "Adaeze Okonkwo",
    role: "Founder, Glowra Beauty",
    initials: "AO",
    color: "#E1306C",
  },
  {
    quote: "She handled our entire social media calendar, responded to comments, and delivered weekly reports. Professional, reliable, and genuinely creative.",
    name: "Emeka Nwosu",
    role: "CEO, Crave Eats",
    initials: "EN",
    color: "#F59E0B",
  },
  {
    quote: "Our paid ads finally started working after Blessing took over. She cut our cost per lead by half and doubled the engagement on every post.",
    name: "Temi Adeyemi",
    role: "Marketing Lead, Novu Fashion",
    initials: "TA",
    color: "#A855F7",
  },
  {
    quote: "Working with Blessing felt like having an in-house social media team. She understood our brand voice immediately and never missed a deadline.",
    name: "Chidi Okafor",
    role: "Director, Fitzone NG",
    initials: "CO",
    color: "#22C55E",
  },
  {
    quote: "Our TikTok went from zero to 50K views in the first month. She has a real eye for what performs and the strategy to back it up.",
    name: "Sola Balogun",
    role: "Owner, Lumi Skincare",
    initials: "SB",
    color: "#06B6D4",
  },
  {
    quote: "The launch campaign she ran for us was exceptional. Viral reach, strong engagement, and a clear plan from day one. Highly recommend.",
    name: "Ngozi Eze",
    role: "Events Director, Kobo Events",
    initials: "NE",
    color: "#EF4444",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    cardRefs.current.forEach((ref, i) => {
      if (!ref) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards(prev => prev.includes(i) ? prev : [...prev, i]);
            }, i * 90);
            obs.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      obs.observe(ref);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <section id="testimonials" ref={sectionRef}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');

        #testimonials {
          background: #0a0a0a;
          font-family: 'DM Sans', sans-serif;
          padding: 6rem 2.5rem;
          position: relative;
          overflow: hidden;
        }

        #testimonials::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, #1a1a1a, transparent);
        }

        /* Big quote mark watermark */
        #testimonials::after {
          content: '\u201C';
          position: absolute;
          top: 3rem;
          right: 3rem;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 20rem;
          line-height: 1;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.025);
          pointer-events: none;
          z-index: 0;
        }

        .tm-inner {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* Header */
        .tm-header {
          margin-bottom: 4rem;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .tm-header.visible { opacity: 1; transform: translateY(0); }

        .tm-eyebrow {
          font-size: 0.65rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #333;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .tm-eyebrow::before {
          content: ''; width: 1.5rem; height: 1px; background: #f472b6;
        }

        .tm-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.8rem, 6vw, 5rem);
          color: #fff;
          line-height: 0.92;
          letter-spacing: 0.02em;
          margin: 0;
        }

        .tm-title span {
          color: transparent;
          -webkit-text-stroke: 1px #2a2a2a;
        }

        /* Grid */
        .tm-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: #111;
          border: 1px solid #111;
        }

        @media (max-width: 960px) { .tm-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 580px) {
          .tm-grid { grid-template-columns: 1fr; }
          #testimonials { padding: 4rem 1.25rem; }
        }

        /* Card */
        .tm-card {
          background: #0a0a0a;
          padding: 2.25rem 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 2rem;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.5s ease, transform 0.55s cubic-bezier(0.16,1,0.3,1),
                      background 0.25s ease;
        }

        .tm-card.visible { opacity: 1; transform: translateY(0); }
        .tm-card:hover { background: #0d0d0d; }

        /* Top accent line on hover */
        .tm-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--tm-color);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }
        .tm-card:hover::before { transform: scaleX(1); }

        /* Quote mark */
        .tm-quote-mark {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 3rem;
          line-height: 1;
          color: var(--tm-color);
          opacity: 0.3;
          margin-bottom: -0.5rem;
        }

        .tm-quote {
          font-size: 0.88rem;
          color: #555;
          line-height: 1.8;
          font-weight: 300;
          font-style: italic;
          flex: 1;
          margin: 0;
        }

        .tm-card:hover .tm-quote { color: #666; }

        /* Author */
        .tm-author {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding-top: 1.5rem;
          border-top: 1px solid #141414;
        }

        .tm-avatar {
          width: 36px; height: 36px;
          border-radius: 50%;
          background: color-mix(in srgb, var(--tm-color) 15%, #111);
          border: 1px solid color-mix(in srgb, var(--tm-color) 25%, transparent);
          display: flex; align-items: center; justify-content: center;
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--tm-color);
          letter-spacing: 0.05em;
          flex-shrink: 0;
        }

        .tm-author-name {
          font-size: 0.8rem;
          font-weight: 600;
          color: #888;
          letter-spacing: 0.02em;
        }

        .tm-author-role {
          font-size: 0.68rem;
          color: #333;
          letter-spacing: 0.05em;
          margin-top: 0.15rem;
        }

        /* Stars */
        .tm-stars {
          display: flex;
          gap: 2px;
          margin-bottom: 1rem;
        }

        .tm-star {
          font-size: 0.65rem;
          color: var(--tm-color);
          opacity: 0.7;
        }
      `}</style>

      <div className="tm-inner">

        <div className={`tm-header ${headerVisible ? 'visible' : ''}`}>
          <p className="tm-eyebrow">Client love</p>
          <h2 className="tm-title">
            What They<br /><span>Say.</span>
          </h2>
        </div>

        <div className="tm-grid">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              ref={el => { cardRefs.current[i] = el; }}
              className={`tm-card ${visibleCards.includes(i) ? 'visible' : ''}`}
              style={{ "--tm-color": t.color } as React.CSSProperties}
            >
              <div>
                <div className="tm-stars">
                  {[...Array(5)].map((_, s) => (
                    <span key={s} className="tm-star">★</span>
                  ))}
                </div>
                <div className="tm-quote-mark">"</div>
                <p className="tm-quote">{t.quote}</p>
              </div>
              <div className="tm-author">
                <div className="tm-avatar">{t.initials}</div>
                <div>
                  <p className="tm-author-name">{t.name}</p>
                  <p className="tm-author-role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}