const path = require('path');
const isProd = process.env.NODE_ENV === 'production';

let staticDirs = [];

if (!isProd) {
  staticDirs = [
    path.resolve(`${__dirname}/../src/components/ecl-expandable`),
    path.resolve(`${__dirname}/../src/components/ecl-accordion`),
    path.resolve(`${__dirname}/../src/components/ecl-icon`),
    path.resolve(`${__dirname}/../src/components/ecl-social-media-share`),
    path.resolve(`${__dirname}/../src/components/ecl-media-container`),
    path.resolve(`${__dirname}/../src/components/ecl-message`),
  ];
}

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/html',
  staticDirs,
  core: {
    builder: 'webpack5',
  },
  features: {
    postcss: false,
  },
};
