var http = require('http');
var fs = require('fs');

http
  .createServer(function (req, res) {
    if (req.method === 'GET' && req.url === '/test') {
      fs.readFile('./ola.txt', 'utf-8', function (err, data) {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
      });
    }
    res.statusCode = 200;
    res.end();
  })
  .listen(8080);
