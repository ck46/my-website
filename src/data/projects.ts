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
        "Selected public repositories from GitHub that represent work I care about right now.",
    sourceNote: "Source: GitHub profile snapshot (March 12, 2026).",
    sectionTitle: "Top GitHub projects",
};

export const projectsConfig: ProjectConfig[] = [
    {
        id: "neuralisp",
        name: "neuralisp",
        description:
            "Modular machine learning framework for Common Lisp with tensor ops, layers, optimizers, and loss functions.",
        stars: 21,
        forks: 0,
        language: "Common Lisp",
        updatedDate: "2025-11-10",
        links: [
            { label: "GitHub repo", href: "https://github.com/ck46/neuralisp" },
        ],
    },
    {
        id: "black-stone",
        name: "black-stone",
        description:
            "Specification and implementation of Quantum Common Lisp for gate-model quantum computers.",
        stars: 1,
        forks: 0,
        language: "Common Lisp",
        updatedDate: "2023-06-16",
        links: [
            { label: "GitHub repo", href: "https://github.com/ck46/black-stone" },
        ],
    },
    {
        id: "snn-ml",
        name: "snn-ml",
        description: "Spiking neural networks experiments and tooling in Common Lisp.",
        stars: 1,
        forks: 1,
        language: "Common Lisp",
        updatedDate: "2018-02-22",
        links: [
            { label: "GitHub repo", href: "https://github.com/ck46/snn-ml" },
        ],
    },
    {
        id: "slidesmith-ai",
        name: "slidesmith-ai",
        description: "No public description on GitHub yet.",
        stars: 0,
        forks: 0,
        language: "JavaScript",
        updatedDate: "2025-11-21",
        links: [
            { label: "GitHub repo", href: "https://github.com/ck46/slidesmith-ai" },
        ],
    },
    {
        id: "transcribify",
        name: "transcribify",
        description: "No public description on GitHub yet.",
        stars: 0,
        forks: 0,
        language: "Python",
        updatedDate: "2025-04-28",
        links: [
            { label: "GitHub repo", href: "https://github.com/ck46/transcribify" },
        ],
    },
    {
        id: "mcp-search",
        name: "mcp-search",
        description: "No public description on GitHub yet.",
        stars: 0,
        forks: 0,
        language: "Python",
        updatedDate: "2025-05-06",
        links: [
            { label: "GitHub repo", href: "https://github.com/ck46/mcp-search" },
        ],
    },
];
