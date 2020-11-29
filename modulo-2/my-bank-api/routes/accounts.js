import express from 'express';
import { promises as fs } from 'fs';

const { readFile, writeFile } = fs;

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const data = JSON.parse(await readFile(global.fileName));
    delete data.nextId;

    res.send(data);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    let account = req.body;

    if (!account.name || account.balance == null || !account.balance) {
      throw new Error('Name e balance são obrigatórios');
    }

    const data = JSON.parse(await readFile(global.fileName));
    account = {
      id: data.nextId++,
      name: account.name,
      balance: account.balance,
    };
    data.accounts.push(account);

    await writeFile(global.fileName, JSON.stringify(data, null, 4));
    res.send(account);

    logger.info(`${req.method} ${req.baseUrl} - ${JSON.stringify(account)}`);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const data = JSON.parse(await readFile(global.fileName));

    const account = data.accounts.find((acc) => acc.id === id);
    res.send(account);
    //prettier-ignore
    logger.info(`${req.method} ${req.baseUrl}/${req.params.id} - ${JSON.stringify(account)}`);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const data = JSON.parse(await readFile(global.fileName));

    const accountToDelete = data.accounts.find((acc) => acc.id === id);

    if (!accountToDelete) {
      throw new Error('Este recurso não existe ou já foi excluído');
    }
    data.accounts = data.accounts.filter((acc) => acc.id !== id);
    await writeFile(global.fileName, JSON.stringify(data, null, 4));
    res.send(204);
    //res.send(data);
  } catch (error) {
    next(error);
  }
});

router.put('/', async (req, res, next) => {
  try {
    const account = req.body;
    //prettier-ignore
    if (!account.id || account.balance == null || !account.balance || !account.name) {
      throw new Error('Name e balance são obrigatórios');
    }

    const data = JSON.parse(await readFile(global.fileName));
    const index = data.accounts.findIndex((a) => a.id === account.id);

    if (index) {
      throw new Error('Registro não encontrado');
    }

    data.accounts[index].name = account.name;
    data.accounts[index].balance = account.balance;

    await writeFile(global.fileName, JSON.stringify(data, null, 4));
    res.send(account);
  } catch (error) {
    next(error);
  }
});

router.patch('/updateBalance', async (req, res, next) => {
  try {
    const account = req.body;

    if (!account.id || account.balance == null || !account.balance) {
      throw new Error('Balance e id são obrigatórios');
    }

    const data = JSON.parse(await readFile(global.fileName));
    const index = data.accounts.findIndex((a) => a.id === account.id);

    if (index === -1) {
      throw new Error('Account not exists');
    }

    data.accounts[index].balance = account.balance;

    await writeFile(global.fileName, JSON.stringify(data, null, 4));

    res.send(data.accounts[index]);
    logger.info(`${req.url} ${req.baseUrl} - ${JSON.stringify(account)}`);
  } catch (error) {
    next(error);
  }
});

router.use((err, req, res, next) => {
  //prettier-ignore
  logger.error(
    `${req.method} ${req.baseUrl}${req.url === '/' ? '' : req.url} - ${err.message}`);
  res.status(400).send({ error: err.message });
});

export default router;
