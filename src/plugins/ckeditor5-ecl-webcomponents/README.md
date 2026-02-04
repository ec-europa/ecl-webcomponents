# ckeditor5-ecl-webcomponents

## About

This is a plugin for [ckeditor 5](https://github.com/ckeditor/ckeditor5). It allows to add ECL webcomponents in the editor.

## Install

Install using NPM:

`npm install @ecl/ckeditor5-ecl-webcomponents`

This plugin needs to be plugged into the configuration of a ckeditor instance.
Typically an import of the different parts of this plugin would look like this:

`import EclWebComponentsPlugin, { ECL_MAIN_TOOLBAR, ECL_BLOCK_TOOLBAR, DEFAULT_ECL_CONFIG } from '@ecl/ckeditor5-ecl-webcomponents';`

- The plugin needs to added to the `plugins` array
- The configuration can be provided like this:
  `CustomElement: {
  items: DEFAULT_ECL_CONFIG,
}`
- the element of the toolbar can be added in the toolbar array, it will add an ECL button
  `...ECL_MAIN_TOOLBAR`

## Use

The plugin is in early stage of development, the usage in a production environment is not recommended.
It is currently showcased in the ECL webcomponents website at: https://ecl-webcomponents.netlify.app/playground where you can play with it and see its capabilities.
