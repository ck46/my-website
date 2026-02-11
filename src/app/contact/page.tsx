import type { Metadata } from "next";
import { contactChannels, pageMetadata, siteConfig } from "@/data/site";

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
        <div className="space-y-16">
            {/* Header */}
            <section className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-mono font-medium tracking-tight">
                    /contact
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                    Choose the channel that best fits your needs. Each link opens a pre-filled email.
                </p>
            </section>

            {/* Channels */}
            <div className="grid md:grid-cols-3 gap-4">
                {contactChannels.map((channel) => {
                    const Icon = channel.icon;
                    return (
                        <a
                            key={channel.id}
                            href={channel.href}
                            className="group flex flex-col items-center p-8 border border-border card-hover text-center"
                        >
                            <div className="h-12 w-12 flex items-center justify-center border border-border text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                                <Icon className="h-5 w-5" />
                            </div>
                            <h2 className="font-mono font-semibold text-lg mb-2">{channel.title}</h2>
                            <p className="text-sm text-muted-foreground">{channel.description}</p>
                        </a>
                    );
                })}
            </div>

            {/* Direct email fallback */}
            <section className="text-center text-sm font-mono text-muted-foreground">
                <p>
                    Or email directly:{" "}
                    <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
                        {siteConfig.email}
                    </a>
                </p>
            </section>
        </div>
    );
}
