import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { TRANSLATIONS } from "./translations";
import type { Lang, TranslationKey } from "./translations";

interface LanguageContextValue {
  lang: Lang;
  /** true for a beat while switching — the app shell crossfades on it */
  fading: boolean;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function initialLang(): Lang {
  // the inline <head> script already resolved storage/navigator into <html lang>
  return document.documentElement.getAttribute("lang") === "de" ? "de" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);
  const [fading, setFading] = useState(false);
  const langRef = useRef(lang);

  const commit = useCallback((next: Lang) => {
    langRef.current = next;
    setLangState(next);
    localStorage.setItem("lang", next);
  }, []);

  const setLang = useCallback(
    (next: Lang) => {
      if (next === langRef.current) return;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) {
        commit(next);
        return;
      }
      // fade the page out, swap every string at once, fade back in
      setFading(true);
      setTimeout(() => {
        commit(next);
        setFading(false);
      }, 200);
    },
    [commit]
  );

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    document.title = TRANSLATIONS[lang]["meta.title"];
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", TRANSLATIONS[lang]["meta.desc"]);
  }, [lang]);

  const t = useCallback((key: TranslationKey) => TRANSLATIONS[lang][key], [lang]);

  return (
    <LanguageContext.Provider value={{ lang, fading, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}
