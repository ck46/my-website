import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
    heroContent,
    favoriteQuote,
    favoriteProjects,
    audiences,
    njiraContent,
    credibilityLinks,
    featuredCoverage,
    researchLogEntries,
} from "@/data/site";

const publishedDateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
});

export default function Home() {
    return (
        <div className="space-y-24">
            {/* Hero Section */}
            <section className="space-y-8">
                <div className="space-y-4">
                    <div className="inline-flex items-center space-x-2 text-xs font-mono text-primary">
                        <span className="inline-flex h-2 w-2 rounded-full bg-primary"></span>
                        <span>{heroContent.eyebrow}</span>
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

                <figure className="border-l-2 border-primary pl-4 max-w-3xl">
                    <blockquote className="text-base md:text-lg leading-relaxed text-foreground">
                        &ldquo;{favoriteQuote.text}&rdquo;
                    </blockquote>
                    <figcaption className="mt-2 text-xs font-mono text-muted-foreground">
                        {favoriteQuote.author} <span className="text-border">|</span> {favoriteQuote.source}
                    </figcaption>
                </figure>

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

            {/* Featured Coverage */}
            <section className="space-y-6">
                <h2 className="font-mono text-sm text-muted-foreground border-b border-border pb-2">
                    Featured profile
                </h2>
                <div className="grid gap-4">
                    {featuredCoverage.map((item) => (
                        <article key={item.href} className="border border-border bg-accent/20 overflow-hidden">
                            <div className="grid md:grid-cols-[220px_1fr]">
                                <Image
                                    src={item.thumbnailUrl}
                                    alt={item.thumbnailAlt}
                                    width={1024}
                                    height={751}
                                    sizes="(min-width: 768px) 220px, 100vw"
                                    className="h-44 w-full md:h-full object-cover border-b md:border-b-0 md:border-r border-border"
                                />
                                <div className="p-5 space-y-3">
                                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground">
                                        <span>{item.source}</span>
                                        <span className="text-border">|</span>
                                        <time dateTime={item.publishedDate}>
                                            {publishedDateFormatter.format(new Date(`${item.publishedDate}T00:00:00Z`))}
                                        </time>
                                    </div>
                                    <h3 className="text-lg font-mono font-semibold leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground max-w-2xl">
                                        {item.summary}
                                    </p>
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center text-sm font-mono text-primary hover:underline"
                                    >
                                        Read article <ArrowRight className="ml-2 h-3 w-3" />
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Favorite Projects */}
            <section className="space-y-6">
                <h2 className="font-mono text-sm text-muted-foreground border-b border-border pb-2">
                    Favorite projects
                </h2>
                <p className="text-sm text-muted-foreground max-w-3xl">
                    A few projects I care about across startup, open-source, and product surfaces.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    {favoriteProjects.map((project) => (
                        <article key={project.id} className="p-5 border border-border bg-accent/20 space-y-4">
                            <div className="flex items-start justify-between gap-4">
                                <h3 className="text-base font-mono font-semibold">{project.title}</h3>
                                <span
                                    className={`shrink-0 inline-flex px-2 py-0.5 text-[10px] uppercase font-mono ${project.status === "live"
                                        ? "bg-emerald-500/10 text-emerald-800"
                                        : project.status === "in-progress"
                                            ? "bg-blue-500/10 text-blue-700"
                                            : "bg-secondary text-secondary-foreground"
                                        }`}
                                >
                                    {project.status === "in-progress" ? "in progress" : project.status}
                                </span>
                            </div>

                            <p className="text-sm text-muted-foreground">{project.summary}</p>

                            <div className="flex flex-wrap gap-2">
                                {project.platforms.map((platform) => (
                                    <span
                                        key={platform}
                                        className="inline-flex items-center px-2 py-0.5 text-[10px] font-mono border border-border bg-background/60"
                                    >
                                        {platform}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4 text-xs font-mono">
                                {project.links.map((link) =>
                                    link.href ? (
                                        link.href.startsWith("/") ? (
                                            <Link key={link.label} href={link.href} className="text-primary hover:underline">
                                                {link.label}
                                            </Link>
                                        ) : (
                                            <a
                                                key={link.label}
                                                href={link.href}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-primary hover:underline"
                                            >
                                                {link.label}
                                            </a>
                                        )
                                    ) : (
                                        <span key={link.label} className="text-muted-foreground">
                                            {link.label}
                                        </span>
                                    )
                                )}
                            </div>
                        </article>
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
