import express from 'express';
import accountsRouter from './routes/accounts.js';
import { promises as fs } from 'fs';
import winston from 'winston';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { swaggerDocument } from './doc.js';

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestampToDate(timestamp)} [${label}] ${level} : ${message}`;
});

const timestampToDate = (timestamp) => {
  const dateObject = new Date(timestamp);
  return dateObject.toLocaleString('pt-BR', { timeZoneName: 'short' });
};

const timestampToDateString = (timestamp) => {
  const dateObject = new Date(timestamp);
  return formatarDataString(dateObject);
};

const formatarDataString = (data) => {
  const dia = data.getDate().toString().padStart(2, '0');
  const mes = data.getMonth().toString().padStart(2, '0');
  const ano = data.getFullYear().toString().padStart(4, '0');
  return `${dia}-${mes}-${ano}`;
};

global.logger = winston.createLogger({
  level: 'silly',
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: `my-bank-api-${timestampToDateString(+new Date())}.log`,
    }),
  ],
  format: combine(label({ label: `my-bank-api` }), timestamp(), myFormat),
});

const { readFile, writeFile } = fs;

global.fileName = 'accounts.json';

const corsOptions = {
  origin: ['http://localhost:3001', 'http://localhost:3002'],
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.static('public'));
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/accounts', accountsRouter);

app.listen(3000, async () => {
  // verificar se arquivo existe
  try {
    await readFile('accounts.json');
    logger.info('API Started...');
  } catch (error) {
    const initialJson = {
      nextId: 1,
      accounts: [],
    };
    writeFile('accounts.json', JSON.stringify(initialJson, null, 4))
      .then(() => {
        logger.info('File created succeful');
      })
      .catch((err) => {
        logger.error(err);
      });
  }
});
