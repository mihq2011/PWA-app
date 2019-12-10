//Install service worker
self.addEventListener('install', evt => {
    console.log('service worker is installed');
});

//Activate Event
self.addEventListener('activate', evt => {
    console.log('service worker has been activated');
});