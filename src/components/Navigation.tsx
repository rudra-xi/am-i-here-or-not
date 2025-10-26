import TransitionLink from "./TransitionLink";

/**
 * The main navigation component for the website.
 * It renders a fixed navigation bar at the top of the page,
 * using the `TransitionLink` component to handle animated page transitions
 * between the different sections of the site.
 */
export default function Navigation() {
    return (
        <nav className="fixed top-0 left-0 py-2 w-full z-20 bg-background">
            <div className="flex items-center justify-evenly">
                <TransitionLink href="/" label="Question" />
                <TransitionLink href="/subject" label="Subject" />
                <TransitionLink href="/focus" label="Focus" />
                <TransitionLink href="/signal" label="Signal" />
            </div>
        </nav>
    );
}
