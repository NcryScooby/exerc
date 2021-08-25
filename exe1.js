"use strict";
let inicio;
let fim;
inicio = 0;
fim = 10;
for (inicio = 1; inicio <= fim; inicio++) {
    while (inicio % 2 == 0) {
        console.log("numeros pares " + inicio);
        break;
    }
}