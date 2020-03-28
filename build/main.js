(function () {
  'use strict';

  function min(a, b) {
    return a < b ? a : b;
  }

  (function () {
    console.log(min(3, 4));
  })(); // The object to expose


  window.d3Object = {};

}());
