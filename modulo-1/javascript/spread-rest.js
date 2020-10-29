'use strict';
// spread - espalha elementos em um array
const arr1 = [1, 2, 3, 4];
const arr2 = [4, 5, 6, 7, 8];

const arr = [...arr1, ...arr2];
console.log(arr);

// rest - agrupa elementos em um parâmetro
const infinitySum = (...numbers) =>
  numbers.reduce((acc, curr) => acc + curr, 0);

console.log(infinitySum(1, 2, 87, 87, 49, 62, 12, 33, 10));

function sum() {
  const args = Array.from(arguments);
  for (const i in args) {
    console.log(args[i]);
  }
}

sum(1, 2, 87, 87, 49, 62, 12, 33);

const arr1 = [1, 2, 4, 5, 6, 7, , 10];
console.log(`Valores do slice: ${arr1.slice(0, arr1.length)}`);
console.log(arr1.length);
