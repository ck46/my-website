import Link from "next/link";
import { Mail, Calendar, MessageSquare } from "lucide-react";

export const metadata = {
    title: "Contact | Chansa Kabwe",
    description: "Get in touch for advisory, investment, or research collaboration.",
};

export default function ContactPage() {
    return (
        <main className="flex min-h-screen flex-col items-center pt-24 pb-16 px-6">
            <div className="max-w-3xl w-full text-center space-y-12">
                <section>
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Choose the channel that best fits your needs.
                    </p>
                </section>

                <div className="grid md:grid-cols-3 gap-6">
                    <Link href="mailto:hello@ck46.com?subject=Client%20Inquiry" className="group flex flex-col items-center p-8 bg-card border rounded-xl shadow-sm hover:shadow-md transition-all hover:border-primary/50">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <Calendar className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Clients</h3>
                        <p className="text-sm text-muted-foreground">Book a discovery call for Sprints or Advisory.</p>
                    </Link>

                    <Link href="mailto:hello@ck46.com?subject=NjiraAI%20Inquiry" className="group flex flex-col items-center p-8 bg-card border rounded-xl shadow-sm hover:shadow-md transition-all hover:border-primary/50">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <MessageSquare className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Investors</h3>
                        <p className="text-sm text-muted-foreground">Request deck or early access to NjiraAI.</p>
                    </Link>

                    <Link href="mailto:hello@ck46.com?subject=Research%20Collab" className="group flex flex-col items-center p-8 bg-card border rounded-xl shadow-sm hover:shadow-md transition-all hover:border-primary/50">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <Mail className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Collaborators</h3>
                        <p className="text-sm text-muted-foreground">Propose a research project or paper idea.</p>
                    </Link>
                </div>
            </div>
        </main>
    );
}
