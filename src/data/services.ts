export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price: number; // Prix de base en Ariary
  duration: string; // Durée estimée
}

export const services: Service[] = [
  {
    id: "creation-web",
    title: "Création de sites web",
    description: "Sites vitrine, e-commerce, applications web et landing pages performantes adaptées à vos besoins.",
    icon: "Code",
    features: [
      "Sites vitrine professionnels",
      "Boutiques e-commerce",
      "Applications web sur mesure",
      "Landing pages optimisées",
      "Design responsive"
    ],
    price: 1500000, // À partir de 1.5M Ar
    duration: "2-4 semaines"
  },
  {
    id: "branding",
    title: "Branding & Identité visuelle",
    description: "Construction d'une identité de marque forte et cohérente qui reflète vos valeurs.",
    icon: "Palette",
    features: [
      "Création de logo",
      "Charte graphique complète",
      "Identité visuelle",
      "Guide de style",
      "Supports de communication"
    ],
    price: 800000, // À partir de 800k Ar
    duration: "1-2 semaines"
  },
  {
    id: "marketing",
    title: "Marketing digital",
    description: "Stratégies marketing performantes pour augmenter votre visibilité et vos conversions.",
    icon: "TrendingUp",
    features: [
      "SEO & référencement naturel",
      "Publicité en ligne (Ads)",
      "Stratégie de contenu",
      "Analyse de performance",
      "Optimisation des conversions"
    ],
    price: 500000, // À partir de 500k Ar / mois
    duration: "Mensuel"
  },
  {
    id: "community",
    title: "Community management",
    description: "Gestion professionnelle de vos réseaux sociaux pour engager votre audience.",
    icon: "Users",
    features: [
      "Gestion des réseaux sociaux",
      "Création de contenu",
      "Planning éditorial",
      "Engagement communautaire",
      "Reporting mensuel"
    ],
    price: 400000, // À partir de 400k Ar / mois
    duration: "Mensuel"
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    description: "Accompagnement continu pour assurer la performance et la sécurité de vos outils digitaux.",
    icon: "Shield",
    features: [
      "Maintenance technique",
      "Mises à jour régulières",
      "Support réactif",
      "Surveillance 24/7",
      "Sauvegardes automatiques"
    ],
    price: 300000, // À partir de 300k Ar / mois
    duration: "Mensuel"
  },
  {
    id: "audit",
    title: "Audit & Accompagnement",
    description: "Expertise et conseils stratégiques pour optimiser votre présence digitale.",
    icon: "Search",
    features: [
      "Audit digital complet",
      "Conseil stratégique",
      "Formation équipes",
      "Accompagnement personnalisé",
      "Roadmap digitale"
    ],
    price: 600000, // À partir de 600k Ar
    duration: "1 semaine"
  }
];

// Format price helper
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("fr-MG").format(price);
};
