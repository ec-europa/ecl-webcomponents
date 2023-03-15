#!/usr/bin/env node

const replace = require('replace-in-file');
const { generate } = require('build-number-generator');
const getLatestVersion = require('get-latest-version');
const eclWebComponentsVersion = require('../lerna.json').version;

const inspectorScript = '<script src="../../ckeditor5/node_modules/@ckeditor/ckeditor5-inspector/build/inspector.js"></script>';
const inspector = 'CKEditorInspector.attach( editor );';

const buildNumber = generate();

getLatestVersion('ckeditor5')
  .then(version => {
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

    const disableInspector = {
      files: './build/playground/index.html',
      from: inspectorScript,
      to: `<!-- ${inspectorScript} -->`,
    };

    const disableInspectorCode = {
      files: './build/playground/index.html',
      from: inspector,
      to: `// ${inspector}`,
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

    try {
      replace.sync(disableInspector);
    } catch (error) {
      console.error('Error occurred:', error);
    }

    try {
      replace.sync(disableInspectorCode);
    } catch (error) {
      console.error('Error occurred:', error);
    }
  })
  .catch(err => console.error(err));
