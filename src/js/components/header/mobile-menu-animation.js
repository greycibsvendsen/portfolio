/* Header - mobile menu animation
   ========================================================================== */

import gsap from "gsap"

/**
 * Open mobile menu animation
 */
export function openMobileMenuAnimation(){
    var tl = gsap.timeline({
        defaults:{
            ease: "Sine.easeOut"
        }
    })

    // hide page content
    $("body").addClass("no-scroll")
    tl.to(".app", {x: "15%", opacity: 0, duration: .8})

    // show menu
    tl.to(".mob-menu", {x: 0, duration: .8}, "<")
}


/**
 * Close mobile menu animation
 */
export function closeMobileMenuAnimation(){
    var tl = gsap.timeline({
        defaults:{
            ease: "Sine.easeOut"
        }
    })

    // show menu links
    tl.to(".mob-menu", {x: "100%", duration: .8})
    tl.to(".app", {x: 0, opacity: 1, duration: .8}, "<")

    // add animation ending class
    tl.add(function(){
        $(".header__burger").removeClass("active")
        $("body").removeClass("no-scroll")
    }, ".8")
}