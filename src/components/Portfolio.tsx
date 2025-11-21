
import { ExternalLink, Code, Palette, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: "RunRobe",
      category: "E-commerce + Branding",
      description: "Boutique physique et e-commerce spécialisée dans les robes de mariée et chaussures de sport. Site fluide avec branding moderne.",
      image: "https://images.unsplash.com/photo-1594736797933-d0f04c6d60bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["E-commerce", "Branding", "Mariage"],
      icon: Code,
      link: "https://web.facebook.com/profile.php?id=61575170874697"
    },
    {
      title: "Girl's Touch Erica",
      category: "Soins Bio + Branding",
      description: "Entreprise spécialisée dans les soins et traitements du visage avec des produits bio et naturels. Image de marque authentique et naturelle.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Soins Bio", "Beauté", "Naturel"],
      icon: Palette,
      link: "https://web.facebook.com/profile.php?id=100086552594108"
    },
    {
      title: "L'Homme Imparfait",
      category: "Communauté + Coaching",
      description: "Page et communauté axées sur le bien-être, le coaching et la motivation masculine. Présence en ligne structurée.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Coaching", "Bien-être", "Communauté"],
      icon: TrendingUp,
      link: "https://web.facebook.com/profile.php?id=61567011397577"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-bitter font-bold text-3xl md:text-4xl text-tech-primary dark:text-tech-light mb-4">
            Nos Réalisations
          </h2>
          <p className="font-montserrat text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4">
            Quelques projets que nous avons fait fleurir avec nos clients.
          </p>
          <p className="font-montserrat text-sm text-gray-500 italic">
            D'autres projets viendront bientôt compléter ce portfolio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-tech-light rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
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

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-tech-accent/10 text-tech-accent px-3 py-1 rounded-full text-xs font-montserrat font-medium">
                    {project.category}
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

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-tech-accent font-montserrat font-medium text-sm hover:gap-3 transition-all duration-300"
                >
                  Voir le projet
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-tech-primary hover:bg-tech-primary/90 text-white font-montserrat font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            Discuter de votre projet
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
