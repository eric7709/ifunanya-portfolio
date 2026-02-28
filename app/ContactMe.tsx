"use client"
import { useEffect, useRef, useState } from "react";
import { Facebook, Instagram, PhoneCall, Mail, MapPin, Clock } from 'lucide-react';
import { BsTiktok, BsWhatsapp } from 'react-icons/bs';

export default function ContactMe() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const contacts = [
    { icon: <MapPin size={14} />, value: 'Nigeria', href: '', color: '#f87171' },
    { icon: <Clock size={14} />, value: 'Mon – Fri · 9am – 6pm', href: '', color: '#fbbf24' },
    { icon: <Mail size={14} />, value: 'ibeh540@gmail.com', href: 'mailto:ibeh540@gmail.com', color: '#f472b6' },
    { icon: <PhoneCall size={14} />, value: '+234 814 664 2624', href: 'tel:+2348146642624', color: '#34d399' },
  ];

  const socials = [
    { icon: <BsWhatsapp size={15} />, label: 'WhatsApp', value: '+234 000 000 0000', href: 'https://wa.me/2340000000000', color: '#34d399' },
    { icon: <Instagram size={15} />, label: 'Instagram', value: '@ibehblessing', href: 'https://instagram.com/ibehblessing', color: '#f472b6' },
    { icon: <Facebook size={15} />, label: 'Facebook', value: 'Ibeh Blessing Ifunanya', href: 'https://facebook.com', color: '#60a5fa' },
    { icon: <BsTiktok size={15} />, label: 'TikTok', value: '@ibehblessing', href: 'https://tiktok.com', color: '#22d3ee' },
  ];

  return (
    <section ref={sectionRef} id="contact-me">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap');

        #contact-me {
          min-height: 100vh;
          background: #0a0a0a;
          display: grid;
          grid-template-columns: 1fr 1fr;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          #contact-me { grid-template-columns: 1fr; }
          .cm-image-col { min-height: 50vh; }
        }

        /* ── Image Column ── */
        .cm-image-col {
          position: relative;
          overflow: hidden;
        }

        .cm-image-col img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          filter: grayscale(20%) contrast(1.05);
          transition: transform 0.8s ease;
        }

        .cm-image-col:hover img {
          transform: scale(1.03);
        }

        .cm-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, transparent 60%, #0a0a0a 100%),
                      linear-gradient(to top, #0a0a0a 0%, transparent 30%);
          z-index: 1;
        }

        .cm-image-tag {
          position: absolute;
          bottom: 2rem;
          left: 2rem;
          z-index: 2;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.3em;
          color: rgba(255,255,255,0.3);
          text-transform: uppercase;
        }

        /* ── Content Column ── */
        .cm-content-col {
          padding: 5rem 3.5rem 4rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .cm-content-col { padding: 3rem 1.75rem; }
        }

        /* ── Eyebrow ── */
        .cm-eyebrow {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.75rem;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .cm-eyebrow.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .cm-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #f472b6;
        }

        .cm-eyebrow-text {
          font-size: 0.65rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #444;
        }

        /* ── Heading ── */
        .cm-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 6vw, 5.5rem);
          line-height: 0.92;
          letter-spacing: 0.02em;
          color: #fff;
          margin: 0 0 1.5rem;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s;
        }

        .cm-heading.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .cm-heading em {
          font-style: normal;
          -webkit-text-stroke: 1px rgba(255,255,255,0.25);
          color: transparent;
        }

        /* ── Body ── */
        .cm-body {
          font-size: 0.88rem;
          color: #555;
          line-height: 1.75;
          max-width: 380px;
          margin-bottom: 2.5rem;
          font-weight: 300;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s;
        }

        .cm-body.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Contact Items ── */
        .cm-contacts {
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
          margin-bottom: 2.5rem;
        }

        .cm-contact-item {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          opacity: 0;
          transform: translateX(-12px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .cm-contact-item.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .cm-contact-icon {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          flex-shrink: 0;
        }

        .cm-contact-value {
          font-size: 0.82rem;
          font-weight: 400;
          text-decoration: none;
          transition: opacity 0.2s;
        }

        .cm-contact-value:hover {
          opacity: 0.75;
        }

        /* ── Divider ── */
        .cm-divider {
          height: 1px;
          background: linear-gradient(to right, rgba(255,255,255,0.08), transparent);
          margin-bottom: 2.5rem;
          opacity: 0;
          transition: opacity 0.6s ease 0.5s;
        }

        .cm-divider.visible {
          opacity: 1;
        }

        /* ── Socials ── */
        .cm-socials {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.6rem;
        }

        .cm-social-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 1rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          text-decoration: none;
          transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
          opacity: 0;
          transform: translateY(10px);
        }

        .cm-social-link.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .cm-social-link:hover {
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.12);
          transform: translateY(-2px);
        }

        .cm-social-icon {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cm-social-info {
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
          overflow: hidden;
        }

        .cm-social-label {
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #444;
        }

        .cm-social-value {
          font-size: 0.78rem;
          color: #bbb;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}</style>

      {/* Image Column */}
      <div className="cm-image-col">
        <img src="image0.jpeg" alt="Ibeh Blessing" />
        <div className="cm-image-overlay" />
        <span className="cm-image-tag">Available for work</span>
      </div>

      {/* Content Column */}
      <div className="cm-content-col">

        <div className={`cm-eyebrow ${inView ? 'visible' : ''}`}>
          <div className="cm-eyebrow-dot" />
          <span className="cm-eyebrow-text">Get in touch</span>
        </div>

        <h1 className={`cm-heading ${inView ? 'visible' : ''}`}>
          {"Let's Create"}<br /><em>Together.</em>
        </h1>
        <p className={`cm-body ${inView ? 'visible' : ''}`}>
          I help brands stay consistent, visible, and stress-free on social media.
          From strategy to posting — your presence, handled with care.
        </p>

        {/* Contact Info */}
        <div className="cm-contacts">
          {contacts.map((item, i) => (
            <div
              key={i}
              className={`cm-contact-item ${inView ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.3 + i * 0.08}s` }}
            >
              <div className="cm-contact-icon" style={{ color: item.color }}>
                {item.icon}
              </div>
              {item.href ? (
                <a href={item.href} className="cm-contact-value" style={{ color: item.color }}>
                  {item.value}
                </a>
              ) : (
                <span className="cm-contact-value" style={{ color: item.color }}>{item.value}</span>
              )}
            </div>
          ))}
        </div>

        <div className={`cm-divider ${inView ? 'visible' : ''}`} />

        {/* Socials */}
        <div className="cm-socials">
          {socials.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className={`cm-social-link ${inView ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.55 + i * 0.07}s` }}
            >
              <div className="cm-social-icon" style={{ color: item.color, background: `${item.color}18` }}>
                {item.icon}
              </div>
              <div className="cm-social-info">
                <span className="cm-social-label">{item.label}</span>
                <span className="cm-social-value">{item.value}</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}