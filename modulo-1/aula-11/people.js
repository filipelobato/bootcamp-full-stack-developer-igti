// Usando CommonJs para extrair do arquivo,
// map para modelar objeto, e destructuring para estrutura diferente
const people = require('./people.json').results.map(
  ({ gender, name, email, dob: { age }, location: { state } }) => {
    return { gender, name, email, age, state };
  }
);

const allFemales = people.filter((item) => item.gender === 'female');
console.log(allFemales);

const totalAge = people.reduce((acc, currentItem) => acc + currentItem.age, 0);
console.log(totalAge);

const allFromMinas = people.filter((person) => person.state === 'Minas Gerais');
console.log(allFromMinas);

const allNameWith = people.filter((person) =>
  person.name.last.toLowerCase().includes('ribeiro')
);
console.log(allNameWith);

const marriedMen = people.filter((person) => person.name.title === 'Mr');
const marriedWomen = people.filter((person) => person.name.title === 'Ms');
const marriedPeople = [...marriedMen, ...marriedWomen, { msg: 'Oi' }];
console.log(marriedPeople);
