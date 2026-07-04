import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import type { TranslationKey } from "../i18n/translations";
import { Reveal } from "./Reveal";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView) return;
    if (reduceMotion) {
      el.textContent = `${target}${suffix}`;
      return;
    }
    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => (el.textContent = `${Math.round(v)}${suffix}`),
    });
    return () => controls.stop();
  }, [inView, target, suffix, reduceMotion]);

  return (
    <span ref={ref} className="grad-text block font-display text-[clamp(2rem,4vw,2.7rem)] font-bold">
      0{suffix}
    </span>
  );
}

const STATS: { target: number; suffix?: string; labelKey: TranslationKey }[] = [
  { target: 7, suffix: "+", labelKey: "stats.years" },
  { target: 7, labelKey: "stats.orgs" },
  { target: 3, labelKey: "stats.degrees" },
];

export function Stats() {
  const { t } = useLanguage();
  return (
    <section aria-label="Key figures" className="pb-4">
      <div className="container-site grid grid-cols-1 gap-6 border-t border-borderc py-7 sm:grid-cols-3">
        {STATS.map(({ target, suffix, labelKey }, i) => (
          <Reveal key={labelKey} delay={i} className="text-center">
            <Counter target={target} suffix={suffix} />
            <span className="text-[0.92rem] text-soft">{t(labelKey)}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
