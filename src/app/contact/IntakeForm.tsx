"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/data/site";

export function IntakeForm() {
    const [name, setName] = useState("");
    const [working, setWorking] = useState("");
    const [whyNow, setWhyNow] = useState("");
    const [hoping, setHoping] = useState("");

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const trimmedName = name.trim();
        const subject = trimmedName
            ? `Intro request — ${trimmedName}`
            : "Intro request";
        const body = [
            `Name: ${trimmedName || "(unspecified)"}`,
            "",
            "What are you working on?",
            working.trim() || "(unspecified)",
            "",
            "Why now?",
            whyNow.trim() || "(unspecified)",
            "",
            "What are you hoping for?",
            hoping.trim() || "(unspecified)",
        ].join("\n");
        const href = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
            subject,
        )}&body=${encodeURIComponent(body)}`;
        window.location.href = href;
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <Field label="name" id="name">
                <input
                    id="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-background border border-border px-3 py-2 font-mono text-sm focus:outline-none focus:border-foreground"
                />
            </Field>

            <Field label="working_on" id="working" helper="What are you working on?">
                <textarea
                    id="working"
                    required
                    rows={3}
                    value={working}
                    onChange={(e) => setWorking(e.target.value)}
                    className="w-full bg-background border border-border px-3 py-2 font-mono text-sm focus:outline-none focus:border-foreground resize-y"
                />
            </Field>

            <Field label="why_now" id="why-now" helper="Why now?">
                <textarea
                    id="why-now"
                    required
                    rows={2}
                    value={whyNow}
                    onChange={(e) => setWhyNow(e.target.value)}
                    className="w-full bg-background border border-border px-3 py-2 font-mono text-sm focus:outline-none focus:border-foreground resize-y"
                />
            </Field>

            <Field label="hoping_for" id="hoping" helper="What are you hoping for?">
                <textarea
                    id="hoping"
                    required
                    rows={2}
                    value={hoping}
                    onChange={(e) => setHoping(e.target.value)}
                    className="w-full bg-background border border-border px-3 py-2 font-mono text-sm focus:outline-none focus:border-foreground resize-y"
                />
            </Field>

            <button
                type="submit"
                className="inline-flex items-center justify-center px-4 py-2 border border-foreground bg-foreground text-background hover:bg-background hover:text-foreground transition-colors font-mono text-sm"
            >
                ./send_intro_request.sh
            </button>

            <p className="text-xs font-mono text-muted-foreground">
                Opens your email client with a draft to {siteConfig.contactEmail}.
            </p>
        </form>
    );
}

function Field({
    label,
    id,
    helper,
    children,
}: {
    label: string;
    id: string;
    helper?: string;
    children: React.ReactNode;
}) {
    return (
        <div className="space-y-2">
            <label htmlFor={id} className="block font-mono text-xs">
                <span className="text-primary">&gt;</span>{" "}
                <span className="text-foreground">{label}</span>
                {helper && (
                    <span className="text-muted-foreground"> &mdash; {helper}</span>
                )}
            </label>
            {children}
        </div>
    );
}
