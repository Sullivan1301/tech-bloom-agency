"use client";

import B2BHero from "@/components/B2B/B2BHero";
import B2BChallenges from "@/components/B2B/B2BChallenges";
import B2BSolution from "@/components/B2B/B2BSolution";
import B2BProcess from "@/components/B2B/B2BProcess";
import B2BPricing from "@/components/B2B/B2BPricing";
import B2BPortfolio from "@/components/B2B/B2BPortfolio";
import B2BContactForm from "@/components/B2B/B2BContactForm";

export default function B2BPage() {
    return (
        <div className="bg-beige min-h-screen pt-20">
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