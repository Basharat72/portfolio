import { useLanguage } from "../i18n/LanguageContext";
import type { TranslationKey } from "../i18n/translations";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { BoltIcon, SearchIcon, ShieldCheckIcon } from "./icons";

const HOW: { icon: typeof SearchIcon; t: TranslationKey; d: TranslationKey }[] = [
  { icon: SearchIcon, t: "about.how1.t", d: "about.how1.d" },
  { icon: ShieldCheckIcon, t: "about.how2.t", d: "about.how2.d" },
  { icon: BoltIcon, t: "about.how3.t", d: "about.how3.d" },
];

export function About() {
  const { t } = useLanguage();
  const paragraphs: TranslationKey[] = ["about.p1", "about.p2", "about.p3", "about.p4"];

  return (
    <section id="about" className="py-[clamp(4.5rem,9vw,7.5rem)]">
      <div className="container-site">
        <SectionHead kicker="about.kicker" title="about.title" />

        <div className="grid items-start gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-[4.5rem]">
          <div className="space-y-5">
            {paragraphs.map((key, i) => (
              <Reveal key={key} delay={i}>
                <p className="text-[1.05rem] text-soft">{t(key)}</p>
              </Reveal>
            ))}
          </div>

          <aside className="flex flex-col gap-4">
            <Reveal>
              <h3 className="text-[1.05rem] font-semibold uppercase tracking-[0.1em] text-faint">
                {t("about.howTitle")}
              </h3>
            </Reveal>
            {HOW.map(({ icon: Icon, t: tk, d }, i) => (
              <Reveal key={tk} delay={i + 1}>
                <div className="glass flex gap-4 p-5 transition-transform duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-[var(--shadow-card)]">
                  <div className="icon-tile h-11 w-11">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="mb-1 text-base font-semibold">{t(tk)}</h4>
                    <p className="text-[0.9rem] text-soft">{t(d)}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
