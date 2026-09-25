const CACHE='jade-university-v0.2.0';
const APP_SHELL=[
  'index.html','learn.html','study.html','practice.html','progress.html','resources.html','glossary.html','about.html',
  'styles.css','curriculum.js','glossary-data.js','resources-data.js','app.js','manifest.webmanifest',
  'icon-180.png','icon-192.png','icon-512.png'
];

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(APP_SHELL)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET') return;
  const url=new URL(req.url);
  if(url.origin!==self.location.origin) return;

  if(req.mode==='navigate'){
    event.respondWith(
      fetch(req)
        .then(res=>{const copy=res.clone();caches.open(CACHE).then(c=>c.put(req,copy));return res})
        .catch(()=>caches.match(req).then(hit=>hit||caches.match('index.html')))
    );
    return;
  }

  event.respondWith(
    caches.match(req).then(hit=>{
      const network=fetch(req).then(res=>{
        if(res&&res.ok){const copy=res.clone();caches.open(CACHE).then(c=>c.put(req,copy))}
        return res;
      }).catch(()=>hit);
      return hit||network;
    })
  );
});
