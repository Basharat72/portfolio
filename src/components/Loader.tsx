import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

/** Brief branded intro shown until the page has loaded (max ~2s). */
export function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // wait for the display fonts (not the full page) — keeps LCP fast
    let cancelled = false;
    const finish = () => !cancelled && setTimeout(() => setDone(true), 150);
    document.fonts?.ready.then(finish);
    const safety = setTimeout(() => setDone(true), 900);
    return () => {
      cancelled = true;
      clearTimeout(safety);
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[400] flex flex-col items-center justify-center gap-7 bg-bg"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          aria-hidden
        >
          <div className="font-display text-5xl font-bold tracking-tight">
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 24, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              B
            </motion.span>
            <motion.span
              className="grad-text inline-block"
              initial={{ opacity: 0, y: 24, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            >
              A
            </motion.span>
          </div>
          <div className="h-[3px] w-[148px] overflow-hidden rounded-full bg-surface-hover">
            <motion.span
              className="block h-full w-2/5 rounded-full"
              style={{ background: "var(--grad)" }}
              animate={{ x: ["-110%", "380%"] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
