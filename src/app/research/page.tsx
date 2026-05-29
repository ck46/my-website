import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata, publications, researchContent, siteConfig } from "@/data/site";

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
        <div className="space-y-10">
            {/* Page intro */}
            <header className="space-y-3">
                <p className="font-mono text-xs text-muted-foreground">
                    <span className="text-primary">ck@46</span>
                    <span className="text-muted-foreground/80">:~$</span>{" "}
                    <span className="text-foreground">cat /research/thesis.md</span>
                </p>
                <h1 className="font-sans font-bold text-2xl md:text-3xl tracking-tight text-foreground">
                    /research
                </h1>
                <p className="font-sans text-base font-medium text-foreground max-w-3xl leading-relaxed">
                    Public research surface.
                </p>
                <p className="font-sans text-sm text-muted-foreground max-w-3xl leading-relaxed">
                    {researchContent.thesisLine1} {researchContent.thesisLine2}
                </p>
            </header>

            {/* Public research */}
            <section id="public-research" className="space-y-3 scroll-mt-24">
                <h2 className="font-sans font-semibold text-[11px] uppercase tracking-[0.14em] text-muted-foreground flex items-center gap-3">
                    public research · {publications.length} items
                    <span className="flex-1 h-px bg-border"></span>
                </h2>
                <div className="panes panes-2 max-md:!grid-cols-1">
                    {publications.map((item) => (
                        <article key={item.title} className="pane">
                            <p className="pane-title">
                                <span className="lead">▸</span>
                                <span className="normal-case tracking-normal text-foreground font-semibold">
                                    {item.title}
                                </span>
                                <span className="meta">{item.status}</span>
                            </p>
                            <p className="font-sans text-xs text-muted-foreground leading-snug mb-3">
                                {item.note}
                            </p>
                            {item.href && (
                                <a
                                    href={item.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center text-xs font-mono text-primary hover:underline"
                                >
                                    Request →
                                </a>
                            )}
                        </article>
                    ))}
                </div>
            </section>

            {/* Collaboration */}
            <section id="collaboration" className="space-y-3 scroll-mt-24">
                <h2 className="font-sans font-semibold text-[11px] uppercase tracking-[0.14em] text-muted-foreground flex items-center gap-3">
                    ./collaborate
                    <span className="flex-1 h-px bg-border"></span>
                </h2>
                <div className="panes">
                    <div className="pane">
                        <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">
                            I am open to collaboration around public preprints and the AMLDS 2026 work. Unpublished research directions are kept off the public site until they are ready to share.
                        </p>
                        <div className="grid sm:grid-cols-3 gap-x-4 gap-y-3 font-mono text-xs">
                            <div>
                                <span className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground/80">
                                    Audience
                                </span>
                                <p className="font-sans text-sm text-foreground mt-1">
                                    {researchContent.collaboration.lookingFor}
                                </p>
                            </div>
                            <div>
                                <span className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground/80">
                                    Reference point
                                </span>
                                <p className="font-sans text-sm text-foreground mt-1">
                                    {researchContent.collaboration.iBring}
                                </p>
                            </div>
                            <div>
                                <span className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground/80">
                                    Mode
                                </span>
                                <p className="font-sans text-sm text-foreground mt-1">
                                    {researchContent.collaboration.idealCollaboration}
                                </p>
                            </div>
                        </div>
                        <div className="pt-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-3 py-1.5 border border-primary bg-primary text-primary-foreground hover:bg-background hover:text-primary transition-colors font-mono text-sm rounded-sm"
                            >
                                ./collaborate.sh
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
