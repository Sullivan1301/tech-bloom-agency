"use client";

import B2BHero from "@/components/sections/b2b/B2BHero";
import B2BChallenges from "@/components/sections/b2b/B2BChallenges";
import B2BSolution from "@/components/sections/b2b/B2BSolution";
import B2BProcess from "@/components/sections/b2b/B2BProcess";
import B2BPricing from "@/components/sections/b2b/B2BPricing";
import B2BPortfolio from "@/components/sections/b2b/B2BPortfolio";
import B2BContactForm from "@/components/sections/b2b/B2BContactForm";
import B2BStack from "@/components/sections/b2b/B2BStack";
import PageWrapper from "@/components/layout/PageWrapper";

export default function B2BPage() {
    return (
        <PageWrapper>
            <main className="min-h-screen">
                <B2BHero />
                <B2BChallenges />
                <B2BSolution />
                <B2BStack />
                <B2BProcess />
                <B2BPricing />
                <B2BPortfolio />
                <B2BContactForm />
            </main>
        </PageWrapper>
    );
}