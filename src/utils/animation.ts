import { gsap } from "@/libs/gsap";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

/**
 * Animates the page content into view.
 * It finds the top and bottom banner elements and animates them
 * off-screen to reveal the page.
 */
export const animatePageIn = () => {
    const easing = "expo.out";
    const direction = "random";
    const stagger = 0.2;

    const bannerTop = document.querySelectorAll(".banner-top");
    const bannerBottom = document.querySelectorAll(".banner-bottom");

    // Use a single timeline for a synchronized animation.
    const timeline = gsap.timeline();
    timeline
        .set(bannerTop, { yPercent: 0 })
        .set(bannerBottom, { yPercent: 0 })
        .to(bannerTop, {
            yPercent: -100,
            ease: easing,
            stagger: { each: stagger, from: direction },
        })
        .to(
            bannerBottom,
            {
                yPercent: 100,
                ease: easing,
                stagger: { each: stagger, from: direction },
            },
            "<", // Start this animation at the same time as the previous one.
        );
};

/**
 * Animates the page content out of view.
 * It brings the top and bottom banners back into the viewport to cover the page,
 * then navigates to the new route upon completion.
 */
export const animatePageOut = (href: string, router: AppRouterInstance) => {
    const easing = "expo.out";
    const direction = "random";
    const stagger = 0.2;

    const bannerTop = document.querySelectorAll(".banner-top");
    const bannerBottom = document.querySelectorAll(".banner-bottom");

    // Use a single timeline to ensure router.push is only called once.
    const timeline = gsap.timeline({ onComplete: () => router.push(href) });
    timeline
        .set(bannerTop, { yPercent: -100 })
        .set(bannerBottom, { yPercent: 100 })
        .to(bannerTop, {
            yPercent: 0,
            ease: easing,
            stagger: { each: stagger, from: direction },
        })
        .to(
            bannerBottom,
            {
                yPercent: 0,
                ease: easing,
                stagger: { each: stagger, from: direction },
            },
            "<", // Start this animation at the same time as the previous one.
        );
};
