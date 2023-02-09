## What to do when you need to modify an ECL package?

In some cases, due to the markup differences or because of the presence of slots the vanilla styles or scripts might not perfectly work or don't work at all, in specific cases you might want to "patch" an ECL vanilla component file to make it work.
This should be limited as much as possible, but in some cases it's really needed, because the vanilla js might be doing things in a way that doesn't work in the web-component but it's easy to identify a different way that would work both for the vanilla ECL components and the webcomponents defined in this library.

## How to patch a package?

Make the needed modifications to the files in node_modules and run:

```bash
yarn patch {nameOfThePackage}
```

## How are the patches applied?

Simply running yarn is also applying the patches defined in the `patches` folder.

## How are these patches maintained?

They shouldn't, as soon as possible the patches generated should be evaluated at the ECL level.
Let's assume that whenever a patch is added in ECL webcomponents a ticket will be created in the ECL jira in order to evaluate it.

## When can a patch be removed?

If the patch gets accepted in the ECL repository, once ECL will release this new code the patch can be safely removed after updating the ECL dependency.
