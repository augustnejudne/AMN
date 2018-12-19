const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // res.send('Hello, world!');
  res.send({ error: 'Error' });
});

app.get('/users', (req, res) => {
  res.send([
    { firstName: 'Kim', lastName: 'Nejudne', age: 30 },
    { firstName: 'Donna', lastName: 'Catubig', age: 27 },
    { firstName: 'Linus Cloud', lastName: 'Nejudne', age: 1 }
  ]);
});

app.listen('3000', () => {
  console.log('Listening on port: 3000');
});

module.exports = { app };
