import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface FlowerIconProps {
  size?: number;
  className?: string;
  animated?: boolean;
}

const FlowerIcon: React.FC<FlowerIconProps> = ({ 
  size = 24, 
  className = '',
  animated = true 
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!animated) return;
    
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animated]);

  // Fleur stylisée SVG
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      animate={animated ? {
        rotate: [0, 360],
        scale: [1, 1.1, 1],
      } : {}}
      transition={{
        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
      }}
    >
      {/* Centre de la fleur */}
      <motion.circle
        cx="50"
        cy="50"
        r="8"
        fill="#B8001F"
        animate={animated ? {
          scale: [1, 1.2, 1],
        } : {}}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      
      {/* Pétales */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * 360;
        const radius = 20 + scrollProgress * 10;
        const x = 50 + Math.cos((angle * Math.PI) / 180) * radius;
        const y = 50 + Math.sin((angle * Math.PI) / 180) * radius;
        
        return (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r="6"
            fill={i % 2 === 0 ? "#384B70" : "#507687"}
            initial={{ scale: 0 }}
            animate={animated ? {
              scale: [0.8, 1, 0.8],
              x: [50, x, 50],
              y: [50, y, 50],
            } : { scale: 1, x, y }}
            transition={{
              delay: i * 0.1,
              duration: 2,
              repeat: Infinity,
            }}
          />
        );
      })}
    </motion.svg>
  );
};

export default FlowerIcon;

