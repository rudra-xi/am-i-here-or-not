"use client";

import { animatePageIn } from "@/utils/animation";
import { useEffect } from "react";

/**
 * A layout template that wraps around page content to provide a consistent
 * page transition animation. It uses a "curtain" effect with multiple
 * vertical banners that animate to reveal the page content underneath.
 */
export default function Template({ children }: { children: React.ReactNode }) {
    // Trigger the page-in animation on component mount.
    useEffect(() => {
        animatePageIn();
    }, []);

    return (
        <div className="z-50">
            {/* Top and bottom banners for the page reveal animation */}
            <div className="left-0 banner-top"></div>
            <div className="left-1/4 banner-top"></div>
            <div className="left-2/4 banner-top"></div>
            <div className="left-3/4 banner-top"></div>

            <div className="left-0 banner-bottom"></div>
            <div className="left-1/4 banner-bottom"></div>
            <div className="left-2/4 banner-bottom"></div>
            <div className="left-3/4 banner-bottom"></div>
            {children}
        </div>
    );
}
