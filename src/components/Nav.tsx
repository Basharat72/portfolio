import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { useTheme } from "../hooks/useTheme";
import type { Lang, TranslationKey } from "../i18n/translations";
import { MoonIcon, SunIcon } from "./icons";

const NAV_ITEMS: { id: string; key: TranslationKey }[] = [
  { id: "about", key: "nav.about" },
  { id: "skills", key: "nav.skills" },
  { id: "experience", key: "nav.experience" },
  { id: "projects", key: "nav.projects" },
  { id: "contact", key: "nav.contact" },
];

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="Basharat Mubashir Ahmed — home">
      <span
        aria-hidden
        className="grad-bg flex h-10 w-10 items-center justify-center rounded-xl font-display text-lg font-bold text-white"
        style={{ boxShadow: "0 8px 22px -8px var(--glow-accent)" }}
      >
        B<em className="not-italic opacity-85">.</em>
      </span>
      <span className="hidden font-display text-[1.02rem] text-soft sm:inline">
        Basharat <strong className="font-semibold text-body">Ahmed</strong>
      </span>
    </a>
  );
}

function LangToggle() {
  const { lang, setLang, t } = useLanguage();
  return (
    <div
      role="group"
      aria-label={t("nav.langAria")}
      className="relative inline-flex rounded-full border border-borderc bg-surface p-[3px] backdrop-blur-md"
    >
      {(["en", "de"] as Lang[]).map((code) => (
        <button
          key={code}
          type="button"
          aria-pressed={lang === code}
          onClick={() => setLang(code)}
          className={`relative z-10 rounded-full px-[13px] py-1.5 text-[0.8rem] font-semibold tracking-wide transition-colors duration-300 ${
            lang === code ? "text-white" : "text-soft"
          }`}
        >
          {lang === code && (
            <motion.span
              layoutId="lang-thumb"
              className="absolute inset-0 -z-10 rounded-full"
              style={{ background: "var(--grad)" }}
              transition={{ type: "spring", stiffness: 420, damping: 32 }}
            />
          )}
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  return (
    <button type="button" onClick={toggleTheme} className="icon-btn" aria-label={t("nav.themeAria")}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex"
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

export function Nav() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // track which section is in view for the active link underline
  useEffect(() => {
    const sections = NAV_ITEMS.map(({ id }) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[200] border-b transition-all duration-300 ${
        scrolled ? "border-borderc bg-bg/80 backdrop-blur-xl" : "border-transparent"
      }`}
    >
      <nav className="container-site flex h-[72px] items-center justify-between gap-5" aria-label="Main">
        <Logo />

        {/* desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map(({ id, key }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`relative rounded-full px-3.5 py-2 text-[0.92rem] font-medium transition-colors hover:bg-surface-hover hover:text-body ${
                  active === id ? "text-body" : "text-soft"
                }`}
              >
                {t(key)}
                {active === id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3.5 bottom-1 h-[2px] rounded-full"
                    style={{ background: "var(--grad)" }}
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <LangToggle />
          <ThemeToggle />
          {/* mobile burger */}
          <button
            type="button"
            className="icon-btn flex-col gap-[5px] md:hidden"
            aria-label={t("nav.menuAria")}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <motion.span
              className="block h-[2px] w-[17px] rounded-full bg-current"
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 3.5 : 0 }}
            />
            <motion.span
              className="block h-[2px] w-[17px] rounded-full bg-current"
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -3.5 : 0 }}
            />
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="border-b border-borderc bg-bg/95 px-5 pb-6 pt-4 backdrop-blur-xl md:hidden"
          >
            {NAV_ITEMS.map(({ id, key }, i) => (
              <motion.li
                key={id}
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
              >
                <a
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-[1.05rem] font-medium text-soft transition-colors hover:bg-surface-hover hover:text-body"
                >
                  {t(key)}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
