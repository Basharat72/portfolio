import { useLanguage } from "../i18n/LanguageContext";
import type { TranslationKey } from "../i18n/translations";
import { Reveal } from "./Reveal";

interface SectionHeadProps {
  kicker: TranslationKey;
  title: TranslationKey;
  sub?: TranslationKey;
  /** editorial section number, e.g. "01" */
  num?: string;
}

export function SectionHead({ kicker, title, sub, num }: SectionHeadProps) {
  const { t } = useLanguage();
  return (
    <Reveal className="mb-8 max-w-[640px] md:mb-10">
      <p className="kicker">
        {num && <span className="kicker-num">{num}</span>}
        {t(kicker)}
      </p>
      <h2 className="font-display text-[clamp(1.8rem,4vw,2.7rem)] font-semibold tracking-tight">
        {t(title)}
      </h2>
      {sub && <p className="mt-4 text-soft">{t(sub)}</p>}
    </Reveal>
  );
}
