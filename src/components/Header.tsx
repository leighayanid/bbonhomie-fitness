"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
        // Prevent scrolling when menu is open
        document.body.style.overflow = 'hidden';
        
        const ctx = gsap.context(() => {
            gsap.to(menuRef.current, {
                y: "0%",
                duration: 0.8,
                ease: "power3.out",
            });
            
            gsap.fromTo(".mobile-nav-item", 
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    delay: 0.3,
                    ease: "power2.out"
                }
            );
        }, menuRef);
        return () => ctx.revert();
    } else {
        document.body.style.overflow = '';
        const ctx = gsap.context(() => {
            gsap.to(menuRef.current, {
                y: "-100%",
                duration: 0.8,
                ease: "power3.inOut",
            });
        }, menuRef);
        return () => ctx.revert();
    }
  }, [isOpen]);

  // Close menu when route changes (hash links)
  useEffect(() => {
     setIsOpen(false);
  }, [pathname]);


  const menuLinks = [
    { name: "About", href: "#the-pedigree" },
    { name: "Services", href: "#the-blueprint" },
    { name: "Transformations", href: "#the-wall" },
    { name: "Contact", href: "#contact" },
  ];

  const handleMobileLinkClick = (href: string) => {
    setIsOpen(false);
    // Allow state update and overflow reset to happen before scrolling
    setTimeout(() => {
       const element = document.querySelector(href);
       if (element) {
           element.scrollIntoView({ behavior: 'smooth' });
       }
    }, 100);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-obsidian/60 backdrop-blur-xl border-b border-white/5 supports-[backdrop-filter]:bg-obsidian/30 transition-all duration-300">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between relative z-50">
          <Link href="/" className="group flex items-center gap-2" onClick={() => setIsOpen(false)}>
             <span className="text-2xl font-bebas tracking-wider text-white group-hover:text-gold transition-colors duration-300">
              BBONHOMIE
             </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10">
            {menuLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-widest group"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Link
                href="#contact"
                className={cn(
                "inline-flex items-center justify-center px-6 py-2.5",
                "bg-transparent border border-white/20 text-white font-bebas tracking-wider text-lg",
                "hover:bg-gold hover:text-obsidian hover:border-gold transition-all duration-300",
                "backdrop-blur-sm" 
                )}
            >
                Join The Brotherhood
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-white focus:outline-none relative z-50 p-2"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Full Screen Menu */}
      <div 
        ref={menuRef}
        className="fixed inset-0 z-40 bg-obsidian flex flex-col items-center justify-center transform -translate-y-full"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />
        
        {/* Decorative Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none">
             <span className="text-[50vw] font-bebas leading-none text-white whitespace-nowrap">BB</span>
        </div>

        <nav ref={menuItemsRef} className="flex flex-col items-center space-y-8 relative z-10">
            {menuLinks.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                        e.preventDefault();
                        handleMobileLinkClick(item.href);
                    }}
                    className="mobile-nav-item text-4xl md:text-5xl font-bebas text-white hover:text-gold transition-colors tracking-wide"
                >
                    {item.name}
                </Link>
            ))}
             <Link
                href="#contact"
                onClick={(e) => {
                    e.preventDefault();
                    handleMobileLinkClick("#contact");
                }}
                className="mobile-nav-item mt-8 inline-flex items-center justify-center px-8 py-4 bg-gold text-obsidian font-bebas tracking-wider text-2xl hover:bg-white transition-all duration-300"
            >
                Join The Brotherhood
            </Link>
        </nav>
      </div>
    </>
  );
}
