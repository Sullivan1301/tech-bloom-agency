import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FlowerEasterEgg: React.FC = () => {
  const [sequence, setSequence] = useState<string[]>([]);
  const [isActive, setIsActive] = useState(false);

  // Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
  const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
  ];

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const newSequence = [...sequence, e.code];
      setSequence(newSequence.slice(-konamiCode.length));

      // Vérifier si la séquence correspond
      if (newSequence.length === konamiCode.length) {
        const matches = newSequence.every((key, index) => key === konamiCode[index]);
        if (matches) {
          setIsActive(true);
          setTimeout(() => setIsActive(false), 5000);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [sequence]);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className="fixed inset-0 z-[10000] pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Feu d'artifice floral */}
          {Array.from({ length: 50 }).map((_, i) => {
            const angle = (i / 50) * Math.PI * 2;
            const distance = 200 + Math.random() * 100;
            
            return (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-3 h-3 bg-tech-accent rounded-full"
                initial={{
                  x: 0,
                  y: 0,
                  scale: 0,
                  opacity: 1,
                }}
                animate={{
                  x: Math.cos(angle) * distance,
                  y: Math.sin(angle) * distance,
                  scale: [0, 1, 0],
                  opacity: [1, 1, 0],
                }}
                transition={{
                  duration: 2,
                  delay: Math.random() * 0.5,
                }}
              />
            );
          })}
          
          {/* Message */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <div className="bg-tech-primary/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
              <h2 className="font-bitter font-bold text-3xl text-white mb-2">
                🌸 Feu d'Artifice Floral ! 🌸
              </h2>
              <p className="font-montserrat text-white/90">
                Vous avez découvert l'easter egg !
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FlowerEasterEgg;

