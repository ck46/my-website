/* ──────────────────────────────────────────────────────────────────────────────
 * site.ts – Single source of truth for all site content.
 *
 * HOW TO EDIT:
 *   Update the exports below. No component files need to change.
 *   Strings marked "PLACEHOLDER" are safe stubs — fill them in when ready.
 * ────────────────────────────────────────────────────────────────────────────── */

import { type LucideIcon, Globe, ShieldCheck } from "lucide-react";

// ── Site-wide config ─────────────────────────────────────────────────────────

export const siteConfig = {
    name: "Chansa Kabwe",
    tagline: "AI Researcher & Engineer",
    description:
        "AI researcher and engineer working on safety, reliability, and product systems for AI.",
    contactEmail: "me@ck46.com",
    url: "https://ck46.com",
    calendly: "https://calendly.com/chansa-megacog/30min",
    socials: {
        github: "https://github.com/ck46",
        huggingface: "https://huggingface.co/ck46",
        linkedin: "https://www.linkedin.com/in/ck46",
        scholar: "https://scholar.google.com/citations?user=VZr0GMwAAAAJ&hl=en",
        // Add when available:
        // arxiv: "https://arxiv.org/a/...",
    },
};

// Composed page-meta title: "Chansa Kabwe — AI Researcher & Engineer"
export const siteMetaTitle = `${siteConfig.name} — ${siteConfig.tagline}`;

// ── Credibility strip (homepage, above-the-fold) ─────────────────────────────

export const credibilityLinks = [
    { label: "GitHub", href: siteConfig.socials.github },
    { label: "LinkedIn", href: siteConfig.socials.linkedin },
    { label: "HuggingFace", href: siteConfig.socials.huggingface },
    { label: "Google Scholar", href: siteConfig.socials.scholar },
    { label: "MIT OpenCourseWare Profile", href: "https://www.ocw-openmatters.org/2023/04/07/coding-the-future-with-mit-opencourseware/" },
    // Add when available:
    // { label: "arXiv", href: siteConfig.socials.arxiv },
];

// ── Featured coverage (homepage preview cards) ──────────────────────────────

export interface FeaturedCoverageItem {
    source: string;
    title: string;
    publishedDate: string; // YYYY-MM-DD
    summary: string;
    href: string;
    thumbnailUrl: string;
    thumbnailAlt: string;
}

export const featuredCoverage: FeaturedCoverageItem[] = [
    {
        source: "MIT Open Matters (MIT OpenCourseWare)",
        title: "Coding the future with MIT OpenCourseWare",
        publishedDate: "2023-04-07",
        summary:
            "Profile feature highlighting Chansa Kabwe's learning journey and perspective on coding.",
        href: "https://www.ocw-openmatters.org/2023/04/07/coding-the-future-with-mit-opencourseware/",
        thumbnailUrl:
            "https://www.ocw-openmatters.org/wp-content/uploads/2023/04/1-w7EHewi1oJSpMw2iTQouGA-1024x751.webp",
        thumbnailAlt: "Featured image from the MIT OpenCourseWare profile article.",
    },
];

// ── Hero ─────────────────────────────────────────────────────────────────────

// Subhead is an array of string segments or { bold } objects so the renderer
// can emphasize specific terms (e.g., MegaCog) without parsing markdown.
export type SubheadSegment = string | { bold: string };

export const heroContent = {
    eyebrow: "Hi, I'm Chansa.",
    headline: "AI Researcher & Engineer.",
    subhead: [
        "I build and study dependable AI systems. Current public work includes ",
        { bold: "NjiraAI" },
        ", ",
        { bold: "mcue.dev" },
        ", ",
        { bold: "Renbi" },
        ", and selected preprints.",
    ] as SubheadSegment[],
    ctaPrimary: {
        text: "cat research_program.md",
        href: "/research",
    },
    ctaSecondary: {
        text: "./request_intro.sh",
        href: "/contact",
    },
};

// ── Favorite quote (homepage) ───────────────────────────────────────────────

export const favoriteQuote = {
    text:
        "The only way of discovering the limits of the possible is to venture a little way past them into the impossible.",
    author: "Sir Arthur C. Clarke",
    source: "Profiles of the Future (1962)",
};

