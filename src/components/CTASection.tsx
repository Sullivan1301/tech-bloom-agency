import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
    return (
        <section className="py-20 lg:py-32 relative overflow-hidden">
            {/* Fond existant, on ne change rien */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D2A40] via-[#384B70] to-[#507687] -z-10" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C94A6B]/20 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#507687]/20 rounded-full blur-3xl -z-10" />

            {/* Contenu */}
            <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#507687] mb-6">
                    Prêt à faire éclore votre projet digital ?
                </h2>
                <p className="text-xl text-[#384B70] mb-10 leading-relaxed">
                    Discutons de vos objectifs et créons ensemble une solution adaptée
                    à vos besoins et votre budget.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {/* Bouton principal */}
                    <Link
                        href="/contact"
                        className="group inline-flex items-center justify-center space-x-2 bg-[#B8001F] text-white px-8 py-4 rounded-full font-semibold shadow-lg
                       hover:bg-white hover:text-[#C94A6B] transition-all duration-300"
                    >
                        <Mail size={20} />
                        <span>Demander un devis</span>
                        <ArrowRight
                            size={20}
                            className="group-hover:translate-x-1 transition-transform duration-300"
                        />
                    </Link>

                    {/* Bouton secondaire */}
                    <Link
                        href="/a-propos"
                        className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold border-2 border-[#0D2A40] text-[#0D2A40]
                       hover:text-white hover:bg-[#0D2A40] transition-all duration-300"
                    >
                        En savoir plus sur nous
                    </Link>
                </div>
            </div>
        </section>
    );
}