import express from 'express';
import axios from 'axios';

const app = express();
const urlAPI = 'http://localhost:3000';

app.get('/', async (req, res) => {
  try {
    const { data: response } = await axios.get(urlAPI);
    res.send(`Consumindo api ${urlAPI} com cliente`);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
});

app.listen(8080, async () => {
  console.log('Api inicializada');
});
