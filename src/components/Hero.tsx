import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-beige via-white to-beige/50 -z-10" />

            <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-light/10 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-accent/20 shadow-sm">
                            <Sparkles size={16} className="text-accent" />
                            <span className="text-sm font-sans font-medium text-primary">
                Agence digitale innovante
              </span>
                        </div>

                        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bitter font-bold text-primary leading-tight">
                            {SITE_CONFIG.name}
                        </h1>

                        <p className="text-2xl lg:text-3xl text-secondary font-medium">
                            {SITE_CONFIG.taglineFr}
                        </p>

                        <p className="text-lg text-darktext leading-relaxed max-w-xl">
                            Nous accompagnons les PME et entrepreneurs dans leur transformation
                            digitale grâce à des solutions modernes, accessibles et adaptées à vos
                            besoins.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/contact"
                                className="group inline-flex items-center justify-center space-x-2 bg-secondary text-accent px-8 py-4 rounded-full font-sans font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                <span>Demander un devis gratuit</span>
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link
                                href="/services"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-sans font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                            >
                                Découvrir nos services
                            </Link>
                        </div>
                    </div>

                    <div className="relative lg:h-150 flex items-center justify-center">
                        <div className="relative w-full max-w-lg">
                            <div className="absolute inset-0 bg-linear-to-br from-primary to-accent-light rounded-3xl transform rotate-6 opacity-20 blur-xl" />

                            <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-BorderLine">
                                <div className="space-y-6">
                                    <div className="w-20 h-20 bg-linear-to-br from-primary to-accent-light rounded-2xl flex items-center justify-center mx-auto">
                                        <span className="text-white text-3xl font-bold">TBA</span>
                                    </div>

                                    <div className="text-center space-y-2">
                                        <p className="font-bitter font-semibold text-2xl text-primary">
                                            Innovation
                                        </p>
                                        <p className="text-darktext">Technologies modernes & IA</p>
                                    </div>

                                    <div className="grid grid-cols-3 gap-4 pt-4">
                                        <div className="bg-beige p-4 rounded-xl text-center">
                                            <p className="font-bitter font-bold text-primary text-lg">Web</p>
                                        </div>
                                        <div className="bg-beige p-4 rounded-xl text-center">
                                            <p className="font-bitter font-bold text-primary text-lg">Brand</p>
                                        </div>
                                        <div className="bg-beige p-4 rounded-xl text-center">
                                            <p className="font-bitter font-bold text-primary text-lg">Tech</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
