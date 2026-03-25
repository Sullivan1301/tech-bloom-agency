"use client";

export default function B2BHero() {
    return (
        <section className="relative min-h-[70vh] bg-white flex flex-col items-center justify-center pt-40 pb-20 overflow-hidden text-brand-dark-blue border-b border-brand-light-gray">
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 -z-10" />

            <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center space-y-12">
                <div className="space-y-8">
                    <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-brand-red-rose mb-4">
                        Partenariat B2B • White Label & Sous-traitance
                    </span>
                    <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-serif font-bold leading-[0.9] tracking-tight text-brand-primary mb-8">
                        Déléguez en toute <br className="hidden md:block" />
                        <span className="text-brand-dark-blue">confiance.</span>
                    </h1>
                </div>

                <p className="text-lg lg:text-xl text-brand-gray max-w-3xl mx-auto font-medium leading-relaxed uppercase tracking-wide">
                    Augmentez votre capacité de production, respectez vos délais et maintenez 
                    vos marges grâce à notre expertise en white-label et développement sur mesure.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
                    <button className="btn-primary group py-5 px-10 text-sm uppercase tracking-widest">
                        Découvrir nos solutions
                    </button>
                    <button className="group flex items-center text-brand-dark-blue font-bold text-sm uppercase tracking-widest hover:text-brand-red-rose transition-colors">
                        Voir nos réalisations
                    </button>
                </div>
            </div>
        </section>
    );
}