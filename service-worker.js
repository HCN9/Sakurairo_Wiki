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
    "revision": "307d01b565ea226d72951fb9e9e49960"
  },
  {
    "url": "about.html",
    "revision": "7f8e82a3201452dfccdc43b8b0a7661a"
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
    "url": "assets/js/10.c3469428.js",
    "revision": "4bf482e8cbfb089f81bfd7115a545c7e"
  },
  {
    "url": "assets/js/11.fa3340f7.js",
    "revision": "3518b2b6d5b1f01246e586b160c986c3"
  },
  {
    "url": "assets/js/12.f07e3258.js",
    "revision": "04d6d7cfbc0876d96c19cf8367fc3929"
  },
  {
    "url": "assets/js/13.d16170a3.js",
    "revision": "d6bc06e5dfcdec9efc2b3f0e9be07472"
  },
  {
    "url": "assets/js/14.26c74ead.js",
    "revision": "5c3cba7891d6bcbb3eb95cc5d1aef8fc"
  },
  {
    "url": "assets/js/15.739f998c.js",
    "revision": "a4afd962887357e44d5f33877a4a1333"
  },
  {
    "url": "assets/js/16.8204b264.js",
    "revision": "9174b5ea490d0c7e583fe01b1b15d2de"
  },
  {
    "url": "assets/js/17.b4d926d1.js",
    "revision": "a9fae675b5c382b0e50d2d03da014620"
  },
  {
    "url": "assets/js/18.b35041c8.js",
    "revision": "b89c58b37d0caa762d322e136daf753e"
  },
  {
    "url": "assets/js/19.5081d14a.js",
    "revision": "4413ffdffe288ab07049ff40a8718904"
  },
  {
    "url": "assets/js/20.24d04010.js",
    "revision": "5a71890f8ce07fdb59612841d49742b3"
  },
  {
    "url": "assets/js/21.d7158df9.js",
    "revision": "151d5c651aa82fb76e78d9f56ecde028"
  },
  {
    "url": "assets/js/22.785da099.js",
    "revision": "6444226935cfff0a4f1373ba792082a1"
  },
  {
    "url": "assets/js/3.3cdb5182.js",
    "revision": "fb60fd4d89cd2d05cba48ca57ce44335"
  },
  {
    "url": "assets/js/4.f0ad44b4.js",
    "revision": "3df862e5a4825ee61efe47ad619eb9af"
  },
  {
    "url": "assets/js/5.48fe5be6.js",
    "revision": "aa7038364ad6c151faedc478e5a86636"
  },
  {
    "url": "assets/js/6.2174eebb.js",
    "revision": "b003a76da09d8ad0d0ffb3bc66d87850"
  },
  {
    "url": "assets/js/7.4d7f823b.js",
    "revision": "e22f7b58086cdc3055582f835a33b072"
  },
  {
    "url": "assets/js/8.aeaeea10.js",
    "revision": "a2bae709c2597c1f3b361f40a7f17312"
  },
  {
    "url": "assets/js/9.b0ce26b7.js",
    "revision": "723129f04d5a3af7560922eb9f2e210b"
  },
  {
    "url": "assets/js/app.8cd98fe5.js",
    "revision": "19817c2bd3c45fa0200b5aec7a33cfe6"
  },
  {
    "url": "assets/js/vendors~docsearch.13c21034.js",
    "revision": "99fca4d6c890c7ef2fac9b69a2f31a85"
  },
  {
    "url": "demo.html",
    "revision": "0a92182fbb9698ca550c69ce02cf5aae"
  },
  {
    "url": "guide/about.html",
    "revision": "7991553fa05b63045937d35fa68dc8e2"
  },
  {
    "url": "guide/feedback.html",
    "revision": "f5e0990fb5b3c6d34df885dfc67ef9cc"
  },
  {
    "url": "guide/index.html",
    "revision": "b1402c5e292b9873219e202e41688531"
  },
  {
    "url": "guide/webp.html",
    "revision": "eda756897c77ae5e53853babba6a08c1"
  },
  {
    "url": "idc.html",
    "revision": "611bd6358c167593960f5afe94267ea9"
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
    "revision": "89a4b3ebf93119638a83e1955fa76f1b"
  },
  {
    "url": "releases.html",
    "revision": "ee0855e45c992a91e658358cf3028dc8"
  },
  {
    "url": "sponsors.html",
    "revision": "d6dce498ee9d98ae6620821b33040afc"
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
