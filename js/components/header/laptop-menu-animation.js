/* Header - laptop menu animation
   ========================================================================== */

import gsap from "gsap"

/**
 * Open laptop menu animation
 */
export function openLaptopMenuAnimation(){
    var tl = gsap.timeline({
        defaults:{
            ease: "Sine.easeOut"
        }
    })

    // show menu links
    tl.to(".header__menu", {x: 0, y: 0, opacity: 1, duration: .8})

    // hide burger line
    tl.to(".header__burger-line:nth-child(1)", {y: "9.5px", duration: .4}, "<")
    tl.to(".header__burger-line:nth-child(2)", {opacity: 0, duration: .4}, "<")
    tl.to(".header__burger-line:nth-child(3)", {y: "-9.5px", duration: .4}, "<")

    // transform burger lines into close icon
    tl.to(".header__burger-line:nth-child(1)", {rotate: "-45px", duration: .4}, ".4")
    tl.to(".header__burger-line:nth-child(3)", {rotate: "45px", duration: .4}, ".4")

    // add animation ending class
    tl.add(function(){
        $(".header__burger").addClass("opened")
    }, "1")
}


/**
 * Close laptop menu animation
 */
export function closeLaptopMenuAnimation(){
    var tl = gsap.timeline({
        defaults:{
            ease: "Sine.easeOut"
        }
    })

    // transform burger close icon into lines
    tl.to(".header__burger-line:nth-child(1)", {rotate: "0", duration: .4}, ".4")
    tl.to(".header__burger-line:nth-child(3)", {rotate: "0", duration: .4}, ".4")

    // show burger lines
    tl.to(".header__burger-line:nth-child(1)", {y: "0", duration: .4}, ".8")
    tl.to(".header__burger-line:nth-child(2)", {opacity: 1, duration: .4}, ".8")
    tl.to(".header__burger-line:nth-child(3)", {y: "0", duration: .4}, ".8")

    // show menu links
    if ($(".header__burger").closest(".header").hasClass("header_home-page"))
    {
        tl.to(".header__menu", {y: "6px", opacity: 0, duration: .8}, ".4")
    }
    else{
        tl.to(".header__menu", {x: "100%", duration: .8}, ".4")
    }

    // add animation ending class
    tl.add(function(){
        $(".header__burger").removeClass("active")
    }, "1.2")
}