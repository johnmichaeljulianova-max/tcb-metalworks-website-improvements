# TCB Metal Works — Premium Website (Hand-Built Rebuild)

A clean, fast, fully hand-coded rebuild of the TCB Metal Works marketing site —
**"elevated industrial"** design direction with premium, subtle animations that
stay smooth on any device. No WordPress, no page builder, no build step. Just
editable HTML, CSS, and vanilla JavaScript.

> This is the **new** site. The faithful scrape of the original WordPress site
> lives in `../tcb-metalworks-site/` for reference.

---

## Quick start

```bash
cd tcb-website
node server.mjs
# open http://localhost:5180
```

`server.mjs` is a zero-dependency static server. Because every page is a flat
`.html` file with **relative** links, you can also just open `index.html`
directly in a browser (`file://`) — no server required.

---

## Pages

| File | Page | Notes |
|------|------|-------|
| `index.html` | Home | Hero, stats, why-us, expertise, 10 services, projects, testimonials, about teaser, blog, CTA |
| `services.html` | Services | Full service grid + 4-step process + CTA |
| `about.html` | About | Story, animated stats, 5 values, strengths, testimonials |
| `contact.html` | Contact | Contact cards, validated quote form, Google map |

---

## Project structure

```
tcb-website/
├── index.html · services.html · about.html · contact.html
├── assets/
│   ├── css/styles.css      ← the entire design system (tokens, components, responsive, motion)
│   ├── js/main.js          ← all interactions (nav, reveals, counters, slider, form, parallax)
│   └── img/                ← 25 curated images (renamed from the original site) + logos
├── server.mjs              ← local static server (optional)
└── README.md
```

---

## Design system (at a glance)

Defined as CSS custom properties at the top of `assets/css/styles.css`:

| Token | Value | Use |
|-------|-------|-----|
| `--ink` | `#0B101B` | Primary dark (backgrounds, headings) |
| `--steel` | `#233D4C` | Secondary dark |
| `--ember` | `#F27E06` | Brand accent (CTAs, highlights) — **the original brand orange** |
| `--font-display` | **Fraunces** (serif) | Headings — premium, editorial |
| `--font-ui` | **Manrope** (sans) | Body & UI — matches the original |

Fonts load from Google Fonts with `preconnect` + `display=swap` (no invisible-text flash).
Change the palette or type once here and it cascades across all four pages.

## Animations (subtle & elegant)

All motion is GPU-friendly (`transform`/`opacity` only) and **respects
`prefers-reduced-motion`** — users who ask for less motion get a static site.

- Scroll-reveal fade/slide-ups with staggered timing (`IntersectionObserver`)
- Count-up stat counters (120+, 20+, etc.)
- Auto-rotating testimonial slider (pauses on hover)
- Subtle hero parallax (desktop + fine-pointer only; off on touch/mobile)
- Hover micro-interactions on cards, buttons, nav, and project tiles
- Animated mobile drawer + hamburger

## Performance & accessibility built in

- Images have explicit `width`/`height` (no layout shift) and `loading="lazy"` below the fold
- Single CSS file, single deferred JS file, inline SVG icon sprite (no icon font)
- Semantic landmarks, skip-link, one `<h1>` per page, focus-visible rings, `alt` on every image
- Min 44–48px touch targets, keyboard-operable nav/drawer, `aria-live` form status
- Passed an automated structure/link/alt audit (`../_scraper/check-site.mjs`)

---

## Editing guide

- **Text & SEO** — titles, `<meta name="description">`, `og:*` tags, headings, and body
  copy are all plain text in each `.html` file. Edit and refresh.
- **Colors / fonts / spacing** — change the tokens in `assets/css/styles.css`.
- **Images** — drop replacements in `assets/img/` (keep the same filename, or update the
  `src`). Keep new photos optimized (WebP/JPEG, ~1600px wide max).
- **Header / footer** — currently duplicated in each page (no templating). When you edit
  one, mirror the change in the others, or introduce a small include step if you prefer.

## Things to wire up before going live

1. **Contact form** — `#quote-form` validates and shows a success message but has **no
   backend**. Point it at your email service / form handler (Formspree, Netlify Forms,
   or your own endpoint) in `assets/js/main.js`.
2. **Newsletter** — the footer subscribe form is a front-end stub; connect it to your provider.
3. **Social links** — footer/contact social icons are `#` placeholders; add real URLs.
4. **Case study & blog links** — the Projects and Insights teasers currently link to the
   **live** `tcbmetalworks.com` pages (opens in a new tab). Rebuild those pages here and
   repoint the links when ready (this rebuild covered the 4 core marketing pages).
5. **Canonical / OG URLs** — set to `https://tcbmetalworks.com/...`; update if you deploy elsewhere.
```
