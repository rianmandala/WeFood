const { default: CONFIG } = require('./globals/config');

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

workbox.routing.registerRoute(
  ({ url }) => url.origin === CONFIG.BASE_URL,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'dicoding-restaurant-api',
  }),
);
