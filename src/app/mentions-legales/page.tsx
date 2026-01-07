import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mentions légales - Tech Bloom Agency",
  description: "Mentions légales du site Tech Bloom Agency.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-20 bg-gradient-to-br from-brand-beige to-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h1 className="text-5xl lg:text-6xl font-heading font-bold text-brand-blue mb-6">
              Mentions légales
            </h1>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-heading font-bold text-brand-blue mb-4">
                Éditeur du site
              </h2>
              <p className="mb-6">
                <strong>{SITE_CONFIG.name}</strong><br />
                Fondateur & Gérant : {SITE_CONFIG.founder}<br />
                Adresse : {SITE_CONFIG.address}<br />
                Email : {SITE_CONFIG.email}<br />
                Téléphone : {SITE_CONFIG.phone}
              </p>

              <h2 className="text-2xl font-heading font-bold text-brand-blue mb-4 mt-12">
                Hébergement
              </h2>
              <p className="mb-6">
                Ce site est hébergé par Vercel Inc.<br />
                340 S Lemon Ave #4133<br />
                Walnut, CA 91789, États-Unis
              </p>

              <h2 className="text-2xl font-heading font-bold text-brand-blue mb-4 mt-12">
                Propriété intellectuelle
              </h2>
              <p className="mb-6">
                L'ensemble du contenu de ce site (textes, images, logos, graphismes) est la propriété
                exclusive de {SITE_CONFIG.name}, sauf mention contraire. Toute reproduction, distribution,
                modification ou utilisation non autorisée est strictement interdite et constitue une
                violation des droits d'auteur.
              </p>

              <h2 className="text-2xl font-heading font-bold text-brand-blue mb-4 mt-12">
                Protection des données personnelles
              </h2>
              <p className="mb-6">
                Conformément à la réglementation en vigueur, vous disposez d'un droit d'accès, de
                rectification et de suppression des données vous concernant. Les données collectées
                via le formulaire de contact sont utilisées uniquement dans le cadre de notre relation
                commerciale et ne sont en aucun cas communiquées à des tiers.
              </p>
              <p className="mb-6">
                Pour exercer vos droits, vous pouvez nous contacter à l'adresse : {SITE_CONFIG.email}
              </p>

              <h2 className="text-2xl font-heading font-bold text-brand-blue mb-4 mt-12">
                Cookies
              </h2>
              <p className="mb-6">
                Ce site n'utilise pas de cookies de tracking ou de publicité. Seuls les cookies
                strictement nécessaires au fonctionnement du site sont utilisés.
              </p>

              <h2 className="text-2xl font-heading font-bold text-brand-blue mb-4 mt-12">
                Limitation de responsabilité
              </h2>
              <p className="mb-6">
                {SITE_CONFIG.name} s'efforce d'assurer l'exactitude et la mise à jour des informations
                diffusées sur ce site. Toutefois, nous ne pouvons garantir l'exactitude, la précision
                ou l'exhaustivité des informations mises à disposition sur ce site.
              </p>
              <p className="mb-6">
                {SITE_CONFIG.name} ne pourra être tenue responsable des dommages directs ou indirects
                résultant de l'accès au site ou de l'utilisation de celui-ci, y compris l'inaccessibilité,
                les pertes de données ou les virus.
              </p>

              <h2 className="text-2xl font-heading font-bold text-brand-blue mb-4 mt-12">
                Droit applicable
              </h2>
              <p className="mb-6">
                Les présentes mentions légales sont régies par le droit malgache. En cas de litige,
                les tribunaux malgaches seront seuls compétents.
              </p>

              <p className="text-sm text-gray-500 mt-12">
                Dernière mise à jour : Janvier 2025
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
