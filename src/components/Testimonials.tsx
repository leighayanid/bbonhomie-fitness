"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: "Marcus T.",
    role: "Competitive Bodybuilder",
    quote: "The training is amazing. I've seen great results. Added 15lbs of muscle in one off-season. This coaching really works.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah J.",
    role: "Lifestyle Client",
    quote: "Finally a plan that works for me. I feel stronger and healthier. My nutrition and training are perfectly balanced.",
    rating: 5,
  },
  {
    id: 3,
    name: "David K.",
    role: "Executive",
    quote: "Efficient and effective workouts. I don't have hours to waste. The workouts are intense but manageable. Best investment I've made for myself.",
    rating: 5,
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".testimonial-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gold rounded-full blur-[100px]" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-crimson rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bebas text-white mb-4">
            SUCCESS <span className="text-transparent text-stroke">STORIES</span>
          </h2>
          <p className="text-gray-400">Don't just take our word for it.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="testimonial-card bg-zinc-900/40 border border-white/5 p-8 rounded-sm relative group hover:border-gold/30 transition-colors duration-300"
            >
              <Quote className="absolute top-6 right-6 text-gold/20 w-12 h-12 group-hover:text-gold/40 transition-colors duration-300" />

              <div className="flex gap-1 mb-6 text-gold">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-300 italic mb-8 leading-relaxed relative z-10">
                "{t.quote}"
              </p>

              <div className="border-t border-white/5 pt-6">
                <h4 className="text-white font-bebas text-xl tracking-wide">{t.name}</h4>
                <p className="text-xs text-gold uppercase tracking-widest mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
