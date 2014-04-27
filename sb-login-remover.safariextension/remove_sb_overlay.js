

function removeOverlay() {
    document.querySelector("#aid-overlay").remove()
    document.querySelector("#aid-container").remove()
    console.log("Removed AID overlay")
}

console.log("script started")
    
window.setTimeout(removeOverlay, 300);

