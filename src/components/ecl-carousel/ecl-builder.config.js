const path = require('path');
const pkg = require('./package.json');

const nodeModules = path.resolve(__dirname, '../../../node_modules');
const outputFolder = './build';

// SCSS includePaths
const includePaths = [nodeModules];

const banner = `${pkg.name} - ${pkg.version} Built on ${new Date().toISOString()}`;

module.exports = {
  copy: [
    {
      from: [path.resolve(nodeModules, '@ecl/resources-ec-icons/dist/sprites/icons.svg')],
      to: path.resolve(outputFolder, 'images/ec'),
      options: { up: true },
    },
    {
      from: [path.resolve(nodeModules, '@ecl/resources-eu-icons/dist/sprites/icons.svg')],
      to: path.resolve(outputFolder, 'images/eu'),
      options: { up: true },
    },
  ],
  scripts: [
    {
      entry: path.resolve(nodeModules, '@ecl/vanilla-component-carousel/carousel.js'),
      dest: path.resolve(outputFolder, 'scripts/ecl-carousel-vanilla.js'),
      options: {
        banner,
        moduleName: 'ECL',
        includePaths,
        sourceMap: false,
      },
    },
  ],
  styles: [
    {
      entry: path.resolve(__dirname, 'src/styles/ecl-carousel-ec.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-carousel-ec.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
      },
    },
    {
      entry: path.resolve(__dirname, 'src/styles/ecl-carousel-eu.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-carousel-eu.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
      },
    },
    {
      entry: path.resolve(__dirname, 'src/styles/ecl-utilities-ec.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-utilities-ec.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
      },
    },
    {
      entry: path.resolve(__dirname, 'src/styles/ecl-utilities-eu.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-utilities-eu.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
      },
    },
  ],
};
