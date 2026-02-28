import Hero from "@/components/sections/home/Hero";
import HomeServices from "@/components/sections/home/HomeServices";
import HowItWorks from "@/components/sections/home/HowItWorks";
import PortfolioPreview from "@/components/sections/home/PortfolioPreview";
import Testimonials from "@/components/sections/home/Testimonials";
import ToolsSection from "@/components/sections/home/ToolsSection";
import B2BPreview from "@/components/sections/home/B2BPreview";
import PageWrapper from "@/components/layout/PageWrapper";
import { Reveal } from "@/components/ui/Reveal";

export default function Page() {
    return (
        <PageWrapper>
            <Hero />
            <Reveal><HomeServices /></Reveal>
            <Reveal><HowItWorks /></Reveal>
            <Reveal><PortfolioPreview /></Reveal>
            <Reveal><B2BPreview /></Reveal>
            <Reveal><Testimonials /></Reveal>
            <Reveal><ToolsSection /></Reveal>
        </PageWrapper>
    );
}
