import { motion, useScroll, useSpring } from "motion/react";

/** Thin gradient bar along the top tracking scroll position. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 top-0 z-[250] h-[3px] w-full origin-left"
      style={{ scaleX, background: "var(--grad)" }}
    />
  );
}
