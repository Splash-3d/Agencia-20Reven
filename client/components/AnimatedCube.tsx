import { useRef, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

interface CubeProps {
  position?: [number, number, number];
}

export default function AnimatedCube({ position = [0, 0, 0] }: CubeProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.002;
      meshRef.current.rotation.z += 0.001;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        color="#4BA3FF"
        emissive="#2563EB"
        metalness={0.8}
        roughness={0.2}
      />
      <meshPhongMaterial attach="material" />
    </mesh>
  );
}
