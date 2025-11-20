import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// État global de la fleur (persiste entre les pages)
let globalFlowerState = {
  progress: 0,
  page: 'home',
  isOpen: false,
};

interface PersistentFlowerProps {
  className?: string;
}

// Composant 3D de la fleur
function Flower3DModel({ 
  scrollProgress, 
  pageType, 
  mousePosition 
}: { 
  scrollProgress: number;
  pageType: string;
  mousePosition: { x: number; y: number };
}) {
  const meshRef = useRef<THREE.Group>(null);
  const petalsRef = useRef<THREE.Mesh[]>([]);
  
  // Transformation selon la page
  const getPageTransform = () => {
    switch (pageType) {
      case 'services':
        return { scale: 0.6, petals: 7, rotation: Math.PI / 4 };
      case 'about':
        return { scale: 0.8, petals: 8, pulse: true };
      case 'portfolio':
        return { scale: 0.7, petals: 6, spread: true };
      case 'blog':
        return { scale: 0.9, petals: 5, open: true };
      case 'contact':
        return { scale: 0.8, petals: 8, lean: true };
      default:
        return { scale: 1, petals: 8, rotation: 0 };
    }
  };

  const transform = getPageTransform();
  
  useFrame((state) => {
    if (meshRef.current) {
      // Rotation de base
      meshRef.current.rotation.y += 0.005;
      
      // Suivi du curseur
      meshRef.current.rotation.y += (mousePosition.x * 0.1 - meshRef.current.rotation.y) * 0.05;
      meshRef.current.rotation.x += (mousePosition.y * 0.1 - meshRef.current.rotation.x) * 0.05;
      
      // Pulse pour la page À Propos
      if (transform.pulse) {
        const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.1;
        meshRef.current.scale.set(
          transform.scale + pulse,
          transform.scale + pulse,
          transform.scale + pulse
        );
      } else {
        meshRef.current.scale.set(transform.scale, transform.scale, transform.scale);
      }
      
      // Éclosion progressive selon le scroll
      const openProgress = scrollProgress;
      if (transform.open) {
        meshRef.current.scale.set(
          transform.scale * (0.5 + openProgress * 0.5),
          transform.scale * (0.5 + openProgress * 0.5),
          transform.scale * (0.5 + openProgress * 0.5)
        );
      }
    }
    
    // Animation des pétales
    petalsRef.current.forEach((petal, i) => {
      if (petal) {
        const angle = (i / transform.petals) * Math.PI * 2;
        const radius = 1.2 + scrollProgress * 0.5;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        petal.position.x = x;
        petal.position.z = z;
        
        // Pour Services : division en pousses
        if (pageType === 'services') {
          petal.scale.set(0.6, 0.6, 0.6);
        }
      }
    });
  });

  return (
    <group ref={meshRef} position={[0, 0, 0]}>
      {/* Centre de la fleur */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
        <meshStandardMaterial 
          color="#B8001F" 
          emissive="#B8001F" 
          emissiveIntensity={0.5 + scrollProgress * 0.3}
        />
      </mesh>
      
      {/* Pétales dynamiques */}
      {Array.from({ length: transform.petals }).map((_, i) => {
        const angle = (i / transform.petals) * Math.PI * 2;
        const radius = 1.2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        return (
          <mesh
            key={i}
            ref={(el) => { if (el) petalsRef.current[i] = el; }}
            position={[x, 0, z]}
            rotation={[0, angle, 0]}
          >
            <sphereGeometry args={[0.4, 16, 16]} />
            <meshStandardMaterial 
              color={i % 2 === 0 ? "#384B70" : "#507687"} 
              emissive={i % 2 === 0 ? "#384B70" : "#507687"}
              emissiveIntensity={0.3 + scrollProgress * 0.2}
            />
          </mesh>
        );
      })}
    </group>
  );
}

const PersistentFlower: React.FC<PersistentFlowerProps> = ({ className = '' }) => {
  const location = useLocation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  // Déterminer le type de page
  const getPageType = (path: string): string => {
    if (path === '/') return 'home';
    if (path === '/services') return 'services';
    if (path === '/a-propos') return 'about';
    if (path === '/realisations') return 'portfolio';
    if (path === '/blog') return 'blog';
    if (path === '/contact') return 'contact';
    return 'home';
  };

  const pageType = getPageType(location.pathname);

  useEffect(() => {
    // Mettre à jour le scroll progress
    const unsubscribe = smoothProgress.on('change', (latest) => {
      setScrollProgress(latest);
      globalFlowerState.progress = latest;
    });

    // Suivi de la souris
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Mettre à jour l'état global
    globalFlowerState.page = pageType;
    globalFlowerState.isOpen = scrollProgress > 0.5;

    return () => {
      unsubscribe();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [smoothProgress, pageType, scrollProgress]);

  return (
    <motion.div
      className={`fixed bottom-8 right-8 z-50 ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-32 h-32 md:w-40 md:h-40">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#B8001F" />
          
          <Flower3DModel 
            scrollProgress={scrollProgress}
            pageType={pageType}
            mousePosition={mousePosition}
          />
        </Canvas>
      </div>
    </motion.div>
  );
};

export default PersistentFlower;

