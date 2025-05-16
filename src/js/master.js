console.log("master.js loaded");

function loadScript(url) {
    let script = document.createElement("script");
    script.src = url;
    script.type = "text/javascript";
    document.head.appendChild(script);
}

// Load additional JS files
loadScript("game1.js");
console.log("master.js sent a loadScript request for game1.js");
loadScript("src/apps/annoyingFox/foxGame.js");
console.log("master.js sent a loadScript request for foxGame.js");