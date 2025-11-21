import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a, button')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    // Cacher le curseur par défaut
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      {/* Graine lumineuse principale */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        animate={{
          x: -8,
          y: -8,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      >
        <div className="w-4 h-4 bg-tech-accent dark:bg-tech-accent rounded-full blur-sm"></div>
      </motion.div>

      {/* Traînée lumineuse */}
      <motion.div
        className="fixed pointer-events-none z-[9998] mix-blend-difference"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        animate={{
          x: -4,
          y: -4,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <div className="w-2 h-2 bg-tech-primary dark:bg-tech-light rounded-full opacity-50"></div>
      </motion.div>

      {/* Particules de traînée */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={i}
          className="fixed pointer-events-none z-[9997] mix-blend-difference"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
          animate={{
            x: -2 + Math.sin(i) * 10,
            y: -2 + Math.cos(i) * 10,
            opacity: [0.5, 0],
            scale: [1, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        >
          <div className="w-1 h-1 bg-tech-secondary rounded-full"></div>
        </motion.div>
      ))}
    </>
  );
};

export default CustomCursor;

