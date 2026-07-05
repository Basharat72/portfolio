/* =========================================================================
   Hero3D.tsx — animated particle terrain (a "sea of data points") rendered
   with three.js. Lazy-loaded from Hero.tsx so it never blocks first paint;
   skipped entirely on small screens and for prefers-reduced-motion.
   ========================================================================= */

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const COLS = 110;
const ROWS = 42;
const GAP = 0.42;

function Wave({ color }: { color: string }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(COLS * ROWS * 3);
    let i = 0;
    for (let x = 0; x < COLS; x++) {
      for (let z = 0; z < ROWS; z++) {
        arr[i++] = (x - COLS / 2) * GAP;
        arr[i++] = 0;
        arr[i++] = (z - ROWS / 2) * GAP;
      }
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    const points = ref.current;
    if (!points) return;
    const t = clock.elapsedTime * 0.55;
    const pos = points.geometry.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < COLS * ROWS; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      pos.setY(i, Math.sin(x * 0.32 + t) * Math.cos(z * 0.38 + t * 0.7) * 0.75);
    }
    pos.needsUpdate = true;
  });

  return (
    <points ref={ref} rotation={[-0.32, 0.18, 0]} position={[0, -2.1, 0]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={0.05}
        sizeAttenuation
        transparent
        opacity={0.6}
        depthWrite={false}
      />
    </points>
  );
}

export default function Hero3D({ dark }: { dark: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 3.4, 9.5], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
    >
      <Wave color={dark ? "#8b96ff" : "#4f5df0"} />
    </Canvas>
  );
}
