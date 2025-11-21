import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Blog - Tech Bloom Agency";
  }, []);

  const articles = [
    {
      id: 1,
      title: "Pourquoi votre PME a besoin d'un site web en 2026",
      excerpt: "Dans un monde de plus en plus digitalisé, avoir un site web n'est plus une option mais une nécessité pour toute PME qui souhaite prospérer...",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Conseils",
      date: "15 Janvier 2026",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Comment gérer efficacement ses réseaux sociaux",
      excerpt: "Découvrez les meilleures pratiques pour gérer votre présence sur les réseaux sociaux et créer une communauté engagée autour de votre marque...",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Tutoriels",
      date: "10 Janvier 2026",
      readTime: "7 min"
    },
    {
      id: 3,
      title: "L'IA au service du marketing digital",
      excerpt: "L'intelligence artificielle révolutionne le marketing digital. Découvrez comment l'IA peut optimiser vos campagnes et améliorer vos résultats...",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Tendances",
      date: "5 Janvier 2026",
      readTime: "6 min"
    },
    {
      id: 4,
      title: "Créer une identité visuelle forte en 5 étapes",
      excerpt: "Une identité visuelle forte est essentielle pour se démarquer. Suivez notre guide en 5 étapes pour créer une marque mémorable...",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Conseils",
      date: "1 Janvier 2026",
      readTime: "8 min"
    },
    {
      id: 5,
      title: "Madagascar : le nouveau hub digital de l'Océan Indien ?",
      excerpt: "Analyse du potentiel de Madagascar comme hub digital dans la région de l'Océan Indien et des opportunités pour les entreprises locales...",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Études de cas",
      date: "28 Décembre 2025",
      readTime: "10 min"
    },
    {
      id: 6,
      title: "SEO : Les fondamentaux pour être visible sur Google",
      excerpt: "Maîtrisez les bases du référencement naturel pour améliorer votre visibilité sur les moteurs de recherche et attirer plus de visiteurs...",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c839?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Tutoriels",
      date: "20 Décembre 2025",
      readTime: "12 min"
    }
  ];

  const categories = ['Tous', 'Conseils', 'Tendances', 'Tutoriels', 'Études de cas'];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-tech-light via-white to-tech-light/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto animate-fade-in">
              <h1 className="font-bitter font-bold text-4xl md:text-5xl lg:text-6xl text-tech-primary dark:text-tech-light mb-6">
                Blog
              </h1>
              <p className="font-montserrat text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Découvrez nos articles sur le digital, le marketing, la création web et les tendances 
                qui façonnent l'avenir de votre entreprise.
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Card 
                  key={article.id}
                  className="group hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden border-2 border-gray-100"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-tech-accent text-white px-3 py-1 rounded-full text-xs font-montserrat font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="font-bitter font-semibold text-xl text-tech-primary mb-2 line-clamp-2">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="font-montserrat text-gray-600 mb-4 line-clamp-2">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="font-montserrat">{article.date}</span>
                      </div>
                      <span className="font-montserrat">{article.readTime} de lecture</span>
                    </div>
                    <Button 
                      variant="outline"
                      className="w-full border-2 border-tech-primary text-tech-primary hover:bg-tech-primary hover:text-white font-montserrat font-semibold rounded-full transition-all duration-300"
                    >
                      Lire l'article
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-gradient-to-br from-tech-primary to-tech-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-bitter font-bold text-3xl md:text-4xl text-white mb-6">
                Restez informé
              </h2>
              <p className="font-montserrat text-lg text-white/90 mb-8">
                Recevez nos derniers articles et conseils directement dans votre boîte mail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-3 rounded-full font-montserrat text-gray-900 focus:outline-none focus:ring-2 focus:ring-tech-accent"
                />
                <Button className="bg-tech-accent hover:bg-tech-accent/90 text-white font-montserrat font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                  S'abonner
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;

