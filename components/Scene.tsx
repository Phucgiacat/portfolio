"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, Scroll, useScroll } from "@react-three/drei";
import { EffectComposer, Bloom, Noise, Vignette } from "@react-three/postprocessing";
import { NeuralNetwork } from "./NeuralNetwork";
import { FloatingObjects } from "./FloatingObjects";
import { OverlayUI } from "./OverlayUI";
import * as THREE from "three";

// Component to handle camera animation based on scroll
function CameraAnimation() {
  const scroll = useScroll();
  
  useFrame((state) => {
    const offset = scroll.offset; // 0 to 1 over 8 pages
    
    // Abstract space camera positions for 8 sections
    const p1 = new THREE.Vector3(0, 0, 4);      // 1. Hero
    const p2 = new THREE.Vector3(5, 3, 2);      // 2. Edu/Skills
    const p3 = new THREE.Vector3(8, 0, -2);     // 3. Exp 1
    const p4 = new THREE.Vector3(4, -4, -6);    // 4. Exp 2
    const p5 = new THREE.Vector3(-4, -2, -8);   // 5. Proj 1
    const p6 = new THREE.Vector3(-8, 3, -4);    // 6. Proj 2
    const p7 = new THREE.Vector3(-6, 6, 2);     // 7. Achievements
    const p8 = new THREE.Vector3(0, 0, -3);     // 8. Contact

    const points = [p1, p2, p3, p4, p5, p6, p7, p8];
    const segment = 1 / (points.length - 1); // 1/7
    
    let index = Math.floor(offset / segment);
    if (index >= points.length - 1) index = points.length - 2;
    
    const t = (offset - index * segment) / segment;
    
    let targetPos = new THREE.Vector3();
    targetPos.lerpVectors(points[index], points[index + 1], t);

    // MOUSE PARALLAX: Add subtle sway based on mouse position
    const mouseX = (state.pointer.x * Math.PI) / 8;
    const mouseY = (state.pointer.y * Math.PI) / 8;
    targetPos.x += mouseX;
    targetPos.y += mouseY;

    state.camera.position.lerp(targetPos, 0.05);

    // Dynamic LookAt focusing on center but swaying
    const lookAtPos = new THREE.Vector3(
      Math.sin(offset * Math.PI * 4) * 2, 
      Math.cos(offset * Math.PI * 4) * 2, 
      Math.sin(offset * Math.PI * 2) * 2
    );
    
    let targetLookAt = new THREE.Vector3();
    targetLookAt.lerpVectors(new THREE.Vector3(0,0,0), lookAtPos, 0.3);
    state.camera.lookAt(targetLookAt);
  });

  return null;
}

export function Scene() {
  return (
    <div id="canvas-container">
      <Canvas camera={{ position: [0, 0, 4], fov: 60 }}>
        <color attach="background" args={['#030303']} />
        
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 0, 0]} intensity={2} color="#3b82f6" />
        
        <ScrollControls pages={8} damping={0.1}>
          
          <CameraAnimation />

          <Scroll>
            {/* The 3D Neural Network */}
            <NeuralNetwork />
            <FloatingObjects />
          </Scroll>

          <Scroll html style={{ width: '100%' }}>
            {/* The HTML UI Overlay */}
            <OverlayUI />
          </Scroll>

        </ScrollControls>

        {/* Cinematic Post-Processing */}
        <EffectComposer disableNormalPass>
          <Bloom luminanceThreshold={0.2} mipmapBlur intensity={1.5} />
          <Noise opacity={0.05} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
