import Link from "next/link";
import { services, audiences } from "@/data/content";

export const metadata = {
    title: "Work & Services | Chansa Kabwe",
    description: "Advisory and sprint services for AI safety and reliability.",
};

export default function WorkPage() {
    return (
        <main className="flex min-h-screen flex-col items-center pt-24 pb-16 px-6">
            <div className="max-w-4xl w-full space-y-16">
                <section className="text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
                        Services & Case Studies
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        I help companies ship safer, more reliable agentic systems through targeted sprints and advisory.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-8 pb-2 border-b">Ways to work with me</h2>
                    <div className="grid gap-8">
                        {services.map((service, i) => (
                            <div key={i} className="flex flex-col md:flex-row gap-6 p-6 rounded-xl border bg-card shadow-sm">
                                <div className="md:w-1/3">
                                    <h3 className="text-xl font-bold">{service.title}</h3>
                                    <div className="mt-2 inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                                        {service.duration}
                                    </div>
                                </div>
                                <div className="md:w-2/3">
                                    <p className="text-muted-foreground mb-4">{service.description}</p>
                                    <ul className="space-y-1">
                                        {service.outcomes.map((outcome, j) => (
                                            <li key={j} className="flex items-center text-sm font-medium">
                                                <svg
                                                    className="mr-2 h-4 w-4 text-primary"
                                                    fill="none"
                                                    height="24"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                                {outcome}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        <Link
                            href="mailto:hello@ck46.com?subject=Service%20Inquiry"
                            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        >
                            Book a Calibration Call
                        </Link>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-8 pb-2 border-b">Case Studies</h2>
                    <div className="text-center py-12 border rounded-xl border-dashed">
                        <p className="text-muted-foreground mb-4">Detailed case studies are being prepared.</p>
                        {/* Fallback to placeholder if needed */}
                    </div>
                </section>
            </div>
        </main>
    );
}
