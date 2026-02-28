"use client"
import React, { useState, useEffect, useRef } from "react";

const TechStack = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [headerVisible, setHeaderVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const tools = [
    { name: "Canva",    icon: "canva",         desc: "Design & Layout",      color: "#00C4CC" },
    { name: "Claude",   icon: "anthropic",     desc: "AI Strategy",          color: "#D4A574" },
    { name: "Slack",    icon: "slack",         desc: "Communication",        color: "#611f69" },
    { name: "Notion",   icon: "notion",        desc: "Knowledge Base",       color: "#ffffff" },
    { name: "MS Word",  icon: "microsoftword", desc: "Documentation",        color: "#2B579A" },
    { name: "Sheets",   icon: "googlesheets",  desc: "Data Analysis",        color: "#34A853" },
    { name: "Gmail",    icon: "gmail",         desc: "Messaging",            color: "#EA4335" },
    { name: "Meet",     icon: "googlemeet",    desc: "Conferencing",         color: "#00897B" },
    { name: "Drive",    icon: "googledrive",   desc: "Cloud Storage",        color: "#4285F4" },
    { name: "Meta AI",  icon: "meta",          desc: "Social Intelligence",  color: "#0082FB" },
    { name: "CapCut",   icon: "capcut",        desc: "Video Editing",        color: "#ffffff" },
    { name: "Gemini",   icon: "googlegemini",  desc: "Generative AI",        color: "#8E75FF" },
    { name: "Slides",   icon: "googleslides",  desc: "Presentations",        color: "#F4B400" },
    { name: "Figma",    icon: "figma",         desc: "UI / UX Design",       color: "#F24E1E" },
    { name: "ChatGPT",  icon: "openai",        desc: "LLM Interface",        color: "#ffffff" },
  ];

  // Header fade in on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Cards stagger in individually
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    cardRefs.current.forEach((ref, i) => {
      if (!ref) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards(prev => prev.includes(i) ? prev : [...prev, i]);
            }, i * 60);
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
    <div ref={sectionRef} style={{ minHeight: "100vh", width: "100%", background: "#0C0C0E", color: "#fff", fontFamily: "'Syne', sans-serif", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Fira+Code:wght@300;400;500&display=swap');

        * { box-sizing: border-box; }

        .ts-root {
          min-height: 100vh;
          background: #0C0C0E;
          position: relative;
        }

        .ts-noise {
          position: fixed; inset: 0;
          pointer-events: none; z-index: 0; opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat; background-size: 128px 128px;
        }

        .ts-glow {
          position: fixed; width: 600px; height: 600px; border-radius: 50%;
          background: radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%);
          top: -200px; right: -200px; pointer-events: none; z-index: 0;
        }

        .ts-glow-2 {
          position: fixed; width: 400px; height: 400px; border-radius: 50%;
          background: radial-gradient(circle, rgba(244,114,182,0.05) 0%, transparent 70%);
          bottom: -100px; left: -100px; pointer-events: none; z-index: 0;
        }

        .ts-inner {
          position: relative; z-index: 1;
          max-width: 1100px; margin: 0 auto;
          padding: 5rem 2.5rem 4rem;
        }

        /* ── Header ── */
        .ts-eyebrow {
          display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .ts-eyebrow.visible { opacity: 1; transform: translateY(0); }

        .ts-eyebrow-line { flex: 1; height: 1px; background: linear-gradient(to right, #2a2a30, transparent); }

        .ts-eyebrow-text {
          font-family: 'Fira Code', monospace; font-size: 10px;
          letter-spacing: 0.3em; text-transform: uppercase; color: #444;
        }

        .ts-heading {
          font-size: clamp(2.8rem, 7vw, 6rem); font-weight: 800;
          line-height: 0.95; letter-spacing: -0.03em; margin-bottom: 0.5rem; color: #fff;
          opacity: 0; transform: translateY(20px);
          transition: opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s;
        }
        .ts-heading.visible { opacity: 1; transform: translateY(0); }

        .ts-heading em {
          font-style: normal;
          background: linear-gradient(135deg, #818cf8, #c084fc, #f472b6);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }

        .ts-subhead {
          font-family: 'Fira Code', monospace; font-size: 0.75rem;
          color: #333; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 4rem;
          opacity: 0; transform: translateY(12px);
          transition: opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s;
        }
        .ts-subhead.visible { opacity: 1; transform: translateY(0); }

        .ts-divider {
          width: 100%; height: 1px;
          background: linear-gradient(to right, transparent, #1e1e2a, transparent);
          margin-bottom: 4rem;
          opacity: 0; transition: opacity 0.6s ease 0.3s;
        }
        .ts-divider.visible { opacity: 1; }

        /* ── Grid ── */
        .ts-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 2px; }
        @media (max-width: 900px) { .ts-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 600px) {
          .ts-grid { grid-template-columns: repeat(2, 1fr); }
          .ts-inner { padding: 3rem 1.5rem; }
        }

        /* ── Card ── */
        .ts-card {
          position: relative;
          background: #111116; border: 1px solid #1a1a22;
          padding: 1.75rem 1.25rem;
          display: flex; flex-direction: column; align-items: center; gap: 1rem;
          cursor: pointer; text-align: center; overflow: hidden;
          /* enter state */
          opacity: 0; transform: translateY(24px) scale(0.97);
          transition: opacity 0.45s ease, transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
                      background 0.25s ease, border-color 0.25s ease;
        }

        .ts-card.entered {
          opacity: 1; transform: translateY(0) scale(1);
        }

        /* bounce only kicks in after card has entered */
        .ts-card.bounce {
          animation: softBounce 2.8s ease-in-out infinite;
        }

        @keyframes softBounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-10px); }
        }

        .ts-card::before {
          content: ''; position: absolute; inset: 0; opacity: 0;
          transition: opacity 0.3s ease; background: var(--card-glow);
        }
        .ts-card:hover { border-color: #2e2e3e; z-index: 2; }
        .ts-card:hover::before { opacity: 1; }

        .ts-icon-wrap {
          width: 48px; height: 48px; border-radius: 14px;
          background: #1a1a22; border: 1px solid #25252f;
          display: flex; align-items: center; justify-content: center;
          transition: border-color 0.3s ease, background 0.3s ease;
          position: relative; z-index: 1; flex-shrink: 0;
        }
        .ts-card:hover .ts-icon-wrap { border-color: #35354a; background: #1e1e28; }
        .ts-icon-wrap img { width: 22px; height: 22px; object-fit: contain; }

        .ts-icon-fallback {
          width: 22px; height: 22px; display: flex;
          align-items: center; justify-content: center;
          font-size: 14px; font-weight: 800; font-family: 'Syne', sans-serif;
        }

        .ts-tool-name {
          font-size: 0.85rem; font-weight: 700; color: #d0d0e0;
          letter-spacing: -0.01em; position: relative; z-index: 1;
          transition: color 0.2s ease;
        }
        .ts-card:hover .ts-tool-name { color: #fff; }

        .ts-tool-desc {
          font-family: 'Fira Code', monospace; font-size: 9px;
          letter-spacing: 0.12em; text-transform: uppercase; color: #3a3a50;
          position: relative; z-index: 1; transition: color 0.2s ease; margin-top: -0.5rem;
        }
        .ts-card:hover .ts-tool-desc { color: #5a5a75; }

        /* ── Footer ── */
        .ts-footer {
          margin-top: 4rem; padding-top: 2rem; border-top: 1px solid #1a1a22;
          display: flex; justify-content: space-between; align-items: center;
          opacity: 0; transition: opacity 0.6s ease 0.6s;
        }
        .ts-footer.visible { opacity: 1; }

        .ts-footer-left, .ts-footer-right {
          font-family: 'Fira Code', monospace; font-size: 10px;
          color: #2e2e3e; letter-spacing: 0.2em; text-transform: uppercase;
        }
      `}</style>

      <div className="ts-root">
        <div className="ts-noise" />
        <div className="ts-glow" />
        <div className="ts-glow-2" />

        <div className="ts-inner">

          <div className={`ts-eyebrow ${headerVisible ? 'visible' : ''}`}>
            <span className="ts-eyebrow-text">Capabilities · 2026</span>
            <div className="ts-eyebrow-line" />
          </div>

          <h1 className={`ts-heading ${headerVisible ? 'visible' : ''}`}>
            Selected<br /><em>Toolkit.</em>
          </h1>

          <p className={`ts-subhead ${headerVisible ? 'visible' : ''}`}>
            15 tools · integrated stack
          </p>

          <div className={`ts-divider ${headerVisible ? 'visible' : ''}`} />

          <div className="ts-grid">
            {tools.map((tool, i) => {
              const entered = visibleCards.includes(i);
              return (
                <div
                  key={tool.name}
                  ref={el => { cardRefs.current[i] = el; }}
                  className={`ts-card${entered ? ' entered' : ''}${entered ? ' bounce' : ''}`}
                  style={{
                    animationDelay: `${i * 0.15}s`,
                    "--card-glow": `radial-gradient(circle at 50% 0%, ${tool.color}14 0%, transparent 70%)`,
                  } as React.CSSProperties}
                  onMouseEnter={() => setHovered(tool.name)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="ts-icon-wrap">
                    {tool.name === "Meta AI" ? (
                      <div className="ts-icon-fallback">
                        <img
                          src="https://cdn.simpleicons.org/meta/0082FB"
                          alt="Meta"
                          style={{ width: 22, height: 22 }}
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).style.display = "none";
                            const fb = e.currentTarget.nextSibling as HTMLElement;
                            if (fb) fb.style.display = "flex";
                          }}
                        />
                        <span style={{ display: "none", color: "#0082FB", fontSize: 18, fontWeight: 800 }}>M</span>
                      </div>
                    ) : (
                      <img
                        src={`https://cdn.simpleicons.org/${tool.icon}/${tool.color.replace("#", "")}`}
                        alt={tool.name}
                      />
                    )}
                  </div>
                  <span className="ts-tool-name">{tool.name}</span>
                  <span className="ts-tool-desc">{tool.desc}</span>
                </div>
              );
            })}
          </div>

          <div className={`ts-footer ${headerVisible ? 'visible' : ''}`}>
            <span className="ts-footer-left">Integrated Tooling Stack</span>
            <span className="ts-footer-right">© 2026</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TechStack;