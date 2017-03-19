import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import webpackConfigDev from '../webpack.config.dev';

const port = 3000;
let app = express();
let bundler = webpack(webpackConfigDev);

app.use(require('webpack-dev-middleware')(bundler, {
    publicPath: webpackConfigDev.output.publicPath
}));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
    if(err){
        console.log(err);
    }else{
        open('http://localhost:' + port);
    }
});

