
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-tech-light via-white to-tech-light/50 pt-20 flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-tech-accent/10 text-tech-accent px-4 py-2 rounded-full mb-6 font-montserrat font-medium">
              <Sparkles size={16} />
              Agence digitale innovante
            </div>
            
            <h1 className="font-bitter font-bold text-4xl md:text-5xl lg:text-6xl text-tech-primary leading-tight mb-6">
              Tech Bloom
              <span className="block text-tech-secondary">Agency</span>
            </h1>
            
            <p className="font-bitter font-medium text-xl md:text-2xl text-tech-secondary mb-8 leading-relaxed">
              De la stratégie à l'éclosion digitale.
            </p>
            
            <p className="font-montserrat text-lg text-gray-600 mb-8 max-w-lg">
              Nous accompagnons votre entreprise dans sa transformation digitale avec des solutions sur-mesure : 
              création de sites web, branding, marketing digital et stratégie tech personnalisée.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToContact}
                className="bg-tech-accent hover:bg-tech-accent/90 text-white font-montserrat font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Demander un devis gratuit
                <ArrowRight size={18} />
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-tech-primary text-tech-primary hover:bg-tech-primary hover:text-white font-montserrat font-semibold px-8 py-3 rounded-full transition-all duration-300"
              >
                Découvrir nos services
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-tech-primary via-tech-secondary to-tech-accent rounded-3xl transform rotate-6 shadow-2xl"></div>
              <div className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 bg-white rounded-3xl shadow-xl flex items-center justify-center transform -rotate-3">
                <img 
                  src="/lovable-uploads/474b2305-036f-4b7a-b879-3f1a8bd98f47.png" 
                  alt="Tech Bloom Agency" 
                  className="w-32 h-32 md:w-40 md:h-40"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-tech-accent rounded-full animate-bounce delay-1000"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-tech-secondary rounded-full animate-bounce delay-2000"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-tech-primary rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
