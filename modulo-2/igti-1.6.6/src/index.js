import http from 'http';

http
  .createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/test') {
      res.write('Get / teste executado com sucesso');
    } else {
      res.write('Hello world');
      res.statusCode = 200;
    }
    res.end();
  })
  .listen(8080);
