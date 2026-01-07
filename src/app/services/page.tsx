import { Metadata } from "next";
import { Code, Palette, TrendingUp, Users, Shield, Search, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Nos Services - Tech Bloom Agency",
    description: "Découvrez nos services : création de sites web, branding, marketing digital, community management et accompagnement tech personnalisé.",
};

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    Code,
    Palette,
    TrendingUp,
    Users,
    Shield,
    Search,
};

export default function ServicesPage() {
    return (
        <>
            <Navbar />
        <main>
            <section className="pt-32 pb-20 bg-gradient-to-br from-brand-beige to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-5xl lg:text-6xl font-heading font-bold text-brand-blue mb-6">
            Nos Services
    </h1>
    <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
        Des solutions digitales complètes et sur mesure pour accompagner votre croissance.
        De la stratégie à la réalisation, nous sommes votre partenaire de confiance.
    </p>
    </div>
    </section>

    <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="space-y-24">
        {SERVICES.map((service, index) => {
                const Icon = iconMap[service.icon];
                const isEven = index % 2 === 0;

                return (
                    <div
                        key={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}
            >
                <div className={isEven ? "" : "lg:order-2"}>
                <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-blue-petrol rounded-2xl flex items-center justify-center mb-6">
                {Icon && <Icon size={32} className="text-white" />}
                </div>
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-blue mb-4">
                    {service.title}
                    </h2>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                    </p>
                    <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                        <Check size={20} className="text-brand-red-cherry mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                            </li>
            ))}
                </ul>
                </div>
                <div className={isEven ? "" : "lg:order-1"}>
                <div className="bg-gradient-to-br from-brand-beige to-brand-blue-petrol/10 rounded-3xl p-12 aspect-square flex items-center justify-center">
                {Icon && <Icon size={120} className="text-brand-blue/20" />}
                </div>
                </div>
                </div>
            );
            })}
        </div>
        </div>
        </section>

        <CTASection />
        </main>
        <Footer />
        </>
);
}
