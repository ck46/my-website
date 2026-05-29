import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
    heroContent,
    favoriteQuote,
    audiences,
    researchProjects,
    featuredCoverage,
    researchLogEntries,
    type SubheadSegment,
} from "@/data/site";
import { ResearchProjectCard } from "@/components/ResearchProjectCard";

const publishedDateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
});

const logDateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    day: "2-digit",
    timeZone: "UTC",
});

function Subhead({ segments }: { segments: SubheadSegment[] }) {
    return (
        <p className="max-w-prose text-sm text-muted-foreground leading-relaxed font-sans">
            {segments.map((segment, i) =>
                typeof segment === "string" ? (
                    <span key={i}>{segment}</span>
                ) : (
                    <strong key={i} className="font-semibold text-foreground">
                        {segment.bold}
                    </strong>
                ),
            )}
        </p>
    );
}

export default function Home() {
    return (
        <div className="space-y-10">
            {/* 2x2 panes — whoami / proc / targets / logs */}
            <div className="panes panes-2 max-md:!grid-cols-1">
                {/* TL — ~/whoami (active) */}
                <div className="pane pane-active">
                    <p className="pane-title">
                        <span className="lead">▸</span> ~/whoami
                        <span className="meta">pane 0</span>
                    </p>
                    <p className="font-mono text-xs text-muted-foreground mb-3">
                        <span className="text-primary">ck@46</span>
                        <span className="text-muted-foreground/80">:~$</span>{" "}
                        <span className="text-foreground">whoami</span>
                    </p>
                    <p className="font-sans text-xs text-muted-foreground">
                        {heroContent.eyebrow}
                    </p>
                    <h1 className="font-sans font-bold text-2xl md:text-[28px] leading-[1.18] tracking-tight text-foreground mt-2 mb-3">
                        {heroContent.headline}
                    </h1>
                    <Subhead segments={heroContent.subhead} />
                    <div className="flex flex-col sm:flex-row gap-3 mt-4 font-mono text-sm">
                        <Link
                            href={heroContent.ctaPrimary.href}
                            className="inline-flex items-center justify-center px-3 py-1.5 border border-primary bg-primary text-primary-foreground hover:bg-background hover:text-primary transition-colors rounded-sm"
                        >
                            {heroContent.ctaPrimary.text}
                        </Link>
                        <Link
                            href={heroContent.ctaSecondary.href}
                            className="inline-flex items-center justify-center px-3 py-1.5 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors rounded-sm"
                        >
                            {heroContent.ctaSecondary.text}
                        </Link>
                    </div>
                </div>

                {/* TR — proc/projects */}
                <div className="pane">
                    <p className="pane-title">
                        <span className="lead">▸</span> proc/projects
                        <span className="meta">{researchProjects.length} running</span>
                    </p>
                    <div className="space-y-4">
                        {researchProjects.map((project) => {
                            const lead = project.statusItems[0];
                            const chipClass =
                                lead?.status === "complete"
                                    ? "chip ok dot"
                                    : lead?.status === "in-progress"
                                        ? "chip run dot"
                                        : "chip dot";
                            return (
                                <div key={project.id} className="space-y-1.5">
                                    <div className="flex items-baseline gap-2 text-xs font-mono">
                                        {project.headingHref ? (
                                            <a
                                                href={project.headingHref}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-foreground font-semibold hover:underline"
                                            >
                                                {project.headingName}
                                            </a>
                                        ) : (
                                            <span className="text-foreground font-semibold">
                                                {project.headingName}
                                            </span>
                                        )}
                                        <span className="text-muted-foreground/70">
                                            pid {project.pid}
                                        </span>
                                    </div>
                                    {lead && (
                                        <div className="flex items-center gap-2">
                                            <span className={chipClass}>{lead.label}</span>
                                        </div>
                                    )}
                                    <p className="font-sans text-xs text-muted-foreground leading-snug">
                                        {project.subject}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* BL — ls targets/ */}
                <div className="pane">
                    <p className="pane-title">
                        <span className="lead">▸</span> ls targets/
                        <span className="meta">{audiences.length} dirs</span>
                    </p>
                    <div className="font-mono text-xs">
                        {audiences.map((audience) => (
                            <Link
                                key={audience.id}
                                href={audience.href}
                                className="ls-row group hover:bg-accent/40 -mx-2 px-2 transition-colors"
                            >
                                <span className="perm">drwxr-x</span>
                                <span className="name">
                                    <b>{audience.title.toLowerCase()}/</b>{" "}
                                    <span className="desc">{audience.description}</span>
                                </span>
                                <span className="sz">→</span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* BR — research updates */}
                <div className="pane">
                    <p className="pane-title">
                        <span className="lead">▸</span> research/updates
                        <span className="meta">live</span>
                    </p>
                    <div>
                        {researchLogEntries.map((entry) => {
                            const stamp = logDateFormatter.format(
                                new Date(`${entry.date}T00:00:00Z`),
                            );
                            return (
                                <Link
                                    key={`${entry.date}-${entry.text}`}
                                    href={entry.href}
                                    className="log-row hover:bg-accent/40 -mx-2 px-2 transition-colors"
                                >
                                    <span className="ts">{stamp}</span>
                                    <span className="msg">{entry.text}</span>
                                </Link>
                            );
                        })}
                        <Link
                            href="/research"
                            className="log-row hover:bg-accent/40 -mx-2 px-2 transition-colors"
                        >
                            <span className="ts text-muted-foreground/60">····</span>
                            <span className="msg text-muted-foreground/60">
                                view research →
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Quote strip — sits between the upper panes and the project detail panes */}
            <figure className="border-l-2 border-primary pl-4 max-w-3xl">
                <blockquote className="font-sans italic text-base md:text-lg leading-relaxed text-foreground">
                    &ldquo;{favoriteQuote.text}&rdquo;
                </blockquote>
                <figcaption className="mt-2 text-xs font-mono text-muted-foreground">
                    {favoriteQuote.author}{" "}
                    <span className="text-border">|</span> {favoriteQuote.source}
                </figcaption>
            </figure>

            {/* Project detail panes */}
            <section className="space-y-3">
                <h2 className="font-sans font-semibold text-[11px] uppercase tracking-[0.14em] text-muted-foreground flex items-center gap-3">
                    public projects
                    <span className="flex-1 h-px bg-border"></span>
                </h2>
                <div className="panes panes-2 max-md:!grid-cols-1">
                    {researchProjects.map((project) => (
                        <ResearchProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>

            {/* Featured profile — single pane */}
            <section className="space-y-3">
                <h2 className="font-sans font-semibold text-[11px] uppercase tracking-[0.14em] text-muted-foreground flex items-center gap-3">
                    featured profile
                    <span className="flex-1 h-px bg-border"></span>
                </h2>
                <div className="panes">
                    {featuredCoverage.map((item) => (
                        <article key={item.href} className="pane !p-0">
                            <div className="grid md:grid-cols-[220px_1fr]">
                                <Image
                                    src={item.thumbnailUrl}
                                    alt={item.thumbnailAlt}
                                    width={1024}
                                    height={751}
                                    sizes="(min-width: 768px) 220px, 100vw"
                                    className="h-44 w-full md:h-full object-cover border-b md:border-b-0 md:border-r border-border"
                                />
                                <div className="p-5 space-y-2">
                                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-muted-foreground">
                                        <span>{item.source}</span>
                                        <span className="text-border">|</span>
                                        <time dateTime={item.publishedDate}>
                                            {publishedDateFormatter.format(
                                                new Date(`${item.publishedDate}T00:00:00Z`),
                                            )}
                                        </time>
                                    </div>
                                    <h3 className="font-sans font-bold text-lg leading-tight text-foreground">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground font-sans">
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
        </div>
    );
}
