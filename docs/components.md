## The component package

The component is defined as a npm package, so it contains a `package.json` file but it's set as `private` because we don't plan to distribute the single components individually.

Still the `@ecl/` namespace should be used consistently throughout all packages for consistency, but only one package will be distributed with the name of `@ecl-webcomponents` and with all the needed filesystem on the [ECL npm organisation](https://www.npmjs.com/org/ecl).

## Naming and anatomy of a component

Examples:

- `@ecl/webcomponents-menu` - name of the package

- `/src/components/ecl-menu/ecl-menu.tsx` - Component in typescript
- `/src/components/ecl-menu/src/styles/ecl-menu-ec.scss` - Source sass file for EC
- `/src/components/ecl-menu/src/styles/ecl-menu-eu.scss` - Source sass file for EU

There will be only one css file built for EC and EU, stencil is capable of dynamically loading a css file based on a prop, which is called in ECL webcomponent "theme", and it can have `ec` or `eu` as values.
The configuration for this is in `/src/globals/global.ts`

This file system can be automatically generated (with additional files) by running:

```bash
yarn generate ecl-{component}
yarn generate:template ecl-{component}
```

The generated files are currently empty, except those created by stencil

```js
  styleUrls: {
    ec: './build/styles/ecl-accordion-ec.css',
    eu: './build/styles/ecl-accordion-eu.css',
  }
```

This is how the multiple css can be defined in the component decorator, ec is used by default but if the value of the `theme` attribute is EU the proper style will be loaded.
This is only possible in stencil by defining the styles as:
`scoped: true`

### What does scope do?

It is "simulating" shadowDom, scoping the css by adding selectors generated using the Prop to define the different themes to the html generated and the css injected.
This can be tricky do the approach we have about the [composability](decisions.md), a nested component style might not work due the mismatch of selectors, the component will generate a sc-ecl-{component}-{theme} class to the the html defined by the component, but a nested component will have a different class which is scoping that component, this is usually solvable by manually adding the:
`sc-ecl-{component}-{theme}` class to the nested custom element with a style-class attribute.

### scss files for the component

An ECL webcomponent is usually styled by compiling the "theme" scss file of EC and EU together with the sources sass file belonging to the ECL vanilla component.

```scss
@use '@ecl/theme-ec';

@use '@ecl/vanilla-component-blockquote/blockquote-ec';
```

This is usually enough, since the inner components potentially used will bring their own style, but there are issues due to the markup differences and the order in which these styles will be loaded, so that the style of a nested component will normally prevail on the component styles, which is problematic.
**It is then acceptable to fix potential issues with some additional css code to be placed in the source scss files of the web-component.**

### using the vanilla ECL js

The components needing javascript are using the vanilla js from the ECL package,

- define a `ecl-builder scripts` script in the component's `package.json`
- add a scripts key as an array in the `ecl-builder.config.js` file, like this:

```javascript
scripts: [
  {
    entry: path.resolve(nodeModules, '@ecl/vanilla-component-accordion/accordion.js'),
    dest: path.resolve(outputFolder, 'scripts/ecl-accordion-vanilla.js'),
    options: {
      banner,
      moduleName: 'ECL',
      includePaths,
      sourceMap: false,
    },
  },
];
```

Then in the component, define a `@Prop eclScript: boolean = false,` prop and use that to determine whether to load the js.
At the moment this property is always defined as `false`, so it's opt-in, this could change in the future.

```javascript
if (this.eclScript) {
  const src = getAssetPath('./build/scripts/ecl-accordion-vanilla.js');
  if (document.querySelector(`script[src="${src}"]`)) {
    document.querySelector(`script[src="${src}"]`).remove();
  }
  const script = document.createElement('script');
  script.src = src;
  script.onload = () => {
    const accordion = new ECL.Accordion(this.el);
    accordion.init();
  };
  document.body.appendChild(script);
}
```

This ensures that the script tag is created only if requested and if already present it will be replaced, the 'ECL' global object needs to be defined in the component, like this:

```typescript
declare const ECL: any;
```

if we have javascript in a component we also need to import the stencil component `Element` and define that as:

```typescript
@Element() el: HTMLElement;
```

right above the Props.

### Standard methods

We only have for the moment `getClass()`, that we use like this, styleClass is a `Prop` that we define for each component, can be used in the custom element as an attribute `style-class`.

```typescript
  getClass(): string {
    return [
      `ecl-accordion`,
      this.styleClass
    ].join(' ');
  }
```

### Lifecycle callbacks

Stencil defines additional methods in the lifecycle of a web-component defined by the Wep apis for [Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements):

- `componentWillLoad()`
- `componentDidLoad()`
- `componentWillRender()`
- `componentDidRender()`
- `componentShouldUpdate()`
- `componentWillUpdate()`
- `componentDidUpdate()`

Please refer to the [stencil documentation](https://stenciljs.com/docs/component-lifecycle) for a better understanding of this lifecycle, but at the moment only one method is used, and it's `componentDidRender()` which seems the most reliable for the operations we need to perform, loading a js and initialising a component and loading the utils css where potentially needed.
