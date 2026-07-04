import { motion } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** stagger step — multiplied by 90ms */
  delay?: number;
  className?: string;
  y?: number;
}

/** Fade-up on first scroll into view. The site's default entrance. */
export function Reveal({ children, delay = 0, className, y = 26 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: delay * 0.09 }}
    >
      {children}
    </motion.div>
  );
}
