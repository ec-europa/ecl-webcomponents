const path = require('path');
const pkg = require('./package.json');

const nodeModules = path.resolve(__dirname, './node_modules');
const outputFolder = './build';

const includePaths = [nodeModules];

const banner = `${pkg.name} - ${pkg.version} Built on ${new Date().toISOString()}`;

module.exports = {
  styles: [
    {
      entry: path.resolve(__dirname, 'src/styles/ecl-slogan-ticker-ec.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-slogan-ticker-ec.css'),
      options: { banner, includePaths, sourceMap: false },
    },
    {
      entry: path.resolve(__dirname, 'src/styles/ecl-slogan-ticker-eu.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-slogan-ticker-eu.css'),
      options: { banner, includePaths, sourceMap: false },
    },
  ],
};
