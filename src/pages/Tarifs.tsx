import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Clock, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FlowerIcon from '@/components/FlowerIcon';

const Tarifs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Tarifs - Tech Bloom Agency";
  }, []);


  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-tech-light via-white to-tech-light/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <FlowerIcon size={80} animated={true} className="mx-auto text-tech-accent" />
              </motion.div>
              
              <h1 className="font-bitter font-bold text-4xl md:text-5xl lg:text-6xl text-tech-primary mb-6">
                Nos Tarifs
              </h1>
              <p className="font-montserrat text-xl text-gray-600 mb-8 leading-relaxed">
                Nos tarifs sont actuellement en cours d'analyse et de finalisation.
              </p>
            </div>
          </div>
        </section>

        {/* Message Bientôt Disponible */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="bg-gradient-to-br from-tech-light to-white rounded-3xl p-12 shadow-xl border-2 border-tech-accent/20">
                <div className="flex justify-center mb-6">
                  <div className="bg-tech-accent/10 rounded-full p-6">
                    <Clock className="w-12 h-12 text-tech-accent" />
                  </div>
                </div>
                
                <h2 className="font-bitter font-bold text-3xl md:text-4xl text-tech-primary mb-4">
                  Bientôt Disponible
                </h2>
                
                <p className="font-montserrat text-lg text-gray-600 mb-6 leading-relaxed">
                  Nous sommes actuellement en train d'analyser et de finaliser nos grilles tarifaires 
                  pour vous proposer des offres transparentes et adaptées à chaque besoin.
                </p>
                
                <div className="flex items-center justify-center gap-2 text-tech-secondary mb-8">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-montserrat font-medium">
                    En cours d'analyse
                  </span>
                </div>
                
                <div className="space-y-4">
                  <p className="font-montserrat text-gray-600">
                    En attendant, n'hésitez pas à nous contacter pour obtenir un <strong className="text-tech-primary">devis personnalisé</strong> 
                    adapté à votre projet et votre budget.
                  </p>
                  
                  <Link to="/contact">
                    <Button className="bg-tech-accent hover:bg-tech-accent/90 text-white font-montserrat font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 mt-6">
                      Demander un devis personnalisé
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-20 bg-tech-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="font-bitter font-bold text-2xl md:text-3xl text-tech-primary mb-8 text-center">
                Pourquoi un devis personnalisé ?
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <h4 className="font-bitter font-semibold text-xl text-tech-primary mb-3">
                    Projets Sur-Mesure
                  </h4>
                  <p className="font-montserrat text-gray-600">
                    Chaque projet est unique. Nous adaptons nos tarifs selon vos besoins spécifiques, 
                    votre budget et les fonctionnalités requises.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <h4 className="font-bitter font-semibold text-xl text-tech-primary mb-3">
                    Transparence Totale
                  </h4>
                  <p className="font-montserrat text-gray-600">
                    Nous vous fournissons un devis détaillé et transparent, sans frais cachés, 
                    pour que vous puissiez prendre une décision en toute sérénité.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Tarifs;

