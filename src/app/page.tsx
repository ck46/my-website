import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
    heroContent,
    audiences,
    njiraContent,
    credibilityLinks,
    researchLogEntries,
} from "@/data/site";

export default function Home() {
    return (
        <div className="space-y-24">
            {/* Hero Section */}
            <section className="space-y-8">
                <div className="space-y-4">
                    <div className="inline-flex items-center space-x-2 text-xs font-mono text-green-500">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span>SYSTEM ONLINE</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-mono font-medium tracking-tight">
                        {heroContent.headline}
                    </h1>
                    <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
                        {heroContent.subhead}
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 font-mono text-sm">
                    <a
                        href={heroContent.ctaPrimary.href}
                        className="inline-flex items-center justify-center px-4 py-2 border border-foreground bg-foreground text-background hover:bg-background hover:text-foreground transition-colors"
                    >
                        {heroContent.ctaPrimary.text}
                    </a>
                    <Link
                        href={heroContent.ctaSecondary.href}
                        className="inline-flex items-center justify-center px-4 py-2 border border-border hover:border-foreground transition-colors"
                    >
                        {heroContent.ctaSecondary.text}
                    </Link>
                </div>

                {/* Credibility Strip */}
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-muted-foreground border-t border-border pt-4">
                    {credibilityLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-foreground transition-colors underline underline-offset-2 decoration-border hover:decoration-foreground"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </section>

            {/* Directory Listing (Audiences) */}
            <section className="space-y-6">
                <h2 className="font-mono text-sm text-muted-foreground border-b border-border pb-2">
                    Index of /targets
                </h2>
                <div className="grid gap-4">
                    {audiences.map((audience) => (
                        <Link
                            key={audience.id}
                            href={audience.href}
                            className="group block p-4 border border-transparent hover:border-border hover:bg-accent/30 transition-all"
                        >
                            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                                <span className="font-mono text-primary min-w-[120px] group-hover:underline">
                                    drwxr-x {audience.title.toLowerCase()}
                                </span>
                                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                                    {audience.description}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* System Status (NjiraAI) */}
            <section className="space-y-6">
                <div className="flex items-center justify-between border-b border-border pb-2">
                    <h2 className="font-mono text-sm text-muted-foreground">
                        System Process: NjiraAI
                    </h2>
                    <span className="text-xs font-mono px-2 py-0.5 bg-secondary text-secondary-foreground">PID: 2026</span>
                </div>

                <div className="bg-accent/20 p-6 border border-border font-mono text-sm space-y-4">
                    <div className="grid grid-cols-[100px_1fr] gap-4">
                        <span className="text-muted-foreground">Subject:</span>
                        <span className="text-foreground">{njiraContent.tagline}</span>

                        <span className="text-muted-foreground">Problem:</span>
                        <span className="text-muted-foreground">{njiraContent.problem}</span>

                        <span className="text-muted-foreground">Status:</span>
                        <div className="space-y-1">
                            {njiraContent.roadmap.map((item) => (
                                <Link
                                    key={item.id}
                                    href={`/startup#${item.id}`}
                                    className={`block hover:underline ${item.status === "complete"
                                            ? "status-complete"
                                            : item.status === "in-progress"
                                                ? "status-in-progress"
                                                : "status-planned"
                                        }`}
                                >
                                    [{item.status === "complete" ? "OK" : item.status === "in-progress" ? ".." : "  "}] {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="pt-4 border-t border-border text-xs text-muted-foreground">
                        <Link href="/work" className="hover:text-foreground transition-colors">
                            {njiraContent.bridgeLine}
                        </Link>
                    </div>

                    <div className="pt-2">
                        <Link href="/startup" className="text-primary hover:underline inline-flex items-center">
                            View Full Process <ArrowRight className="ml-2 h-3 w-3" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Research Logs */}
            <section className="space-y-6">
                <h2 className="font-mono text-sm text-muted-foreground border-b border-border pb-2">
                    Tail of /var/log/research
                </h2>
                <div className="space-y-4 font-mono text-sm">
                    {researchLogEntries.map((entry) => (
                        <Link
                            key={entry.date}
                            href={entry.href}
                            className="flex gap-4 p-3 hover:bg-accent/30 transition-colors group"
                        >
                            <span className="text-muted-foreground shrink-0">{entry.date}</span>
                            <span className="text-foreground group-hover:underline">{entry.text}</span>
                        </Link>
                    ))}
                    <Link href="/research" className="inline-block mt-4 text-muted-foreground hover:text-foreground transition-colors">
                        ... view more logs
                    </Link>
                </div>
            </section>
        </div>
    );
}
