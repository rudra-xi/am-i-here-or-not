"use client";

import Image from "next/image";
import { gsap, useGSAP, SplitText } from "@/libs/gsap";

import { image_1, question_image } from "public";

/**
 * The main landing page component for the "Am I Here or Not?" project.
 * It features a complex, text-focused animation sequence using GSAP
 * to reveal the elements on the screen, creating a dynamic and
 * engaging user experience upon page load.
 */
export default function Question() {
    // GSAP hook to manage animations and their cleanup.
    useGSAP(() => {
        // Initialize the main animation timeline with a 1-second delay.
        const timeline = gsap.timeline({ delay: 1 });
        const splitHeader = new SplitText("#text-header", {
            type: "chars",
        });
        const splitSubHeader = new SplitText("#text-subheader", {
            type: "chars",
        });
        const splitVision = new SplitText("#text-vision", {
            type: "chars",
        });
        const splitPortrait = new SplitText("#text-portrait", {
            type: "chars",
        });

        // Chain animations to create a sequential reveal effect.
        timeline
            .fromTo(
                splitHeader.chars,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, stagger: 0.05 },
            )
            .fromTo(
                splitVision.chars,
                { opacity: 0, x: -20 },
                { opacity: 1, x: 0, duration: 0.3, stagger: 0.05 },
            )
            .fromTo(
                splitSubHeader.chars,
                { opacity: 0, x: 10 },
                { opacity: 1, x: 0, duration: 0.2, stagger: 0.05 },
            )
            .fromTo(
                "#image-main",
                { opacity: 0 },
                { opacity: 1, duration: 0.3 },
            )
            .fromTo(
                ".text-float",
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 0.3,
                    stagger: {
                        from: "random",
                        each: 0.5,
                    },
                },
            )
            .fromTo(
                "#image-sub",
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.3 },
            )
            .fromTo(
                splitPortrait.chars,
                { opacity: 0, x: 20 },
                { opacity: 1, x: 0, stagger: 0.05, duration: 0.3 },
            );

        // Cleanup GSAP instances on component unmount to prevent memory leaks.
        return () => {
            timeline.kill();
            splitHeader.revert();
            splitSubHeader.revert();
            splitVision.revert();
            splitPortrait.revert();
        };
    });
    return (
        <>
            <section id="question-container" className="relative w-full z-0">
                <>
                    <h1 id="text-header" className="text-[250px]">
                        Is This Reality?
                    </h1>
                    <h2
                        id="text-subheader"
                        className="text-9xl translate-x-130 translate-y-50"
                    >
                        Or Just a Thought?
                    </h2>
                </>

                <>
                    <span
                        id="text-portrait"
                        className="absolute translate-x-340 -translate-y-35 rotate-90 text-accent text-3xl font-cursive"
                    >
                        {/* Using custom font glyphs for stylistic text */}
                        {"\uE00F"}ortrai{"\uE02D"}
                    </span>
                    <span
                        id="text-vision"
                        className="absolute translate-x-230 -translate-y-63 text-accent text-4xl font-cursive"
                    >
                        {"\uE049"}isio{"\uE05B"}
                    </span>
                </>

                <>
                    <span className="absolute tracking-widest translate-x-338 -translate-y-60 rotate-90 text-float">
                        Mood
                    </span>
                    <span className="absolute tracking-widest translate-x-94 -translate-y-54 text-float">
                        Still Life
                    </span>
                    <span className="absolute tracking-widest translate-x-258 -translate-y-106 text-float">
                        Snapshot
                    </span>
                    <span className="absolute tracking-widest translate-x-250 translate-y-18 text-float">
                        Focus
                    </span>
                </>
                <>
                    <div
                        id="image-sub"
                        className="absolute right-0 -bottom-60 -z-10"
                    >
                        <Image
                            src={image_1}
                            alt="image_1"
                            placeholder="blur"
                            className="h-105 w-auto shadow-xl"
                        />
                    </div>
                    <div id="image-main" className="absolute inset-0">
                        <Image
                            src={question_image}
                            alt="Question"
                            placeholder="blur"
                            className="h-190 w-auto drop-shadow-2xl"
                        />
                    </div>
                </>
            </section>
        </>
    );
}
