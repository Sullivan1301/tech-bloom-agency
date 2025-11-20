import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface GyroscopeFlowerProps {
  children: React.ReactNode;
}

const GyroscopeFlower: React.FC<GyroscopeFlowerProps> = ({ children }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'DeviceOrientationEvent' in window) {
      setIsSupported(true);

      const handleOrientation = (e: DeviceOrientationEvent) => {
        if (e.gamma !== null && e.beta !== null) {
          // Normaliser les valeurs (-90 à 90 degrés)
          const x = (e.gamma || 0) / 90; // Inclinaison gauche/droite
          const y = (e.beta || 0) / 90; // Inclinaison avant/arrière
          
          setTilt({ x: Math.max(-1, Math.min(1, x)), y: Math.max(-1, Math.min(1, y)) });
        }
      };

      // Demander la permission sur iOS 13+
      if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
        (DeviceOrientationEvent as any).requestPermission()
          .then((response: string) => {
            if (response === 'granted') {
              window.addEventListener('deviceorientation', handleOrientation);
            }
          });
      } else {
        window.addEventListener('deviceorientation', handleOrientation);
      }

      return () => {
        window.removeEventListener('deviceorientation', handleOrientation);
      };
    }
  }, []);

  if (!isSupported) {
    return <>{children}</>;
  }

  return (
    <motion.div
      animate={{
        rotateX: tilt.y * 10,
        rotateY: tilt.x * 10,
      }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </motion.div>
  );
};

export default GyroscopeFlower;

