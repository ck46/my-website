"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { credibilityLinks } from "@/data/site";

// Window list — order is the tmux window number shown in the keybar.
const windows = [
    { num: 0, label: "home", href: "/" },
    { num: 1, label: "research", href: "/research" },
    { num: 2, label: "projects", href: "/projects" },
    { num: 3, label: "consult", href: "/consult" },
    { num: 4, label: "contact", href: "/contact" },
];

function activeIndex(pathname: string) {
    if (pathname === "/") return 0;
    const idx = windows.findIndex(
        (w) => w.href !== "/" && pathname.startsWith(w.href),
    );
    return idx === -1 ? 0 : idx;
}

export function TmuxShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname() ?? "/";
    const router = useRouter();
    const current = activeIndex(pathname);
    const win = windows[current];

    // Window-switching keyboard shortcuts (tmux-style): digits jump directly,
    // j / k step next / prev. Ignored while typing in inputs or with modifiers.
    useEffect(() => {
        function handler(event: KeyboardEvent) {
            const target = event.target as HTMLElement | null;
            if (target) {
                const tag = target.tagName;
                if (
                    tag === "INPUT" ||
                    tag === "TEXTAREA" ||
                    tag === "SELECT" ||
                    target.isContentEditable
                ) return;
            }
            if (event.metaKey || event.ctrlKey || event.altKey) return;

            let target_index = -1;
            if (/^[0-9]$/.test(event.key)) {
                const n = parseInt(event.key, 10);
                if (n >= 0 && n < windows.length) target_index = n;
            } else if (event.key === "j" || event.key === "l") {
                target_index = (current + 1) % windows.length;
            } else if (event.key === "k" || event.key === "h") {
                target_index = (current - 1 + windows.length) % windows.length;
            }

            if (target_index === -1 || target_index === current) return;
            event.preventDefault();
            router.push(windows[target_index].href);
        }
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [current, router]);

    return (
        <div className="mx-auto max-w-5xl px-3 sm:px-4 py-4 min-h-screen flex">
            <section className="term flex-1 flex flex-col w-full">
                <div className="term-titlebar gap-3">
                    <span className="term-dots">
                        <i></i>
                        <i></i>
                        <i></i>
                    </span>
                    <span className="ttl whitespace-nowrap">
                        ck@46: ~ — tmux:{" "}
                        <span className="text-primary">{win.label}</span>
                    </span>
                    <nav className="term-tabs ml-1" aria-label="windows">
                        {windows.map((w) => (
                            <Link
                                key={w.num}
                                href={w.href}
                                className={`term-tab${w.num === current ? " on" : ""}`}
                                aria-current={w.num === current ? "page" : undefined}
                            >
                                <span className="num">{w.num}</span>
                                {w.label}
                            </Link>
                        ))}
                    </nav>
                    <span className="right hidden lg:inline font-mono text-[11px] text-muted-foreground/80">
                        <span className="px-1 text-foreground">0–4</span> jump{" "}
                        <span className="text-muted-foreground/50">·</span>{" "}
                        <span className="px-1 text-foreground">jk</span> step
                    </span>
                </div>

                <main className="flex-1 p-5 md:p-7">{children}</main>

                <div className="keybar justify-between">
                    <span className="flex flex-wrap items-center gap-x-3">
                        <b>[ck46]</b>
                        {windows.map((w) =>
                            w.num === current ? (
                                <span key={w.num} className="current">
                                    {w.num}:{w.label}
                                </span>
                            ) : (
                                <Link
                                    key={w.num}
                                    href={w.href}
                                    className="hover:text-foreground transition-colors"
                                >
                                    <span className="text-muted-foreground/70">
                                        {w.num}:
                                    </span>
                                    {w.label}
                                </Link>
                            ),
                        )}
                    </span>
                    <span className="hidden md:flex flex-wrap items-center gap-x-3">
                        {credibilityLinks
                            .filter((l) => l.label !== "MIT OpenCourseWare Profile")
                            .map((link, i, arr) => (
                                <span
                                    key={link.label}
                                    className="flex items-center gap-x-3"
                                >
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hover:text-foreground transition-colors"
                                    >
                                        {link.label.toLowerCase()}
                                    </a>
                                    {i < arr.length - 1 && (
                                        <span className="text-muted-foreground/40">·</span>
                                    )}
                                </span>
                            ))}
                    </span>
                </div>
            </section>
        </div>
    );
}
