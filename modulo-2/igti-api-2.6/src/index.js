import express from 'express';
const app = express();
const port = 3000;

app.use(express.json());

app.use('/images', express.static('public'));

app.get('/', (req, res) => {
  console.log('ok');
  res.send('ok');
});

app.listen(port, () => {
  console.log('API Started...');
});
