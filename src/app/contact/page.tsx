import type { Metadata } from "next";
import { pageMetadata, siteConfig } from "@/data/site";
import { IntakeForm } from "./IntakeForm";

export const metadata: Metadata = {
    title: pageMetadata.contact.title,
    description: pageMetadata.contact.description,
    openGraph: {
        title: pageMetadata.contact.title,
        description: pageMetadata.contact.description,
        url: `${siteConfig.url}/contact`,
    },
};

export default function ContactPage() {
    return (
        <div className="space-y-10">
            {/* Page intro */}
            <header className="space-y-3">
                <p className="font-mono text-xs text-muted-foreground">
                    <span className="text-primary">ck@46</span>
                    <span className="text-muted-foreground/80">:~$</span>{" "}
                    <span className="text-foreground">./request_intro.sh</span>
                </p>
                <h1 className="font-sans font-bold text-2xl md:text-3xl tracking-tight text-foreground">
                    /contact
                </h1>
                <p className="font-sans text-sm text-muted-foreground max-w-2xl leading-relaxed">
                    A short intake — name, what you&apos;re working on, why now, and what
                    you&apos;re hoping for. If the fit is right, I&apos;ll reply with a
                    Calendly link.
                </p>
            </header>

            {/* Intake pane */}
            <section className="space-y-3">
                <h2 className="font-sans font-semibold text-[11px] uppercase tracking-[0.14em] text-muted-foreground flex items-center gap-3">
                    intake_form.sh
                    <span className="flex-1 h-px bg-border"></span>
                </h2>
                <div className="panes max-w-3xl">
                    <div className="pane">
                        <IntakeForm />
                    </div>
                </div>
            </section>
        </div>
    );
}
