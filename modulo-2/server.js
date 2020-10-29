var http = require('http');

http
  .createServer(function (req, res) {
    if (req.method === 'GET' && req.url === '/test') {
      res.write('GET /test123');
    } else {
      res.write('Hello world232');
    }
    res.statusCode = 200;
    res.end();
  })
  .listen(8080);
