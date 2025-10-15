const path = require('path');
const pkg = require('./package.json');

const nodeModules = path.resolve(__dirname, './node_modules');

const outputFolder = './build';

// SCSS includePaths
const includePaths = [nodeModules];

const banner = `${pkg.name} - ${pkg.version} Built on ${new Date().toISOString()}`;

module.exports = {
  scripts: [
    {
      entry: path.resolve(nodeModules, '@ecl/accordion/accordion.js'),
      dest: path.resolve(outputFolder, 'scripts/ecl-accordion-vanilla.js'),
      options: {
        banner,
        format: 'iife',
        moduleName: 'ACCORDION',
        includePaths,
        sourceMap: false,
      },
    },
  ],
  styles: [
    {
      entry: path.resolve(__dirname, 'src/styles/ecl-accordion-ec.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-accordion-ec.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
        minify: true,
      },
    },
    {
      entry: path.resolve(__dirname, 'src/styles/ecl-accordion-item.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-accordion-item.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
        minify: true,
      },
    },
    {
      entry: path.resolve(__dirname, 'src/styles/ecl-accordion-eu.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-accordion-eu.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
        minify: true,
      },
    },
  ],
};
