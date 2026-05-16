javascript:(function(){
    const scripts=[
        "https://github.com/juliancastroorozco/juliancastroorozco.github.io/raw/refs/heads/main/geo-fs/geo-fs-adf.user.js",
        "https://github.com/juliancastroorozco/juliancastroorozco.github.io/raw/refs/heads/main/geo-fs/geo-fs-eta.user.js",
        "https://github.com/juliancastroorozco/geo-fs-GeoFS-Minimap/raw/refs/heads/main/geo-fs-GeoFS-Minimap.user.js",
        "https://greasyfork.org/scripts/485670/code/Better%20Resolution%20Terrain.user.js?version=latest",
        "https://rawcdn.githack.com/af267/GeoFS-Extra-Vehicles/refs/heads/main/main.js"
    ];
    scripts.forEach(u=>{
        const s=document.createElement("script");
        s.src=u;
        s.async=false;
        document.head.appendChild(s);
    });
})();
