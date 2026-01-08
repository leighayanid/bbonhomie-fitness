"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const coachImages = [
    "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=2787&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534367610401-9f51b1fdf7c1?q=80&w=2787&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1571907480495-9413f8a5a2b9?q=80&w=2787&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517963623534-290b8f0f9695?q=80&w=2787&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2787&auto=format&fit=crop",
  ];
  const prevSlide = () => setCurrent((c) => (c - 1 + coachImages.length) % coachImages.length);
  const nextSlide = () => setCurrent((c) => (c + 1) % coachImages.length);
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % coachImages.length);
    }, 5000);
    return () => clearInterval(id);
  }, [coachImages.length]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        scale: 1.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="the-pedigree"
      ref={sectionRef}
      className="py-24 bg-obsidian text-white overflow-hidden relative"
    >
      {/* Decorative BG Element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full bg-gradient-to-l from-gold/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div ref={imageRef} className="relative aspect-[4/5] overflow-hidden bg-zinc-900 border border-white/5 group">
            <div className="absolute inset-0 border border-gold/30 scale-[0.95] z-20 pointer-events-none transition-transform duration-700 group-hover:scale-100" />
            {coachImages.map((src, idx) => (
              <Image
                key={idx}
                src={src}
                alt="Coach"
                fill
                className={`absolute inset-0 object-cover transition-opacity duration-700 ${current === idx ? "opacity-100 grayscale group-hover:grayscale-0" : "opacity-0"}`}
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
            ))}
            <div className="absolute bottom-4 left-0 right-0 z-30 flex items-center justify-between px-4">
              <button
                onClick={prevSlide}
                className="inline-flex items-center justify-center w-10 h-10 bg-black/40 text-white border border-white/20 hover:border-gold/40 hover:text-gold transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                {coachImages.map((_, idx) => (
                  <span
                    key={idx}
                    className={`h-2 w-2 rounded-full border border-white/20 ${current === idx ? "bg-gold border-gold/40" : "bg-white/10"}`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="inline-flex items-center justify-center w-10 h-10 bg-black/40 text-white border border-white/20 hover:border-gold/40 hover:text-gold transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Now Accepting Clients</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bebas text-white leading-none">
              MEET YOUR <br /> <span className="text-transparent text-stroke">COACH</span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
              <p>
                Beau Bonhomie is a fitness instructor and coach with over 10 years in the industry.
                He has won several bodybuilding contests and is passionate about helping people build
                strong, healthy habits that last.
              </p>
              <p>
                Using proven training and nutrition methods, Beau creates programs tailored to your goals
                and lifestyle—simple, supportive, and effective. You bring the effort; we provide the guidance.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div>
                <span className="block text-5xl font-bebas text-gold text-glow">10+</span>
                <span className="text-sm uppercase tracking-widest text-gray-500 mt-1 block">Years Experience</span>
              </div>
              <div>
                <span className="block text-5xl font-bebas text-gold text-glow">500+</span>
                <span className="text-sm uppercase tracking-widest text-gray-500 mt-1 block">People Helped</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
