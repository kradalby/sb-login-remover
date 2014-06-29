

function removeOverlay() {
    document.querySelector("#aid-overlay").remove()
    document.querySelector("#aid-container").remove()
    console.log("Removed AID overlay")
}


console.log("script started")
    
var observer = new WebKitMutationObserver(function() {
    if (document.querySelector("#aid-overlay")) {
        removeOverlay();
    }
});

observer.observe(document, {childList: true, subtree: true});


