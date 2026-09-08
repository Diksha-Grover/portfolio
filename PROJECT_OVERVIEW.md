# Portfolio — Project Overview

A single-page developer portfolio website for **Diksha Grover** (Full Stack Developer). Built with **Next.js 15 (App Router)** and **React 19**, styled with **Tailwind CSS v4**, animated with **Framer Motion**, and wired to a serverless contact form that sends email through **Resend**. It supports a dark/light theme, SEO metadata, structured data (JSON-LD), and a responsive layout.

This document is the single source of truth: it explains every dependency (and why), every folder, every route, and every component so that any person or AI can understand the project without reading all the code.

---

## 1. Tech Stack at a Glance

| Layer | Technology |
| --- | --- |
| Framework | Next.js 15 (App Router) |
| UI library | React 19 |
| Styling | Tailwind CSS v4 (via PostCSS) + CSS variables for theming |
| Animation | Framer Motion |
| Icons | Heroicons |
| Email delivery | Resend (serverless API route) |
| Runtime | Node.js 22.x |
| Linting | ESLint 9 with `eslint-config-next` |
| Language | JavaScript (JSX), path alias `@/*` → `src/*` |

---

## 2. Dependencies — What & Why

### Runtime dependencies (`dependencies`)

| Package | Version | Why it is used |
| --- | --- | --- |
| `next` | ^15.5.23 | Core framework. Provides the App Router, file-based routing, server components, API routes, image optimization (`next/image`), font handling, and the build/dev/start toolchain. |
| `react` | 19.1.0 | The UI library that powers all components (hooks, state, context). |
| `react-dom` | 19.1.0 | React's DOM renderer — required to mount React components in the browser. |
| `framer-motion` | ^12.23.12 | Declarative animations used everywhere: staggered hero entrance, scroll-in reveals (`useInView`), count-up motion values, hover/scale effects, and mount/unmount transitions (`AnimatePresence`). |
| `@heroicons/react` | ^2.2.0 | Ready-made SVG icon set (menu bars, close, sun/moon theme toggle, chevrons, external-link, code, check/x-circle for form feedback, device icons). Avoids hand-authoring SVGs. |
| `react-type-animation` | ^3.2.0 | The typewriter effect in the Hero section that cycles through job titles/phrases. |
| `react-animated-numbers` | ^1.1.1 | Animated rolling-digit counter used in the Achievements section (loaded client-only via dynamic import to avoid SSR issues). |
| `resend` | ^6.0.0 | Email API SDK. Sends the contact form submissions from the `/api/send` route to the owner's inbox. |
| `@emotion/is-prop-valid` | ^1.3.1 | Peer helper that lets Framer Motion correctly filter which props should be forwarded to the DOM (prevents invalid-prop warnings when animating custom components). |

### Development dependencies (`devDependencies`)

| Package | Version | Why it is used |
| --- | --- | --- |
| `tailwindcss` | ^4 | Utility-first CSS framework used for nearly all styling. |
| `@tailwindcss/postcss` | ^4 | The PostCSS plugin that compiles Tailwind v4 (Tailwind v4 integrates through PostCSS rather than a standalone config). |
| `eslint` | ^9 | Linter for catching code issues. |
| `eslint-config-next` | ^15.5.23 | Next.js's recommended ESLint rules (core-web-vitals) for React/Next best practices. |
| `@eslint/eslintrc` | ^3 | Compatibility layer (`FlatCompat`) that lets the new flat ESLint config consume the legacy-style `next/core-web-vitals` shareable config. |

---

## 3. Configuration Files (root)

| File | Purpose |
| --- | --- |
| `package.json` | Declares dependencies, scripts (`dev`, `build`, `start`, `lint`), and Node 22.x engine pin. |
| `next.config.mjs` | Adds a `Cache-Control: no-cache, must-revalidate` header for `*.pdf` requests so the resume PDF is never served stale. |
| `jsconfig.json` | Sets the `@/*` → `./src/*` import alias for clean imports. |
| `eslint.config.mjs` | Flat ESLint config extending `next/core-web-vitals` via `FlatCompat`. |
| `postcss.config.mjs` | Registers the `@tailwindcss/postcss` plugin (how Tailwind v4 is compiled). |
| `README.md` | Default project readme. |

