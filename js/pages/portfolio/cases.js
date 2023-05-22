/* Portfolio page - cases section
========================================================================== */

/**
 * Make the case image active on case links mouseover
 */
$(".portfolio-cases__item-title, .portfolio-cases__item-btn").on("mouseover", function()
{
    var item = $(this).closest(".portfolio-cases__item")
    var itemImg = $(item).find(".portfolio-cases__item-img")

    $(itemImg).addClass("active")
})
$(".portfolio-cases__item-title, .portfolio-cases__item-btn").on("mouseout", function()
{
    $(".portfolio-cases__item-img").removeClass("active")
})