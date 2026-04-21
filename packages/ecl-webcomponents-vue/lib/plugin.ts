import { Plugin } from 'vue';
import { defineCustomElements } from '@ecl/ecl-webcomponents/loader/index.js';

export const ComponentLibrary: Plugin = {
  async install() {
    defineCustomElements();
  },
};