/* Start page from top on page reload
   ========================================================================== */

if (history.scrollRestoration){
    // history.scrollRestoration = "manual"
    history.scrollRestoration = "auto"
}
// else{
//     window.onbeforeunload = function(){
//         window.scrollTo(0, 0)
//     }
// }