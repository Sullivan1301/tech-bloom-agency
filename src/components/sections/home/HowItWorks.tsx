const STEPS = [
    {
        title: "Stratégie & Audit",
        description: "Analyse de vos besoins et définition des objectifs business pour une roadmap claire.",
        step: "01",
    },
    {
        title: "UX & Personas",
        description: "Recherche utilisateurs et création de parcours fluides centrés sur l'expérience humaine.",
        step: "02",
    },
    {
        title: "Wireframing",
        description: "Conception de l'architecture et des prototypes interactifs pour valider les concepts.",
        step: "03",
    },
    {
        title: "Tests & Itérations",
        description: "Évaluation continue et ajustements pour garantir la performance et l'ergonomie.",
        step: "04",
    },
    {
        title: "Direction Artistique",
        description: "Création d'une identité visuelle unique et d'interfaces UI haute-fidélité.",
        step: "05",
    },
];

export default function HowItWorks() {
    return (
        <section id="methode" className="py-32 bg-white">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
                <div className="mb-24 space-y-4">
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-red-rose">
                        Notre Méthode
                    </span>
                    <h2 className="text-4xl lg:text-7xl font-serif font-bold tracking-tight text-brand-primary leading-[0.9]">
                        Agilité techno—<br />
                        <span className="text-brand-dark-blue opacity-50">logique.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24">
                    {STEPS.map((step, index) => (
                        <div key={index} className="group relative space-y-8">
                            <span className="text-8xl font-serif font-bold text-brand-pale-pink/40 absolute -top-12 -left-4 transition-colors group-hover:text-brand-red-rose/20">
                                {step.step}
                            </span>
                            <div className="relative space-y-4 pt-4">
                                <h3 className="text-2xl font-serif font-bold text-brand-primary">{step.title}</h3>
                                <p className="text-brand-gray font-medium leading-relaxed uppercase text-sm tracking-wide">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
