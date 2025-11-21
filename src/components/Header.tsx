
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // Si on n'est pas sur la page d'accueil, naviguer vers la page d'accueil avec le hash
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { label: 'Accueil', path: '/', id: 'hero' },
    { label: 'Services', path: '/services', id: 'services' },
    { label: 'À propos', path: '/a-propos', id: 'about' },
    { label: 'Portfolio', path: '/realisations', id: 'portfolio' },
    { label: 'Blog', path: '/blog', id: null },
    { label: 'Contact', path: '/contact', id: 'contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent dark:bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative">
              <img 
                src="/lovable-uploads/474b2305-036f-4b7a-b879-3f1a8bd98f47.png" 
                alt="Tech Bloom Agency Logo" 
                className="w-10 h-10"
              />
              {/* Fleur minimale animée au scroll */}
              {isScrolled && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-tech-accent rounded-full animate-pulse"></div>
              )}
            </div>
            <div className="flex flex-col">
              <span className="font-bitter font-bold text-lg text-tech-primary">Tech Bloom</span>
              <span className="font-montserrat text-xs text-tech-secondary -mt-1">Agency</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => {
                  if (item.id && location.pathname === '/') {
                    setTimeout(() => scrollToSection(item.id!), 100);
                  } else {
                    setIsMobileMenuOpen(false);
                  }
                }}
                className={`font-montserrat font-medium transition-colors duration-300 relative group ${
                  location.pathname === item.path 
                    ? 'text-tech-accent dark:text-tech-accent' 
                    : 'text-tech-primary dark:text-tech-light hover:text-tech-accent dark:hover:text-tech-accent'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-tech-accent transition-all duration-300 ${
                  location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <Button 
                className="bg-tech-accent hover:bg-tech-accent/90 text-white font-montserrat font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
              >
                Devis gratuit
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-tech-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <nav className="py-4 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => {
                    if (item.id && location.pathname === '/') {
                      setTimeout(() => scrollToSection(item.id!), 100);
                    }
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 font-montserrat transition-colors duration-300 ${
                    location.pathname === item.path
                      ? 'text-tech-accent bg-tech-light/50'
                      : 'text-tech-primary hover:text-tech-accent hover:bg-tech-light/50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button 
                    className="w-full bg-tech-accent hover:bg-tech-accent/90 text-white font-montserrat font-semibold py-2 rounded-full"
                  >
                    Devis gratuit
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
