self.addEventListener("install", e=> {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(
                [
                    // pages
                    "./",
                    "./index.html",
                    "./horz_scrollDemo.html",
                    "./loco/index.html",
                    // JS releated
                    "./manifest.json",
                    "./js/jquery.min.js",
                    // CSS
                    "./css/styles.css",
                    "./css/horz_scrollDemo.css",
                    "./css/hScrollDemo.reset.min.css",
                    "./css/hScrollDemo.basscss.min.css",
                    "./css/hScrollDemo.cssFamily=Heebo.css",
                    // FONT
                    "./css/hebrewLatin.woff2", 
                    // IMGs
                    "./img/favicon.ico",
                    "./img/logoLB_192px.png",
                    "./img/logoLB_512px.png",
                    "./img/DSC09160_ps.jpg",
                    "./img/DSC09022_psPano.jpg",
                    "./img/DSC08241_ps_pano.jpg",
                    "./img/IMG_0228_ps.jpg",
                    "./img/landscapes/IMG01140_ps.jpg",
                    "./img/landscapes/IMG02258-Pano.jpg",
                    "./img/landscapes/IMG00760_ps.jpeg",
                    "./img/landscapes/DSC03881_ps.jpeg",
                    "./img/landscapes/IMG_0225_ps2.jpeg",
                    "./img/landscapes/IMG_5686_lowQ.jpeg",
                    "./img/landscapes/IMG_7795_lowQ.jpeg",
                    "./img/landscapes/IMG_9406_edit2020.jpeg",
                    "./img/landscapes/DSC03371_ps.jpeg",
                    "./img/landscapes/DSC02367_ps.webp",
                    "./img/landscapes/DSC02385_ps.webp",
                    "./img/landscapes/DSC02394_ps.webp",
                    "./img/landscapes/DSC02408_ps.webp",
                    "./img/landscapes/DSC02427_psbw.webp",
                ]);
        })
    );
    //console.log("Installato SW");
});

self.addEventListener("fetch", e=>{
    //console.log(`intercept fetch reequest for: ${e.request.url}`);
    e.respondWith(
        caches.match(e.request).then(response=>{
            return response || fetch(e.request);
        })
    );
});