// ── Audiences (homepage directory listing) ───────────────────────────────────

export interface Audience {
    id: string;
    title: string;
    icon: LucideIcon;
    description: string;
    offers: string[];
    cta: string;
    href: string;
}

export const audiences: Audience[] = [
    {
        id: "collaborators",
        title: "Collaborators",
        icon: Globe,
        description:
            "Researchers and engineers engaging with public preprints or conference work.",
        offers: ["Preprints", "Conference work", "Research collaboration"],
        cta: "View Research",
        href: "/research",
    },
    {
        id: "clients",
        title: "Clients",
        icon: ShieldCheck,
        description: "A small number of selective consulting engagements per quarter.",
        offers: [
            "LLM Safety & Reliability Sprints",
            "Agentic Risk Reviews",
            "Build-with-you Advisory",
        ],
        cta: "View Services",
        href: "/consult",
    },
];

// ── Public projects (homepage) ───────────────────────────────────────────────

export interface ResearchProjectStatusItem {
    label: string;
    href?: string;
    status: "complete" | "in-progress" | "planned";
}

export interface ResearchProject {
    id: string;
    headingPrefix: string; // e.g., "Product Project"
    headingName: string;   // e.g., "mcue.dev"
    headingHref?: string;
    pid: string;
    subject: string;
    hypothesis?: string;
    statusItems: ResearchProjectStatusItem[];
    cta?: { text: string; href: string; external?: boolean };
}

export const researchProjects: ResearchProject[] = [
    {
        id: "mcue",
        headingPrefix: "Product Project",
        headingName: "mcue.dev",
        headingHref: "https://mcue.dev",
        pid: "2025",
        subject:
            "Local-first operating-state tooling for technical operators and AI agents.",
        statusItems: [
            { label: "Dogfooding", status: "in-progress" },
            {
                label: "Project page: mcue.dev →",
                href: "https://mcue.dev",
                status: "complete",
            },
        ],
    },
    {
        id: "renbi",
        headingPrefix: "Product Project",
        headingName: "Renbi",
        headingHref: "https://renbi.app",
        pid: "2026",
        subject:
            "renbi.app is scheduled for official launch on June 12, 2026.",
        statusItems: [
            { label: "Launch preparation", status: "in-progress" },
            {
                label: "Product site: renbi.app →",
                href: "https://renbi.app",
                status: "planned",
            },
        ],
    },
];

// ── Services (/work) ─────────────────────────────────────────────────────────

export const services = [
    {
        title: "LLM Safety & Reliability Sprint",
        duration: "2–3 weeks",
        description:
            "We evaluate your current agentic system, create a custom evaluation harness, and define quality gates to prevent regression.",
        outcomes: [
            "Custom eval dataset & metric definition",
            "Automated regression suite",
            "Risk report & mitigation plan",
        ],
    },
    {
        title: "Agentic Risk Review",
        duration: "1 week",
        description:
            "A deep-dive threat modeling session to identify failure modes in your agent's architecture and reasoning loops.",
        outcomes: [
            "Threat model document",
            "Failure mode taxonomy",
            "Immediate fix recommendations",
        ],
    },
    {
        title: "Build-with-you Advisory",
        duration: "Monthly",
        description:
            "Ongoing architectural review and guidance on MLOps, evaluation strategies, and safety-critical implementation details.",
        outcomes: [
            "Weekly architecture reviews",
            "Code-level guidance",
            "Hiring support for safety roles",
        ],
    },
];

// ── Mini Case Snapshots (/work — replaces fabricated case studies) ────────────

export interface MiniCaseSnapshot {
    context: string;
    work: string;
    result: string;
}

export const miniCaseSnapshots: MiniCaseSnapshot[] = [
    {
        context: "FinTech — autonomous financial analysis agent",
        work: "Built custom eval harness + constrained-decoding guardrails",
        result: "Details on request",
    },
    {
        context: "Healthcare — RAG-based clinical guideline agent",
        work: "Safety gate design + multi-turn evaluation suite",
        result: "Details on request",
    },
    {
        context: "Developer tooling — code-generation agent pipeline",
        work: "Regression testing framework + failure taxonomy",
        result: "Details on request", // PLACEHOLDER — update with real outcome
    },
];

