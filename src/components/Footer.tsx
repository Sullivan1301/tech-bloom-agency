
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import FlowerParticles from '@/components/FlowerParticles';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "https://web.facebook.com/profile.php?id=61578188340191", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/tech.bloom.agency?igsh=MWh5cjdvajFlZmEwcQ==", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  const quickLinks = [
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/services" },
    { name: "À propos", path: "/a-propos" },
    { name: "Portfolio", path: "/realisations" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ];

  const services = [
    "Création de site web",
    "Branding & identité visuelle",
    "Marketing digital",
    "Community management"
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-tech-primary dark:bg-gray-900 text-white relative overflow-hidden border-t border-gray-800 dark:border-gray-700">
      {/* Fleur stylisée en filigrane avec effet de particules */}
      <FlowerParticles count={10} className="opacity-10" />
      
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 bg-tech-accent hover:bg-tech-accent/90 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-20"
        aria-label="Retour en haut"
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </button>

      <div className="container mx-auto px-4 py-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img
                src="/lovable-uploads/474b2305-036f-4b7a-b879-3f1a8bd98f47.png"
                alt="Tech Bloom Agency Logo"
                className="w-10 h-10 brightness-0 invert"
              />
              <div className="flex flex-col">
                <span className="font-bitter font-bold text-lg">Tech Bloom</span>
                <span className="font-montserrat text-sm text-white/80 -mt-1">Agency</span>
              </div>
            </Link>
            <p className="font-montserrat text-white/80 mb-2 leading-relaxed italic text-lg">
              De la stratégie à l'éclosion digitale.
            </p>
            <p className="font-montserrat text-white/70 mb-4 text-sm leading-relaxed">
              Nous accompagnons votre transformation numérique avec passion et expertise.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-white/10 hover:bg-tech-accent p-3 rounded-xl transition-all duration-300 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bitter font-semibold text-lg mb-6">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="font-montserrat text-white/80 hover:text-white transition-colors duration-300 hover:translate-x-1 transform block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bitter font-semibold text-lg mb-6">Nos Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="font-montserrat text-white/80 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bitter font-semibold text-lg mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-tech-accent" />
                <a
                  href="mailto:sullivanjoro3@gmail.com"
                  className="font-montserrat text-white/80 hover:text-white transition-colors duration-300 text-sm"
                >
                  sullivanjoro3@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-tech-accent" />
                <a
                  href="https://wa.me/261378717959"
                  className="font-montserrat text-white/80 hover:text-white transition-colors duration-300 text-sm"
                >
                  +261 37 87 17 959 (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-tech-accent" />
                <a
                  href="tel:+261341060802"
                  className="font-montserrat text-white/80 hover:text-white transition-colors duration-300 text-sm"
                >
                  +261 34 10 608 02
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-tech-accent" />
                <span className="font-montserrat text-white/80 text-sm">
                  Toamasina, Madagascar
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-montserrat text-white/60 text-sm text-center md:text-left">
              © {currentYear} Tech Bloom Agency. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <Link to="/mentions-legales" className="font-montserrat text-white/60 hover:text-white text-sm transition-colors duration-300">
                Mentions légales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
