import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import type { MouseEvent } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { HERO_ROLES } from "../i18n/translations";
import { useTyping } from "../hooks/useTyping";
import { Magnetic } from "./Magnetic";
import {
  ArrowRightIcon, CrossGridIcon, DatabaseIcon, DownloadIcon, GitHubIcon,
  LinkedInIcon, SparkleIcon,
} from "./icons";
import { LINKS } from "../data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

function PhotoCard() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  // gentle 3D tilt driven by the cursor
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      className="relative aspect-[4/4.7] w-[min(340px,78vw)]"
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={onMove}
      onMouseLeave={() => {
        px.set(0);
        py.set(0);
      }}
    >
      {/* breathing glow behind the frame */}
      <motion.div
        aria-hidden
        className="absolute -inset-[8%] rounded-[40px]"
        style={{ background: "var(--grad)", filter: "blur(52px)" }}
        animate={reduceMotion ? {} : { opacity: [0.22, 0.4, 0.22], scale: [0.96, 1.03, 0.96] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="photo-frame">
        <span aria-hidden className="grad-text select-none font-display text-[5.4rem] font-bold tracking-tighter">
          BA
        </span>
        {/* TODO: drop your photo into public/assets/profile.jpg — initials show until then */}
        <img
          src="./assets/profile.jpg"
          alt={t("hero.photoAlt")}
          className="absolute inset-0 h-full w-full object-cover"
          onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
        />
      </div>

      {/* floating credential chips */}
      {[
        { cls: "chip -left-[17%] top-[7%]", icon: <SparkleIcon />, label: "LLMs & RAG", delay: 0 },
        { cls: "chip -right-[15%] bottom-[26%]", icon: <CrossGridIcon size={14} />, label: "Tableau", delay: 1.6 },
        { cls: "chip -left-[6%] -bottom-[4%]", icon: <DatabaseIcon size={14} />, label: "Python · SQL", delay: 3.2 },
      ].map(({ cls, icon, label, delay }) => (
        <motion.div
          key={label}
          aria-hidden
          className={cls}
          animate={reduceMotion ? {} : { y: [-7, 7] }}
          transition={{ duration: 2.75, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay }}
        >
          {icon}
          {label}
        </motion.div>
      ))}
    </motion.div>
  );
}

export function Hero() {
  const { lang, t } = useLanguage();
  const typed = useTyping(HERO_ROLES[lang]);
  const reduceMotion = useReducedMotion();

  // background parallax
  const bx = useMotionValue(0);
  const by = useMotionValue(0);
  const sx = useSpring(bx, { stiffness: 60, damping: 20 });
  const sy = useSpring(by, { stiffness: 60, damping: 20 });

  const onMove = (e: MouseEvent<HTMLElement>) => {
    if (reduceMotion) return;
    bx.set((e.clientX / window.innerWidth - 0.5) * 24);
    by.set((e.clientY / window.innerHeight - 0.5) * 18);
  };

  return (
    <section
      id="top"
      onMouseMove={onMove}
      className="relative flex min-h-svh items-center overflow-hidden pb-20 pt-[calc(72px+3rem)]"
    >
      {/* animated backdrop */}
      <motion.div aria-hidden className="absolute inset-0 pointer-events-none" style={{ x: sx, y: sy }}>
        <motion.div
          className="blob -right-[6%] -top-[12%] h-[460px] w-[460px]"
          style={{ background: "color-mix(in srgb, var(--accent) 42%, transparent)" }}
          animate={reduceMotion ? {} : { x: [0, 36, 0], y: [0, -30, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="blob -bottom-[14%] -left-[8%] h-[380px] w-[380px]"
          style={{ background: "color-mix(in srgb, var(--accent-2) 30%, transparent)" }}
          animate={reduceMotion ? {} : { x: [0, -30, 0], y: [0, 26, 0], scale: [1.05, 1, 1.05] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="blob left-[38%] top-[34%] h-[300px] w-[300px]"
          style={{ background: "color-mix(in srgb, var(--accent-3) 26%, transparent)" }}
          animate={reduceMotion ? {} : { x: [0, 24, 0], y: [0, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="hero-grid-lines" />
      </motion.div>

      <div className="container-site relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left"
        >
          <motion.p
            variants={item}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-borderc bg-surface px-4 py-[7px] text-[0.83rem] font-medium text-soft backdrop-blur-md"
          >
            <span className="pulse-dot" aria-hidden />
            {t("hero.badge")}
          </motion.p>

          <motion.h1 variants={item}>
            <span className="mb-3 block text-base font-medium text-soft sm:text-lg lg:text-xl">
              {t("hero.greeting")} Basharat Mubashir Ahmed.
            </span>
            <span className="block font-display text-[clamp(2.3rem,5.4vw,3.9rem)] font-bold leading-[1.08] tracking-tight">
              {t("hero.title.a")}
              <span className="grad-text">{t("hero.title.b")}</span>
              {t("hero.title.c")}
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            aria-hidden
            className="mt-6 min-h-[1.6em] font-display text-[clamp(1.05rem,2.2vw,1.35rem)] font-medium text-accent2"
          >
            {typed}
            <span className="typed-caret" />
          </motion.p>
          <p className="sr-only">{HERO_ROLES[lang].join(", ")}</p>

          <motion.p variants={item} className="mt-5 max-w-[540px] text-[1.04rem] text-soft">
            {t("hero.intro")}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center justify-center gap-3.5 lg:justify-start">
            {/* TODO: drop your CV PDF into public/assets/ with this exact filename */}
            <Magnetic>
              <a className="btn btn--primary grad-bg" href={LINKS.cv} download>
                <DownloadIcon />
                {t("hero.cta.cv")}
              </a>
            </Magnetic>
            <Magnetic>
              <a className="btn btn--ghost" href="#contact">
                {t("hero.cta.contact")}
                <ArrowRightIcon />
              </a>
            </Magnetic>
            <div className="ml-1 flex gap-2.5">
              <Magnetic>
                <a className="icon-btn" href={LINKS.github} aria-label="GitHub">
                  <GitHubIcon />
                </a>
              </Magnetic>
              <Magnetic>
                <a className="icon-btn" href={LINKS.linkedin} aria-label="LinkedIn">
                  <LinkedInIcon />
                </a>
              </Magnetic>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          className="order-1 flex justify-center lg:order-2"
        >
          <PhotoCard />
        </motion.div>
      </div>

      {/* scroll hint */}
      <motion.a
        href="#about"
        aria-hidden
        tabIndex={-1}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2.5 text-[0.76rem] uppercase tracking-[0.12em] text-faint md:flex"
      >
        <span className="scroll-hint-line" />
        {t("hero.scroll")}
      </motion.a>
    </section>
  );
}
