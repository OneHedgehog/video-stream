const STATIC_CACHE_VERSION = 1;
const STATIC_CACHE_NAME = `video-stream-static-cache-${STATIC_CACHE_VERSION}`;

const STATIC_CACHE_FILES = [
    '/'
];

self.addEventListener('install', workerEvent => {
   addStaticToCache = async () => {
       try {
           const cache = await  caches.open(STATIC_CACHE_NAME);
           cache.addAll(STATIC_CACHE_FILES);
           console.log("jkjkjk");
       } catch (e) {
           console.error('Service worker sw.js', 'failed add static files to cache due following reason', e);
       }

   };
    workerEvent.waitUntil(addStaticToCache());
});

self.addEventListener('activate', workerEvent => {
    //use service worker without page reload
    workerEvent.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', workerEvent => {
    const getStaticCacheResponse = async () => await caches.match(workerEvent.request);

    const fetchResponseAndPutToCache = async () => {
        try {
            const response = await fetch(workerEvent.request);

            if(response.status > 300) return response;

            const cache = await caches.open(STATIC_CACHE_NAME);
            cache.put(workerEvent.request, response.clone());
        } catch (e) {
            console.log('Service worker sw.js', `Failed to put ${workerEvent.request} to static cache`, e)
        }
    };

    const fetchWithWorker = async () => await  getStaticCacheResponse() || await fetchResponseAndPutToCache();

    workerEvent.respondWith(fetchWithWorker());
});


