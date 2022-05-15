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
    "revision": "48f40905155803bf330c8f60e5d24023"
  },
  {
    "url": "about.html",
    "revision": "72e547b0f3ff5149d970d885b9600779"
  },
  {
    "url": "assets/css/0.styles.0e4905d9.css",
    "revision": "445a496c0253fab81c14adce7220b6ee"
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
    "url": "assets/js/12.b17cfd3f.js",
    "revision": "1a816c9e21db193a953b82400acbbd55"
  },
  {
    "url": "assets/js/13.8c96b18f.js",
    "revision": "c88c619c904106b7a423d8feae2bbc89"
  },
  {
    "url": "assets/js/14.9fa4fcb6.js",
    "revision": "ff526db692564800bdd4a7df452e3135"
  },
  {
    "url": "assets/js/15.037c1b58.js",
    "revision": "278377f3aa1ed7e1e8a289cf49c4d968"
  },
  {
    "url": "assets/js/16.091c542c.js",
    "revision": "5db2fbe9d42f3254db7d18b764ed0d62"
  },
  {
    "url": "assets/js/17.ddabcef7.js",
    "revision": "58cf518e879b20f1b4540ee48ec61c65"
  },
  {
    "url": "assets/js/18.a3ff0512.js",
    "revision": "c653f8f589714a996931be2762cedffb"
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
    "url": "assets/js/4.c2bc4666.js",
    "revision": "768796bd1703174cabf453369057f318"
  },
  {
    "url": "assets/js/5.8070ce57.js",
    "revision": "a0627ede3673ce09f953f9e42e8de371"
  },
  {
    "url": "assets/js/6.2174eebb.js",
    "revision": "b003a76da09d8ad0d0ffb3bc66d87850"
  },
  {
    "url": "assets/js/7.c29613a6.js",
    "revision": "7b91f1b02ee567f212ea5046459fc9c0"
  },
  {
    "url": "assets/js/8.a97210bd.js",
    "revision": "0211aca9b64aaa7a710689d2a60073e1"
  },
  {
    "url": "assets/js/9.b0ce26b7.js",
    "revision": "723129f04d5a3af7560922eb9f2e210b"
  },
  {
    "url": "assets/js/app.fc00521c.js",
    "revision": "63f486dc9f72e5ca8701607b390326ff"
  },
  {
    "url": "assets/js/vendors~docsearch.13c21034.js",
    "revision": "99fca4d6c890c7ef2fac9b69a2f31a85"
  },
  {
    "url": "demo.html",
    "revision": "5cfbc7015e4961cbe999dd2226c28de0"
  },
  {
    "url": "guide/about.html",
    "revision": "bf5f5128507d38ffd7e808159d8d92e8"
  },
  {
    "url": "guide/feedback.html",
    "revision": "0e08825097bc575938a4ff1413672edf"
  },
  {
    "url": "guide/index.html",
    "revision": "fdd89583c43fb2d54f043f95cf4d84ad"
  },
  {
    "url": "guide/webp.html",
    "revision": "b81862ddd6a632543b3c0312872d92dc"
  },
  {
    "url": "idc.html",
    "revision": "23213b86261ae053ca89eec2a11ca8d7"
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
    "revision": "46f3ada61fe01492493b236550a35944"
  },
  {
    "url": "releases.html",
    "revision": "8667c218755f4d9ba62cebd2e577c5ad"
  },
  {
    "url": "sponsors.html",
    "revision": "2b81d3ea571f9a3950c1f78cca9401f6"
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
