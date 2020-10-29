import express from 'express';

const app = express();

const middleware = (req, res, next) => {
  console.log('middleware executando...');
  next();
};

app.use(middleware);

// rotas
app
  .route('/rotas')
  .get((req, res) => {
    console.log('GET');
    res.send('OK');
  })
  .post((req, res) => {
    console.log('POST');
  })
  .delete((req, res) => {
    console.log('DELETE');
  });

app.listen(8080);
