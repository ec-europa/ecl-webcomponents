# ECL Web-components

Repository for the implementation and distribution of ECL [Europa component library](https://ec.europa.eu/component-library) as vanilla web-components.
ECL web-components are written and compiled using [stencil.js](https://stenciljs.com/).

To quickly run the app:

```
git clone https://github.com/planctus/ecl-webcomponents

yarn (install packages)
yarn start (build stencil and watch files)
yarn dev (start storybook)
```

### Command reference

**generate** runs stencil generate  
**build** builds the application, including storybook  
**lint** runs stylelint on scss files and eslint on js files  
**test** Runs the prettier checks and the snapshot tests  
**build** builds the application, including storybook  
**start** builds stencil and watches files for changes  
**dev** starts storybook  
**pretty-check** Runs the checks by prettier  
**pretty-write** Fix the errors with prettier

#### ES Modules

```html
<html>
  <head>
    <script type="module" src="dist/ecl-webcomponents/ecl-webcomponents.esm.js"></script>
  </head>
</html>
```

### List of custom elements exported by the library

- `<ecl-icon>`
- `<ecl-button>`
- `<ecl-expandable>`
- `<ecl-accordion>`
