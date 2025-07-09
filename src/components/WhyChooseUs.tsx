
import { Heart, Lightbulb, Smartphone, Target } from 'lucide-react';

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: Heart,
      title: "Accompagnement humain",
      description: "Une relation de proximité avec un suivi personnalisé tout au long de votre projet. Pas de robot, que de l'humain."
    },
    {
      icon: Lightbulb,
      title: "Expertise tech & marketing",
      description: "Une équipe pluridisciplinaire maîtrisant les dernières technologies et tendances du marketing digital."
    },
    {
      icon: Smartphone,
      title: "Designs modernes",
      description: "Des créations contemporaines, responsives et optimisées pour offrir une expérience utilisateur exceptionnelle."
    },
    {
      icon: Target,
      title: "Vision stratégique",
      description: "Une approche long terme qui anticipe les évolutions de votre secteur pour des solutions pérennes."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-tech-primary to-tech-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-bitter font-bold text-3xl md:text-4xl text-white mb-4">
            Pourquoi nous choisir ?
          </h2>
          <p className="font-montserrat text-lg text-white/90 max-w-2xl mx-auto">
            Notre approche unique combine expertise technique, créativité et accompagnement personnalisé pour faire grandir votre projet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                <div className="bg-tech-accent rounded-xl p-4 w-fit mx-auto mb-4">
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="font-bitter font-semibold text-xl text-white mb-3">
                  {advantage.title}
                </h3>
                
                <p className="font-montserrat text-white/90 text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
