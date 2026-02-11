import type { Metadata } from "next";
import Link from "next/link";
import { services, miniCaseSnapshots, deliverables, pageMetadata, siteConfig } from "@/data/site";

export const metadata: Metadata = {
    title: pageMetadata.work.title,
    description: pageMetadata.work.description,
    openGraph: {
        title: pageMetadata.work.title,
        description: pageMetadata.work.description,
        url: `${siteConfig.url}/work`,
    },
};

export default function WorkPage() {
    return (
        <div className="space-y-16">
            {/* Header */}
            <section className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-mono font-medium tracking-tight">
                    /work
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                    I help companies ship safer, more reliable agentic systems through targeted sprints and advisory.
                </p>
            </section>

            {/* Services */}
            <section className="space-y-6">
                <h2 className="font-mono text-sm text-muted-foreground border-b border-border pb-2">
                    Ways to work with me
                </h2>
                <div className="grid gap-6">
                    {services.map((service, i) => (
                        <div key={i} className="p-6 border border-border card-hover">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="md:w-1/3">
                                    <h3 className="text-lg font-mono font-semibold">{service.title}</h3>
                                    <span className="inline-block mt-2 px-2 py-0.5 text-xs font-mono bg-secondary text-secondary-foreground">
                                        {service.duration}
                                    </span>
                                </div>
                                <div className="md:w-2/3">
                                    <p className="text-muted-foreground mb-4">{service.description}</p>
                                    <ul className="space-y-1">
                                        {service.outcomes.map((outcome, j) => (
                                            <li key={j} className="flex items-center text-sm">
                                                <span className="mr-2 text-primary font-mono">✓</span>
                                                {outcome}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pt-4">
                    <a
                        href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Advisory / sprint inquiry")}&body=${encodeURIComponent("Hi Chansa,\n\nI'd like to discuss a potential engagement.\n\n1. Our current challenge:\n2. What we're hoping to achieve:\n3. Preferred timeline:\n\nBest,")}`}
                        className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-mono text-sm hover:bg-primary/90 transition-colors"
                    >
                        Book a Discovery Call
                        <span className="ml-2 text-xs text-primary-foreground/70">(15–20 min)</span>
                    </a>
                </div>
            </section>

            {/* Deliverables Strip */}
            <section className="space-y-4">
                <h2 className="font-mono text-sm text-muted-foreground border-b border-border pb-2">
                    Typical deliverables
                </h2>
                <div className="flex flex-wrap gap-3">
                    {deliverables.map((item, i) => (
                        <span
                            key={i}
                            className="inline-flex items-center px-3 py-1.5 text-xs font-mono border border-border bg-accent/30"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </section>

            {/* Mini Case Snapshots */}
            <section className="space-y-6">
                <h2 className="font-mono text-sm text-muted-foreground border-b border-border pb-2">
                    Engagement snapshots
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                    {miniCaseSnapshots.map((snapshot, i) => (
                        <div key={i} className="p-5 border border-border card-hover space-y-3">
                            <div>
                                <span className="text-xs font-mono text-muted-foreground">Context</span>
                                <p className="text-sm font-medium">{snapshot.context}</p>
                            </div>
                            <div>
                                <span className="text-xs font-mono text-muted-foreground">Work</span>
                                <p className="text-sm">{snapshot.work}</p>
                            </div>
                            <div>
                                <span className="text-xs font-mono text-muted-foreground">Result</span>
                                <p className="text-sm text-primary font-mono">{snapshot.result}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
