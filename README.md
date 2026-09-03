# Yusuf Pathan — Portfolio

A Vite + React portfolio site with a working English ⇄ Arabic (LTR/RTL) toggle
that mirrors the entire layout via CSS logical properties, and scroll-triggered
count-up stat animations.

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Build for production

```bash
npm run build
```

Outputs a static site to `dist/` — no server required, deployable anywhere
that serves static files (GitHub Pages, Netlify, Vercel, Cloudflare Pages).

## Deploy to GitHub Pages (from your YusufPathan06 account)

1. Push this project to a new repo, e.g. `portfolio`.
2. In `vite.config.js`, the `base: './'` setting already makes the build
   portable — no changes needed for a project-page URL like
   `yusufpathan06.github.io/portfolio`.
3. In the repo, go to Settings → Pages → Build and deployment → Source:
   "GitHub Actions", and use Vite's official static-site deploy workflow
   (or run `npm run build` locally and push the `dist/` folder to a `gh-pages`
   branch with a tool like `gh-pages` npm package).

## Project structure

```
src/
  components/     — one component per section (Header, Hero, Stats, etc.)
  hooks/
    useCountUp.js — IntersectionObserver-driven count-up animation
    useLang.jsx   — EN/AR language + document dir context
  data/
    content.js    — all copy, bilingual (en/ar), single source of truth
```

## Content notes

- All contact info, dates, and achievement numbers are pulled from a single
  `content.js` file — update there rather than in components.
- Arabic copy is a functional translation for demonstrating the RTL toggle;
  worth a native-speaker review before treating it as final, publishable copy.
