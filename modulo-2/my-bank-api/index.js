import express from 'express';
import accountsRouter from './routes/accounts.js';
import { promises as fs } from 'fs';

const { readFile, writeFile } = fs;

global.fileName = 'accounts.json';

const app = express();
app.use(express.json());

app.use('/accounts', accountsRouter);

app.listen(3000, async () => {
  // verificar se arquivo existe
  try {
    await readFile('accounts.json');
    console.log('API Started...');
  } catch (error) {
    const initialJson = {
      nextId: 1,
      accounts: [],
    };
    writeFile('accounts.json', JSON.stringify(initialJson, null, 4))
      .then(() => {
        console.log('File created succeful');
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
