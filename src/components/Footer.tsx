"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Instagram, Twitter, Facebook, Youtube, Video } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(footerRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-obsidian border-t border-white/5 py-16 relative overflow-hidden">
        {/* Footer Watermark */}
        <div className="absolute -bottom-20 -right-20 pointer-events-none opacity-[0.02] select-none">
            <span className="text-[15rem] font-bebas text-white leading-none">BB</span>
        </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-4xl font-bebas text-white mb-6 block tracking-wide hover:text-gold transition-colors duration-300 w-fit">
              BBONHOMIE FITNESS
            </Link>
            <p className="text-gray-400 max-w-sm leading-relaxed font-light">
              Forged in iron, built on discipline. The standard for elite physique transformation and coaching.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bebas text-xl mb-6 text-gold tracking-widest">The Iron Creed</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-white transition-colors cursor-default">Unyielding Discipline</li>
              <li className="hover:text-white transition-colors cursor-default">The Brotherhood of Iron</li>
              <li className="hover:text-white transition-colors cursor-default">Championship Standards</li>
              <li className="hover:text-white transition-colors cursor-default">Radical Transparency</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bebas text-xl mb-6 text-gold tracking-widest">Connect</h4>
            <div className="flex flex-wrap gap-6 mb-8">
                <a href="#" className="text-gray-400 hover:text-gold transition-colors hover:scale-110 transform duration-300">
                    <Instagram className="w-6 h-6" />
                </a>
                 <a href="#" className="text-gray-400 hover:text-gold transition-colors hover:scale-110 transform duration-300">
                    <Youtube className="w-6 h-6" />
                </a>
                 <a href="#" className="text-gray-400 hover:text-gold transition-colors hover:scale-110 transform duration-300">
                    <Video className="w-6 h-6" /> {/* Using Video for TikTok placeholder */}
                </a>
                 <a href="#" className="text-gray-400 hover:text-gold transition-colors hover:scale-110 transform duration-300">
                    <Twitter className="w-6 h-6" />
                </a>
            </div>
             <p className="text-xs text-zinc-600 font-medium">
                &copy; {new Date().getFullYear()} BBonhomie Fitness. <br /> All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
