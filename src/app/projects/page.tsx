import type { Metadata } from "next";
import { pageMetadata, siteConfig } from "@/data/site";
import { projectsConfig, projectsPageConfig } from "@/data/projects";

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
        <div className="space-y-16">
            <section className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-mono font-medium tracking-tight">
                    {projectsPageConfig.title}
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                    {projectsPageConfig.intro}
                </p>
                <p className="text-xs font-mono text-muted-foreground">
                    {projectsPageConfig.sourceNote}
                </p>
            </section>

            <section className="space-y-6">
                <h2 className="font-mono text-sm text-muted-foreground border-b border-border pb-2">
                    {projectsPageConfig.sectionTitle}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {projectsConfig.map((project) => (
                        <article key={project.id} className="p-5 border border-border bg-accent/20 space-y-4">
                            <div className="space-y-2">
                                <h3 className="text-base font-mono font-semibold">{project.name}</h3>
                                <p className="text-sm text-muted-foreground">{project.description}</p>
                            </div>

                            <div className="flex flex-wrap gap-2 text-[11px] font-mono">
                                <span className="px-2 py-0.5 border border-border bg-background/60">
                                    stars: {project.stars}
                                </span>
                                <span className="px-2 py-0.5 border border-border bg-background/60">
                                    forks: {project.forks}
                                </span>
                                <span className="px-2 py-0.5 border border-border bg-background/60">
                                    lang: {project.language}
                                </span>
                                <span className="px-2 py-0.5 border border-border bg-background/60">
                                    updated: {updatedDateFormatter.format(new Date(`${project.updatedDate}T00:00:00Z`))}
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-4 text-sm font-mono">
                                {project.links.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center text-primary hover:underline"
                                    >
                                        {link.label}
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
