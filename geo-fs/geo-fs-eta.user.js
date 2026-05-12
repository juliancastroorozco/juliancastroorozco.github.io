// ==UserScript==
// @name         Geo-fs ETA calculator
// @namespace    http://tampermonkey.net/
// @version      2026-05-12
// @description  try to take over the world!
// @author       You
// @match        https://www.geo-fs.com/geofs.php?v=3.9
// @icon         https://www.google.com/s2/favicons?sz=64&domain=geo-fs.com
// @grant        none
// ==/UserScript==

// GeoFS ETA HUD using trackedWaypoint.ident

// GeoFS Draggable ETA HUD
// Remembers position using localStorage

(() => {

    const STORAGE_KEY = "geofs_eta_hud_position";

    document.getElementById("etaBox")?.remove();

    const box = document.createElement("div");
    box.id = "etaBox";

    // Load saved position
    const saved = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "{}"
    );

    box.style.cssText = `
        position:fixed;
        top:${saved.top || 20}px;
        right:auto;
        left:${saved.left || window.innerWidth - 220}px;
        background:rgba(0,0,0,0.82);
        color:#00ff66;
        padding:12px;
        font-family:monospace;
        font-size:14px;
        border:1px solid #00ff66;
        border-radius:6px;
        z-index:999999;
        min-width:180px;
        line-height:1.45;
        cursor:move;
        user-select:none;
    `;

    document.body.appendChild(box);

    // -------------------------
    // Distance function
    // -------------------------

    function distanceNM(lat1, lon1, lat2, lon2) {

        const R = 3440.065;

        const toRad = d => d * Math.PI / 180;

        const dLat = toRad(lat2 - lat1);
        const dLon = toRad(lon2 - lon1);

        const a =
            Math.sin(dLat / 2) ** 2 +
            Math.cos(toRad(lat1)) *
            Math.cos(toRad(lat2)) *
            Math.sin(dLon / 2) ** 2;

        return 2 * R * Math.atan2(
            Math.sqrt(a),
            Math.sqrt(1 - a)
        );
    }

    // -------------------------
    // ETA updater
    // -------------------------

    function updateETA() {

        const aircraft = window.geofs?.aircraft?.instance;
        const wp = window.geofs?.flightPlan?.trackedWaypoint;

        if (!aircraft || !wp) {
            box.innerHTML = "NO ACTIVE WAYPOINT";
            return;
        }

        const [lat, lon] = aircraft.llaLocation;

        const gs = aircraft.groundSpeed * 1.94384;

        const dist = distanceNM(
            lat,
            lon,
            wp.lat,
            wp.lon
        );

        const hours = dist / Math.max(gs, 1);

        const hrs = Math.floor(hours);
        const mins = Math.floor((hours - hrs) * 60);
        const secs = Math.floor((((hours - hrs) * 60) - mins) * 60);

        box.innerHTML = `
            <b>${wp.ident || "WPT"}</b><br>
            DIST ${dist.toFixed(1)} NM<br>
            GS ${gs.toFixed(0)} KT<br>
            ETA ${hrs}h ${mins}m ${secs}s
        `;
    }

    // -------------------------
    // Dragging
    // -------------------------

    let dragging = false;
    let offsetX = 0;
    let offsetY = 0;

    box.addEventListener("mousedown", e => {

        dragging = true;

        offsetX = e.clientX - box.offsetLeft;
        offsetY = e.clientY - box.offsetTop;

        e.preventDefault();
    });

    document.addEventListener("mousemove", e => {

        if (!dragging) return;

        const left = e.clientX - offsetX;
        const top = e.clientY - offsetY;

        box.style.left = `${left}px`;
        box.style.top = `${top}px`;
    });

    document.addEventListener("mouseup", () => {

        if (!dragging) return;

        dragging = false;

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({
                left: box.offsetLeft,
                top: box.offsetTop
            })
        );
    });

    updateETA();
    setInterval(updateETA, 1000);

})();
