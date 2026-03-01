import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Box } from '@react-three/drei';
import * as THREE from 'three';

const SingleCube = ({ cube }) => {
  const mesh = useRef(null);
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.005 * cube.speed;
      mesh.current.rotation.y += 0.005 * cube.speed;
    }
  });

  return (
    <Float speed={cube.speed * 5} rotationIntensity={2} floatIntensity={2}>
      <Box ref={mesh} position={cube.position} rotation={cube.rotation} scale={cube.scale}>
        <meshStandardMaterial color="#6366f1" opacity={0.4} transparent />
      </Box>
    </Float>
  );
};

const FloatingCubes = ({ count = 15 }) => {
  const cubes = useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      position: [(Math.random() - 0.5) * 12, (Math.random() - 0.5) * 12, (Math.random() - 0.5) * 12],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
      scale: Math.random() * 0.6 + 0.2,
      speed: Math.random() * 0.5 + 0.1
    }));
  }, [count]);

  return (
    <>
      {cubes.map((cube, i) => (
        <SingleCube key={i} cube={cube} />
      ))}
    </>
  );
};

export const Projects3D = () => {
  return (
    <div className="w-full h-full min-h-[400px] relative">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <FloatingCubes />
      </Canvas>
    </div>
  );
};
