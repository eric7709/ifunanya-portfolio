"use client"
import { useEffect, useRef, useState } from "react";

export default function Jobs() {
    const jobs = [
        {
            id: 1,
            title: "Instagram Growth",
            client: "Glowra Beauty",
            year: "2024",
            img: "/assets/image4.jpeg",
            accent: "#E1306C",
        },
        {
            id: 2,
            title: "Content Strategy",
            client: "Crave Eats",
            year: "2024",
            img: "/assets/image5.jpeg",
            accent: "#F59E0B",
        },
        {
            id: 3,
            title: "Paid Ad Campaign",
            client: "Novu Fashion",
            year: "2024",
            img: "/assets/image6.jpeg",
            accent: "#A855F7",
        },
        {
            id: 4,
            title: "Community Mgmt",
            client: "Fitzone NG",
            year: "2023",
            img: "/assets/image7.jpeg",
            accent: "#22C55E",
        },
        {
            id: 5,
            title: "Reels & TikTok",
            client: "Lumi Skincare",
            year: "2024",
            img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80",
            accent: "#06B6D4",
        },
        {
            id: 6,
            title: "Brand Launch",
            client: "Kobo Events",
            year: "2023",
            img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
            accent: "#EF4444",
        },
    ]

    const headerRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [headerVisible, setHeaderVisible] = useState(false);
    const [visibleCards, setVisibleCards] = useState<number[]>([]);

    // Header animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
            { threshold: 0.3 }
        );
        if (headerRef.current) observer.observe(headerRef.current);
        return () => observer.disconnect();
    }, []);

    // Card stagger animation
    useEffect(() => {
        const observers: IntersectionObserver[] = [];
        cardRefs.current.forEach((ref, i) => {
            if (!ref) return;
            const obs = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            setVisibleCards(prev => prev.includes(i) ? prev : [...prev, i]);
                        }, i * 80);
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
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');

                #sampleA {
                    font-family: 'DM Sans', sans-serif;
                    background: #0a0a0a;
                    min-height: 100vh;
                    padding: 3rem 2.5rem;
                    box-sizing: border-box;
                }

                #sampleA .section-header {
                    display: flex;
                    align-items: baseline;
                    gap: 1.5rem;
                    margin-bottom: 3rem;
                    border-bottom: 1px solid #222;
                    padding-bottom: 1.5rem;
                    opacity: 0;
                    transform: translateY(16px);
                    transition: opacity 0.6s ease, transform 0.6s ease;
                }

                #sampleA .section-header.visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                #sampleA .section-title {
                    font-family: 'Bebas Neue', sans-serif;
                    font-size: clamp(2.5rem, 6vw, 5rem);
                    color: #fff;
                    letter-spacing: 0.05em;
                    line-height: 1;
                    margin: 0;
                }

                #sampleA .section-count {
                    font-size: 0.85rem;
                    color: #555;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                }

                #sampleA .jobs-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 1.5rem;
                }

                @media (min-width: 900px) {
                    #sampleA .jobs-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }

                @media (max-width: 600px) {
                    #sampleA .jobs-grid {
                        grid-template-columns: 1fr 1fr;
                        gap: 0.75rem;
                    }
                    #sampleA {
                        padding: 2rem 1.25rem;
                    }
                }

                @media (max-width: 400px) {
                    #sampleA .jobs-grid {
                        grid-template-columns: 1fr;
                    }
                }

                #sampleA .job-card {
                    position: relative;
                    aspect-ratio: 4/5;
                    overflow: hidden;
                    cursor: pointer;
                    background: #111;
                    opacity: 0;
                    transform: translateY(32px) scale(0.97);
                    transition: opacity 0.55s ease, transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
                }

                #sampleA .job-card.visible {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }

                #sampleA .job-card img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.4s ease;
                    filter: grayscale(20%);
                }

                #sampleA .job-card:hover img {
                    transform: scale(1.06);
                    filter: grayscale(0%);
                }

                #sampleA .job-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 50%, transparent 100%);
                    transition: opacity 0.3s ease;
                }

                #sampleA .job-card:hover .job-overlay {
                    opacity: 0.7;
                }

                #sampleA .job-info {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    padding: 1.25rem;
                }

                #sampleA .job-accent-bar {
                    width: 2rem;
                    height: 2px;
                    margin-bottom: 0.6rem;
                    transition: width 0.3s ease;
                }

                #sampleA .job-card:hover .job-accent-bar {
                    width: 3.5rem;
                }

                #sampleA .job-title {
                    font-family: 'Bebas Neue', sans-serif;
                    font-size: clamp(1.2rem, 2.5vw, 1.6rem);
                    color: #fff;
                    letter-spacing: 0.05em;
                    line-height: 1;
                    margin: 0 0 0.35rem 0;
                }

                #sampleA .job-meta {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                #sampleA .job-client {
                    font-size: 0.75rem;
                    color: #aaa;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                }

                #sampleA .job-year {
                    font-size: 0.7rem;
                    color: #555;
                }
            `}</style>

            <div id="sampleA">
                <div
                    ref={headerRef}
                    className={`section-header ${headerVisible ? 'visible' : ''}`}
                >
                    <h2 className="section-title">My Jobs</h2>
                    <span className="section-count">{jobs.length} projects</span>
                </div>

                <div className="jobs-grid">
                    {jobs.map((job, i) => (
                        <div
                            key={job.id}
                            ref={el => { cardRefs.current[i] = el; }}
                            className={`job-card ${visibleCards.includes(i) ? 'visible' : ''}`}
                        >
                            <img src={job.img} alt={job.title} loading="lazy" />
                            <div className="job-overlay" />

                            <div className="job-info">
                                <div
                                    className="job-accent-bar"
                                    style={{ backgroundColor: job.accent }}
                                />
                                <p className="job-title">{job.title}</p>
                                <div className="job-meta">
                                    <span className="job-client">{job.client}</span>
                                    <span className="job-year">{job.year}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}