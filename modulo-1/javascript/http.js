const fetch = require('node-fetch');
const apiURL = 'https://api.github.com/user';

async function requisitarDados() {
  try {
    const resultado = await fetch(apiURL);
    console.log(resultado);
  } catch (error) {
    console.log('12');
  }
}

// requisitarDados();

let count = 0;
const interval = setInterval(() => {
  console.log(++count);
}, 1000);

setTimeout(() => {
  clearInterval(interval);
}, 5050);

function searchUsers() {
  return new Promise(resolve, reject) {
    axios.ge
  }
}