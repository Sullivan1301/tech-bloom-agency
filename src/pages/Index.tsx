
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FlowerLoader from '@/components/FlowerLoader';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    document.title = "Tech Bloom Agency - De la stratégie à l'éclosion digitale";
    
    // Simulation du chargement
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 1) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 1;
        }
        return prev + 0.1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return <FlowerLoader progress={loadingProgress} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col">
        <Hero />
        <Services />
        <WhyChooseUs />
        <About />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
