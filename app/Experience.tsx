"use client"
import { useEffect, useRef, useState } from "react";

export default function Experience() {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const [visibleSkills, setVisibleSkills] = useState<number[]>([]);
  const [visibleExp, setVisibleExp] = useState<number[]>([]);

  const skills = [
    { title: "Social Media Manager", color: "text-indigo-400" },
    { title: "Content Strategist", color: "text-green-400" },
  ];

  const experiences = [
    { period: "2024 — PRESENT", role: "Senior Social Media Manager" },
    { period: "2023 — 2024", role: "Social Media Strategist" },
    { period: "2022 — 2023", role: "Content & Community Manager" },
    { period: "2021 — 2022", role: "Social Media Executive" },
  ];

  useEffect(() => {
    if (!cardRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    skills.forEach((_, i) => {
      setTimeout(() => {
        setVisibleSkills((prev) => prev.includes(i) ? prev : [...prev, i]);
      }, 300 * (i + 1));
    });
  }, [inView]);

  useEffect(() => {
    if (!inView) return;
    experiences.forEach((_, i) => {
      setTimeout(() => {
        setVisibleExp((prev) => prev.includes(i) ? prev : [...prev, i]);
      }, 400 * (i + 1));
    });
  }, [inView]);

  return (
    <section
      ref={cardRef}
      className="min-h-screen w-full bg-gradient-to-br from-[#0b0b0d] to-[#151517] text-white font-sans relative overflow-hidden"
    >
      {/* Decorative shapes */}
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-indigo-900 opacity-20 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-green-900 opacity-20 blur-3xl pointer-events-none"></div>

      <div className="relative mx-auto max-w-5xl px-6 py-24 flex flex-col md:flex-row gap-12">

        {/* LEFT PANEL */}
        <div className="md:w-1/2 flex flex-col justify-center space-y-6">
          <p
            className={`text-xs uppercase text-gray-500 tracking-widest transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            About
          </p>
          <h1
            className={`text-5xl md:text-6xl font-extrabold tracking-tight transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Ibeh Blessing Ifunanya
          </h1>
          <p
            className={`text-xl md:text-2xl text-gray-400 transition-all duration-700 delay-100 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Growing brands one post at a time.
          </p>

          {/* Roles */}
          <div className="mt-10 flex flex-col gap-4">
            {skills.map((skill, i) => (
              <div
                key={i}
                className={`text-3xl md:text-4xl font-bold uppercase transform transition-all duration-700 ${
                  visibleSkills.includes(i)
                    ? `${skill.color} opacity-100 translate-y-0`
                    : "opacity-0 translate-y-8"
                }`}
              >
                — {skill.title}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="md:w-1/2 relative flex flex-col justify-center pl-6 border-l border-gray-700 space-y-6">
          <p
            className={`text-xs uppercase text-gray-500 tracking-widest transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Experience
          </p>

          <div className="flex flex-col gap-6">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`transition-all duration-700 transform ${
                  visibleExp.includes(i)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <p className="text-xs text-gray-500">{exp.period}</p>
                <h3 className="text-2xl md:text-3xl font-extrabold uppercase">
                  {exp.role}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          className={`absolute bottom-6 right-6 text-xs text-gray-500 uppercase tracking-widest transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          systems active · v03
        </div>
      </div>
    </section>
  );
}