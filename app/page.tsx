"use client";

import dynamic from 'next/dynamic';
import { Loader } from '@react-three/drei';
import { useState } from 'react';
import { OverlayUI } from '@/components/OverlayUI';

const Scene = dynamic(() => import('@/components/Scene').then((mod) => mod.Scene), {
  ssr: false,
});

export type PageSection = 'Home' | 'Vision' | 'Experience' | 'Projects' | 'Thesis' | 'Activities' | 'Awards' | 'Hobbies' | 'Contact';

export default function Home() {
  const [currentPage, setCurrentPage] = useState<PageSection>("Home");

  return (
    <main style={{ width: "100vw", height: "100vh", position: "relative", overflow: "hidden", background: "#030303" }}>
      <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
        <Scene currentPage={currentPage} />
      </div>
      
      <div style={{ position: "absolute", inset: 0, zIndex: 10, pointerEvents: "none" }}>
        <OverlayUI currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>

      <Loader 
        containerStyles={{ background: '#050505', zIndex: 100 }} 
        innerStyles={{ background: 'rgba(255,255,255,0.1)', height: '10px', width: '300px', borderRadius: '5px' }} 
        barStyles={{ background: '#3b82f6', height: '10px', borderRadius: '5px' }} 
        dataInterpolation={(p) => `Loading Neural Network... ${p.toFixed(0)}%`} 
      />
    </main>
  );
}
