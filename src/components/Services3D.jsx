import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, TorusKnot } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedTorus = () => {
  const mesh = useRef(null);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.x = time * 0.1;
    mesh.current.rotation.y = time * 0.2;
  });

  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={1}>
      <TorusKnot ref={mesh} args={[1, 0.3, 128, 16]} scale={1.2}>
        <MeshDistortMaterial
          color="#10b981"
          speed={2}
          distort={0.3}
          radius={1}
        />
      </TorusKnot>
    </Float>
  );
};

export const Services3D = () => {
  return (
    <div className="w-full h-full min-h-[300px] relative">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
        <AnimatedTorus />
      </Canvas>
    </div>
  );
};
