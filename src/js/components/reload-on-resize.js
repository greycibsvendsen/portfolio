/* Reload website between devices type: laptop and mobile (840)
   ========================================================================== */


/**
 * Set device screen width on page load
 */
$(function(){
   var windowWidth = $(window).width()

   $("body").attr("page-width", windowWidth)
})


/**
 * Check device screen width on window resize
 * and reload between devices type (840 px)
 */
addEventListener("resize", (event) => {
   var windowWidth     = $(window).width()
   var windowLoadWidth = $("body").attr("page-width")

   if (windowLoadWidth>840 && (windowWidth<840 || windowWidth==840))
   {
      location.reload()
   }
   else if (windowLoadWidth<840 && (windowWidth>840 || windowWidth==840))
   {
      location.reload()
   }
   else if (windowLoadWidth==840 && (windowWidth>840 || windowWidth==840)){
      location.reload()
   }
})