import express from 'express';

const app = express();

app.use(express.static('public'));
app.listen(3003, () => {
  console.log('3001 started!');
});