---

## 4. Folder Structure & Responsibilities

```
public/                 Static assets served at the site root
  Diksha_Grover_Resume.pdf   Downloadable resume (served with no-cache header)
  github-icon.svg            GitHub icon (used in contact/social links)
  linkedin-icon.svg          LinkedIn icon
  file.svg, next.svg, vercel.svg  Default Next.js starter assets
  images/projects/           Project screenshot images

src/
  app/                  Next.js App Router root
    layout.js           Root layout: <html>, metadata, JSON-LD, ThemeProvider, no-flash theme script
    page.js             Home page: composes all sections in order
    globals.css         Global styles, Tailwind import, background grid, theme token import
    themes.css          Dark & light CSS variable tokens
    api/send/route.js   POST endpoint that emails contact-form submissions via Resend
    components/         All UI components (see section 6)
    context/
      ThemeContext.js   React context provider for dark/light theme + localStorage persistence
```

---

## 5. Routes

This is an App Router project. Routing is file-based under `src/app`.

| Route | File | Type | Description |
| --- | --- | --- | --- |
| `/` | `src/app/page.js` | Page (server component) | The entire single-page portfolio. Renders Navbar + all sections + Footer + ScrollToTop. |
| `/api/send` | `src/app/api/send/route.js` | API route (POST) | Receives `{ email, subject, message }` JSON, validates it, and sends an email via Resend. Returns `{ ok: true }` on success or an error status (400 for invalid input, 500 for config/send failure). |

### `/api/send` behavior in detail
- Validates that `email` matches an email regex and that `subject` and `message` are present → otherwise `400 Invalid form data`.
- Reads `RESEND_API_KEY` and `CONTACT_TO` from environment variables. If either is missing → `500 Email service not configured`.
- Sends from `onboarding@resend.dev` (placeholder until a verified domain sender is configured), sets `replyTo` to the visitor's email, and formats the body as both text and HTML.
- All failures are logged server-side and returned as generic errors (no internal details leaked to the client).

**Required environment variables:**
- `RESEND_API_KEY` — API key for the Resend service.
- `CONTACT_TO` — the destination inbox that receives contact messages.

---

## 6. Components (`src/app/components/`)

All interactive components use the `"use client"` directive because they rely on hooks, state, or browser APIs. Purely presentational ones (Footer, MenuOverlay, NavLink) are server components.

| Component | Client? | Purpose |
| --- | --- | --- |
| `Navbar.jsx` | Yes | Fixed top navigation. Holds nav links (Home, About, Experience, Highlights, Contact), a mobile hamburger menu, a scroll-based background change, and the dark/light theme toggle (sun/moon icons via `useTheme`). |
| `NavLink.jsx` | No | A single styled nav link with an animated gradient underline on hover. |
| `MenuOverlay.jsx` | No | Mobile dropdown list that maps the nav links into stacked `NavLink`s. |
| `HeroSection.jsx` | Yes | Landing intro. Staggered Framer Motion entrance, a typewriter effect (`react-type-animation`) cycling job titles, a mouse-parallax effect on the avatar/image, and call-to-action buttons (contact + resume). |
| `AchievementsSection.jsx` | Yes | Headline metrics (years of experience, projects delivered, users served, uptime) shown with animated rolling counters (`react-animated-numbers`, dynamically imported client-only). |
| `ImpactMetrics.jsx` | Yes | Cards of quantified impact (e.g., "40% API latency reduction"). Uses a custom `CountUp` sub-component driven by Framer Motion `useMotionValue` + `animate`, triggered when scrolled into view (`useInView`). |
| `AboutSection.jsx` | Yes | Bio plus a tabbed panel (Skills / Education / Certifications, etc.) rendered with `TabButton`. `SKILLS` array lists the tech stack. Uses `useTransition` for non-blocking tab switches. |
| `TabButton.jsx` | No (imports motion) | A tab selector button with an animated underline that expands when active. |
| `ExperienceTimeline.jsx` | Yes | The primary work-history timeline. Each entry has role, company, period, summary, bullet points, achievements, and a tech `stack`. Expandable/collapsible with a chevron (`useInView` for reveal). |
| `ExperienceSection.jsx` | Yes | An alternate/secondary experience listing (data-engineering framed roles with ETL/Spark focus). Similar structure to the timeline. |
| `ProjectSection.jsx` | Yes | Despite the name, renders the **Technical Highlights** grid — capability cards (Frontend, Backend & APIs, Databases, Cloud & CI/CD, Auth & Security, Performance) with emoji icons and bullet points, animated on scroll into view. |
| `ProjectCard.jsx` | Yes | Reusable project card with an image background, hover overlay exposing GitHub and live-demo links, title, description, and a technologies list. (Available for showcasing individual projects.) |
| `EmailSection.jsx` | Yes | Contact form. Client-side validation (email/subject/message), touched-field error display, submit state (sending/success/error), GitHub + LinkedIn links. POSTs to `/api/send`. Uses check/x-circle icons for feedback. |
| `Footer.jsx` | No | Simple footer with the "DG" gradient monogram and a rights line. |
| `ScrollToTop.jsx` | Yes | Floating control (exported as `DeviceSwitcher`) that includes a scroll-to-top button and a device-preview switcher (mobile/tablet/desktop) that constrains the viewport to test responsive breakpoints. Toggles body overflow when previewing. |

