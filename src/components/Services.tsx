
import { Monitor, Palette, TrendingUp, Users, Sparkles, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FlowerIcon from '@/components/FlowerIcon';

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
    },
    {
      icon: Sparkles,
      title: "Accompagnement Digital",
      description: "Un accompagnement sur-mesure pour transformer votre présence digitale et atteindre vos objectifs business.",
      features: ["Audit digital", "Stratégie personnalisée", "Formation équipe", "Suivi continu"]
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description: "Assurez la pérennité de votre site web avec notre service de maintenance et support technique réactif.",
      features: ["Mises à jour", "Sauvegardes", "Support réactif", "Optimisation"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-bitter font-bold text-3xl md:text-4xl text-tech-primary dark:text-tech-light mb-4">
            Nos Services
          </h2>
          <p className="font-montserrat text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Des solutions complètes pour accompagner votre transformation digitale et faire éclore votre potentiel en ligne.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="group bg-tech-light dark:bg-gray-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Petite fleur qui fleurit au survol */}
              <motion.div
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0, rotate: 0 }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <FlowerIcon size={24} animated={true} className="text-tech-accent" />
              </motion.div>
              
              <div className="bg-gradient-to-br from-tech-primary to-tech-secondary rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
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
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button 
              className="bg-tech-accent hover:bg-tech-accent/90 text-white font-montserrat font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              Voir nos offres détaillées
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
