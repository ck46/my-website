import { Book, Code, Globe, Layers, ShieldCheck, Zap } from "lucide-react";

export const siteConfig = {
    name: "Chansa Kabwe",
    title: "AI Engineer & Safety Researcher",
    description: "Building safety and reliability infrastructure for agentic AI systems.",
    url: "https://ck46.com",
    socials: {
        github: "https://github.com/ck46",
        huggingface: "https://huggingface.co/ck46",
        linkedin: "https://www.linkedin.com/in/ck46",
        twitter: "https://twitter.com/ck46", // Placeholder if exists
    },
};

export const heroContent = {
    headline: "Ship safer, more reliable agentic AI systems.",
    subhead:
        "Engineering leader focused on reasoning validation, evaluation harnesses, and production-grade guardrails for autonomous agents.",
    ctaPrimary: { text: "Book a call", href: "/contact" },
    ctaSecondary: { text: "Request NjiraAI deck", href: "/startup" },
};

export const audiences = [
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
        offers: ["NjiraAI: Agent Reliability Platform", "Pre-seed / Seed opportunities"],
        cta: "View Startup",
        href: "/startup",
    },
    {
        id: "collaborators",
        title: "Collaborators",
        icon: Globe,
        description: "Researching the limits of LLM reasoning.",
        offers: ["Reasoning Validation", "Formal Verification Lite", "Agent Evals"],
        cta: "View Research",
        href: "/research",
    },
];

export const njiraContent = {
    title: "NjiraAI",
    tagline: "Safety and reliability infrastructure for agentic systems.",
    problem:
        "Agents deployed in high-stakes environments lack robust validation for their reasoning chains, leading to unpredictable failures.",
    solution:
        "A reliability layer that evaluates agent reasoning in real-time, enforcing guardrails and quality gates before actions are executed.",
    roadmap: [
        "Alpha: Internal eval harness (Complete)",
        "Beta: Pilot reliability sprints (In Progress)",
        "V1: Self-hosted reliability gateway (Planned)",
    ],
    cta: "Request Deck / Demo",
};

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
        outcomes: ["Threat model document", "Failure mode taxonomy", "Immediate fix recommendations"],
    },
    {
        title: "Build-with-you Advisory",
        duration: "Monthly",
        description:
            "Ongoing architectural review and guidance on MLOps, evaluation strategies, and safety-critical implementation details.",
        outcomes: ["Weekly architecture reviews", "Code-level guidance", "Hiring support for safety roles"],
    },
];

export const researchContent = {
    focus:
        "My research focuses on understanding and validating reasoning in Large Language Models and Agents. I am particularly interested in the limits of math reasoning and verifying chain-of-thought correctness.",
    themes: [
        {
            title: "Reasoning Validation",
            description: "Can we automatically verify the logical steps in an agent's Chain of Thought?",
        },
        {
            title: "Formal Verification Lite",
            description:
                "Applying lightweight formal methods to probabilistic models to guarantee certain invariants.",
        },
        {
            title: "Token-level Interpretability",
            description: "Analyzing activation patterns to predict hallucinations or reasoning failures.",
        },
    ],
    collaboration:
        "I am looking for co-authors, pilot partners, and labs interested in rigorous evaluation of agentic reasoning.",
};

export const placeholderCaseStudies = [
    {
        client: "FinTech Agent Pilot",
        title: "Reducing hallucination rate in autonomous financial analysis",
        outcome: "40% reduction in reasoning errors via constrained decoding.",
        href: "/work",
    },
    {
        client: "Healthcare RAG",
        title: "Safety gates for medical guideline adherence",
        outcome: "Zero critical safety violations in 500-turn eval set.",
        href: "/work",
    },
];
