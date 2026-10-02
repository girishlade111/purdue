# Purdue — Education Platform (React)

A modern, high-performance education platform landing site built with React, TypeScript, and Vite. It presents an online-learning brand — courses, instructors, testimonials, blog, newsletter, and promotional sections — with smooth scroll-triggered animations and a polished, responsive design.

## Features

- **Hero section** with bold headline and call-to-action
- **Course catalog** section with course cards
- **Instructors section** profiling expert teachers
- **Testimonials** carousel of student reviews
- **Blog / articles** section
- **Newsletter signup** and promo banners
- **Video showcase** section
- **Sticky navbar** and rich footer
- Scroll-triggered animations via Framer Motion
- Fully responsive, mobile-first layout with Tailwind CSS

## Tech Stack

- **React 19** + **TypeScript** (strict, type-safe)
- **Vite 8** (build tool and dev server)
- **Tailwind CSS 4** (utility-first styling via the Vite plugin)
- **Framer Motion 12** (production-ready animations)
- **Lucide React** (consistent icon set)
- **Oxlint** (fast modern linter)

## Quick Start

Prerequisites: Node.js 18+.

```bash
git clone https://github.com/girishlade111/purdue.git
cd purdue
npm install
npm run dev      # start the dev server
npm run build    # type-check (tsc -b) + production build to dist/
npm run preview  # preview the production build
npm run lint     # run oxlint
```

## Project Structure

```
purdue/
├── public/                 # Static assets (favicon, icons)
├── src/
│   ├── components/         # Navbar and shared components
│   ├── sections/           # Page sections (Hero, Courses, About, ...)
│   ├── data/               # Content data (courses, instructors, ...)
│   ├── assets/             # Images and other assets
│   ├── motion/             # Animation helpers
│   ├── App.tsx             # Main app composition
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles + Tailwind
├── index.html              # HTML template
├── package.json            # Dependencies & scripts
├── vite.config.ts          # Vite configuration
├── tsconfig*.json          # TypeScript configs
├── DESIGN.md / SKILL.md    # Design notes and skill docs
└── dist/                   # Production build output (generated)
```

## Environment Variables

None required — the app is fully client-side with static content data.

## Deploy Notes

Static SPA; any static host works. `npm run build` produces `dist/`, which can be served directly. The live demo is deployed on Cloudflare Pages:

- **Live demo:** https://purdue.pages.dev

## Credit

**Built by [Girish Lade](https://github.com/girishlade111)** — see more projects at [ladestack.in](https://ladestack.in).
