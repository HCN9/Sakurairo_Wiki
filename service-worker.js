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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "36e6a03c60b5ea057a9ea8fe62224f1c"
  },
  {
    "url": "about.html",
    "revision": "be04d6bdb18d0b3ead642b7b68b48389"
  },
  {
    "url": "assets/css/0.styles.48266c77.css",
    "revision": "6f124ac5000e343edbb1b0aeed792646"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f6595224.js",
    "revision": "e37dc304be7830235c451deb0a31baca"
  },
  {
    "url": "assets/js/11.377eaa22.js",
    "revision": "c9900891374867f2b960f847a9e48f72"
  },
  {
    "url": "assets/js/12.c75064f1.js",
    "revision": "ae0a4a91df6c8195b07c89e60cfbef1f"
  },
  {
    "url": "assets/js/13.c23d9012.js",
    "revision": "5a9b871d08107e30445e5622fa81c112"
  },
  {
    "url": "assets/js/14.33ce3230.js",
    "revision": "79219ff2d1ef3e8225ed5fe931c37913"
  },
  {
    "url": "assets/js/15.9a141626.js",
    "revision": "4f993e1b21af9085be7722d146c55ff6"
  },
  {
    "url": "assets/js/16.2a019961.js",
    "revision": "0139e1adf6e52f58e9ac44ecc905b7c1"
  },
  {
    "url": "assets/js/17.825b6a0c.js",
    "revision": "deab5fa7ea8d21f212209ad867814b8f"
  },
  {
    "url": "assets/js/18.ac1d9d89.js",
    "revision": "4e20ae4250929050713f75f926ce23ed"
  },
  {
    "url": "assets/js/19.73d2e05f.js",
    "revision": "e9459d8aed4343ac649c22cb8db52aed"
  },
  {
    "url": "assets/js/20.7f89054f.js",
    "revision": "6f66c90f6ee317f65c903a9932c9f010"
  },
  {
    "url": "assets/js/21.5a9c0659.js",
    "revision": "a18af3b44efe1aca1210825cc6ba4e88"
  },
  {
    "url": "assets/js/22.ed46af67.js",
    "revision": "e9cb0997ae994ef3d0e018a52ded2a61"
  },
  {
    "url": "assets/js/3.8e6f5365.js",
    "revision": "16a1c0f647518d0fb1ec079b4f9502b5"
  },
  {
    "url": "assets/js/4.59be25ad.js",
    "revision": "1208d49fcd8b18eac993531c687c1b24"
  },
  {
    "url": "assets/js/5.2590636f.js",
    "revision": "c3d3e20ab68b4b2299080b98c13f003e"
  },
  {
    "url": "assets/js/6.52c8b565.js",
    "revision": "f0cc344418bd1201da9b87b4845cc0df"
  },
  {
    "url": "assets/js/7.4f3910d8.js",
    "revision": "47d6998c4473a4ec8adc5b1b6b5e8e1e"
  },
  {
    "url": "assets/js/8.bac3baf7.js",
    "revision": "8b6aa11756356bb69fdc58af198f988d"
  },
  {
    "url": "assets/js/9.47377419.js",
    "revision": "6b319a05ea5aafb513881139cfc4cc2e"
  },
  {
    "url": "assets/js/app.75cc211e.js",
    "revision": "d9de075fd740675e8182b4fda14bd6a2"
  },
  {
    "url": "assets/js/vendors~docsearch.662ea70f.js",
    "revision": "46195b62fb196de7b91415b1a9873cf1"
  },
  {
    "url": "demo.html",
    "revision": "caaa95b611580983866620e7eed12827"
  },
  {
    "url": "guide/about.html",
    "revision": "dc03ca191cf68a4c61e38655e7f43f8f"
  },
  {
    "url": "guide/feedback.html",
    "revision": "95a1e19f2fbbf22aa7c0548ff34bb11e"
  },
  {
    "url": "guide/index.html",
    "revision": "6c4fe3c84619564effdbac2cadb05560"
  },
  {
    "url": "guide/webp.html",
    "revision": "bea0412eb25d2f0541c74f5a7f7b7c89"
  },
  {
    "url": "idc.html",
    "revision": "b0db4604b29652b8b00a080e5e12779e"
  },
  {
    "url": "img/index.gif",
    "revision": "e5b195f9745ee3b93ffef49002acbae6"
  },
  {
    "url": "img/logo.png",
    "revision": "eb3005fefdce0642b3a08d98aae96ce0"
  },
  {
    "url": "img/logo3.png",
    "revision": "595e2676fb8c4f844487f6ca0c4ccf18"
  },
  {
    "url": "img/novel.png",
    "revision": "e24b473891502eccbcd0e662dea9ecda"
  },
  {
    "url": "index.html",
    "revision": "3712e365799d2ef4a105ecd25d073ace"
  },
  {
    "url": "releases.html",
    "revision": "2155f5a59936c20da2500597c8adc9a8"
  },
  {
    "url": "sponsors.html",
    "revision": "32faa8dcc28f55688996718976d1cc8b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
