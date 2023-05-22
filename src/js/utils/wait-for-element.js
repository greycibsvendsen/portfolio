/* Check if element is loaded
   ========================================================================== */

/**
 * Wait for an element before resolving a promise
 * @param {String} querySelector - Selector of element to wait for
 * @param {Integer} timeout - Milliseconds to wait before timing out, or 0 for no timeout              
 */
export function waitForElement(querySelector, timeout){
    return new Promise((resolve, reject)=>{
        var timer = false;
        if(document.querySelectorAll(querySelector).length) return resolve();
        const observer = new MutationObserver(()=>{
        if(document.querySelectorAll(querySelector).length){
            observer.disconnect();
            if(timer !== false) clearTimeout(timer);
            return resolve();
        }
    });
    observer.observe(document.body, {
        childList: true, 
        subtree: true
    });
    if(timeout) timer = setTimeout(()=>{
            observer.disconnect();
            reject();
        }, timeout);
    });
}