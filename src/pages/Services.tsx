import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Monitor, Palette, TrendingUp, Users, Wrench, Sparkles, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Nos Services - Tech Bloom Agency";
  }, []);

  const services = [
    {
      icon: Monitor,
      title: "Création de Site Web",
      description: "Sites web modernes, responsives et optimisés pour tous les appareils. De la vitrine e-commerce à l'application web complexe.",
      price: "À partir de 385€",
      features: [
        "Design responsive et moderne",
        "SEO optimisé",
        "Performance maximale",
        "CMS intuitif",
        "Hébergement inclus (première année)",
        "Formation à l'utilisation"
      ],
      color: "from-tech-primary to-tech-secondary"
    },
    {
      icon: Palette,
      title: "Branding & Identité Visuelle",
      description: "Création d'identités visuelles fortes et mémorables qui reflètent parfaitement l'essence de votre marque.",
      price: "À partir de 220€",
      features: [
        "Logo & charte graphique",
        "Support print & digital",
        "Cohérence visuelle",
        "Guide de marque complet",
        "Variations du logo",
        "Palette de couleurs"
      ],
      color: "from-tech-secondary to-tech-accent"
    },
    {
      icon: TrendingUp,
      title: "Marketing Digital",
      description: "Stratégies marketing personnalisées pour développer votre présence en ligne et atteindre vos objectifs commerciaux.",
      price: "À partir de 275€",
      features: [
        "SEO/SEA",
        "Stratégie réseaux sociaux",
        "Email marketing",
        "Analytics & reporting",
        "Campagnes publicitaires",
        "Optimisation conversion"
      ],
      color: "from-tech-accent to-tech-primary"
    },
    {
      icon: Users,
      title: "Community Management",
      description: "Gestion professionnelle de vos réseaux sociaux pour créer une communauté engagée autour de votre marque.",
      price: "À partir de 165€",
      features: [
        "Stratégie de contenu",
        "Animation communautaire",
        "Veille concurrentielle",
        "Reporting détaillé mensuel",
        "Gestion multi-plateformes",
        "Création de contenu visuel"
      ],
      color: "from-tech-primary to-tech-accent"
    },
    {
      icon: Sparkles,
      title: "Accompagnement Digital Personnalisé",
      description: "Un accompagnement sur-mesure pour transformer votre présence digitale et atteindre vos objectifs business.",
      price: "À partir de 440€",
      features: [
        "Audit digital complet",
        "Stratégie personnalisée",
        "Accompagnement sur 6 mois",
        "Formation de votre équipe",
        "Suivi et optimisation continue",
        "Consultation mensuelle"
      ],
      color: "from-tech-secondary to-tech-primary"
    },
    {
      icon: Wrench,
      title: "Maintenance et Support Technique",
      description: "Assurez la pérennité de votre site web avec notre service de maintenance et support technique réactif.",
      price: "À partir de 132€",
      features: [
        "Mises à jour régulières",
        "Sauvegardes automatiques",
        "Support technique réactif",
        "Correction de bugs",
        "Optimisation continue",
        "Monitoring de performance"
      ],
      color: "from-tech-accent to-tech-secondary"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-tech-light via-white to-tech-light/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto animate-fade-in">
              <h1 className="font-bitter font-bold text-4xl md:text-5xl lg:text-6xl text-tech-primary mb-6">
                Nos Services
              </h1>
              <p className="font-montserrat text-xl text-gray-600 mb-8 leading-relaxed">
                Des solutions digitales sur mesure pour chaque besoin. De la création de site web au marketing digital, 
                nous accompagnons votre transformation numérique.
              </p>
              <Link to="/contact">
                <Button className="bg-tech-accent hover:bg-tech-accent/90 text-white font-montserrat font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-gray-100"
                >
                  <CardHeader>
                    <div className={`bg-gradient-to-br ${service.color} rounded-xl p-4 w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="font-bitter font-semibold text-2xl text-tech-primary mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="font-montserrat text-gray-600 mb-4">
                      {service.description}
                    </CardDescription>
                    <div className="font-bitter font-bold text-xl text-tech-accent mb-4">
                      {service.price}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-tech-accent flex-shrink-0 mt-0.5" />
                          <span className="font-montserrat text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="block">
                      <Button 
                        variant="outline"
                        className="w-full border-2 border-tech-primary text-tech-primary hover:bg-tech-primary hover:text-white font-montserrat font-semibold rounded-full transition-all duration-300"
                      >
                        Commander ce service
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-tech-primary to-tech-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-bitter font-bold text-3xl md:text-4xl text-white mb-6">
                Besoin d'une solution sur mesure ?
              </h2>
              <p className="font-montserrat text-lg text-white/90 mb-8">
                Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé adapté à vos besoins et votre budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="bg-tech-accent hover:bg-tech-accent/90 text-white font-montserrat font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                    Demander un devis
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/tarifs">
                  <Button 
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-tech-primary font-montserrat font-semibold px-8 py-3 rounded-full transition-all duration-300"
                  >
                    Voir nos tarifs
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Services;

