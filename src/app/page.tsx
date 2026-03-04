import { SponsorBar } from "@/components/SponsorBar";
import { Navigation } from "@/components/Navigation";
import { ScrollProgress } from "@/components/ScrollProgress";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ClientShowcase } from "@/components/ClientShowcase";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <SponsorBar />
      <Navigation />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ClientShowcase />
      </main>
      <Footer />
    </>
  );
}
