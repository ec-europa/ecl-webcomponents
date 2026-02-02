# ECL Web-components

Repository for the implementation and distribution of ECL [Europa component library](https://ec.europa.eu/component-library) as vanilla web-components.
ECL web-components are written and compiled using [stencil](https://stenciljs.com/).

To quickly run the app:

```
git clone https://github.com/planctus/ecl-webcomponents

pnpm (install dependencies and run prepublish script in the packages
pnpm start (build stencil and watch files)
pnpm dev (start storybook)
```

### Usage

Depending on the technology used the right package can be selected and fetched from npm.
For the react and angular wrappers the consumer apps in this repository can be used as a reference for a basic usage of the library, here we refer to the vanilla webcomponents:

- Fetch the npm package `@ecl/ecl-webcomponents`
- Move the folder `dist/ecl-webcomponents` where it can be served as assets in your website or app.
- The library has two themes, `ec` and `eu`, it expects a `data-ecl-theme` attribute set on the `<html>` tag (or any `document.documentElement`) with one these two values, otherwise it will use `ec` by default.
- Load `ecl-webcomponents.bridge.js` and `ecl-webcomponents.esm.js`
  The first one is taking care of loading the global resources like the css custom properties and an additional css in ec for the `color modes`, the second is taking care of lazy loading the webcomponents registering the custom elements and making them available.

### Command reference

**generate** ecl-{component} runs stencil generate and generates empty files
**build** builds the application, including storybook  
**lint** runs stylelint on scss files and eslint on js files  
**test** Runs the prettier checks and the snapshot tests  
**test:update** Updates the snapshots  
**start** builds stencil and watches files for changes  
**dev** starts storybook  
**pretty-check** Runs the checks by prettier  
**pretty-write** Fix the errors with prettier

### Adding a new component

```
pnpm generate ecl-{component} (choose only the spec file)
```

This will create most of the files needed in src/components/ecl-{component}
The scss in src/styles normally "use" the theme (ec/eu) and the vanilla scss from ecl.

### React and angular wrappers

**build:react** Builds the react wrappers
**build:react-consumer** Builds the react consumer app
**build:angular** Builds the angular wrappers and consumer app
**dev-react** Launches the react consumer app
**dev-angular** Launches the angular consumer app

### Assets

Due to a bug in stencil.js the getAssetPath() helper it provides has been replaced in ecl-webcomponents and it expects a
`<meta data-ecl-asset-path="/" />` to be defined in the head or a `__ECL_ASSET_PATH__` variable set on the window object.
Assets will then be resolved from that path, typically our assets are in build/images/... so defining the data-ecl-asseth-path will
generate requests at /build/images...

### Ckeditor plugin

**dev-playground"** It starts a simple app with a build of ckeditor including the plugin, changes are immediately applied.
**plugins:make** Builds the plugin
**build:playground** Builds the playground

### Npm packages

- @ecl/ecl-webcomponents - ECL webcomponents package
- @ecl/ecl-webcomponents-react - Ecl webcomponents for React
- @ecl/ecl-webcomponents-angular - Ecl webcomponents for Angular
- @ecl/ckeditor5-ecl-webcomponents - Ckeditor 5 plugin for ECL Webcomponents

### Documentation

- Get more information [here](./docs/README.md)
