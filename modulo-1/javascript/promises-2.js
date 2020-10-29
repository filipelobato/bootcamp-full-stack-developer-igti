// Fetch ok
fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => res.json())
  .then((json) => console.log(json[0].name))
  .catch((error) => console.log('Falha na requisição'));

// Fetch com erro
fetch('https://jsonplaceholder.typicode.com/userssss')
  .then((res) => res.json())
  .then((json) => console.log(json[0].name))
  .catch((error) => console.log('Falha na requisição'));
