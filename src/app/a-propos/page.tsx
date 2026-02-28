import About from "@/components/sections/about/About";
import StatsSection from "@/components/sections/home/StatsSection";
import TeamSection from "@/components/sections/about/TeamSection";
import Testimonials from "@/components/sections/home/Testimonials";
import CTASection from "@/components/sections/shared/CTASection";
import PageWrapper from "@/components/layout/PageWrapper";

export default function AboutPage() {
    return (
        <PageWrapper>
            <About />
            <StatsSection />
            <TeamSection />
            <Testimonials />
            <CTASection />
        </PageWrapper>
    );
}
