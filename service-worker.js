/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["Bill.html","b43b15e2d83b9b7ea3b04c64d7f78e89"],["Cart.html","6474cb65bde989a39ad21e50af2390d5"],["Login.html","a418d56b28b17b21d2640b9a5ef22c2c"],["Logo.html","56efe82c2fb3943264272ca36f0f3b78"],["Logo_files/532.8c4529698981901a88b9.js.download","f7633f1daf895f675911852af05e611d"],["Logo_files/ae-v3.5.js.download","ec82dc15d6c4031ea41598ca596217b4"],["Logo_files/analytics.js.download","876c0f150943aff8b256da31f79ac00e"],["Logo_files/brands.min.css","7ad2d8f0b69ecd8685ad60ba01173f72"],["Logo_files/bugsnag.min.js.download","3c090779798f108dbf4b151ea1b4d20e"],["Logo_files/ec.js.download","7b430c6350a59a7cf22b9adeccba327b"],["Logo_files/fbevents.js.download","d7cebbe882f8af4de28b8048ad93ef44"],["Logo_files/fontawesome.min.css","8827c3593f64c267bad213589b5ea038"],["Logo_files/fontstylesheet.css","63b99f84e4cab3d82a735c19c746b47f"],["Logo_files/gtm.js.download","a18a914def1ba7ee3e3a36b9218d080e"],["Logo_files/logo-freelogodesign.svg","c248189b204bd1a815d0ddc07f87bca1"],["Logo_files/main.197a82e9f80ac40171e3.css","d3754d1bc6b1d4ab0e48101cac8a81cd"],["Logo_files/main.d3bb919509f6fad03707.js.download","2b37a536a0c670e1aff174c5d3511655"],["Logo_files/opentype.min.js.download","d5502a4e224e268e1045ee1c88d0b071"],["Logo_files/react-dom.production.min.js.download","23bfe7e99565ee8f34afd63c06f4c24b"],["Logo_files/react.production.min.js.download","61699b70cf57abe63fdf5f4007d36ec1"],["Logo_files/runtime.69a86764f2d9e024a0d0.js.download","9e30ad754f3d36abd01d74c55ba2059b"],["Logo_files/solid.min.css","ccfdf5b4148fa899bd4180d03c959cc3"],["Register.html","e9fd78fcf77c844ec288e772d390485b"],["a.html","7d352432c7c1db3d5c6944e477d23eb0"],["addToCart.html","43b72e5cea544fb35f4ace529e635173"],["ani.html","ddef65d0f9560c95e19329f1bb6ce1bf"],["auth.php","dab89310de60636457e949aaba6b127f"],["back.jpeg","f130032ca8fc855c9687e8e14e8f10df"],["back2.jpg","89eb4aa8483a505951ae4b2b7d1787d3"],["bbk.html","ef3a89934c1dc9b047dfa9d4be118006"],["cart.js","af5408f7c937e6721ca31438aece34a3"],["connection.php","20e41d36113c94b5b74a41c5efcf9780"],["d_l.gif","97402dee975bd9d482d8dc6ba2281b7d"],["delice Logo.gif","196bbbc1e541ba3585204a8f1a1adf72"],["delice.jpg","4500bd8a0f32923cc444eecc6765cf20"],["delice_Logo.mp4","59008b1a0be32efd3676ded3f8b4a5a3"],["food.jpg","74402abbcea5eb481c05a46e4501a934"],["ft.html","5ad3986752f30c7f12e233fd9bba7cff"],["h_dup.html","0d52f2c216c50ae9513dc682b7fb8c99"],["hmepage.html","ab3432541bfffbe097d8a474ddcfc14e"],["home.html","4a740488ab95c52defe0836a04778b07"],["i1.jfif","66b804ce965e3ee63bb1fdee26684d17"],["i10.jpg","5d328420037cad4a11cd54ab486a530c"],["i11.jpg","04cdf500961bba5dcb0d67615ac73772"],["i12.jfif","b434d66059357deee0eb91bddea1eccf"],["i13.jpg","8eccc78c249e9a15274ec4c2cf8e2dbc"],["i14.png","e55ee28cad3fafb6c8b210e4277bf642"],["i15.jpg","fb26660928f9b3e3ff348c4c51ee4e21"],["i2.jpg","6bfcb958cf030548be2398c1dc60040f"],["i3.jfif","94a2829df07640c52f28432fe6b0d94e"],["i4.jpg","6b2088a2662348e170130c72594dfb82"],["i5.jpg","9a00f886fa002d369690e11cc8939927"],["i6.jfif","f22d0a4a47a17eb53c61763ad3878a1c"],["i7.jpg","b18c5c94a511df9a68592120751eef54"],["i8.jpg","9591aa402f7ac48778c9610650f5f1ea"],["i9.jfif","1c57fbe536e4e422892fef4b6d5957aa"],["images/bbk1.webp","6d9043ba65d17b7183aeb07d9dbf8e8d"],["kw.html","ba55a1a87b5d508a6a04c75937399330"],["kw.jpg","efc9c08531eefa8c406087692b2b441f"],["l.jpg","fb4ab89ad968eff403e23fda280a161a"],["l1.jpeg","b54561241a639a4baa1a7dbd8bd36239"],["l2.jpg","543881da24dfa31105eb25694fb3b0dd"],["l3.jpeg","5c43c90f766b428434cb8f0967add8f2"],["main.html","d3f834928ee5d2ea57dcfecc9824dabe"],["main.js","86fc5109cf28a66f59ad555333473790"],["main1.js","09b827543d6cd952ee0a2fa231f4539a"],["main_img.jpg","97461fa70c2eae186aa528e5b3bcd9ba"],["manifest.json","cc440b45364c1828c5c3bc337104437e"],["mc.html","19fcdf3afce55aa9b9ed351cff7af825"],["mc.jpg","eba775309ae0bf04c46e4aa3cc874c9f"],["menu2.html","708144a54cd886400d367f7ee9c19c88"],["menu3.html","f7fef77a68373f3c7ce513372c8bcc21"],["myscript.js","bec438f2d95164aed1ea894434d89f21"],["nav.html","d4e07de5d91529775c61c4555a37697c"],["pav.jpg","da2b04816b6c54db77b262f774bb0b19"],["prac/r1.html","372e6b9beb8b327f882f376e5ba37587"],["r.php","86d21711a6088202621d95b108002141"],["regis.html","574f6fb8ed86db24b95be2a360f2a853"],["regis.php","b2209720e5c7669d5f8bbdcb34138113"],["resto1.jpg","8f388b817e9c01503e4a2c2c6486f8fb"],["s.css","90df02d697b9b9e9527ab6cb9b90d974"],["s2.jpg","44e4815610e56cdc85370d3b99070cb6"],["s3.jpg","ed2d73eb351f16ecf306513cb9e6e1fd"],["s_a_home.html","d8a2c6d8548a1eb27ff3e298a75c3680"],["sp.jpg","eaf2175547fb9516f50c602404a89282"],["style.css","4bf808d0edd715d7c024d67345b4cff3"],["stylecart.css","be2a2f340f0d39484e73b511f7a9f436"],["sub.html","6fc26ca3e0536ac28592f2b4c82cb4fa"],["subway.jpg","26c87583e7164aa82e23b2b7381f6d33"],["sweet.jpg","0573ec108bd5e53f1b4208a245231c0d"],["temp.html","66e90c28aaf89328c458f84410d50d50"],["temp1.html","92723078fb6772406d82593971b19b4e"],["wafle.html","b441e10c4a8673eecd64dd554c5fff75"],["wafle.jpg","859f87aa847254aff2361ff81466671d"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'ani.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







