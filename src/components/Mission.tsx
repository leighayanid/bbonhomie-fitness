"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Target, Flame, Shield } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    title: "DISCIPLINE OVER MOTIVATION",
    description: "Motivation is a feeling. Discipline is a command. We do the work especially when we don't feel like it.",
    icon: Shield,
  },
  {
    title: "PRECISION OVER GUESSWORK",
    description: "We don't hope for results; we engineer them. Data-driven protocols for calculated hypertrophy.",
    icon: Target,
  },
  {
    title: "RESULTS OVER EXCUSES",
    description: "The iron never lies. 200lbs is always 200lbs. You either moved it, or you didn't. No grey areas.",
    icon: Flame,
  },
];

export default function Mission() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax Background
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
        },
      });

      // Title Animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      // Values Animation
      gsap.fromTo(".mission-value",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".mission-grid",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <div ref={bgRef} className="relative w-full h-[140%] -top-[20%]">
            <Image
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2787&auto=format&fit=crop"
                alt="Gym weights close up"
                fill
                className="object-cover opacity-20 grayscale"
                sizes="100vw"
                unoptimized
            />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/80 to-obsidian z-10" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div ref={titleRef} className="text-center mb-20">
            <span className="text-gold font-bold tracking-[0.5em] text-sm uppercase mb-4 block">Our Philosophy</span>
            <h2 className="text-6xl md:text-8xl font-bebas text-white mb-8">
                THE IRON <span className="text-transparent text-stroke">CODE</span>
            </h2>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Now Accepting Clients</span>
            </div>
        </div>

        <div className="mission-grid grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {values.map((item, index) => (
                <div key={index} className="mission-value flex flex-col items-center text-center group">
                    <div className="w-20 h-20 mb-8 rounded-full border border-white/10 bg-zinc-900/50 flex items-center justify-center group-hover:border-gold/50 group-hover:scale-110 transition-all duration-500">
                        <item.icon className="w-8 h-8 text-gray-400 group-hover:text-gold transition-colors duration-300" />
                    </div>
                    <h3 className="text-3xl font-bebas text-white mb-4 group-hover:text-gold transition-colors duration-300">
                        {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed max-w-xs">
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
