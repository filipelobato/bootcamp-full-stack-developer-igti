window.addEventListener('load', start);

function start() {
  let formUsuarios = Array.from(document.querySelectorAll('.form-usuario'));
  const ApiURL =
    'https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo';
  let usuariosAPI = [];
  const spinner = document.querySelector('.spinner-border');
  let userFilter = [];
  let userResults = document.querySelector('.user-results');
  const inputNome = document.querySelector('#nome');

  fetch(ApiURL)
    .then((response) => response.json())
    .then((usuarios) => {
      usuariosAPI = userFilter = usuarios.results.map((item) => {
        return {
          nome: item.name.first + ' ' + item.name.last,
          genero: item.gender,
          foto: item.picture.large,
          idade: item.registered.age,
        };
      });
      spinner.remove();
      formUsuarios.forEach((item) => item.setAttribute('style', 'display: ""'));
    });

  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  inputNome.addEventListener('keyup', (e) => {
    let results = document.querySelector('#estatisticas');
    results.innerHTML = '';

    if (e.target.value.length > 0) {
      userFilter = usuariosAPI.filter((item) =>
        item.nome.toUpperCase().includes(e.target.value.toUpperCase())
      );
      console.log(userFilter);
      let pessoas = document.querySelector('#pessoas');
      let br = document.createElement('br');

      pessoas.innerHTML = '';
      userFilter.forEach((item) => {
        let element = document.createElement('p');
        let img = document.createElement('img');
        var textnode = document.createTextNode(
          `${item.nome} ${item.genero} ${item.idade} `
        );
        img.setAttribute('src', item.foto);
        img.setAttribute('style', 'width: 50px');

        element.appendChild(textnode);
        pessoas.appendChild(element);
        pessoas.appendChild(br);
        pessoas.appendChild(img);
      });

      let estatistica = document.querySelector('#estatisticas');
      let qtdHomem = userFilter
        .filter((user) => user.genero === 'male')
        .reduce((acc, user) => {
          return acc + user.idade;
        }, 0);

      let qtdMulher = userFilter
        .filter((user) => user.genero === 'female')
        .reduce((acc, user) => {
          return acc + user.idade;
        }, 0);

      let qtdHomemParagrafo = document.createElement('p');
      qtdHomemParagrafo.classList.add('stats');
      estatistica.appendChild(qtdHomemParagrafo);
      qtdHomemParagrafo.textContent = `Soma das idades dos homens ${qtdHomem}`;

      let qtdMulherParagrafo = document.createElement('p');
      estatistica.appendChild(qtdMulherParagrafo);
      qtdHomemParagrafo.classList.add('stats');
      qtdMulherParagrafo.textContent = `Soma das idades das mulheres ${qtdMulher}`;

      console.log(qtdHomem);
      userResults.textContent = `${userFilter.length} usuário(s) encontrado(s)`;
    }

    if (userFilter.length === 0) {
      userResults.textContent = `Nenhum usuário filtrado`;
    }
  });
}
