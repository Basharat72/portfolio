import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { LINKS } from "../data";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { GitHubIcon, LinkedInIcon, MailIcon, PinIcon, SendIcon } from "./icons";

export function Contact() {
  const { t } = useLanguage();
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const showToast = (message: string) => {
    setToast(message);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2600);
  };

  // no backend needed: compose the message in the visitor's own email client
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = encodeURIComponent(`${t("form.mailSubject")} ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    showToast(t("toast.mail"));
    window.location.href = `mailto:${LINKS.email}?subject=${subject}&body=${body}`;
  };

  const cards = [
    { href: `mailto:${LINKS.email}`, icon: <MailIcon />, label: t("contact.email"), value: LINKS.email },
    { icon: <PinIcon />, label: t("contact.location"), value: t("contact.locationValue") },
    { href: LINKS.github, icon: <GitHubIcon size={20} />, label: "GitHub", value: t("contact.githubValue") },
    { href: LINKS.linkedin, icon: <LinkedInIcon size={19} />, label: "LinkedIn", value: t("contact.linkedinValue") },
  ];

  return (
    <section id="contact" className="py-[clamp(3.25rem,6.5vw,5.25rem)]">
      <div className="container-site">
        <SectionHead num="06" kicker="contact.kicker" title="contact.title" sub="contact.sub" />

        <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="flex flex-col gap-3.5">
            {cards.map(({ href, icon, label, value }, i) => {
              const inner = (
                <>
                  <span className="icon-tile h-[46px] w-[46px]">{icon}</span>
                  <span>
                    <span className="block text-[0.76rem] font-semibold uppercase tracking-[0.08em] text-faint">
                      {label}
                    </span>
                    <span className="block break-words text-[0.95rem] font-medium">{value}</span>
                  </span>
                </>
              );
              const cls =
                "glass flex items-center gap-4 px-5 py-[18px] transition-transform duration-300 hover:translate-x-1 hover:shadow-[var(--shadow-card)]";
              return (
                <Reveal key={label} delay={i}>
                  {href ? (
                    <a className={cls} href={href}>{inner}</a>
                  ) : (
                    <div className={cls}>{inner}</div>
                  )}
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={2}>
            <form className="glass flex flex-col gap-[18px] p-7" onSubmit={onSubmit}>
              <div className="flex flex-col gap-[7px]">
                <label htmlFor="cf-name" className="text-[0.82rem] font-semibold uppercase tracking-[0.05em] text-soft">
                  {t("form.name")}
                </label>
                <input id="cf-name" name="name" type="text" required autoComplete="name"
                  className="form-input" placeholder={t("form.namePh")} />
              </div>
              <div className="flex flex-col gap-[7px]">
                <label htmlFor="cf-email" className="text-[0.82rem] font-semibold uppercase tracking-[0.05em] text-soft">
                  {t("form.email")}
                </label>
                <input id="cf-email" name="email" type="email" required autoComplete="email"
                  className="form-input" placeholder={t("form.emailPh")} />
              </div>
              <div className="flex flex-col gap-[7px]">
                <label htmlFor="cf-msg" className="text-[0.82rem] font-semibold uppercase tracking-[0.05em] text-soft">
                  {t("form.message")}
                </label>
                <textarea id="cf-msg" name="message" rows={5} required
                  className="form-input" placeholder={t("form.messagePh")} />
              </div>
              <button type="submit" className="btn btn--primary grad-bg w-full">
                {t("form.submit")}
                <SendIcon />
              </button>
              <p className="text-center text-[0.8rem] text-faint">{t("form.note")}</p>
            </form>
          </Reveal>
        </div>
      </div>

      {/* toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            role="status"
            initial={{ opacity: 0, y: 20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            className="glass fixed bottom-8 left-1/2 z-[300] rounded-full border-border-strong px-6 py-3 text-[0.9rem] font-medium shadow-[var(--shadow-card)]"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
