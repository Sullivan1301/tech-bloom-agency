"use client";

import { ArrowRight } from "lucide-react";

export default function B2BHero() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <div className="inline-block bg-accent/10 text-accent px-6 py-2 rounded-full text-sm font-medium mb-6">
                    Partenariat B2B
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bitter font-bold text-primary mb-8 leading-tight">
                    Agence web débordée ?<br />
                    <span className="text-accent">Déléguez sans compromettre la qualité</span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                    Augmentez votre capacité de production, respectez vos délais et maintenez 
                    vos marges grâce à notre expertise en white-label et développement sur mesure.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-accent text-white px-8 py-4 rounded-full font-sans font-medium hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 group">
                        Découvrir nos solutions
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="border-2 border-primary text-primary px-8 py-4 rounded-full font-sans font-medium hover:bg-primary hover:text-white transition-all duration-300">
                        Voir nos réalisations
                    </button>
                </div>
            </div>
        </section>
    );
}