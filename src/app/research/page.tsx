import Link from "next/link";
import { researchContent } from "@/data/content";

export const metadata = {
    title: "Research | Chansa Kabwe",
    description: "Research on LLM reasoning and agent validation.",
};

export default function ResearchPage() {
    return (
        <main className="flex min-h-screen flex-col items-center pt-24 pb-16 px-6">
            <div className="max-w-4xl w-full space-y-16">
                <section className="text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
                        Research & Explorations
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        {researchContent.focus}
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-8 pb-2 border-b">Core Themes</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {researchContent.themes.map((theme, i) => (
                            <div key={i} className="bg-card p-6 rounded-xl border shadow-sm">
                                <h3 className="text-lg font-bold mb-3">{theme.title}</h3>
                                <p className="text-muted-foreground text-sm">{theme.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-8 pb-2 border-b">Collaboration</h2>
                    <div className="bg-primary/5 p-8 rounded-xl border border-primary/20">
                        <p className="text-lg font-medium mb-6">
                            {researchContent.collaboration}
                        </p>
                        <div className="flex gap-4">
                            <Link
                                href="mailto:hello@ck46.com?subject=Research%20Collaboration"
                                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                            >
                                Propose Collaboration
                            </Link>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-8 pb-2 border-b">Selected Publications / Artifacts</h2>
                    <p className="text-muted-foreground italic">Updating...</p>
                </section>
            </div>
        </main>
    );
}
