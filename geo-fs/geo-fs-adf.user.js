// ==UserScript==
// @name         GeoFS - Smart ADF Injector
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Safely adds the built-in ADF instrument if it is not already present in the aircraft's panel.
// @author       You
// @match        https://www.geo-fs.com/geofs.php*
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setInterval(function() {
        // Check if the ADF DOM element is missing
        var fullPanel = Object.assign({}, geofs.aircraft.instance.definition.instruments);
        if (!document.querySelector('[style*="images/instruments/rmi"]')) {
//        if (!fullPanel["rmi"]) {
            console.log(fullPanel)
            //console.log(JSON.parse(JSON.stringify(compassOverlay)))
            // 1. Clone the active aircraft's default instruments layout
            //var fullPanel = Object.assign({}, geofs.aircraft.instance.definition.instruments);

            // 2. Add the built-in ADF module definition safely to the layout
            fullPanel["rmi"] = {
                id: "rmi",
                definition: instruments.definitions.rmi, // Loads the existing code found in geofs.js
                //overlay: JSON.parse(JSON.stringify(compassOverlay))
                //{
                    //alignment: { x: "right", y: "bottom" },
                    //position: { x: 10, y: 170 }, // Placed to avoid stacking on other standard instruments
                    //size: 180
                //}
            };
            /*fullPanel["cdi"] = {
                id: "cdi",
                definition: instruments.definitions.cdi, // Loads the existing code found in geofs.js
            };
            fullPanel["hsi"] = {
                id: "hsi",
                definition: instruments.definitions.hsi, // Loads the existing code found in geofs.js
            };*/

            // 3. Re-initialize the dashboard with the combined instruments map
            instruments.init(fullPanel);

            // 4. Send the runtime variables to force a fresh render frame
            instruments.update(geofs.aircraft.instance.vitals);

            console.log("ADF injected successfully.");
        }
    }, 2000); // Checks the DOM every 2 seconds
    setTimeout(() => {

        // Compass layer to copy position from
        const compass = [...document.querySelectorAll("div")]
        .find(el => el.style.backgroundImage?.includes("compass"));

        if (!compass) return;

        // ALL RMI layers
        const rmis = [...document.querySelectorAll("div")]
        .filter(el => el.style.backgroundImage?.includes("images/instruments/rmi"));

        console.log(rmis);

        rmis.forEach(rmi => {

            rmi.style.position = "absolute";

            // Copy compass placement
            rmi.style.left = compass.style.left;
            rmi.style.top = compass.style.top;

            // Optional size sync
            rmi.style.width = compass.style.width;
            rmi.style.height = compass.style.height;

            // Above compass
            rmi.style.zIndex = "9999";
        });

    }, 210000);
    function syncRMItoCompass() {

        const compass = [...document.querySelectorAll("div")]
        .find(el => el.style.backgroundImage?.includes("compass"));

        const rmis = [...document.querySelectorAll("div")]
        .filter(el => el.style.backgroundImage?.includes("images/instruments/rmi"));

        if (!compass || !rmis.length) return;

        const cs = getComputedStyle(compass);

        const targetLeft = cs.left;
        const targetTop = cs.top;
        const targetTransform = cs.transform;
        const targetZ = "9999";

        rmis.forEach(rmi => {

            // only update if not already in sync
            const style = rmi.style;

            const outOfSync =
                  style.left !== targetLeft ||
                  style.top !== targetTop ||
                  style.transform !== targetTransform ||
                  style.zIndex !== targetZ;

            if (!outOfSync) return;

            style.position = "absolute";
            style.left = targetLeft;
            style.top = targetTop;
            //style.transform = targetTransform;
            style.zIndex = targetZ;
            // ---- hide RMI cover (same element group) ----
            const parent = rmi.closest("div")?.parentElement || document;

            parent.querySelectorAll("div").forEach(el => {
                if (
                    el.style.backgroundImage?.includes("images/instruments/rmi/cover.png")
                ) {
                    el.style.display = "none";
                }
            });
        });
    }

    setInterval(syncRMItoCompass, 100);


    function hideRMIBackground() {

        const rmiNeedles = [...document.querySelectorAll("div")]
        .filter(el => el.style.backgroundImage?.includes("images/instruments/rmi"));

        if (!rmiNeedles.length) return;

        rmiNeedles.forEach(rmi => {

            const parent = rmi.closest(".geofs-overlay");
            if (!parent) return;

            const bg = parent.previousElementSibling;

            if (
                bg &&
                bg.classList.contains("geofs-instrument-background") &&
                bg.style.backgroundImage?.includes("background.png")
            ) {
                bg.style.display = "none";
            }
        });
    }

    setInterval(hideRMIBackground, 200);
})();


/*
// 1. Clone the active aircraft's default instruments layout
var fullPanel = Object.assign({}, geofs.aircraft.instance.definition.instruments);

// 2. Add the built-in ADF module definition safely to the layout
fullPanel["adf"] = {
    id: "adf",
    definition: instruments.definitions.adf, // Loads the existing code found in geofs.js
    overlay: {
        alignment: { x: "right", y: "bottom" },
        position: { x: 10, y: 170 }, // Placed to avoid stacking on other standard instruments
        size: 180
    }
};

// 3. Re-initialize the dashboard with the combined instruments map
instruments.init(fullPanel);

// 4. Send the runtime variables to force a fresh render frame
instruments.update(geofs.aircraft.instance.vitals);

*/
