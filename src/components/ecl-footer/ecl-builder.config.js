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
  styles: [
    {
      entry: path.resolve(__dirname, 'src/styles/ecl-footer-ec.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-footer-ec.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
      },
    },
    {
      entry: path.resolve(__dirname, 'src/styles/ecl-footer-eu.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-footer-eu.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
      },
    },
  ],
};
