import type { ResearchProject } from "@/data/site";

export function ResearchProjectCard({ project }: { project: ResearchProject }) {
    return (
        <div className="pane">
            <p className="pane-title">
                <span className="lead">▸</span>{" "}
                {project.headingPrefix.toLowerCase().replace(/\s+/g, "_")}:
                {project.headingHref ? (
                    <a
                        href={project.headingHref}
                        target="_blank"
                        rel="noreferrer"
                        className="text-foreground hover:underline normal-case tracking-normal"
                    >
                        {project.headingName}
                    </a>
                ) : (
                    <span className="text-foreground normal-case tracking-normal">
                        {project.headingName}
                    </span>
                )}
                <span className="meta">PID {project.pid}</span>
            </p>
            <div className="grid grid-cols-[78px_1fr] gap-x-3 gap-y-2 font-mono text-xs">
                <span className="text-muted-foreground">subject:</span>
                <span className="font-sans text-foreground text-sm leading-snug">
                    {project.subject}
                </span>
                {project.hypothesis && (
                    <>
                        <span className="text-muted-foreground">hypothesis:</span>
                        <span className="font-sans text-muted-foreground text-xs leading-snug">
                            {project.hypothesis}
                        </span>
                    </>
                )}
                <span className="text-muted-foreground">status:</span>
                <div className="space-y-1">
                    {project.statusItems.map((item, i) => {
                        const marker =
                            item.status === "complete"
                                ? "OK"
                                : item.status === "in-progress"
                                    ? ".."
                                    : "  ";
                        const cls =
                            item.status === "complete"
                                ? "status-complete"
                                : item.status === "in-progress"
                                    ? "status-in-progress"
                                    : "status-planned";
                        const body = (
                            <span className={cls}>
                                [{marker}] {item.label}
                            </span>
                        );
                        return (
                            <div key={i}>
                                {item.href ? (
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hover:underline"
                                    >
                                        {body}
                                    </a>
                                ) : (
                                    body
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
