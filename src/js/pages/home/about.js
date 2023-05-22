/* Home page - about section
========================================================================== */

import gsap from "gsap"
import scrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(scrollTrigger)


/**
 * Home about
 */
$(function(){
    if ( $(".home-about").length )
    {
        gsap.to(".home-about__section-title",
        {
            scrollTrigger: 
            {
                trigger: ".home-about",
                start  : '30% 80%',
                end    : "50% center",
                scrub  : true,
                markers: true
            },
            y: '0',
            ease: 'none'
        })
    }
})