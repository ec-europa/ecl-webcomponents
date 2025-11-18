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
      entry: path.resolve(nodeModules, '@ecl/page-header/page-header-expandable.js'),
      dest: path.resolve(outputFolder, 'scripts/ecl-page-header-expandable-vanilla.js'),
      options: {
        banner,
        format: 'iife',
        moduleName: 'PAGEHEADER',
        includePaths,
        sourceMap: false,
      },
    },
  ],
  styles: [
    {
      entry: path.resolve(__dirname, 'src/styles/ecl-page-header-ec.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-page-header-ec.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
        minify: true,
      },
    },
    {
      entry: path.resolve(__dirname, 'src/styles/ecl-page-header-eu.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-page-header-eu.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
        minify: true,
      },
    },
  ],
};
