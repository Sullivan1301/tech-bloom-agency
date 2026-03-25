"use client";
import { Search, Palette, Code, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const PILLARS = [
    {
        title: "Stratégie Digitale",
        description: "Nous définissons votre positionnement, analysons votre marché et concevons la roadmap de votre succès numérique.",
        icon: Search,
        link: "/services#strategie",
    },
    {
        title: "Conception UX/UI",
        description: "Nous créons des interfaces intuitives et esthétiques, centrées sur l'utilisateur pour maximiser l'engagement.",
        icon: Palette,
        link: "/services#design",
    },
    {
        title: "Développement",
        description: "Nous développons des solutions techniques robustes et évolutives avec les meilleures technologies actuelles.",
        icon: Code,
        link: "/services#dev",
    }
];

export default function HomeServices() {
    return (
        <section className="py-32 bg-brand-bg-soft">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-12 mb-24">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl space-y-8"
                >
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-red-rose block">Expertise</span>
                    <h2 className="text-4xl lg:text-7xl font-serif font-bold tracking-tight text-brand-primary leading-[0.9]">
                        Une vision globale <br />
                        <span className="text-brand-dark-blue opacity-50">pour vos projets.</span>
                    </h2>
                    <p className="text-lg text-brand-gray font-medium leading-relaxed uppercase tracking-wide">
                        De la stratégie initiale au développement technique, nous couvrons 
                        tout le cycle de vie de votre produit digital.
                    </p>
                </motion.div>
            </div>

            <div className="max-w-[1200px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
                {PILLARS.map((pillar, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
                        style={{ perspective: 1000 }}
                        className="group space-y-10 bg-white p-10 rounded-agency-md border border-brand-light-gray shadow-sm hover:shadow-2xl hover:border-brand-primary/20 transition-all duration-500"
                    >
                        <div className="w-16 h-16 rounded-agency-md bg-brand-bg-soft flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                            <pillar.icon size={28} />
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-2xl font-serif font-bold text-brand-primary">{pillar.title}</h3>
                            <p className="text-sm text-brand-gray font-medium leading-relaxed uppercase tracking-wider">
                                {pillar.description}
                            </p>
                        </div>

                        <div className="pt-4">
                            <Link 
                                href={pillar.link} 
                                className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-brand-red-rose group-hover:text-brand-primary transition-colors"
                            >
                                <span>Découvrir l'expertise</span>
                                <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

