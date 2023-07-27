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
      from: [path.resolve(nodeModules, '@ecl/resources-social-media-icons/dist/sprites/icons-social-media.svg')],
      to: path.resolve(outputFolder, 'images/ec'),
      options: { up: true },
    },
    {
      from: [path.resolve(nodeModules, '@ecl/resources-social-media-icons/dist/sprites/icons-social-media.svg')],
      to: path.resolve(outputFolder, 'images/eu'),
      options: { up: true },
    },
    {
      from: [path.resolve(nodeModules, '@ecl/resources-ec-icons/dist/sprites/icons.svg')],
      to: path.resolve(outputFolder, 'images/ec'),
      options: { up: true },
    },
    {
      from: [path.resolve(nodeModules, '@ecl/resources-eu-icons/dist/sprites/icon.svg')],
      to: path.resolve(outputFolder, 'images/eu'),
      options: { up: true },
    },
  ],
  styles: [
    {
      entry: path.resolve(__dirname, 'src/styles/ecl-icon-ec.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-icon-ec.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
        minify: true,
      },
    },
    {
      entry: path.resolve(__dirname, 'src/styles/ecl-icon-eu.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-icon-eu.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
        minify: true,
      },
    },
  ],
};
