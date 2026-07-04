import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { useTheme } from "../hooks/useTheme";
import { LINKS } from "../data";
import {
  ArrowRightIcon, DownloadIcon, MailIcon, MoonIcon, SearchIcon, SunIcon, SparkleIcon,
} from "./icons";

interface PaletteItem {
  id: string;
  label: string;
  group: "sections" | "actions";
  icon: ReactNode;
  keywords: string;
  run: () => void | boolean; // return false to keep the palette open
}

/**
 * ⌘K / Ctrl+K command palette: jump to any section or run any action without
 * scrolling. Also opens via the nav search button ("open-palette" event).
 */
export function CommandPalette() {
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);

  // open triggers: keyboard shortcut + custom event from the nav button
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-palette", onOpen);
    };
  }, []);

  // reset + focus + scroll lock while open
  useEffect(() => {
    if (open) {
      setQuery("");
      setCursor(0);
      setCopied(false);
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => inputRef.current?.focus());
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const items = useMemo<PaletteItem[]>(() => {
    const go = (id: string) => () => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
    const sections: PaletteItem[] = (
      [
        ["top", t("nav.top")],
        ["about", t("nav.about")],
        ["skills", t("nav.skills")],
        ["experience", t("nav.experience")],
        ["projects", t("nav.projects")],
        ["education", t("edu.kicker")],
        ["contact", t("nav.contact")],
      ] as const
    ).map(([id, label]) => ({
      id: `go-${id}`,
      label,
      group: "sections" as const,
      icon: <ArrowRightIcon size={15} />,
      keywords: id,
      run: go(id),
    }));

    const actions: PaletteItem[] = [
      {
        id: "theme",
        label: theme === "dark" ? t("palette.toLight") : t("palette.toDark"),
        group: "actions",
        icon: theme === "dark" ? <SunIcon size={16} /> : <MoonIcon size={16} />,
        keywords: "theme dark light design mode",
        run: () => {
          toggleTheme();
          return false;
        },
      },
      {
        id: "lang",
        label: lang === "de" ? t("palette.toEn") : t("palette.toDe"),
        group: "actions",
        icon: <SparkleIcon size={15} />,
        keywords: "language sprache english deutsch en de",
        run: () => {
          setLang(lang === "de" ? "en" : "de");
          return false;
        },
      },
      {
        id: "cv",
        label: t("hero.cta.cv"),
        group: "actions",
        icon: <DownloadIcon size={16} />,
        keywords: "cv lebenslauf resume pdf download",
        run: () => {
          window.location.href = LINKS.cv;
        },
      },
      {
        id: "copy-email",
        label: copied ? t("palette.copied") : t("palette.copyEmail"),
        group: "actions",
        icon: <MailIcon size={16} />,
        keywords: "email mail kopieren copy kontakt contact",
        run: () => {
          navigator.clipboard?.writeText(LINKS.email);
          setCopied(true);
          setTimeout(() => setOpen(false), 700);
          return false;
        },
      },
      {
        id: "email",
        label: t("palette.email"),
        group: "actions",
        icon: <MailIcon size={16} />,
        keywords: "email mail schreiben write kontakt contact",
        run: () => {
          window.location.href = `mailto:${LINKS.email}`;
        },
      },
    ];

    return [...sections, ...actions];
  }, [t, theme, lang, toggleTheme, setLang, copied]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (it) => it.label.toLowerCase().includes(q) || it.keywords.includes(q)
    );
  }, [items, query]);

  const runItem = (item: PaletteItem) => {
    const keepOpen = item.run() === false;
    if (!keepOpen) close();
  };

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setCursor((c) => Math.min(c + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setCursor((c) => Math.max(c - 1, 0));
    } else if (e.key === "Enter" && filtered[cursor]) {
      e.preventDefault();
      runItem(filtered[cursor]);
    }
  };

  // keep the highlighted row in view
  useEffect(() => {
    listRef.current
      ?.querySelector(`[data-index="${cursor}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [cursor]);

  const groups: { key: PaletteItem["group"]; label: string }[] = [
    { key: "sections", label: t("palette.sections") },
    { key: "actions", label: t("palette.actions") },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[320] flex items-start justify-center px-4 pt-[14vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          <div
            className="absolute inset-0 bg-black/45 backdrop-blur-sm"
            onClick={close}
            aria-hidden
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={t("palette.open")}
            className="glass relative w-[min(560px,94vw)] overflow-hidden rounded-2xl border-border-strong shadow-[var(--shadow-pop)]"
            style={{ background: "color-mix(in srgb, var(--bg) 88%, transparent)" }}
            initial={{ opacity: 0, scale: 0.96, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 border-b border-borderc px-4 py-3.5">
              <span className="text-faint"><SearchIcon size={18} /></span>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setCursor(0);
                }}
                onKeyDown={onInputKey}
                placeholder={t("palette.placeholder")}
                className="w-full bg-transparent text-[0.98rem] outline-none placeholder:text-faint"
                aria-label={t("palette.placeholder")}
              />
              <kbd className="hidden rounded-md border border-borderc px-1.5 py-0.5 text-[0.7rem] text-faint sm:block">
                esc
              </kbd>
            </div>

            <div ref={listRef} className="max-h-[46vh] overflow-y-auto p-2">
              {filtered.length === 0 && (
                <p className="px-3 py-6 text-center text-[0.9rem] text-faint">
                  {t("palette.empty")}
                </p>
              )}
              {groups.map(({ key, label }) => {
                const groupItems = filtered.filter((it) => it.group === key);
                if (!groupItems.length) return null;
                return (
                  <div key={key} className="mb-1">
                    <p className="px-3 pb-1 pt-2 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-faint">
                      {label}
                    </p>
                    {groupItems.map((item) => {
                      const index = filtered.indexOf(item);
                      return (
                        <button
                          key={item.id}
                          type="button"
                          data-index={index}
                          onClick={() => runItem(item)}
                          onMouseEnter={() => setCursor(index)}
                          className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[0.93rem] transition-colors ${
                            index === cursor
                              ? "bg-surface-hover text-body"
                              : "text-soft"
                          }`}
                        >
                          <span className={index === cursor ? "text-accent2" : "text-faint"}>
                            {item.icon}
                          </span>
                          {item.label}
                        </button>
                      );
                    })}
                  </div>
                );
              })}
            </div>

            <p className="border-t border-borderc px-4 py-2.5 text-[0.72rem] text-faint">
              {t("palette.hint")}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
