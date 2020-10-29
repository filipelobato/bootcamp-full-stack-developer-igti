function divisionPromise(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject('Divisão por 0');
    }

    resolve(a / b);
  });
}

// Assim não conseguimos capturar o resultado, pois ele
// é calculado no futuro
console.log(divisionPromise(4, 2));

// Essa é a maneira correta
divisionPromise(4, 2)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// Essa é a maneira correta
divisionPromise(4, 0)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

const promise2 = new Promise((resolve, reject) => resolve(11));

const promise3 = new Promise((resolve, reject) => reject(5));

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, 'foo');
});

// Retorna o resultado quando todas promises forem resolvidas, ou a primeira
// for rejeitada
Promise.all([promise2, promise3, promise4])
  .then((values) => {
    values.forEach((item) => console.log(item));
  })
  .catch((error) => console.log(error));

// Passamos o argumento como um array de promises que já estão resolvidas para disparar Promise.all a mais rápido possível
var arrayPromisesResolvidas = [Promise.resolve(33), Promise.resolve(44)];

var p = Promise.all(arrayPromisesResolvidas);
// Logando imediatamente o valor de p
console.log(p);

// Utilizando setTimeout para executar código depois que a pilha estiver vazia
setTimeout(function () {
  console.log('a pilha está vazia agora');
  console.log(p);
});

console.log();
console.log();
console.log();
console.log();

function verificarVeracidade(value) {
  return new Promise((resolve, reject) => {
    window.setTimeout(function () {
      if (parseInt(value) > 50) {
        resolve(`${value} é superior a 50, tudo ok!`);
      }
      reject(`${value} é inferior a 50, rejeitado!`);
    }, 3000);
  });
}

async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Escute bem'), 1000);
  });

  let result = await promise; // wait until the promise resolves (*)
  console.log(result); // "done!"
}

function divisionPromise(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject('Divisão por 0');
    }

    resolve(a / b);
  });
}

verificarVeracidade((Math.random() * 100).toFixed(0))
  .then((result) => {
    const paragraph = document.createElement('p');
    paragraph.textContent = 'TUDO OK!';
    form.appendChild(paragraph);
    console.log(result);
  })
  .catch((erro) => console.log(erro));
