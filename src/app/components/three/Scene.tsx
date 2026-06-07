"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Icosahedron, TorusKnot, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const CYAN = new THREE.Color("#22d3ee");
const VIOLET = new THREE.Color("#a855f7");
const BLUE = new THREE.Color("#3b82f6");
const MAGENTA = new THREE.Color("#d946ef");

// Shared pointer state (normalized -1..1), updated by the rig
const pointer = { x: 0, y: 0 };

/* Deep starfield — thousands of tiny far points, slow drift */
function Starfield() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const count = 2600;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 14 + Math.random() * 26;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.012;
      ref.current.rotation.x += delta * 0.004;
    }
  });

  return (
    <Points ref={ref} positions={positions} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#9fe9ff"
        size={0.05}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  );
}

/* Neon particle swarm — colored points clustered near camera, gentle swirl + pointer parallax */
function ParticleSwarm() {
  const ref = useRef<THREE.Points>(null);
  const count = 1400;

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [CYAN, VIOLET, BLUE, MAGENTA];
    for (let i = 0; i < count; i++) {
      const r = Math.random() * 9 + 1;
      const theta = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 12;
      pos[i * 3] = Math.cos(theta) * r;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = Math.sin(theta) * r - 2;
      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return { positions: pos, colors: col };
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.05;
    const t = state.clock.elapsedTime;
    ref.current.position.y = Math.sin(t * 0.3) * 0.4;
    ref.current.rotation.z = pointer.x * 0.15;
    ref.current.rotation.x = pointer.y * 0.1;
  });

  return (
    <points ref={ref} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.09}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* Floating abstract geometry — wireframe holographic objects */
function FloatingShapes() {
  const knot = useRef<THREE.Mesh>(null);
  const ico = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (knot.current) {
      knot.current.rotation.x += delta * 0.18;
      knot.current.rotation.y += delta * 0.12;
    }
    if (ico.current) {
      ico.current.rotation.y -= delta * 0.1;
      ico.current.rotation.z += delta * 0.06;
    }
  });

  return (
    <>
      <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.4}>
        <TorusKnot ref={knot} args={[1.1, 0.32, 160, 32]} position={[-4.2, 1.4, -2]}>
          <meshStandardMaterial
            color="#0b1228"
            emissive={CYAN}
            emissiveIntensity={0.45}
            metalness={0.9}
            roughness={0.25}
            wireframe
          />
        </TorusKnot>
      </Float>

      <Float speed={1.1} rotationIntensity={0.5} floatIntensity={1.2}>
        <Icosahedron ref={ico} args={[1.3, 0]} position={[4.4, -1.2, -1.5]}>
          <meshStandardMaterial
            color="#120a2a"
            emissive={VIOLET}
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.2}
            wireframe
          />
        </Icosahedron>
      </Float>

      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.6}>
        <mesh position={[2.6, 2.4, -3]}>
          <octahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial
            color="#06121f"
            emissive={MAGENTA}
            emissiveIntensity={0.6}
            metalness={0.7}
            roughness={0.3}
            wireframe
          />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.1}>
        <mesh position={[-3, -2.6, -2.5]}>
          <dodecahedronGeometry args={[0.55, 0]} />
          <meshStandardMaterial
            color="#06121f"
            emissive={BLUE}
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.25}
            wireframe
          />
        </mesh>
      </Float>
    </>
  );
}

/* Camera rig — smooth pointer parallax + subtle scroll drift */
function CameraRig() {
  const { camera } = useThree();
  const scrollY = useRef(0);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (typeof window !== "undefined") {
      const max = document.body.scrollHeight - window.innerHeight;
      scrollY.current = max > 0 ? window.scrollY / max : 0;
    }
    const targetX = pointer.x * 1.6;
    const targetY = pointer.y * 1.1 + scrollY.current * 2.5;
    camera.position.x += (targetX - camera.position.x) * 0.04;
    camera.position.y += (-targetY - camera.position.y) * 0.04;
    camera.position.z = 9 + Math.sin(t * 0.15) * 0.3;
    camera.lookAt(0, scrollY.current * -1.5, 0);
  });
  return null;
}

function PointerTracker() {
  useThree();
  if (typeof window !== "undefined") {
    window.onpointermove = (e) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
  }
  return null;
}

export default function Scene() {
  return (
    <Canvas
      className="scene-canvas"
      camera={{ position: [0, 0, 9], fov: 60 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <color attach="background" args={["#03040a"]} />
      <fog attach="fog" args={["#03040a", 12, 34]} />

      <ambientLight intensity={0.4} />
      <pointLight position={[6, 6, 6]} intensity={120} color="#22d3ee" distance={40} />
      <pointLight position={[-6, -4, 2]} intensity={90} color="#a855f7" distance={40} />
      <pointLight position={[0, 4, -6]} intensity={70} color="#d946ef" distance={40} />

      <Starfield />
      <ParticleSwarm />
      <FloatingShapes />

      <CameraRig />
      <PointerTracker />
    </Canvas>
  );
}
