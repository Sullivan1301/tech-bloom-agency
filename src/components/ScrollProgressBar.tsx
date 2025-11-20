import { useScroll, useSpring, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setIsVisible(latest > 0.05);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-tech-light/20 z-50">
      <motion.div
        className="h-full bg-gradient-to-r from-tech-primary via-tech-accent to-tech-secondary relative overflow-hidden"
        style={{ scaleX, transformOrigin: 'left' }}
      >
        {/* Fleur qui pousse avec la barre */}
        <motion.div
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-4 h-4 bg-tech-accent rounded-full relative">
            {/* Pétales */}
            {Array.from({ length: 4 }).map((_, i) => {
              const angle = (i / 4) * 360;
              return (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-tech-primary rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                    x: Math.cos((angle * Math.PI) / 180) * 8 - 4,
                    y: Math.sin((angle * Math.PI) / 180) * 8 - 4,
                  }}
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ScrollProgressBar;

