import { useLanguage } from "../i18n/LanguageContext";
import type { TranslationKey } from "../i18n/translations";
import { EDUCATION } from "../data";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="section-alt py-[clamp(4.5rem,9vw,7.5rem)]">
      <div className="container-site">
        <SectionHead kicker="edu.kicker" title="edu.title" />

        <div className="grid gap-5 md:grid-cols-3">
          {EDUCATION.map(({ school, prefix, icon: Icon, badgeKey }, i) => (
            <Reveal key={prefix} delay={i}>
              <article className="glass group relative flex h-full flex-col gap-1.5 overflow-hidden px-7 py-8 transition-transform duration-300 hover:-translate-y-1.5 hover:border-border-strong hover:shadow-[var(--shadow-card)]">
                {/* gradient top rule drawn on hover */}
                <span
                  aria-hidden
                  className="absolute left-7 right-7 top-0 h-[2px] origin-left scale-x-0 rounded-full transition-transform duration-500 ease-out group-hover:scale-x-100"
                  style={{ background: "var(--grad)" }}
                />
                <div className="icon-tile mb-3 h-[52px] w-[52px] rounded-2xl">
                  <Icon size={24} />
                </div>
                {badgeKey && (
                  <span className="badge badge--gold absolute right-6 top-6">{t(badgeKey)}</span>
                )}
                <h3 className="mt-0.5 font-display text-[1.15rem] font-semibold">{school}</h3>
                <p className="text-[0.95rem] font-semibold text-accent2">
                  {t(`${prefix}.degree` as TranslationKey)}
                </p>
                <p className="text-[0.84rem] text-faint">{t(`${prefix}.date` as TranslationKey)}</p>
                <p className="mt-2 text-[0.9rem] text-soft">{t(`${prefix}.note` as TranslationKey)}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
