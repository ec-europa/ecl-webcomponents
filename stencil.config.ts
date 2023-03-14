import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'ecl-webcomponents',
  globalScript: './src/globals/global.ts',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: 'ecl-webcomponents/dist',
    },
    {
      type: 'dist-custom-elements',
      dir: 'ecl-webcomponents/dist',
    },
    {
      type: 'docs-readme',
    },
  ],
};
