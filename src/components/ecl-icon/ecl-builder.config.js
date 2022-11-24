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
  styles: [
    {
      entry: path.resolve(nodeModules, '@ecl/vanilla-component-icon/icon-ec.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-icon-ec.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
      },
    },
    {
      entry: path.resolve(nodeModules, '@ecl/vanilla-component-icon/icon-eu.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-icon-eu.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
      },
    },
  ],
};
