if ("serviceWorker" in navigator) {
    // register service worker
  navigator.serviceWorker.register("sw.js")
    .then((reg) => console.log("Service Worker supported",reg))
    .catch((err) => console.log("Service Worker not supported",err))

  }
if ("serviceWorker" in navigator) {
    // register service worker
  window.addEventListener('load', () =>{
    navigator.serviceWorker.register("sw.js")
    .then((reg) => console.log("Service Worker registered",reg))
    .catch((err) => console.log("Service Worker not registered",err))
  })
}

if ('serviceWorker' in navigator && 'SyncManager' in window) {
  navigator.serviceWorker.ready.then(function(reg) {
    return reg.sync.register('first-sync');
  }).catch(function() {
    // system was unable to register for a sync,
    // this could be an OS-level restriction
    postDataFromThePage();
  });
} else {
  // serviceworker/sync not supported
  postDataFromThePage();
}
function push() {
  //Subscribes user to Push notifications
  registration.pushManager.subscribe({
    userVisibleOnly: true //Set user to see every notification
  })
  .then(function (subscription) {
    toast('Subscribed successfully.');
    console.info('Push notification subscribed.');
    console.log(subscription);
  })
  .catch(function (error) {
    console.error('Push notification subscription error: ', error);
  });
}
