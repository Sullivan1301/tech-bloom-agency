
import { Monitor, Palette, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Création de site web",
      description: "Sites web modernes, responsives et optimisés pour tous les appareils. De la vitrine e-commerce à l'application web complexe.",
      features: ["Design responsive", "SEO optimisé", "Performance maximale", "CMS intuitif"]
    },
    {
      icon: Palette,
      title: "Branding & Identité visuelle",
      description: "Création d'identités visuelles fortes et mémorables qui reflètent parfaitement l'essence de votre marque.",
      features: ["Logo & charte graphique", "Support print & digital", "Cohérence visuelle", "Guide de marque"]
    },
    {
      icon: TrendingUp,
      title: "Marketing Digital",
      description: "Stratégies marketing personnalisées pour développer votre présence en ligne et atteindre vos objectifs commerciaux.",
      features: ["SEO/SEA", "Réseaux sociaux", "Email marketing", "Analytics & reporting"]
    },
    {
      icon: Users,
      title: "Community Management",
      description: "Gestion professionnelle de vos réseaux sociaux pour créer une communauté engagée autour de votre marque.",
      features: ["Stratégie de contenu", "Animation communautaire", "Veille concurrentielle", "Reporting détaillé"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-bitter font-bold text-3xl md:text-4xl text-tech-primary mb-4">
            Nos Services
          </h2>
          <p className="font-montserrat text-lg text-gray-600 max-w-2xl mx-auto">
            Des solutions complètes pour accompagner votre transformation digitale et faire éclore votre potentiel en ligne.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-tech-light rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-br from-tech-primary to-tech-secondary rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="font-bitter font-semibold text-xl text-tech-primary mb-3">
                {service.title}
              </h3>
              
              <p className="font-montserrat text-gray-600 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm font-montserrat text-tech-secondary">
                    <div className="w-1.5 h-1.5 bg-tech-accent rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-tech-accent hover:bg-tech-accent/90 text-white font-montserrat font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            Voir nos offres détaillées
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
