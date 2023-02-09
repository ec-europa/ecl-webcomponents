import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'ecl-webcomponents',
  globalScript: './src/globals/global.ts',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
  ],
};
