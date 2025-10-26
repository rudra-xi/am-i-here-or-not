import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Signal",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <section>{children}</section>;
}
