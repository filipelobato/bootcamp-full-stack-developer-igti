var http = require('http');
var fs = require('fs');

http
  .createServer(function (req, res) {
    if (req.method === 'GET' && req.url === '/test') {
      let resposta = null;
      // prettier-ignore
      fs.readFile(
          './modulo-1/javascript/json.json', 'utf-8', function (err, data ) {
          if (err) {
            console.log(err);
          } else {
            const { id } = JSON.parse(data);
            console.log(data);
            console.log(id);
          }
        });
      res.statusCode = 200;
      res.end();
    }
  })
  .listen(8080);
