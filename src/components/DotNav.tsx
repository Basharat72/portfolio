import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import type { TranslationKey } from "../i18n/translations";

const DOTS: { id: string; key: TranslationKey }[] = [
  { id: "top", key: "nav.top" },
  { id: "about", key: "nav.about" },
  { id: "skills", key: "nav.skills" },
  { id: "experience", key: "nav.experience" },
  { id: "projects", key: "nav.projects" },
  { id: "education", key: "edu.kicker" },
  { id: "contact", key: "nav.contact" },
];

/** Fixed dot navigation (desktop): one click to any section, no scrolling. */
export function DotNav() {
  const { t } = useLanguage();
  const [active, setActive] = useState("top");

  useEffect(() => {
    const sections = DOTS.map(({ id }) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label={t("nav.dotsAria")}
      className="fixed right-5 top-1/2 z-[120] hidden -translate-y-1/2 flex-col gap-3.5 xl:flex"
    >
      {DOTS.map(({ id, key }) => {
        const isActive = active === id;
        return (
          <a key={id} href={`#${id}`} aria-label={t(key)} className="group relative flex items-center justify-end">
            <span
              className="pointer-events-none absolute right-6 whitespace-nowrap rounded-lg border border-borderc bg-bg px-2.5 py-1 text-[0.74rem] font-medium text-soft opacity-0 shadow-[var(--shadow-card)] transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
            >
              {t(key)}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive ? "h-3 w-3" : "h-2.5 w-2.5 group-hover:scale-125"
              }`}
              style={
                isActive
                  ? { background: "var(--grad)", boxShadow: "0 0 12px var(--glow-accent)" }
                  : { background: "var(--border-strong)" }
              }
            />
          </a>
        );
      })}
    </nav>
  );
}
