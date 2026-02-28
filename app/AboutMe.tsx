"use client"
import { useEffect, useRef, useState } from "react";

export default function AboutMe() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const traits = [
    { label: "Based in", value: "Nigeria" },
    { label: "Available", value: "Mon – Fri" },
    { label: "Languages", value: "English, Igbo" },
    { label: "Focus", value: "Social Media & Content" },
  ];

  const values = [
    { emoji: "🎯", title: "Strategy First", desc: "Every post has a purpose. I lead with data and intent." },
    { emoji: "✍🏾", title: "Clean Visuals", desc: "Scroll-stopping content that feels on-brand every time." },
    { emoji: "🤝", title: "Client-Centred", desc: "Your goals are my goals. I keep you informed always." },
    { emoji: "📊", title: "Results Driven", desc: "I track, report, and optimise — not just post and hope." },
  ];

  return (
    <section id="about-me" ref={sectionRef}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');

        #about-me {
          background: #0a0a0a;
          font-family: 'DM Sans', sans-serif;
          padding: 6rem 2.5rem;
          position: relative;
          overflow: hidden;
        }

        #about-me::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, #1e1e1e, transparent);
        }

        .am-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: start;
        }

        @media (max-width: 860px) {
          .am-inner { grid-template-columns: 1fr; gap: 3rem; }
          #about-me { padding: 4rem 1.5rem; }
        }

        /* ── Left ── */
        .am-left {}

        .am-eyebrow {
          font-size: 0.65rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #333;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          opacity: 0;
          transform: translateX(-12px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .am-eyebrow.visible { opacity: 1; transform: translateX(0); }
        .am-eyebrow::before {
          content: '';
          width: 1.5rem; height: 1px;
          background: #f472b6;
        }

        .am-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 6vw, 5.5rem);
          line-height: 0.92;
          letter-spacing: 0.02em;
          color: #fff;
          margin: 0 0 2rem;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s;
        }
        .am-heading.visible { opacity: 1; transform: translateY(0); }

        .am-heading span {
          color: transparent;
          -webkit-text-stroke: 1px #333;
        }

        .am-bio {
          font-size: 0.92rem;
          color: #555;
          line-height: 1.85;
          font-weight: 300;
          margin-bottom: 2.5rem;
          opacity: 0;
          transition: opacity 0.7s ease 0.2s;
        }
        .am-bio.visible { opacity: 1; }

        .am-bio strong {
          color: #aaa;
          font-weight: 500;
        }

        /* Traits */
        .am-traits {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background: #161616;
          border: 1px solid #161616;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s;
        }
        .am-traits.visible { opacity: 1; transform: translateY(0); }

        .am-trait {
          background: #0f0f0f;
          padding: 1rem 1.25rem;
        }

        .am-trait-label {
          font-size: 0.62rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #2e2e2e;
          margin-bottom: 0.3rem;
        }

        .am-trait-value {
          font-size: 0.85rem;
          color: #888;
          font-weight: 500;
        }

        /* ── Right ── */
        .am-right {
          display: flex;
          flex-direction: column;
          gap: 1px;
          background: #161616;
          border: 1px solid #161616;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s;
        }
        .am-right.visible { opacity: 1; transform: translateY(0); }

        .am-value-card {
          background: #0f0f0f;
          padding: 1.75rem 2rem;
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
          transition: background 0.25s ease;
          position: relative;
          overflow: hidden;
        }

        .am-value-card::after {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 2px;
          background: #f472b6;
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.3s ease;
        }

        .am-value-card:hover { background: #111; }
        .am-value-card:hover::after { transform: scaleY(1); }

        .am-value-emoji {
          font-size: 1.4rem;
          line-height: 1;
          flex-shrink: 0;
          margin-top: 0.1rem;
        }

        .am-value-title {
          font-size: 0.82rem;
          font-weight: 600;
          color: #ccc;
          letter-spacing: 0.05em;
          margin-bottom: 0.35rem;
          text-transform: uppercase;
        }

        .am-value-desc {
          font-size: 0.8rem;
          color: #444;
          font-weight: 300;
          line-height: 1.6;
          margin: 0;
        }
      `}</style>

      <div className="am-inner">

        {/* Left */}
        <div className="am-left">
          <p className={`am-eyebrow ${inView ? 'visible' : ''}`}>Who I am</p>

          <h2 className={`am-heading ${inView ? 'visible' : ''}`}>
            The Person<br />Behind The<br /><span>Posts.</span>
          </h2>

          <p className={`am-bio ${inView ? 'visible' : ''}`}>
            Hi, I'm <strong>Ibeh Blessing Ifunanya</strong> — a social media manager
            passionate about helping brands show up online with clarity, consistency,
            and confidence.<br /><br />
            I don't just post content — I build <strong>communities</strong>, craft
            <strong> strategies</strong>, and tell brand stories that actually connect
            with real people. Whether you're a startup finding your voice or an
            established brand looking to grow, I bring structure, creativity, and
            genuine care to everything I do.
          </p>

          <div className={`am-traits ${inView ? 'visible' : ''}`}>
            {traits.map((t) => (
              <div key={t.label} className="am-trait">
                <p className="am-trait-label">{t.label}</p>
                <p className="am-trait-value">{t.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Values */}
        <div className={`am-right ${inView ? 'visible' : ''}`}>
          {values.map((v) => (
            <div key={v.title} className="am-value-card">
              <span className="am-value-emoji">{v.emoji}</span>
              <div>
                <p className="am-value-title">{v.title}</p>
                <p className="am-value-desc">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}