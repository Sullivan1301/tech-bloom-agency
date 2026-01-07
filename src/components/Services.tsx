import Link from "next/link";
import { Code, Palette, TrendingUp, Users, Shield, Search, ArrowRight, LucideIcon } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
    Code,
    Palette,
    TrendingUp,
    Users,
    Shield,
    ArrowRight,
};

export default function Services() {
    return (
        <section className="py-20 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl lg:text-5xl font-heading font-bold text-brand-blue mb-6">
                        Nos Services
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Des solutions digitales complètes pour accompagner votre croissance et
                        développer votre présence en ligne.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service) => {
                        const Icon = iconMap[service.icon];
                        return (
                            <div
                                key={service.id}
                                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-brand-red-cherry hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-brand-blue to-brand-blue-petrol rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {Icon && <Icon size={28} className="text-white" />}
                                </div>

                                <h3 className="font-heading font-bold text-xl text-brand-blue mb-3">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                <ul className="space-y-2 mb-6">
                                    {service.features.slice(0, 3).map((feature, index) => (
                                        <li key={index} className="flex items-center text-sm text-gray-600">
                                            <span className="w-1.5 h-1.5 bg-brand-red-cherry rounded-full mr-2" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/services"
                                    className="inline-flex items-center space-x-2 text-brand-red-cherry font-heading font-medium group-hover:underline"
                                >
                                    <span>En savoir plus</span>
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/services"
                        className="inline-flex items-center justify-center space-x-2 bg-brand-blue text-white px-8 py-4 rounded-full font-heading font-semibold hover:bg-brand-blue-dark transition-colors duration-300"
                    >
                        <span>Voir tous les services</span>
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
