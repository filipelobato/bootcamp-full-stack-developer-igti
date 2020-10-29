import express from 'express';
import bodyParse from 'body-parser';

const app = express();
const port = 8080;

// form url enconded
app.use(bodyParse.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  console.log(req.params.id);
  res.send('Hello world');
});

app.post('/', (req, res) => {
  const { nome, prefeito } = req.body;
  console.log(nome);
  res.send('Hello world');
});

app.get('/testeA*', (req, res) => {
  console.log(req.method);
  res.end();
});

app.post('/upload', (req, res) => {
  console.log(req.files);
  res.end();
});

app.get(
  '/testMultipleHandlers',
  (req, res, next) => {
    console.log('Handle 1');
    next();
  },
  (req, res) => {
    console.log('Callback2');
    res.end();
  }
);

// query params
app.get('/search', (req, res) => {
  const { nome, cpf } = req.query;
  console.log(nome);
  res.send('Executado');
});

const callback1 = (req, res, next) => {
  console.log('Callback 1');
  next();
};

function callback2(req, res) {
  console.log(req.params);
  console.log('Callback 2');
  res.end();
}

app.get('/twoHandlers/:id', [callback1, callback2]);

app.use('/testeMiddle', (req, res, next) => {
  console.log('Interceptação com middleware');
  next();
});

app.get('/testeMiddle', (req, res, next) => {
  console.log('Acessing resource12321');
  next();
});

app.listen(port, async () => {});
