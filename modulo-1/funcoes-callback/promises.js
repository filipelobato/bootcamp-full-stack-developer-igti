function divisionPromise(a, b) {
    return new Promise((resolve, reject) => {
      if (b === 0) {
        reject("Divisão por 0");
      }
  
      resolve(a / b);
    });
  }
  
  // Assim não conseguimos capturar o resultado, pois ele
  // é calculado no futuro
  console.log(divisionPromise(4, 2));
  
  // Essa é a maneira correta
  divisionPromise(4, 2)
    .then(result => console.log(result))
    .catch(error => console.log(error));
  
  // Essa é a maneira correta
  divisionPromise(4, 0)
    .then(result => console.log(result))
    .catch(error => console.log(error));
  