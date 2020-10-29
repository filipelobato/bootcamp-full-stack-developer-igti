const json = [
  {
    nome: 'Andre',
    idade: 30,
  },
  {
    nome: 'Filipe',
    idade: 25,
  },
  {
    nome: 'Victor',
    idade: 19,
  },
];

console.log(
  json.reduce((acc, { idade }) => {
    return acc + idade;
  }, 0)
);
