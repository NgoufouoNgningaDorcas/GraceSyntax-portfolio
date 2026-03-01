import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshWobbleMaterial, Box } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedBox = () => {
  const mesh = useRef(null);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.x = time * 0.2;
    mesh.current.rotation.y = time * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Box ref={mesh} args={[1.5, 1.5, 1.5]} scale={1.2}>
        <MeshWobbleMaterial
          color="#3b82f6"
          speed={1}
          factor={0.6}
        />
      </Box>
    </Float>
  );
};

export const About3D = () => {
  return (
    <div className="w-full h-full min-h-[300px] relative">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
        <AnimatedBox />
      </Canvas>
    </div>
  );
};
