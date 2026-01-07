import { Lightbulb, Target, Heart } from "lucide-react";
import { VALUES } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Lightbulb,
  Target,
  Heart,
};

export default function ValuesSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-brand-beige to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-brand-blue mb-6">
            Pourquoi Tech Bloom Agency ?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Nous combinons expertise technique, créativité et accompagnement humain
            pour faire réussir vos projets digitaux.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {VALUES.map((value, index) => {
            const Icon = iconMap[value.icon];
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-brand-red-cherry to-brand-red-rose rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {Icon && <Icon size={32} className="text-white" />}
                </div>
                <h3 className="font-heading font-bold text-xl text-brand-blue mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
