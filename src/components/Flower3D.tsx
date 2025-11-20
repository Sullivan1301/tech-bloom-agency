import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Composant de la fleur 3D animée
function FlowerModel({ mousePosition, scrollProgress }: { mousePosition: { x: number; y: number }, scrollProgress: number }) {
  const meshRef = useRef<THREE.Group>(null);
  const petalsRef = useRef<THREE.Group[]>([]);
  
  // Animation de la fleur
  useFrame((state) => {
    if (meshRef.current) {
      // Rotation lente et fluide (effet de "respiration")
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      
      // Suivi du curseur (légèrement)
      meshRef.current.rotation.y += (mousePosition.x * 0.1 - meshRef.current.rotation.y) * 0.05;
      meshRef.current.rotation.x += (mousePosition.y * 0.1 - meshRef.current.rotation.x) * 0.05;
      
      // Éclosion progressive selon le scroll
      const scale = 0.5 + scrollProgress * 0.5;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  // Création d'une fleur simple avec géométrie Three.js
  return (
    <group ref={meshRef} position={[0, 0, 0]}>
      {/* Centre de la fleur */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
        <meshStandardMaterial color="#B8001F" emissive="#B8001F" emissiveIntensity={0.5} />
      </mesh>
      
      {/* Pétales */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 1.2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        return (
          <group key={i} ref={(el) => { if (el) petalsRef.current[i] = el; }}>
            <mesh position={[x, 0, z]} rotation={[0, angle, 0]}>
              <sphereGeometry args={[0.4, 16, 16]} />
              <meshStandardMaterial 
                color={i % 2 === 0 ? "#384B70" : "#507687"} 
                emissive={i % 2 === 0 ? "#384B70" : "#507687"}
                emissiveIntensity={0.3}
              />
            </mesh>
          </group>
        );
      })}
      
      {/* Particules lumineuses */}
      <Stars radius={3} depth={50} count={100} factor={2} fade speed={1} />
    </group>
  );
}

// Particules qui gravitent autour
function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particleCount = 50;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 10;
    positions[i + 1] = (Math.random() - 0.5) * 10;
    positions[i + 2] = (Math.random() - 0.5) * 10;
  }
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
    }
  });
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.1} color="#B8001F" transparent opacity={0.6} />
    </points>
  );
}

interface Flower3DProps {
  className?: string;
  scrollProgress?: number;
}

const Flower3D: React.FC<Flower3DProps> = ({ className = '', scrollProgress = 0 }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isLoaded) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="w-32 h-32 border-4 border-tech-accent border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        className="bg-transparent"
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#B8001F" />
        
        {/* Effet glow */}
        <fog attach="fog" args={['#384B70', 5, 15]} />
        
        <FlowerModel mousePosition={mousePosition} scrollProgress={scrollProgress} />
        <FloatingParticles />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default Flower3D;

