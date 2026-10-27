import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlowCard from "../components/GlowCard";
import TitleHeader from "../components/TitleHeader";
import { milestoneCard } from "../constants";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

// Register ScrollTrigger so GSAP knows how to use it
gsap.registerPlugin(ScrollTrigger);

// Animated clips are mp4 (much smaller + phone can decode it with hardware than the animated webp)
const MilestoneMedia = ({ card }: { card: (typeof milestoneCard)[number] }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    // phone low power mode can block autoplay, show the animated webp instead
    const [blocked, setBlocked] = useState(false);
    const { ref, inView } = useInView({ rootMargin: "600px 0px" });

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (inView) {
            video.play().catch((err) => {
                if (err.name === "NotAllowedError") setBlocked(true);
            });
        } else {
            video.pause();
        }
    }, [inView]);

    if (!card.video || blocked) {
        return (
            <img
                src={card.imgPath}
                alt={card.title}
                className="rounded-lg w-full"
                loading="lazy"
                decoding="async"
            />
        );
    }

    return (
        <video
            ref={(el) => { videoRef.current = el; ref(el); }}
            src={card.video}
            width={800}
            height={450}
            muted
            loop
            playsInline
            preload="none"
            aria-label={card.title}
            className="rounded-lg w-full aspect-video"
        />
    );
};

const MilestoneSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Drawing line
        gsap.fromTo('.main-timeline-line',
            { scaleY: 0 },
            {
                scaleY: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 40%", // Start drawing 
                    end: 'bottom bottom', // Finish 
                    scrub: 1, // Smooth "catch-up" effect
                }
            }
        );

        // Individual Card Animations (Slide in)
        const cards = gsap.utils.toArray('.timeline-card');
        cards.forEach((card) => {
            gsap.from(card as HTMLElement, {
                x: -50,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: card as HTMLElement,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="w-full py-20 relative overflow-hidden">
            <TitleHeader titleString="Milestones" sub="When did you know me ?" />

            <div className="mt-32 w-full mx-auto relative px-5">

                {/* THE line */}
                <div className="absolute left-[50%] translate-x-[-50%] top-0 bottom-0 w-0.5 hidden md:block">
                    {/* Background line */}
                    <div className="absolute inset-0 bg-white/10 w-full" />

                    {/* Line */}
                    <div className="main-timeline-line absolute inset-0 bg-linear-to-b from-blue-600 via-purple-500 to-purple-300 w-full origin-top scale-y-0"
                        // glowing part
                        style={{
                            background: 'linear-gradient(to bottom, #3b82f6, #8b5cf6, #22d3ee)',
                            boxShadow: `
                             0 0 5px #fff,         
                             0 0 10px #121db3,     
                             0 0 20px #a93bb3,     
                             0 0 40px rgba(59, 130, 246, 0.4) 
                                 `
                        }} />
                </div>

                <div className="space-y-40">
                    {milestoneCard.map((card, i) => (
                        <div key={card.title} className="flex flex-col md:flex-row items-center gap-10 md:gap-20">

                            {/* Card Side */}
                            <div className="timeline-card w-full md:w-1/2 flex justify-center md:justify-end z-20">
                                <a
                                    href={card.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full max-w-lg cursor-pointer hover:opacity-90 transition-opacity"
                                >
                                    <GlowCard card={card} index={i}>
                                        <MilestoneMedia card={card} />

                                    </GlowCard>
                                </a>
                            </div>

                            {/* Center Dot */}
                            <div className="hidden md:flex items-center justify-center relative z-30">
                                <div className="w-4 h-4 bg-purple-400 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)] border-2 border-black" />
                            </div>

                            <div className="w-full md:w-1/2 text-center md:text-left z-20">
                                <h1 className="text-4xl font-bold text-white mb-4">{card.title}</h1>
                                <span className="text-blue-400 font-mono">{card.date}</span>
                                <p className="text-white/60 mt-4 max-w-sm mx-auto md:mx-0">{card.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MilestoneSection;
