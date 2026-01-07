import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-dark via-brand-blue to-brand-blue-petrol -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red-rose/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue-petrol/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
        <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
          Prêt à faire éclore votre projet digital ?
        </h2>
        <p className="text-xl text-gray-200 mb-10 leading-relaxed">
          Discutons de vos objectifs et créons ensemble une solution adaptée
          à vos besoins et votre budget.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center space-x-2 bg-brand-red-cherry text-white px-8 py-4 rounded-full font-heading font-semibold hover:bg-brand-red-cherry/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Mail size={20} />
            <span>Demander un devis gratuit</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/a-propos"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-heading font-semibold border-2 border-white text-white hover:bg-white hover:text-brand-blue transition-all duration-300"
          >
            En savoir plus sur nous
          </Link>
        </div>
      </div>
    </section>
  );
}
