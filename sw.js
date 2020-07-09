/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-d662d938ea07bba871f7.js"
  },
  {
    "url": "framework-fc8605b4487ac0bb45bc.js"
  },
  {
    "url": "app-e60b0fe7aa311807cfec.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "936ce0880482ebe7218896dbd07a6515"
  },
  {
    "url": "google-fonts/s/juliussansone/v8/1Pt2g8TAX_SGgBGUi0tGOYEga5WOwnsX.woff2",
    "revision": "cfdae712dfd393ac61f0245c0fb7d9c6"
  },
  {
    "url": "google-fonts/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_aZA3gnD_g.woff2",
    "revision": "85d5ef9db7f2dc6979172a4a3b2c57cb"
  },
  {
    "url": "google-fonts/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_cJD3gnD_g.woff2",
    "revision": "7c3daf12b706645b5d3710f863a4da04"
  },
  {
    "url": "google-fonts/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_ZpC3gnD_g.woff2",
    "revision": "92d16e458625f4d2c8940f6bdca0ff09"
  },
  {
    "url": "google-fonts/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2",
    "revision": "bc3aa95dca08f5fee5291e34959c27bc"
  },
  {
    "url": "google-fonts/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOUuhp.woff2",
    "revision": "0edb76284a7a0f8db4665b560ee2b48f"
  },
  {
    "url": "google-fonts/s/opensans/v17/mem5YaGs126MiZpBA-UNirkOUuhp.woff2",
    "revision": "819af3d3abdc9f135d49b80a91e2ff4c"
  },
  {
    "url": "google-fonts/s/opensans/v17/mem5YaGs126MiZpBA-UN_r8OUuhp.woff2",
    "revision": "24f7b0944e9e03a905f9d7701573b2cd"
  },
  {
    "url": "google-fonts/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0b.woff2",
    "revision": "33543c5cc5d88f5695dd08c87d280dfd"
  },
  {
    "url": "google-fonts/s/patuaone/v10/ZXuke1cDvLCKLDcimxB44_lu.woff2",
    "revision": "95e3e75c69bd36dae9650e8047f2f32e"
  },
  {
    "url": "google-fonts/s/raleway/v14/1Ptrg8zYS_SKggPNwIYqWqZPAA.woff2",
    "revision": "d724dad2e61905f488d048e51d45ae3e"
  },
  {
    "url": "google-fonts/s/raleway/v14/1Ptrg8zYS_SKggPNwJYtWqZPAA.woff2",
    "revision": "77d77f36bed0a452984832f6b5f22e3f"
  },
  {
    "url": "google-fonts/s/raleway/v14/1Ptrg8zYS_SKggPNwOIpWqZPAA.woff2",
    "revision": "3fef5ebed6aa72326bf742645ba8a331"
  },
  {
    "url": "google-fonts/s/raleway/v14/1Ptrg8zYS_SKggPNwPIsWqZPAA.woff2",
    "revision": "911d926608ce81ca8d62e74b7d09d276"
  },
  {
    "url": "google-fonts/s/raleway/v14/1Ptug8zYS_SKggPNyC0ITw.woff2",
    "revision": "43c849ea0258ce0d23a480e840881f16"
  },
  {
    "url": "google-fonts/s/raleway/v16/1Ptrg8zYS_SKggPNwIYqWqZPAA.woff2",
    "revision": "d724dad2e61905f488d048e51d45ae3e"
  },
  {
    "url": "google-fonts/s/raleway/v16/1Ptrg8zYS_SKggPNwJYtWqZPAA.woff2",
    "revision": "77d77f36bed0a452984832f6b5f22e3f"
  },
  {
    "url": "google-fonts/s/raleway/v16/1Ptrg8zYS_SKggPNwOIpWqZPAA.woff2",
    "revision": "3fef5ebed6aa72326bf742645ba8a331"
  },
  {
    "url": "google-fonts/s/raleway/v16/1Ptrg8zYS_SKggPNwPIsWqZPAA.woff2",
    "revision": "911d926608ce81ca8d62e74b7d09d276"
  },
  {
    "url": "google-fonts/s/raleway/v16/1Ptug8zYS_SKggPNyC0ITw.woff2",
    "revision": "43c849ea0258ce0d23a480e840881f16"
  },
  {
    "url": "google-fonts/s/salsa/v9/gNMKW3FiRpKj-hmf-HY.woff2",
    "revision": "281a1d85c8866fb591aea2470cd419a0"
  },
  {
    "url": "google-fonts/s/sourcesanspro/v13/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7l.woff2",
    "revision": "899c8f78ce650d4009d42443897aa723"
  },
  {
    "url": "google-fonts/s/sourcesanspro/v13/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rwlxdu.woff2",
    "revision": "c85615b296302af51e683eecb5e371d4"
  },
  {
    "url": "google-fonts/s/sourcesanspro/v13/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwlxdu.woff2",
    "revision": "1a4bcb3ec9c508d478d4dbf6b56f6208"
  },
  {
    "url": "google-fonts/s/sourcesanspro/v13/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwlxdu.woff2",
    "revision": "ede18477b85a5d781cd2f4001ecc5e67"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-4ded85b782482dc4ea16.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "6e122879c3714575fcd1e9753e79c8c6"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "e25640e723ea51b394b0ce1dd16367dc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^/Portfolio`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/Portfolio/app-e60b0fe7aa311807cfec.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/Portfolio/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
