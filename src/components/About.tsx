"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

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
          <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900 border border-white/5 group">
             {/* Placeholder for Champion Image */}
             <div className="absolute inset-0 border border-gold/30 scale-[0.95] z-20 pointer-events-none transition-transform duration-700 group-hover:scale-100" />
            <Image
                ref={imageRef}
                src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=2787&auto=format&fit=crop"
                alt="Champion Physique"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
            />
          </div>

          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl font-bebas text-white leading-none">
              THE PEDIGREE <br /> <span className="text-transparent text-stroke">OF POWER</span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
              <p>
                BBonhomie Fitness isn&apos;t just about lifting weights; it&apos;s about
                the brotherhood of iron. Founded by a champion who has stood on
                the world&apos;s most prestigious stages and walked away with the
                gold, we provide the blueprint for absolute physical dominance.
              </p>
              <p>
                We combine the science of hypertrophy with the grit of a
                competitor&apos;s mindset. You provide the work; we provide the win.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                <div>
                    <span className="block text-5xl font-bebas text-gold text-glow">15+</span>
                    <span className="text-sm uppercase tracking-widest text-gray-500 mt-1 block">Title Wins</span>
                </div>
                <div>
                    <span className="block text-5xl font-bebas text-gold text-glow">500+</span>
                    <span className="text-sm uppercase tracking-widest text-gray-500 mt-1 block">Lives Changed</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
