if ("serviceWorker" in navigator) {
    // register service worker
  navigator.serviceWorker.register("service-worker.js")
    .then((reg) => console.log("Service Worker supported",reg))
    .catch((err) => console.log("Service Worker not supported",err))

  }
if ("serviceWorker" in navigator) {
    // register service worker
  window.addEventListener('load', () =>{
    navigator.serviceWorker.register("/service-worker.js")
    .then((reg) => console.log("Service Worker registered",reg))
    .catch((err) => console.log("Service Worker not registered",err))
  })
}
