import { motion } from 'framer-motion';

interface FlowerLoaderProps {
  progress?: number;
}

const FlowerLoader: React.FC<FlowerLoaderProps> = ({ progress = 0 }) => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-tech-primary via-tech-secondary to-tech-accent flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animation de bourgeon qui s'ouvre */}
        <motion.div
          className="relative w-32 h-32 mx-auto mb-8"
          initial={{ scale: 0.3, opacity: 0 }}
          animate={{ 
            scale: progress > 0 ? 0.3 + progress * 0.7 : 0.3,
            opacity: 1,
            rotate: [0, 360]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Bourgeon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-16 h-16 bg-gradient-to-br from-tech-accent to-tech-primary rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                borderRadius: progress > 0.5 ? ["50%", "30%", "50%"] : "50%"
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
          
          {/* Pétales qui s'ouvrent */}
          {Array.from({ length: 6 }).map((_, i) => {
            const angle = (i / 6) * 360;
            const radius = progress > 0.3 ? 40 + progress * 20 : 20;
            
            return (
              <motion.div
                key={i}
                className="absolute w-8 h-8 bg-gradient-to-br from-tech-primary to-tech-secondary rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                  x: Math.cos((angle * Math.PI) / 180) * radius - 16,
                  y: Math.sin((angle * Math.PI) / 180) * radius - 16,
                }}
                animate={{
                  scale: progress > 0.3 ? [0, 1] : 0,
                  opacity: progress > 0.3 ? 1 : 0,
                }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              />
            );
          })}
        </motion.div>
        
        {/* Texte de chargement */}
        <motion.p
          className="font-montserrat text-white text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Chargement...
        </motion.p>
        
        {/* Barre de progression */}
        <motion.div
          className="w-64 h-2 bg-white/20 rounded-full mt-4 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-tech-accent to-tech-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default FlowerLoader;

