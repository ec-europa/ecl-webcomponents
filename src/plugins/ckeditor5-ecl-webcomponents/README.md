# ckeditor5-ecl-webcomponents

## About

This is a plugin for [ckeditor 5](https://github.com/ckeditor/ckeditor5). It allows to add ECL webcomponents in the editor.

## Install

Install using NPM:

`npm install @ecl/ckeditor5-ecl-webcomponents`

To add the functionality of this plugin you should make a custom build of the editor. Follow the instructions [here](https://docs.ckeditor.com/ckeditor5/latest/builds/guides/development/installing-plugins.html).

The plugin comes with an example ckeditor.js that you can use replacing the file in the ckeditor filesystem at packages/ckeditor-build-classic/src/ckeditor.js, it adds the ECL dropdown in the toolbar and enables the source code plugin, for the rest it uses the same configuration in the standard classic editor.

## Use

The plugin is in early stage of development, the usage in a production environment is not recommended.
It is currently showcased in the ECL webcomponents website at: https://ecl-webcomponents.netlify.app/playground where you can play with it and see its capabilities.
