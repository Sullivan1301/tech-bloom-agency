import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ExternalLink, Code, Palette, TrendingUp, Users, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('Tous');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Nos Réalisations - Tech Bloom Agency";
  }, []);

  const projects = [
    {
      title: "RunRobe Tamatave",
      category: "Sites Web",
      subcategory: "E-commerce + Branding",
      description: "Boutique physique et e-commerce spécialisée dans les robes de mariée et chaussures de sport. Site fluide avec branding moderne et identité visuelle forte.",
      image: "https://images.unsplash.com/photo-1594736797933-d0f04c6d60bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["E-commerce", "Branding", "Mariage", "Sport"],
      icon: Code,
      link: "https://web.facebook.com/profile.php?id=61575170874697",
      results: "Premiers clients acquis grâce au site et au branding moderne"
    },
    {
      title: "Girl's Touch Erica",
      category: "Marketing",
      subcategory: "Soins Bio + Branding",
      description: "Entreprise spécialisée dans les soins et traitements du visage avec des produits bio et naturels. Image de marque authentique et naturelle avec stratégie marketing digitale.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Soins Bio", "Beauté", "Naturel", "Marketing Digital"],
      icon: TrendingUp,
      link: "https://web.facebook.com/profile.php?id=100086552594108",
      results: "Image de marque authentique et croissance de la communauté"
    },
    {
      title: "L'Homme Imparfait",
      category: "Community Management",
      subcategory: "Communauté + Coaching",
      description: "Page et communauté axées sur le bien-être, le coaching et la motivation masculine. Présence en ligne structurée avec stratégie de contenu engageante.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Coaching", "Bien-être", "Communauté", "CM"],
      icon: Users,
      link: "https://web.facebook.com/profile.php?id=61567011397577",
      results: "Communauté structurée et croissance de l'engagement"
    }
  ];

  const categories = ['Tous', 'Sites Web', 'Branding', 'Marketing', 'Community Management'];

  const filteredProjects = activeFilter === 'Tous' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-tech-light dark:from-gray-900 via-white dark:via-gray-800 to-tech-light/50 dark:to-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto animate-fade-in">
              <h1 className="font-bitter font-bold text-4xl md:text-5xl lg:text-6xl text-tech-primary dark:text-tech-light mb-6">
                Nos Réalisations
              </h1>
              <p className="font-montserrat text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Découvrez nos projets qui ont fait fleurir des idées digitales. 
                Chaque réalisation est unique et adaptée aux besoins de nos clients.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  variant={activeFilter === category ? "default" : "outline"}
                  className={`font-montserrat font-medium rounded-full transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-tech-accent hover:bg-tech-accent/90 text-white'
                      : 'border-tech-primary dark:border-tech-light text-tech-primary dark:text-tech-light hover:bg-tech-primary dark:hover:bg-tech-accent hover:text-white'
                  }`}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-montserrat text-lg text-gray-600">
                  Aucun projet trouvé dans cette catégorie.
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden border-2 border-gray-100"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-tech-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                        <project.icon className="w-5 h-5 text-tech-primary" />
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-tech-accent/10 text-tech-accent px-3 py-1 rounded-full text-xs font-montserrat font-medium">
                          {project.subcategory}
                        </span>
                      </div>

                      <h3 className="font-bitter font-semibold text-xl text-tech-primary mb-3">
                        {project.title}
                      </h3>

                      <p className="font-montserrat text-gray-600 mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, idx) => (
                          <span key={idx} className="bg-tech-secondary/10 text-tech-secondary px-2 py-1 rounded text-xs font-montserrat">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {project.results && (
                        <div className="mb-4 p-3 bg-tech-light rounded-lg">
                          <p className="font-montserrat text-xs text-tech-primary font-semibold mb-1">
                            Résultats :
                          </p>
                          <p className="font-montserrat text-xs text-gray-600">
                            {project.results}
                          </p>
                        </div>
                      )}

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-tech-accent font-montserrat font-medium text-sm hover:gap-3 transition-all duration-300"
                      >
                        Voir le projet
                        <ExternalLink size={14} />
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-tech-primary to-tech-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-bitter font-bold text-3xl md:text-4xl text-white mb-6">
                Votre projet sera le prochain ?
              </h2>
              <p className="font-montserrat text-lg text-white/90 mb-8">
                Discutons de votre projet et créons ensemble quelque chose d'exceptionnel qui fera fleurir vos idées digitales.
              </p>
              <Link to="/contact">
                <Button className="bg-tech-accent hover:bg-tech-accent/90 text-white font-montserrat font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                  Discuter de votre projet
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;

