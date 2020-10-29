/*
  Métodos de arrays ES6+: map, filter, forEach, reduce, find, some, every, sort
*/
const arr = [1, 8, 7, 4, 5, 6, 7, 8, 9, 10];
const arrInvertido = [];
arr.reverse().forEach((item) => arrInvertido.push(item));
console.log(`Usando foreach e reverse: ${arrInvertido}`);

const multiplicadoPorTres = arr.map((item) => item * 3);
console.log(`Itens multiplicados por 3: ${multiplicadoPorTres}`);

const numerosPares = arr.filter((item) => item % 2 === 0);
console.log(`Números pares: ${numerosPares}`);

const somaArray = arr.reduce((acc, currentItem) => acc + currentItem, 0);
console.log(`Soma dos números do array: ${somaArray}`);

const findEvenNumberFirst = arr.find((item) => item % 2 === 0); // reverse lá em cima
console.log(`Primeiro número par: ${findEvenNumberFirst}`);

const algumDivisivelPorDez = arr.some((item) => item % 10 === 0); // reverse lá em cima
console.log(`Algum divisível por 10: ${algumDivisivelPorDez}`);

const findSeTodosInteirosEMaioresQueZero = arr.every((item) => item > 0);
console.log(`Verificar se todos > 0: ${findSeTodosInteirosEMaioresQueZero}`);

const ordernarDoMenorParaOMaior = arr.sort((a, b) => b - a);
console.log(`Ordernar array: ${ordernarDoMenorParaOMaior}`);

const nomes = ['Alan', 'Welton Fernando', 'Welton', 'Filipe'];
const ordernacaoAlfabetica = nomes.sort((a, b) => a.localeCompare(b) || a - b);
console.log(`Ordem alfabética e, dps, por length: ${ordernacaoAlfabetica}`);
