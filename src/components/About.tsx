import { Target, Users, Lightbulb } from "lucide-react";
import CTASection from "@/components/CTASection";
import { SITE_CONFIG } from "@/lib/constants";

export default function About() {
    return (
        <>
            <section className="pt-32 pb-20 bg-gradient-to-br from-brand-light to-white">
                    <div className="max-w-4xl mx-auto px-6 lg:px-8">
                        <h1 className="text-5xl lg:text-6xl font-sans font-bold text-brand-dark mb-8 text-center">
                            À propos de Tech Bloom Agency
                        </h1>
                        <p className="text-2xl text-brand-gray font-medium text-center mb-8">
                            {SITE_CONFIG.taglineFr}
                        </p>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-6 lg:px-8">
                        <div className="prose prose-lg max-w-none">
                            <h2 className="text-3xl font-sans font-bold text-brand-dark mb-6">
                                Notre Histoire
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Tech Bloom Agency est née d'une vision simple : rendre le digital accessible
                                aux PME et entrepreneurs de Madagascar et d'Afrique francophone. Notre nom évoque
                                la floraison des idées grâce à la technologie, symbolisant la croissance et le
                                développement de nos clients.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-12">
                                Fondée par {SITE_CONFIG.founder}, notre agence combine expertise technique,
                                créativité et accompagnement humain pour faire réussir vos projets digitaux.
                                Nous croyons que chaque entreprise mérite une présence digitale professionnelle
                                et performante, adaptée à ses besoins réels.
                            </p>

                            <h2 className="text-3xl font-sans font-bold text-brand-dark mb-6">
                                Notre Mission
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-12">
                                Faire fleurir les idées de nos clients grâce à la technologie, en offrant des
                                solutions modernes, accessibles et adaptées. Nous accompagnons les PME et
                                entrepreneurs dans leur transformation digitale avec des outils concrets et
                                mesurables.
                            </p>

                            <h2 className="text-3xl font-sans font-bold text-brand-dark mb-6">
                                Notre Vision
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-12">
                                Devenir une référence en solutions digitales pour les PME à Madagascar et en
                                Afrique francophone, en utilisant l'IA et les technologies modernes comme leviers
                                de croissance. Nous voulons être le partenaire de confiance qui propulse votre
                                entreprise vers le succès digital.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-background">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <h2 className="text-4xl font-sans font-bold text-brand-dark mb-12 text-center">
                            Nos Valeurs
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-agency p-8 shadow-lg text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-agency flex items-center justify-center mx-auto mb-6">
                                    <Lightbulb size={32} className="text-white" />
                                </div>
                                <h3 className="font-sans font-bold text-xl text-brand-dark mb-4">
                                    Innovation
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Utilisation des technologies modernes et de l'IA pour créer des solutions
                                    performantes et adaptées.
                                </p>
                            </div>

                            <div className="bg-white rounded-agency p-8 shadow-lg text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-agency flex items-center justify-center mx-auto mb-6">
                                    <Target size={32} className="text-white" />
                                </div>
                                <h3 className="font-sans font-bold text-xl text-brand-dark mb-4">
                                    Performance
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Orientation résultats et croissance tangible pour tous nos projets.
                                    Nous mesurons notre succès au vôtre.
                                </p>
                            </div>

                            <div className="bg-white rounded-agency p-8 shadow-lg text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-agency flex items-center justify-center mx-auto mb-6">
                                    <Users size={32} className="text-white" />
                                </div>
                                <h3 className="font-sans font-bold text-xl text-brand-dark mb-4">
                                    Accompagnement
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Support personnalisé et à l'écoute pour réussir votre transformation digitale
                                    à chaque étape.
                                </p>
                            </div>
                        </div>
                    </div>
            </section>/
                <CTASection />
        </>
    );
}