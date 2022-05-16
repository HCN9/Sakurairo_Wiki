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
    "revision": "8ebc8fb71695e5fc68d47224497265f0"
  },
  {
    "url": "about.html",
    "revision": "d43619ffb0d27d5e060d688c29721e6d"
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
    "url": "assets/js/13.c8ac254d.js",
    "revision": "f9083a6fa5a4d22df02d012553487951"
  },
  {
    "url": "assets/js/14.7a1e678e.js",
    "revision": "bc683ff9c3d34ea869344b13f33f9d6d"
  },
  {
    "url": "assets/js/15.de9a5194.js",
    "revision": "75f1c2529fe8bdc327399329c36be5ef"
  },
  {
    "url": "assets/js/16.70f23b6b.js",
    "revision": "0f6669f86da4d1eb4d5cbb2c6e4ad4c4"
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
    "url": "assets/js/19.4fcc1cea.js",
    "revision": "e485d63037418b931e02ecea2e4e5d47"
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
    "url": "assets/js/app.43fd22a6.js",
    "revision": "aa13fc8070760b4a12d97b650fc5e40e"
  },
  {
    "url": "assets/js/vendors~docsearch.13c21034.js",
    "revision": "99fca4d6c890c7ef2fac9b69a2f31a85"
  },
  {
    "url": "demo.html",
    "revision": "d5609b93624dbdccc2d0a0207d6ecb0c"
  },
  {
    "url": "guide/about.html",
    "revision": "84aee28975a1b6af33e8de6420693c04"
  },
  {
    "url": "guide/feedback.html",
    "revision": "380efe973d2f7e08be3bfdb7f150146c"
  },
  {
    "url": "guide/index.html",
    "revision": "f1d73c6429787e90b89f6d66681ee9f2"
  },
  {
    "url": "guide/webp.html",
    "revision": "40cca6e636e3fd6728527253364c05d8"
  },
  {
    "url": "idc.html",
    "revision": "f9186c298101f9411682147a1e66f1b0"
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
    "revision": "e3b6d182c621c5d19845c1687d5a5d15"
  },
  {
    "url": "releases.html",
    "revision": "46423d9c6b94ceb6f2aafa2dc5bd5349"
  },
  {
    "url": "sponsors.html",
    "revision": "c3bb3e5a7e153075fd11a93c711310da"
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
