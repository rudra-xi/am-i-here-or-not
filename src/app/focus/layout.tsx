import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Focus",
};

export default function WorkLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <section>{children}</section>;
}
