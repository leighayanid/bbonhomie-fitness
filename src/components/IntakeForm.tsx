"use client";

import { useForm } from "react-hook-form";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Check, Loader2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type FormData = {
  name: string;
  email: string;
  instagram: string;
  goal: "contest" | "mass" | "recomp" | "lifestyle";
  dedication: number;
  why: string;
};

export default function IntakeForm() {
  const [step, setStep] = useState(0); // 0: Start, 1: Submitted
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  const dedicationLevel = watch("dedication", 5);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    setIsSubmitting(false);
    setStep(1);
  };

  useEffect(() => {
    if (step === 0) {
      const ctx = gsap.context(() => {
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

        gsap.from(formRef.current, {
          y: 50,
          opacity: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        });
      }, sectionRef);
      return () => ctx.revert();
    }
  }, [step]);

  if (step === 1) {
    return (
      <section id="contact" className="py-24 bg-zinc-950 flex items-center justify-center min-h-[60vh]">
        <div className="text-center max-w-xl px-4">
            <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-8 animate-in fade-in zoom-in duration-500">
                <Check className="w-10 h-10 text-obsidian" />
            </div>
          <h2 className="text-5xl font-bebas text-white mb-4">APPLICATION RECEIVED</h2>
          <p className="text-gray-400 text-lg">
            Your application is now in the vault. We review every submission personally. If you have what it takes, you will hear from us within 48 hours.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <div ref={titleRef} className="mb-12 text-center">
          <h2 className="text-5xl md:text-7xl font-bebas text-white mb-4">
            THE INTAKE <span className="text-gold text-glow">VAULT</span>
          </h2>
          <p className="text-gray-400">
            Serious inquiries only. We don&apos;t coach everyone. Tell us why you belong here.
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-8 bg-zinc-900/40 p-8 md:p-12 border border-white/10 backdrop-blur-md shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
              <input
                {...register("name", { required: true })}
                className="w-full bg-black/20 border-b border-white/20 p-4 text-white focus:border-gold focus:outline-none focus:bg-white/5 transition-all placeholder:text-zinc-700"
                placeholder="John Doe"
              />
              {errors.name && <span className="text-crimson text-xs">Required</span>}
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
              <input
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                className="w-full bg-black/20 border-b border-white/20 p-4 text-white focus:border-gold focus:outline-none focus:bg-white/5 transition-all placeholder:text-zinc-700"
                placeholder="john@example.com"
              />
               {errors.email && <span className="text-crimson text-xs">Valid email required</span>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Instagram Handle</label>
              <input
                {...register("instagram")}
                className="w-full bg-black/20 border-b border-white/20 p-4 text-white focus:border-gold focus:outline-none focus:bg-white/5 transition-all placeholder:text-zinc-700"
                placeholder="@username"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Primary Goal</label>
              <div className="relative">
                <select
                    {...register("goal")}
                    className="w-full bg-black/20 border-b border-white/20 p-4 text-white focus:border-gold focus:outline-none focus:bg-white/5 transition-all appearance-none cursor-pointer"
                >
                    <option value="contest" className="bg-zinc-900">Contest Prep</option>
                    <option value="mass" className="bg-zinc-900">Mass / Hypertrophy</option>
                    <option value="recomp" className="bg-zinc-900">Body Recomposition</option>
                    <option value="lifestyle" className="bg-zinc-900">Lifestyle / Health</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    ▼
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest flex justify-between">
                <span>Dedication Level (1-10)</span>
                <span className="text-gold font-bebas text-xl">{dedicationLevel}</span>
            </label>
            <input
              type="range"
              min="1"
              max="10"
              step="1"
              {...register("dedication")}
              className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-gold hover:accent-white transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Why should I coach you?</label>
            <textarea
              {...register("why", { required: true, minLength: 20 })}
              rows={4}
              className="w-full bg-black/20 border-b border-white/20 p-4 text-white focus:border-gold focus:outline-none focus:bg-white/5 transition-all resize-none placeholder:text-zinc-700"
              placeholder="Convince me..."
            />
             {errors.why && <span className="text-crimson text-xs">Tell us a bit more...</span>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="group w-full bg-gold hover:bg-white text-obsidian font-bold py-4 px-8 uppercase tracking-wider text-lg transition-all duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            
            <span className="relative flex items-center">
                {isSubmitting ? (
                    <>
                        <Loader2 className="animate-spin mr-2 h-5 w-5" />
                        Submitting...
                    </>
                ) : (
                    <>
                        Submit Application <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                )}
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
