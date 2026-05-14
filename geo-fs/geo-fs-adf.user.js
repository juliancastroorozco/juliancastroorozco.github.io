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
        if (!document.querySelector('[style*="images/instruments/adf/cover.png"]')) {

            // 1. Clone the active aircraft's default instruments layout
            var fullPanel = Object.assign({}, geofs.aircraft.instance.definition.instruments);

            // 2. Add the built-in ADF module definition safely to the layout
            fullPanel["adf"] = {
                id: "adf",
                definition: instruments.definitions.adf, // Loads the existing code found in geofs.js
/*                overlay: {
                    alignment: { x: "right", y: "bottom" },
                    position: { x: 10, y: 170 }, // Placed to avoid stacking on other standard instruments
                    size: 180
                }*/
            };

            // 3. Re-initialize the dashboard with the combined instruments map
            instruments.init(fullPanel);

            // 4. Send the runtime variables to force a fresh render frame
            instruments.update(geofs.aircraft.instance.vitals);

            console.log("ADF injected successfully.");
        }
    }, 2000); // Checks the DOM every 2 seconds
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
