"use client";

import dynamic from 'next/dynamic';
import { Loader } from '@react-three/drei';

const Scene = dynamic(() => import('@/components/Scene').then((mod) => mod.Scene), {
  ssr: false,
});

export default function Home() {
  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <Scene />
      <Loader 
        containerStyles={{ background: '#050505' }} 
        innerStyles={{ background: 'rgba(255,255,255,0.1)', height: '10px', width: '300px', borderRadius: '5px' }} 
        barStyles={{ background: '#3b82f6', height: '10px', borderRadius: '5px' }} 
        dataInterpolation={(p) => `Loading Neural Network... ${p.toFixed(0)}%`} 
      />
    </main>
  );
}
