import { promises as fs } from 'fs';

async function init() {
  try {
    const arrayCarros = ['Gol', 'Palio', 'Uno', 'Aluno', 'Bloco', 'Data'];
    const obj = {
      carros: arrayCarros,
    };

    await fs.writeFile('teste.json', JSON.stringify(obj.carros, null, 4));
    /*     const data = await JSON.parse(await fs.readFile('teste.json'));
    data.carros.push('Sandero');
    await fs.appendFile('teste.json', JSON.stringify(data, null, 4));
    console.log(data); */
  } catch (error) {
    console.log(error);
  }
}

init();
