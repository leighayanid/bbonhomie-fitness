Copy and paste the entire block below to your web designer or developer. It contains the visual direction, technical requirements, and the specific copywriting for **BBonhomie Fitness**.

---

# **Web Design & Development Brief: BBonhomie Fitness**

### **1. PROJECT OVERVIEW**

* **Brand Name:** BBonhomie Fitness
* **Target Audience:** Serious athletes, aspiring bodybuilders, and high-performers.
* **Project Goal:** To build an elite, masculine, and high-conversion coaching platform that showcases the athlete's championship pedigree and the "Brotherhood of Iron."

### **2. VISUAL IDENTITY & UI/UX**

* **Aesthetic:** Dark Mode. Use a palette of Deep Black (#000000), Gunmetal Gray, and High-Contrast Accents (Gold or Electric White).
* **Typography:** Use **Strong, Bold, Heavy-Weight Sans-Serif fonts** for headings (e.g., *Integral CF*, *Bebas Neue*, or *Montserrat Extra Bold*).
* **Imagery:** High-contrast photography with dramatic lighting to emphasize muscle definition and competition wins. Use a mix of black-and-white and high-saturation color photos.

### **3. SITE STRUCTURE & COPY**

#### **A. Hero Section**

* **Headline:** BUILT BY A CHAMPION. FORGED FOR THE ELITE.
* **Sub-headline:** Stop guessing. Start growing. Access the exact protocols used by a multi-title bodybuilding champion to transform your physique.
* **CTA:** [JOIN THE BROTHERHOOD]

#### **B. About Section (The Pedigree)**

* **Headline:** THE PEDIGREE OF POWER
* **Body:** BBonhomie Fitness isn't just about lifting weights; it’s about the brotherhood of iron. Founded by a champion who has stood on the world’s most prestigious stages and walked away with the gold, we provide the blueprint for absolute physical dominance. We combine the science of hypertrophy with the grit of a competitor’s mindset. You provide the work; we provide the win.

#### **C. Services Section**

* **Package 1: Contest Prep.** "STAGE READY. NO COMPROMISE. I don’t just get you lean; I get you peeled."
* **Package 2: Hypertrophy Blueprint.** "MAXIMUM GROWTH PROTOCOLS. Every set and rep is engineered for forced growth."
* **Package 3: Performance Nutrition.** "FUEL THE MACHINE. Precise nutrition that evolves with your progress."
* **Package 4: Executive Coaching.** "TOTAL PHYSIQUE MANAGEMENT. High-level accountability for those who demand professional-grade results."

#### **D. Client Showcase (The Wall of Gains)**

* A high-quality grid or slider featuring Before/After transformation photos and testimonials.

#### **E. The Intake Vault (Application Form)**

* **Format:** Multi-step vetting form.
* **Required Fields:** Name, Email, Instagram Handle, Goal (Contest/Mass/Recomp), Dedication Scale (1-10), and a "Why should I coach you?" text area.

#### **F. Footer (The Iron Creed)**

* **Core Values:** Unyielding Discipline, The Brotherhood of Iron, Championship Standards, Radical Transparency.

### **4. TECHNICAL REQUIREMENTS**

* **Mobile-First Design:** Must look sharp and load fast on mobile devices.
* **Payment Integration:** Seamless integration with **Stripe** or **PayPal** for coaching packages.
* **Sticky Header:** Keep the "BBonhomie" logo and CTA visible during scroll.
* **Animations:** Use sharp, professional transitions (fade-ins, slide-ups) to maintain a premium feel.

To give your developer a clear architectural vision, here is a visual layout breakdown. This structure uses the **Next.js** component-based mindset combined with **GSAP** triggers to create a powerful user flow.

---

### **The Architecture of BBonhomie Fitness**

#### **1. Header (Navigation Component)**

* **Left:** BBonhomie Logo (Clean, minimalist typography).
* **Center:** Links: *The Pedigree*, *The Blueprint*, *The Wall*, *Contact*.
* **Right:** Primary CTA Button (Glassmorphism effect with a subtle gold glow).

#### **2. Hero Section (GSAP Reveal)**

* **Layout:** Split-screen or full-bleed background.
* **Animation:** On load, the headline "BUILT BY A CHAMPION" should use a GSAP `stagger` effect, with each letter dropping into place.
* **Background:** Low-opacity video loop of a heavy squat or competition posing.

#### **3. The Pedigree (About Component)**

* **Layout:** Two-column grid.
* **Content:** Large black-and-white image of the athlete on the left; bold "THE PEDIGREE OF POWER" text on the right.
* **Interaction:** As the user scrolls, the image should slightly scale up (Parallax effect) using `GSAP ScrollTrigger`.

#### **4. The Blueprint (Services Grid)**

* **Layout:** 3 or 4-column card layout using **Tailwind Flex/Grid**.
* **Styling:** Cards should have a `border-zinc-800` that glows gold on hover.
* **Tech:** Buttons linked to **Stripe Payment Links** for instant checkout.

#### **5. The Wall of Gains (Transformation Gallery)**

* **Layout:** A masonry or carousel layout.
* **Images:** High-res "Before/After" shots hosted on a CDN (like Vercel Blob or Cloudinary) for instant loading.

#### **6. The Intake Vault (Application Component)**

* **Layout:** Centered, clean form container.
* **UX:** Multi-step form built with **React Hook Form**. Each step slides in from the right when the "Next" button is clicked.

---

### **Visual Development Guide for Tailwind**

| Feature | Tailwind Utility Classes |
| --- | --- |
| **Dark Theme** | `bg-black text-zinc-100` |
| **Headers** | `font-bebas tracking-tighter uppercase text-6xl` |
| **Cards** | `bg-zinc-900/50 backdrop-blur-md border border-zinc-800 hover:border-gold-500` |
| **CTA Buttons** | `bg-gold-600 hover:scale-105 transition-transform duration-300 font-bold` |

---

To give your developer a precise "Iron & Gold" aesthetic, here is the professional color palette and the complete visual architecture for the **BBonhomie Fitness** project.

### **The "Champion" Color Palette**

| Element | Hex Code | Purpose |
| --- | --- | --- |
| **Obsidian Black** | `#0A0A0A` | Main background (Deeps the site, makes muscles "pop"). |
| **Gunmetal Grey** | `#1C1C1C` | Card backgrounds and secondary sections. |
| **Championship Gold** | `#C5A059` | Primary CTA buttons, accents, and hover states. |
| **Steel White** | `#F4F4F5` | Primary headlines (Maximum readability). |
| **Blood Crimson** | `#8B0000` | Subtle accent for "Extreme" or "High Intensity" tags. |

---

### **The Visual Layout Architecture**

This layout is designed to funnel a visitor from **Inspiration** (Hero) to **Authority** (About) to **Commitment** (Service/Payment).

#### **1. The Hero Section (GSAP Reveal)**

* **Layout:** Full-bleed `h-screen`.
* **Visual:** A high-contrast image of the athlete on the right, bold text on the left.
* **Developer Note:** Use a GSAP scroll trigger to scale the background image slightly as the user scrolls, creating a "breathing" effect.

#### **2. The Services Grid (Tailwind Flex)**

* **Layout:** A 2x2 grid on desktop, 1x4 on mobile.
* **Effect:** Each card should have a `bg-zinc-900` background with a `group-hover:border-gold-500` transition.
* **Payment:** Every "Get Started" button links directly to a Stripe dynamic checkout session.

#### **3. The Transformation Slider (Social Proof)**

* **Layout:** Horizontal scroll or a "Before/After" slider component.
* **Interaction:** Use a slider where users can drag a bar to reveal the "After" photo over the "Before" photo.

---

### **Next.js & GSAP Implementation Snippet**

To ensure your developer gets the "feel" right, suggest they use this logic for the entry animations:

```javascript
// Example GSAP logic for the Hero Text
gsap.from(".hero-text", {
  duration: 1.5,
  y: 100,
  opacity: 0,
  stagger: 0.3,
  ease: "power4.out"
});

```

---
