const path = require('path');
const pkg = require('./package.json');

const nodeModules = path.resolve(__dirname, './node_modules');

const outputFolder = '../../../static/';

// SCSS includePaths
const includePaths = [nodeModules];

const banner = `${pkg.name} - ${pkg.version} Built on ${new Date().toISOString()}`;

module.exports = {
  styles: [
    {
      entry: path.resolve(__dirname, 'src/custom-properties-eu.scss'),
      dest: path.resolve(outputFolder, 'custom-properties-eu.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
        minify: true,
      },
    },
  ],
};
