/* 
Ler, criar, atualizar, excluir e renomear arquivos

readFile(), appendFile(), writeFile(), unlink() e rename()
*/
/* 
var teste = require('./teste');
console.log(teste.testFunction())

CommmomJS é a biblioteca que trata de exportações e importações de arquivos,
como require.
*/

var fs = require('fs');
fs.readFile('modulo-2/test-file.txt', 'utf-8', function (err, data) {
  if (err) {
    console.log(err.message);
  } else {
    var obj = Array.from(JSON.parse(data));
    console.log(obj);
  }
});
