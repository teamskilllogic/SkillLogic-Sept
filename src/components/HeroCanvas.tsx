
import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Preload, useAspect } from '@react-three/drei';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTheme } from '@/providers/ThemeProvider';
import * as THREE from 'three';

// Globe component with pulsing effect
const Globe = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();
  const [hovered, setHovered] = useState(false);
  const [scale, setScale] = useState(1);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;

      // Subtle breathing effect
      const pulseFactor = Math.sin(state.clock.getElapsedTime()) * 0.03;
      setScale(1 + pulseFactor);

      // Slight tilt
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  // Scale up slightly on hover
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);

  return (
    <mesh
      ref={meshRef}
      position={[0, 0, 0]}
      scale={[scale, scale, scale]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial
        color={theme === 'dark' ? '#1E3A8A' : '#1E3A8A'}
        wireframe={true}
        emissive={theme === 'dark' ? '#F97316' : '#F97316'}
        emissiveIntensity={hovered ? 0.4 : 0.2}
        roughness={0.7}
        metalness={0.3}
      />
    </mesh>
  );
};

// Floating particles around the globe
const Particles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const { theme } = useTheme();
  const count = 150; // Reduced particle count for better performance

  // Create particles
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    // Position within a sphere
    const radius = 3 + Math.random() * 2;
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);

    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);

    // Colors - mix of primary and secondary
    colors[i * 3] = theme === 'dark' ? 0.97 : 0.4; // R
    colors[i * 3 + 1] = theme === 'dark' ? 0.45 : 0.2; // G
    colors[i * 3 + 2] = theme === 'dark' ? 0.09 : 0.7; // B
  }

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
};

// Scene wrapper for proper sizing
const Scene = () => {
  const isMobile = useIsMobile();
  const { theme } = useTheme();

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} color={theme === 'dark' ? '#ffffff' : '#ffffff'} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#F97316" />
      <Globe />
      <Particles />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={!isMobile}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
      />
      <Preload all />
    </>
  );
};

const HeroCanvas = () => {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent SSR issues

  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: isMobile ? 75 : 60, near: 0.1, far: 1000 }}
        dpr={[1, 2]}
        className="w-full h-full"
        style={{
          background: 'transparent',
          width: '100%',
          height: '100%'
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default HeroCanvas;
