import { Project } from "@/types";

export const projects: Project[] = [
    {
        id: "1",
        title: "Site e-commerce textile",
        description: "Boutique en ligne moderne avec système de paiement intégré et gestion des stocks.",
        category: "E-commerce",
        image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800",
        tags: ["Next.js", "E-commerce", "Design"],
        link: "/portfolio/ecommerce-textile",
    },
    {
        id: "2",
        title: "Application de gestion",
        description: "Outil de gestion interne pour PME avec tableau de bord analytique.",
        category: "Application web",
        image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
        tags: ["React", "Dashboard", "Analytics"],
        link: "/portfolio/app-gestion",
    },
    {
        id: "3",
        title: "Refonte identité visuelle",
        description: "Création complète de l'identité de marque d'une startup tech.",
        category: "Branding",
        image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800",
        tags: ["Branding", "Logo", "Charte graphique"],
        link: "/portfolio/branding-startup",
    },
    {
        id: "4",
        title: "Site vitrine restaurant",
        description: "Site élégant avec système de réservation en ligne et menu interactif.",
        category: "Site vitrine",
        image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
        tags: ["WordPress", "Réservation", "Design"],
        link: "/portfolio/site-restaurant",
    },
    {
        id: "5",
        title: "Campagne marketing digital",
        description: "Stratégie SEO et publicité en ligne pour une entreprise locale.",
        category: "Marketing",
        image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
        tags: ["SEO", "Google Ads", "Analytics"],
        link: "/portfolio/campagne-marketing",
    },
    {
        id: "6",
        title: "Application mobile",
        description: "App de services à la demande avec géolocalisation et paiement mobile.",
        category: "Application mobile",
        image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
        tags: ["React Native", "Mobile", "API"],
        link: "/portfolio/app-mobile",
    }
];