### Page composition order (`page.js`)
`Navbar → HeroSection → AchievementsSection → ImpactMetrics → AboutSection → ExperienceTimeline → ProjectSection → EmailSection → Footer → ScrollToTop`

---

## 7. Theming System

- **`context/ThemeContext.js`** — a React context (`ThemeProvider` + `useTheme` hook) that stores the current theme (`dark`/`light`), persists it to `localStorage`, and sets `data-theme` on `<html>`. Exposes `theme`, `toggleTheme`, and `mounted`.
- **`layout.js`** — wraps the app in `ThemeProvider` and injects a tiny inline script in `<head>` that reads the saved theme **before paint** to prevent a flash of the wrong theme (FOUC).
- **`themes.css`** — defines the CSS custom properties (color tokens like `--bg-primary`, `--text-primary`, `--input-border`, `--grid-line`) for both dark and light themes.
- **`globals.css`** — imports Tailwind and the theme tokens, and paints the fixed grid-line background using those tokens.

---

## 8. SEO & Metadata

Defined in `layout.js`:
- `metadata` object: title, description, keywords, Open Graph tags, and robots (index/follow).
- **JSON-LD structured data** (`schema.org/Person`): name, job title, URL, image, social profiles (GitHub, LinkedIn), location, email, and `knowsAbout` skill list — helps search engines and rich results understand the person.

---

## 9. How to Run

```bash
npm install          # install dependencies (Node 22.x)
npm run dev          # start dev server (http://localhost:3000)
npm run build        # production build
npm run start        # serve the production build
npm run lint         # run ESLint
```

Set these environment variables (e.g. in `.env.local`) for the contact form to work:

```
RESEND_API_KEY=your_resend_api_key
CONTACT_TO=destination@example.com
```

---

## 10. One-Paragraph Summary (for handing to another API)

This is a Next.js 15 (App Router) + React 19 personal portfolio for a full-stack developer. It is a single page (`/`) composed of modular client components — hero with typewriter and parallax, animated achievement counters, quantified impact metrics, an about section with skill tabs, an expandable work-experience timeline, a technical-highlights grid, and a validated contact form. Styling uses Tailwind CSS v4 with CSS-variable theming (dark/light, persisted in localStorage, no-flash script). Animations use Framer Motion; icons use Heroicons. The only backend is one API route, `POST /api/send`, which validates input and emails contact submissions via Resend using `RESEND_API_KEY` and `CONTACT_TO` env vars. SEO is handled through Next metadata plus JSON-LD Person structured data. Path alias `@/*` maps to `src/*`; linting via ESLint 9 + eslint-config-next; runtime is Node 22.
```
