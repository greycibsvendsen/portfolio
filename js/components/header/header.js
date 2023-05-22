/* Header
   ========================================================================== */

import gsap from "gsap"
import {openLaptopMenuAnimation, closeLaptopMenuAnimation} from "./laptop-menu-animation"
import {closeMobileMenuAnimation, openMobileMenuAnimation} from "./mobile-menu-animation"


/**
 * Open menu in header - burger button click
 */
$(document).on("click", ".header__burger:not(.active, .opened)", function(e){
    e.preventDefault()

    // check if menu is open
    if ($(this).hasClass("active") || $(this).hasClass("opened")) return true
    else{
        $(this).addClass("active")
    }


    // check the device width
    if ($(window).width() > 840) openLaptopMenuAnimation()
    else{
        openMobileMenuAnimation()
    }
})


/**
 * Close menu in header - burger button click
 */
$(document).on("click", ".header__burger.active.opened", function(e){
    e.preventDefault()

    // check if menu is open
    if (!$(this).hasClass("active") || !$(this).hasClass("opened")) {
        return true 
    }
    else{
        $(".header__burger").removeClass("opened")
    }


    // check the device width
    if ($(window).width() > 840) closeLaptopMenuAnimation()
    else{
        closeMobileMenuAnimation()
    }
})


/**
 * Close menu in mobile menu - close icon click
 */
$(document).on("click", ".mob-menu__header-close-btn-area", function(e){
    e.preventDefault()

    closeMobileMenuAnimation()
})


/**
* Show and hide scroll
*/
var oldScrollY = window.scrollY
window.onscroll = function(e) {
    var newScrollY = window.scrollY

    if ( (oldScrollY > newScrollY) && (newScrollY > $(window).height()) ){
       $(".header_fixed").addClass("in-screen")
    }else{
        $(".header_fixed").removeClass("in-screen")
    }

    oldScrollY = newScrollY;
}