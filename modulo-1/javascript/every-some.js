const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Primeiro item par com Array.find
const find = array.find((item) => item % 2 === 0);
console.log(find);

// Verificando se há elementos ímpares com Array.some
const some = array.some((item) => item % 2 === 1);
console.log(some);

// Verificando se todos os elementos são do tipo number
const every = array.every((item) => typeof item === 'number');
console.log(every);
