import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ParticleExplosionProps {
  trigger: boolean;
  position: { x: number; y: number };
}

const ParticleExplosion: React.FC<ParticleExplosionProps> = ({ trigger, position }) => {
  const [particles, setParticles] = useState<Array<{ id: number; angle: number; distance: number }>>([]);

  useEffect(() => {
    if (trigger) {
      // Créer des particules en explosion
      const newParticles = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        angle: (i / 20) * Math.PI * 2,
        distance: 50 + Math.random() * 100,
      }));
      
      setParticles(newParticles);
      
      // Nettoyer après l'animation
      setTimeout(() => setParticles([]), 1000);
    }
  }, [trigger]);

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="fixed pointer-events-none z-[9999]"
          style={{
            left: position.x,
            top: position.y,
          }}
          initial={{
            x: 0,
            y: 0,
            scale: 0,
            opacity: 1,
          }}
          animate={{
            x: Math.cos(particle.angle) * particle.distance,
            y: Math.sin(particle.angle) * particle.distance,
            scale: [0, 1, 0],
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
        >
          <div className="w-2 h-2 bg-tech-accent rounded-full"></div>
        </motion.div>
      ))}
    </>
  );
};

export default ParticleExplosion;

