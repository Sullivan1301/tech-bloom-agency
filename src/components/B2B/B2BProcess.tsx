"use client";

export default function B2BProcess() {
    const steps = [
        {
            number: "01",
            title: "Brief détaillé",
            description: "Vous nous transmettez le cahier des charges, les maquettes, les spécifications techniques et les délais. Nous analysons tout en 24h.",
            icon: "📝"
        },
        {
            number: "02",
            title: "Devis & planning",
            description: "Nous vous proposons un devis clair avec planning de livraison. Pas de surprise, tout est transparent dès le départ.",
            icon: "📊"
        },
        {
            number: "03",
            title: "Développement",
            description: "Notre équipe développe selon vos standards, avec des livraisons intermédiaires pour validation. Vous restez maître de l'avancement.",
            icon: "💻"
        },
        {
            number: "04",
            title: "Livraison finale",
            description: "Code source complet, documentation technique, accès admin. Tout est livré prêt à l'emploi sous votre marque.",
            icon: "📦"
        },
        {
            number: "05",
            title: "Facturation",
            description: "Paiement à la livraison satisfaisante. Conditions de paiement flexibles selon vos habitudes.",
            icon: "💳"
        }
    ];

    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-sans font-bold text-brand-dark mb-6">
                        Notre process de collaboration
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Simple, transparent et efficace. Rien de plus, rien de moins.
                    </p>
                </div>

                <div className="relative">
                    {/* Ligne de progression */}
                    <div className="absolute left-8 top-16 bottom-16 w-1 bg-gray-200 md:left-1/2 md:-translate-x-1/2"></div>
                    
                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <div 
                                key={index}
                                className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Numéro */}
                                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-brand-blue text-white flex items-center justify-center text-xl font-bold z-10">
                                    {step.number}
                                </div>
                                
                                {/* Contenu */}
                                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                                    <div className="bg-brand-light p-8 rounded-agency border border-gray-200 hover:shadow-lg transition-all duration-300">
                                        <div className="text-4xl mb-4">{step.icon}</div>
                                        <h3 className="text-2xl font-sans font-bold text-brand-dark mb-4">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <div className="bg-brand-dark/5 rounded-agency p-8 border border-brand-dark/10">
                        <h3 className="text-2xl font-sans font-bold text-brand-dark mb-4">
                            Notre engagement
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6 mt-6">
                            <div className="text-center">
                                <div className="text-3xl mb-2">🔒</div>
                                <h4 className="font-bold text-gray-800 mb-2">Confidentialité absolue</h4>
                                <p className="text-gray-600 text-sm">NDAs et protection de vos données</p>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl mb-2">⏱️</div>
                                <h4 className="font-bold text-gray-800 mb-2">Délais respectés</h4>
                                <p className="text-gray-600 text-sm">Clause de pénalité en cas de retard</p>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl mb-2">🔄</div>
                                <h4 className="font-bold text-gray-800 mb-2">Révisions incluses</h4>
                                <p className="text-gray-600 text-sm">Jusqu'à 3 rounds de modifications</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}