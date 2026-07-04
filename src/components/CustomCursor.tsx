import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useEffect, useState } from "react";

/**
 * Soft ambient glow that trails the pointer. The native cursor stays visible
 * (and instant) — this only adds atmosphere, so nothing ever feels laggy.
 */
export function CustomCursor() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const gx = useSpring(x, { stiffness: 450, damping: 45, mass: 0.6 });
  const gy = useSpring(y, { stiffness: 450, damping: 45, mass: 0.6 });

  useEffect(() => {
    if (reduceMotion || !window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    document.addEventListener("mousemove", onMove, { passive: true });
    return () => document.removeEventListener("mousemove", onMove);
  }, [reduceMotion, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[90] h-[340px] w-[340px] rounded-full"
      style={{
        x: gx,
        y: gy,
        translateX: "-50%",
        translateY: "-50%",
        background:
          "radial-gradient(circle, color-mix(in srgb, var(--accent) 13%, transparent) 0%, transparent 65%)",
      }}
    />
  );
}
