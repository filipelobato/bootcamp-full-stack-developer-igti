import { promises as fs } from 'fs';
import { inherits } from 'util';
import { homedir } from 'os';

const nomeArquivo = 'teste.txt';
const conteudoArquivo = `
  Este arquivo é gerado para ilustrar exemplos trabalhando com filesystem e 
  promises, vamos lá!
`;
async function init() {
  try {
    const home = homedir();
    console.log(home);
    const diretorios = await fs.readdir(home);
    //console.log(diretorios);
    await fs.writeFile(nomeArquivo, conteudoArquivo);
    // await fs.appendFile(nomeArquivo, '\nTeste appendfile');
    const fileRead = await fs.readFile(nomeArquivo, 'utf-8');
    console.log(fileRead);
  } catch (error) {
    console.log(error);
  }
}

init();

// Com promises (promises hall)
/* fs.writeFile(nomeArquivo, 'blablabla')
  .then(() => {
    fs.appendFile(nomeArquivo, '\nTeste appendfile')
      .then(() => {
        fs.readFile(nomeArquivo, 'utf-8')
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });
 */
// Utilizando callbacks
/* fs.writeFile('teste.txt', 'bla bla bla', function (err) {
  console.log('2');
  if (err) {
    console.log(err);
  } else {
    fs.appendFile('teste.txt', '\npalsdp', function (err) {
      if (err) {
        console.log(err);
        return;
      }
    });
    fs.readFile('teste.txt', 'utf-8', function (err, data) {
      if (err) {
        console.log(err);
      } else {
        dados = data;
      }
    });
  }
}); */

// Leitura de forma síncrona, trabalhando com I/O
/* try {
  console.log('1');
  fs.writeFileSync('teste.txt', 'blablabla');
  console.log('2');
  const data = fs.readFileSync('teste.txt', 'utf-8');
  console.log(data);
} catch (error) {
  console.log(error);
} */
