import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ValuesSection from "@/components/ValuesSection";
import StatsSection from "@/components/StatsSection";
import PortfolioPreview from "@/components/PortfolioPreview";
import CTASection from "@/components/CTASection";
import "./globals.css";

export default function Home() {
  return (
      <>
        <Navbar />
        <main>
          <Hero />
          <Services />
          <ValuesSection />
          <StatsSection />
          <PortfolioPreview />
          <CTASection />
        </main>
        <Footer />
      </>
  );
}
