import { Instagram, Facebook, Mail } from 'lucide-react';
import Link from 'next/link';
import { BsTiktok, BsWhatsapp } from 'react-icons/bs';

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { icon: <Instagram size={16} />, href: 'https://instagram.com/ibehblessing', label: 'Instagram' },
    { icon: <Facebook size={16} />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <BsTiktok size={15} />, href: 'https://tiktok.com', label: 'TikTok' },
    { icon: <BsWhatsapp size={16} />, href: 'https://wa.me/2340000000000', label: 'WhatsApp' },
    { icon: <Mail size={16} />, href: 'mailto:ibeh540@gmail.com', label: 'Email' },
  ];

  const links = [
    { label: 'Work', href: '#sampleA' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Experience', href: '#experience' },
    { label: 'Toolkit', href: '#toolkit' },
    { label: 'Contact', href: '#contact-me' },
  ];

  return (
    <footer id="footer">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');

        #footer {
          background: #060606;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
          border-top: 1px solid #141414;
        }

        /* big ghost name */
        .ft-ghost {
          position: absolute;
          bottom: -1rem;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(5rem, 16vw, 14rem);
          white-space: nowrap;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.04);
          pointer-events: none;
          letter-spacing: 0.05em;
          line-height: 1;
          z-index: 0;
        }

        .ft-inner {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 0 auto;
          padding: 4rem 2.5rem 2.5rem;
        }

        /* top row */
        .ft-top {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: start;
          gap: 3rem;
          margin-bottom: 3.5rem;
        }

        @media (max-width: 640px) {
          .ft-top { grid-template-columns: 1fr; gap: 2rem; }
        }

        .ft-brand {}

        .ft-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.2rem, 5vw, 3.8rem);
          color: #fff;
          letter-spacing: 0.03em;
          line-height: 1;
          margin: 0 0 0.4rem;
        }

        .ft-role {
          font-size: 0.72rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #333;
        }

        .ft-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.75rem 1.5rem;
          background: #fff;
          color: #000;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.2s ease;
          white-space: nowrap;
          margin-top: 0.25rem;
        }

        .ft-cta:hover {
          background: #f472b6;
          color: #fff;
          transform: translateY(-2px);
        }

        .ft-cta-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #f472b6;
          transition: background 0.2s ease;
        }

        .ft-cta:hover .ft-cta-dot {
          background: #fff;
        }

        /* nav links */
        .ft-nav {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem 2rem;
          margin-bottom: 3rem;
        }

        .ft-nav a {
          font-size: 0.78rem;
          color: #333;
          text-decoration: none;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: color 0.2s ease;
        }

        .ft-nav a:hover {
          color: #fff;
        }

        /* divider */
        .ft-divider {
          height: 1px;
          background: #141414;
          margin-bottom: 2rem;
        }

        /* bottom row */
        .ft-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .ft-copy {
          font-size: 0.72rem;
          color: #2a2a2a;
          letter-spacing: 0.08em;
        }

        /* socials */
        .ft-socials {
          display: flex;
          gap: 0.5rem;
        }

        .ft-social-btn {
          width: 34px;
          height: 34px;
          border: 1px solid #1c1c1c;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #333;
          text-decoration: none;
          transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;
        }

        .ft-social-btn:hover {
          border-color: #f472b6;
          color: #f472b6;
          background: rgba(244,114,182,0.06);
        }

        .ft-status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.68rem;
          color: #2a2a2a;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .ft-status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 6px #22c55e;
          animation: ftPulse 2s ease-in-out infinite;
        }

        @keyframes ftPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>

      <div className="ft-inner">

        {/* Top */}
        <div className="ft-top">
          <div className="ft-brand">
            <p className="ft-name">Ibeh Blessing</p>
            <p className="ft-role">Social Media Manager · Content Strategist</p>
          </div>
          <Link href="mailto:ibeh540@gmail.com" className="ft-cta">
            <span className="ft-cta-dot" />
            Hire Me
          </Link>
        </div>

        {/* Nav */}
        <nav className="ft-nav">
          {links.map((l) => (
            <a key={l.label} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div className="ft-divider" />

        {/* Bottom */}
        <div className="ft-bottom">
          <span className="ft-copy">© {year} Ibeh Blessing Ifunanya. All rights reserved.</span>

          <div className="ft-status">
            <div className="ft-status-dot" />
            Available for work
          </div>

          <div className="ft-socials">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="ft-social-btn" aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Ghost name */}
      <div className="ft-ghost">Ibeh Blessing</div>
    </footer>
  );
}