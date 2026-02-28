"use client"
import { useEffect, useRef, useState } from "react";

const platforms = [
  { name: "Instagram",  icon: "instagram",  color: "#E1306C", stat: "Primary",   desc: "Reels, Stories, Growth" },
  { name: "TikTok",     icon: "tiktok",     color: "#ffffff", stat: "Trending",  desc: "Short-form Video" },
  { name: "Facebook",   icon: "facebook",   color: "#1877F2", stat: "Core",      desc: "Pages, Ads, Groups" },
  { name: "LinkedIn",   icon: "linkedin",   color: "#0A66C2", stat: "B2B",       desc: "Professional Branding" },
  { name: "X / Twitter",icon: "x",          color: "#ffffff", stat: "Real-time", desc: "Engagement & Trends" },
  { name: "Pinterest",  icon: "pinterest",  color: "#E60023", stat: "Visual",    desc: "Discovery & Traffic" },
  { name: "YouTube",    icon: "youtube",    color: "#FF0000", stat: "Long-form", desc: "Videos & Shorts" },
  { name: "WhatsApp",   icon: "whatsapp",   color: "#25D366", stat: "Direct",    desc: "Community & Broadcast" },
];

export default function Platforms() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.2 }
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
            }, i * 70);
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
    <section id="platforms" ref={sectionRef}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap');

        #platforms {
          background: #050505;
          font-family: 'DM Sans', sans-serif;
          padding: 6rem 2.5rem;
          position: relative;
          overflow: hidden;
        }

        #platforms::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, #1a1a1a, transparent);
        }

        /* Scrolling marquee bg text */
        .pl-marquee-wrap {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          width: 100%;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
          opacity: 0.025;
        }

        .pl-marquee-track {
          display: flex;
          gap: 3rem;
          white-space: nowrap;
          animation: plMarquee 18s linear infinite;
        }

        .pl-marquee-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 10rem;
          color: #fff;
          letter-spacing: 0.1em;
          flex-shrink: 0;
        }

        @keyframes plMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .pl-inner {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* Header */
        .pl-header {
          margin-bottom: 4rem;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .pl-header.visible { opacity: 1; transform: translateY(0); }

        .pl-eyebrow {
          font-size: 0.65rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: pink;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .pl-eyebrow::before {
          content: ''; width: 1.5rem; height: 1px; background: #f472b6;
        }

        .pl-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.8rem, 6vw, 5rem);
          color: #fff;
          line-height: 0.92;
          letter-spacing: 0.02em;
          margin: 0;
        }

        .pl-title span {
          color: transparent;
          -webkit-text-stroke: 1px pink;
        }

        /* Grid */
        .pl-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: #111;
          border: 1px solid #111;
        }

        @media (max-width: 900px) { .pl-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 500px) {
          .pl-grid { grid-template-columns: repeat(2, 1fr); }
          #platforms { padding: 4rem 1.25rem; }
        }

        /* Card */
        .pl-card {
          background: #0a0a0a;
          padding: 2rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          position: relative;
          overflow: hidden;
          cursor: default;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.16,1,0.3,1),
                      background 0.25s ease;
        }

        .pl-card.visible { opacity: 1; transform: translateY(0); }
        .pl-card:hover { background: #0e0e0e; }

        .pl-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1px;
          background: var(--pl-color);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }
        .pl-card:hover::after { transform: scaleX(1); }

        .pl-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .pl-icon-box {
          width: 44px; height: 44px;
          border-radius: 12px;
          background: #111;
          border: 1px solid #1a1a1a;
          display: flex; align-items: center; justify-content: center;
          transition: border-color 0.3s ease;
        }
        .pl-card:hover .pl-icon-box { border-color: var(--pl-color); }

        .pl-icon-box img { width: 20px; height: 20px; object-fit: contain; }

        .pl-stat-badge {
          font-size: 0.58rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--pl-color);
          background: color-mix(in srgb, var(--pl-color) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--pl-color) 20%, transparent);
          padding: 0.2rem 0.5rem;
          border-radius: 2px;
        }

        .pl-name {
          font-size: 0.9rem;
          font-weight: 600;
          color: #ccc;
          letter-spacing: 0.02em;
        }

        .pl-desc {
          font-size: 0.72rem;
          color: #333;
          font-weight: 300;
          margin: 0;
          letter-spacing: 0.05em;
        }
      `}</style>

      {/* Marquee */}
      <div className="pl-marquee-wrap">
        <div className="pl-marquee-track">
          {["INSTAGRAM · TIKTOK · FACEBOOK · LINKEDIN · X · PINTEREST · YOUTUBE · WHATSAPP · ",
            "INSTAGRAM · TIKTOK · FACEBOOK · LINKEDIN · X · PINTEREST · YOUTUBE · WHATSAPP · "].map((t, i) => (
            <span key={i} className="pl-marquee-text">{t}</span>
          ))}
        </div>
      </div>

      <div className="pl-inner">
        <div className={`pl-header ${headerVisible ? 'visible' : ''}`}>
          <p className="pl-eyebrow">Where I work</p>
          <h2 className="pl-title">
            Platforms<br /><span>I Manage.</span>
          </h2>
        </div>

        <div className="pl-grid">
          {platforms.map((p, i) => (
            <div
              key={p.name}
              ref={el => { cardRefs.current[i] = el; }}
              className={`pl-card ${visibleCards.includes(i) ? 'visible' : ''}`}
              style={{ "--pl-color": p.color } as React.CSSProperties}
            >
              <div className="pl-card-top">
                <div className="pl-icon-box">
                  <img
                    src={`https://cdn.simpleicons.org/${p.icon}/${p.color.replace("#","")}`}
                    alt={p.name}
                  />
                </div>
                <span className="pl-stat-badge">{p.stat}</span>
              </div>
              <div>
                <p className="pl-name">{p.name}</p>
                <p className="pl-desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}