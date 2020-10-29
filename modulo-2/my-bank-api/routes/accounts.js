import express from 'express';
import { promises as fs, write } from 'fs';

const { readFile, writeFile } = fs;

const router = express.Router();

router
  .get('/', async (req, res) => {
    try {
      const data = JSON.parse(await readFile(global.fileName));
      delete data.nextId;
      res.send(data);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  })
  .post('/', async (req, res) => {
    try {
      let account = req.body;
      const data = JSON.parse(await readFile(global.fileName));
      account = { id: data.nextId++, ...account };
      data.accounts.push(account);

      await writeFile(global.fileName, JSON.stringify(data, null, 4));
      res.send(account);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  })
  .get('/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const data = JSON.parse(await readFile(global.fileName));

      const account = data.accounts.filter((acc) => acc.id === id);
      res.send(account);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  })
  .delete('/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const data = JSON.parse(await readFile(global.fileName));

      const accountToDelete = data.accounts.find((acc) => acc.id === id);
      console.log(accountToDelete);
      if (!accountToDelete) {
        throw new Error('Account não existe');
      }
      data.accounts = data.accounts.filter((acc) => acc.id !== id);
      await writeFile(global.fileName, JSON.stringify(data, null, 4));
      res.send(data);
    } catch (error) {
      console.log('Entrou');
      res.status(400).send({ error: error.message });
    }
  });

export default router;
