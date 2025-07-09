
import { Quote, Award, Users, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, number: "10+", label: "Projets réalisés" },
    { icon: Users, number: "10+", label: "Clients satisfaits" },
    { icon: Clock, number: "1+", label: "Année d'expérience" }
  ];

  return (
    <section id="about" className="py-20 bg-tech-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="font-bitter font-bold text-3xl md:text-4xl text-tech-primary mb-6">
              À propos de Tech Bloom Agency
            </h2>
            
            <p className="font-montserrat text-lg text-gray-600 mb-6 leading-relaxed">
              Sullivan Joro RAKOTONIAINA, fondateur de Tech Bloom Agency, est un passionné de technologie 
              et de communication digitale.
            </p>
            
            <p className="font-montserrat text-gray-600 mb-6 leading-relaxed">
              Avec plus d'1 an d'expérience et déjà 10 projets menés à bien, Sullivan a accompagné plus de 
              10 clients satisfaits dans la création de leur univers digital, du branding au site web jusqu'à 
              leur présence sur les réseaux sociaux.
            </p>

            <p className="font-montserrat text-gray-600 mb-8 leading-relaxed">
              Sa vision : rendre le digital accessible, humain et rentable, en aidant chaque marque ou 
              entreprise à éclore et à se développer grâce à des solutions modernes et personnalisées.
            </p>

            <p className="font-montserrat text-gray-600 mb-8 leading-relaxed">
              Basé à Madagascar, Sullivan collabore à distance avec des clients de tous horizons pour 
              cultiver leur potentiel numérique.
            </p>

            {/* Quote */}
            <div className="bg-white rounded-2xl p-6 border-l-4 border-tech-accent mb-8 shadow-md">
              <Quote className="w-8 h-8 text-tech-accent mb-4" />
              <p className="font-montserrat italic text-lg text-tech-primary mb-4">
                "Chaque idée mérite d'éclore dans le digital."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-tech-primary to-tech-secondary rounded-full flex items-center justify-center">
                  <span className="font-bitter font-bold text-white text-lg">SJ</span>
                </div>
                <div>
                  <p className="font-montserrat font-semibold text-tech-primary">Sullivan Joro RAKOTONIAINA</p>
                  <p className="font-montserrat text-sm text-tech-secondary">Fondateur & Directeur Créatif</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-tech-accent/10 rounded-xl p-3 w-fit mx-auto mb-2">
                    <stat.icon className="w-6 h-6 text-tech-accent" />
                  </div>
                  <div className="font-bitter font-bold text-2xl text-tech-primary">{stat.number}</div>
                  <div className="font-montserrat text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="flex justify-center animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-96 bg-gradient-to-br from-white to-tech-light rounded-3xl shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-tech-primary/5 to-tech-accent/5"></div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-center items-center text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-tech-primary to-tech-accent rounded-full flex items-center justify-center mb-6">
                    <span className="font-bitter font-bold text-white text-3xl">SJ</span>
                  </div>
                  <h3 className="font-bitter font-bold text-xl text-tech-primary mb-2">Sullivan Joro</h3>
                  <p className="font-montserrat text-tech-secondary mb-1">RAKOTONIAINA</p>
                  <p className="font-montserrat text-sm text-tech-secondary mb-4">Fondateur</p>
                  <p className="font-montserrat text-sm text-gray-600 leading-relaxed">
                    Passionné par l'innovation digitale et l'accompagnement entrepreneurial, 
                    basé à Madagascar avec une vision globale.
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-tech-accent/20 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-tech-secondary/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
