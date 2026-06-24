"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef, useState, useEffect, Suspense } from "react";
import * as THREE from "three";

const FloatingIcosahedron = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.LineSegments>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.z += delta * 0.1;

      // Subtle follow mouse
      meshRef.current.position.x = THREE.MathUtils.lerp(
        meshRef.current.position.x,
        mousePos.x * 0.3,
        0.02
      );
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        mousePos.y * 0.3,
        0.02
      );
    }
    if (wireRef.current) {
      wireRef.current.rotation.x += delta * 0.15;
      wireRef.current.rotation.y += delta * 0.2;
      wireRef.current.rotation.z += delta * 0.1;

      wireRef.current.position.x = THREE.MathUtils.lerp(
        wireRef.current.position.x,
        mousePos.x * 0.3,
        0.02
      );
      wireRef.current.position.y = THREE.MathUtils.lerp(
        wireRef.current.position.y,
        mousePos.y * 0.3,
        0.02
      );
    }
    if (glowRef.current) {
      glowRef.current.rotation.x += delta * 0.15;
      glowRef.current.rotation.y += delta * 0.2;
      glowRef.current.rotation.z += delta * 0.1;

      glowRef.current.position.x = THREE.MathUtils.lerp(
        glowRef.current.position.x,
        mousePos.x * 0.3,
        0.02
      );
      glowRef.current.position.y = THREE.MathUtils.lerp(
        glowRef.current.position.y,
        mousePos.y * 0.3,
        0.02
      );
    }
  });

  const scale = Math.min(viewport.width, viewport.height) * 0.35;

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group>
        {/* Solid inner mesh with distort */}
        <mesh ref={meshRef} scale={scale}>
          <icosahedronGeometry args={[1, 1]} />
          <MeshDistortMaterial
            color="#7042f8"
            transparent
            opacity={0.15}
            distort={0.3}
            speed={2}
            roughness={0.4}
          />
        </mesh>

        {/* Wireframe overlay */}
        <lineSegments ref={wireRef} scale={scale}>
          <edgesGeometry
            args={[new THREE.IcosahedronGeometry(1, 1)]}
          />
          <lineBasicMaterial color="#9b6dff" transparent opacity={0.6} />
        </lineSegments>

        {/* Outer glow shell */}
        <mesh ref={glowRef} scale={scale * 1.15}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial
            color="#7042f8"
            transparent
            opacity={0.05}
            side={THREE.BackSide}
          />
        </mesh>
      </group>
    </Float>
  );
};

const FloatingRing = () => {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.x += delta * 0.3;
      ringRef.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.8}>
      <mesh ref={ringRef} scale={1.8} position={[0, 0, -1]}>
        <torusGeometry args={[1, 0.02, 16, 100]} />
        <meshBasicMaterial color="#00d4ff" transparent opacity={0.3} />
      </mesh>
    </Float>
  );
};

export const Floating3D = () => {
  return (
    <div className="w-full h-[500px] md:h-[650px]">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#7042f8" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00d4ff" />
        <Suspense fallback={null}>
          <FloatingIcosahedron />
          <FloatingRing />
        </Suspense>
      </Canvas>
    </div>
  );
};
