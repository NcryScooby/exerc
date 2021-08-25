"use strict";
function maior(arr) {
    var max = arr.reduce(function (a, b) {
        return Math.max(a, b);
    });
    console.log(max);
}
maior([1, 1000, 3, 500]);