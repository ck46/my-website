import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import { heroContent, audiences, njiraContent } from "@/data/content";

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
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-4 py-2 border border-foreground bg-foreground text-background hover:bg-background hover:text-foreground transition-colors"
                    >
                        ./book_call.sh
                    </Link>
                    <Link
                        href="/startup"
                        className="inline-flex items-center justify-center px-4 py-2 border border-border hover:border-foreground transition-colors"
                    >
                        cat njira_deck.md
                    </Link>
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
                            className="group block p-4 border border-transparent hover:border-border hover:bg-zinc-900/50 transition-all"
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
                    <span className="text-xs font-mono px-2 py-0.5 bg-zinc-800 text-zinc-300 rounded-sm">PID: 2026</span>
                </div>

                <div className="bg-zinc-900/30 p-6 border border-border font-mono text-sm space-y-4">
                    <div className="grid grid-cols-[100px_1fr] gap-4">
                        <span className="text-zinc-500">Subject:</span>
                        <span className="text-foreground">{njiraContent.tagline}</span>

                        <span className="text-zinc-500">Problem:</span>
                        <span className="text-muted-foreground">{njiraContent.problem}</span>

                        <span className="text-zinc-500">Status:</span>
                        <div className="space-y-1">
                            {njiraContent.roadmap.map((item, i) => (
                                <div key={i} className={item.includes("Complete") ? "text-emerald-800" : "text-blue-700"}>
                                    [{item.includes("Complete") ? "OK" : ".."}] {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pt-4 border-t border-zinc-800">
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
                    <div className="flex gap-4 p-3 hover:bg-zinc-900/50 transition-colors">
                        <span className="text-zinc-500 shrink-0">2026-02-10</span>
                        <span className="text-foreground">Analyzing chain-of-thought failure modes in strict reasoning tasks</span>
                    </div>
                    <div className="flex gap-4 p-3 hover:bg-zinc-900/50 transition-colors">
                        <span className="text-zinc-500 shrink-0">2026-02-01</span>
                        <span className="text-foreground">Evaluating lightweight formal verification methods for agent loops</span>
                    </div>
                    <div className="flex gap-4 p-3 hover:bg-zinc-900/50 transition-colors">
                        <span className="text-zinc-500 shrink-0">2026-01-15</span>
                        <span className="text-foreground">Initial commit: Agentic Eval Harness (v0.1.0)</span>
                    </div>
                    <Link href="/research" className="inline-block mt-4 text-zinc-500 hover:text-foreground">
                        ... view more logs
                    </Link>
                </div>
            </section>
        </div>
    );
}
