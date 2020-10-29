import express from 'express';

const router = express.Router();

const findAll = (_, res) => {
  const carros = ['Corsa', 'Classic', 'Palio'];
  console.log('GET /carros');
  res.send(JSON.stringify(carros));
};

const addOne = (_, res) => {
  console.log('POST /carros');
  res.send('POST CARROS');
};
router.get('/precos', (req, res) => {
  console.log('GEt /carros/preços');
  res.send('Classic R$ 26000');
  res.end();
});

router.get('/', findAll);
router.post('/', addOne);
router.get('/', findAll);

export default router;
