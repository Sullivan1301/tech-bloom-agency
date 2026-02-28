import Portfolio from "@/components/sections/portfolio/Portfolio";
import PageWrapper from "@/components/layout/PageWrapper";

export default function PortfolioPage() {
    return (
        <PageWrapper>
            <main className="bg-brand-light min-h-screen">
                <Portfolio />
            </main>
        </PageWrapper>
    );
}

