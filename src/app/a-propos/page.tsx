import { Metadata } from "next";
import { Target, Users, Lightbulb } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
    title: "À propos - Tech Bloom Agency",
    description: "Tech Bloom Agency est une agence digitale basée à Madagascar, spécialisée dans l'accompagnement des PME dans leur transformation digitale.",
};

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main>
                <section className="pt-32 pb-20 bg-gradient-to-br from-brand-beige to-white">
                    <div className="max-w-4xl mx-auto px-6 lg:px-8">
                        <h1 className="text-5xl lg:text-6xl font-heading font-bold text-brand-blue mb-8 text-center">
                            À propos de Tech Bloom Agency
                        </h1>
                        <p className="text-2xl text-brand-blue-petrol font-medium text-center mb-8">
                            {SITE_CONFIG.taglineFr}
                        </p>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-6 lg:px-8">
                        <div className="prose prose-lg max-w-none">
                            <h2 className="text-3xl font-heading font-bold text-brand-blue mb-6">
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

                            <h2 className="text-3xl font-heading font-bold text-brand-blue mb-6">
                                Notre Mission
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-12">
                                Faire fleurir les idées de nos clients grâce à la technologie, en offrant des
                                solutions modernes, accessibles et adaptées. Nous accompagnons les PME et
                                entrepreneurs dans leur transformation digitale avec des outils concrets et
                                mesurables.
                            </p>

                            <h2 className="text-3xl font-heading font-bold text-brand-blue mb-6">
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

                <section className="py-20 bg-brand-beige">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <h2 className="text-4xl font-heading font-bold text-brand-blue mb-12 text-center">
                            Nos Valeurs
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-blue-petrol rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <Lightbulb size={32} className="text-white" />
                                </div>
                                <h3 className="font-heading font-bold text-xl text-brand-blue mb-4">
                                    Innovation
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Utilisation des technologies modernes et de l'IA pour créer des solutions
                                    performantes et adaptées.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-brand-red-cherry to-brand-red-rose rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <Target size={32} className="text-white" />
                                </div>
                                <h3 className="font-heading font-bold text-xl text-brand-blue mb-4">
                                    Performance
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Orientation résultats et croissance tangible pour tous nos projets.
                                    Nous mesurons notre succès au vôtre.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-petrol to-brand-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <Users size={32} className="text-white" />
                                </div>
                                <h3 className="font-heading font-bold text-xl text-brand-blue mb-4">
                                    Accompagnement
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Support personnalisé et à l'écoute pour réussir votre transformation digitale
                                    à chaque étape.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <CTASection />
            </main>
            <Footer />
        </>
    );
}
