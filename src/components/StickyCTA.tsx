"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past 500px
      const toggleVisibility = window.scrollY > 500;
      setIsVisible(toggleVisibility);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
        className={cn(
            "fixed bottom-6 left-6 right-6 z-40 md:hidden transition-all duration-500 transform",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
        )}
    >
      <Link 
        href="#contact"
        className="block w-full bg-gold text-obsidian font-bebas text-2xl py-4 text-center shadow-lg hover:bg-white transition-colors shadow-gold/20"
      >
        JOIN THE BROTHERHOOD
      </Link>
    </div>
  );
}
