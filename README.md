# Redport Consulting Ltd — Website

A React + Vite marketing site for Redport Consulting Limited, built from
the company's profile deck and brand mark.

## Design concept

**Structured Signal** — the layout is built from the same interlocking
parallelograms as the Redport arrow mark: angled facet edges instead of
rounded cards, a charcoal ground with one disciplined red accent, and a
single orchestrated load animation on the hero (the mark's three facets
assembling) rather than motion scattered everywhere. Headlines are set in
Space Grotesk; body copy in IBM Plex Sans.

## Getting started

Requires Node.js 18+.

```bash
npm install
npm run dev       # local dev server, usually http://localhost:5173
npm run build     # production build to /dist
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  assets/            Logo images extracted from the brand files
  components/        One component per section (Hero, Capabilities, ...)
  styles/
    index.css        Design tokens (color, type, spacing) + resets
    components.css   Section and component styles
  App.jsx            Page assembly
  main.jsx           Entry point
```

## Content notes

- Capability, process and value copy is adapted from the Redport company
  profile (2026 edition).
- The compliance section repeats the source profile's own disclaimer:
  the framework names listed are services Redport advises on, not a
  claim that Redport is itself certified or a certifying authority.
- The contact form has no backend — submitting it opens the visitor's
  email client via a `mailto:` link addressed to
  info@redportconsulting.com. Wire it up to a real endpoint or form
  service before relying on it in production.

## Before you deploy

- Swap in real client/partner logos if you have usage rights to them
  (currently shown as text, per the source profile).
- Point the contact form at a real backend or service (e.g. Formspree,
  a serverless function) if you need submissions to land somewhere
  other than email.
- Run `npm run build` and deploy the `/dist` folder to your host of
  choice (Vercel, Netlify, Cloudflare Pages, or your own server).
