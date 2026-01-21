import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ValuesSection from "@/components/ValuesSection";
import PortfolioPreview from "@/components/PortfolioPreview";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";

export default function Page() {
    return (
        <div className="bg-beige min-h-screen">
            <main>
                <Hero />
                <ValuesSection />
                <Services />
                <PortfolioPreview />
                <StatsSection />
                <CTASection />
            </main>
        </div>
    );
}