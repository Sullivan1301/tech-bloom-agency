"use client";

export default function B2BSolution() {
    const solutions = [
        {
            title: "White-label premium",
            description: "Développement invisible de sites web, applications et solutions digitales sous votre marque. Vos clients ne savent même pas que nous existons.",
            features: [
                "Code de qualité professionnelle",
                "Respect des délais impartis",
                "Support technique inclus",
                "Documentation complète"
            ],
            icon: "🏷️"
        },
        {
            title: "Tarifs compétitifs",
            description: "Des prix 40-60% inférieurs à vos coûts internes, sans compromis sur la qualité. Marges préservées, rentabilité optimisée.",
            features: [
                "Forfaits adaptés à vos volumes",
                "Tarification transparente",
                "Aucun frais caché",
                "Paiement à la livraison"
            ],
            icon: "💰"
        },
        {
            title: "Qualité garantie",
            description: "Standards d'agence, processus rigoureux, tests approfondis. Chaque projet est validé par notre QA avant livraison.",
            features: [
                "Code review systématique",
                "Tests fonctionnels complets",
                "Performance optimisée",
                "Responsive design garanti"
            ],
            icon: "✅"
        }
    ];

    return (
        <section className="py-20 px-6 bg-gradient-to-br from-accent/5 to-primary/5">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-block bg-accent text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
                        NOTRE SOLUTION
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bitter font-bold text-primary mb-6">
                        Pourquoi nous sommes votre partenaire idéal
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Nous résolvons vos problèmes tout en renforçant votre position sur le marché.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {solutions.map((solution, index) => (
                        <div 
                            key={index}
                            className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="text-5xl mb-6">{solution.icon}</div>
                            <h3 className="text-2xl font-bitter font-bold text-primary mb-4">
                                {solution.title}
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {solution.description}
                            </p>
                            <ul className="space-y-2">
                                {solution.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span className="text-accent mt-1">✓</span>
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="bg-white rounded-2xl p-8 border border-gray-200">
                    <div className="text-center">
                        <h3 className="text-2xl font-bitter font-bold text-primary mb-4">
                            Le résultat ? Une agence démultipliée
                        </h3>
                        <div className="grid md:grid-cols-3 gap-8 mt-8">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-accent mb-2">+150%</div>
                                <p className="text-gray-600">Capacité de production</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-accent mb-2">+40%</div>
                                <p className="text-gray-600">Marges sur projets</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-accent mb-2">0</div>
                                <p className="text-gray-600">Stress de recrutement</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}