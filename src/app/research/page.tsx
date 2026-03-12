import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata, siteConfig } from "@/data/site";

const researchPrograms = [
    {
        id: "token-space-search-decoding",
        title: "Token-space search and decoding",
        description:
            "I study language models through token-space structure, decoding dynamics, and controllability. The focus is reasoning diagnostics, decoding behavior, topology-aware analysis, and token-level interpretability.",
    },
    {
        id: "agent-reliability-governance",
        title: "Agent reliability and governance",
        description:
            "I study validation layers, safety constraints, auditability, and governance mechanisms for agentic systems. This includes reliable execution, verification layers, provenance, policy enforcement, and agent safety infrastructure. NjiraAI appears here as public-facing governance infrastructure.",
    },
    {
        id: "foundations-of-intelligence",
        title: "Foundations of intelligence",
        description:
            "I study formal foundations for intelligence, cognition, and artificial minds. This line includes interface-plane intelligence measurement and recurrent state-transition models of cognition.",
    },
];

const publicResearch = [
    {
        id: "ruines",
        title: "RUINES / interface-plane intelligence measurement",
        summary:
            "Define intelligence on an agent-environment interface plane using relevance partitions and regulation of predictive uncertainty.",
        ctaLabel: "Abstract",
        href: "#ruines-abstract",
    },
    {
        id: "woi",
        title: "WoI / Wheel of Intelligence",
        summary:
            "Model cognition as a recurrent state-transition loop over a shared state contract with seven core operators and governance patterns.",
        ctaLabel: "Abstract",
        href: "#woi-abstract",
    },
];

const researchDirections = [
    {
        title: "topology-aware decoding",
        description:
            "Structural analysis of decoding trajectories to improve controllability and interpretability.",
    },
    {
        title: "agent governance",
        description:
            "Validation and policy frameworks for safe, auditable, and reliable agent behavior.",
    },
    {
        title: "geometric logic",
        description:
            "Formal representations that connect geometric structure and reasoning processes.",
    },
    {
        title: "embodied intelligence",
        description:
            "Cognitive architectures for artificial minds, including links to humanoid cognitive systems.",
    },
];

export const metadata: Metadata = {
    title: pageMetadata.research.title,
    description: pageMetadata.research.description,
    openGraph: {
        title: pageMetadata.research.title,
        description: pageMetadata.research.description,
        url: `${siteConfig.url}/research`,
    },
};

export default function ResearchPage() {
    return (
        <div className="space-y-16">
            {/* Hero */}
            <section className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-mono font-medium tracking-tight">
                    /research
                </h1>
                <p className="text-lg font-medium max-w-3xl">
                    I study reasoning, reliability, and intelligence in AI systems.
                </p>
                <p className="text-lg text-muted-foreground max-w-3xl">
                    My work spans token-space search in language models, validation layers for agents, and formal foundations for cognitive intelligence.
                </p>
            </section>

            {/* Research programs */}
            <section className="space-y-6">
                <h2 className="font-mono text-sm text-muted-foreground border-b border-border pb-2">
                    Research programs
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                    {researchPrograms.map((program) => (
                        <article key={program.id} id={program.id} className="p-5 border border-border card-hover space-y-3 scroll-mt-24">
                            <h3 className="text-base font-mono font-semibold">{program.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{program.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            {/* Selected public research */}
            <section className="space-y-6">
                <h2 className="font-mono text-sm text-muted-foreground border-b border-border pb-2">
                    Selected public research
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {publicResearch.map((item) => (
                        <article key={item.id} className="p-5 border border-border bg-accent/20 space-y-3">
                            <h3 className="text-base font-mono font-semibold">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.summary}</p>
                            <Link href={item.href} className="text-xs font-mono text-primary hover:underline">
                                {item.ctaLabel}
                            </Link>
                        </article>
                    ))}
                </div>

                <div className="space-y-3">
                    <article id="ruines-abstract" className="p-4 border border-border font-mono text-sm space-y-2 scroll-mt-24">
                        <h3 className="text-xs uppercase tracking-wider text-muted-foreground">
                            RUINES abstract
                        </h3>
                        <p className="text-muted-foreground">
                            Intelligence is defined on an interface plane between agent and environment. Measurement is expressed through relevance partitions and regulation of predictive uncertainty.
                        </p>
                    </article>
                    <article id="woi-abstract" className="p-4 border border-border font-mono text-sm space-y-2 scroll-mt-24">
                        <h3 className="text-xs uppercase tracking-wider text-muted-foreground">
                            WoI abstract
                        </h3>
                        <p className="text-muted-foreground">
                            Cognition is modeled as a recurrent state-transition loop over a shared state contract, with seven core operators and governance patterns.
                        </p>
                    </article>
                </div>
            </section>

            {/* Research directions */}
            <section className="space-y-6">
                <h2 className="font-mono text-sm text-muted-foreground border-b border-border pb-2">
                    Research directions
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {researchDirections.map((direction) => (
                        <article key={direction.title} className="p-4 border border-border space-y-2">
                            <h3 className="text-sm font-mono text-foreground">{direction.title}</h3>
                            <p className="text-sm text-muted-foreground">{direction.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            {/* Collaboration */}
            <section className="space-y-4">
                <h2 className="font-mono text-sm text-muted-foreground border-b border-border pb-2">
                    Collaboration
                </h2>
                <div className="p-6 border border-primary/20 bg-primary/5 space-y-4">
                    <p className="text-muted-foreground">
                        I am open to collaboration with labs, co-authors, and technical research partners working on reasoning diagnostics, agent validation and governance, intelligence measurement, and cognitive architectures.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-4 text-sm font-mono">
                        <div>
                            <span className="text-xs text-muted-foreground">Audience</span>
                            <p className="mt-1">Labs, co-authors, technical research partners</p>
                        </div>
                        <div>
                            <span className="text-xs text-muted-foreground">Focus areas</span>
                            <p className="mt-1">Reasoning diagnostics, validation layers, intelligence measurement</p>
                        </div>
                        <div>
                            <span className="text-xs text-muted-foreground">Mode</span>
                            <p className="mt-1">Joint reading, shared protocols, and collaborative study design</p>
                        </div>
                    </div>
                    <div className="pt-2">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-mono text-sm hover:bg-primary/90 transition-colors"
                        >
                            Collaborate
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <section className="pt-2 border-t border-border">
                <p className="text-xs font-mono text-muted-foreground">
                    Public research agenda, 2026.
                </p>
            </section>
        </div>
    );
}
