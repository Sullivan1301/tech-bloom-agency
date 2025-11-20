import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxFlowerProps {
  children?: React.ReactNode;
  className?: string;
}

const ParallaxFlower: React.FC<ParallaxFlowerProps> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Transformation de la fleur selon le scroll
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={{
        scale,
        rotate,
        opacity,
        y,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxFlower;

