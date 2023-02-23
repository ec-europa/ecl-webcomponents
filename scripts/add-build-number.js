#!/usr/bin/env node

const replace = require('replace-in-file');
const { generate } = require('build-number-generator');
const getLatestVersion = require('get-latest-version');
const eclWebComponentsVersion = require('../package.json').version;

const buildNumber = generate();

getLatestVersion('ckeditor5')
  .then(version => {
    console.log(version);
    const build = {
      files: './build/playground/index.html',
      from: /{####}/g,
      to: buildNumber,
    };

    const ck = {
      files: './build/playground/index.html',
      from: /{!!!!}/g,
      to: version,
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
  })
  .catch(err => console.error(err));
