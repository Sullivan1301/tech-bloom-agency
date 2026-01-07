import { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Portfolio - Tech Bloom Agency",
  description: "Découvrez nos réalisations : sites web, applications, branding et campagnes marketing digitales.",
};

export default function PortfolioPage() {
  const categories = ["Tous", ...Array.from(new Set(projects.map(p => p.category)))];

  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-20 bg-gradient-to-br from-brand-beige to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-heading font-bold text-brand-blue mb-6">
              Notre Portfolio
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Découvrez quelques-uns des projets que nous avons réalisés avec succès pour nos clients.
              Chaque projet est unique et conçu sur mesure.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 rounded-full font-heading font-medium border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-colors duration-300"
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-brand-red-cherry hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block text-xs font-heading font-semibold text-brand-red-cherry bg-brand-red-cherry/10 px-3 py-1 rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="font-heading font-bold text-xl text-brand-blue mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
