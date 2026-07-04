import { useLanguage } from "../i18n/LanguageContext";
import type { TranslationKey } from "../i18n/translations";
import { EXPERIENCE } from "../data";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-[clamp(4.5rem,9vw,7.5rem)]">
      <div className="container-site">
        <SectionHead kicker="exp.kicker" title="exp.title" />

        <div className="timeline-rail relative max-w-[780px] pl-[34px]">
          {EXPERIENCE.map(({ company, prefix, bullets, tags, current }) => (
            <Reveal key={prefix} className="relative pb-7 last:pb-0">
              <article className="relative">
                <div className={`tl-node ${current ? "tl-node--current" : ""}`} aria-hidden />
                <div className="tl-card glass px-7 py-6">
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
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
