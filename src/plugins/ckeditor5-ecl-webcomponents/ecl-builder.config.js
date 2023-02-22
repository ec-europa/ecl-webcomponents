const path = require('path');
const pkg = require('./package.json');

const root = path.resolve(__dirname, '../../../');

module.exports = {
  copy: [
    {
      from: [path.resolve(__dirname, 'src/ckeditor.js')],
      to: path.resolve(root, 'ckeditor5/packages/ckeditor5-build-classic/src/'),
      options: { up: true },
    },
    {
      from: [path.resolve(__dirname, 'theme/icons/default.svg')],
      to: path.resolve(root, 'ckeditor5/packages/ckeditor5-build-classic/src/icons/'),
      options: { up: true },
    },
  ],
};
