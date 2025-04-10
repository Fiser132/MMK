import HeroSection from "./components/hero-section";
import Features from "./components/features";
import Services from "./components/services";
import ContactSection from "./components/contact-section";
import BezpecnostneSystemy from "./components/systemy";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-900 text-gray-100">
      <main>
        <HeroSection />
        <Features />
        <Services />
        <BezpecnostneSystemy />
        <ContactSection />
      </main>
    </div>
  );
}
