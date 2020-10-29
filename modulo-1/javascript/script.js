'use strict'; // detecta mais erros de js

imprimir();
console.log(a);
var a = 1;
function imprimir() {
  console.log('Olá!');
}

//Exemplo 1 - Não eleva (hoist)
var x = 1; // Inicializa x
console.log(x + ' ' + y); // '1 undefined'
var y = 2; // Initialize y
//Isso não funcionará, pois o JavaScript apenas eleva declarações

//Example 3 - Hoists
a = 'Cran'; //Inicializa a
b = 'berry'; //Inicializa b
console.log(a + '' + b); // 'Cranberry'
