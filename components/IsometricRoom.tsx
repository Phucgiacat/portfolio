"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function IsometricRoom() {
  const roomRef = useRef<THREE.Group>(null);

  // Thêm hiệu ứng nổi nhẹ nhàng (floating) cho cả căn phòng
  useFrame((state) => {
    if (roomRef.current) {
      roomRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={roomRef} position={[0, -1, 0]}>
      {/* Floor */}
      <mesh position={[0, -0.25, 0]} receiveShadow>
        <boxGeometry args={[10, 0.5, 10]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.8} />
      </mesh>

      {/* Back Wall */}
      <mesh position={[0, 2.5, -4.75]} receiveShadow>
        <boxGeometry args={[10, 5, 0.5]} />
        <meshStandardMaterial color="#222" roughness={0.9} />
      </mesh>

      {/* Left Wall */}
      <mesh position={[-4.75, 2.5, 0]} receiveShadow>
        <boxGeometry args={[0.5, 5, 10]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
      </mesh>

      {/* Desk */}
      <group position={[-1.5, 1, -2]}>
        {/* Table Top */}
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[4, 0.1, 2]} />
          <meshStandardMaterial color="#333" roughness={0.5} />
        </mesh>
        
        {/* Legs */}
        <mesh position={[-1.8, -0.5, -0.8]} castShadow>
          <boxGeometry args={[0.1, 1, 0.1]} />
          <meshStandardMaterial color="#555" />
        </mesh>
        <mesh position={[1.8, -0.5, -0.8]} castShadow>
          <boxGeometry args={[0.1, 1, 0.1]} />
          <meshStandardMaterial color="#555" />
        </mesh>
        <mesh position={[-1.8, -0.5, 0.8]} castShadow>
          <boxGeometry args={[0.1, 1, 0.1]} />
          <meshStandardMaterial color="#555" />
        </mesh>
        <mesh position={[1.8, -0.5, 0.8]} castShadow>
          <boxGeometry args={[0.1, 1, 0.1]} />
          <meshStandardMaterial color="#555" />
        </mesh>

        {/* Monitor */}
        <group position={[0, 0.5, -0.5]}>
          {/* Stand */}
          <mesh position={[0, -0.25, 0]} castShadow>
            <boxGeometry args={[0.2, 0.5, 0.2]} />
            <meshStandardMaterial color="#111" />
          </mesh>
          <mesh position={[0, -0.5, 0.2]} castShadow>
            <boxGeometry args={[0.8, 0.05, 0.6]} />
            <meshStandardMaterial color="#111" />
          </mesh>
          {/* Screen */}
          <mesh position={[0, 0, 0]} castShadow>
            <boxGeometry args={[2.5, 1.4, 0.1]} />
            <meshStandardMaterial color="#0a0a0a" roughness={0.2} metalness={0.8} />
          </mesh>
          {/* Screen Glow (Simulating active screen) */}
          <mesh position={[0, 0, 0.06]}>
            <planeGeometry args={[2.4, 1.3]} />
            <meshBasicMaterial color="#3b82f6" toneMapped={false} />
          </mesh>
        </group>

        {/* Keyboard */}
        <mesh position={[0, 0.08, 0.4]} castShadow>
          <boxGeometry args={[1.2, 0.05, 0.4]} />
          <meshStandardMaterial color="#222" />
        </mesh>
      </group>

      {/* Abstract Floating Objects (representing Skills/Creativity) */}
      <group position={[2, 2, 0]}>
        <mesh position={[0, 0, 0]} castShadow>
          <octahedronGeometry args={[0.5]} />
          <meshStandardMaterial color="#3b82f6" wireframe />
        </mesh>
        <mesh position={[1, 1, -1]} castShadow>
          <torusGeometry args={[0.3, 0.1, 16, 32]} />
          <meshStandardMaterial color="#8b5cf6" roughness={0.2} metalness={0.8} />
        </mesh>
      </group>
    </group>
  );
}
