"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

// Placeholder data for transformations
const transformations = [
  {
    id: 1,
    before: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2940&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2940&auto=format&fit=crop",
    name: "Client A",
    result: "12 Week Prep",
  },
  {
    id: 2,
    before: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2940&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2940&auto=format&fit=crop",
    name: "Client B",
    result: "6 Month Off-Season",
  },
    {
    id: 3,
    before: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2938&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=2940&auto=format&fit=crop",
    name: "Client C",
    result: "Lifestyle Transformation",
  },
];

export default function Gallery() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Title
      gsap.from(titleRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Animate Grid Items
      gsap.fromTo(".gallery-item", 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="the-wall" ref={sectionRef} className="py-24 bg-obsidian border-t border-zinc-900">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bebas text-white mb-4">
            THE WALL OF <span className="text-transparent text-stroke">GAINS</span>
          </h2>
          <p className="text-gray-400">Real people. Real work. Real results.</p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-3 gap-8">
          {transformations.map((item) => (
            <div key={item.id} className="gallery-item group relative bg-zinc-900/30 p-2 border border-white/5 hover:border-gold/30 transition-colors duration-500">
              <div 
                className="relative w-full overflow-hidden mb-4 bg-zinc-800"
                style={{ aspectRatio: '4/5', minHeight: '300px' }}
              >
                 {/* 
                    Ideally this would be a slider or hover effect.
                    For MVP, we show After by default, hover to see details 
                 */}
                <Image
                    src={item.after}
                    alt={`Transformation ${item.name}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-gold font-bebas text-3xl tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {item.result}
                    </span>
                 </div>
              </div>
              <div className="flex justify-between items-center px-2 py-2 border-t border-white/5 pt-4">
                  <span className="text-white font-bebas text-xl">{item.name}</span>
                  <span className="text-xs text-gold/80 uppercase tracking-wider border border-gold/20 px-2 py-1 rounded-sm">Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
