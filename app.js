const express = require('express');

const app = express();

const port = 3000;


app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendfile('./public/index.html');
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
