'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e64e45909941a7a2fdf83c4a124160d3",
"assets/assets/arduino.jpg": "317f3a421da66298e1a796e4a5891b11",
"assets/assets/ART/ART%25202022.png": "83dc3c7b71155f35a51e8efb60dfb989",
"assets/assets/ART/ART.jpg": "624d2db8a18148db9e69983a457c4e69",
"assets/assets/ART/Art2021.png": "2c2012d0f0f898e435dde37367b702b4",
"assets/assets/ART/Art2023.png": "da9e17a7a67aeeb0859984dd0fd0205d",
"assets/assets/BOOTCAMP/Bootcamp2019.jpg": "b6a317d0915f1f33a29687f787ffb79c",
"assets/assets/BOOTCAMP/Bootcamp2020.jpg": "b98a06cb53f2b814eed86833417530fd",
"assets/assets/BOOTCAMP/Bootcamp2021.png": "1710836f7718ba31bcd467868c26f699",
"assets/assets/BOOTCAMP/bootcamp2022-.jpg": "317f3a421da66298e1a796e4a5891b11",
"assets/assets/BOOTCAMP/bootcamp2022.png": "1f38332f7532cca01b9ab8995d667241",
"assets/assets/circuit-board.png": "eb93fb6ae66f43fc4d5dbf97c192d8ff",
"assets/assets/HolyTech/HolyTech2017-.jpg": "c5dfa9bc200f9e86975b3d8116e450c5",
"assets/assets/HolyTech/HolyTech2017.jpg": "99894a90b63d9aa0eace7db16ecd42cc",
"assets/assets/HolyTech/HolyTech2018-.jpg": "629eeab7227199187fbe3858f321a06e",
"assets/assets/HolyTech/HolyTech2018.jpg": "27bf21e564916e6f99df13de94e009e4",
"assets/assets/HolyTech/HolyTech2021--.png": "c07b16db0e7cbad272ab8f23585df518",
"assets/assets/HolyTech/HolyTech2021.png": "c07b16db0e7cbad272ab8f23585df518",
"assets/assets/HolyTech/HolyTeck2021-.jpg": "7c79a4c49e2ce27328d1690d767c0cdf",
"assets/assets/HT.jpg": "e48f00a1db66b40134185fd58507ad7d",
"assets/assets/IMG_0792.JPG": "41abe4df282884857c26fe60d359c89e",
"assets/assets/interaction.gif": "d28c961680117077b214ae4ea405a9d7",
"assets/assets/Projects/Project1.png": "0b1f679779a031edb24182bab761332c",
"assets/assets/Projects/Project2.png": "d3eb6dc121847043812b9d5dc5d4d40f",
"assets/assets/Projects/Project3.png": "ca6180f835651c2d8639bd0efb4021ab",
"assets/assets/Projects/Project4.png": "8b5e1c4ec1f47422f98869217b6d9368",
"assets/assets/Projects/Project5.png": "6a2af518c984dddc8c91dcc07685c6ac",
"assets/assets/Projects/Project6.png": "ce768dbb80ac4f6f1df0abf4f3d3b8b7",
"assets/assets/Projects/Project7.png": "f4cbed56e76cfaf2f89ab99194894c39",
"assets/assets/Projects/Project8.png": "48c45e79245cd7b73319b104c3eb33e0",
"assets/assets/Projects/Project9.png": "58d344eae25bd7c8ef0d3939e476b8c1",
"assets/assets/Timeline-01.png": "998cfededd6a48862007563ddb173555",
"assets/assets/WAMEEDH/1%2520-%2520Copy.png": "52cd29f25d62b683806f4ae9b8d5a981",
"assets/assets/WAMEEDH/2%2520-%2520Copy.png": "afa21d5d3448f0fd5b967c18328f3d0c",
"assets/assets/WAMEEDH/W.png": "312d0b8068c32ef97440c8a19c99c308",
"assets/assets/WAMEEDH/Wa%2520-%2520Copy.png": "fc0b1f2afbdceff4251bdba2656cc2f8",
"assets/assets/WAMEEDH/wmd-logo.png": "918c978a769a48df6e1d9921945565f0",
"assets/assets/WORKSHOPS/beyond%2520arduino.jpg": "8775a673b299968a1740b0aec2ccd0bb",
"assets/assets/WORKSHOPS/deep%2520learning.jpg": "253a71938faabad17ad91ca59c0ebfb3",
"assets/assets/WORKSHOPS/internet%2520of%2520things.jpg": "133edd09f2f736929dfe9cf8d3a17d51",
"assets/assets/WORKSHOPS/python.jpg": "470527492f9f98b321a634acef08f2ea",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "30b8b49a56d658cd186c1e3b589fa1dc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a9d119b8a6ad5aebda03c2557f7b67df",
"/": "a9d119b8a6ad5aebda03c2557f7b67df",
"main.dart.js": "4766f97254f2be835b8b6a5e73389348",
"manifest.json": "7a5ccb24a182d94dddebdb09a296e521",
"splash/img/dark-1x.png": "eab9d61d49c2bd26f8a7c3b42792b8f2",
"splash/img/dark-2x.png": "3ea596a5fde258bcf1276a792115459a",
"splash/img/dark-3x.png": "9da6131b18a043ff20bbebd980c8a29b",
"splash/img/dark-4x.png": "b245a7f3382f57b6edb3fc815c3a3818",
"splash/img/light-1x.png": "eab9d61d49c2bd26f8a7c3b42792b8f2",
"splash/img/light-2x.png": "3ea596a5fde258bcf1276a792115459a",
"splash/img/light-3x.png": "9da6131b18a043ff20bbebd980c8a29b",
"splash/img/light-4x.png": "b245a7f3382f57b6edb3fc815c3a3818",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "6bea61442487cc67a85d55056fa19a29",
"version.json": "980547175e325fe622a3362b84d55b6a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
