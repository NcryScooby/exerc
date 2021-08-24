/*1. Escreva um trecho de código para imprimir os números pares definidos por um 
intervalo de valores inteiros não-negativos inicio e fim. Utilize versões com for e while.*/


//for
for (let i = 1; i <= 10; i++) {
    
    if ((i % 2) == 0) {
        console.log('valores pares ' + i);
            
    }
}

//while
let j: number = 1;

while (j <= 10){

    if ((j % 2) == 0){
        console.log('valores pares ' + j);
    }
      j++;
}

/*2. Qual o resultado do seguinte bloco de comandos? Qual a explicação para o resultado?*/

let i: number= 0;

    while (i != 10) {
        i += 0.2;
        break
        }
    console.log(i);

/*3. Escreva uma função min(x,y)que devolve o menor entre dois números.Não use funções auxiliares de Math.
Utilize corretamente a declaração de tipos nos parâmetros e no resultado da função.*/

function min(x : number = 1, y : number = 5){
    if(x > y){
    console.log(y);
    } else {
    console.log(x);
    }
}
min();

//5
function toMaiusculaPrimeira(s : string = "teste"){
     return console.log(s.toUpperCase()); 
 }
 toMaiusculaPrimeira();

//6
function getMax(a: number[] = [5, 12, 1]) {
    let maior = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > maior) {
            maior = a[i];
        }
    }
    return console.log(maior);
}
getMax();