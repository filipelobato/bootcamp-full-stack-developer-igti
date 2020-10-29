function baixarDados(numero) {
  return new Promise((resolve, reject) => {
    if (numero === 1) {
      setTimeout(() => {
        resolve(`Resolvido com 1`);
      }, 2000);
    } else {
      reject(`Rejeitado com 0`);
    }
  });
}

function baixarDados2() {
  return new Promise((resolve, reject) => {
    reject(`Rejeitado com 0, 2ª function`);
  });
}

function pegarDadosProcessados(num) {
  return baixarDados(num)
    .then((v) => {
      console.log(v);
    })
    .catch((e) => {
      console.log(e);
    });
}

async function pegarDadosProcessadosComAsync(num) {
  try {
    const result = await baixarDados(num);
    // Só será executado após o retorno da instrução acima
    const result2 = await baixarDados2();
    // Imprime promise, pois resposta vem daqui a 1ms
  } catch (error) {
    console.log(error);
  }
}

pegarDadosProcessadosComAsync(1);
