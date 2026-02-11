import type { Metadata } from "next";
import { njiraContent, pageMetadata, siteConfig } from "@/data/site";

export const metadata: Metadata = {
    title: pageMetadata.startup.title,
    description: pageMetadata.startup.description,
    openGraph: {
        title: pageMetadata.startup.title,
        description: pageMetadata.startup.description,
        url: `${siteConfig.url}/startup`,
    },
};

export default function StartupPage() {
    return (
        <div className="space-y-16">
            {/* Header */}
            <section className="space-y-4">
                <div className="inline-block px-2 py-0.5 text-xs font-mono text-primary bg-primary/10">
                    STEALTH / EARLY ACCESS
                </div>
                <h1 className="text-3xl md:text-4xl font-mono font-medium tracking-tight">
                    {njiraContent.title}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                    {njiraContent.tagline}
                </p>
            </section>

            {/* Problem + Solution */}
            <section className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                        <h2 className="font-mono text-sm text-muted-foreground border-b border-border pb-2">
                            The Problem
                        </h2>
                        <p className="text-muted-foreground">{njiraContent.problem}</p>
                    </div>
                    <div className="space-y-3">
                        <h2 className="font-mono text-sm text-muted-foreground border-b border-border pb-2">
                            The Solution
                        </h2>
                        <p className="text-muted-foreground">{njiraContent.solution}</p>
                    </div>
                </div>
            </section>

            {/* What we're building */}
            <section className="space-y-4">
                <h2 className="font-mono text-sm text-muted-foreground border-b border-border pb-2">
                    What we&apos;re building
                </h2>
                <ul className="space-y-2 font-mono text-sm">
                    {njiraContent.whatWeAreBuilding.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="text-primary shrink-0">→</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Example */}
            <section className="space-y-4">
                <h2 className="font-mono text-sm text-muted-foreground border-b border-border pb-2">
                    Example
                </h2>
                <div className="bg-accent/20 p-6 border border-border font-mono text-sm space-y-2">
                    <div className="flex items-baseline gap-2">
                        <span className="text-muted-foreground">agent →</span>
                        <code className="text-foreground">{njiraContent.example.call}</code>
                        <code className="text-muted-foreground">{njiraContent.example.body}</code>
                    </div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-muted-foreground">proxy →</span>
                        <span className="text-red-700 font-semibold">{njiraContent.example.result}</span>
                        <span className="text-muted-foreground">destructive-action policy matched. Trace retained.</span>
                    </div>
                </div>
            </section>

            {/* Who this is for */}
            <section className="space-y-4">
                <h2 className="font-mono text-sm text-muted-foreground border-b border-border pb-2">
                    Who this is for
                </h2>
                <ul className="space-y-2 font-mono text-sm">
                    {njiraContent.whoThisIsFor.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="text-primary shrink-0">→</span>
                            <span className="text-muted-foreground">{item}</span>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Roadmap */}
            <section className="space-y-4">
                <h2 className="font-mono text-sm text-muted-foreground border-b border-border pb-2">
                    Roadmap &amp; milestones
                </h2>
                <div className="bg-accent/20 p-6 border border-border font-mono text-sm space-y-4">
                    {njiraContent.roadmap.map((item) => (
                        <div key={item.id} id={item.id} className="flex items-center gap-4 scroll-mt-24">
                            <span
                                className={`inline-flex items-center justify-center h-7 w-7 text-xs border ${item.status === "complete"
                                        ? "bg-primary/10 border-primary text-primary"
                                        : item.status === "in-progress"
                                            ? "bg-blue-500/10 border-blue-500 text-blue-700"
                                            : "border-border text-muted-foreground"
                                    }`}
                            >
                                {item.status === "complete" ? "✓" : item.status === "in-progress" ? "…" : "○"}
                            </span>
                            <span className={
                                item.status === "complete"
                                    ? "status-complete"
                                    : item.status === "in-progress"
                                        ? "status-in-progress"
                                        : "status-planned"
                            }>
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="space-y-4 pt-4 border-t border-border">
                <h2 className="font-mono text-lg font-medium">Interested?</h2>
                <p className="text-sm text-muted-foreground max-w-lg">
                    We&apos;re looking for 2–3 design partners to run pilots against real agent stacks. If you&apos;re deploying agents and want better control over what they do, I&apos;d like to talk.
                </p>
                <a
                    href={njiraContent.cta.href}
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-mono text-sm hover:bg-primary/90 transition-colors"
                >
                    {njiraContent.cta.text}
                </a>
                <p className="text-xs font-mono text-muted-foreground pt-2">
                    {njiraContent.ctaSecondary}
                </p>
            </section>
        </div>
    );
}
