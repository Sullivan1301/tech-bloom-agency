import { Search, Palette, Code, Check } from "lucide-react";
import CTASection from "@/components/sections/shared/CTASection";

const PILLARS = [
    {
        title: "Stratégie Digitale",
        description: "Nous définissons votre positionnement, analysons votre marché et concevons la roadmap de votre succès numérique.",
        icon: Search,
        features: ["Audit & Conseil", "Social Media Strategy", "SEO & Visibilité", "Data & Analytics"]
    },
    {
        title: "Conception UX/UI",
        description: "Nous créons des interfaces intuitives et esthétiques, centrées sur l'utilisateur pour maximiser l'engagement.",
        icon: Palette,
        features: ["User Research", "Wireframing", "Design System", "Micro-interactions"]
    },
    {
        title: "Développement",
        description: "Nous développons des solutions techniques robustes et évolutives avec les meilleures technologies actuelles.",
        icon: Code,
        features: ["Next.js & React", "E-commerce", "APIs & Headless CMS", "Performance Web"]
    }
];

export default function Services() {
    return (
        <div className="bg-white">
            <section className="pt-40 pb-24 border-b border-brand-light-gray">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-red-rose mb-6 block">
                        Expertises
                    </span>
                    <h1 className="text-5xl lg:text-8xl font-serif font-bold text-brand-primary leading-[0.9] tracking-tighter mb-12">
                        Nos piliers <br />
                        <span className="text-brand-dark-blue opacity-50">d'excellence.</span>
                    </h1>
                    <p className="text-xl text-brand-gray max-w-3xl font-medium leading-relaxed uppercase tracking-wide">
                        De la vision à l'exécution technique, nous activons les leviers 
                        digitaux pour transformer vos idées en produits performants.
                    </p>
                </div>
            </section>

            <section className="py-32">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-3 gap-16">
                        {PILLARS.map((pillar, index) => (
                            <div key={index} className="space-y-10 group">
                                <div className="w-20 h-20 bg-brand-bg-soft rounded-agency-md flex items-center justify-center transition-colors group-hover:bg-brand-pale-pink">
                                    <pillar.icon size={36} className="text-brand-primary" />
                                </div>
                                <div className="space-y-6">
                                    <h2 className="text-3xl font-serif font-bold text-brand-primary">
                                        {pillar.title}
                                    </h2>
                                    <p className="text-brand-gray font-medium leading-relaxed text-sm uppercase tracking-wide">
                                        {pillar.description}
                                    </p>
                                    <ul className="space-y-4 pt-4">
                                        {pillar.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center space-x-3 text-xs font-bold uppercase tracking-widest text-brand-dark-blue">
                                                <div className="w-1.5 h-1.5 bg-brand-red-rose rounded-full" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
}