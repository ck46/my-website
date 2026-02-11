import Link from "next/link";
import { njiraContent } from "@/data/content";

export const metadata = {
    title: "NjiraAI | Startup",
    description: njiraContent.tagline,
};

export default function StartupPage() {
    return (
        <main className="flex min-h-screen flex-col items-center pt-24 pb-16 px-6">
            <div className="max-w-3xl w-full">
                <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
                    Stealth Mode / Early Access
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
                    {njiraContent.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                    {njiraContent.tagline}
                </p>

                <section className="space-y-12">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">The Problem</h2>
                            <p className="text-muted-foreground">{njiraContent.problem}</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4">The Solution</h2>
                            <p className="text-muted-foreground">{njiraContent.solution}</p>
                        </div>
                    </div>

                    <div className="bg-muted/50 p-8 rounded-xl border">
                        <h2 className="text-2xl font-bold mb-6">Roadmap & Milestones</h2>
                        <div className="space-y-4">
                            {njiraContent.roadmap.map((item, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="h-8 w-8 rounded-full bg-background border flex items-center justify-center text-sm font-bold shadow-sm">
                                        {i + 1}
                                    </div>
                                    <span className="text-lg">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center pt-12">
                        <h3 className="text-2xl font-bold mb-6">Interested in piloting or investing?</h3>
                        <Link
                            href="mailto:hello@ck46.com?subject=NjiraAI%20Inquiry"
                            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        >
                            Request Investor Deck
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
}
