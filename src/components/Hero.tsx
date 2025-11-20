
import { ArrowRight, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Flower3D from '@/components/Flower3D';
import FlowerParticles from '@/components/FlowerParticles';
import FlowerButton from '@/components/FlowerButton';

const Hero = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <section id="hero" className="min-h-screen bg-gradient-to-br from-tech-light via-white to-tech-light/50 pt-20 flex items-center relative overflow-hidden">
      {/* Particules en arrière-plan */}
      <FlowerParticles count={30} className="opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
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
              <FlowerButton 
                onClick={scrollToContact}
                variant="primary"
                className="flex items-center gap-2"
              >
                Demander un devis gratuit
                <ArrowRight size={18} />
              </FlowerButton>
              
              <FlowerButton 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
              >
                Découvrir nos services
              </FlowerButton>
            </div>
          </div>

          {/* Fleur 3D */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative w-full h-[500px] md:h-[600px]">
              <Flower3D scrollProgress={scrollProgress} className="w-full h-full" />
              
              {/* Effet glow autour */}
              <div className="absolute inset-0 bg-gradient-radial from-tech-accent/20 via-transparent to-transparent blur-3xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
