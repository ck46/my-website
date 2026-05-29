import type { Metadata } from "next";
import { pageMetadata, researchProjects, siteConfig } from "@/data/site";
import { projectsConfig, projectsPageConfig } from "@/data/projects";
import { ResearchProjectCard } from "@/components/ResearchProjectCard";

const updatedDateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
});

export const metadata: Metadata = {
    title: pageMetadata.projects.title,
    description: pageMetadata.projects.description,
    openGraph: {
        title: pageMetadata.projects.title,
        description: pageMetadata.projects.description,
        url: `${siteConfig.url}/projects`,
    },
};

export default function ProjectsPage() {
    return (
        <div className="space-y-10">
            {/* Page intro */}
            <header className="space-y-3">
                <p className="font-mono text-xs text-muted-foreground">
                    <span className="text-primary">ck@46</span>
                    <span className="text-muted-foreground/80">:~$</span>{" "}
                    <span className="text-foreground">ls /projects/</span>
                </p>
                <h1 className="font-sans font-bold text-2xl md:text-3xl tracking-tight text-foreground">
                    {projectsPageConfig.title}
                </h1>
                <p className="font-sans text-sm text-muted-foreground max-w-3xl leading-relaxed">
                    Public projects I&apos;m running, plus the top GitHub repositories from my profile.
                </p>
            </header>

            {/* Public projects */}
            <section className="space-y-3">
                <h2 className="font-sans font-semibold text-[11px] uppercase tracking-[0.14em] text-muted-foreground flex items-center gap-3">
                    public projects · {researchProjects.length} running
                    <span className="flex-1 h-px bg-border"></span>
                </h2>
                <div className="panes panes-2 max-md:!grid-cols-1">
                    {researchProjects.map((project) => (
                        <ResearchProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>

            {/* Top GitHub projects */}
            <section className="space-y-3">
                <h2 className="font-sans font-semibold text-[11px] uppercase tracking-[0.14em] text-muted-foreground flex items-center gap-3">
                    top github · {projectsConfig.length} repos
                    <span className="flex-1 h-px bg-border"></span>
                </h2>
                <p className="font-mono text-[11px] text-muted-foreground/80">
                    {projectsPageConfig.sourceNote}
                </p>
                <div className="panes panes-2 max-md:!grid-cols-1">
                    {projectsConfig.map((project) => (
                        <article key={project.id} className="pane">
                            <p className="pane-title">
                                <span className="lead">▸</span>
                                <span className="normal-case tracking-normal text-foreground font-semibold">
                                    {project.name}
                                </span>
                                <span className="meta">{project.language}</span>
                            </p>
                            <p className="font-sans text-xs text-muted-foreground leading-snug mb-3">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] text-muted-foreground mb-3">
                                <span>
                                    <span className="text-primary">★</span> {project.stars}
                                </span>
                                <span className="text-muted-foreground/60">·</span>
                                <span>
                                    forks {project.forks}
                                </span>
                                <span className="text-muted-foreground/60">·</span>
                                <span>
                                    updated{" "}
                                    {updatedDateFormatter.format(
                                        new Date(`${project.updatedDate}T00:00:00Z`),
                                    )}
                                </span>
                            </div>
                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono">
                                {project.links.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center text-primary hover:underline"
                                    >
                                        {link.label} →
                                    </a>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
