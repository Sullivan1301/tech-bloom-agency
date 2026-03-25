"use client";

export default function B2BChallenges() {
    const challenges = [
        {
            title: "Délais serrés impossibles à tenir",
            description: "Projets urgents, clients pressés, équipes saturées - vous sacrifiez la qualité ou perdez des clients.",
            icon: "⏱️"
        },
        {
            title: "Marges en compression constante",
            description: "Prix au plus bas, concurrents agressifs, coûts de recrutement élevés - votre rentabilité s'effondre.",
            icon: "📉"
        },
        {
            title: "Difficultés de recrutement",
            description: "Talent rare, salaires élevés, intégration longue - votre équipe manque de compétences clés.",
            icon: "👥"
        },
        {
            title: "Pertes de compétitivité",
            description: "Technos émergentes, nouvelles méthodes, formation continue - vous peinez à suivre l'évolution.",
            icon: "🚀"
        }
    ];

    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-sans font-bold text-brand-dark mb-6">
                        Les défis que connaissent toutes les agences web
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Vous n'êtes pas seul dans cette galère. Ces problématiques impactent la croissance 
                        et la pérennité de votre activité.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {challenges.map((challenge, index) => (
                        <div 
                            key={index}
                            className="bg-brand-light p-8 rounded-agency border border-gray-100 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="text-4xl mb-4">{challenge.icon}</div>
                            <h3 className="text-2xl font-sans font-bold text-brand-dark mb-4">
                                {challenge.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {challenge.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="bg-red-50 border border-red-200 rounded-agency p-8 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-sans font-bold text-red-800 mb-4">
                            Résultat : Une activité bloquée
                        </h3>
                        <p className="text-red-700 text-lg">
                            Vous refusez des projets lucratifs, vos clients sont mécontents, 
                            votre équipe est stressée, et votre réputation en prend un coup.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}