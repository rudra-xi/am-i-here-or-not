"use client";

import Image from "next/image";
import { gsap, useGSAP, SplitText } from "@/libs/gsap";
import { image_1, image_2, image_4, image_7 } from "public";

/**
 * The "Signal" page component, which serves as the contact/connect page.
 * It uses a simple GSAP timeline to animate the header, paragraph,
 * and a set of images, creating a clean and welcoming reveal effect.
 * This page encourages user interaction through its "connect" links.
 */
export default function Signal() {
    // GSAP hook for managing animations and ensuring proper cleanup.
    useGSAP(() => {
        // Initialize the main animation timeline with a 1-second delay.
        const timeline = gsap.timeline({ delay: 1 });
        const splitHeader = new SplitText("#text-header", {
            type: "chars",
        });
        const splitParaMain = new SplitText("#text-para-main", {
            type: "lines",
        });

        // Chain animations for a sequential reveal of page elements.
        timeline
            .fromTo(
                splitHeader.chars,
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.5, stagger: 0.05 },
            )
            .fromTo(
                splitParaMain.lines,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, stagger: 0.05 },
            )
            .fromTo(
                ".image-set",
                { opacity: 0 },
                {
                    opacity: 1,
                    stagger: {
                        from: "random",
                        each: 0.5,
                    },
                },
            )
            .fromTo("#links", { opacity: 0 }, { opacity: 1 });

        // Cleanup GSAP instances on component unmount to prevent memory leaks.
        return () => {
            timeline.kill();
            splitHeader.revert();
            splitParaMain.revert();
        };
    });
    return (
        <section className="relative w-full z-0">
            <>
                <h1
                    id="text-header"
                    className="text-[200px] tracking-widest text-center"
                >
                    Signal
                </h1>
                <p id="text-para-main" className="text-center tracking-wider">
                    Signal is the moment of connection, where ideas and presence
                    meet across space. This page is an invitation to reach out
                    and share your thoughts, questions, or collaborations. Like
                    a silent signal sent through the noise, your message holds
                    the power to spark a new journey, a fresh perspective, or a
                    shared vision.{" "}
                    <span className="text-accent font-cursive">
                        Whether it’s a simple hello or a deeper conversation,
                        this is where the dialogue begins.
                    </span>
                </p>
            </>
            <>
                <div className="flex items-center justify-between pt-3">
                    <Image
                        src={image_1}
                        alt="signal image 1"
                        placeholder="blur"
                        className="h-80 w-auto image-set"
                    />
                    <div className="flex-center space-x-6">
                        <Image
                            src={image_2}
                            alt="signal image 2"
                            placeholder="blur"
                            className="h-80 w-auto image-set"
                        />
                        <Image
                            src={image_4}
                            alt="signal image 3"
                            placeholder="blur"
                            className="h-80 w-auto image-set"
                        />
                    </div>
                    <Image
                        src={image_7}
                        alt="signal image 4"
                        placeholder="blur"
                        className="h-80 w-auto image-set"
                    />
                </div>
            </>
            <>
                <div id="links" className="flex-center space-x-6 pt-4">
                    <span className="underline underline-offset-4 decoration-accent hover:scale-105 base-ease">
                        Send Your Signal
                    </span>
                    <span className="underline underline-offset-4 decoration-accent hover:scale-105 base-ease">
                        Connect with Kirk
                    </span>
                </div>
            </>
        </section>
    );
}
