import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import type { TranslationKey } from "../i18n/translations";
import { LINKS } from "../data";
import { ArrowUpIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

const FOOTER_NAV: { id: string; key: TranslationKey }[] = [
  { id: "about", key: "nav.about" },
  { id: "skills", key: "nav.skills" },
  { id: "experience", key: "nav.experience" },
  { id: "projects", key: "nav.projects" },
  { id: "contact", key: "nav.contact" },
];

function BackToTop() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 650);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label={t("footer.topAria")}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 14 }}
          whileHover={{ y: -3 }}
          className="grad-bg fixed bottom-6 right-6 z-[150] flex h-[46px] w-[46px] items-center justify-center rounded-full text-white"
          style={{ boxShadow: "0 12px 30px -10px var(--glow-accent)" }}
        >
          <ArrowUpIcon />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-borderc bg-bg-alt pb-8 pt-14">
      <div className="container-site grid items-start gap-8 md:grid-cols-[1.2fr_1fr_auto]">
        <div>
          <a href="#top" className="flex items-center gap-3" aria-label="Back to start">
            <span
              aria-hidden
              className="grad-bg flex h-10 w-10 items-center justify-center rounded-xl font-display text-lg font-bold text-white"
            >
              B<em className="not-italic opacity-85">.</em>
            </span>
            <span className="font-display text-[1.02rem] text-soft">
              Basharat <strong className="font-semibold text-body">Ahmed</strong>
            </span>
          </a>
          <p className="mt-3.5 text-[0.92rem] text-soft">{t("footer.tagline")}</p>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-1.5 pt-2" aria-label="Footer">
          {FOOTER_NAV.map(({ id, key }) => (
            <a key={id} href={`#${id}`} className="text-[0.92rem] text-soft transition-colors hover:text-body">
              {t(key)}
            </a>
          ))}
        </nav>

        <div className="flex gap-2.5 pt-1">
          <a className="icon-btn" href={LINKS.github} aria-label="GitHub"><GitHubIcon size={18} /></a>
          <a className="icon-btn" href={LINKS.linkedin} aria-label="LinkedIn"><LinkedInIcon size={17} /></a>
          <a className="icon-btn" href={`mailto:${LINKS.email}`} aria-label="Email"><MailIcon size={18} /></a>
        </div>
      </div>

      <div className="container-site mt-10 flex flex-col justify-between gap-2.5 border-t border-borderc pt-5 text-[0.84rem] text-faint sm:flex-row">
        <p>© 2026 Basharat Mubashir Ahmed · {t("footer.rights")}</p>
        <p>{t("footer.built")}</p>
      </div>

      <BackToTop />
    </footer>
  );
}
