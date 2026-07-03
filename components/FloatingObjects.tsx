"use client";

import { Float } from "@react-three/drei";

export function FloatingObjects() {
  return (
    <>
      {/* AI / Neural Network Symbol */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2} position={[6, 3, -1]}>
        <mesh>
          <torusKnotGeometry args={[0.5, 0.15, 100, 16]} />
          <meshPhysicalMaterial 
            color="#3b82f6" 
            emissive="#3b82f6" 
            emissiveIntensity={0.5} 
            roughness={0.1} 
            metalness={0.8} 
            wireframe={true} 
          />
        </mesh>
      </Float>

      {/* Data / Database Symbol */}
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5} position={[-5, -1, 3]}>
        <mesh>
          <cylinderGeometry args={[0.6, 0.6, 1.5, 32]} />
          <meshPhysicalMaterial 
            color="#10b981" 
            transmission={0.9} 
            opacity={1} 
            metalness={0.2} 
            roughness={0.1} 
            ior={1.5} 
            thickness={0.5} 
          />
        </mesh>
      </Float>

      {/* Algorithm Symbol */}
      <Float speed={3} rotationIntensity={2.5} floatIntensity={2} position={[2, -5, -4]}>
        <mesh>
          <octahedronGeometry args={[0.8]} />
          <meshPhysicalMaterial 
            color="#f59e0b" 
            emissive="#f59e0b" 
            emissiveIntensity={0.8} 
            wireframe={true} 
          />
        </mesh>
      </Float>
      
      {/* Deep Learning Symbol */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1} position={[-7, 5, -2]}>
        <mesh>
          <icosahedronGeometry args={[0.7, 0]} />
          <meshPhysicalMaterial 
            color="#8b5cf6" 
            transmission={1} 
            opacity={1} 
            metalness={0.5} 
            roughness={0.2} 
            ior={2} 
            thickness={1} 
          />
        </mesh>
      </Float>
    </>
  );
}
