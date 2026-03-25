import PortfolioGrid from "@/components/sections/portfolio/PortfolioGrid";
import PageWrapper from "@/components/layout/PageWrapper";
import { Section } from "@/components/ui/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — Projets & Réalisations | Tech Bloom Agency",
  description: "Découvrez nos réalisations : sites web, identité visuelle et stratégies marketing pour entrepreneurs et PME malgaches et internationaux.",
  keywords: [
    "réalisations agence digitale Madagascar",
    "portfolio web Madagascar",
    "exemples sites entreprises Madagascar",
    "création site web Madagascar",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Portfolio — Tech Bloom Agency",
    description: "Sites web, branding et marketing digital pour PME et entrepreneurs.",
    url: "/portfolio",
    siteName: "Tech Bloom Agency",
    images: [{ url: "/og/og-portfolio.jpg", width: 1200, height: 630, alt: "Portfolio Tech Bloom Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio — Tech Bloom Agency",
    description: "Réalisations web, branding et marketing digital.",
    images: ["/og/og-portfolio.jpg"],
  },
  alternates: { canonical: "/portfolio" },
  robots: { index: true, follow: true },
};

export default function PortfolioPage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="pt-40 pb-24 border-b border-gray/20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-red mb-6 block">
            Portfolio
          </span>
          <h1 className="text-[clamp(3rem,10vw,6rem)] font-heading font-bold text-blue leading-[0.9] tracking-tighter mb-12">
            Nos Réalisations
          </h1>
          <p className="text-lg lg:text-xl text-gray max-w-4xl mx-auto font-medium leading-relaxed">
            Découvrez comment Tech Bloom Agency transforme les visions de ses clients en 
            succès digitaux concrets : sites web, branding, marketing et optimisation.
          </p>
        </div>
      </section>

      {/* Portfolio Grid avec Filtres */}
      <Section padding="lg" className="bg-beige">
        <PortfolioGrid />
      </Section>
    </PageWrapper>
  );
}

