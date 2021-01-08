const site_name = "pwa_projet";
const assets = ["pwa.html", "pwa.css", "pwa.js"];

self.addEventListener("install", (installEvent) => {
    installEvent.waitUntil(
        caches.open(site_name).then((cache) => {
            cache.addAll(assets);
        })
    );
});

self.addEventListener("fetch", (fetchEvent) => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then((res) => {
            return res || fetch(fetchEvent.request);
        })
    );
});
