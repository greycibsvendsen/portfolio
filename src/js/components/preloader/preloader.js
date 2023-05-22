/* Preloader
   ========================================================================== */

import {waitForElement} from "../../utils/wait-for-element"
import gsap from "gsap"
import Typed from "typed.js"


/**
 * Preloader logic
 */
waitForElement(".preloader", 0).then(function(){

   // set random margin left of preloader logo overlay
   var randomLeft = gsap.utils.random(40, 80)
   gsap.to(".preloader__logo-overlay", {ease: "SlowMo.ease.config(0.7 0.7, 0.7 0.7, false)", left: randomLeft+"%", duration: .6})

   // run final preloader animation after page loaded
   var timer = setInterval(function()
   {
      if (document.readyState === "complete")
      {
         clearInterval(timer)

         // hide preloader
         var tl = gsap.timeline({defaults:{ease: 'SlowMo.ease.config(0.7 0.7, 0.7 0.7, false)'}})
         tl.to(".preloader__logo-overlay", {left: "100%", duration: .6})
         tl.to(".preloader__logo-wrapper", {x: "100%", duration: .6})
         tl.to(".preloader", {
            y       : "-100%",
            duration: .8,
            onStart: function(){
               $(".page-preloader-section").addClass("after-preloader-animation")
            },
            onComplete: function(){
               $("body").removeClass("no-scroll loading")
               $(".prealoader").remove()

               // additional homepage hero title animation
               if ($("body[data-page=home]").length){
                  // alert("homepage")
                  const typed = new Typed('.home-hero__title-animation', {
                    strings   : ["Hello I'm <br>Greyci Svendsen"],
                    typeSpeed : 50,
                    showCursor: false,
                    onComplete: function(){
                        $(".home-hero__title-bg-line").addClass("animated")
                    }
                  });
               }
            }
         })
      }
   }, 10)
})