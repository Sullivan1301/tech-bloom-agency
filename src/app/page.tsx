import type { Metadata } from "next";

import Hero from "@/components/Home/Hero";
import BuildAmazing from "@/components/Home/Build-Amazing";
import WorkGrow from "@/components/Home/work-grow";
import Preferred from "@/components/Home/preferred-plan";
import Counter from "@/components/Home/Counter";
import FaqQuestion from "@/components/Home/faq";

/* =========================
   METADATA SEO - Tech Bloom Agency
   ========================= */

export const metadata: Metadata = {
  title: "Tech Bloom Agency – Agence digitale | Performance, Branding & IA",
  description:
    "Transformez vos idées en solutions digitales scalables. Tech Bloom Agency combine stratégie, design premium et intelligence artificielle pour accélérer votre croissance digitale.",
  keywords: [
    "agence digitale",
    "développement web",
    "branding",
    "marketing digital",
    "intelligence artificielle",
    "e-commerce",
    "Madagascar",
    "Tech Bloom Agency",
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
        alt: "Tech Bloom Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Bloom Agency – Agence digitale | Performance, Branding & IA",
    description:
      "Transformez vos idées en solutions digitales scalables avec Tech Bloom Agency.",
    images: ["https://techbloom.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://techbloom.agency",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* =========================
   JSON-LD - PAGE D'ACCUEIL
   ========================= */

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://techbloom.agency/#webpage",
  url: "https://techbloom.agency",
  name: "Tech Bloom Agency – Agence digitale | Performance, Branding & IA",
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
  },
  breadcrumb: {
    "@id": "https://techbloom.agency/#breadcrumb",
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
    "Agence digitale spécialisée en performance, branding et intelligence artificielle. Nous transformons les idées en solutions digitales scalables.",
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
  },
  sameAs: [
    "https://www.linkedin.com/company/tech-bloom-agency",
    "https://twitter.com/techbloomagency",
    "https://www.facebook.com/techbloomagency",
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Digital Agency Services",
  provider: {
    "@id": "https://techbloom.agency/#organization",
  },
  areaServed: {
    "@type": "Country",
    name: ["Madagascar", "International"],
  },
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
   HOME PAGE
   ========================= */

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data */}
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

      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative overflow-hidden"
        aria-label="Introduction Tech Bloom Agency"
      >
        <Hero />
      </section>

      {/* PROCESS / APPROACH SECTION */}
      <section
        id="processus"
        aria-labelledby="processus-heading"
      >
        <BuildAmazing isSpace />
      </section>

      {/* SERVICES SECTION */}
      <section
        id="services"
        aria-labelledby="services-heading"
      >
        <WorkGrow />
      </section>

      {/* TESTIMONIALS SECTION */}
      <section
        id="temoignages"
        aria-labelledby="temoignages-heading"
      >
        <Preferred />
      </section>

      {/* STATISTICS SECTION */}
      <section
        id="statistiques"
        aria-labelledby="stats-heading"
      >
        <Counter />
      </section>

      {/* FAQ SECTION */}
      <section
        id="faq"
        aria-labelledby="faq-heading"
      >
        <FaqQuestion />
      </section>
    </>
  );
}
