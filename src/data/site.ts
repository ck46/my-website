/* ──────────────────────────────────────────────────────────────────────────────
 * site.ts – Single source of truth for all site content.
 *
 * HOW TO EDIT:
 *   Update the exports below. No component files need to change.
 *   Strings marked "PLACEHOLDER" are safe stubs — fill them in when ready.
 * ────────────────────────────────────────────────────────────────────────────── */

import { type LucideIcon, Globe, ShieldCheck, Zap, Calendar, MessageSquare, Mail } from "lucide-react";

// ── Site-wide config ─────────────────────────────────────────────────────────

export const siteConfig = {
    name: "Chansa Kabwe",
    title: "AI Engineer & Safety Researcher",
    description:
        "Building safety and reliability infrastructure for agentic AI systems.",
    url: "https://ck46.com",
    calendly: "https://calendly.com/chansa-megacog/30min",
    socials: {
        github: "https://github.com/ck46",
        huggingface: "https://huggingface.co/ck46",
        linkedin: "https://www.linkedin.com/in/ck46",
        // Add when available:
        // scholar: "https://scholar.google.com/citations?user=...",
        // arxiv: "https://arxiv.org/a/...",
    },
};

// ── Credibility strip (homepage, above-the-fold) ─────────────────────────────

export const credibilityLinks = [
    { label: "GitHub", href: siteConfig.socials.github },
    { label: "LinkedIn", href: siteConfig.socials.linkedin },
    { label: "HuggingFace", href: siteConfig.socials.huggingface },
    // Uncomment when available:
    // { label: "Google Scholar", href: siteConfig.socials.scholar },
    // { label: "arXiv", href: siteConfig.socials.arxiv },
];

// ── Hero ─────────────────────────────────────────────────────────────────────

export const heroContent = {
    headline: "Ship safer, more reliable agentic AI systems.",
    subhead:
        "Engineering leader focused on reasoning validation, evaluation harnesses, and production-grade guardrails — so teams can deploy agents with measurable reliability and safer behavior.",
    ctaPrimary: {
        text: "./book_call.sh",
        href: siteConfig.calendly,
    },
    ctaSecondary: {
        text: "cat startup_brief.md",
        href: "/startup",
    },
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
        id: "clients",
        title: "Clients",
        icon: ShieldCheck,
        description: "Advisory & implementation for enterprise AI risk.",
        offers: [
            "LLM Safety & Reliability Sprints",
            "Agentic Risk Reviews",
            "Build-with-you Advisory",
        ],
        cta: "View Services",
        href: "/work",
    },
    {
        id: "investors",
        title: "Investors",
        icon: Zap,
        description: "Building the infrastructure for safe agent autonomy.",
        offers: [
            "NjiraAI: Agent Reliability Platform",
            "Pre-seed / Seed opportunities",
        ],
        cta: "View Startup",
        href: "/startup",
    },
    {
        id: "collaborators",
        title: "Collaborators",
        icon: Globe,
        description: "Researching the limits of LLM reasoning.",
        offers: ["Reasoning Validation", "Lightweight Formal Methods", "Agent Evals"],
        cta: "View Research",
        href: "/research",
    },
];

// ── NjiraAI ──────────────────────────────────────────────────────────────────

export interface RoadmapItem {
    id: string;
    label: string;
    status: "complete" | "in-progress" | "planned";
}

