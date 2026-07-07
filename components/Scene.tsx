"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom, Noise, Vignette } from "@react-three/postprocessing";
import { NeuralNetwork } from "./NeuralNetwork";
import { FloatingObjects } from "./FloatingObjects";
import * as THREE from "three";
import { PageSection } from "@/app/page";

// Component to handle camera animation based on current page
function CameraAnimation({ currentPage }: { currentPage: PageSection }) {
  useFrame((state) => {
    
    // Abstract space camera positions for each section
    let targetPos = new THREE.Vector3(0, 0, 4); // Home
    let lookTarget = new THREE.Vector3(0, 0, 0);

    switch (currentPage) {
      case 'Vision':
        targetPos.set(-4, 2, 2);
        lookTarget.set(-2, 1, 0);
        break;
      case 'Experience':
        targetPos.set(6, 2, -2);
        lookTarget.set(2, 0, -1);
        break;
      case 'Projects':
        targetPos.set(-5, -2, -6);
        lookTarget.set(-2, -1, -3);
        break;
      case 'Activities':
        targetPos.set(4, 5, 2);
        lookTarget.set(1, 2, 1);
        break;
      case 'Awards':
        targetPos.set(-6, 4, 2);
        lookTarget.set(-2, 2, 0);
        break;
      case 'Hobbies':
        targetPos.set(3, -3, 5);
        lookTarget.set(1, -1, 2);
        break;
      case 'Contact':
        targetPos.set(0, 0, -3);
        lookTarget.set(0, 0, 0);
        break;
      default:
        targetPos.set(0, 0, 4);
        lookTarget.set(0, 0, 0);
        break;
    }

    // MOUSE PARALLAX: Add subtle sway based on mouse position
    const mouseX = (state.pointer.x * Math.PI) / 10;
    const mouseY = (state.pointer.y * Math.PI) / 10;
    targetPos.x += mouseX;
    targetPos.y += mouseY;

    // Smooth movement
    state.camera.position.lerp(targetPos, 0.03);

    // Smooth LookAt
    let currentLookAt = new THREE.Vector3(0, 0, -1).applyQuaternion(state.camera.quaternion).add(state.camera.position);
    currentLookAt.lerp(lookTarget, 0.03);
    state.camera.lookAt(currentLookAt);
  });

  return null;
}

export function Scene({ currentPage }: { currentPage: PageSection }) {
  return (
    <div id="canvas-container" style={{ width: '100%', height: '100%' }}>
      <Canvas camera={{ position: [0, 0, 4], fov: 60 }}>
        <color attach="background" args={['#030303']} />
        
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 0, 0]} intensity={2} color="#3b82f6" />
        
        <CameraAnimation currentPage={currentPage} />

        {/* The 3D Neural Network */}
        <NeuralNetwork />
        <FloatingObjects />

        {/* Cinematic Post-Processing */}
        <EffectComposer>
          <Bloom luminanceThreshold={0.2} mipmapBlur intensity={1.5} />
          <Noise opacity={0.05} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
