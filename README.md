# Basharat Mubashir Ahmed — Portfolio

A hand-built, bilingual (🇬🇧 EN / 🇩🇪 DE) portfolio website.

**Stack:** React 19 · TypeScript · Vite · Tailwind CSS v4 · Motion (Framer Motion)

## Highlights

- **Instant language switching** (EN ⇄ DE) with a page crossfade, remembered via `localStorage`
- **Dark mode by default** with an animated light/dark toggle
- Spring-physics animations throughout: magnetic buttons, 3D card tilt, floating chips,
  animated gradients, scroll-triggered reveals, animated counters, typing effect,
  custom cursor, ripple effects, shared-layout nav underline
- Fully responsive, semantic HTML, `prefers-reduced-motion` support, SEO meta + JSON-LD
- All icons are hand-drawn inline SVG — zero icon requests

## Project structure

```
portfolio/
├── index.html                  # entry: SEO meta, fonts, theme/lang boot script
├── vite.config.ts
├── src/
│   ├── main.tsx / App.tsx      # app shell, ripple, language crossfade
│   ├── index.css               # design tokens (dark + light), component styles
│   ├── data.ts                 # skills, experience, projects, honors, LINKS
│   ├── i18n/
│   │   ├── translations.ts     # every string in EN and DE — edit copy here
│   │   └── LanguageContext.tsx
│   ├── hooks/                  # useTheme, useTyping
│   └── components/             # Nav, Hero, Skills, Experience, … + icons.tsx
├── public/
│   ├── favicon.svg
│   └── assets/                 # ← your profile.jpg + CV PDF go here
└── .github/workflows/deploy.yml  # auto-deploy to GitHub Pages
```

## Before you publish — 5-minute checklist

1. **Photo** — drop `public/assets/profile.jpg` in place (the "BA" monogram shows until then).
2. **CV** — drop `public/assets/Basharat-Mubashir-Ahmed-CV.pdf` in place.
3. **Links** — open `src/data.ts` and replace the `#` placeholders in `LINKS` with your
   GitHub and LinkedIn URLs.
4. **Hyundai role** — the working title is "Data Analyst & AI Engineer" and the bullets are
   intentionally flexible. Update `exp1.role` / `exp1.b1…b3` in `src/i18n/translations.ts`
   (both the `en` and `de` blocks) whenever you want to refine them.
5. **All other copy** also lives in `src/i18n/translations.ts`, always in both languages.

## Develop & build

```bash
npm install       # once
npm run dev       # dev server with hot reload → http://localhost:5173
npm run build     # type-check + production build → dist/
npm run preview   # serve the production build locally
```

## Deployment (all free, no config needed)

### Option A — GitHub Pages (automated)

The included workflow deploys on every push:

```bash
git init -b main
git add .
git commit -m "Portfolio v1"
# create an empty repo on github.com first (e.g. named "portfolio"), then:
git remote add origin https://github.com/<your-username>/portfolio.git
git push -u origin main
```

Then on github.com: **Repo → Settings → Pages → Source: "GitHub Actions"** — done.
Live at `https://<your-username>.github.io/portfolio/` after the action finishes (~1 min).

### Option B — Vercel

1. Push the repo to GitHub (steps above).
2. [vercel.com](https://vercel.com) → sign in with GitHub → **Add New → Project** → import the repo.
3. Vercel auto-detects Vite (build `npm run build`, output `dist`) → **Deploy**.
4. Live at `https://<project>.vercel.app`; every push redeploys automatically.

### Option C — Cloudflare Pages

1. Push the repo to GitHub.
2. [pages.cloudflare.com](https://pages.cloudflare.com) → **Create a project → Connect to Git**.
3. Framework preset **Vite**, build command `npm run build`, output directory `dist`.
4. **Save and Deploy** → live at `https://<project>.pages.dev`.

All three serve the site identically — GitHub Pages is simplest, Vercel has the nicest
preview workflow, Cloudflare has the fastest edge network.

## Contact form

Works without a backend: it opens the visitor's email app with the message pre-filled.
To receive submissions directly instead, create a free form at
[formspree.io](https://formspree.io) and swap the `onSubmit` handler in
`src/components/Contact.tsx` for a `fetch` POST to your form endpoint.

## Performance notes

- Animations run on `transform`/`opacity` only and are disabled for `prefers-reduced-motion`.
- Keep the profile photo under ~150 KB (compress at [squoosh.app](https://squoosh.app)).
- Fonts load with `display=swap`; everything else ships as one CSS and one JS bundle.
