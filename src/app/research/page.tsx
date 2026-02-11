import type { Metadata } from "next";
import Link from "next/link";
import {
    researchContent,
    researchMapNodes,
    publications,
    researchArtifacts,
    pageMetadata,
    siteConfig,
} from "@/data/site";

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
            {/* Header */}
            <section className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-mono font-medium tracking-tight">
                    /research
                </h1>
                <div className="max-w-2xl space-y-1">
                    <p className="text-lg font-medium">{researchContent.thesisLine1}</p>
                    <p className="text-lg text-muted-foreground">{researchContent.thesisLine2}</p>
                </div>
            </section>

            {/* Research Map */}
            <section className="space-y-4">
                <h2 className="font-mono text-sm text-muted-foreground border-b border-border pb-2">
                    Research pipeline
                </h2>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-0 font-mono text-sm overflow-x-auto">
                    {researchMapNodes.map((node, i) => (
                        <div key={node.anchor} className="flex items-center">
                            <Link
                                href={`#${node.anchor}`}
                                className="flex-1 px-4 py-3 border border-border text-center hover:border-primary hover:text-primary transition-colors whitespace-nowrap"
                            >
                                {node.label}
                            </Link>
                            {i < researchMapNodes.length - 1 && (
                                <span className="px-2 text-muted-foreground hidden sm:inline">→</span>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Core Themes */}
            <section className="space-y-6">
                <h2 className="font-mono text-sm text-muted-foreground border-b border-border pb-2">
                    Core themes
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                    {researchContent.themes.map((theme) => (
                        <div key={theme.id} id={theme.id} className="p-5 border border-border card-hover flex flex-col scroll-mt-24">
                            <h3 className="text-base font-mono font-semibold mb-2">{theme.title}</h3>
                            <p className="text-sm text-muted-foreground mb-4 flex-1">{theme.description}</p>
                            <div className="flex gap-3 pt-3 border-t border-border text-xs font-mono">
                                {theme.links.map((link) =>
                                    link.available ? (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            className="text-primary hover:underline"
                                        >
                                            {link.label}
                                        </a>
                                    ) : (
                                        <span
                                            key={link.label}
                                            className="text-muted-foreground/50 cursor-default"
                                            title="Coming soon"
                                        >
                                            {link.label} <span className="text-[10px]">(soon)</span>
                                        </span>
                                    )
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Collaboration */}
            <section className="space-y-4">
                <h2 className="font-mono text-sm text-muted-foreground border-b border-border pb-2">
                    Collaboration
                </h2>
                <div className="p-6 border border-primary/20 bg-primary/5 space-y-4">
                    <p className="text-muted-foreground">{researchContent.collaboration.intro}</p>
                    <div className="grid sm:grid-cols-3 gap-4 text-sm font-mono">
                        <div>
                            <span className="text-xs text-muted-foreground">Looking for</span>
                            <p className="mt-1">{researchContent.collaboration.lookingFor}</p>
                        </div>
                        <div>
                            <span className="text-xs text-muted-foreground">I bring</span>
                            <p className="mt-1">{researchContent.collaboration.iBring}</p>
                        </div>
                        <div>
                            <span className="text-xs text-muted-foreground">Ideal collaboration</span>
                            <p className="mt-1">{researchContent.collaboration.idealCollaboration}</p>
                        </div>
                    </div>
                    <div className="pt-2">
                        <a
                            href={researchContent.collaboration.cta.href}
                            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-mono text-sm hover:bg-primary/90 transition-colors"
                        >
                            {researchContent.collaboration.cta.text}
                        </a>
                    </div>
                </div>
            </section>

            {/* Publications / Artifacts */}
            <section id="artifacts" className="space-y-6 scroll-mt-24">
                <h2 className="font-mono text-sm text-muted-foreground border-b border-border pb-2">
                    Publications &amp; artifacts
                </h2>

                {/* Preprints / Drafts */}
                <div className="space-y-3">
                    <h3 className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                        Preprints / Drafts
                    </h3>
                    <div className="space-y-2">
                        {publications.map((pub, i) => (
                            <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-2 p-3 border border-border font-mono text-sm">
                                <span className={`shrink-0 px-1.5 py-0.5 text-[10px] uppercase ${pub.status === "draft"
                                        ? "bg-secondary text-secondary-foreground"
                                        : pub.status === "in-submission"
                                            ? "bg-blue-500/10 text-blue-700"
                                            : pub.status === "preprint"
                                                ? "bg-primary/10 text-primary"
                                                : "bg-green-500/10 text-green-700"
                                    }`}>
                                    {pub.status}
                                </span>
                                <span className="flex-1">{pub.title}</span>
                                {pub.href ? (
                                    <a href={pub.href} className="text-xs text-primary hover:underline shrink-0">
                                        {pub.note}
                                    </a>
                                ) : (
                                    <span className="text-xs text-muted-foreground shrink-0">{pub.note}</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tools / Repos */}
                <div className="space-y-3">
                    <h3 className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                        Artifacts (tools / repos)
                    </h3>
                    <div className="space-y-2">
                        {researchArtifacts.map((artifact, i) => (
                            <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-2 p-3 border border-border font-mono text-sm">
                                <span className="flex-1">{artifact.title}</span>
                                {artifact.href ? (
                                    <a href={artifact.href} className="text-xs text-primary hover:underline shrink-0">
                                        {artifact.note}
                                    </a>
                                ) : (
                                    <span className="text-xs text-muted-foreground shrink-0">{artifact.note}</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
