"use client"
import { useEffect, useRef, useState } from "react";

const achievements = [
  {
    metric: "2.4M",
    label: "Total Impressions",
    desc: "Across all managed accounts in 2024",
    icon: "👁️",
    color: "#E1306C",
  },
  {
    metric: "340%",
    label: "Avg. Follower Growth",
    desc: "Average growth rate across client accounts",
    icon: "📈",
    color: "#F59E0B",
  },
  {
    metric: "18+",
    label: "Brands Managed",
    desc: "From startups to established businesses",
    icon: "🏷️",
    color: "#A855F7",
  },
  {
    metric: "4.8×",
    label: "ROAS on Paid Ads",
    desc: "Return on ad spend for Meta campaigns",
    icon: "💰",
    color: "#22C55E",
  },
  {
    metric: "92%",
    label: "Client Retention",
    desc: "Clients who renewed or extended contracts",
    icon: "🤝",
    color: "#06B6D4",
  },
  {
    metric: "500K+",
    label: "Reel Views",
    desc: "Combined views on short-form video content",
    icon: "🎬",
    color: "#EF4444",
  },
];

function useCountUp(target: string, duration = 1800, triggered = false) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!triggered) return;

    const numericMatch = target.match(/[\d.]+/);
    if (!numericMatch) { setDisplay(target); return; }

    const numeric = parseFloat(numericMatch[0]);
    const prefix = target.slice(0, target.indexOf(numericMatch[0]));
    const suffix = target.slice(target.indexOf(numericMatch[0]) + numericMatch[0].length);
    const hasDecimal = numericMatch[0].includes(".");

    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = numeric * ease;
      setDisplay(`${prefix}${hasDecimal ? current.toFixed(1) : Math.floor(current)}${suffix}`);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [triggered, target, duration]);

  return display;
}

function StatCard({ achievement, index, triggered }: { achievement: typeof achievements[0]; index: number; triggered: boolean }) {
  const count = useCountUp(achievement.metric, 1600 + index * 100, triggered);

  return (
    <div
      className="ach-card"
      style={{
        "--accent": achievement.color,
        animationDelay: `${index * 0.08}s`,
      } as React.CSSProperties}
    >
      <div className="ach-card-top">
        <span className="ach-icon">{achievement.icon}</span>
        <div className="ach-bar" />
      </div>
      <div className="ach-metric">{count}</div>
      <div className="ach-label">{achievement.label}</div>
      <p className="ach-desc">{achievement.desc}</p>
    </div>
  );
}

export default function Achievements() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="achievements" ref={sectionRef}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');

        #achievements {
          background: #0a0a0a;
          padding: 6rem 2.5rem;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        #achievements::before {
          content: 'WINS';
          position: absolute;
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(8rem, 20vw, 18rem);
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.03);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          white-space: nowrap;
          letter-spacing: 0.1em;
          z-index: 0;
        }

        .ach-inner {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .ach-header {
          margin-bottom: 4rem;
        }

        .ach-eyebrow {
          font-size: 0.7rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #444;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .ach-eyebrow::after {
          content: '';
          flex: 1;
          max-width: 3rem;
          height: 1px;
          background: #333;
        }

        .ach-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 8vw, 7rem);
          color: #fff;
          line-height: 0.9;
          letter-spacing: 0.02em;
          margin: 0;
        }

        .ach-title span {
          color: transparent;
          -webkit-text-stroke: 1px pink;
        }

        .ach-subtitle {
          margin-top: 1.25rem;
          font-size: 0.9rem;
          color: #444;
          font-weight: 300;
          max-width: 400px;
          line-height: 1.6;
        }

        .ach-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: #1a1a1a;
          border: 1px solid #1a1a1a;
        }

        @media (max-width: 900px) {
          .ach-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 540px) {
          .ach-grid { grid-template-columns: 1fr 1fr; }
          #achievements { padding: 4rem 1.25rem; }
        }

        .ach-card {
          background: #0f0f0f;
          padding: 2.25rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          position: relative;
          overflow: hidden;
          cursor: default;
          transition: background 0.3s ease;
          animation: achFadeUp 0.5s ease both;
        }

        @keyframes achFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .ach-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ach-card:hover {
          background: #131313;
        }

        .ach-card:hover::after {
          transform: scaleX(1);
        }

        .ach-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .ach-icon {
          font-size: 1.4rem;
          line-height: 1;
        }

        .ach-bar {
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 50%;
          background: var(--accent);
          opacity: 0.15;
        }

        .ach-metric {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 3.5rem);
          color: #fff;
          line-height: 1;
          letter-spacing: 0.02em;
        }

        .ach-label {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .ach-desc {
          font-size: 0.78rem;
          color: #444;
          font-weight: 300;
          line-height: 1.5;
          margin: 0;
        }
      `}</style>

      <div className="ach-inner">
        <div className="ach-header">
          <div className="ach-eyebrow">By the numbers</div>
          <h2 className="ach-title">
            Proven<br /><span>Results.</span>
          </h2>
          <p className="ach-subtitle">
            Real numbers from real campaigns. Every metric earned through strategy, consistency, and creativity.
          </p>
        </div>

        <div className="ach-grid">
          {achievements.map((a, i) => (
            <StatCard key={a.label} achievement={a} index={i} triggered={triggered} />
          ))}
        </div>
      </div>
    </div>
  );
}