import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Icosahedron, PerspectiveCamera } from '@react-three/drei';

const AnimatedShape = () => {
  const mesh = useRef(null);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.x = time * 0.2;
      mesh.current.rotation.y = time * 0.3;
    }
  });

  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={2}>
      <Icosahedron ref={mesh} args={[1, 1]} scale={2}>
        <MeshDistortMaterial
          color="#3b82f6"
          speed={2}
          distort={0.4}
          radius={1}
          wireframe
        />
      </Icosahedron>
    </Float>
  );
};

export const ProjectHero3D = () => {
  return (
    <div className="w-full h-full relative">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
        <AnimatedShape />
      </Canvas>
    </div>
  );
};
