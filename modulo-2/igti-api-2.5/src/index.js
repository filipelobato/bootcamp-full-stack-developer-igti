// Configurando, gerando e armazenando log
import express from 'express';
import winston from 'winston';

const app = express();
app.use(express.json());

const { combine, printf, label, timestamp } = winston.format;
// formato do log
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestampToDate(timestamp)} [${label}] ${level} : ${message}`;
});

const timestampToDate = (timestamp) => {
  console.log(timestamp);
  const dateObject = new Date(timestamp);
  return dateObject.toLocaleString('pt-BR', { timeZoneName: 'short' });
};

const timestampToDateString = (timestamp) => {
  console.log('asodkasodkasod');
  const dateObject = new Date(timestamp);
  return `${dateObject.getDate()}-${dateObject.getMonth()}-${dateObject.getFullYear()}`;
};

const logger = winston.createLogger({
  level: 'warn', // configurando que níveis serão loggados
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: `my-log-${timestampToDateString(+new Date())}.log`,
    }),
  ],
  format: combine(label({ label: 'my-app' }), timestamp(), myFormat),
});

app.get('/', (req, res) => {
  try {
    throw new Error('Erro ao tentar executar ação');
  } catch (error) {
    logger.error(error);
    res.status(500).send('Ocorreu um erro');
  }
});

app.listen(3000, () => {
  console.log('API Started...');
});
