import { useLanguage } from "../i18n/LanguageContext";
import { SKILL_GROUPS } from "../data";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section-alt py-[clamp(3.25rem,6.5vw,5.25rem)]">
      <div className="container-site">
        <SectionHead kicker="skills.kicker" title="skills.title" sub="skills.sub" />

        {SKILL_GROUPS.map(({ titleKey, skills }) => (
          <div key={titleKey}>
            <Reveal>
              <h3 className="group-rule mb-4 mt-10">{t(titleKey)}</h3>
            </Reveal>
            <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
              {skills.map((skill, i) => {
                const Icon = skill.icon;
                const label = skill.nameKey ? t(skill.nameKey) : skill.name;
                return (
                  <Reveal key={skill.name ?? skill.nameKey} delay={i % 6}>
                    <div className="skill-card glass transition-transform duration-300 hover:-translate-y-1">
                      <span className="logo-tile" aria-hidden>
                        <Icon size={21} />
                      </span>
                      <span className="relative text-[0.92rem] font-medium">{label}</span>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
