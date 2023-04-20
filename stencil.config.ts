import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'ecl-webcomponents',
  globalScript: './src/globals/global.ts',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: 'packages/ecl-webcomponents/dist',
    },
    {
      type: 'dist-custom-elements',
      dir: 'packages/ecl-webcomponents/dist/custom-elements',
    },
    {
      type: 'docs-readme',
    },
    reactOutputTarget({
      componentCorePackage: '@ecl/ecl-webcomponents',
      proxiesFile: 'packages/ecl-webcomponents-react/lib/components/stencil-generated/index.ts',
    }),
  ],
};
