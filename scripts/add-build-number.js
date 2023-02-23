#!/usr/bin/env node

const replace = require('replace-in-file');
const { generate } = require('build-number-generator');
const ckeditorVersion = require('../ckeditor5/package.json').version;
const eclWebComponentsVersion = require('../package.json').version;

const buildNumber = generate();

const build = {
  files: './build/playground/index.html',
  from: /{####}/g,
  to: buildNumber,
};

const ck = {
  files: './build/playground/index.html',
  from: /{!!!!}/g,
  to: ckeditorVersion,
};

const eclWc = {
  files: './build/playground/index.html',
  from: /{----}/g,
  to: eclWebComponentsVersion,
};

try {
  replace.sync(build);
} catch (error) {
  console.error('Error occurred:', error);
}

try {
  replace.sync(ck);
} catch (error) {
  console.error('Error occurred:', error);
}

try {
  replace.sync(eclWc);
} catch (error) {
  console.error('Error occurred:', error);
}
