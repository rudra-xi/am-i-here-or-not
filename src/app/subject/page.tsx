"use client";

import Image from "next/image";
import { gsap, useGSAP, SplitText } from "@/libs/gsap";

import { subject_image } from "public";

/**
 * The "Subject" page component.
 * This component displays a different scene with its own unique GSAP animation
 * sequence. It animates text elements by character and line, along with
 * images, to create a narrative-driven visual experience.
 */
export default function Subject() {
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
        const splitParaSub = new SplitText("#text-para-sub", {
            type: "lines",
        });
        const splitPose = new SplitText("#text-pose", {
            type: "chars",
        });
        const splitStill = new SplitText("#text-still", {
            type: "chars",
        });

        // Chain animations for a sequential reveal of page elements.
        timeline
            .fromTo(
                splitStill.chars,
                { opacity: 0, x: -20 },
                { opacity: 1, x: 0, duration: 0.5, stagger: 0.05 },
            )
            .fromTo(
                splitHeader.chars,
                { opacity: 0, x: 20 },
                { opacity: 1, x: 0, duration: 0.5, stagger: 0.05 },
            )
            .fromTo(
                splitParaMain.lines,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, stagger: 0.05 },
            )
            .fromTo(
                "#image-main",
                { opacity: 0, y: 200 },
                { opacity: 1, y: 0, duration: 0.3 },
            )
            .fromTo(
                ".text-float",
                { opacity: 0 },
                { opacity: 1, stagger: { from: "random", each: 0.5 } },
            )
            .fromTo(
                splitPose.chars,
                { opacity: 0, x: -20 },
                { opacity: 1, x: 0, duration: 0.5, stagger: 0.05 },
            )
            .fromTo(
                splitParaSub.lines,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, stagger: 0.05 },
            );

        // Cleanup GSAP instances on component unmount to prevent memory leaks.
        return () => {
            timeline.kill();
            splitHeader.revert();
            splitParaMain.revert();
            splitParaSub.revert();
            splitPose.revert();
            splitStill.revert();
        };
    });
    return (
        <section className="relative w-full z-0">
            <>
                <h1
                    id="text-header"
                    className="text-[430px] tracking-wide text-center -translate-y-30"
                >
                    Perhaps
                </h1>
            </>

            <>
                <div>
                    <p
                        id="text-para-sub"
                        className="w-116 text-sm tracking-wider leading-4"
                    >
                        <span className="text-accent font-cursive">
                            Beyond the lens is the subject
                        </span>{" "}
                        —a story of expression and presence. Each frame holds
                        emotion and identity, as the model breathes life into
                        the vision and makes the art shared.
                    </p>
                    <p
                        id="text-para-main"
                        className="w-100 text-right translate-x-258 -translate-y-35 tracking-wider leading-4"
                    >
                        In the space between light and shadow, moments whisper
                        their secrets. Each frame holds a question, a hint of
                        perhaps—an invitation to linger, to see beyond what is
                        clear. It is here the unseen breathes, where presence
                        dances softly with mystery.
                    </p>
                </div>
            </>

            <>
                <span
                    id="text-pose"
                    className="absolute translate-x-8 -translate-y-127 rotate-90 text-accent text-4xl font-cursive"
                >
                    {/* Using custom font glyphs for stylistic text */}
                    {"\uE043"}os{"\uE052"}
                </span>
                <span
                    id="text-still"
                    className="absolute translate-x-306 -translate-y-116 text-accent text-4xl font-cursive"
                >
                    {"\uE012"}til{"\uE025"}
                </span>
            </>

            <>
                <span className="absolute tracking-widest translate-x-60 -translate-y-99 text-float">
                    Expression
                </span>

                <span className="absolute tracking-widest translate-x-319 -translate-y-64 text-accent text-3xl text-float">
                    Focus Point
                </span>
            </>

            <>
                <Image
                    id="image-main"
                    src={subject_image}
                    alt="subject_image"
                    placeholder="blur"
                    className="absolute h-194 w-auto left-[20%] inset-0"
                />
            </>
        </section>
    );
}
