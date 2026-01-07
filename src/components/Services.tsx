"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Trophy, Dumbbell, Zap, Briefcase } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Contest Prep",
    price: "$299/mo",
    description: "STAGE READY. NO COMPROMISE. I don’t just get you lean; I get you peeled.",
    icon: Trophy,
    features: ["Weekly Check-ins", "Peak Week Protocol", "Posing Guidance"],
    link: "#", // Placeholder Stripe Link
  },
  {
    title: "Hypertrophy Blueprint",
    price: "$199/mo",
    description: "MAXIMUM GROWTH PROTOCOLS. Every set and rep is engineered for forced growth.",
    icon: Dumbbell,
    features: ["Custom Training Split", "Progressive Overload", "Form Analysis"],
    link: "#",
  },
  {
    title: "Performance Nutrition",
    price: "$149/mo",
    description: "FUEL THE MACHINE. Precise nutrition that evolves with your progress.",
    icon: Zap,
    features: ["Macro/Meal Plans", "Supplement Stack", "Metabolic Adaptation"],
    link: "#",
  },
  {
    title: "Executive Coaching",
    price: "Custom",
    description: "TOTAL PHYSIQUE MANAGEMENT. High-level accountability for those who demand professional-grade results.",
    icon: Briefcase,
    features: ["Daily Communication", "Travel Protocols", "Lifestyle Optimization"],
    link: "#",
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Title
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Animate Cards
      gsap.fromTo(".service-card", 
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="the-blueprint" ref={sectionRef} className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bebas text-white mb-6">
            CHOOSE YOUR <span className="text-transparent text-stroke">PATH</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Whether you want to step on stage or just look like you could, we have a protocol for you.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group relative bg-zinc-900/20 backdrop-blur-sm border border-white/5 p-8 hover:border-gold/50 transition-all duration-500 hover:-translate-y-2 flex flex-col overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <service.icon className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform duration-300" />
              
              <h3 className="text-3xl font-bebas text-white mb-2">{service.title}</h3>
              <p className="text-gold font-bold mb-4">{service.price}</p>
              
              <p className="text-gray-400 text-sm mb-8 flex-grow leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={service.link}
                className="w-full py-3 px-4 border border-zinc-700 hover:border-gold text-white hover:text-gold font-bold uppercase tracking-wider text-sm transition-colors duration-300 flex items-center justify-center bg-transparent group-hover:bg-gold/10"
              >
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
