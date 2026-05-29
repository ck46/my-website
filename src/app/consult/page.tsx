import type { Metadata } from "next";
import { services, miniCaseSnapshots, deliverables, pageMetadata, siteConfig } from "@/data/site";

export const metadata: Metadata = {
    title: pageMetadata.consult.title,
    description: pageMetadata.consult.description,
    openGraph: {
        title: pageMetadata.consult.title,
        description: pageMetadata.consult.description,
        url: `${siteConfig.url}/consult`,
    },
};

export default function ConsultPage() {
    return (
        <div className="space-y-10">
            {/* Page intro */}
            <header className="space-y-3">
                <p className="font-mono text-xs text-muted-foreground">
                    <span className="text-primary">ck@46</span>
                    <span className="text-muted-foreground/80">:~$</span>{" "}
                    <span className="text-foreground">cat /consult/index.md</span>
                </p>
                <h1 className="font-sans font-bold text-2xl md:text-3xl tracking-tight text-foreground">
                    /consult
                </h1>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    A small number of selective consulting engagements per quarter. I take on work where it directly informs my research.
                </p>
            </header>

            {/* Services */}
            <section className="space-y-3">
                <h2 className="font-sans font-semibold text-[11px] uppercase tracking-[0.14em] text-muted-foreground flex items-center gap-3">
                    ls services/ · {services.length} ways to work
                    <span className="flex-1 h-px bg-border"></span>
                </h2>
                <div className="panes">
                    {services.map((service, i) => (
                        <div key={i} className="pane">
                            <div className="flex flex-col md:flex-row md:items-baseline md:gap-6">
                                <div className="md:w-1/3 mb-3 md:mb-0">
                                    <p className="pane-title !mb-1">
                                        <span className="lead">▸</span>
                                        <span className="normal-case tracking-normal text-foreground font-semibold">
                                            {service.title}
                                        </span>
                                    </p>
                                    <span className="inline-block px-2 py-0.5 text-[10px] font-mono border border-border text-muted-foreground rounded-sm">
                                        {service.duration}
                                    </span>
                                </div>
                                <div className="md:w-2/3">
                                    <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-3">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-1 font-mono text-xs">
                                        {service.outcomes.map((outcome, j) => (
                                            <li key={j} className="flex items-baseline gap-2">
                                                <span className="text-primary">[OK]</span>
                                                <span className="text-foreground">{outcome}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pt-2">
                    <a
                        href={siteConfig.calendly}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center px-3 py-1.5 border border-primary bg-primary text-primary-foreground hover:bg-background hover:text-primary transition-colors font-mono text-sm rounded-sm"
                    >
                        ./book_discovery_call.sh
                        <span className="ml-2 text-[11px] text-primary-foreground/70">
                            (15–20 min)
                        </span>
                    </a>
                </div>
            </section>

            {/* Deliverables */}
            <section className="space-y-3">
                <h2 className="font-sans font-semibold text-[11px] uppercase tracking-[0.14em] text-muted-foreground flex items-center gap-3">
                    typical deliverables
                    <span className="flex-1 h-px bg-border"></span>
                </h2>
                <div className="flex flex-wrap gap-2">
                    {deliverables.map((item, i) => (
                        <span
                            key={i}
                            className="inline-flex items-center px-2 py-1 text-xs font-mono border border-border bg-accent/30 rounded-sm text-foreground"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </section>

            {/* Engagement snapshots */}
            <section className="space-y-3">
                <h2 className="font-sans font-semibold text-[11px] uppercase tracking-[0.14em] text-muted-foreground flex items-center gap-3">
                    ls case_snapshots/ · {miniCaseSnapshots.length} engagements
                    <span className="flex-1 h-px bg-border"></span>
                </h2>
                <div className="panes panes-3 max-md:!grid-cols-1">
                    {miniCaseSnapshots.map((snapshot, i) => (
                        <div key={i} className="pane">
                            <p className="pane-title !mb-3">
                                <span className="lead">▸</span> case_{i + 1}.log
                            </p>
                            <div className="space-y-3 font-mono text-xs">
                                <div>
                                    <span className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground/80">
                                        Context
                                    </span>
                                    <p className="font-sans text-sm text-foreground mt-1 leading-snug">
                                        {snapshot.context}
                                    </p>
                                </div>
                                <div>
                                    <span className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground/80">
                                        Work
                                    </span>
                                    <p className="font-sans text-sm text-foreground mt-1 leading-snug">
                                        {snapshot.work}
                                    </p>
                                </div>
                                <div>
                                    <span className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground/80">
                                        Result
                                    </span>
                                    <p className="font-mono text-xs text-primary mt-1">
                                        {snapshot.result}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
