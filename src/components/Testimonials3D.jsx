import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedIcosahedron = () => {
  const mesh = useRef(null);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.x = time * 0.3;
    mesh.current.rotation.y = time * 0.4;
  });

  return (
    <Float speed={4} rotationIntensity={1.5} floatIntensity={2}>
      <Icosahedron ref={mesh} args={[1, 15]} scale={1.8}>
        <MeshDistortMaterial
          color="#8b5cf6"
          speed={2}
          distort={0.4}
          radius={1}
        />
      </Icosahedron>
    </Float>
  );
};

export const Testimonials3D = () => {
  return (
    <div className="w-full h-full min-h-[300px] relative">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
        <AnimatedIcosahedron />
      </Canvas>
    </div>
  );
};
