const path = require('path');
const pkg = require('./package.json');

const nodeModules = path.resolve(__dirname, '../../../node_modules');
const outputFolder = './build';

// SCSS includePaths
const includePaths = [nodeModules];

const banner = `${pkg.name} - ${pkg.version} Built on ${new Date().toISOString()}`;

module.exports = {
  styles: [
    {
      entry: path.resolve(__dirname, 'src/styles/ecl-grid-ec.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-grid-ec.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
      },
    },
    {
      entry: path.resolve(__dirname, 'src/styles/ecl-grid-eu.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-grid-eu.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
      },
    },
  ],
};