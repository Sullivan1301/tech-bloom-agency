import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

interface FlowerButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'outline';
  type?: 'button' | 'submit' | 'reset';
}

const FlowerButton: React.FC<FlowerButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary',
  type = 'button'
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      type={type}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative overflow-hidden font-montserrat font-semibold px-8 py-3 rounded-full transition-all duration-300 ${
        variant === 'primary'
          ? 'bg-tech-accent hover:bg-tech-accent/90 text-white'
          : 'border-2 border-tech-primary text-tech-primary hover:bg-tech-primary hover:text-white'
      } ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Fleur qui s'épanouit au survol */}
      {isHovered && (
        <>
          {Array.from({ length: 6 }).map((_, i) => {
            const angle = (i / 6) * 360;
            const radius = 30;
            
            return (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                initial={{
                  x: 0,
                  y: 0,
                  scale: 0,
                  opacity: 0,
                }}
                animate={{
                  x: Math.cos((angle * Math.PI) / 180) * radius,
                  y: Math.sin((angle * Math.PI) / 180) * radius,
                  scale: [0, 1.5, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
              />
            );
          })}
        </>
      )}
      
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};

export default FlowerButton;

