
import { ExternalLink, Code, Palette, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Mode",
      category: "Site Web + Branding",
      description: "Boutique en ligne moderne avec identité visuelle complète pour une marque de mode éthique.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["E-commerce", "Branding", "SEO"],
      icon: Code
    },
    {
      title: "Restaurant Gastronomique",
      category: "Site Vitrine + Marketing",
      description: "Site vitrine élégant avec système de réservation et stratégie de présence digitale.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Vitrine", "Réservation", "Social Media"],
      icon: Palette
    },
    {
      title: "Startup Tech",
      category: "Application Web + Growth",
      description: "Plateforme SaaS complète avec stratégie de croissance et acquisition client.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["SaaS", "Growth Hacking", "Analytics"],
      icon: TrendingUp
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-bitter font-bold text-3xl md:text-4xl text-tech-primary mb-4">
            Nos Réalisations
          </h2>
          <p className="font-montserrat text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez quelques-uns de nos projets qui illustrent notre expertise et notre approche créative.
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
                
                <button className="flex items-center gap-2 text-tech-accent font-montserrat font-medium text-sm hover:gap-3 transition-all duration-300">
                  Voir le projet
                  <ExternalLink size={14} />
                </button>
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
