# ECL Web-components

Repository for the implementation and distribution of ECL [Europa component library](https://ec.europa.eu/component-library) as vanilla web-components.
ECL web-components are written and compiled using [stencil](https://stenciljs.com/).

To quickly run the app:

```
git clone https://github.com/planctus/ecl-webcomponents

yarn (install packages)
yarn start (build stencil and watch files)
yarn dev (start storybook)
```

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
yarn generate ecl-{component} (choose only the spec file)
```

This will create most of the files needed in src/components/ecl-{component}
The scss in src/styles normally "use" the theme (ec/eu) and the vanilla scss from ecl.

### Documentation

- Get more information [here](./docs/README.md)
