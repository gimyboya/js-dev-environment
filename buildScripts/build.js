/* eslint-disable no-console */
import webpack from 'webpack';
import chalk from 'chalk';
import webpackConfigProd from '../webpack.config.prod';

process.env.NODE_ENV = 'production';

console.log(chalk.yellow('Minifing for production...'));

webpack(webpackConfigProd).run((err, stats) => {
  if (err) {
    console.log(chalk.red(err));
    return -1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(chalk.red(error)));
  }

  if (jsonStats.hasWarnings) {
    console.log(chalk.orange('Webpack generated the following warnings: '));
    jsonStats.errors.map(warning => console.log(chalk.orange(warning)));
  }

  console.log(`Webpack status: ${stats}`);

  console.log(chalk.green("The App is build for production in the '/dist' folder"));
  return 0;
});
