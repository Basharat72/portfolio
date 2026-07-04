import { motion, useReducedMotion } from "motion/react";
import { useLanguage } from "../i18n/LanguageContext";
import type { TranslationKey } from "../i18n/translations";
import { PROJECTS } from "../data";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { ExternalIcon, GitHubIcon } from "./icons";

export function Projects() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  return (
    <section id="projects" className="py-[clamp(4.5rem,9vw,7.5rem)]">
      <div className="container-site">
        <SectionHead kicker="proj.kicker" title="proj.title" sub="proj.sub" />

        <div className="grid gap-[22px] md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map(({ prefix, cover, icon: Icon, tags, wip }, i) => (
            <Reveal key={prefix} delay={i % 3}>
              <motion.article
                whileHover={reduceMotion ? {} : { y: -7 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
                className="glass group flex h-full flex-col overflow-hidden hover:border-border-strong hover:shadow-[var(--shadow-pop)]"
              >
                {/* gradient cover with a watermark glyph — no image files needed */}
                <div className={`cover-grid relative flex aspect-[16/8.4] items-center justify-center border-b border-borderc ${cover}`} aria-hidden>
                  <span className="text-white/90 drop-shadow-lg transition-transform duration-500 ease-out group-hover:rotate-[-3deg] group-hover:scale-[1.14]">
                    <Icon size={62} />
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-3 p-6">
                  {wip && (
                    <div className="-mb-1">
                      <span className="badge badge--current">{t("proj.wip")}</span>
                    </div>
                  )}
                  <h3 className="font-display text-[1.13rem] font-semibold">
                    {t(`${prefix}.title` as TranslationKey)}
                  </h3>
                  <p className="flex-1 text-[0.92rem] text-soft">
                    {t(`${prefix}.desc` as TranslationKey)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span key={tag} className="tag-pill">{tag}</span>
                    ))}
                  </div>
                  <div className="mt-1 flex gap-2.5">
                    {wip ? (
                      <a href="#" className="btn btn--ghost btn--small">{t("proj.soon")}</a>
                    ) : (
                      <>
                        {/* TODO: add repository / write-up links */}
                        <a href="#" className="btn btn--ghost btn--small">
                          <GitHubIcon size={15} /> GitHub
                        </a>
                        <a href="#" className="btn btn--ghost btn--small">
                          {t("proj.case")} <ExternalIcon />
                        </a>
                      </>
                    )}
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
