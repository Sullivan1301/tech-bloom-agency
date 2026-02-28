import Hero from "@/components/sections/home/Hero";
import HomeServices from "@/components/sections/home/HomeServices";
import HowItWorks from "@/components/sections/home/HowItWorks";
import PortfolioPreview from "@/components/sections/home/PortfolioPreview";
import Testimonials from "@/components/sections/home/Testimonials";
import CTASection from "@/components/sections/shared/CTASection";
import ToolsSection from "@/components/sections/home/ToolsSection";
import B2BPreview from "@/components/sections/home/B2BPreview";
import PageWrapper from "@/components/layout/PageWrapper";

export default function Page() {
    return (
        <PageWrapper>
            <Hero />
            <HomeServices />
            <HowItWorks />
            <PortfolioPreview />
            <B2BPreview />
            <Testimonials />
            <ToolsSection />
        </PageWrapper>
    );
}
