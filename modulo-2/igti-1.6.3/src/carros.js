import { promises as fs } from 'fs';

class Carro {
  nome;
  modelo;
  ano;

  constructor(nome, modelo, ano) {
    (this.nome = nome), (this.modelo = modelo), (this.ano = ano);
  }
}

async function init() {
  try {
    /*     const arrayCarros = ['Gol', 'Palio', 'Uno', 'Aluno', 'Bloco', 'Data'];
    const obj = {
      carros: arrayCarros,
    }; */
    const carro = [];
    carro.push(new Carro('Corsa', 'Sedan', '2012'));
    carro.push(new Carro('Classic', 'Sedan', '2013'));
    carro.push(new Carro('qweq', 'Sedan', '2012'));
    carro.push(new Carro('qweqe', 'Sedan', '2013'));
    carro.push(new Carro('Corsa', 'Sedan', '2012'));
    carro.push(new Carro('Clqweqweassic', 'Sedan', '2013'));
    carro.push(new Carro('Corsa', 'Sedan', '2012'));
    carro.push(new Carro('Clqweqassic', 'Sedan', '2013'));
    carro.push(new Carro('Corqwesa', 'Sedan', '2012'));
    carro.push(new Carro('Classic', 'Sedan', '2013'));
    carro.push(new Carro('Corqweqwesa', 'Sedan', '2012'));
    carro.push(new Carro('Classic', 'Sedan', '2013'));
    carro.push(new Carro('Corsa', 'Sedan', '2012'));
    carro.push(new Carro('Clqweassic', 'Sedan', '2013'));
    carro.push(new Carro('Corsa', 'Sedan', '2012'));
    carro.push(new Carro('Clghjassic', 'Sedan', '2013'));
    carro.push(new Carro('Casdzforsa', 'Sedan', '2012'));
    carro.push(new Carro('Classic', 'Sedan', '2013'));
    carro.push(new Carro('Corsa', 'Sedan', '2012'));
    carro.push(new Carro('Clqweassic', 'Sedan', '2013'));
    carro.push(new Carro('Corsa', 'Sedan', '2012'));
    carro.push(new Carro('ghuCorqwesa', 'Sedan', '2012'));
    carro.push(new Carro('Classic', 'Sedan', '2013'));
    carro.push(new Carro('Corsqwesa', 'Sedan', '2012'));
    carro.push(new Carro('Classic', 'Sedan', '2013'));
    carro.push(new Carro('Corsa', 'Sedan', '2012'));
    carro.push(new Carro('Clatyussic', 'Sedan', '2013'));
    carro.push(new Carro('Cotyursa', 'Sedan', '2012'));
    carro.push(new Carro('Classic', 'Sedan', '2013'));

    const headers = Object.keys(carro[0]).join('|');
    await fs.writeFile('carros.txt', `${headers}\n`);
    const arquivo = carro.reduce((acc, cur) => {
      const line = `${cur.nome}|${cur.ano}|${cur.modelo}`;
      return (acc += `${line}\n`);
    }, '');
    await fs.appendFile('carros.txt', arquivo);

    /*     console.log(Object.keys(carro[0])); */
    /*     console.log(Object.getOwnPropertyNames(carro[0])); */

    //await fs.writeFile('teste.json', obj.carros.join(','));
    /*     console.log(obj.carros.join('|')); */
    /*     console.log(JSON.stringify(carro)); */

    /*     const data = await JSON.parse(await fs.readFile('teste.json'));
    data.carros.push('Sandero');
    await fs.appendFile('teste.json', JSON.stringify(data, null, 4));
    console.log(data); */
  } catch (error) {
    console.log(error);
  }
}

init();
