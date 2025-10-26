import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { FollowCursor, Navigation } from "@/components";

export const metadata: Metadata = {
    title: {
        default: "Am I Here or Not ?",
        absolute: "Am I Here or Not ? | rudra-xi",
        template: "%s | Am I Here or Not ?",
    },
    description:
        "A curious and energetic editorial photo gallery and portfolio.",
};

const brunson = localFont({
    src: [
        {
            path: "../fonts/brunson.ttf",
            weight: "900",
        },
    ],
    display: "swap",
    variable: "--font-neue",
});

const adelia = localFont({
    src: [
        {
            path: "../fonts/adelia.otf",
            weight: "800",
        },
    ],
    display: "swap",
    variable: "--font-adelia",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body
                className={`${brunson.variable} ${adelia.variable} antialiased overflow-x-hidden`}
            >
                <Navigation />
                <main className="min-w-screen min-h-screen page-padding">
                    {children}
                </main>
                <FollowCursor />
            </body>
        </html>
    );
}
