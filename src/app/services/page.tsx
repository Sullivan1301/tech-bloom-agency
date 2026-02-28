import Services from "@/components/sections/services/Services";
import ServicesAdvantages from "@/components/sections/services/ServicesAdvantages";
import ServicesFAQ from "@/components/sections/services/ServicesFAQ";
import PageWrapper from "@/components/layout/PageWrapper";

export default function ServicesPage() {
    return (
        <PageWrapper>
            <Services />
            <ServicesAdvantages />
            <ServicesFAQ />
        </PageWrapper>
    );
}
