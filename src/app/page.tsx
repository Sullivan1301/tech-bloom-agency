import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ValuesSection from "@/components/ValuesSection";
import PortfolioPreview from "@/components/PortfolioPreview";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import PageWrapper from "@/components/layout/PageWrapper";

export default function Page() {
    return (
        <PageWrapper>
            <Hero />
            <ValuesSection />
            <Services />
            <PortfolioPreview />
            <StatsSection />
            <CTASection />
        </PageWrapper>
    );
}