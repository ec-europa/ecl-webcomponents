### Vanilla web-component versus framework, library, tool

We started implementing ECL components as vanilla web-components from scratch, using the Web apis directly, developing like this was time demanding and producing a certain amount of code for each component without preparing for any distribution of those web-components, browser compatibility, polyfill.
We then switched to [stencil.js](https://stencil.js) that Piotr Nowak suggested us, ecl-webcomponents started as an investigation using the [POC](https://github.com/pnowak2/eui-ecl-webcomponents/tree/master/src/components) that he made.

So, [Stencil.js](https://stenciljs.com/) is used to compile our typescript files into vanilla web components.
Please refer to the documentation of this project, particularly about the available lifecycle methods.
Generally speaking this tool has been chosen because:

- it simplifies the writing of the component source
- it has builtin configs for rollup that simplify the distribution of the library in different formats
- the initial setup will mainly focus on releasing the library as such, using the lazy loading feature of stencil.js, in the future other bundle types might be introduced if needed.

## Light dom versus shadow dom

The current approach used in ECL webcomponents is to use the light dom with:
`shadow: false`
this way the returned value of the `render()` method will be inserted into the custom element defined by the webcomponent, in the light dom.
At the same time a slot is usually present in the component in all those cases where we might expect html code, and the slot is just a placeholder where the "content" of the webcomponent would be inserted.
The slot is the way used in ECL webcomponents to handle data coming from the user, html attributes are just strings, with slots we can ensure that the user will be able to inject also markup, instead.
Multiple slots with specific names can be present in a component in case there are different expected data from the user that could contain markup.

### Don't use Host

We decided to step away from the usage of `Host` as the root element of our components, which was how it was done in the POC we started from, using the custom element directly as the root of the component.
This means that we will reproduce the entire html of a component inside the custom element, but this has the consequence that our `Element` is not the root of the ECL component anymore, when initialising the component js we do need `this.el.firstElementChild` as the element to be passed in the class instantiation, for instance.

### Composability

The library is built as a component library, where "atoms" are defined and reused everywhere they are needed, similarly to the way these are defined and implemented using twig on ECL.
Custom elements can be nested as normal html, so we end up with a potential complex structure of dependencies between the different components, and a complex markup reproduced by blocks represented by the nested custom elements.
This can generate problems related to the styling, the html structure might not be the same due to the presence of the custom-elements.
The system of the dependencies of a component is automagically reported in the readme.md file generated and managed by stencil.js, do not touch those files manually.

Example:

```
<ecl-expandable>
	<ecl-button>
		<ecl-icon></ecl-icon>
	</ecl-button>
</ecl-expandable>
```

### Lists

Html lists are problematic in our scenario, because we would like to have the main component generating a <ul> and a child component dedicated to the single item, so a <li>, but there is the custom-element defining the component in between.
Two approaches have been used until now:

- social-media-share is an example where a complex attribute value is used to get the full list of items and with a single template rendering the whole list.
- in file instead, particularly in the file-translations.tsx template a different approach has been used to be still able to separate the list from the items, what happens in this case is that the markup generated is cleaned by a js that we run:

```javascript
const translations = this.el.querySelectorAll('.ecl-file__translation-item');
this.el.querySelector('.ecl-file__translation-list').innerHTML = '';
this.el.querySelector('.ecl-file__translation-list').append(...translations);
```

We empty the container and we fill it with the elements we need, the container is the <ul> and the items are the <li>
