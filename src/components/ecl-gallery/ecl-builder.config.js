const path = require('path');
const pkg = require('./package.json');

const nodeModules = path.resolve(__dirname, '../../../node_modules');
const outputFolder = './build';

// SCSS includePaths
const includePaths = [nodeModules];

const banner = `${pkg.name} - ${pkg.version} Built on ${new Date().toISOString()}`;

module.exports = {
  scripts: [
    {
      entry: path.resolve(nodeModules, '@ecl/vanilla-component-gallery/gallery.js'),
      dest: path.resolve(outputFolder, 'scripts/ecl-gallery-vanilla.js'),
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
      entry: path.resolve(__dirname, 'src/styles/ecl-gallery-ec.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-gallery-ec.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
        minify: true,
      },
    },
    {
      entry: path.resolve(__dirname, 'src/styles/ecl-gallery-eu.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-gallery-eu.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
        minify: true,
      },
    },
  ],
};
