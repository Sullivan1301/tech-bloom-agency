import { HeaderItem } from "@/types/menu"

/* =========================
   MENU DATA - TBA
   ========================= */

export const headerData: HeaderItem[] = [
  { 
    label: "Accueil", 
    href: "/" 
  },
  { 
    label: "À propos", 
    href: "/about" 
  },
  {
    label: "Services",
    href: "/services",
    submenu: [
      { label: "Création de sites web", href: "/services/web-development" },
      { label: "Branding & Design", href: "/services/branding" },
      { label: "Marketing Digital", href: "/services/marketing" },
      { label: "Stratégie Digitale", href: "/services/strategy" },
    ],
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    submenu: [
      { label: "Tous les projets", href: "/portfolio" },
      { label: "Sites Web", href: "/portfolio?filter=web" },
      { label: "Branding", href: "/portfolio?filter=branding" },
      { label: "Marketing", href: "/portfolio?filter=marketing" },
    ],
  },
  {
    label: "Ressources",
    href: "/blog",
    submenu: [
      { label: "Blog", href: "/blog" },
      { label: "Guides & Tutoriels", href: "/guides" },
      { label: "Études de cas", href: "/case-studies" },
    ],
  },
  { 
    label: "Contact", 
    href: "/contact" 
  },
]
