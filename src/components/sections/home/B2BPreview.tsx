"use client";
import { ArrowRight, Zap, Shield, Target } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const PARTNERSHIP_PERKS = [
    {
        title: "Marque Blanche",
        description: "Intégration invisible dans vos processus. Livraison sous votre nom.",
        icon: Shield
    },
    {
        title: "Délai Express",
        description: "Une équipe agile capable de respecter vos deadlines les plus serrées.",
        icon: Zap
    },
    {
        title: "Marges Préservées",
        description: "Des tarifs optimisés pour vous permettre de rester compétitif.",
        icon: Target
    }
];

export default function B2BPreview() {
    return (
        <section className="py-32 bg-brand-dark-blue text-white overflow-hidden relative">
            {/* Design minimaliste en fond */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/5 -skew-x-12 translate-x-1/4" />

            <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-red-rose">Partenariats B2B</span>
                            <h2 className="text-4xl lg:text-7xl font-serif font-bold tracking-tight leading-[0.9]">
                                Agence débordée ? <br />
                                <span className="opacity-50">Déléguez sans stress.</span>
                            </h2>
                            <p className="text-lg text-brand-light-gray max-w-lg font-medium leading-relaxed uppercase tracking-wide">
                                Nous accompagnons les agences européennes et internationales en sous-traitance premium et marque blanche.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-8">
                            <Link
                                href="/b2b"
                                className="w-full sm:w-auto bg-brand-red-rose text-white py-5 px-10 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-brand-dark-blue transition-all duration-300 text-center"
                            >
                                Explorer nos solutions B2B
                            </Link>
                            <Link
                                href="/contact"
                                className="group flex items-center text-white font-bold text-sm uppercase tracking-widest hover:text-brand-red-rose transition-colors"
                            >
                                <span>Demander un devis</span>
                                <ArrowRight size={18} className="ml-3 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    <div className="grid gap-8">
                        {PARTNERSHIP_PERKS.map((perk, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-agency-md hover:bg-white/10 transition-colors group"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 rounded-agency-sm bg-brand-primary flex items-center justify-center group-hover:bg-brand-red-rose transition-colors">
                                        <perk.icon size={24} className="text-white" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-serif font-bold text-white">{perk.title}</h3>
                                        <p className="text-sm text-brand-light-gray font-medium leading-relaxed uppercase tracking-wider opacity-60">
                                            {perk.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
