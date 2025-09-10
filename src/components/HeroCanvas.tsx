
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
                color={theme === 'dark' ? '#ffffff' : '#d1d5db'}
                wireframe={true}
                emissive={theme === 'dark' ? '#f3f4f6' : '#f9fafb'}
                emissiveIntensity={hovered ? 0.5 : 0.3}
                roughness={0.3}
                metalness={0.1}
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

        // Colors - enhanced visibility
        if (theme === 'dark') {
            colors[i * 3] = 0.05; // R - much darker blue for maximum contrast
            colors[i * 3 + 1] = 0.2; // G
            colors[i * 3 + 2] = 0.9; // B - very bright blue
        } else {
            colors[i * 3] = 0.02; // R - almost black for light theme
            colors[i * 3 + 1] = 0.15; // G
            colors[i * 3 + 2] = 0.8; // B - strong blue
        }
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
                size={0.08}
                vertexColors
                transparent
                opacity={1.0}
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
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 10, 5]} intensity={0.8} color={theme === 'dark' ? '#ffffff' : '#f8fafc'} />
            <directionalLight position={[-10, -10, -5]} intensity={0.3} color={theme === 'dark' ? '#d1d5db' : '#374151'} />
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
