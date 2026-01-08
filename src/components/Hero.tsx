"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation for text
      gsap.from(".hero-text-line", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.2,
      });

      // Watermark rotation/movement
      gsap.to(watermarkRef.current, {
        rotation: 15,
        y: 50,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Parallax effect for background
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background & Overlay */}
      <div ref={bgRef} className="absolute inset-0 z-0 select-none pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-obsidian/60 to-obsidian z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-transparent to-obsidian/80 z-10" />

        {/* Placeholder for video/image */}
        <div className="w-full h-full bg-neutral-900 relative">
          <Image
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2940&auto=format&fit=crop"
            alt="Gym Background"
            fill
            className="object-cover opacity-30 grayscale"
            priority
            sizes="100vw"
            unoptimized
          />
        </div>
      </div>

      {/* Giant Watermark */}
      <div
        ref={watermarkRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-[0.03] pointer-events-none whitespace-nowrap"
      >
        <span className="text-[40vw] font-bebas leading-none text-white">BB</span>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 relative pt-20 flex flex-col items-center text-center">
        <div ref={textRef} className="max-w-5xl">
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bebas text-white leading-[0.8] mb-8 tracking-tighter">
            <div className="overflow-hidden">
              <span className="hero-text-line block">ACHIEVE YOUR</span>
            </div>
            <div className="overflow-hidden">
              <span className="hero-text-line block text-transparent text-stroke hover:text-white transition-colors duration-700 cursor-default">
                FITNESS GOALS.
              </span>
            </div>
            <div className="overflow-hidden">
              <span className="hero-text-line block text-gold text-glow">
                OUTWORK YOUR EXCUSES.
              </span>
            </div>
          </h1>

          <p className="hero-text-line text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light tracking-wide leading-relaxed">
            Stop guessing. Start growing. Access the exact protocols used by a
            multi-title bodybuilding champion to transform your physique.
          </p>

          <div className="hero-text-line">
            <button className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bebas tracking-wider text-xl text-obsidian bg-gold transition-all duration-300 hover:bg-white hover:scale-105">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
              <span className="relative">Join The Brotherhood</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  );
}
