"use client";

import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  Float,
  Html,
  ContactShadows,
  Environment,
  PerspectiveCamera,
  Center,
  OrbitControls
} from "@react-three/drei";
import * as THREE from "three";

// Preload the model
useGLTF.preload("/models/laptop.glb");

function LaptopModel() {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/laptop.glb") as any;

  return (
    <group ref={group} dispose={null} rotation={[0, -0.2, 0]}>
      <Center top>
        <primitive object={scene} />

        {/* Screen Content - Miniature Website */}
        <group position={[-0.5, 12, -17.02]} rotation={[-0.35, 0, 0]} scale={[9.4, 9.4, 9.4]}>
          <Html
            transform
            distanceFactor={1.15}
            className="laptop-screen-content overflow-hidden rounded-[8px]"
            occlude
          >
            <div
              className="w-[1280px] h-[800px] bg-[#0a0a0a] select-none pointer-events-none rounded-[10px]"
            >
              <iframe
                src="/"
                className="w-full h-full border-none opacity-90 brightness-110"
                title="Website Preview"
              />
              {/* Glossy Overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 to-transparent opacity-30" />
            </div>
          </Html>
        </group>
      </Center>
    </group>
  );
}

function LoadingScreen() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-[#00CED1] border-t-transparent rounded-full animate-spin" />
        <span className="text-[#00CED1] font-mono text-sm tracking-widest uppercase">Initializing 3D Visual...</span>
      </div>
    </Html>
  );
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 2, 100]} fov={35} />

      {/* Premium Lighting */}
      <ambientLight intensity={0.2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={150} castShadow shadow-mapSize={2048} />
      <rectAreaLight
        width={10}
        height={10}
        intensity={20}
        color="#00CED1"
        position={[0, 5, -5]}
        rotation={[-Math.PI / 2, 0, 0]}
      />

      <Suspense fallback={<LoadingScreen />}>
        <Environment preset="city" />
        <Float rotationIntensity={0.2} floatIntensity={0.5} speed={2}>
          <LaptopModel />
        </Float>
      </Suspense>

      <ContactShadows
        position={[0, -1.5, 0]}
        opacity={0.4}
        scale={20}
        blur={2}
        far={4.5}
      />

      {/* Interactivity: allows rotating the laptop */}
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        enableDamping
        dampingFactor={0.05}
      />
    </>
  );
}

export default function LaptopHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] cursor-grab active:cursor-grabbing">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#00CED1] opacity-5 blur-[120px] rounded-full pointer-events-none" />

      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
