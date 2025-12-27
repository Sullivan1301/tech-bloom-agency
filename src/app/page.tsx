import type { Metadata } from "next";

import Hero from "@/components/Home/Hero";
import BuildAmazing from "@/components/Home/Build-Amazing";
import WorkGrow from "@/components/Home/work-grow";
import Preferred from "@/components/Home/preferred-plan";
import Counter from "@/components/Home/Counter";
import FaqQuestion from "@/components/Home/faq";

/* =========================
   METADATA SEO - Homepage
   Optimized for conversion and clarity
   ========================= */

export const metadata: Metadata = {
  title: "Tech Bloom Agency – Solutions digitales premium | Performance, Branding & IA",
  description:
    "Transformez vos idées en solutions digitales scalables. Tech Bloom Agency combine stratégie, design premium et intelligence artificielle pour accélérer votre croissance. Agence digitale spécialisée en performance, branding et IA.",
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
    "Madagascar",
    "agence tech",
    "transformation digitale",
  ],
  openGraph: {
    title: "Tech Bloom Agency – Votre partenaire digital pour la croissance",
    description:
      "Agence digitale spécialisée en performance, branding et IA. Nous transformons vos idées en solutions digitales qui génèrent des résultats mesurables.",
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
      "Transformez vos idées en solutions digitales scalables. Performance, Branding & Intelligence Artificielle.",
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
  name: "Tech Bloom Agency – Solutions digitales premium | Performance, Branding & IA",
  description:
    "Transformez vos idées en solutions digitales scalables. Tech Bloom Agency combine stratégie, design premium et intelligence artificielle pour accélérer votre croissance digitale.",
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
    "Agence digitale premium spécialisée en performance, branding et intelligence artificielle. Nous transformons les idées en solutions digitales scalables qui génèrent de la croissance.",
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
   Optimized for conversion and clarity
   Structure: Hero → Process → Services → Social Proof → Stats → FAQ
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
        First impression: Clear value proposition + CTAs
        Goal: Immediate understanding + conversion
      */}
      <section
        id="hero"
        className="relative overflow-hidden"
        aria-label="Introduction Tech Bloom Agency - Transformez vos idées en solutions digitales"
      >
        <Hero />
      </section>

      {/* 
        PROCESS / APPROACH SECTION
        Build trust: Show methodology and expertise
        Goal: Demonstrate professionalism and structured approach
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
        Core offerings: What we do
        Goal: Show value and capabilities clearly
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
        Build credibility: Client success stories
        Goal: Reduce friction and build trust
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
        Reinforce credibility: Key metrics and achievements
        Goal: Show scale and success
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
        Address objections: Common questions
        Goal: Remove barriers and provide clarity
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
