import express from 'express';
const app = express();
const router = express.Router();
const port = 3000;

// middleware
app.use((req, res, next) => {
  console.log('middleware');
  next();
});
app.get('/', (req, res) => res.send('Hello world'));

app.all('/testAll', (req, res) => res.send(req.method));
app.all('/letra?S', (req, res) => res.send('Opcional'));
app.all('/test+ll', (req, res) => res.send('Diversas vezes'));
app.all('/test*ll', (req, res) => res.send('Qualquer string'));
app.all('/testParams/:id', (req, res) => res.send(req.params.id));
app.all(/.*Red$/, (req, res) => res.send('/.*Red$/'));

app.get(
  '/testeMultiplosTratamentos',
  (_, res, next) => {
    console.log('First method');
    next();
  },
  (_, res) => {
    console.log('Second method');
    res.end();
  }
);

const callback1 = (_, res, next) => {
  console.log('First method');
  next();
};

const callback2 = (_, res, next) => {
  console.log('Second method');
  res.end();
  next();
};

app.all('/multiplosHandlersArray', [callback1, callback2]);

app
  .route('/testeRotas')
  .get((req, res) => {
    console.log(req.method);
    res.end();
  })
  .post((req, res) => {
    console.log(req.method);
    res.end();
  })
  .delete((req, res) => {
    console.log(req.method);
    res.end();
  });

app.use('/testMiddleware', (req, res, next) => {
  console.log('/testMiddleware');
  if (req.method === 'GET') {
    res.end();
    next();
  } else {
    res.end();
  }
});

router.get('/', (req, res) => {
  throw new Error('Error');
  res.end();
});

router.get('/error', async (req, res, next) => {
  try {
    throw new Error('Error message');
  } catch (error) {
    // para casos de erro gerado de métodos assíncronos
    next(error);
  }
});

app.use('/test', router);

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send('Ocorreu um erro');
});

// caminho virtual / caminho real
app.use('/images/', express.static('public'));

// app.listen(port, () => console.log(`App listening on port ${port}`));
app.listen(port, async () => {
  console.log('Api Started');
});
