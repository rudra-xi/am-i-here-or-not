/**
 * Centralized GSAP (GreenSock Animation Platform) configuration file.
 * This file imports the core GSAP library and its necessary plugins,
 * registers the plugins, and then re-exports them.
 * By importing from this file, other components can use GSAP features
 * without needing to register the plugins themselves, ensuring consistency
 * and preventing potential issues.
 */

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

// Register the plugins with GSAP core to make them available for use.
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

// Re-export the GSAP core and plugins for easy and consistent import elsewhere.
export { gsap, useGSAP, ScrollTrigger, SplitText };
