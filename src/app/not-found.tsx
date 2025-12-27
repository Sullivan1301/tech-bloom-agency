import Link from "next/link";
import { Metadata } from "next";
import { Icon } from "@iconify/react/dist/iconify.js";

/* =========================
   METADATA - 404 Page
   ========================= */

export const metadata: Metadata = {
  title: "Page non trouvée | Tech Bloom Agency",
  description:
    "La page que vous recherchez n'existe pas ou a été déplacée. Retournez à l'accueil ou contactez-nous pour de l'aide.",
  robots: {
    index: false,
    follow: false,
  },
};

/* =========================
   404 PAGE - Tech Bloom Agency
   Professional, reassuring, branded
   ========================= */

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-darkmode py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          {/* 404 Number with subtle animation */}
          <div
            className="mb-8"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <h1 className="text-8xl md:text-9xl font-bold font-bitter text-beige/10 select-none">
              404
            </h1>
          </div>

          {/* Main Content */}
          <div
            className="space-y-6 mb-12"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="600"
          >
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-light/10">
                <Icon
                  icon="mdi:map-search-outline"
                  className="text-accent text-4xl"
                />
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold font-bitter text-beige mb-4">
              Page non trouvée
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-beige/75 max-w-xl mx-auto leading-relaxed font-light">
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée. 
              Pas de panique, nous pouvons vous aider à trouver ce que vous cherchez.
            </p>
          </div>

          {/* CTAs */}
          <div
            className="flex flex-wrap items-center justify-center gap-4"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="600"
          >
            <Link
              href="/"
              className="btn btn-primary group px-8 py-4 rounded-xl font-semibold shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-all"
            >
              <Icon
                icon="mdi:home"
                className="text-xl transition-transform group-hover:scale-110"
              />
              <span>Retour à l'accueil</span>
            </Link>

            <Link
              href="/contact"
              className="btn btn-outline border-beige/30 text-beige hover:bg-beige/10 hover:border-beige/50 px-8 py-4 rounded-xl font-semibold backdrop-blur-sm transition-all"
            >
              <Icon icon="mdi:email-outline" className="text-xl" />
              <span>Nous contacter</span>
            </Link>
          </div>

          {/* Helpful Links */}
          <div
            className="mt-12 pt-8 border-t border-dark_border/50"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="600"
          >
            <p className="text-sm text-beige/60 mb-4">
              Vous cherchez peut-être :
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link
                href="/services"
                className="text-sm text-beige/70 hover:text-accent transition-colors flex items-center gap-2"
              >
                <Icon icon="mdi:briefcase-outline" className="text-base" />
                <span>Nos services</span>
              </Link>
              <Link
                href="/portfolio"
                className="text-sm text-beige/70 hover:text-accent transition-colors flex items-center gap-2"
              >
                <Icon icon="mdi:folder-outline" className="text-base" />
                <span>Nos réalisations</span>
              </Link>
              <Link
                href="/about"
                className="text-sm text-beige/70 hover:text-accent transition-colors flex items-center gap-2"
              >
                <Icon icon="mdi:information-outline" className="text-base" />
                <span>À propos</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
