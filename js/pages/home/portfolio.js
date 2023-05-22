/* Home page - portfolio section
========================================================================== */

/**
 * Mark as active portfolio item on hover
 */
var casesItemLinks = $(".home-portfolio__cases-item-img-overlay, .home-portfolio__cases-item-title, .home-portfolio__cases-item-btn")

$(casesItemLinks).on("mouseover", function()
{
    var item = $(this).closest(".home-portfolio__cases-item")
    $(item).addClass("active")
})
$(casesItemLinks).on("mouseout", function()
{
    $(".home-portfolio__cases-item").removeClass("active")
})