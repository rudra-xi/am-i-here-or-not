import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Subject",
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <section>{children}</section>;
}
