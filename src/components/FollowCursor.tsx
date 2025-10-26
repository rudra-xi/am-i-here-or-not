"use client";

import { useState, useEffect, useRef } from "react";

/**
 * A component that renders a custom cursor that follows the user's mouse.
 * It consists of two elements: a solid inner dot and a larger outer border.
 * Both elements smoothly "lerp" (linearly interpolate) to the mouse's
 * position, creating a fluid, lagging effect. The cursor also changes
 * size when hovering over interactive elements.
 */
export default function FollowCursor() {
    // Refs to store positions without triggering re-renders on every mouse move.
    const mousePosition = useRef({ x: 0, y: 0 });
    const dotPosition = useRef({ x: 0, y: 0 });
    const borderDotPosition = useRef({ x: 0, y: 0 });

    // State to trigger re-renders and update the DOM with new positions.
    const [renderPos, setRenderPos] = useState({
        dot: { x: 0, y: 0 },
        border: { x: 0, y: 0 },
    });
    // State to track when the cursor is over an interactive element.
    const [isHovering, setIsHovering] = useState(false);

    const DOT_SMOOTHNESS = 0.2;
    const BORDER_DOT_SMOOTHNESS = 0.1;

    // Main effect for setting up and tearing down cursor logic.
    useEffect(() => {
        // Updates the target mouse position.
        const handleMouseMove = (e: MouseEvent) => {
            mousePosition.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        window.addEventListener("mousemove", handleMouseMove);

        // Selects elements that should trigger the hover effect.
        const interactiveElements = document.querySelectorAll(
            "Link, Image, a, img, span, p",
        );
        interactiveElements.forEach((element) => {
            element.addEventListener("mouseenter", handleMouseEnter);
            element.addEventListener("mouseleave", handleMouseLeave);
        });

        // The animation loop that runs on every frame.
        const animate = () => {
            // Smoothly interpolates the cursor's position towards the target.
            const lerp = (start: number, end: number, factor: number) => {
                return start + (end - start) * factor;
            };

            dotPosition.current.x = lerp(
                dotPosition.current.x,
                mousePosition.current.x,
                DOT_SMOOTHNESS,
            );
            dotPosition.current.y = lerp(
                dotPosition.current.y,
                mousePosition.current.y,
                DOT_SMOOTHNESS,
            );

            borderDotPosition.current.x = lerp(
                borderDotPosition.current.x,
                mousePosition.current.x,
                BORDER_DOT_SMOOTHNESS,
            );
            borderDotPosition.current.y = lerp(
                borderDotPosition.current.y,
                mousePosition.current.y,
                BORDER_DOT_SMOOTHNESS,
            );

            setRenderPos({
                dot: { x: dotPosition.current.x, y: dotPosition.current.y },
                border: {
                    x: borderDotPosition.current.x,
                    y: borderDotPosition.current.y,
                },
            });

            requestAnimationFrame(animate);
        };

        // Start the animation loop.
        const animationId = requestAnimationFrame(animate);

        // Cleanup function to remove event listeners and stop the animation loop.
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);

            interactiveElements.forEach((element) => {
                element.removeEventListener("mouseenter", handleMouseEnter);
                element.removeEventListener("mouseleave", handleMouseLeave);
            });

            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 z-40">
            <div
                className="absolute rounded-full bg-accent"
                style={{
                    width: isHovering ? "10px" : "8px",
                    height: isHovering ? "10px" : "8px",
                    transform: "translate(-50%, -50%)",
                    left: `${renderPos.dot.x}px`,
                    top: `${renderPos.dot.y}px`,
                }}
            />

            <div
                className="absolute rounded-full border border-accent"
                style={{
                    width: isHovering ? "40px" : "30px",
                    height: isHovering ? "40px" : "30px",
                    transform: "translate(-50%, -50%)",
                    left: `${renderPos.border.x}px`,
                    top: `${renderPos.border.y}px`,
                    transition: "width 0.3s, height 0.3s",
                }}
            />
        </div>
    );
}
