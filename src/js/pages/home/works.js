/* Home page - works section
========================================================================== */

import gsap from "gsap"
import owlCarousel from "owl.carousel"


/**
 * Works mobile slider
 */
$(function(){
    if ( $(".home-works").length )
    {
        // inizialize slider
        var owl = $(".home-works__slider .owl-carousel")
        owl.owlCarousel({
            items       : 1,
            loop        : true,
            margin      : 0,
            dots        : false,
            dragEndSpeed: 350,
            navSpeed    : 3500,
            onTranslate : hideSliderActivePaginationNumber,
            onTranslated: updateNumbersPagination,
            responsive: {
                0:{
                    stagePadding: 30
                },
                385:{
                    stagePadding: 40
                },
                460:{
                    stagePadding: 50
                },
                520:{
                    stagePadding: 60
                }
            }
        })
        // Go to the prev item
        $('.home-works__slider-btn.left').on("click", function(){
            owl.trigger('prev.owl.carousel', [350]);
        })
        // Go to the next item
        $('.home-works__slider-btn.right').on("click", function(){
            owl.trigger('next.owl.carousel', [350]);
        })    


        // hide slider active pagination number
        function hideSliderActivePaginationNumber(e){
            gsap.to(".home-works__slider-pagination-number.active",{duration: .2, y: "-100%", ease: 'sine.out'})
        }

        // update slider' numbers pagination
        function updateNumbersPagination(e){
            var paginationNumber  = $(".home-works__slider-pagination-number.active")
            var activeSlideNumber = $(owl).find(".owl-item.active .home-works__slider-img").attr("data-img")

            $(paginationNumber).html(activeSlideNumber)

            gsap.to($(paginationNumber),{duration: .15, y: "0", ease: 'sine.out'})
        }
    }
})