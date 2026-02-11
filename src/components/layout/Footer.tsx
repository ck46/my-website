import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
    return (
        <footer className="w-full pt-12 mt-12 mb-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-xs text-muted-foreground">
            <div className="text-center md:text-left">
                <p>
                    {siteConfig.name} <span className="text-border">|</span> {siteConfig.title}
                </p>
            </div>

            <div className="flex gap-6">
                <Link href={siteConfig.socials.github} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
                    GITHUB
                </Link>
                <Link href={siteConfig.socials.huggingface} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
                    HF
                </Link>
                <Link href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
                    LINKEDIN
                </Link>
            </div>
        </footer>
    );
}