// ── Deliverables strip (/work) ───────────────────────────────────────────────

export const deliverables = [
    "Eval harness + regression suite",
    "Risk model + failure taxonomy",
    "Quality gates + guardrail recommendations",
];

// ── Research (/research) ─────────────────────────────────────────────────────

export interface ThemeLink {
    label: string;
    href: string;
    available: boolean;
}

export interface ResearchTheme {
    id: string;
    title: string;
    description: string;
    links: ThemeLink[];
}

export const researchContent = {
    thesisLine1:
        "Public research material is limited to preprints and conference work.",
    thesisLine2:
        "Unpublished research directions stay private until they are ready to share.",
    themes: [
        {
            id: "preprints",
            title: "Preprints",
            description:
                "Public drafts and preprints that are ready for external discussion.",
            links: [
                { label: "Read", href: "#public-research", available: true },
                { label: "Talk", href: siteConfig.calendly, available: true },
            ],
        },
        {
            id: "conference-work",
            title: "Conference Work",
            description:
                "LLMs-as-Search is set to appear at AMLDS 2026.",
            links: [
                { label: "Read", href: "#public-research", available: true },
                { label: "Talk", href: siteConfig.calendly, available: true },
            ],
        },
        {
            id: "collaboration",
            title: "Collaboration",
            description:
                "Collaboration inquiries should reference public work or a specific preprint.",
            links: [
                { label: "Talk", href: siteConfig.calendly, available: true },
            ],
        },
    ] as ResearchTheme[],
    collaboration: {
        intro:
            "I am open to collaboration around public preprints and conference work.",
        lookingFor:
            "Co-authors, research labs, and technical collaborators",
        iBring:
            "Public drafts, implementation experience, and study design",
        idealCollaboration:
            "Focused collaboration around a public preprint or conference artifact",
        cta: {
            text: "Propose Collaboration",
            href: siteConfig.calendly,
        },
    },
};

// ── Research map nodes (homepage + /research) ────────────────────────────────

export const researchMapNodes = [
    { label: "Preprints", anchor: "public-research" },
    { label: "AMLDS 2026", anchor: "public-research" },
    { label: "Collaboration", anchor: "collaboration" },
];

// ── Publications / Artifacts skeleton ────────────────────────────────────────

export interface Publication {
    title: string;
    status: "preprint" | "conference";
    note: string;
    href: string | null;
}

export const publications: Publication[] = [
    {
        title: "LLMs-as-Search",
        status: "conference",
        note: "Set to appear at AMLDS 2026.",
        href: siteConfig.calendly,
    },
    {
        title: "Finite-Space Constraints (FSC)",
        status: "preprint",
        note: "Preprint available on request.",
        href: null,
    },
];

export interface Artifact {
    title: string;
    note: string;
    href: string | null;
}

export const researchArtifacts: Artifact[] = [
    {
        title: "Public artifact links",
        note: "Links will be added when artifacts are intentionally public.",
        href: null,
    },
];

// ── Research log entries (homepage tail) ──────────────────────────────────────

export const researchLogEntries = [
    {
        date: "2026",
        text: "LLMs-as-Search set to appear at AMLDS 2026",
        href: "/research#public-research",
    },
    {
        date: "2026",
        text: "Selected preprints available for research conversations",
        href: "/research#public-research",
    },
    {
        date: "2026",
        text: "Unpublished research directions kept private until release",
        href: "/research",
    },
];

// ── Per-page metadata ────────────────────────────────────────────────────────

export const pageMetadata = {
    home: {
        title: siteMetaTitle,
        description: siteConfig.description,
    },
    work: {
        title: "Work & Services",
        description:
            "Advisory sprints, risk reviews, and build-with-you engagements for AI safety and reliability.",
    },
    consult: {
        title: "Consult",
        description:
            "Advisory sprints, risk reviews, and build-with-you engagements for AI safety and reliability.",
    },
    projects: {
        title: "Projects",
        description:
            "Selected GitHub projects across AI systems, tooling, and experiments.",
    },
    research: {
        title: "Research",
        description:
            "Public preprints, conference work, and research collaboration notes.",
    },
    contact: {
        title: "Contact",
        description:
            "Get in touch for advisory, investment, or research collaboration.",
    },
};
