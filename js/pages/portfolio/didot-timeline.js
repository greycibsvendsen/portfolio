/* Didot Timeline Page
========================================================================== */

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

/**
 * Horizontal scroll in gallery
 */
$(window).on( "load", function() {
    if ($(".project_didot-timeline").length)
    {   
        let container = document.getElementById("project__gallery");
        console.log((container.scrollWidth - document.documentElement.clientWidth))
        gsap.to(container, {
            x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
            ease: "none",
            scrollTrigger: {
                trigger: container,
                pin: true,
                scrub: 1,
                end: () => `+=${container.offsetWidth}`,
            }
        })
    }
})