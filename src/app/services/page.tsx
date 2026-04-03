import { services } from "@/data/services";
import StickyNav from "@/components/ui/StickyNav";
import ServiceCard from "@/components/sections/services/ServiceCard";
import ServicesFAQ from "@/components/sections/services/ServicesFAQ";
import PageWrapper from "@/components/layout/PageWrapper";
import PageHero from "@/components/ui/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Services Digitaux — Création Web, Branding, Marketing | Tech Bloom Agency",
  description: "Découvrez nos services : création de sites web, identité visuelle, marketing digital, community management et accompagnement à Madagascar.",
  keywords: [
    "services agence digitale Madagascar",
    "création site web professionnel",
    "community manager Madagascar",
    "branding Madagascar",
    "marketing digital Madagascar",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Nos Services Digitaux — Tech Bloom Agency",
    description: "Création de sites web, branding, marketing digital et accompagnement à Madagascar.",
    url: "/services",
    siteName: "Tech Bloom Agency",
    images: [{ url: "/og/og-services.jpg", width: 1200, height: 630, alt: "Services Tech Bloom Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nos Services Digitaux — Tech Bloom Agency",
    description: "Création web, branding, marketing digital à Madagascar.",
    images: ["/og/og-services.jpg"],
  },
  alternates: { canonical: "/services" },
  robots: { index: true, follow: true },
};

// Schema.org JSON-LD pour les services
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Services digitaux",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Tech Bloom Agency",
    "url": "https://techbloomagency.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Toamasina",
      "addressCountry": "MG"
    }
  },
  "areaServed": {
    "@type": "Country",
    "name": "Madagascar"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services digitaux",
    "itemListElement": services.map((service) => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": service.title,
        "description": service.description
      }
    }))
  }
};

export default function ServicesPage() {
  return (
    <PageWrapper>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Luxury Hero */}
      <PageHero
        badge="Expertises"
        title="Nos services"
        subtitle="digitaux."
        description="De la conception à la maintenance, nous activons tous les leviers digitaux pour transformer vos idées en produits performants."
      />

      {/* Sticky Navigation Pills */}
      <StickyNav />

      {/* Services Grid */}
      <section className="py-32 px-6 lg:px-12 bg-beige">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <ServicesFAQ />
    </PageWrapper>
  );
}
