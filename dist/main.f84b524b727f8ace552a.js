(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],[
/* 0 */
/***/ (function(module, exports) {

console.log('hello, my name is Michael');

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('Service-worker registed');
    }).catch(error => {
      console.log('service-worker register error');
    });
  });
}

/***/ })
],[[0,1]]]);
//# sourceMappingURL=main.f84b524b727f8ace552a.js.map