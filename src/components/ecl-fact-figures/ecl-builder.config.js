const path = require('path');
const pkg = require('./package.json');

const nodeModules = path.resolve(__dirname, './node_modules');
const outputFolder = './build';

// SCSS includePaths
const includePaths = [nodeModules];

const banner = `${pkg.name} - ${pkg.version} Built on ${new Date().toISOString()}`;

module.exports = {
  styles: [
    {
      entry: path.resolve(__dirname, 'src/styles/ecl-fact-figures-ec.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-fact-figures-ec.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
      },
    },
    {
      entry: path.resolve(__dirname, 'src/styles/ecl-fact-figures-eu.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-fact-figures-eu.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
      },
    },
    {
      entry: path.resolve(__dirname, 'src/styles/ecl-fact-figures-item-ec.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-fact-figures-item-ec.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
      },
    },
    {
      entry: path.resolve(__dirname, 'src/styles/ecl-fact-figures-item-eu.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-fact-figures-item-eu.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
      },
    },
  ],
};
