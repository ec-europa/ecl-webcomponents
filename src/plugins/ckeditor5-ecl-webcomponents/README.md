# ckeditor5-ecl-webcomponents

[![npm version](https://badge.fury.io/js/ckeditor5-ecl-webcomponents.svg)](https://badge.fury.io/js/ckeditor5-ecl-webcomponents)
[![Dependency Status](https://david-dm.org/centaur54dev/ckeditor5-ecl-webcomponents/status.svg)](https://david-dm.org/centaur54dev/ckeditor5-ecl-webcomponents)
[![devDependency Status](https://david-dm.org/centaur54dev/ckeditor5-ecl-webcomponents/dev-status.svg)](https://david-dm.org/centaur54dev/ckeditor5-ecl-webcomponents?type=dev)

## About

This is a plugin for [ckeditor 5](https://github.com/ckeditor/ckeditor5). It allows to add custom elements in the editor. The html conversion of the created elements looks like this:

```
	<CustomTag>placeholder text</CustomTag>
```

## Install

Install using NPM:

`npm install ckeditor5-ecl-webcomponents`

To add the functionality of this plugin you should make a custom build of the editor. Follow the instructions [here](https://docs.ckeditor.com/ckeditor5/latest/builds/guides/development/installing-plugins.html).

To load the plugin, configure ckeditor (e.g. edit file `ckeditor.js`) like this:

#### Import plugin

```
import EclPlugin from 'ckeditor5-ecl-webcomponents/src/ecl_webcomponents';
```

#### Import toolbar icons (optional)

```
import Icon1 from 'path-to-icon/iconfile.svg';
```

#### Configure plugin

Assuming that the build is based on Classic Editor:

```
export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	...
	EclPlugin,
	...
],

ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			...
			'ecl-webcomponents-tagname1',
			'ecl-webcomponents-tagname2',
			...
			]
	},

	EclWebcomponents:{
		items:[
			{tag: 'tagname1', placeholder: 'some text',
					attributes:{name:'ABCD'}, icon:Icon1,
					inline:false, editable:false},
			{tag: 'tagname2'},
			...
		]
	},

	...OTHER OPTIONS
};

```

_Note: the toolbar item names should have the format: `ecl-webcomponents-tagname`, where `tagname` should be replaced by the respective tag of the custom element, the button is going to insert._

## Custom element(s) options

The elements can be customized through the CustomElement object that is passed to the editor, as shown above. Many different custom elements can be defined. The following options are available for each one:

- `tag` : (string) the tag name for the created custom elements,
- `placeholder` : (optional)(string) the text to be displayed inside the custom element (as a text node). If missing, the tag name is displayed,
- `attributes`: (optional)(object) any attributes for the created custom elements,
- `icon`: (optional)(icon object) icon for the respective toolbar button. If missing, a default icon is used that looks like this: [#],
- `inline`: (optional)(boolean) if true, the custom element can be nested within other blocks (e.g. between text), othrewise it is placed only as a root element. Defaults to false,
- `editable`: (optional)(boolean) if true, the text inside the custom element can be modified. Defaults to false.

## Use

For the time being only addition of custom elements is implemented. If you want to replace a custom element with another, delete first.
