import About from "@/components/About";
import StatsSection from "@/components/StatsSection";
import TeamSection from "@/components/TeamSection";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
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
