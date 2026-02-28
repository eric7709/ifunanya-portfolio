"use client"
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from 'next/navigation'

export default function HeroSection() {
  const roles = ["Social Media Manager", "Content Strategist", "Brand Builder", "Community Manager"]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  const router = useRouter()
  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "50+", label: "Projects Done" },
    { number: "100%", label: "Satisfaction" },
  ]

  return (
    <div className="h-screen relative snap-start overflow-hidden" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap');

        .hero-root {
          height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: #0a0a0a;
          position: relative;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .hero-root { grid-template-columns: 1fr; }
          .hero-img-col { display: none; }
        }

        /* ── Noise overlay ── */
        .hero-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          opacity: 0.025;
          pointer-events: none;
          z-index: 10;
        }

        /* ── Left column ── */
        .hero-left {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 4rem;
          z-index: 2;
          overflow: hidden;
        }

        /* Vertical accent line */
        .hero-left::after {
          content: '';
          position: absolute;
          right: 0;
          top: 10%;
          bottom: 10%;
          width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.08), transparent);
        }

        /* ── Portfolio label ── */
        .hero-label {
          font-size: 0.65rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #333;
          margin-bottom: clamp(0.75rem, 2vh, 1.5rem);
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .hero-label::before {
          content: '';
          width: 2rem;
          height: 1px;
          background: #333;
        }

        /* ── Name ── */
        .hero-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.8rem, 5.5vw, 5.5rem);
          line-height: 0.9;
          letter-spacing: 0.02em;
          color: #fff;
          margin: 0 0 clamp(0.6rem, 1.5vh, 1.25rem);
        }

        .hero-name-line2 {
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.35);
        }

        /* ── Rotating role ── */
        .hero-role-wrap {
          height: 1.75rem;
          position: relative;
          margin-bottom: clamp(0.6rem, 1.5vh, 1.25rem);
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .hero-role-wrap::before {
          content: '';
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #f472b6;
          flex-shrink: 0;
          box-shadow: 0 0 8px #f472b6;
        }

        .hero-role {
          font-size: 0.72rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #f472b6;
          position: absolute;
          left: 1.25rem;
        }

        /* ── Description ── */
        .hero-desc {
          font-size: 0.82rem;
          color: #444;
          line-height: 1.7;
          max-width: 360px;
          font-weight: 300;
          margin-bottom: clamp(0.75rem, 2vh, 1.75rem);
        }

        /* ── CTA Buttons ── */
        .hero-btns {
          display: flex;
          gap: 0.75rem;
          margin-bottom: clamp(0.75rem, 2vh, 2rem);
        }

        .hero-btn-primary {
          padding: 0.6rem 1.5rem;
          background: #fff;
          color: #000;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: color 0.3s ease;
        }

        .hero-btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: #f472b6;
          transform: translateY(100%);
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1);
        }

        .hero-btn-primary:hover::after { transform: translateY(0); }
        .hero-btn-primary:hover { color: #fff; }
        .hero-btn-primary span { position: relative; z-index: 1; }

        .hero-btn-secondary {
          padding: 0.75rem 1.75rem;
          background: transparent;
          color: #555;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border: 1px solid #222;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: color 0.3s ease, border-color 0.3s ease;
        }

        .hero-btn-secondary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: #1a1a1a;
          transform: translateY(100%);
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1);
        }

        .hero-btn-secondary:hover::after { transform: translateY(0); }
        .hero-btn-secondary:hover { color: #fff; border-color: #333; }
        .hero-btn-secondary span { position: relative; z-index: 1; }

        /* ── Stats ── */
        .hero-stats {
          display: flex;
          gap: 2.5rem;
          padding-top: 2rem;
          border-top: 1px solid #161616;
        }

        .hero-stat-number {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem;
          color: #fff;
          line-height: 1;
          letter-spacing: 0.03em;
        }

        .hero-stat-label {
          font-size: 0.65rem;
          color: #333;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-top: 0.25rem;
        }

        /* ── Image column ── */
        .hero-img-col {
          position: relative;
          overflow: hidden;
        }

        .hero-img-col img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          filter: grayscale(15%) contrast(1.05);
          transition: transform 8s ease;
        }

        .hero-img-col:hover img {
          transform: scale(1.04);
        }

        /* Dark gradient bleed from left */
        .hero-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, #0a0a0a 0%, transparent 35%),
                      linear-gradient(to top, #0a0a0a 0%, transparent 25%);
        }

        /* Floating availability badge */
        .hero-badge {
          position: absolute;
          bottom: 2.5rem;
          right: 2.5rem;
          background: rgba(10,10,10,0.85);
          backdrop-filter: blur(12px);
          border: 1px solid #1e1e1e;
          padding: 0.85rem 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          z-index: 3;
        }

        .hero-badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 8px #22c55e;
          animation: badgePulse 2s ease-in-out infinite;
        }

        @keyframes badgePulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .hero-badge-text {
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #666;
        }
      `}</style>

      <div className="hero-root">

        {/* ── Left ── */}
        <div className="hero-left">

          <motion.p
            className="hero-label"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            Portfolio · 2026
          </motion.p>

          <motion.div
            className="hero-name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 14, delay: 0.1 }}
          >
            <div>Ibeh</div>
            <div>Blessing</div>
            <div className="hero-name-line2">Ifunanya</div>
          </motion.div>

          {/* Rotating role */}
          <motion.div
            className="hero-role-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[index]}
                className="hero-role"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
              >
                {roles[index]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p
            className="hero-desc"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Helping brands grow online through strategic content,
            audience engagement, and data-driven social media management.
          </motion.p>

          <motion.div
            className="hero-btns"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
          >
            <button onClick={() => {
              router.push("/#sampleA")
            }} className="hero-btn-primary"><span>View My Work</span></button>
            <button 
            onClick={() => {
              router.push("/#contact-me")
            }}
            className="hero-btn-secondary"><span>Contact Me</span></button>
          </motion.div>

          <motion.div
            className="hero-stats"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15, delayChildren: 0.9 } } }}
            initial="hidden"
            animate="show"
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5 }}
              >
                <p className="hero-stat-number">{s.number}</p>
                <p className="hero-stat-label">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* ── Image ── */}
        <div className="hero-img-col">
          <img src="image1.jpeg" alt="Ibeh Blessing Ifunanya" />
          <div className="hero-img-overlay" />
          <div className="hero-badge">
            <div className="hero-badge-dot" />
            <span className="hero-badge-text">Available for work</span>
          </div>
        </div>

      </div>
    </div>
  )
}