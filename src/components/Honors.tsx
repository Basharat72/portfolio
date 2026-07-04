import { useLanguage } from "../i18n/LanguageContext";
import type { TranslationKey } from "../i18n/translations";
import { HONORS } from "../data";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function Honors() {
  const { t } = useLanguage();

  return (
    <section id="honors" className="section-alt py-[clamp(4.5rem,9vw,7.5rem)]">
      <div className="container-site">
        <SectionHead kicker="hon.kicker" title="hon.title" />

        <div className="grid gap-5 md:grid-cols-3">
          {HONORS.map(({ prefix, icon: Icon }, i) => (
            <Reveal key={prefix} delay={i}>
              <article className="glass group relative h-full overflow-hidden px-7 py-8 transition-transform duration-300 hover:-translate-y-1.5 hover:border-border-strong hover:shadow-[var(--shadow-card)]">
                <span
                  aria-hidden
                  className="absolute -right-10 -top-10 h-[130px] w-[130px] rounded-full opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100"
                  style={{ background: "radial-gradient(circle, var(--glow-accent), transparent 70%)" }}
                />
                <div className="icon-tile icon-tile--gold mb-4 h-[50px] w-[50px] rounded-2xl">
                  <Icon size={22} />
                </div>
                <h3 className="mb-2 font-display text-[1.1rem] font-semibold">
                  {t(`${prefix}.t` as TranslationKey)}
                </h3>
                <p className="text-[0.92rem] text-soft">{t(`${prefix}.d` as TranslationKey)}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
