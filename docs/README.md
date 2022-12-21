## What is ECL webcomponents?

ECL webcomponents is an implementation of the vanilla [ECL](https://github.com/ec-europa/europa-component-library) components as vanilla web-components.
All the available resources in ECL will be used to build the web-components, retrieving styles, scripts, resources like icons from the ECL packages and then used to produce the needed bundle for a specific component.
This means that ECL webcomponents have dependencies on the ECL pacakges, therefore a package version need to be released before it can be used in this library.
The components are written in typescript, using [stencil.js](https://stencil.js) and then bundled as vanilla webcomponents.

## Where can i find the source code of ECL webcomponents?

ECL webcomponents is on [github](https://github.com/planctus/ecl-webcomponents), at the moment as a private repository, will be then moved in the ec-europa organisation in github and it will be public.

## What is the ECL webcomponents website?

The library uses [storybook](https://storybook.js.org/) as a UI development tool and as a website to showcase the components.
The showcase includes controls to interact with the component and explore all the available features.
The master branch is deployed on https://ecl-webcomponents.netlify.app/

## How is ECL webcomponents distributed?

The library is distributed on npm, in the `@ecl` organisation, as a single package named `@ecl/webcomponents`.
The distributed package contains all that is needed, including resources like images, icons, scripts, styles.
The main entrypoint for the library is a single js, in `dist/ecl-webcomponents/ecl-webcomponents.esm.js` which enables
the usage of any of the custom elements exported, but only the ones really used will be loaded.
**This distribution might not be ideal for angular, since it would probably expect all the js to be statically defined**

## Where can ECL webcomponents be used?

Everywhere the ECL visual identity needs to be used and there is javascript available, basically.
Vanilla web-components are widely supported, only old browser might not be capable of using them, for this polyfills exists,
but at the moment there is no clear definition of the browsers to support.

## Doc pages

- [decisions](./decisions.md)
- [components](./components.md)
- [developing](./developing.md)
- [patches](./patches.md)
