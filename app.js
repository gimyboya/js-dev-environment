const express = require('express');

const app = express();

const port = 5000;


app.use(express.static('public'));

app.use(express.static('src/views'));


app.get('/', (req, res) => {
  res.send('hello wolrd');
});

app.get('/books', (req, res) => {
  res.send('hello books');
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`running server on port ${port}`);
  }
});
