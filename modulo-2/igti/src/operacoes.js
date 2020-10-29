// EsModules
const nome = 'Teste de exportação';

function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

// Exportação nomeada. Qdo for usar, tem que importar com o nome da function
export function resto(a, b) {
  return a % b;
}

// Common.js
// module.exports = { soma, subtracao };

// ES6 Modules
//export const multiplicacao = (a, b) => a * b;
export default { soma, subtracao, nome };
