export interface ProjectLink {
    label: string;
    href: string;
}

export interface ProjectConfig {
    id: string;
    name: string;
    description: string;
    stars: number;
    forks: number;
    language: string;
    updatedDate: string; // YYYY-MM-DD
    links: ProjectLink[];
}

export const projectsPageConfig = {
    title: "/projects",
    intro:
        "Public projects I'm running, plus selected GitHub repositories from my profile.",
    sourceNote: "Source: GitHub profile snapshot (May 29, 2026).",
    sectionTitle: "Selected GitHub projects",
};

export const projectsConfig: ProjectConfig[] = [
    {
        id: "llms-as-token-search",
        name: "llms-as-token-search",
        description:
            "Companion repo for the AMLDS 2026 work on language models as search systems.",
        stars: 0,
        forks: 0,
        language: "Python",
        updatedDate: "2026-04-30",
        links: [
            { label: "GitHub repo", href: "https://github.com/ck46/llms-as-token-search" },
        ],
    },
    {
        id: "slidesmith-ai",
        name: "slidesmith-ai",
        description:
            "AI-powered presentation generator with real-time web research, image search, and streaming slide generation.",
        stars: 0,
        forks: 0,
        language: "JavaScript",
        updatedDate: "2025-11-21",
        links: [
            { label: "GitHub repo", href: "https://github.com/ck46/slidesmith-ai" },
        ],
    },
    {
        id: "neuralisp",
        name: "neuralisp",
        description:
            "Modular deep-learning framework in Common Lisp with tensor operations, layers, and training utilities.",
        stars: 21,
        forks: 0,
        language: "Common Lisp",
        updatedDate: "2025-11-10",
        links: [
            { label: "GitHub repo", href: "https://github.com/ck46/neuralisp" },
        ],
    },
    {
        id: "mcp-search",
        name: "mcp-search",
        description:
            "Minimal project for indexing and recommending MCP servers.",
        stars: 0,
        forks: 0,
        language: "Python",
        updatedDate: "2025-05-06",
        links: [
            { label: "GitHub repo", href: "https://github.com/ck46/mcp-search" },
        ],
    },
    {
        id: "transcribify",
        name: "transcribify",
        description:
            "CLI + library that turns long Zoom (or any) recordings into speaker-labelled transcripts and AI summaries via AssemblyAI.",
        stars: 0,
        forks: 0,
        language: "Python",
        updatedDate: "2025-04-28",
        links: [
            { label: "GitHub repo", href: "https://github.com/ck46/transcribify" },
        ],
    },
    {
        id: "evoluteprompt",
        name: "evoluteprompt",
        description:
            "Prompt management library for LLMs with version control and SQLite-backed storage.",
        stars: 0,
        forks: 0,
        language: "Python",
        updatedDate: "2025-03-26",
        links: [
            { label: "GitHub repo", href: "https://github.com/ck46/evoluteprompt" },
        ],
    },
];
