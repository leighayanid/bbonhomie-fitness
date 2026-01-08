"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Do I need to be a competitor to join?",
    answer: "No. While our roots are in bodybuilding, the principles of hypertrophy and discipline apply to everyone. We have tracks for Lifestyle Transformation as well as Contest Prep. The only requirement is a willingness to work hard.",
  },
  {
    question: "Is the meal plan customized?",
    answer: "100%. We don't do cookie-cutter PDFs. Your nutrition is built around your metabolic rate, food preferences, and goals. We adjust it weekly based on your check-in photos and scale weight.",
  },
  {
    question: "How does the online coaching work?",
    answer: "You'll get access to our private app where you'll find your training program and diet. You log your workouts there. Every week, you submit a check-in with photos and biofeedback. We review it and send video feedback with adjustments for the next week.",
  },
  {
    question: "What equipment do I need?",
    answer: "Ideally, access to a commercial gym. Our protocols utilize a variety of machines for optimal hypertrophy. However, we can design programs for well-equipped home gyms (barbell, dumbbells, bench, rack) if necessary.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-obsidian border-t border-white/5">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bebas text-white mb-4">
            FREQUENTLY ASKED <span className="text-transparent text-stroke">QUESTIONS</span>
          </h2>
          <p className="text-gray-400">Everything you need to know before you commit.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-white/10 bg-zinc-900/20 overflow-hidden transition-all duration-300 hover:border-gold/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={cn(
                    "font-bebas text-xl tracking-wide transition-colors duration-300",
                    openIndex === index ? "text-gold" : "text-white"
                )}>
                  {faq.question}
                </span>
                <span className="text-gold/80">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <div 
                className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <p className="p-6 pt-0 text-gray-400 leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
