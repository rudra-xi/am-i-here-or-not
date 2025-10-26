"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/libs/gsap";

import Image from "next/image";

import { image_10, image_11, image_3, image_5, image_6 } from "public";
import { ReactLenis, useLenis } from "lenis/react";

/**
 * The "Focus" page component, featuring a scroll-driven image gallery.
 * It uses GSAP's ScrollTrigger to create a "sticky" effect where a stack
 * of image cards animates sequentially as the user scrolls down the page.
 * ReactLenis is used to ensure a smooth scrolling experience, which is
 * crucial for the animation's fluidity.
 */
export default function Focus() {
    // Ref for the component's root element to scope GSAP animations.
    const container = useRef(null);
    const lenis = useLenis(({ scroll }) => {});

    // GSAP hook for managing animations and their cleanup.
    useGSAP(
        () => {
            const cards = document.querySelectorAll(".image-card");
            const images = document.querySelectorAll(".image-card Image");
            const totalCards = cards.length;

            // Set initial positions for all cards, stacking them below the viewport.
            gsap.set(cards[0], { y: "0%", scale: 1 });
            gsap.set(images[0], { scale: 1 });
            for (let i = 0; i < totalCards; i++) {
                gsap.set(cards[i], { y: "100%", scale: 1 });
                gsap.set(images[i], { scale: 1 });
            }

            // Create a timeline that is controlled by the scroll position.
            const scrollTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: "#sticky-cards",
                    start: "top top",
                    end: `+=${window.innerHeight * (totalCards - 1)}`,
                    scrub: 0.5,
                    pin: true,
                },
            });

            // Loop through cards to create the sequential animation effect.
            for (let i = 0; i < totalCards - 1; i++) {
                const currentCard = cards[i];
                const CurrentImage = images[i];
                const nextCard = cards[i + 1];
                const position = i;

                scrollTimeline
                    // Scale down the current card.
                    .to(
                        currentCard,
                        {
                            scale: 0.5,
                            duration: 1,
                            ease: "none",
                        },
                        position,
                    )
                    // Zoom into the image of the current card.
                    .to(
                        CurrentImage,
                        {
                            scale: 1.5,
                            duration: 1,
                            ease: "none",
                        },
                        position,
                    )
                    // Bring the next card into view.
                    .to(
                        nextCard,
                        {
                            y: "0%",
                            duration: 1,
                            ease: "none",
                        },
                        position,
                    );
            }

            // Cleanup GSAP instances on component unmount to prevent memory leaks.
            return () => {
                scrollTimeline.kill();
                ScrollTrigger.getAll().forEach((st) => st.kill());
            };
        },
        { scope: container },
    );

    return (
        <ReactLenis root>
            <section
                ref={container}
                id="container"
                className="relative w-full h-screen z-0"
            >
                <>
                    <div id="intro" className="relative h-full">
                        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[240px] font-cursive text-accent z-30">
                            {/* Using custom font glyphs for stylistic text */}
                            {"\uE039"}ocu{"\uE060"}
                        </h1>
                        <p className="absolute top-1/2 left-1/2 w-full  -translate-x-1/2 -translate-y-1/2 text-center text-3xl tracking-widest z-30">
                            A collection of moments where I become the story,
                            framed and frozen in time.
                        </p>
                    </div>
                </>
                <>
                    <div id="sticky-cards" className="h-screen flex-center">
                        <div
                            id="card-container"
                            className="relative w-1/2 h-1/2 overflow-hidden"
                        >
                            <div className="absolute w-full h-full overflow-hidden image-card">
                                <Image
                                    src={image_3}
                                    alt="image_3"
                                    placeholder="blur"
                                    className="h-120 w-auto object-cover relative"
                                />
                            </div>
                            <div className="absolute w-full h-full overflow-hidden image-card">
                                <Image
                                    src={image_5}
                                    alt="image_5"
                                    placeholder="blur"
                                    className="h-120 w-auto object-cover relative"
                                />
                            </div>
                            <div className="absolute w-full h-full overflow-hidden image-card">
                                <Image
                                    src={image_6}
                                    alt="image_6"
                                    placeholder="blur"
                                    className="h-120 w-auto object-cover relative"
                                />
                            </div>
                            <div className="absolute w-full h-full overflow-hidden image-card">
                                <Image
                                    src={image_10}
                                    alt="image_8"
                                    placeholder="blur"
                                    className="h-120 w-auto object-cover relative"
                                />
                            </div>
                            <div className="absolute w-full h-full overflow-hidden image-card">
                                <Image
                                    src={image_11}
                                    alt="image_9"
                                    placeholder="blur"
                                    className="h-120 w-auto object-cover relative"
                                />
                            </div>
                        </div>
                    </div>
                </>
                <>
                    <div id="outro" className="h-screen flex-center w-full">
                        <p className="text-4xl tracking-widest text-center w-5/6 z-30">
                            In every pose, I tell a story without words—{" "}
                            <span className="text-accent font-cursive tracking-normal">
                                a moment of truth captured beyond the surface.
                            </span>
                        </p>
                    </div>
                </>
            </section>
        </ReactLenis>
    );
}
