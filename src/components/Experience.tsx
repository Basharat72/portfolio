import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import type { TranslationKey } from "../i18n/translations";
import { EXPERIENCE } from "../data";
import type { ExperienceEntry } from "../data";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

/** Shared detail block (used by desktop panel and mobile accordion). */
function Details({ entry }: { entry: ExperienceEntry }) {
  const { t } = useLanguage();
  const { company, prefix, bullets, tags, current } = entry;
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="font-display text-xl font-semibold">{company}</h3>
        {current && <span className="badge badge--current">{t("exp.current")}</span>}
      </div>
      <p className="mt-0.5 text-[0.97rem] font-semibold text-accent2">
        {t(`${prefix}.role` as TranslationKey)}
      </p>
      <p className="mb-3 mt-0.5 text-[0.85rem] text-faint">
        {t(`${prefix}.date` as TranslationKey)}
      </p>
      <ul className="flex flex-col gap-[7px]">
        {Array.from({ length: bullets }, (_, i) => (
          <li key={i} className="tl-bullet">
            {t(`${prefix}.b${i + 1}` as TranslationKey)}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="tag-pill">{tag}</span>
        ))}
      </div>
    </div>
  );
}

/**
 * Experience as vertical tabs (desktop) / accordion (mobile) — the whole
 * career fits in one viewport instead of a long scrolling timeline.
 */
export function Experience() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const desktopActive = active < 0 ? 0 : active;

  const onTabKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (Math.max(i, 0) + 1) % EXPERIENCE.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (Math.max(i, 0) - 1 + EXPERIENCE.length) % EXPERIENCE.length);
    }
  };

  return (
    <section id="experience" className="py-[clamp(3.25rem,6.5vw,5.25rem)]">
      <div className="container-site">
        <SectionHead kicker="exp.kicker" title="exp.title" />

        {/* desktop: company list left, details right — one viewport, no scroll */}
        <Reveal className="hidden md:block">
          <div className="grid gap-6 md:grid-cols-[280px_1fr]">
            <div
              role="tablist"
              aria-label={t("exp.tablistAria")}
              aria-orientation="vertical"
              onKeyDown={onTabKey}
              className="flex flex-col gap-1"
            >
              {EXPERIENCE.map((entry, i) => {
                const selected = i === desktopActive;
                return (
                  <button
                    key={entry.prefix}
                    type="button"
                    role="tab"
                    id={`exp-tab-${i}`}
                    aria-selected={selected ? "true" : "false"}
                    aria-controls="exp-panel"
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActive(i)}
                    className={`relative rounded-xl px-4 py-2.5 text-left transition-colors duration-200 ${
                      selected ? "text-body" : "text-soft hover:bg-surface-hover hover:text-body"
                    }`}
                  >
                    {selected && (
                      <motion.span
                        layoutId="exp-active-tab"
                        className="glass absolute inset-0 border-border-strong"
                        style={{ borderRadius: 12 }}
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span className="relative block text-[0.93rem] font-semibold">
                      {entry.company}
                      {entry.current && (
                        <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-[#22c55e] align-middle" aria-hidden />
                      )}
                    </span>
                    <span className="relative block text-[0.76rem] text-faint">
                      {t(`${entry.prefix}.date` as TranslationKey)}
                    </span>
                  </button>
                );
              })}
            </div>

            <div
              id="exp-panel"
              role="tabpanel"
              aria-labelledby={`exp-tab-${desktopActive}`}
              className="glass min-h-[380px] p-7"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={desktopActive}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Details entry={EXPERIENCE[desktopActive]} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>

        {/* mobile: compact accordion */}
        <div className="flex flex-col gap-3 md:hidden">
          {EXPERIENCE.map((entry, i) => {
            const openItem = active === i;
            return (
              <Reveal key={entry.prefix} delay={Math.min(i, 3)}>
                <div className="glass overflow-hidden">
                  <button
                    type="button"
                    aria-expanded={openItem ? "true" : "false"}
                    onClick={() => setActive(openItem ? -1 : i)}
                    className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
                  >
                    <span>
                      <span className="block text-[0.95rem] font-semibold">{entry.company}</span>
                      <span className="block text-[0.78rem] text-faint">
                        {t(`${entry.prefix}.role` as TranslationKey)}
                      </span>
                    </span>
                    <motion.span
                      animate={{ rotate: openItem ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-faint"
                      aria-hidden
                    >
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openItem && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5">
                          <Details entry={entry} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