export const njiraContent = {
    title: "NjiraAI",
    tagline: "Safety and reliability infrastructure for tool-using AI agents.",
    problem:
        "Agents fail at the action layer. They call the wrong API, pass malformed arguments, loop indefinitely, or take destructive actions with no human in the loop. There\u2019s no inspection point between what an agent decides and what it actually does.",
    solution:
        "NjiraAI is a governance proxy that sits between your agent and its tools. Every tool call passes through a real-time policy engine that can ALLOW, BLOCK, or MODIFY it before execution. You get control over agent behavior without rewriting your agent.",
    whatWeAreBuilding: [
        "Policy-gated proxy for agent tool calls \u2014 ALLOW / BLOCK / MODIFY in real time",
        "Audit-grade traces with full request/response capture",
        "Replay and simulation: test new policies against recorded sessions",
        "Regression testing: detect behavioral drift across model or prompt changes",
        "Loop detection and circuit-breaker protection",
    ],
    example: {
        call: "DELETE /api/v1/users/all",
        body: '{"confirm": true}',
        result: "BLOCK",
    },
    whoThisIsFor: [
        "Teams deploying tool-using agents in production",
        "Investors aligned with AI safety infrastructure",
        "Engineers and researchers who want to work on this problem early",
    ],
    roadmap: [
        { id: "alpha", label: "Alpha: Internal eval harness and proxy prototype", status: "complete" },
        { id: "beta", label: "Beta: Closed beta with design partners (mid-Feb 2026)", status: "in-progress" },
        { id: "v1", label: "V1: Self-hosted governance proxy, generally available", status: "planned" },
    ] as RoadmapItem[],
    bridgeLine: "Pilots can start as a reliability sprint.",
    cta: {
        text: "Become a Design Partner",
        href: siteConfig.calendly,
    },
    ctaSecondary:
        "Investors and prospective team members welcome. We\u2019re early, small, and building fast.",
};

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
        "I build diagnostics and guardrails for reasoning in LLMs and agents.",
    thesisLine2:
        "Focus: math reasoning limits, reasoning reliability, and lightweight verification.",
    themes: [
        {
            id: "reasoning-validation",
            title: "Reasoning Validation",
            description:
                "Can we automatically verify the logical steps in an agent's Chain of Thought?",
            links: [
                { label: "Read", href: "#reasoning-validation", available: false },
                { label: "Artifacts", href: "#reasoning-validation", available: false },
                { label: "Talk", href: siteConfig.calendly, available: true },
            ],
        },
        {
            id: "lightweight-formal-methods",
            title: "Lightweight Formal Methods",
            description:
                "Applying lightweight formal methods to probabilistic models to guarantee certain invariants.",
            links: [
                { label: "Read", href: "#lightweight-formal-methods", available: false },
                { label: "Artifacts", href: "#lightweight-formal-methods", available: false },
                { label: "Talk", href: siteConfig.calendly, available: true },
            ],
        },
        {
            id: "token-level-interpretability",
            title: "Token-level Interpretability",
            description:
                "Analyzing activation patterns to predict hallucinations or reasoning failures.",
            links: [
                { label: "Read", href: "#token-level-interpretability", available: false },
                { label: "Artifacts", href: "#token-level-interpretability", available: false },
                { label: "Talk", href: siteConfig.calendly, available: true },
            ],
        },
    ] as ResearchTheme[],
    collaboration: {
        intro:
            "I am looking for co-authors, pilot partners, and labs interested in rigorous evaluation of agentic reasoning.",
        lookingFor:
            "Co-authors, research labs, and pilot partners with deployed agent stacks",
        iBring:
            "Benchmarks, telemetry tooling, and validation-layer prototypes",
        idealCollaboration:
            "Run eval suite on your agent stack; co-author paper on findings",
        cta: {
            text: "Propose Collaboration",
            href: siteConfig.calendly,
        },
    },
};

// ── Research map nodes (homepage + /research) ────────────────────────────────

export const researchMapNodes = [
    { label: "Search framing", anchor: "reasoning-validation" },
    { label: "Stress diagnostics", anchor: "lightweight-formal-methods" },
    { label: "Validation layer", anchor: "token-level-interpretability" },
];

// ── Publications / Artifacts skeleton ────────────────────────────────────────

export interface Publication {
    title: string;
    status: "draft" | "in-submission" | "preprint" | "published";
    note: string;
    href: string | null;
}

export const publications: Publication[] = [
    {
        title: "LLMs-as-Search: token-level framing",
        status: "draft",
        note: "PDF on request",
        href: siteConfig.calendly,
    },
    {
        title: "Finite-Space Constraints (FSC): diagnostics + stress tests",
        status: "draft",
        note: "Prototype repo coming",
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
        title: "NjiraAI validation layer: agentic safety infra",
        note: "Early access — brief on request",
        href: njiraContent.cta.href,
    },
    {
        title: "Agentic Eval Harness + telemetry logger",
        note: "Repo coming soon",
        href: null, // PLACEHOLDER — add repo URL when public
    },
];

// ── Research log entries (homepage tail) ──────────────────────────────────────

export const researchLogEntries = [
    {
        date: "2026-02-10",
        text: "Analyzing chain-of-thought failure modes in strict reasoning tasks",
        href: "/research#reasoning-validation",
    },
    {
        date: "2026-02-01",
        text: "Evaluating lightweight formal verification methods for agent loops",
        href: "/research#lightweight-formal-methods",
    },
    {
        date: "2026-01-15",
        text: "Initial commit: Agentic Eval Harness (v0.1.0)",
        href: "/research#artifacts",
    },
];

// ── Contact channels ─────────────────────────────────────────────────────────

export interface ContactChannel {
    id: string;
    title: string;
    icon: LucideIcon;
    description: string;
    href: string;
}

export const contactChannels: ContactChannel[] = [
    {
        id: "clients",
        title: "Clients",
        icon: Calendar,
        description: "Book a discovery call for sprints or advisory.",
        href: siteConfig.calendly,
    },
    {
        id: "investors",
        title: "Investors / Partners",
        icon: MessageSquare,
        description: "Request startup brief or early access to NjiraAI.",
        href: siteConfig.calendly,
    },
    {
        id: "collaborators",
        title: "Collaborators",
        icon: Mail,
        description: "Propose a research project or paper collaboration.",
        href: siteConfig.calendly,
    },
];

// ── Per-page metadata ────────────────────────────────────────────────────────

export const pageMetadata = {
    home: {
        title: siteConfig.title,
        description: siteConfig.description,
    },
    work: {
        title: "Work & Services",
        description:
            "Advisory sprints, risk reviews, and build-with-you engagements for AI safety and reliability.",
    },
    startup: {
        title: "NjiraAI — Startup",
        description:
            "Safety and reliability infrastructure for tool-using AI agents. A governance proxy that intercepts agent tool calls and applies policies in real time.",
    },
    research: {
        title: "Research",
        description:
            "LLM reasoning diagnostics, lightweight formal methods, and evaluation tooling for agentic AI.",
    },
    contact: {
        title: "Contact",
        description:
            "Get in touch for advisory, investment, or research collaboration.",
    },
};
