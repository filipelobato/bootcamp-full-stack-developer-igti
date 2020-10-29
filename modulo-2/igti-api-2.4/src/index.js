//tratamento de erros
import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  throw new Error('Error message teste');
});

// tratamento de erros em funções assíncronas
app.post('/', async (req, res, next) => {
  try {
    const valor = await executar(0);
    res.send(`${valor}`);
  } catch (error) {
    console.warn('okokok');
    next(error);
  }
});

async function executar(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(5);
    }, 3000);
  });
}
// passando erro pra próximo tratamento
/* app.use((err, req, res, next) => {
  console.log(err);
  next(err);
}); */

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Ocorreu um erro, tente novamente mais tarde');
});

app.listen(3000, () => {
  console.log('Api iniciada...');
});
