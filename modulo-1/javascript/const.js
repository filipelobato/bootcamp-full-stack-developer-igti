/* 
CONST => Sempre usar. Imutável, não pode ser reatribuído
 Object.free() vs Const
 No primeiro, permite-se reatribuir um objeto à variável, não podendo
 apenas adicionar atributos. No segundo, não se permite reatribuir obj
 à variável, mas pode ser adicionado valores.
*/
const varConst = 1;
console.log(varConst);
// varConst = 2  ERROR

const obj = {
  id: 1,
};
obj.name = 'Filipe';

/* obj = { id: 10 };  ERROR */
console.log(obj);

var letVar = {
  id: 1,
};

console.log('Valor inicial do var');
console.log(letVar);

console.log('Valor após congelado e atribuir 2 ao id... (Não muda)');
Object.freeze(letVar);
letVar.id = 2; // Valor não será aceito, pois não se permite alterar
console.log(letVar);

console.log('Reatribuindo objeto à variavel letVar. (Foi aceito)');
letVar = {
  id: 3,
};
console.log(letVar);
