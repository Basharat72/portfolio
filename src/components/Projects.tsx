import { motion, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import type { TranslationKey } from "../i18n/translations";
import { PROJECTS } from "../data";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

/**
 * Projects as a horizontal snap carousel: all six cards live in one row —
 * a fraction of the vertical space of a grid. Swipe on touch, arrows on desktop.
 */
export function Projects() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) =>
    trackRef.current?.scrollBy({ left: dir * 394, behavior: reduceMotion ? "auto" : "smooth" });

  return (
    <section id="projects" className="py-[clamp(3.25rem,6.5vw,5.25rem)]">
      <div className="container-site">
        <div className="flex items-end justify-between gap-6">
          <SectionHead num="04" kicker="proj.kicker" title="proj.title" sub="proj.sub" />
          <Reveal className="mb-8 hidden shrink-0 gap-2.5 md:flex md:mb-10">
            <button type="button" className="icon-btn" aria-label={t("proj.prev")} onClick={() => scroll(-1)}>
              <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M15 5l-7 7 7 7" /></svg>
            </button>
            <button type="button" className="icon-btn" aria-label={t("proj.next")} onClick={() => scroll(1)}>
              <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M9 5l7 7-7 7" /></svg>
            </button>
          </Reveal>
        </div>

        <div
          ref={trackRef}
          className="proj-track edge-mask -mx-2 flex snap-x snap-mandatory gap-[22px] overflow-x-auto px-2 pb-3 pt-1"
        >
          {PROJECTS.map(({ prefix, cover, icon: Icon, tags, wip }, i) => (
            <Reveal
              key={prefix}
              delay={Math.min(i, 2)}
              className="w-[min(84vw,372px)] shrink-0 snap-start"
            >
              <motion.article
                whileHover={reduceMotion ? {} : { y: -6 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
                className="glass group flex h-full flex-col overflow-hidden hover:border-border-strong hover:shadow-[var(--shadow-pop)]"
              >
                {/* gradient cover with a watermark glyph — no image files needed */}
                <div className={`cover-grid relative flex aspect-[16/8.4] items-center justify-center border-b border-borderc ${cover}`} aria-hidden>
                  <span className="text-white/90 drop-shadow-lg transition-transform duration-500 ease-out group-hover:rotate-[-3deg] group-hover:scale-[1.14]">
                    <Icon size={58} />
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-3 p-6">
                  {wip && (
                    <div className="-mb-1">
                      <span className="badge badge--current">{t("proj.wip")}</span>
                    </div>
                  )}
                  <h3 className="font-display text-[1.1rem] font-semibold">
                    {t(`${prefix}.title` as TranslationKey)}
                  </h3>
                  <p className="flex-1 text-[0.9rem] text-soft">
                    {t(`${prefix}.desc` as TranslationKey)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span key={tag} className="tag-pill">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
