import { useEffect } from "react";
import { LanguageProvider, useLanguage } from "./i18n/LanguageContext";
import { Loader } from "./components/Loader";
import { CustomCursor } from "./components/CustomCursor";
import { ScrollProgress } from "./components/ScrollProgress";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Projects } from "./components/Projects";
import { Honors } from "./components/Honors";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

/** Expanding-circle ripple on every .btn click (skipped for reduced motion). */
function useRipple() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onClick = (e: MouseEvent) => {
      const btn = (e.target as Element).closest?.(".btn");
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const ripple = document.createElement("span");
      ripple.className = "ripple";
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
      btn.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
}

function Shell() {
  const { t, fading } = useLanguage();
  useRipple();

  return (
    <>
      <Loader />
      <CustomCursor />
      <ScrollProgress />

      <a
        href="#main"
        className="fixed -top-16 left-4 z-[300] rounded-lg bg-accent px-4 py-2.5 text-white transition-all duration-200 focus-visible:top-3"
      >
        {t("a11y.skip")}
      </a>

      <Nav />

      {/* whole-page crossfade while the language swaps */}
      <div style={{ opacity: fading ? 0 : 1, transition: "opacity 0.2s ease" }}>
        <main id="main">
          <Hero />
          <Stats />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Honors />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Shell />
    </LanguageProvider>
  );
}
