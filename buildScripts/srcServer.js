import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import webpackConfigDev from '../webpack.config.dev';

const port = 3000;
const app = express();
const bundler = webpack(webpackConfigDev);

app.use(require('webpack-dev-middleware')(bundler, {
  publicPath: webpackConfigDev.output.publicPath,
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', (req, res) => {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    { id: 1, firstName: 'Bob', lastName: 'Smith', email: 'bob@gmail.com' },
    { id: 2, firstName: 'Tammy', lastName: 'Norton', email: 'tnorton@yahoo.com' },
    { id: 3, firstName: 'Tina', lastName: 'Lee', email: 'lee.tina@hotmail.com' },
  ]);
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});

