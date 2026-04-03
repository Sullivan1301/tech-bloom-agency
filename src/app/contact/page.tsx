import { ContactFormWrapper } from "@/components/sections/contact/ContactFormWrapper";
import { CalendlyEmbed } from "@/components/sections/contact/CalendlyEmbed";
import PageWrapper from "@/components/layout/PageWrapper";
import { Section } from "@/components/ui/Section";
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Tech Bloom Agency | Madagascar",
  description: "Contactez Tech Bloom Agency pour votre projet digital. Formulaire de contact, prise de rendez-vous Calendly et coordonnées directes.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Contact — Tech Bloom Agency",
    description: "Contactez-nous pour votre projet digital : sites web, branding, marketing et accompagnement à Madagascar.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="pt-40 pb-24 border-b border-gray/20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-red mb-6 block">
            Contact
          </span>
          <h1 className="text-[clamp(3rem,10vw,6rem)] font-heading font-bold text-blue leading-[0.9] tracking-tighter mb-12">
            Parlons de votre <br />
            <span className="text-navy opacity-50">projet.</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray max-w-4xl mx-auto font-medium leading-relaxed">
            Faites le premier pas vers une présence digitale premium. 
            Que vous soyez une PME ou un entrepreneur, nous sommes là pour transformer vos idées en réalité.
          </p>
        </div>
      </section>

      {/* Section Principale - 2 Colonnes */}
      <Section padding="lg" className="bg-beige">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Colonne Gauche : Formulaire */}
          <div>
            <ContactFormWrapper />
          </div>

          {/* Colonne Droite : Infos + Calendly */}
          <div className="space-y-12">
            {/* Coordonnées */}
            <div className="bg-white p-8 rounded-md shadow-lg border border-gray/20">
              <h2 className="text-2xl font-heading font-bold text-navy mb-8">
                Coordonnées
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue to-teal rounded-md flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray uppercase tracking-wider mb-1">
                      Email
                    </p>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-lg font-semibold text-navy hover:text-blue transition-colors"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue to-teal rounded-md flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray uppercase tracking-wider mb-1">
                      Téléphone
                    </p>
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="text-lg font-semibold text-navy hover:text-blue transition-colors"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue to-teal rounded-md flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray uppercase tracking-wider mb-1">
                      Localisation
                    </p>
                    <p className="text-lg font-semibold text-navy">
                      {SITE_CONFIG.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Horaires & Réseaux */}
            <div className="bg-white p-8 rounded-md shadow-lg border border-gray/20">
              <h2 className="text-2xl font-heading font-bold text-navy mb-8">
                Horaires & Réseaux
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue to-teal rounded-md flex items-center justify-center shadow-sm">
                    <Clock size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray uppercase tracking-wider mb-1">
                      Disponibilité
                    </p>
                    <p className="text-base font-medium text-navy">
                      Lundi - Vendredi : 08h00 - 18h00
                    </p>
                    <p className="text-base font-medium text-navy">
                      Samedi : 09h00 - 12h00
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={SITE_CONFIG.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-br from-blue to-teal rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
                  >
                    <Facebook size={18} className="text-white" />
                  </a>
                  <a
                    href={SITE_CONFIG.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-br from-blue to-teal rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
                  >
                    <Instagram size={18} className="text-white" />
                  </a>
                  <a
                    href={SITE_CONFIG.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-br from-blue to-teal rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
                  >
                    <Linkedin size={18} className="text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Calendly Embed */}
            <div className="bg-white p-8 rounded-md shadow-lg border border-gray/20">
              <h2 className="text-2xl font-heading font-bold text-navy mb-6">
                Réserver un appel
              </h2>
              <p className="text-gray mb-6">
                Choisissez directement un créneau qui vous convient dans notre calendrier.
              </p>
              <CalendlyEmbed />
            </div>
          </div>
        </div>
      </Section>
    </PageWrapper>
  );
}
