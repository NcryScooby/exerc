"use strict";
function pow(base, exp) {
    let res = 1;
    for (let i = 0; i < exp; i++) {
        res *= base;
    }
    console.log(res);
    return res;
}
pow(10, 2);