const CACHE='jade-university-v0.1';
const ASSETS=['index.html','learn.html','study.html','practice.html','progress.html','resources.html','glossary.html','about.html','styles.css','curriculum.js','glossary-data.js','app.js','assets/brand/crest.png','assets/brand/seal.png','assets/brand/wordmark-horizontal.png','assets/brand/wordmark-stacked.png','assets/brand/monogram.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
