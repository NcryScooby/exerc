"use strict";
function toMaiusculaPrimeira(frase) {
    frase = frase.toLowerCase().replace(/(?:^|\s)\S/g, function (toMaiusculaPrimeira) {
        return toMaiusculaPrimeira.toUpperCase();
    });
    console.log(frase);
}
toMaiusculaPrimeira("teste Deu CERTO");