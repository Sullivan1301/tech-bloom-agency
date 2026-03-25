export interface Testimonial {
  name: string;
  company: string;
  role: string;
  quote: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sylvania",
    company: "Runrobe",
    role: "Fondateur",
    quote: "Tech Bloom Agency a transformé notre vision en une plateforme e-commerce performante. Les résultats ont dépassé nos attentes.",
    avatar: "/avatars/longin.jpg"
  },
  {
    name: "Erica",
    company: "Girl's Touch",
    role: "CEO",
    quote: "Une équipe à l'écoute et ultra-compétente. Notre identité visuelle nous permet maintenant de nous démarquer clairement.",
    avatar: "/avatars/erica.jpg"
  },
  {
    name: "Coach Ando",
    company: "L'Homme Imparfait",
    role: "Directeur Marketing",
    quote: "Le refonte de notre site a boosté nos conversions de 45%. Un investissement rentable en seulement 3 mois.",
    avatar: "/avatars/marc.jpg"
  }
];
