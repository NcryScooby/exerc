/*1. Escreva um trecho de código para imprimir os números pares definidos por um
intervalo de valores inteiros não-negativos inicio e fim. Utilize versões com for e while.*/
//for
for (var i_1 = 1; i_1 <= 10; i_1++) {
    if ((i_1 % 2) == 0) {
        console.log('valores pares ' + i_1);
    }
}
//while
var j = 1;
while (j <= 10) {
    if ((j % 2) == 0) {
        console.log('valores pares ' + j);
    }
    j++;
}
/*2. Qual o resultado do seguinte bloco de comandos? Qual a explicação para o resultado?*/
var i = 0;
while (i != 10) {
    i += 0.2;
    break;
}
console.log(i);
/*3. Escreva uma função min(x,y)que devolve o menor entre dois números.Não use funções auxiliares de Math.
Utilize corretamente a declaração de tipos nos parâmetros e no resultado da função.*/
function min(x, y) {
    if (x === void 0) { x = 1; }
    if (y === void 0) { y = 5; }
    if (x > y) {
        console.log(y);
    }
    else {
        console.log(x);
    }
}
min();
//5
function toMaiusculaPrimeira(s) {
    if (s === void 0) { s = "teste"; }
    return console.log(s.toUpperCase());
}
toMaiusculaPrimeira();
//6
function getMax(a) {
    if (a === void 0) { a = [5, 12, 1]; }
    var maior = 0;
    for (var i_2 = 0; i_2 < a.length; i_2++) {
        if (a[i_2] > maior) {
            maior = a[i_2];
        }
    }
    return console.log(maior);
}
getMax();
