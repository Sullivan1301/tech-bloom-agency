import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();

  // View Transitions API (si supporté)
  useEffect(() => {
    if ('startViewTransition' in document) {
      // Le navigateur supporte View Transitions API
      // Les transitions seront gérées automatiquement
    }
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, clipPath: 'inset(50% 50% 50% 50%)' }}
        animate={{ 
          opacity: 1, 
          clipPath: 'inset(0% 0% 0% 0%)',
        }}
        exit={{ 
          opacity: 0, 
          clipPath: 'inset(50% 50% 50% 50%)',
        }}
        transition={{ 
          duration: 0.5,
          ease: [0.4, 0, 0.2, 1],
        }}
        style={{
          // Effet "wipe" floral
          background: 'linear-gradient(135deg, #FCFAEE 0%, #384B70 100%)',
        }}
      >
        {/* Overlay floral pendant la transition */}
        <motion.div
          className="fixed inset-0 pointer-events-none z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-32 h-32 bg-tech-accent/20 rounded-full blur-3xl"></div>
          </div>
        </motion.div>

        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;

