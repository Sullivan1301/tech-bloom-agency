import { Quote, Star } from "lucide-react";

const TESTIMONIALS = [
    {
        name: "Sophie Dupont",
        role: "Gérante - L'Atelier Bio",
        content: "Tech Bloom Agency a su comprendre mes besoins spécifiques d'entrepreneure. Mon site web est magnifique et mes ventes ont décollé !",
        stars: 5,
        location: "Paris, France",
    },
    {
        name: "Thomas Leblanc",
        role: "Co-fondateur - TechHub",
        content: "Une collaboration fluide et efficace. L'expertise digitale est au rendez-vous, tout comme les résultats concrets.",
        stars: 5,
        location: "Lyon, France",
    },
    {
        name: "Marc Rakotoharisoa",
        role: "Directeur - Horizon Madagascar",
        content: "Le community management a transformé notre présence en ligne. Un accompagnement premium, humain et très professionnel.",
        stars: 5,
        location: "Antananarivo, Madagascar",
    }
];

export default function Testimonials() {
    return (
        <section id="clients" className="py-32 bg-brand-bg-soft">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
                <div className="mb-20 space-y-6">
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-red-rose">Confiance</span>
                    <h2 className="text-4xl lg:text-6xl font-serif font-bold text-brand-primary leading-[0.9]">
                        Ils nous font <br />
                        <span className="text-brand-dark-blue opacity-50">évoluer.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <div key={index} className="space-y-8 group">
                            <Quote className="text-brand-red-rose opacity-20 w-12 h-12 transition-opacity group-hover:opacity-40" />
                            <p className="text-brand-dark-blue text-lg leading-relaxed font-serif italic">
                                "{testimonial.content}"
                            </p>
                            <div className="pt-4 border-t border-brand-light-gray space-y-1">
                                <p className="font-bold text-brand-primary uppercase tracking-widest text-sm">{testimonial.name}</p>
                                <p className="text-[10px] font-bold text-brand-gray uppercase tracking-[0.2em]">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
