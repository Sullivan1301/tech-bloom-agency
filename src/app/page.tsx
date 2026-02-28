import Hero from "@/components/Hero";
import HomeServices from "@/components/HomeServices";
import HowItWorks from "@/components/HowItWorks";
import PortfolioPreview from "@/components/PortfolioPreview";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import ToolsSection from "@/components/ToolsSection";
import PageWrapper from "@/components/layout/PageWrapper";

export default function Page() {
    return (
        <PageWrapper>
            <Hero />
            <HomeServices />
            <HowItWorks />
            <PortfolioPreview />
            <Testimonials />
            <ToolsSection />
        </PageWrapper>
    );
}
