"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { title: "/work", href: "/work" },
        { title: "/startup", href: "/startup" },
        { title: "/research", href: "/research" },
        { title: "/contact", href: "/contact" },
    ];

    return (
        <nav className="py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <Link href="/" className="font-mono font-bold text-lg tracking-tighter hover:text-primary/80 transition-colors">
                ck@46:~$
            </Link>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-mono">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "hover:text-foreground transition-colors",
                            pathname === item.href ? "text-foreground underline decoration-zinc-500 underline-offset-4" : "text-muted-foreground"
                        )}
                    >
                        {item.title}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
