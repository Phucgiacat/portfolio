"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export function NeuralNetwork() {
  const pointsRef = useRef<THREE.Points>(null);
  const { mouse, viewport } = useThree();

  const particlesCount = 2000;
  
  // Store both current and original positions
  const { positions, originalPositions } = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    const originalPositions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos((Math.random() * 2) - 1);
      const r = 8 + (Math.random() - 0.5) * 5; 
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;
    }
    return { positions, originalPositions };
  }, [particlesCount]);

  // Animation: Xoay khối hạt & Tương tác đẩy (Repel)
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.2;

      // Mouse repel logic
      const geo = pointsRef.current.geometry as THREE.BufferGeometry;
      const posAttribute = geo.attributes.position;
      
      // Convert mouse to pseudo-3D coordinate
      const targetX = (mouse.x * viewport.width) / 2;
      const targetY = (mouse.y * viewport.height) / 2;

      for(let i = 0; i < particlesCount; i++) {
        const ox = originalPositions[i * 3];
        const oy = originalPositions[i * 3 + 1];
        const oz = originalPositions[i * 3 + 2];

        const cx = posAttribute.getX(i);
        const cy = posAttribute.getY(i);
        const cz = posAttribute.getZ(i);

        // Vector from particle to mouse
        // We only approximate distance in X and Y for simplicity
        const dx = cx - targetX;
        const dy = cy - targetY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Repel force
        const maxDist = 3;
        if (dist < maxDist) {
          const force = (maxDist - dist) / maxDist;
          posAttribute.setXYZ(
            i,
            cx + (dx / dist) * force * 0.2,
            cy + (dy / dist) * force * 0.2,
            cz
          );
        } else {
          // Return to original
          posAttribute.setXYZ(
            i,
            cx + (ox - cx) * 0.1,
            cy + (oy - cy) * 0.1,
            cz + (oz - cz) * 0.1
          );
        }
      }
      posAttribute.needsUpdate = true;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#3b82f6"
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Lõi năng lượng trung tâm */}
      <mesh>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
      <mesh>
        <sphereGeometry args={[2.1, 16, 16]} />
        <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.1} />
      </mesh>
    </group>
  );
}
