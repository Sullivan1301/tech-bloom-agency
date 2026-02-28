"use client";

import B2BHero from "@/components/sections/b2b/B2BHero";
import B2BChallenges from "@/components/sections/b2b/B2BChallenges";
import B2BSolution from "@/components/sections/b2b/B2BSolution";
import B2BProcess from "@/components/sections/b2b/B2BProcess";
import B2BPricing from "@/components/sections/b2b/B2BPricing";
import B2BPortfolio from "@/components/sections/b2b/B2BPortfolio";
import B2BContactForm from "@/components/sections/b2b/B2BContactForm";

export default function B2BPage() {
    return (
        <div className="bg-brand-light min-h-screen pt-20">
            <main>
                <B2BHero />
                <B2BChallenges />
                <B2BSolution />
                <B2BProcess />
                <B2BPricing />
                <B2BPortfolio />
                <B2BContactForm />
            </main>
        </div>
    );
}