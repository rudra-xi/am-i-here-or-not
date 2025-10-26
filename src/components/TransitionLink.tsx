"use client";
import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/utils/animation";
import Link from "next/link";

interface TransitionLinkProps {
    href: string;
    label: string;
}

/**
 * A custom Link component that wraps Next.js's Link to provide
 * smooth page transitions. It intercepts the click event, triggers an
 * "out" animation, and then programmatically navigates to the new route.
 */
export default function TransitionLink({ href, label }: TransitionLinkProps) {
    const router = useRouter();
    const pathname = usePathname();

    // Handles the click event to trigger the page-out animation.
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault(); // Prevent the default link behavior to run the animation first.
        // Only animate and navigate if the destination is different from the current page.
        if (pathname !== href) {
            animatePageOut(href, router);
        }
    };
    return (
        <Link
            href={href}
            className="text-lg tracking-widest base-ease hover:scale-101 hover:underline underline-offset-4 decoration-accent"
            onClick={handleClick}
        >
            {label}
        </Link>
    );
}
