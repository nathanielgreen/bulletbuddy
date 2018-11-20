importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "bulletbuddy",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.4cff7c2b2fbcfe69ce9b.js",
    "revision": "0a555d964ad6667aa6ac2fc239d1f336"
  },
  {
    "url": "/_nuxt/layouts/default.96ba248ebc985893f7b0.js",
    "revision": "fa9ba7913263ba8e746b64bfb0365d73"
  },
  {
    "url": "/_nuxt/manifest.c93f7c5db8157cb5bc6f.js",
    "revision": "fc1838cf41aee24419f9b8c0e90a4656"
  },
  {
    "url": "/_nuxt/pages/add-new.b78f4e1b6bc7ce6e9d67.js",
    "revision": "c65e6533b8d58129b4ed6e68087a8961"
  },
  {
    "url": "/_nuxt/pages/index.51ec1daca8e1e4f3ef26.js",
    "revision": "ec19cc98584be6b056cf4e8c2a56e184"
  },
  {
    "url": "/_nuxt/pages/menu.88b360c8dd9e38ff6819.js",
    "revision": "0223dfe12a3ea8b9c6e0a41efe2db7fe"
  },
  {
    "url": "/_nuxt/pages/pages/_id.39635846bde8a2cdd135.js",
    "revision": "49b54cf601ae9cda14c317aa29560a31"
  },
  {
    "url": "/_nuxt/vendor.1f3c1930910317f5945f.js",
    "revision": "e96fed76aed707045c4e61c8f7582b22"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

