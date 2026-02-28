"use client";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] bg-white flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden text-brand-dark-blue">
            {/* Background pattern inspired by Feel and Clic: Minimalist grids/dots */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 -z-10" />

            <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center space-y-12">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-brand-red-rose mb-4">
                        Agence digitale à Madagascar • Stratégie & Développement
                    </span>
                    <h1 className="text-[clamp(3rem,10vw,6.5rem)] font-serif font-bold leading-[0.9] tracking-tight text-brand-primary mb-8">
                        Agilité techno—<br className="hidden md:block" />
                        <span className="text-brand-dark-blue">logique.</span>
                    </h1>
                </motion.div>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg lg:text-xl text-brand-gray max-w-3xl mx-auto font-medium leading-relaxed uppercase tracking-wide"
                >
                    Partenaire digital des entrepreneurs et bras droit technique des agences. Nous concevons des solutions sur-mesure pour propulser votre croissance, en direct ou en sous-traitance.
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8"
                >
                    <Link
                        href="/portfolio"
                        className="btn-primary group py-5 px-10 text-sm uppercase tracking-widest"
                    >
                        <span>Voir nos projets</span>
                        <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                        href="/contact"
                        className="group flex items-center text-brand-dark-blue font-bold text-sm uppercase tracking-widest hover:text-brand-red-rose transition-colors"
                    >
                        <span>Débuter un projet</span>
                        <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform text-brand-red-rose" />
                    </Link>
                </motion.div>
            </div>

            {/* Stats/Social Proof inspired by agency layouts */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="mt-24 w-full max-w-[1200px] px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-brand-light-gray pt-16"
            >
               {[ 
                 { label: "Projets livrés", val: "20+" },
                 { label: "Expertise technique", val: "Next.js" },
                 { label: "Satisfaction client", val: "90%" },
                 { label: "Engagement", val: "100%" }
               ].map((stat, i) => (
                   <div key={i} className="flex flex-col items-center md:items-start space-y-3">
                       <span className="text-4xl font-serif font-bold text-brand-primary">{stat.val}</span>
                       <span className="text-[10px] font-bold text-brand-gray uppercase tracking-[0.2em]">{stat.label}</span>
                   </div>
               ))}
            </motion.div>
        </section>
    );
}

