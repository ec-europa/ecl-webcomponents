import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { stencilSSR } from '@stencil/ssr';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    stencilSSR({
      module: import('@ecl/ecl-webcomponents-react'),
      from: '@ecl/ecl-webcomponents-react',
      hydrateModule: import('@ecl/ecl-webcomponents-hydrate'),
      serializeShadowRoot: {
        'scoped': ['my-counter'],
        default: 'declarative-shadow-dom',
      },
    }),
  ],
  build: {
    assetsDir: 'build',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
});
