"use strict";
let i = 0;
while (i != 10) {
    i += 0.2;
    break;
}
console.log(i);
/*ele fica compilando infinitamente pois da erro pela falta do break
while ();*/