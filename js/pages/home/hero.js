/* Home page - hero section
========================================================================== */

/**
 * Home hero scroll down button animation
 */
$(document).on("click", ".home-hero__scroll-btn", function(e){
    e.preventDefault()

    var portfolioSection  = $(".home-portfolio__cases-grid").offset().top
        portfolioSection -= portfolioSection/100*6

    $("html, body").animate({
        scrollTop: portfolioSection
    }, "slow")
})