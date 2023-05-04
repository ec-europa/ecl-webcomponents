const path = require('path');
const pkg = require('./package.json');

const nodeModules = '../../../node_modules';
const outputFolder = './build';

// SCSS includePaths
const includePaths = [nodeModules];

const banner = `${pkg.name} - ${pkg.version} Built on ${new Date().toISOString()}`;

module.exports = {
  copy: [
    {
      from: [`${nodeModules}/@ecl/resources-ec-logo/dist/**/*.svg`],
      to: path.resolve(outputFolder, 'images/ec/logos'),
      options: { up: 7 },
    },
    {
      from: [`${nodeModules}/@ecl/resources-eu-logo/dist/**/*.svg`],
      to: path.resolve(outputFolder, 'images/eu/logos'),
      options: { up: 7 },
    },
  ],
  scripts: [
    {
      entry: path.resolve(nodeModules, '@ecl/vanilla-component-site-header/site-header.js'),
      dest: path.resolve(outputFolder, 'scripts/ecl-site-header-vanilla.js'),
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
      entry: path.resolve(__dirname, 'src/styles/ecl-site-header-ec.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-site-header-ec.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
      },
    },
    {
      entry: path.resolve(__dirname, 'src/styles/ecl-site-header-eu.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-site-header-eu.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
      },
    },
  ],
};
