"use client";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const HeroCanvas = dynamic(() => import("@/components/ui/HeroCanvas"), { ssr: false });

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
        }
    };

    return (
        <section className="relative min-h-[95vh] bg-white flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden text-brand-dark-blue">
            <HeroCanvas />

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center space-y-12 relative z-10"
            >
                <motion.div variants={itemVariants} className="space-y-8">
                    <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-brand-red-rose mb-4 bg-brand-red-rose/5 px-4 py-2 rounded-full">
                        Agence digitale à Madagascar • Stratégie & Développement
                    </span>
                    <h1 className="text-[clamp(3rem,10vw,6.5rem)] font-serif font-bold leading-[0.9] tracking-tighter text-brand-primary mb-8">
                        Agilité techno—<br className="hidden md:block" />
                        <span className="text-brand-dark-blue">logique.</span>
                    </h1>
                </motion.div>

                <motion.p 
                    variants={itemVariants}
                    className="text-lg lg:text-xl text-brand-gray max-w-3xl mx-auto font-medium leading-relaxed uppercase tracking-wide"
                >
                    Partenaire digital des entrepreneurs et bras droit technique des agences. Nous concevons des solutions sur-mesure pour propulser votre croissance, en direct ou en sous-traitance.
                </motion.p>

                <motion.div 
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8"
                >
                    <Link
                        href="/portfolio"
                        className="btn-primary group py-5 px-10 text-sm uppercase tracking-widest shadow-2xl shadow-brand-primary/20"
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
            </motion.div>

            {/* Stats/Social Proof inspired by agency layouts */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
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

