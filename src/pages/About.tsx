import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Quote, Award, Users, Clock, Rocket, Heart, TrendingUp, MapPin, GraduationCap, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "À Propos - Tech Bloom Agency";
  }, []);

  const stats = [
    { icon: Award, number: "10+", label: "Projets réalisés" },
    { icon: Users, number: "10+", label: "Clients satisfaits" },
    { icon: Clock, number: "1+", label: "Année d'expérience" }
  ];

  const values = [
    {
      icon: Rocket,
      title: "Innovation",
      description: "Nous restons à la pointe des dernières technologies et tendances digitales pour vous offrir des solutions modernes et performantes."
    },
    {
      icon: Heart,
      title: "Humanisme",
      description: "Une approche humaine et personnalisée. Chaque projet est unique et mérite un accompagnement sur mesure et bienveillant."
    },
    {
      icon: TrendingUp,
      title: "Performance",
      description: "Nous visons l'excellence dans chaque réalisation, avec un focus constant sur les résultats et la satisfaction client."
    }
  ];

  const teamStructure = [
    {
      title: "Pôle Technique",
      roles: ["Développeurs Full-Stack", "Architectes Web", "DevOps"]
    },
    {
      title: "Pôle Marketing & CM",
      roles: ["Stratégistes Marketing", "Community Managers", "Analystes SEO"]
    },
    {
      title: "Pôle Design",
      roles: ["Designers UI/UX", "Directeurs Artistiques", "Graphistes"]
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
                À Propos de Tech Bloom Agency
              </h1>
              <p className="font-montserrat text-xl text-gray-600 mb-8 leading-relaxed">
                De la stratégie à l'éclosion digitale. Nous accompagnons les PME, startups et entrepreneurs 
                dans leur transformation numérique.
              </p>
            </div>
          </div>
        </section>

        {/* Notre Histoire */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-bitter font-bold text-3xl md:text-4xl text-tech-primary mb-8 text-center">
                Notre Histoire
              </h2>
              <div className="space-y-6 font-montserrat text-lg text-gray-600 leading-relaxed">
                <p>
                  Tech Bloom Agency est née d'une passion pour la technologie et l'entrepreneuriat. 
                  Fondée en février 2025 comme job étudiant, l'agence a rapidement évolué pour devenir 
                  une structure professionnelle, avec une formalisation juridique prévue pour janvier 2026.
                </p>
                <p>
                  Basée à Toamasina, Madagascar, Tech Bloom Agency combine expertise locale et vision 
                  internationale. Nous accompagnons des clients locaux et internationaux (France, Canada, 
                  Afrique francophone) dans leur transformation digitale.
                </p>
                <p>
                  Notre mission : rendre le digital accessible, humain et rentable, en aidant chaque marque 
                  ou entreprise à éclore et à se développer grâce à des solutions modernes et personnalisées.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fondateur */}
        <section className="py-20 bg-tech-light">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="animate-fade-in">
                <h2 className="font-bitter font-bold text-3xl md:text-4xl text-tech-primary mb-6">
                  Qui est Sullivan Joro ?
                </h2>
                
                <div className="space-y-4 font-montserrat text-lg text-gray-600 leading-relaxed mb-8">
                  <p>
                    <strong className="text-tech-primary">Joro Sullivan RAKOTONIAINA</strong> est le fondateur 
                    et directeur créatif de Tech Bloom Agency. Passionné de technologie et de communication digitale, 
                    Sullivan a suivi une formation en HEI (Hautes Études d'Ingénieur) avec une spécialisation en 
                    Product Owner & Project Management.
                  </p>
                  <p>
                    Avec plus d'1 an d'expérience et déjà 10 projets menés à bien, Sullivan a accompagné plus de 
                    10 clients satisfaits dans la création de leur univers digital, du branding au site web jusqu'à 
                    leur présence sur les réseaux sociaux.
                  </p>
                  <p>
                    Sa vision : rendre le digital accessible, humain et rentable, en aidant chaque marque ou 
                    entreprise à éclore et à se développer grâce à des solutions modernes et personnalisées.
                  </p>
                </div>

                {/* Quote */}
                <Card className="border-l-4 border-tech-accent shadow-lg">
                  <CardContent className="p-6">
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
                  </CardContent>
                </Card>
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
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <GraduationCap className="w-4 h-4 text-tech-accent" />
                          <span>HEI - Product Owner & PM</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="w-4 h-4 text-tech-accent" />
                          <span>Toamasina, Madagascar</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Briefcase className="w-4 h-4 text-tech-accent" />
                          <span>10+ projets réalisés</span>
                        </div>
                      </div>
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

        {/* Notre Équipe */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-bitter font-bold text-3xl md:text-4xl text-tech-primary mb-4">
                Notre Équipe
              </h2>
              <p className="font-montserrat text-lg text-gray-600 max-w-2xl mx-auto">
                Une équipe pluridisciplinaire passionnée par le digital et l'innovation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {teamStructure.map((pole, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-bitter font-semibold text-xl text-tech-primary mb-4">
                      {pole.title}
                    </h3>
                    <ul className="space-y-2">
                      {pole.roles.map((role, idx) => (
                        <li key={idx} className="flex items-center gap-2 font-montserrat text-gray-600">
                          <div className="w-1.5 h-1.5 bg-tech-accent rounded-full"></div>
                          {role}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Nos Valeurs */}
        <section className="py-20 bg-gradient-to-br from-tech-primary to-tech-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-bitter font-bold text-3xl md:text-4xl text-white mb-4">
                Nos Valeurs
              </h2>
              <p className="font-montserrat text-lg text-white/90 max-w-2xl mx-auto">
                Les principes qui guident notre action au quotidien.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="bg-tech-accent rounded-xl p-4 w-fit mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bitter font-semibold text-xl text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="font-montserrat text-white/90 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-tech-light">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-tech-accent/10 rounded-xl p-3 w-fit mx-auto mb-2">
                    <stat.icon className="w-6 h-6 text-tech-accent" />
                  </div>
                  <div className="font-bitter font-bold text-4xl text-tech-primary mb-2">{stat.number}</div>
                  <div className="font-montserrat text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-bitter font-bold text-3xl md:text-4xl text-tech-primary mb-6">
                Prêt à travailler avec nous ?
              </h2>
              <p className="font-montserrat text-lg text-gray-600 mb-8">
                Discutons de votre projet et découvrons comment nous pouvons faire fleurir vos idées digitales.
              </p>
              <Link to="/contact">
                <Button className="bg-tech-accent hover:bg-tech-accent/90 text-white font-montserrat font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                  Nous contacter
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

export default About;

