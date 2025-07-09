
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Responsable RunRobe",
      company: "RunRobe",
      role: "Responsable",
      content: "Grâce à Tech Bloom Agency, notre projet RunRobe a pris vie sur le web et nous avons touché nos premiers clients grâce à un branding moderne et un site fluide.",
      rating: 5,
      avatar: "RR"
    },
    {
      name: "Fondatrice Girl's Touch Erica",
      company: "Girl's Touch Erica",
      role: "Fondatrice",
      content: "Sullivan et son équipe ont su comprendre l'essence de notre entreprise de soins bio et la traduire en une image de marque authentique et naturelle.",
      rating: 5,
      avatar: "GE"
    },
    {
      name: "Administrateur L'Homme Imparfait",
      company: "L'Homme Imparfait",
      role: "Administrateur",
      content: "Nous avions besoin de structurer notre présence en ligne. Avec Tech Bloom, tout a été simplifié et notre communauté a grandi.",
      rating: 5,
      avatar: "HI"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-tech-light to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-bitter font-bold text-3xl md:text-4xl text-tech-primary mb-4">
            Ce que disent nos clients
          </h2>
          <p className="font-montserrat text-lg text-gray-600 max-w-2xl mx-auto">
            La satisfaction de nos clients est notre plus belle récompense. Découvrez leurs témoignages.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-tech-accent/30 mb-4" />
              
              <p className="font-montserrat text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-tech-primary to-tech-secondary rounded-full flex items-center justify-center">
                  <span className="font-bitter font-bold text-white text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="font-montserrat font-semibold text-tech-primary">{testimonial.name}</p>
                  <p className="font-montserrat text-sm text-tech-secondary">{testimonial.role}</p>
                  <p className="font-montserrat text-xs text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
