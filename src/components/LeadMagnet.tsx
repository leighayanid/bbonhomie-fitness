"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Download, Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function LeadMagnet() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(formRef.current, {
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gold relative overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#050505_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6 text-obsidian">
            <h2 className="text-5xl md:text-7xl font-bebas leading-[0.9]">
              GET YOUR FREE <br /> <span className="text-white text-stroke-black">WORKOUT PLAN</span>
            </h2>
            <p className="text-lg font-medium max-w-md">
              Start your fitness journey with our free <strong>7-Day Guide</strong>. Simple, effective exercises you can do to build strength.
            </p>
            
            <ul className="space-y-3 font-semibold">
              <li className="flex items-center gap-2">
                <div className="bg-obsidian text-gold p-1 rounded-full"><Check size={14} /></div>
                <span>Easy-to-follow routines</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="bg-obsidian text-gold p-1 rounded-full"><Check size={14} /></div>
                <span>Video demonstrations</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="bg-obsidian text-gold p-1 rounded-full"><Check size={14} /></div>
                <span>Nutrition tips</span>
              </li>
            </ul>
          </div>

          <div ref={formRef} className="bg-obsidian p-8 border border-white/10 shadow-2xl relative">
             <div className="absolute -top-4 -right-4 bg-white text-obsidian font-bebas text-xl px-4 py-2 transform rotate-3 shadow-lg">
                FREE DOWNLOAD
             </div>

             <h3 className="text-white font-bebas text-3xl mb-2">DOWNLOAD NOW</h3>
             <p className="text-gray-400 text-sm mb-6">No spam. Just helpful tips. Unsubscribe anytime.</p>

             <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label htmlFor="email" className="sr-only">Email Address</label>
                    <input 
                        type="email" 
                        id="email"
                        placeholder="ENTER YOUR EMAIL" 
                        className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-4 focus:outline-none focus:border-gold transition-colors placeholder:text-zinc-600 font-bebas tracking-wide text-lg"
                        required
                    />
                </div>
                <button 
                    type="submit"
                    className="w-full bg-gold text-obsidian font-bebas text-xl py-4 hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2 group"
                >
                    SEND ME THE PROTOCOL
                    <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </button>
             </form>
          </div>

        </div>
      </div>
    </section>
  );
}
