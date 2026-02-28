import Services from "@/components/Services";
import ServicesAdvantages from "@/components/ServicesAdvantages";
import ServicesFAQ from "@/components/ServicesFAQ";
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
