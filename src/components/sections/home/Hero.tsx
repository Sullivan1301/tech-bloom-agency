"use client";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  // Calendly integration
  const openCalendly = () => {
    // @ts-ignore - Calendly widget
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({ url: "https://calendly.com/techbloomagency/appel-decouverte" });
    } else {
      window.open("https://calendly.com/techbloomagency/appel-decouverte", "_blank");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient TBA officiel */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-blue to-teal" />
      
      {/* Pattern overlay subtil */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      {/* Image hero - LCP element - chargement prioritaire */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full hidden lg:block">
        <Image
          src="/hero/agence.webp"
          alt="Tech Bloom Agency - Équipe digitale"
          fill
          priority={true}
          fetchPriority="high"
          className="object-contain opacity-20 mix-blend-overlay"
          sizes="(max-width: 1024px) 0vw, 50vw"
        />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12 text-center space-y-12 py-32"
      >
        <motion.div variants={itemVariants} className="space-y-8">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-white mb-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
          >
            Agence digitale à Madagascar • Stratégie & Développement
          </motion.span>
          
          {/* Titre avec effet typewriter */}
          <motion.h1 
            variants={itemVariants}
            className="text-[clamp(3rem,10vw,6.5rem)] font-heading font-bold leading-[0.9] tracking-tighter text-white mb-8"
          >
            De la stratégie <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue/80">
              à l'éclosion digitale.
            </span>
          </motion.h1>
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto font-body font-medium leading-relaxed"
        >
          Partenaire digital des entrepreneurs et bras droit technique des agences. 
          Nous concevons des solutions sur-mesure pour propulser votre croissance.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
        >
          {/* CTA principal - Rouge TBA - Ouvre Calendly popup */}
          <button
            onClick={openCalendly}
            className="group relative inline-flex items-center justify-center bg-red text-white px-10 py-5 rounded-full font-semibold text-sm uppercase tracking-widest transition-all duration-300 hover:bg-red-hover hover:shadow-2xl hover:scale-105 active:scale-95"
          >
            <span>Réserver un appel gratuit</span>
            <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* CTA secondaire - Outline blanc - Scroll anchor */}
          <Link
            href="#portfolio"
            className="group inline-flex items-center px-10 py-5 border-2 border-white text-white rounded-full font-semibold text-sm uppercase tracking-widest hover:bg-white hover:text-navy transition-all duration-300"
          >
            <span>Voir nos projets</span>
            <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
