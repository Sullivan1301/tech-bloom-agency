import type { Metadata } from "next";

import Hero from "@/components/Home/Hero";
import BuildAmazing from "@/components/Home/Build-Amazing";
import WorkGrow from "@/components/Home/work-grow";
import Preferred from "@/components/Home/preferred-plan";
import Counter from "@/components/Home/Counter";
import FaqQuestion from "@/components/Home/faq";

/* =========================
   METADATA SEO - Homepage
   Clear, benefit-focused, conversion-optimized
   ========================= */

export const metadata: Metadata = {
  title: "Tech Bloom Agency – Agence digitale premium | Performance, Branding & IA",
  description:
    "Agence digitale pour PME et startups. Nous créons des sites web performants, des identités de marque premium et intégrons l'IA pour accélérer votre croissance. Résultats mesurables, approche professionnelle.",
  keywords: [
    "agence digitale",
    "développement web premium",
    "branding stratégique",
    "marketing digital performance",
    "intelligence artificielle",
    "solutions digitales scalables",
    "e-commerce",
    "design premium",
    "stratégie digitale",
    "Tech Bloom Agency",
    "agence web PME",
    "agence web startup",
    "transformation digitale",
  ],
  openGraph: {
    title: "Tech Bloom Agency – Solutions digitales pour PME et startups",
    description:
      "Agence digitale premium spécialisée en performance, branding et IA. Nous transformons vos idées en solutions qui génèrent des résultats mesurables pour votre croissance.",
    type: "website",
    url: "https://techbloom.agency",
    siteName: "Tech Bloom Agency",
    images: [
      {
        url: "https://techbloom.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tech Bloom Agency – Agence digitale premium",
      },
    ],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Bloom Agency – Solutions digitales premium",
    description:
      "Agence digitale pour PME et startups. Performance, Branding & Intelligence Artificielle pour accélérer votre croissance.",
    images: ["https://techbloom.agency/og-image.jpg"],
    creator: "@techbloomagency",
  },
  alternates: {
    canonical: "https://techbloom.agency",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/* =========================
   JSON-LD STRUCTURED DATA
   Enhanced for SEO and rich snippets
   ========================= */

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://techbloom.agency/#webpage",
  url: "https://techbloom.agency",
  name: "Tech Bloom Agency – Agence digitale premium | Performance, Branding & IA",
  description:
    "Agence digitale pour PME et startups. Nous créons des sites web performants, des identités de marque premium et intégrons l'IA pour accélérer votre croissance.",
  isPartOf: {
    "@id": "https://techbloom.agency/#website",
  },
  about: {
    "@id": "https://techbloom.agency/#organization",
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://techbloom.agency/og-image.jpg",
    width: 1200,
    height: 630,
  },
  breadcrumb: {
    "@id": "https://techbloom.agency/#breadcrumb",
  },
  mainEntity: {
    "@id": "https://techbloom.agency/#organization",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://techbloom.agency/#organization",
  name: "Tech Bloom Agency",
  url: "https://techbloom.agency",
  logo: "https://techbloom.agency/logo.png",
  description:
    "Agence digitale premium spécialisée en performance, branding et intelligence artificielle. Nous transformons les idées en solutions digitales scalables qui génèrent de la croissance pour PME et startups.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "MG",
    addressLocality: "Toamasina",
    addressRegion: "Atsinanana",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "contact@techbloom.agency",
    telephone: "+261341060802",
    availableLanguage: ["French", "English"],
  },
  sameAs: [
    "https://www.linkedin.com/company/tech-bloom-agency",
    "https://twitter.com/techbloomagency",
    "https://www.facebook.com/techbloomagency",
    "https://www.instagram.com/tech.bloom.agency",
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Digital Agency Services",
  provider: {
    "@id": "https://techbloom.agency/#organization",
  },
  areaServed: [
    {
      "@type": "Country",
      name: "Madagascar",
    },
    {
      "@type": "Place",
      name: "International",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services digitaux Tech Bloom Agency",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Développement Web",
          description:
            "Sites web sur mesure, e-commerce et applications web performantes avec les dernières technologies (Next.js, React, TypeScript).",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Branding & Design",
          description:
            "Identité visuelle premium, design system et stratégie de marque qui vous démarque de la concurrence.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Marketing Digital",
          description:
            "Stratégies marketing digital, SEO, publicités et campagnes qui génèrent des résultats mesurables.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Intelligence Artificielle",
          description:
            "Intégration d'IA pour automatiser vos processus, améliorer l'expérience client et optimiser vos opérations.",
        },
      },
    ],
  },
};

/* =========================
   HOMEPAGE - Tech Bloom Agency
   
   Conversion Strategy (5-second rule):
   1. Hero: What we do + Who it's for + Why premium (immediate clarity)
   2. Process: How we work (build trust through methodology)
   3. Services: What we offer (show value and capabilities)
   4. Testimonials: Social proof (reduce friction, build credibility)
   5. Stats: Scale and success (reinforce premium positioning)
   6. FAQ: Address objections (remove barriers to conversion)
   
   Design Philosophy:
   - Clean, airy, confident (Webflow 2025)
   - Clear visual hierarchy
   - Subtle animations only
   - Mobile-first responsive
   ========================= */

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* 
        HERO SECTION
        Objective: Immediate clarity in <5 seconds
        - What: Digital agency (web, branding, marketing, AI)
        - Who: PME, startups, entrepreneurs
        - Why: Premium results, proven methodology, measurable outcomes
        - CTA: Primary (Get quote) + Secondary (View work)
      */}
      <section
        id="hero"
        className="relative overflow-hidden"
        aria-label="Tech Bloom Agency - Agence digitale premium pour PME et startups"
      >
        <Hero />
      </section>

      {/* 
        PROCESS / APPROACH SECTION
        Objective: Build trust through transparency
        - Show structured methodology
        - Demonstrate professionalism
        - Reduce perceived risk
      */}
      <section
        id="processus"
        className="scroll-mt-20"
        aria-labelledby="processus-heading"
      >
        <BuildAmazing isSpace />
      </section>

      {/* 
        SERVICES SECTION
        Objective: Show clear value proposition
        - What we offer (4 core services)
        - Benefits and outcomes
        - Clear differentiation
      */}
      <section
        id="services"
        className="scroll-mt-20"
        aria-labelledby="services-heading"
      >
        <WorkGrow />
      </section>

      {/* 
        TESTIMONIALS / SOCIAL PROOF SECTION
        Objective: Build credibility and reduce friction
        - Client success stories with results
        - Real outcomes and metrics
        - Trust signals
      */}
      <section
        id="temoignages"
        className="scroll-mt-20"
        aria-labelledby="temoignages-heading"
      >
        <Preferred />
      </section>

      {/* 
        STATISTICS SECTION
        Objective: Reinforce premium positioning
        - Scale indicators (50+ projects)
        - Success metrics (+250% growth)
        - Credibility (4.9/5 rating)
        - Reach (15+ countries)
      */}
      <section
        id="statistiques"
        className="scroll-mt-20"
        aria-labelledby="stats-heading"
      >
        <Counter />
      </section>

      {/* 
        FAQ SECTION
        Objective: Remove barriers and objections
        - Address common concerns
        - Provide clarity on process
        - Reduce decision friction
      */}
      <section
        id="faq"
        className="scroll-mt-20"
        aria-labelledby="faq-heading"
      >
        <FaqQuestion />
      </section>
    </>
  );
}
