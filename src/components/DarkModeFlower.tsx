import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DarkModeFlower: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  // Note: next-themes n'est pas installé, on va utiliser un système simple
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Vérifier la préférence système
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
    
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed bottom-24 right-8 z-50"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      <Button
        onClick={toggleDarkMode}
        className="w-14 h-14 rounded-full bg-tech-primary hover:bg-tech-secondary transition-all duration-300 relative overflow-hidden group"
      >
        {/* Fleur bioluminescente en dark mode */}
        {isDark && (
          <motion.div
            className="absolute inset-0"
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="absolute inset-0 bg-tech-accent/30 rounded-full blur-xl"></div>
            {Array.from({ length: 6 }).map((_, i) => {
              const angle = (i / 6) * 360;
              return (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-2 h-2 bg-tech-accent rounded-full"
                  style={{
                    x: Math.cos((angle * Math.PI) / 180) * 12 - 4,
                    y: Math.sin((angle * Math.PI) / 180) * 12 - 4,
                  }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.5, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              );
            })}
          </motion.div>
        )}
        
        <motion.div
          animate={{ rotate: isDark ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? (
            <Sun className="w-6 h-6 text-white relative z-10" />
          ) : (
            <Moon className="w-6 h-6 text-white relative z-10" />
          )}
        </motion.div>
      </Button>
    </motion.div>
  );
};

export default DarkModeFlower;

