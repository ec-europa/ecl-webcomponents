import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'ecl-webcomponents',
  globalScript: './src/globals/global.ts',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: 'packages/ecl-webcomponents/dist',
      copy: [
        { src: '../static/build', dest: 'build' },
        { src: '../src/globals/ecl-webcomponents.bridge.js', dest: 'ecl-webcomponents.bridge.js' },
      ],
    },
    {
      type: 'dist-custom-elements',
      dir: 'packages/ecl-webcomponents/dist/custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    reactOutputTarget({
      componentCorePackage: '@ecl/ecl-webcomponents',
      proxiesFile: 'packages/ecl-webcomponents-react/lib/components/stencil-generated/index.ts',
    }),
    angularOutputTarget({
      componentCorePackage: '@ecl/ecl-webcomponents',
      directivesProxyFile: 'packages/ecl-webcomponents-angular-workspace/projects/ecl-webcomponents-angular/src/lib/stencil-generated/components.ts',
      directivesArrayFile: 'packages/ecl-webcomponents-angular-workspace/projects/ecl-webcomponents-angular/src/lib/stencil-generated/index.ts',
    }),
    vueOutputTarget({
      componentCorePackage: '@ecl/ecl-webcomponents',
      proxiesFile: 'packages/ecl-webcomponents-vue/lib/components.ts',
    }),
    {
      type: 'dist-hydrate-script',
      dir: './packages/ecl-webcomponents-hydrate/dist',
    },
  ],
  extras: {
    enableImportInjection: true, //https://github.com/storybookjs/storybook/issues/25704
  },
};
