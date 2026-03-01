import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedOctahedron = () => {
  const mesh = useRef(null);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.x = time * 0.5;
    mesh.current.rotation.y = time * 0.5;
  });

  return (
    <Float speed={5} rotationIntensity={1} floatIntensity={3}>
      <Octahedron ref={mesh} args={[1, 0]} scale={1.5}>
        <MeshDistortMaterial
          color="#f59e0b"
          speed={4}
          distort={0.5}
          radius={1}
        />
      </Octahedron>
    </Float>
  );
};

export const Contact3D = () => {
  return (
    <div className="w-full h-full min-h-[300px] relative">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
        <AnimatedOctahedron />
      </Canvas>
    </div>
  );
};
