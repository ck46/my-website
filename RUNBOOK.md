# ck46.com Runbook

## Overview
Personal website & portfolio built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS 3**.

## Prerequisites
- Node.js 18+
- npm (or yarn — `packageManager` field in `package.json` pins yarn 1.22)

## Quick Commands
```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Production build (runs TypeScript + static generation)
npm run start        # Serve production build
npm run lint         # Run ESLint via next lint
```

## Content Management
All text content is centralized in **`src/data/site.ts`**. To update copy (hero text, services, research themes, publications, contact templates), edit this file. No component changes are required for text updates.

### Key sections in `site.ts`:
| Export | What it controls |
|--------|-----------------|
| `siteConfig` | Name, title, URL, social links, contact email |
| `heroContent` | Homepage headline, subhead, CTAs |
| `credibilityLinks` | Above-the-fold proof links (GitHub, LinkedIn, etc.) |
| `audiences` | Homepage directory listing (3 audience rows) |
| `njiraContent` | NjiraAI: tagline, problem, solution, roadmap, what we're building |
| `services` | /work page service cards |
| `miniCaseSnapshots` | /work page engagement snapshots |
| `deliverables` | /work page deliverables strip |
| `researchContent` | /research thesis, themes, collaboration details |
| `publications` | /research preprints/drafts skeleton |
| `researchArtifacts` | /research tools/repos skeleton |
| `contactChannels` | /contact mailto templates with prefilled bodies |
| `pageMetadata` | Per-page SEO title + description |

## Deployment
Deployed on **Vercel** (`vercel.json` configures Next.js framework + clean URLs).

1. Connect repo to Vercel
2. Vercel auto-detects Next.js
3. Default build settings (`next build`) are correct

## Project Structure
```
src/
├── app/           # Page routes and layouts
│   ├── layout.tsx # Root layout (metadata, fonts, nav, footer)
│   ├── page.tsx   # Homepage
│   ├── work/      # /work (services + case snapshots)
│   ├── startup/   # /startup (NjiraAI)
│   ├── research/  # /research (themes + publications)
│   └── contact/   # /contact (mailto channels)
├── components/
│   └── layout/    # Navbar, Footer
├── data/
│   └── site.ts    # All site content (single source of truth)
└── lib/
    └── utils.ts   # Tailwind merge utility
```
