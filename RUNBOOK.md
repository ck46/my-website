# ck46.com Runbook

## Overview
This is a Personal Website & Portfolio built with **Next.js 14+ (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation
```bash
npm install
```

### Running Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment
The site is optimized for deployment on **Vercel**.

1. Connect your GitHub repository to Vercel.
2. Vercel will automatically detect Next.js.
3. Default build settings (`next build`) are correct.

## Content Management
All text content is centralized in `src/data/content.ts`. 
To update copy (hero text, services, bios, research themes), edit this file. **No code changes are required for text updates.**

## Project Structure
- `src/app`: Page routes and layouts.
- `src/components`: Reusable UI components.
  - `layout`: Navbar, Footer.
  - `ui`: Atomic components (Buttons, Cards).
- `src/data`: Structured content files.
- `src/lib`: Utility functions.

## Commands
- `npm run dev`: Start dev server.
- `npm run build`: Production build (runs typecheck).
- `npm run lint`: Run ESLint.
- `npm run start`: Start production server.
