"use client";
import { useEffect, useRef, useState } from "react";

export default function AboutMe() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
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
    <section
      id="about-me"
      ref={sectionRef}
      className="relative overflow-hidden bg-black py-20 px-6 sm:py-16 sm:px-4"
    >
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>

      <div className="mx-auto max-w-[1100px] grid gap-12 md:grid-cols-1 md:gap-10 lg:grid-cols-2 lg:gap-24">
        {/* Left Column */}
        <div className="space-y-6 md:space-y-4">
          <p
            className={`flex items-center gap-3 text-[0.65rem] tracking-widest uppercase text-pink-500 transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"
            }`}
          >
            <span className="block h-px w-6 bg-pink-400"></span>
            Who I am
          </p>

          <h2
            className={`font-bebas text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.05] text-white transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            The Person<br />
            Behind The<br />
            <span className="text-transparent stroke-[1px] stroke-gray-800">Posts.</span>
          </h2>

          <p
            className={`text-gray-400 text-[0.92rem] leading-relaxed font-light transition-opacity duration-700 ${
              inView ? "opacity-100" : "opacity-0"
            }`}
          >
            Hi, I&apos;m <strong className="font-medium">Ibeh Blessing Ifunanya</strong> — a social media manager
            passionate about helping brands show up online with clarity, consistency, and confidence.<br /><br />
            I don&apos;t just post content — I build <strong className="font-medium">communities</strong>, craft
            <strong className="font-medium"> strategies</strong>, and tell brand stories that actually connect
            with real people. Whether you&apos;re a startup finding your voice or an established brand looking to grow, I bring
            structure, creativity, and genuine care to everything I do.
          </p>

          {/* Traits */}
          <div
            className={`grid grid-cols-2 gap-[1px] border border-gray-900 bg-gray-900 transition-all duration-700 sm:grid-cols-1 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {traits.map((t) => (
              <div key={t.label} className="bg-gray-950 p-4">
                <p className="text-[0.62rem] uppercase tracking-widest text-gray-600 mb-1">{t.label}</p>
                <p className="text-[0.85rem] font-medium text-gray-400">{t.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Values */}
        <div
          className={`flex flex-col gap-[1px] border border-gray-900 bg-gray-900 transition-all duration-700 sm:mt-10 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {values.map((v) => (
            <div
              key={v.title}
              className="relative flex items-start gap-5 bg-gray-950 p-7 overflow-hidden transition-colors duration-300 hover:bg-gray-900"
            >
              <span className="text-xl mt-[0.1rem] flex-shrink-0">{v.emoji}</span>
              <div>
                <p className="text-[0.82rem] uppercase font-semibold tracking-wide text-gray-300 mb-1">
                  {v.title}
                </p>
                <p className="text-[0.8rem] font-light text-gray-600 leading-6">{v.desc}</p>
              </div>
              <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-pink-400 scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}