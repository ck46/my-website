# AGENTS.md

This repository contains the code for ck46.com (personal + startup + research website).

AI coding agents are welcome to contribute, but must follow the rules below to avoid introducing incorrect claims, breaking builds, or degrading performance/SEO.

---

## 1) Mission

Improve ck46.com to be:
- **High-impact** for three audiences: **clients**, **investors/partners**, and **research collaborators**
- **Fast**, **accessible**, and **SEO-friendly**
- **Easy to maintain** with content-driven structure (data/config files instead of hardcoding copy across components)

Primary outcomes:
- Clear conversion paths (book call / request startup info / propose research collaboration)
- Strong information architecture and grounded messaging
- Excellent Core Web Vitals and Lighthouse scores (where applicable)

---

## 2) Non-Negotiable Content Rules

### 2.1 No fabrication
Do **not** invent:
- customers, pilots, partnerships, investors, revenue, user counts, press, awards, or logos
- “as seen in” claims
- publication acceptances or speaking engagements not provided

If details are unknown, use **explicit placeholders**, e.g.:
- “(Details available on request)”
- “(In progress)”
- “(Placeholder — replace with real metric)”

### 2.2 Startup description (safe default)
Use this high-level description unless the repo already contains more accurate copy:

> **NjiraAI** is building safety and reliability infrastructure for **agentic AI systems**, focusing on **reasoning validation**, evaluation, and guardrails to make AI agents safer and more deployable in higher-stakes environments.

### 2.3 Copy style
- Prefer **grounded, enterprise-readable** language: safety, reliability, evaluation, validation, guardrails, deployment risk.
- Avoid hype like “revolutionary”, “changing the world”, “future of AI” unless backed with concrete proof.
- Keep niche/long-horizon interests (e.g., Lisp explorations, humanoid robotics) off the main conversion path—place them under **Research** or **Explorations**.

---

## 3) Required Information Architecture

### 3.1 Navigation
Target structure (adapt to current framework/router):
- `/` Home
- `/work` Case studies + services
- `/startup` NjiraAI pitch
- `/research` Research themes + featured artifacts + collaboration asks
- optional `/writing` or `/talks` (only if present)
- `/contact` Contact options

### 3.2 Homepage section order
1. **Hero**: outcome-based headline + credibility subhead + CTAs  
   - Primary CTA: **Book a call**
   - Secondary CTA: **Request startup info/deck** (do not assume deck exists)
2. **Who I help**: 3 cards (Clients / Investors / Collaborators)
3. **NjiraAI block**: problem → solution → differentiators → milestones/roadmap → CTA
4. **Case studies**: 2–5 entries (allow placeholders clearly labeled)
5. **Research highlights**: 2–3 items
6. **Contact**: repeat the 3 conversion paths

### 3.3 Client offers (services)
Include a “Ways to work with me” section (home and/or work page) describing:
- **LLM Safety & Reliability Sprint (2–3 weeks)**
- **Agentic Risk Review (1 week)**
- **Build-with-you Advisory (monthly)**

Each should be described in **outcomes language** (what deliverables/results the client gets).

---

## 4) Engineering Standards

### 4.1 Preserve the build
- Do not break builds, routing, or deployment.
- Keep framework conventions (Next.js/Vite/Astro/etc.).
- If migrating (e.g., JS → TS), do it incrementally with minimal disruption.

### 4.2 Code quality
Preferred standards (use what fits the repo):
- TypeScript where feasible (or a clear migration plan)
- ESLint + Prettier (or existing formatter)
- Consistent component conventions (naming, props, imports)
- Basic tests (unit + a smoke/e2e if practical)

### 4.3 Performance
Optimize for:
- Smaller JS bundles (remove unused deps, tree-shake, code-split)
- Image optimization (responsive images; `next/image` if Next)
- Font optimization (preload/subset/self-host when appropriate)
- Avoid heavy animations on initial render
- Minimize third-party scripts

### 4.4 SEO & accessibility
Must include:
- Semantic headings (single H1 per page)
- Meta title/description, OpenGraph tags
- Sitemap/robots where applicable
- Accessible color contrast and keyboard navigation
- Alt text for meaningful images

---

## 5) Content Should Be Data-Driven

Whenever possible:
- Store site content (case studies, research highlights, services, links) in a single config/data module:
  - `src/data/site.ts` or `src/content/*.json` (adapt to repo)
- UI components should render from these data structures
- This allows updates without editing layout components

---

## 6) Agent Workflow Expectations

### 6.1 Start with an audit
Before making large changes:
- Identify the framework, router type, styling system, and deployment setup
- Summarize repo structure
- Note risks: CSR-only rendering, broken metadata, heavy dependencies, missing accessibility

### 6.2 Make changes in small, reviewable steps
- Prefer PR-ready chunks: “SEO + metadata”, “Homepage restructure”, “Startup page”, etc.
- Avoid large sweeping refactors unless necessary

### 6.3 Output format for suggested changes
When proposing edits, provide:
- File path
- Exact code diff or replacement blocks
- Any new dependencies + why
- Commands to run and expected output

---

## 7) Local Development (fill in if missing)

Agents should read and use the repo’s existing scripts. If absent, add minimal scripts.

Typical:
- Install: `npm install` / `pnpm install` / `yarn`
- Dev: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- Test: `npm test`

If you add CI, align it with these commands.

---

## 8) Security & Privacy

- Never add secrets to the repository.
- If environment variables are required, add `.env.example` and document variables.
- Avoid analytics/trackers unless explicitly requested.

---

## 9) Definition of Done

A change is “done” when:
- Site builds and runs locally
- Navigation and CTAs match the required IA
- No fabricated claims are introduced
- SEO basics + accessibility improvements are in place
- Performance improvements are measurable (or at least clearly reasoned and minimal-risk)

---

## 10) Questions / Constraints

If required details are missing:
- Choose a safe default
- Add clearly labeled placeholders
- Do not block progress waiting for more info
