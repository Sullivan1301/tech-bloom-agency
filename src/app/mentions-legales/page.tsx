
export default function MentionsLegalesPage() {
    return (
        <div className="bg-beige min-h-screen">
            <main className="py-32 bg-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-10">
                    <div className="space-y-4 text-brand-blue">
                        <h1 className="text-4xl lg:text-5xl font-heading font-bold">Mentions légales</h1>
                        <p className="text-gray-700">
                            Informations légales concernant Tech Bloom Agency, conformément à la réglementation en vigueur.
                        </p>
                    </div>

                    <section className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-heading font-bold text-brand-blue">Éditeur du site</h2>
                            <p className="text-gray-700 mt-2">
                                Tech Bloom Agency<br />
                                Toamasina, Madagascar<br />
                                Email : contact@techbloom.agency
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-heading font-bold text-brand-blue">Responsable de publication</h2>
                            <p className="text-gray-700 mt-2">
                                Joro Sullivan RAKOTONIAINA
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-heading font-bold text-brand-blue">Hébergement</h2>
                            <p className="text-gray-700 mt-2">
                                Hébergé par Vercel, 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-heading font-bold text-brand-blue">Données personnelles</h2>
                            <p className="text-gray-700 mt-2 leading-relaxed">
                                Les données collectées via nos formulaires sont utilisées uniquement pour répondre à vos demandes
                                et ne sont jamais revendues. Vous pouvez exercer vos droits d&apos;accès, de rectification et de suppression
                                en nous contactant à contact@techbloom.agency.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

