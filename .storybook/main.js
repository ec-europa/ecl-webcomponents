const path = require('path');
const isProd = process.env.NODE_ENV === 'production';

let staticDirs = [];

if (!isProd) {
  staticDirs = [
    path.resolve(
      `${__dirname}/../src/components/ecl-expandable`
    ),
    path.resolve(
      `${__dirname}/../src/components/ecl-accordion`
    ),
  ];
}

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  framework: "@storybook/html",
  staticDirs,
  core: {
    builder: 'webpack5',
  },
  features: {
    postcss: false,
  },
}