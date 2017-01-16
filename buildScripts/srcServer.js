var express = require('express');
import path  from 'path';
import open  from 'open';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.development';

const port = 3000;
const app = express();
const webpackCompiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(webpackCompiler, {
    noInfo: true,
    publicPath: webpackCompiler.output.publicPath
}));

app.get('/', function(request, response){
response.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
if(err){
    console.log(err);
}else{
    open('http://localhost:'+ port)
}
});