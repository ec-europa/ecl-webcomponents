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
      entry: path.resolve(__dirname, 'src/styles/ecl-spinner-ec.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-spinner-ec.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
        minify: true,
      },
    },
    {
      entry: path.resolve(__dirname, 'src/styles/ecl-spinner-eu.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-spinner-eu.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
        minify: true,
      },
    },
  ],
};
