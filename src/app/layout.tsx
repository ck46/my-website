import type { Metadata } from "next";
import { Inter_Tight, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig, siteMetaTitle } from "@/data/site";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { TmuxShell } from "@/components/layout/TmuxShell";

const interTight = Inter_Tight({
    subsets: ["latin"],
    variable: "--font-inter",
    weight: ["400", "500", "600", "700"],
});
const plexMono = IBM_Plex_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
    weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
    title: {
        default: siteMetaTitle,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    metadataBase: new URL(siteConfig.url),
    icons: {
        icon: "/logo_2.png",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteMetaTitle,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [{ url: "/logo_2.png" }],
    },
    twitter: {
        card: "summary_large_image",
        title: siteMetaTitle,
        description: siteConfig.description,
        creator: "@ck46",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${interTight.variable} ${plexMono.variable} font-mono bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground`}>
                <TmuxShell>{children}</TmuxShell>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
