// function declaration (function statement)
function funcao(a, b) {
  return a + b;
}

// Anonymous function expression
var anonymousFunction = function () {
  return a + b;
};

// Named function: Um dos benefícios de criar uma expressão de
// função nomeada é que, caso encontremos um erro, o rastreamento de pilha
// conterá o nome da função, tornando mais fácil encontrar a origem do erro.
var myFunction = function namedFunction() {
  statements;
};

// Expressão de função
var functionExpression = function (a, b) {
  return a + b;
};

// Arrow function
() => {
  console.log('Arrow function');
};

const sum = (...args) => {
  return args.reduce((accumulator, currentValue) => accumulator + currentValue);
};

// IIFE (Immediately Invoked Function Expression) é
// uma função em JavaScript que é executada assim que definida.
(function () {
  var nome = 'Felipe';
})();

var result = (function () {
  var nome = 'Felipe';
  return nome;
})();

// Com construtor
var multiply = new Function('x', 'y', 'return x * y');
console.log(multiply(2, 3));

function argumentos(...args) {
  'use strict';
  console.log(arguments.length);
  console.log(arguments.callee.name);
  console.log(arguments.caller);
}
argumentos(1, 2, 3, 4);

// function declaration
function foo() {}

// function expression
(function bar() {});

// function expression
x = function hello() {};
