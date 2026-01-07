import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import IntakeForm from "@/components/IntakeForm";
import Footer from "@/components/Footer";
import LeadMagnet from "@/components/LeadMagnet";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <main className="bg-obsidian min-h-screen flex flex-col">
      <Header />
      <Hero />
      <About />
      <Mission />
      <Services />
      <Gallery />
      <Testimonials />
      <LeadMagnet />
      <FAQ />
      <IntakeForm />
      <Footer />
      <StickyCTA />
    </main>
  );
}